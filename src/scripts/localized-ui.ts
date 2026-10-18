import {translateLocaleText} from '../lib/locale-text.mjs';
const configuration=document.querySelector<HTMLScriptElement>('[data-localized-ui]');
if(configuration){
 const {dictionary,locale,rooftops,travel}=JSON.parse(configuration.textContent||'{}');
 const translate=(value:string)=>translateLocaleText(value,dictionary);
 const href=(value:string)=>{
  if(!value.startsWith('/ko/'))return value;
  const rest=value.slice(3);
  return /^\/(?:destinations|directory|cameras|saved|compare)(?:\/|$)/.test(rest)||rest==='/'||rooftops&&rest.startsWith('/rooftops/')||travel&&/^\/(?:entry|travel-seasons)\//.test(rest)?`/${locale}${rest}`:value;
 };
 const update=(node:Node)=>{
  if(node instanceof Element&&node.closest('#language-picker,script,style'))return;
  if(node.nodeType===Node.TEXT_NODE){const next=translate(node.textContent||'');if(next!==node.textContent)node.textContent=next;return;}
  if(node instanceof Element)for(const name of ['alt','title','aria-label','placeholder','href']){const value=node.getAttribute(name);if(value){const next=name==='href'?href(value):translate(value);if(next!==value)node.setAttribute(name,next);}}
  for(const child of node.childNodes)update(child);
 };
 const observer=new MutationObserver(changes=>{for(const change of changes){if(change.type==='childList')for(const node of change.addedNodes)update(node);else update(change.target);}});
 update(document.body);observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['href','title','aria-label','alt','placeholder']});
}
