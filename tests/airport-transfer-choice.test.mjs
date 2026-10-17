import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {compareAirportTransfer, getTransferDestinations} from '../src/lib/airport-transfer-choice.mjs';
const guide = JSON.parse(fs.readFileSync(new URL('../src/data/transport/airport-guides/suvarnabhumi-to-bangkok.json', import.meta.url)));
const choose = (patch={}) => compareAirportTransfer(guide,{destination:'asok',time:'14:00',luggage:'light',preference:'compare',...patch});
test('reviewed adult fares, route and time exclusions remain separate',()=>{
  for (const [destination, fare] of [['asok','52바트'],['silom','62바트'],['old-town','74바트']]) assert.equal(choose({destination}).place.fare,fare);
  assert.equal(choose().place.route,'ARL 마카산 → MRT 펫차부리 → 수쿰윗');
  assert.match(choose().place.duration,/24~27분/);
  assert.match(choose({destination:'siam'}).place.fare,/BTS.*추가/);
  assert.match(choose({destination:'siam'}).place.fareParts,/45바트.*별도/);
});
test('midnight and opening boundary never imply an available train or connection',()=>{
  for(const time of ['00:00','00:01','05:29']) {const r=choose({time});assert.equal(r.withinHours,false);assert.equal(r.roadFirst,true);assert.match(r.railStatus,/시간.*밖/);}
  for(const time of ['05:30','12:00','23:59']) {const r=choose({time});assert.equal(r.withinHours,true);assert.match(r.railStatus,/실제 열차 출발시각.*막차.*별도로/);}
});
test('Khao San cannot acquire a fabricated direct rail route, fare or duration',()=>{
  for(const time of ['00:00','14:00','23:59']) {const r=choose({destination:'khao-san',time});assert.equal(r.hasRailRoute,false);assert.equal(r.roadFirst,true);assert.match(r.railStatus,/직결역이 없어요/);}
});
test('luggage and door-to-door preference reorder choices without changing facts',()=>{
  const base=choose();assert.equal(base.roadFirst,false);
  for(const patch of [{luggage:'many'},{preference:'door'}]) {const r=choose(patch);assert.equal(r.roadFirst,true);assert.deepEqual(r.place,base.place);}
});
test('bad and incomplete input is rejected; current/browser time is never substituted',()=>{
  for(const time of ['', '24:00','23:60','-1:00','1:00','hello']) assert.throws(()=>choose({time}));
  assert.throws(()=>choose({destination:'dmk'}));assert.throws(()=>choose({luggage:''}));assert.throws(()=>choose({preference:''}));
});
test('table reordering preserves destination identity and original guide remains untouched',()=>{
  const before=JSON.stringify(guide), copy=structuredClone(guide);
  copy.sections.find(s=>s.id==='destinations').table.rows.reverse();
  assert.deepEqual(getTransferDestinations(copy),getTransferDestinations(guide));
  choose();assert.equal(JSON.stringify(guide),before);
  copy.sections.find(s=>s.id==='destinations').table.rows.pop();assert.throws(()=>getTransferDestinations(copy));
});
