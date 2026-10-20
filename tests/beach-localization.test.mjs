import test from 'node:test';
import assert from 'node:assert/strict';
import raw from '../src/data/beaches.json' with {type:'json'};
import cities from '../src/data/beach-cities.json' with {type:'json'};
import {beachLocales,getBeachLocale} from '../src/lib/beach-localization.mjs';
import {isDetailPath} from '../src/lib/detail-editorial-policy.mjs';
const preserved=['id','english','thai','cityId','province','area','lat','lng','pilot','coordinateVerified','coordinateSource','checkedAt','verifiedSwimmingConditions','relatedCameraIds','gaps'];
test('the ten market routes preserve the published Korean beach set and evidence',()=>{
 assert.equal(beachLocales.length,10);
 const ko=raw.filter(b=>b.pilot);
 assert.deepEqual(getBeachLocale('ko').beaches,ko);
 for(const locale of beachLocales){
  const native=getBeachLocale(locale);
  assert.deepEqual(native.cities.map(c=>c.id),cities.map(c=>c.id));
  assert.deepEqual(native.beaches.map(b=>b.id),ko.map(b=>b.id));
  for(const [i,b] of native.beaches.entries()){
   for(const k of preserved)assert.deepEqual(b[k],ko[i][k],`${locale}/${b.id}/${k}`);
   assert.deepEqual(b.sources.map(x=>x[1]),ko[i].sources.map(x=>x[1]));
   assert.deepEqual(b.transport.map(x=>[x.sourceUrl,x.directionsUrl]),ko[i].transport.map(x=>[x.sourceUrl,x.directionsUrl]));
   assert.equal(b.photos.length,2);
   for(const [n,p] of b.photos.entries())for(const [k,v] of Object.entries(ko[i].photos[n]))if(!['alt','caption'].includes(k))assert.deepEqual(p[k],v,`${locale}/${b.id}/photo${n}/${k}`);
   assert.equal(b.faq.length,ko[i].faq.length,`${locale}/${b.id} FAQ count`);
   assert.equal(b.experience.length,ko[i].experience.length);
   assert.equal(b.experienceTitles.length,b.experience.length);
   assert.equal(b.editorialReview.pass,false,'KO review must not become native approval');
   assert.ok(isDetailPath(`/${locale}/beaches/${b.id}/`));
  }
 }
});
test('every visible field is native and complete, without silent Korean or English fallback',()=>{
 for(const locale of beachLocales){
  const {beaches,cities,ui}=getBeachLocale(locale);
  const body=[];
  for(const b of beaches){
   body.push(b.name,b.city,b.intro,b.title,b.description,...b.experience,...b.experienceTitles,...b.faq.flat(),...b.sources.map(x=>x[0]),...b.photos.flatMap(p=>[p.alt,p.caption]),...['accessConditions','facilities','swimming','seasons'].flatMap(k=>b[k].flatMap(r=>[r.label,r.value])),...b.transport.flatMap(r=>[r.name,r.instructions]));
   assert.ok(b.intro.length>40 && b.transport[0].instructions.length>25,`${locale}/${b.id} missing body`);
   assert.equal(b.faq.at(-1)[1],ui.redAnswer);
   assert.equal(b.seasons[0].value,b.id==='maya-bay'?ui.mayaSeason:ui.season);
  }
  body.push(...cities.flatMap(c=>[c.name,c.intro]),...Object.values(ui));
  assert.ok(body.every(x=>typeof x==='string'&&x.trim()),`${locale} missing native text`);
  assert.ok(body.every(x=>!/[가-힣]/.test(x)),`${locale} leaked Korean`);
  assert.equal(new Set(beaches.map(b=>b.title)).size,beaches.length);
  assert.equal(new Set(beaches.map(b=>b.description)).size,beaches.length);
 }
 assert.throws(()=>getBeachLocale('fr'));
});
test('English market wording and real dates remain separate from nationality conditions',()=>{
 assert.ok(getBeachLocale('en-us').beaches[0].experience[0].includes('traveling'));
 assert.ok(getBeachLocale('en-gb').beaches[0].experience[0].includes('travelling'));
 for(const locale of beachLocales){const b=getBeachLocale(locale).beaches.find(b=>b.id==='maya-bay');assert.ok(/2026/.test(b.accessConditions[0].value));assert.equal(b.checkedAt,'2026-10-20');}
});
