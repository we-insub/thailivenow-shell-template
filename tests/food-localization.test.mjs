import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import food from '../src/data/food.json' with {type:'json'};
import {foodLocales,foodData,foodRoutes,getFoodPack} from '../src/lib/food-localized.mjs';
import {travelGuideAlternatePaths} from '../src/lib/travel-guide-navigation.mjs';
import {isDetailPath} from '../src/lib/detail-editorial-policy.mjs';
import {applyPageSEO} from '../src/lib/page-seo.mjs';

test('every non-Korean market has a food pack that matches the Korean reference structure',()=>{
 assert.deepEqual([...foodLocales].sort(),['en','en-gb','en-in','en-us','es','ja','ms','ru','zh-cn','zh-tw']);
 assert.doesNotThrow(()=>execFileSync('node',['scripts/validate-food-pack.mjs'],{stdio:'pipe'}));
});
test('food routes cover the hub, topic pages, cities, dishes and fruits',()=>{
 assert.equal(foodRoutes.length,5+food.cities.length+food.dishes.length+food.fruits.length);
 assert.equal(new Set(foodRoutes).size,foodRoutes.length);
});
test('localized data keeps structure from food.json and takes text from the market pack',()=>{
 for(const locale of foodLocales){
  const data=foodData(locale),pack=getFoodPack(locale);
  assert.equal(data.dishes.length,food.dishes.length);
  assert.equal(data.fruitPrices.length,food.fruitPrices.length);
  data.dishes.forEach((dish,i)=>{
   assert.equal(dish.id,food.dishes[i].id);assert.equal(dish.photo?.src,food.dishes[i].photo?.src);assert.equal(dish.photo?.license,food.dishes[i].photo?.license);
   assert.equal(dish.name,pack.dishes[dish.id].name);assert.equal(dish.english,food.dishes[i].english);
  });
  data.fruits.forEach((fruit,i)=>{assert.deepEqual(fruit.months,food.fruits[i].months);assert.equal(fruit.availabilityKey,food.fruits[i].availability);});
  data.fruitPrices.forEach((row,i)=>{assert.equal(row.min,food.fruitPrices[i].min);assert.equal(row.sourceUrl,food.fruitPrices[i].sourceUrl);});
  for(const [id,[,url]] of Object.entries(data.sources))assert.equal(url,food.sources[id][1]);
 }
});
test('every food page pairs with the same page in all eleven markets and unknown pages stay unpaired',()=>{
 for(const route of foodRoutes){
  const suffix=route?`${route}/`:'';
  const paths=travelGuideAlternatePaths(`/en-gb/food/${suffix}`);
  assert.ok(paths,route);assert.equal(Object.keys(paths).length,11);
  for(const [locale,path] of Object.entries(paths))assert.equal(path,`/${locale}/food/${suffix}`);
  assert.deepEqual(travelGuideAlternatePaths(`/ko/food/${suffix}`),paths);
 }
 assert.equal(travelGuideAlternatePaths('/ms/food/dishes/not-a-dish/'),undefined);
});
test('food details carry the shared detail editorial policy in every market',()=>{
 for(const locale of ['ko',...foodLocales])for(const route of foodRoutes)assert.equal(isDetailPath(`/${locale}/food/${route?route+'/':''}`),/^(?:cities|dishes|fruits)\/|^(?:street-food|traditions|fruit-prices)$/.test(route),`${locale} ${route}`);
});
test('food pages in other markets emit reciprocal hreflang with the market language tags',()=>{
 const html='<!doctype html><html lang="ms-MY"><head><title>Pad Thai | ThaiLiveNow</title><meta name="description" content="x"></head><body><main><h1>Pad Thai</h1><p>Pad Thai is a stir-fried noodle dish found across Thailand.</p></main></body></html>';
 const out=applyPageSEO(html,'/ms/food/dishes/pad-thai/');
 for(const tag of ['ko-KR','ms-MY','zh-Hans-CN','zh-Hant-TW','en','en-IN','en-GB','en-US','ru-RU','ja-JP','es-ES','x-default'])assert.ok(out.includes(`hreflang="${tag}"`),tag);
 assert.ok(out.includes('<link rel="canonical" href="https://thailivenow.com/ms/food/dishes/pad-thai/">'));
});
test('every market meta description for food pages is stored in its meta-descriptions file',()=>{
 for(const locale of foodLocales){
  const stored=JSON.parse(fs.readFileSync(new URL(`../src/data/meta-descriptions/${locale}.json`,import.meta.url),'utf8'));
  const pack=getFoodPack(locale);
  for(const [path,text] of Object.entries(pack.meta))assert.equal(stored[path],text,path);
 }
});
