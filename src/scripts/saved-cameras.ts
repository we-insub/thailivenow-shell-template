import {getDesignUI} from '../i18n/design-ui';
import {isLocale} from '../i18n/locales';
const code=document.documentElement.dataset.locale;
const labels=getDesignUI(isLocale(code)?code:'en');
const key='thailivenow.saved-cameras';
function saved():string[]{try{const value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value.filter(v=>typeof v==='string'):[];}catch{return [];}}
function update(){
 const ids=saved();
 document.querySelectorAll<HTMLButtonElement>('[data-save-camera]').forEach(button=>{const on=ids.includes(button.dataset.saveCamera||'');button.setAttribute('aria-pressed',String(on));button.classList.toggle('is-saved',on);const text=button.querySelector('[data-action-label]')||button;text.textContent=on?labels.savedState:(code==='ko'?'저장':code?.startsWith('en')?'Save':labels.save);});
 const only=document.querySelector('[data-saved-directory]');
 if(only){let count=0;only.querySelectorAll<HTMLElement>('[data-camera-gallery]').forEach(card=>{const show=ids.includes(card.dataset.cameraGallery||'');card.hidden=!show;if(show)count++;});const empty=document.getElementById('saved-empty');if(empty)empty.hidden=count>0;}
}
document.addEventListener('click',event=>{const button=(event.target as Element)?.closest<HTMLButtonElement>('[data-save-camera]');if(!button?.dataset.saveCamera)return;const ids=saved(),id=button.dataset.saveCamera;try{localStorage.setItem(key,JSON.stringify(ids.includes(id)?ids.filter(v=>v!==id):[...ids,id]));}catch{}update();});
document.addEventListener('saved-cameras-updated',update);window.addEventListener('storage',update);update();
const comparisonKey='thailivenow.comparison-cameras';
function comparison():string[]{try{const v=JSON.parse(localStorage.getItem(comparisonKey)||'[]');return Array.isArray(v)?v.filter(x=>typeof x==='string').slice(0,4):[];}catch{return [];}}
const ko=document.documentElement.lang.startsWith('ko')||!!document.querySelector('[data-localized-ui]');
function compareUpdate(){
 const ids=comparison();
 document.querySelectorAll<HTMLButtonElement>('[data-compare-camera]').forEach(btn=>{const on=ids.includes(btn.dataset.compareCamera||'');btn.setAttribute('aria-pressed',String(on));btn.classList.toggle('is-compared',on);const label=btn.querySelector('span')||btn;label.textContent=ko?(on?'비교에서 제거':'비교에 추가'):(on?'Remove from compare':'Add to compare');});
 const bar=document.getElementById('comparison-bar');if(bar){bar.hidden=!ids.length;bar.querySelector('[data-comparison-count]')!.textContent=String(ids.length);}
 document.querySelectorAll<HTMLElement>('[data-comparison-card]').forEach(card=>card.hidden=!ids.includes(card.dataset.comparisonCard!));
 const empty=document.getElementById('comparison-empty');if(empty)empty.hidden=!!ids.length;
}
function notice(button:Element,text:string){const holder=button.closest('.camera-actions')?.querySelector<HTMLElement>('.camera-action-notice')||document.getElementById('comparison-notice');if(holder){holder.hidden=false;holder.textContent=text;}}
document.addEventListener('click',async event=>{
 const target=event.target instanceof Element?event.target:null;
 const compare=target?.closest<HTMLButtonElement>('[data-compare-camera]');
 if(compare?.dataset.compareCamera){const id=compare.dataset.compareCamera,ids=comparison();if(!ids.includes(id)&&ids.length>=4){notice(compare,ko?'비교는 최대 4개까지 선택할 수 있어요.':'You can compare up to four cameras.');return;}try{localStorage.setItem(comparisonKey,JSON.stringify(ids.includes(id)?ids.filter(v=>v!==id):[...ids,id]));compareUpdate();}catch{notice(compare,ko?'이 브라우저에서는 저장 기능을 사용할 수 없어요.':'Saving is not available in this browser.');}}
 const share=target?.closest<HTMLButtonElement>('[data-share-camera]');
 if(share?.dataset.shareCamera){const url=new URL(`/${isLocale(code)?code:'en'}/cameras/${share.dataset.shareCamera}/`,location.origin).href;try{if(navigator.share){await navigator.share({title:'ThaiLiveNow',url});return;}}catch(e){if(e instanceof DOMException&&e.name==='AbortError')return;}try{await navigator.clipboard.writeText(url);notice(share,ko?'링크를 복사했어요.':'Link copied.');}catch{notice(share,url);}}
 if(target?.closest('[data-comparison-clear]')){try{localStorage.removeItem(comparisonKey);compareUpdate();}catch{}}
});
document.addEventListener('saved-cameras-updated',compareUpdate);window.addEventListener('storage',compareUpdate);compareUpdate();
const recentKey='thailivenow.recent-cameras';
function recent():string[]{try{const ids=JSON.parse(localStorage.getItem(recentKey)||'[]');return Array.isArray(ids)?ids.filter(v=>typeof v==='string').slice(0,50):[];}catch{return [];}}
const viewed=document.querySelector<HTMLElement>('[data-camera-detail]')?.dataset.cameraDetail;
if(viewed)try{localStorage.setItem(recentKey,JSON.stringify([viewed,...recent().filter(v=>v!==viewed)].slice(0,50)));}catch{}
function personalList(){const root=document.querySelector<HTMLElement>('[data-saved-directory]');if(!root)return;const tab=document.querySelector<HTMLButtonElement>('[data-personal-tab][aria-selected=true]')?.dataset.personalTab||'saved';const ids=tab==='recent'?recent():saved();let shown=0;root.querySelectorAll<HTMLElement>('[data-camera-gallery]').forEach(card=>{card.hidden=!ids.includes(card.dataset.cameraGallery||'');if(!card.hidden)shown++;});const empty=document.getElementById('saved-empty');if(empty){empty.hidden=shown>0;empty.textContent=tab==='recent'?(ko?'아직 상세 화면을 본 카메라가 없어요.':'You have not opened a camera detail page yet.'):labels.empty;}document.querySelector('[data-clear-recent]')?.toggleAttribute('hidden',tab!=='recent'||!ids.length);}
document.querySelectorAll<HTMLButtonElement>('[data-personal-tab]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-personal-tab]').forEach(btn=>btn.setAttribute('aria-selected',String(btn===button)));personalList();}));
document.querySelector('[data-clear-recent]')?.addEventListener('click',()=>{try{localStorage.removeItem(recentKey);personalList();}catch{}});
document.addEventListener('saved-cameras-updated',personalList);document.addEventListener('click',e=>{if(e.target instanceof Element&&e.target.closest('[data-save-camera]'))personalList();});personalList();
