const measurementId = 'G-56PNXZ2KKJ';
const storageKey = 'thailivenow.analytics-consent.v1';
const cookieKey = 'tln_analytics_consent_v1';
const lifetime = 180 * 24 * 60 * 60 * 1000;
const production = ['thailivenow.com','www.thailivenow.com'].includes(location.hostname);
const ko = document.documentElement.lang.startsWith('ko');
const copy = ko ? {
 title:'방문 통계 설정',text:'사이트 개선을 위해 Google Analytics 쿠키로 방문 통계를 수집해도 될까요? 거부해도 모든 기능을 이용할 수 있어요.',
 allow:'허용',deny:'거부',close:'닫기',privacy:'개인정보 안내',allowed:'현재 방문 통계를 허용하고 있어요.',denied:'현재 방문 통계를 허용하지 않고 있어요.'
} : {
 title:'Analytics settings',text:'May we use Google Analytics cookies to improve this site? All features remain available if you decline.',
 allow:'Allow',deny:'Decline',close:'Close',privacy:'Privacy information (Korean)',allowed:'Analytics is currently allowed.',denied:'Analytics is currently disabled.'
};
let choice=null,choiceExpires=0,loaded=false,trigger=null,expiryTimer=null;
function validRecord(value){
 try{const record=JSON.parse(value||'null');const now=Date.now();return ['granted','denied'].includes(record?.value)&&Number.isFinite(record.expires)&&record.expires>now&&record.expires<=now+lifetime?{value:record.value,expires:record.expires}:null;}catch{return null;}
}
function persistChoice(record){
 const encoded=JSON.stringify(record);
 try{localStorage.setItem(storageKey,encoded);}catch{/* The first-party preference cookie is an independent fallback. */}
 try{const remaining=Math.max(0,Math.floor((record.expires-Date.now())/1000));document.cookie=`${cookieKey}=${encodeURIComponent(encoded)}; Max-Age=${remaining}; Expires=${new Date(record.expires).toUTCString()}; Path=/; SameSite=Lax${location.protocol==='https:'?'; Secure':''}${production?'; Domain=thailivenow.com':''}`;}catch{/* Browsers can block or clear both forms of preference storage. */}
}
function readChoice(){
 let local=null,cookie=null;
 try{local=validRecord(localStorage.getItem(storageKey));}catch{}
 try{const pair=document.cookie.split(';').map(part=>part.trim()).find(part=>part.startsWith(cookieKey+'='));if(pair)cookie=validRecord(decodeURIComponent(pair.slice(cookieKey.length+1)));}catch{}
 // The later explicit choice wins across www/apex and languages; equal timestamps prefer refusal.
 const record=[local,cookie].filter(Boolean).sort((a,b)=>b.expires-a.expires||Number(b.value==='denied')-Number(a.value==='denied'))[0];
 choiceExpires=record?.expires||0;
 if(record)persistChoice(record); // Mirror the original expiry; revisits never start another 180 days.
 return record?.value||null;
}
function armExpiry(){
 clearTimeout(expiryTimer);
 if(!choice||!choiceExpires)return;
 // Browser timers cannot safely hold a 180-day delay; recheck at most once per day.
 expiryTimer=setTimeout(()=>{
  choice=readChoice();
  if(choice){armExpiry();return;}
  window['ga-disable-'+measurementId]=true;clearCookies();
  if(loaded){document.getElementById('tln-ga4-tag')?.remove();window.dataLayer=[];location.reload();}else if(!dialog.open)show();
 },Math.max(1,Math.min(choiceExpires-Date.now(),24*60*60*1000)));
}
function clearCookies(){
 const host=location.hostname.split('.');const domains=['',location.hostname,...host.map((_,i)=>'.'+host.slice(i).join('.'))];
 const parts=location.pathname.split('/');const paths=['/',...parts.map((_,i)=>parts.slice(0,i+1).join('/')||'/')];
 for(const cookie of document.cookie.split(';')){const name=cookie.trim().split('=')[0];if(!/^_ga(?:_|$)/.test(name))continue;
  for(const domain of domains)for(const path of paths)document.cookie=`${name}=; Max-Age=0; Path=${path}${domain?'; Domain='+domain:''}; SameSite=Lax`;
 }
}
function loadAnalytics(){
 if(!production||loaded||choice!=='granted')return;
 loaded=true;window['ga-disable-'+measurementId]=false;window.dataLayer=window.dataLayer||[];
 window.gtag=function(){window.dataLayer.push(arguments);};
 window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 window.gtag('consent','update',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 window.gtag('js',new Date());
 const cleanUrl=value=>{try{const url=new URL(value);return url.origin+url.pathname;}catch{return '';}};
 window.gtag('config',measurementId,{page_location:cleanUrl(location.href),page_referrer:cleanUrl(document.referrer),allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:Math.max(1,Math.floor((choiceExpires-Date.now())/1000)),cookie_update:false});
 const script=document.createElement('script');script.async=true;script.id='tln-ga4-tag';script.src='https://www.googletagmanager.com/gtag/js?id='+measurementId;document.head.append(script);
}
const dialog=document.createElement('dialog');dialog.id='analytics-settings';dialog.setAttribute('aria-labelledby','tln-consent-title');
dialog.innerHTML=`<h2 id="tln-consent-title"></h2><p class="consent-text"></p><p class="consent-status" aria-live="polite"></p><a href="/ko/privacy/"></a><div class="consent-actions"><button type="button" data-allow></button><button type="button" data-deny></button><button type="button" data-close></button></div>`;
dialog.querySelector('h2').textContent=copy.title;dialog.querySelector('.consent-text').textContent=copy.text;dialog.querySelector('a').textContent=copy.privacy;
for(const [selector,label]of [['[data-deny]',copy.deny],['[data-allow]',copy.allow],['[data-close]',copy.close]])dialog.querySelector(selector).textContent=label;
const style=document.createElement('style');style.textContent=`#analytics-settings{position:fixed;inset:auto 16px 16px auto;max-width:540px;width:calc(100% - 32px);max-height:80vh;overflow:auto;box-sizing:border-box;margin:0;border:1px solid #cddde2;border-radius:14px;background:white;padding:22px;color:#253545;z-index:10000;box-shadow:0 8px 32px #122a3530;font:16px/1.7 system-ui}#analytics-settings::backdrop{background:#122a3550}#analytics-settings h2{font-size:21px;margin:0 0 12px}#analytics-settings p{margin:10px 0}#analytics-settings a{color:#267e89}#analytics-settings .consent-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}#analytics-settings button{font:inherit;border:1px solid #267e89;color:#253545;background:#fff;border-radius:8px;padding:9px 18px;cursor:pointer}#analytics-settings button:focus-visible,#analytics-settings a:focus-visible{outline:3px solid #66a7cd;outline-offset:3px}`;
document.head.append(style);document.body.append(dialog);
function show(modal=false){dialog.querySelector('.consent-status').textContent=choice==='granted'?copy.allowed:copy.denied;if(dialog.open)dialog.close();modal?dialog.showModal():dialog.show();}
function close(){dialog.close();trigger?.focus();}
function decide(value){choice=value;choiceExpires=Date.now()+lifetime;persistChoice({value,expires:choiceExpires});armExpiry();
 if(value==='granted')loadAnalytics();else{window['ga-disable-'+measurementId]=true;clearCookies();document.getElementById('tln-ga4-tag')?.remove();}
 close();if(value==='denied'&&loaded){window.dataLayer=[];location.reload();}
}
dialog.querySelector('[data-allow]').addEventListener('click',()=>decide('granted'));dialog.querySelector('[data-deny]').addEventListener('click',()=>decide('denied'));dialog.querySelector('[data-close]').addEventListener('click',close);
document.addEventListener('click',event=>{const button=event.target.closest('[data-analytics-settings]');if(!button)return;event.preventDefault();trigger=button;show(true);});
window.addEventListener('storage',event=>{if(event.key===storageKey){const next=readChoice();choice=next;armExpiry();if(next!=='granted'){window['ga-disable-'+measurementId]=true;clearCookies();if(loaded)location.reload();}else{choice=next;loadAnalytics();}}});
window.addEventListener('pageshow',()=>{choice=readChoice();armExpiry();if(choice==='granted')loadAnalytics();else{window['ga-disable-'+measurementId]=true;clearCookies();if(loaded)location.reload();else if(!choice&&!dialog.open)show();}});
choice=readChoice();armExpiry();if(choice==='granted')loadAnalytics();else{window['ga-disable-'+measurementId]=true;clearCookies();if(!choice)show();}
