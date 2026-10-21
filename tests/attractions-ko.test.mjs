import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const places=JSON.parse(fs.readFileSync('src/data/attraction-details-ko.json','utf8'));
const ids=new Set(places.map(p=>p.id));
test('Korean attraction records keep distinct identities, evidence and valid internal place relationships',()=>{
 assert.equal(ids.size,places.length);
 for(const p of places){
  assert.ok(p.name&&p.english&&/[\u0E00-\u0E7F]/.test(p.thai),p.id+' three-language identity');
  assert.ok(p.sources.length>0,p.id+' evidence');
  assert.ok(p.intro.length>0&&p.experiences.every(s=>s.title&&s.paragraphs.length>0),p.id+' nonempty copy');
  for(const [label,url] of p.related||[]){const m=url.match(/^\/ko\/attractions\/([^/]+)\/$/);if(m)assert.ok(ids.has(m[1]),p.id+' missing related '+url);assert.ok(label);}
  if(Number.isFinite(p.lat)){assert.ok(p.lat>=5&&p.lat<=21&&p.lng>=97&&p.lng<=106,p.id+' Thailand place point');assert.ok(p.coordinateSource||p.id==='jim-thompson-house',p.id+' coordinate evidence');}
 }
});
test('all attraction details allow indexing while reference-only records do not invent visitor hours',()=>{
 for(const p of places)assert.equal(p.indexing,'index',p.id+' user-authorized indexable detail');
 for(const id of ['bangkok-aquarium','songkhla-aquarium','rayong-aquarium']){const p=places.find(p=>p.id===id);assert.equal(p.catalogListing,'reference');assert.ok(p.reviewHold);assert.ok(!p.facts.some(([label])=>/시간|입장료|요금/.test(label)));}
 const mapping=JSON.parse(fs.readFileSync('src/data/attraction-transport-links-ko.json','utf8'));
 for(const connection of mapping)for(const id of connection.placeIds)assert.ok(ids.has(id),'Station points to missing attraction '+id);
});

test('new attraction photos retain real creators, reuse evidence and distributable local assets',()=>{
 for(const p of places)for(const photo of p.photos||[]){
  assert.ok(photo.credit&&photo.sourceUrl&&photo.rights&&photo.licenseUrl,p.id+' image attribution');
  assert.ok(!/-NC|-ND|all rights reserved/i.test(photo.rights),p.id+' incompatible photo license');
  if(photo.src.startsWith('/images/attractions/')){
   assert.ok(fs.statSync('public'+photo.src).size>1000,p.id+' image asset');
   assert.ok(photo.identityEvidence&&photo.checkedOn&&photo.modifications,p.id+' identity and adaptation record');
   assert.ok(photo.width>=600&&photo.height>0,p.id+' usable image dimensions');
  }
  if(photo.rights.startsWith('GFDL'))assert.ok(fs.readFileSync('public'+photo.licenseUrl,'utf8').includes('Version 1.2, November 2002'),p.id+' full GFDL copy');
 }
});
