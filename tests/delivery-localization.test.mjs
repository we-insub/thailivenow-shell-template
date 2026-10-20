import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {deliveryPacks,deliveryLocales,deliveryPlatformIds,getDeliveryGuide,deliveryTextParts} from '../src/lib/delivery-localized.mjs';
import {isDetailPath,applyDetailEditorialPolicy} from '../src/lib/detail-editorial-policy.mjs';
const ids=['food-delivery',...deliveryPlatformIds];
const originals=Object.fromEntries(ids.map(id=>[id,JSON.parse(fs.readFileSync(new URL(`../src/data/transport/guides/${id}.json`,import.meta.url),'utf8'))]));
function leaves(value){return typeof value==='string'?[value]:Array.isArray(value)?value.flatMap(leaves):value&&typeof value==='object'?Object.values(value).flatMap(leaves):[];}
const urls=value=>leaves(value).filter(text=>/^https:\/\//.test(text)).sort();
const numeric=value=>[...new Set(value.match(/\d+(?:\.\d+)?%?/g)||[])].sort();
function compareSlots(source,target,path=''){
 if(typeof source==='string'){
  assert.equal(typeof target,'string',path);assert.ok(target.trim(),path);
  if(!source.startsWith('/')&&!source.startsWith('http'))assert.deepEqual(numeric(target),numeric(source),`Numeric fact changed at ${path}`);
 }else if(Array.isArray(source)){
  assert.equal(target.length,source.length,`Missing content slot at ${path}`);source.forEach((v,i)=>compareSlots(v,target[i],`${path}/${i}`));
 }else if(source&&typeof source==='object')for(const [k,v]of Object.entries(source)){
  if(k!=='links')compareSlots(v,target[k],`${path}/${k}`);
 }
}
test('all ten markets have complete native hub and four platform manuscripts',()=>{
 assert.deepEqual(new Set(deliveryLocales),new Set(['en','en-us','en-gb','en-in','ms','zh-cn','zh-tw','ru','ja','es']));
 for(const [locale,pack]of Object.entries(deliveryPacks)){
  assert.deepEqual(Object.keys(pack.guides),ids);assert.equal(pack.locale,locale);
  assert.equal(leaves(pack.guides).some(text=>/[가-힣]/.test(text)),false,locale);
  for(const id of ids){
   const guide=pack.guides[id],source=originals[id];compareSlots(source,guide,`${locale}/${id}`);
   assert.deepEqual(urls(guide),urls(source),`${locale}/${id} external evidence URLs`);
   const fingerprint=crypto.createHash('sha256').update(fs.readFileSync(new URL(`../src/data/transport/guides/${id}.json`,import.meta.url))).digest('hex');
   assert.equal(pack.sourceFingerprints[id],fingerprint,`Korean source changed: ${id}`);
   for(const href of leaves(guide).filter(t=>t.startsWith('/')))assert.ok(href.startsWith(`/${locale}/`),`${locale}: ${href}`);
  }
 }
});
test('hub and platform relationships remain reciprocal with same-market URLs',()=>{
 for(const locale of deliveryLocales){
  const hub=getDeliveryGuide(locale).guide;
  for(const id of deliveryPlatformIds){
   const href=`/${locale}/food-delivery/${id}/`;
   assert.ok(leaves(hub).includes(href),`${locale}: missing incoming ${id}`);
   const detail=getDeliveryGuide(locale,id).guide;
   assert.equal(detail.parentUrl,`/${locale}/food-delivery/`);
   assert.ok(detail.links.some(([,url])=>url===detail.parentUrl));
   assert.ok(isDetailPath(href));
  }
  assert.equal(isDetailPath(`/${locale}/food-delivery/`),false);
  assert.equal(deliveryPacks[locale].deferredRelatedLinks.length,2);
 }
});
test('fee and cancellation details preserve all values without fabricated support claims',()=>{
 for(const locale of deliveryLocales){
  const guide=getDeliveryGuide(locale,'grabfood').guide;
  const payment=guide.sections.find(v=>v.id==='payment').paragraphs;
  assert.ok(payment[0].includes('KakaoPay'));assert.deepEqual(numeric(payment[1]),['0.5','1','3%']);
  assert.ok(payment[2].includes('GrabPay'));
  assert.deepEqual(numeric(guide.sections.find(v=>v.id==='signup').paragraphs[0]),['6']);
  assert.deepEqual(numeric(guide.sections.find(v=>v.id==='cancel').paragraphs[0]),['15','30']);
  assert.equal(guide.faq.length,4);
 }
 assert.throws(()=>getDeliveryGuide('xx'));
});
test('delivery article enters shared byline, organization, image and public-date policy',()=>{
 for(const locale of deliveryLocales){
  const path=`/${locale}/food-delivery/grabfood/`;
  const html='<html><head><title>GrabFood</title><script type="application/ld+json">{"@type":"Article","headline":"GrabFood"}</script></head><body><main><header><h1>GrabFood</h1><p>Food</p></header></main></body></html>';
  const result=applyDetailEditorialPolicy(html,path);
  assert.equal((result.match(/data-tln-editorial-byline/g)||[]).length,1);
  assert.ok(result.includes('https://thailivenow.com/#organization'));
  assert.equal(applyDetailEditorialPolicy(result,path),result);
 }
 const text='3% / 0.5 baht; 15 / 30 minutes. Payment details → See all → Place Order';
 assert.equal(deliveryTextParts(text).map(v=>v.text).join(''),text);
 assert.equal(deliveryTextParts(text).filter(v=>v.strong).length,3);
 for(const locale of deliveryLocales){
  const guide=getDeliveryGuide(locale,'grabfood').guide;
  for(const id of ['signup','payment','cancel']){
   for(const text of guide.sections.find(v=>v.id===id).paragraphs){
    const parts=deliveryTextParts(text,locale);assert.equal(parts.map(v=>v.text).join(''),text);
    for(const part of parts.filter(v=>v.strong))assert.equal(/^\d+(?:\.\d+)?%?$/.test(part.text),false,`Bare-number emphasis: ${locale}`);
   }
  }
  const payment=guide.sections.find(v=>v.id==='payment').paragraphs[1];
  assert.ok(deliveryTextParts(payment,locale).some(v=>v.strong&&v.text.includes('3%')),`${locale}: missing full fee phrase`);
 }
});
