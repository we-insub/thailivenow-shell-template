import test from 'node:test';
import assert from 'node:assert/strict';
import {siteNavigation,navigationLocales,navigationIds,navigationLabels,couponsNavigationEnabled} from '../src/lib/site-navigation.mjs';
import {travelGuideAlternatePaths} from '../src/lib/travel-guide-navigation.mjs';
import {applyPageSEO} from '../src/lib/page-seo.mjs';
import {isDetailPath,sharingImage} from '../src/lib/detail-editorial-policy.mjs';
import beaches from '../src/data/beaches.json' with {type:'json'};
import cities from '../src/data/beach-cities.json' with {type:'json'};
test('all eleven markets follow Korean topic order while coupons stay on owner hold',()=>{
 assert.equal(couponsNavigationEnabled,false);
 assert.deepEqual(navigationIds,['map','destinations','food','transport','airports','cameras','saved','food-delivery','rooftops','beaches','coupons','flight-disruptions']);
 for(const locale of navigationLocales){
  const nav=siteNavigation(locale);assert.equal(nav.length,11);
  assert.deepEqual(nav.map(item=>item[3]),['', 'destinations/','food/','transport/',locale==='ko'?'airports/':'airport-assistance/airports/','directory/','saved/','food-delivery/','rooftops/','beaches/','airport-assistance/'].map(path=>`/${locale}/${path}`));
  assert.ok(nav.every(([full,short])=>full&&short));assert.equal(nav[10][0],navigationLabels[locale][11]);
 }
 assert.deepEqual(siteNavigation('ko').map(([full,short])=>[full,short]),[['지도에서 찾기','지도'],['태국 여행','태국 여행'],['음식','음식'],['교통','교통'],['태국 공항','태국 공항'],['카메라 목록','카메라'],['저장한 카메라','저장'],['음식배달','배달'],['루프탑','루프탑'],['해변','해변'],['항공편 지연·결항','지연·결항']]);
});
test('only published equivalent delivery and pilot beach routes switch to all markets',()=>{
 const suffixes=['beaches/','food-delivery/',...['grabfood','line-man','shopeefood','robinhood'].map(id=>`food-delivery/${id}/`),...beaches.filter(b=>b.pilot).map(b=>`beaches/${b.id}/`),...cities.filter(c=>beaches.some(b=>b.pilot&&b.cityId===c.id)).map(c=>`beaches/cities/${c.id}/`)];
 for(const locale of navigationLocales)for(const suffix of suffixes){const paths=travelGuideAlternatePaths(`/${locale}/${suffix}`);assert.deepEqual(paths,Object.fromEntries(navigationLocales.map(code=>[code,`/${code}/${suffix}`])));}
 for(const path of ['/en/beaches/unknown/','/ja/beaches/cities/unknown/','/ru/food-delivery/unknown/','/fr/beaches/','/en/food/'])assert.equal(travelGuideAlternatePaths(path),undefined);
});
test('new details receive byline, genuine source/date preservation and equivalent hreflang; hubs stay hubs',()=>{
 const beach=beaches.find(b=>b.pilot&&b.photos?.length);
 for(const locale of navigationLocales)for(const suffix of [`beaches/${beach.id}/`,'food-delivery/grabfood/']){
  const pathname=`/${locale}/${suffix}`;
  const photo=suffix.startsWith('beaches')?`<img src="${beach.photos[0].src}" alt="${beach.english}">`:'';
  const input=`<!doctype html><html lang="${locale}"><head><title>Visitor guide</title><meta name="description" content="A complete description of the place and visitor conditions."></head><body><main><h1>Visitor guide</h1><p>Source: <time data-site-date="source" datetime="2026-10-13">2026-10-13</time></p>${photo}</main></body></html>`;
  const output=applyPageSEO(input,pathname);assert.equal(isDetailPath(pathname),true);
  assert.equal((output.match(/data-tln-editorial-byline/g)||[]).length,1);
  assert.equal((output.match(/hreflang=/g)||[]).length,12);assert.ok(output.includes('2026-10-13'));
  assert.equal(sharingImage(input,pathname).status,suffix.startsWith('beaches')?'verified-place-image':'missing-place-image');
  assert.equal(applyPageSEO(output,pathname),output);
 }
 for(const locale of navigationLocales)for(const suffix of ['beaches/','beaches/cities/phuket/','food-delivery/'])assert.equal(isDetailPath(`/${locale}/${suffix}`),false);
});
