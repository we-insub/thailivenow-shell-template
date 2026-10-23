import transportDateObservations from '../../data/site-date-observations.json' with {type:'json'};
import {parse,serialize} from 'parse5';
import related from '../data/transport-related-route-map.json' with {type:'json'};
import {transportRoute,transportLanguageTags,transportLanguagePaths,translateTransportText,transportHref,localizeTransportData,transportPageLocale} from './transport-localization-core.mjs';
export * from './transport-localization-core.mjs';
// Vite replaces the call at build time, but does not replace a typeof guard on
// import.meta.glob. A runtime guard would silently discard every dictionary in
// the production bundle. The catch supports direct Node-only regression tests.
const modules=(()=>{try{return import.meta.glob('../data/transport-locales/*.json',{eager:true,import:'default'});}catch{return {};}})();
export function transportDictionary(locale){
 const data=modules[`../data/transport-locales/${locale}.json`]?.strings||{};
 const ui=modules[`../data/transport-locales/ui-${locale}.json`]?.strings||{};
 const supplement=modules[`../data/transport-locales/supplement-${locale}.json`]?.strings||{};
 return dictionaries[locale]??=(Object.freeze({...data,...ui,...supplement}));
}
const dictionaries={};
export const transportText=(value,locale)=>translateTransportText(value,transportDictionary(locale));
export function transportFormat(source,params,locale='ko'){const dictionary=transportDictionary(locale);let target=locale==='ko'?source:dictionary[source]||source;const names=value=>[...value.matchAll(/\$\{([^}]+)\}/g)].map(match=>match[1]).sort().join('|');if(names(source)!==names(target))target=source;return target.replace(/\$\{([^}]+)\}/g,(_,name)=>{if(!Object.hasOwn(params,name))throw Error(`Missing transport format parameter: ${name}`);return transportText(String(params[name]),locale);});}
export function transportTagged(locale='ko'){return (parts,...values)=>{const source=parts.reduce((text,part,i)=>text+(i?'${v'+(i-1)+'}':'')+part,'');return transportFormat(source,Object.fromEntries(values.map((value,i)=>['v'+i,value])),locale);};}
export const relatedTransportHref=(path,locale)=>related[path]?.[locale];
export const transportData=(value,locale)=>localizeTransportData(value,locale,transportDictionary(locale),relatedTransportHref);
function set(node,name,value){const existing=node.attrs.find(a=>a.name===name);if(existing)existing.value=value;else node.attrs.push({name,value});}
export function applyTransportLocalization(html,pathname,options={}){
 const entry=transportRoute(pathname),locale=transportPageLocale(pathname);
 if(!entry||locale==='ko')return html;
 const dictionary=options.dictionary||transportDictionary(locale),root=parse(html,{scriptingEnabled:false});
 const sourcePath='/ko/transport/'+(entry.canonicalSuffix?entry.canonicalSuffix+'/':'');
 const checkedOn=transportDateObservations.pages?.[sourcePath]?.sourceCheckedOn||null;
 const localize=value=>{if(Array.isArray(value))return value.map(localize);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,key==='inLanguage'?transportLanguageTags[locale]:localize(item)]));return localizeTransportData(value,locale,dictionary,relatedTransportHref);};
 function visit(node){
  // Locale switch destinations are already authored by DetailHeader. Preserve
  // the Korean destination and each language's self-name in this subtree.
  if(/(?:^|\s)language-picker(?:\s|$)/.test(node.attrs?.find(a=>a.name==='class')?.value||''))return;
  // Pilot source lists contain clipped collection-session notes after the link.
  // Preserve the original evidence in the source manuscripts; public reference
  // lists use concise source names and the exact original URL (editorial MD).
  if(node.tagName==='li'){
   let parent=node.parentNode,sourceList=false;
   while(parent){const cls=parent.attrs?.find(a=>a.name==='class')?.value||'';if(/(?:^|\s)(?:sources|source-fold)(?:\s|$)/.test(cls)){sourceList=true;break;}parent=parent.parentNode;}
   const anchor=node.childNodes?.find(child=>child.tagName==='a');
   if(sourceList&&anchor){const rest=node.childNodes.slice(node.childNodes.indexOf(anchor)+1);if(rest.some(child=>child.nodeName==='#text'&&/^\s*—/.test(child.value))){node.childNodes=[anchor];const href=anchor.attrs?.find(a=>a.name==='href')?.value;try{const url=new URL(href);const path=url.pathname.split('/').filter(Boolean).at(-1);anchor.childNodes=[{nodeName:'#text',value:url.hostname.replace(/^www\./,'')+(path&&!['eng','en','index.html'].includes(path)?' · '+decodeURIComponent(path):''),parentNode:anchor}];}catch{}}}
  }
  if(node.tagName==='html'){set(node,'lang',transportLanguageTags[locale]);set(node,'data-locale',locale);}
  if(node.tagName==='style')return;
  if(node.tagName==='script'){
   const type=node.attrs.find(a=>a.name==='type')?.value;
   if(type==='application/ld+json')try{const schema=localize(JSON.parse(node.childNodes[0].value));const language=value=>{if(Array.isArray(value))value.forEach(language);else if(value&&typeof value==='object'){if(value.inLanguage==='ko'||value.inLanguage==='ko-KR')value.inLanguage=transportLanguageTags[locale];Object.values(value).forEach(language);}};language(schema);node.childNodes[0].value=JSON.stringify(schema).replaceAll('<','\\u003c');}catch{}
   return;
  }
  if(node.nodeName==='#text'){node.value=node.value.replace(/(?:최근 배포일|운영 배포일)\s*[:：]?\s*(?:\d{4}-\d{2}-\d{2})?/g,'').replace(/출처 확인일:\s*\d{4}-\d{2}-\d{2}/g,()=>checkedOn?translateTransportText('출처 확인일:',dictionary)+' '+checkedOn:'');node.value=translateTransportText(node.value,dictionary);}
  for(const attribute of node.attrs||[]){
   if(attribute.name==='data-date-locale')attribute.value=locale;
   if(['alt','title','aria-label','placeholder','content','data-label','data-link-label','data-city-name','data-label'].includes(attribute.name))attribute.value=translateTransportText(attribute.value,dictionary);
   if(attribute.name.startsWith('data-')&&/^[\[{]/.test(attribute.value))try{attribute.value=JSON.stringify(localize(JSON.parse(attribute.value)));}catch{}
   if(attribute.name==='href'&&attribute.value.startsWith('/ko/')){
    const destination=transportHref(attribute.value,locale,relatedTransportHref);
    if(destination!==attribute.value)attribute.value=destination;
    // Keep the label and surrounding prose if a corresponding native page does
    // not exist; never synthesize a route or silently send readers to Korea.
    else if(node.tagName==='a')node.__transportUnwrap=true;
   }
  }
  for(const child of node.childNodes||[])visit(child);
  if(node.childNodes)node.childNodes=node.childNodes.flatMap(child=>{if(child.__transportUnwrap)return child.childNodes||[];return [child];});
  // Korean attaches particles directly to emphasis. In languages that separate
  // words, retain readable word boundaries after translating the full labels.
  if(!['ja','zh-cn','zh-tw'].includes(locale)&&node.childNodes){
   const inline=n=>n.nodeName==='#text'||['strong','b','em','span','a','small','time'].includes(n.tagName);
   const leaves=n=>n.nodeName==='#text'?[n]:(n.childNodes||[]).flatMap(leaves);
   for(let i=1;i<node.childNodes.length;i++){
    const left=node.childNodes[i-1],right=node.childNodes[i];if(!inline(left)||!inline(right))continue;
    const a=leaves(left).at(-1),b=leaves(right)[0];if(a&&b&&/[\p{L}\p{N}]$/u.test(a.value)&&/^[\p{L}\p{N}]/u.test(b.value))b.value=' '+b.value;
   }
  }
 }
 visit(root);
 const head=root.childNodes.find(n=>n.tagName==='html')?.childNodes.find(n=>n.tagName==='head');
 if(head){
  const runtime={locale,paths:transportLanguagePaths(pathname)};
  const value=JSON.stringify(runtime).replaceAll('<','\\u003c');
  const old=head.childNodes.find(n=>n.tagName==='script'&&n.attrs.some(a=>a.name==='data-transport-localization'));
  if(old)old.childNodes[0].value=value;
  else head.childNodes.push({nodeName:'script',tagName:'script',namespaceURI:'http://www.w3.org/1999/xhtml',attrs:[{name:'type',value:'application/json'},{name:'data-transport-localization',value:''}],childNodes:[{nodeName:'#text',value}],parentNode:head});
 }
 return serialize(root);
}

export const transportModifiedLabels={ko:'최근 수정일:',en:'Last revised:','en-gb':'Last revised:','en-in':'Last revised:','en-us':'Last revised:',ja:'最終更新日:','zh-cn':'内容更新日期:','zh-tw':'內容更新日期:',ms:'Kandungan dikemas kini:',ru:'Последнее изменение:',es:'Última revisión:'};
