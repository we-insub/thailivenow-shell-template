import {transportPageLocale,translateTransportText,localizeTransportData,transportHref} from '../lib/transport-localization-core.mjs';
export const transportLocale=transportPageLocale(window.location.pathname);
const native=transportLocale!=='ko'&&window.location.pathname.includes('/transport/');
// One shared ES module fetch per page, cached as a static asset by the browser.
// Importers initialize only after this dependency resolves, so map labels never
// briefly initialize in Korean and then change under the reader.
let pack={dictionary:{},related:{}};
export const transportReady=native?fetch(`/transport-locales/${transportLocale}.json`).then(response=>{if(!response.ok)throw Error('Missing transport locale pack');return response.json();}).then(value=>{pack=value;}):Promise.resolve();
export const transportText=(value:string)=>native?translateTransportText(value,pack.dictionary):value;
export const transportData=<T>(value:T):T=>native?localizeTransportData(value,transportLocale,pack.dictionary,(path:string,locale:string)=>pack.related[path]?.[locale]):value;
export const transportLink=(href:string)=>native?transportHref(href,transportLocale,(path:string,locale:string)=>pack.related[path]?.[locale]):href;
export function transportHTML(value:string){
 if(!native)return value;
 const template=document.createElement('template');template.innerHTML=value;
 const walker=document.createTreeWalker(template.content,NodeFilter.SHOW_TEXT);while(walker.nextNode()){const node=walker.currentNode;node.textContent=transportText(node.textContent||'');}
 for(const element of template.content.querySelectorAll<HTMLElement>('*')){for(const name of ['aria-label','title','alt']){const text=element.getAttribute(name);if(text)element.setAttribute(name,transportText(text));}if(element instanceof HTMLAnchorElement){const href=element.getAttribute('href');if(href)element.setAttribute('href',transportLink(href));}}
 return template.innerHTML;
}
