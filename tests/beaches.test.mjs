import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {beachMatchesHomeFilter} from '../src/lib/home-map-filters.mjs';
import {isDetailPath} from '../src/lib/detail-editorial-policy.mjs';
const beaches=JSON.parse(fs.readFileSync(new URL('../src/data/beaches.json',import.meta.url)));
const cities=JSON.parse(fs.readFileSync(new URL('../src/data/beach-cities.json',import.meta.url)));
test('beach filters separate islands in the same province and retain the actual province spelling',()=>{
 const matching=filters=>beaches.filter(b=>beachMatchesHomeFilter(b,filters)).map(b=>b.id);
 assert.deepEqual(matching({cityId:'phi-phi'}),['maya-bay','loh-dalum']);
 assert.deepEqual(matching({province:'Phangnga'}),['nang-thong','bang-niang']);
 assert.deepEqual(matching({query:'라마이'}),['lamai']);
 assert.deepEqual(matching({cityId:'ko-samet',query:'파통'}),[]);
 assert.equal(beachMatchesHomeFilter({...beaches[0],coordinateVerified:false}),false);
 assert.equal(beachMatchesHomeFilter({...beaches[0],pilot:false}),false);
});
test('beach details get the editorial policy while city hubs remain hubs',()=>{
 for(const b of beaches)assert.equal(isDetailPath(`/ko/beaches/${b.id}/`),true);
 for(const c of cities)assert.equal(isDetailPath(`/ko/beaches/cities/${c.id}/`),false);
 assert.equal(isDetailPath('/ko/beaches/'),false);
});
test('published beaches keep source evidence and belong to a real city hub',()=>{
 assert.equal(new Set(beaches.map(b=>b.id)).size,beaches.length);
 for(const b of beaches){assert.ok(cities.some(c=>c.id===b.cityId));assert.ok(b.sources.some(s=>s[1]===b.coordinateSource));for(const p of b.photos){assert.ok(p.rights&&p.credit&&p.sourceUrl&&p.licenseUrl);}}
 for(const c of cities)assert.ok(beaches.some(b=>b.cityId===c.id&&b.pilot));
});
