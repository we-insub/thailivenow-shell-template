import {parse,serialize} from 'parse5';
import {getLocalizedPack,isLocalizedPage,localizedHref,localeTag} from './localized-content';
import {translateLocaleText} from './locale-text.mjs';
export function applyLocalizedHTML(html:string,path:string){
 if(!isLocalizedPage(path))return html;
 const locale=path.split('/')[1],dictionary=getLocalizedPack(locale)?.ui||{};
 const root:any=parse(html);
 const duplicateNames=Object.values(getLocalizedPack(locale)?.rooftops||{}).map((v:any)=>v.name).filter(Boolean);
 const marketSuffix=({'en-in':' · India','en-gb':' · UK','en-us':' · US'} as Record<string,string>)[locale];
 const text=(value:string)=>{let result=translateLocaleText(value,dictionary);if(marketSuffix&&/[가-힣]/.test(result)&&result.endsWith(marketSuffix)){const base=result.slice(0,-marketSuffix.length),translated=translateLocaleText(base,dictionary);if(translated!==base)result=translated.endsWith(marketSuffix)?translated:translated+marketSuffix;}for(const name of duplicateNames)result=result.replaceAll(`${name} (${name})`,name);return result;};
 const json=(value:any):any=>{
  if(typeof value==='string')return text(value);
  if(Array.isArray(value))return value.map(json);
  if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,key==='inLanguage'?localeTag(locale):json(item)]));
  return value;
 };
 function visit(node:any){
  if(node.attrs?.some((a:any)=>a.name==='id'&&a.value==='language-picker'))return;
  if(node.nodeName==='html'){const market=node.attrs.find((a:any)=>a.name==='data-locale');if(market)market.value=locale;else node.attrs.push({name:'data-locale',value:locale});}
  if(node.nodeName==='style')return;
  if(node.nodeName==='script'){
   if(node.attrs?.some((a:any)=>a.name==='type'&&a.value==='application/ld+json'))try{node.childNodes[0].value=JSON.stringify(json(JSON.parse(node.childNodes[0].value))).replaceAll('<','\\u003c');}catch{}
   return;
  }
  if(node.nodeName==='#text')node.value=text(node.value);
  for(const attribute of node.attrs||[]){
   if(['alt','title','aria-label','placeholder','content','data-city-name','data-weather-title','data-label'].includes(attribute.name))attribute.value=text(attribute.value);
   if(attribute.name==='href'&&attribute.value.startsWith('/ko/')){
    const destination=localizedHref(attribute.value,locale);
    if(destination)attribute.value=destination;
    else if(node.tagName==='a'){node.__omit=true;return;}
   }
  }
  for(const child of node.childNodes||[])visit(child);
  if(node.childNodes)node.childNodes=node.childNodes.filter((child:any)=>!child.__omit);
 }
 visit(root);return serialize(root);
}
