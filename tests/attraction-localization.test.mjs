import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {isDetailPath} from '../src/lib/detail-editorial-policy.mjs';
import {applyPageSEO} from '../src/lib/page-seo.mjs';
const source=JSON.parse(fs.readFileSync('src/data/attraction-details-ko.json','utf8'));
const markets=['ko','ms','zh-cn','en','en-in','ru','ja','en-gb','en-us','es','zh-tw'];
const read=l=>JSON.parse(fs.readFileSync(`src/data/attraction-locales/${l}.json`,'utf8'));
test('every attraction locale has complete visitor prose, conditions and matching media/source counts',()=>{
 for(const locale of ['en','ms','ja','zh-cn','zh-tw','es','ru']){
  const copy=read(locale);assert.equal(Object.keys(copy).length,87,locale);
  for(const p of source){const c=copy[p.id];assert.ok(c,`${locale}/${p.id}`);assert.ok(c.title?.includes('ThaiLiveNow'),`${locale}/${p.id} title`);assert.ok(c.description?.trim());assert.equal(c.intro.length,p.intro.length);assert.equal(c.experiences.length,p.experiences.length);p.experiences.forEach((v,i)=>assert.equal(c.experiences[i].paragraphs.length,v.paragraphs.length));
   for(const field of ['facts','factNotes','rules','accessSections','faq','visitServices','visitPrograms','photos','sources','related'])if(p[field]){assert.equal(c[field]?.length,p[field].length,`${locale}/${p.id}/${field}`);}
   for(const field of ['id','english','thai','category'])if(p[field])assert.equal(c[field],p[field]);
   p.sources.forEach((s,i)=>assert.equal(c.sources[i][1],s[1],`${locale}/${p.id}/source-url`));
  }
 }
});
test('English regional editions have explicit search titles without changing shared Thailand data',()=>{
 for(const locale of ['en-in','en-gb','en-us']){const copy=read(locale);assert.equal(Object.keys(copy).length,87);for(const p of source){assert.ok(copy[p.id]?.title?.includes('ThaiLiveNow'));for(const k of ['lat','lng','address','sourceCheckedOn','photos','sources','indexing'])assert.equal(copy[p.id][k],undefined,`${locale}/${p.id} protected ${k}`);}}
});
test('all eleven attraction details receive organization authorship; categories remain collections',()=>{
 for(const locale of markets){for(const p of source)assert.equal(isDetailPath(`/${locale}/attractions/${p.id}/`),true);assert.equal(isDetailPath(`/${locale}/attractions/`),false);assert.equal(isDetailPath(`/${locale}/attractions/categories/temples/`),false);
  const html=`<!doctype html><html lang="${locale}"><head><title>Wat Pho | ThaiLiveNow</title><meta name="description" content="Temple grounds and admission."></head><body><main><h1>Wat Pho</h1><p>300 THB</p></main></body></html>`;
  const out=applyPageSEO(html,`/${locale}/attractions/wat-pho/`);assert.match(out,/data-tln-editorial-byline/);assert.match(out,/https:\/\/thailivenow.com\/#organization/);assert.equal(applyPageSEO(out,`/${locale}/attractions/wat-pho/`),out);
 }
});
