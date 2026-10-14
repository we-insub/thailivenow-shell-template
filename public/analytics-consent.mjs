const measurementId = 'G-56PNXZ2KKJ';
const storageKey = 'thailivenow.analytics-consent.v1';
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
let choice=null,loaded=false,trigger=null;
function readChoice(){try{const record=JSON.parse(localStorage.getItem(storageKey)||'null');return ['granted','denied'].includes(record?.value)&&Number.isFinite(record.expires)&&record.expires>Date.now()&&record.expires<=Date.now()+lifetime+60000?record.value:null;}catch{return null;}}
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
 window.gtag('config',measurementId,{page_location:cleanUrl(location.href),page_referrer:cleanUrl(document.referrer),allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:180*24*60*60,cookie_update:false});
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
function decide(value){choice=value;try{localStorage.setItem(storageKey,JSON.stringify({value,expires:Date.now()+lifetime}));}catch{/* In-memory choice remains effective for this page. */}
 if(value==='granted')loadAnalytics();else{window['ga-disable-'+measurementId]=true;clearCookies();document.getElementById('tln-ga4-tag')?.remove();}
 close();if(value==='denied'&&loaded){window.dataLayer=[];location.reload();}
}
dialog.querySelector('[data-allow]').addEventListener('click',()=>decide('granted'));dialog.querySelector('[data-deny]').addEventListener('click',()=>decide('denied'));dialog.querySelector('[data-close]').addEventListener('click',close);
document.addEventListener('click',event=>{const button=event.target.closest('[data-analytics-settings]');if(!button)return;event.preventDefault();trigger=button;show(true);});
window.addEventListener('storage',event=>{if(event.key===storageKey){const next=readChoice();choice=next;if(next!=='granted'){window['ga-disable-'+measurementId]=true;clearCookies();if(loaded)location.reload();}else{choice=next;loadAnalytics();}}});
choice=readChoice();if(choice==='granted')loadAnalytics();else{window['ga-disable-'+measurementId]=true;clearCookies();if(!choice)show();}
