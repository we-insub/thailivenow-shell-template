import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync(new URL('../public/analytics-consent.mjs',import.meta.url),'utf8');
function setup(saved,options={}){
 class Element{constructor(tag){this.tagName=tag;this.handlers={};this.nodes=new Map();this.open=false;this.innerHTML='';}setAttribute(k,v){this[k]=v;}querySelector(s){if(!this.nodes.has(s))this.nodes.set(s,new Element('node'));return this.nodes.get(s);}addEventListener(k,f){this.handlers[k]=f;}append(e){appended.push(e);}show(){this.open=true;}showModal(){this.open=true;}close(){this.open=false;}focus(){}remove(){this.removed=true;}}
 const cookies=new Map([['_ga','old'],['other','keep'],...options.cookies||[]]),cookieWrites=[];
 const appended=[],storage=new Map(saved?[['thailivenow.analytics-consent.v1',JSON.stringify(saved)]]:[]);let reloads=0;const events={};const document={documentElement:{lang:'ko'},referrer:'https://example.org/path?q=test#fragment',cookie:'_ga=old; other=keep',createElement:tag=>new Element(tag),head:new Element('head'),body:new Element('body'),getElementById:id=>appended.find(e=>e.id===id),addEventListener:(k,f)=>events[k]=f};
 Object.defineProperty(document,'cookie',{get:()=>[...cookies].map(([k,v])=>k+'='+v).join('; '),set:value=>{cookieWrites.push(value);const pair=value.split(';')[0],i=pair.indexOf('=');const key=pair.slice(0,i);if(/Max-Age=0(?:;|$)/.test(value))cookies.delete(key);else cookies.set(key,pair.slice(i+1));}});
 const window={addEventListener:(k,f)=>events[k]=f};const location={protocol:'https:',hostname:'thailivenow.com',href:'https://thailivenow.com/ko/privacy/?q=test#section',pathname:'/ko/privacy/',reload:()=>reloads++};
 let clock=options.now??Date.now();const timers=new Map();let timerId=0;class Clock extends Date{static now(){return clock;}}
 vm.runInNewContext(source,{document,window,location,localStorage:{getItem:k=>{if(options.storageBlocked)throw Error('blocked');return storage.get(k)??null;},setItem:(k,v)=>{if(options.storageBlocked)throw Error('blocked');storage.set(k,v);}},URL,Date:Clock,Number,JSON,setTimeout:(callback,delay)=>{timers.set(++timerId,{callback,delay});return timerId;},clearTimeout:id=>timers.delete(id)});
 const dialog=appended.find(x=>x.id==='analytics-settings');return {dialog,window,storage,cookies,cookieWrites,events,appended,timers,advance:time=>clock=time,reloads:()=>reloads,click:s=>dialog.querySelector(s).handlers.click()};
}
const gaTags=s=>s.appended.filter(e=>e.id==='tln-ga4-tag');
test('allow, deny, close order and no analytics before consent',()=>{const s=setup();assert.deepEqual([...s.dialog.innerHTML.matchAll(/<button[^>]*data-(allow|deny|close)/g)].map(m=>m[1]),['allow','deny','close']);assert.equal(gaTags(s).length,0);s.click('[data-close]');assert.equal(s.dialog.open,false);assert.equal(s.storage.size,0);assert.equal(gaTags(s).length,0);});
test('allow starts one tag with sanitized initial URL and denied advertising',()=>{const s=setup();s.click('[data-allow]');assert.equal(gaTags(s).length,1);assert.equal(JSON.parse(s.storage.get('thailivenow.analytics-consent.v1')).value,'granted');const config=s.window.dataLayer.find(a=>a[0]==='config')[2];assert.equal(config.page_location,'https://thailivenow.com/ko/privacy/');assert.equal(config.page_referrer,'https://example.org/path');assert.equal(config.allow_google_signals,false);const consent=s.window.dataLayer.find(a=>a[0]==='consent'&&a[1]==='update')[2];assert.equal(consent.ad_storage,'denied');assert.equal(consent.ad_personalization,'denied');s.click('[data-allow]');assert.equal(gaTags(s).length,1);});
test('deny before load and revoke after allow preserve collection blocking',()=>{const first=setup();first.click('[data-deny]');assert.equal(gaTags(first).length,0);assert.equal(first.window['ga-disable-G-56PNXZ2KKJ'],true);const s=setup();s.click('[data-allow]');s.click('[data-deny]');assert.equal(s.window['ga-disable-G-56PNXZ2KKJ'],true);assert.equal(JSON.parse(s.storage.get('thailivenow.analytics-consent.v1')).value,'denied');assert.equal(s.reloads(),1);assert.equal(gaTags(s)[0].removed,true);});
test('saved denial or expired consent cannot start analytics',()=>{for(const saved of [{value:'denied',expires:Date.now()+60000},{value:'granted',expires:Date.now()-60000}])assert.equal(gaTags(setup(saved)).length,0);});

const day=24*60*60*1000,key='thailivenow.analytics-consent.v1',cookieKey='tln_analytics_consent_v1',now=1800000000000;
const preference=s=>JSON.parse(decodeURIComponent(s.cookies.get(cookieKey)));
test('allow and refusal survive revisits for 180 days without a sliding expiry',()=>{
 for(const [button,value] of [['[data-allow]','granted'],['[data-deny]','denied']]){
  const first=setup(null,{now});first.click(button);const record=JSON.parse(first.storage.get(key));assert.equal(record.expires,now+180*day);assert.deepEqual(preference(first),record);
  const returning=setup(record,{now:now+179*day,cookies:[[cookieKey,encodeURIComponent(JSON.stringify(record))]]});assert.equal(returning.dialog.open,false);assert.equal(preference(returning).expires,record.expires);assert.equal(JSON.parse(returning.storage.get(key)).expires,record.expires);assert.equal(gaTags(returning).length,value==='granted'?1:0);
  if(value==='granted'){const config=returning.window.dataLayer.find(a=>a[0]==='config')[2];assert.equal(config.cookie_expires,86400);assert.equal(config.cookie_update,false);}
  const expired=setup(record,{now:record.expires,cookies:[[cookieKey,encodeURIComponent(JSON.stringify(record))]]});assert.equal(expired.dialog.open,true);assert.equal(gaTags(expired).length,0);
 }
});
test('first-party preference cookie independently remembers refusal and allowance when localStorage is unavailable',()=>{
 for(const [button,value] of [['[data-allow]','granted'],['[data-deny]','denied']]){
  const first=setup(null,{now,storageBlocked:true});first.click(button);const record=preference(first);assert.equal(record.value,value);
  assert.ok(first.cookieWrites.some(v=>v.includes('Max-Age=15552000')&&v.includes('Path=/')&&v.includes('SameSite=Lax')&&v.includes('Secure')&&v.includes('Domain=thailivenow.com')));
  const returning=setup(null,{now:now+day,storageBlocked:true,cookies:[[cookieKey,encodeURIComponent(JSON.stringify(record))]]});assert.equal(returning.dialog.open,false);assert.equal(gaTags(returning).length,value==='granted'?1:0);assert.equal(preference(returning).expires,record.expires);
 }
});
test('old valid choices migrate with the same expiry and a newer refusal wins over stale local consent',()=>{
 const old={value:'granted',expires:now+20*day};const migrated=setup(old,{now});assert.deepEqual(preference(migrated),old);
 const latest={value:'denied',expires:now+180*day};const s=setup(old,{now,cookies:[[cookieKey,encodeURIComponent(JSON.stringify(latest))]]});assert.equal(s.dialog.open,false);assert.equal(gaTags(s).length,0);assert.deepEqual(JSON.parse(s.storage.get(key)),latest);
 const equal=setup(latest,{now,cookies:[[cookieKey,encodeURIComponent(JSON.stringify({...latest,value:'granted'}))]]});assert.equal(gaTags(equal).length,0);
});
test('malformed or overlong preferences never authorize tracking',()=>{
 for(const encoded of ['%broken',encodeURIComponent(JSON.stringify({value:'granted',expires:now+181*day}))]){const s=setup(null,{now,cookies:[[cookieKey,encoded]]});assert.equal(s.dialog.open,true);assert.equal(gaTags(s).length,0);}
});
test('footer settings can reopen and revoke a saved choice and back/forward restores refusal',()=>{
 const s=setup({value:'granted',expires:now+day},{now});let focused=false;const button={focus:()=>{focused=true;}};s.events.click({target:{closest:()=>button},preventDefault(){}});assert.equal(s.dialog.open,true);s.click('[data-deny]');assert.equal(s.dialog.open,false);assert.equal(focused,true);assert.equal(preference(s).value,'denied');assert.equal(s.window['ga-disable-G-56PNXZ2KKJ'],true);
 const other=setup({value:'denied',expires:now+day},{now});other.events.pageshow();assert.equal(other.dialog.open,false);assert.equal(gaTags(other).length,0);
});

test('an open page expires consent too, using safe bounded browser timers',()=>{
 for(const value of ['granted','denied']){
  const s=setup({value,expires:now+180*day},{now});assert.equal([...s.timers.values()][0].delay,day);s.advance(now+180*day);[...s.timers.values()][0].callback();assert.equal(s.window['ga-disable-G-56PNXZ2KKJ'],true);if(value==='granted')assert.equal(s.reloads(),1);else assert.equal(s.dialog.open,true);
 }
 const near=setup({value:'denied',expires:now+1000},{now});assert.equal([...near.timers.values()][0].delay,1000);
});
