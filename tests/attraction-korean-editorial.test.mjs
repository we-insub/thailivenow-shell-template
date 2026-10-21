import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {applyAttractionEditorial} from '../src/lib/attraction-editorial.mjs';
const source=JSON.parse(fs.readFileSync('src/data/attraction-details-ko.json'));const edits=JSON.parse(fs.readFileSync('src/data/attraction-detail-enrichment-ko.json'));
const allowed=new Set(['intro','experiences','rules','faq','facts','factNotes','accessSections','visitServices','visitPrograms','servicesHeading','servicesIntro','programsHeading','programsIntro','experienceHeading','rulesHeading','factsHeading','title','description','type','sources']);
test('Korean editorial revisions preserve venue identity, media rights, dates, links and other markets',()=>{
 for(const [id,patch] of Object.entries(edits)){
  const original=source.find(x=>x.id===id);assert.ok(original,id);
  for(const field of Object.keys(patch))assert.ok(allowed.has(field),id+' forbidden '+field);
  const ko=applyAttractionEditorial(original,'ko',edits);
  for(const field of ['id','name','english','thai','category','photos','address','mapUrl','directionsUrl','indexing','sourceCheckedOn','related'])assert.deepEqual(ko[field],original[field],id+' '+field);
  for(const [,href] of original.sources)assert.ok(ko.sources.some(([,url])=>url===href),id+' source lost '+href);
  for(const locale of ['en','en-us','en-gb','en-in','ms','ja','zh-cn','zh-tw','es','ru'])assert.strictEqual(applyAttractionEditorial(original,locale,edits),original,id+' leaked '+locale);
  for(const section of ko.experiences)assert.ok(section.title&&section.paragraphs?.every(p=>p.trim()),id+' empty section');
 }
});
test('Reviewed factual corrections do not republish unsupported duration, ticket sums, or merged aquarium exhibits',()=>{
 const get=id=>applyAttractionEditorial(source.find(x=>x.id===id),'ko',edits);
 const visible=p=>JSON.stringify([p.intro,p.experiences,p.facts,p.rules,p.faq,p.description,p.type]);
 assert.doesNotMatch(visible(get('wat-arun')),/1[–~\-]2시간/);
 assert.doesNotMatch(JSON.stringify(get('wat-phra-that-doi-suthep').facts),/50바트/);
 assert.doesNotMatch(visible(get('wat-traimit')),/1953|1955/);
 assert.doesNotMatch(visible(get('chiang-mai-night-safari')),/가까이 다가오는 체험으로 소개된 코스는 아니/);
 assert.doesNotMatch(visible(get('bueng-chawak-aquarium')),/상어 터널|터널 주변을 헤엄치는 상어/);
 assert.match(visible(get('wat-phra-singh')),/1863.*추정/);
});
