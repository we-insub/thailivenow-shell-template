import {transportRoute,transportPath,transportLocales} from './transport-source-registry.mjs';
export {transportRoute,transportLanguagePaths,transportSourceRoutes,transportLanguageTags,transportLocales} from './transport-source-registry.mjs';
const cache=new WeakMap();
const escape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const placeholder=/\$\{([^}]+)\}/g;
const decodeAuthoredEntities=value=>value.replace(/&(?:gt|lt|amp|quot|apos|#39|#x[\da-f]+|#\d+);/gi,entity=>{const named={'&gt;':'>','&lt;':'<','&amp;':'&','&quot;':'"','&apos;':"'",'&#39;':"'"};if(named[entity])return named[entity];const hex=/^&#x/i.test(entity),number=parseInt(entity.slice(hex?3:2,-1),hex?16:10);return Number.isInteger(number)&&number<=0x10ffff?String.fromCodePoint(number):entity;});
function prepare(dictionary){
 let state=cache.get(dictionary);if(state)return state;
 const templates=[],exact=new Map();
 for(const [rawSource,rawTarget] of Object.entries(dictionary)){
  const source=decodeAuthoredEntities(rawSource),target=typeof rawTarget==='string'?decodeAuthoredEntities(rawTarget):rawTarget;
  if(typeof target==='string')exact.set(source,target);
  if(typeof target!=='string'||!source.includes('${'))continue;
  const variables=[...source.matchAll(placeholder)].map(match=>match[1]);
  const pieces=source.split(placeholder).filter((_,i)=>i%2===0);
  if(!/[가-힣]/.test(pieces.join('')))continue;
  // Every placeholder must survive. Missing/repeated variables are never guessed.
  const targetVariables=[...target.matchAll(placeholder)].map(match=>match[1]);
  if(variables.some(name=>!targetVariables.includes(name))||targetVariables.some(name=>!variables.includes(name)))continue;
  let pattern=escape(pieces[0]);for(let i=0;i<variables.length;i++)pattern+='([\\s\\S]*?)'+escape(pieces[i+1]);
  templates.push({source,target,variables,literals:pieces.filter(Boolean),regex:new RegExp('^'+pattern+'$'),weight:pieces.join('').length});
 }
 templates.sort((a,b)=>b.weight-a.weight||b.source.length-a.source.length);
 state={templates,exact,memo:new Map()};cache.set(dictionary,state);return state;
}
export function translateTransportText(value,dictionary={},depth=0){
 if(typeof value!=='string'||depth>8)return value;
 if(Object.hasOwn(dictionary,value)&&typeof dictionary[value]==='string'&&!value.includes('${'))return dictionary[value];
 const trimmed=value.trim();if(!trimmed)return value;
 if(trimmed!==value){const result=translateTransportText(trimmed,dictionary,depth+1);return value.slice(0,value.indexOf(trimmed))+result+value.slice(value.indexOf(trimmed)+trimmed.length);}
 if(!/[가-힣]/.test(value))return value;
 const state=prepare(dictionary);if(state.memo.has(value))return state.memo.get(value);
 if(state.exact.has(value)&&!value.includes('${'))return state.exact.get(value);
 for(const template of state.templates){
  if(template.literals.some(literal=>!value.includes(literal)))continue;
  const match=value.match(template.regex);if(!match)continue;
  const result=template.target.replace(placeholder,(_,name)=>{const i=template.variables.indexOf(name);return translateTransportText(match[i+1],dictionary,depth+1);});
  state.memo.set(value,result);return result;
 }
 // Whitespace and directional symbols belong to presentation, not the glossary.
 const arrow=value.match(/^(.*\S)(\s*[→↗↓])$/);if(arrow){const translated=translateTransportText(arrow[1],dictionary,depth+1);if(translated!==arrow[1])return translated+arrow[2];}
 const prefix=value.match(/^(\d+\.\s+|›\s+)([\s\S]+)$/);if(prefix){const translated=translateTransportText(prefix[2],dictionary,depth+1);if(translated!==prefix[2])return prefix[1]+translated;}
 const parenthetical=value.match(/^(.*?\s*)\(([^()]*[가-힣][^()]*)\)$/);if(parenthetical){const translated=translateTransportText(parenthetical[2],dictionary,depth+1);if(translated!==parenthetical[2])return parenthetical[1]+'('+translated+')';}
 // Rendered lists join independently authored labels with middle dots. Translate
 // those complete labels, never arbitrary noun substrings inside prose.
 if(value.includes(' · ')){const labels=value.split(' · '),translated=labels.map(label=>translateTransportText(label,dictionary,depth+1));if(translated.some((label,i)=>label!==labels[i]))return translated.join(' · ');}
 return value;
}
export function transportHref(href,locale,otherRoutes){
 if(locale==='ko'||typeof href!=='string'||!href.startsWith('/ko/'))return href;
 const match=href.match(/^([^?#]*)([?#][\s\S]*)?$/);const path=match[1],tail=match[2]||'';
 const entry=transportRoute(path);if(entry)return transportPath(locale,entry.canonicalSuffix)+tail;
 // Nontransport links require a separately verified published route map.
 const destination=otherRoutes?.(path,locale);return destination?destination+tail:href;
}
export function localizeTransportData(value,locale,dictionary,otherRoutes){
 if(locale==='ko')return value;
 if(typeof value==='string'&&/^\/images\/transport\/train\/dticket-[a-z-]+\.svg$/.test(value))return value.replace(/\.svg$/,'.'+(locale.startsWith('en')?'en':locale)+'.svg');
 if(typeof value==='string')return value.startsWith('/ko/')?transportHref(value,locale,otherRoutes):translateTransportText(value,dictionary);
 if(Array.isArray(value))return value.map(item=>localizeTransportData(item,locale,dictionary,otherRoutes));
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,localizeTransportData(item,locale,dictionary,otherRoutes)]));
 return value;
}
export function transportPageLocale(pathname){const code=pathname.split('/')[1];return transportLocales.includes(code)?code:'ko';}
