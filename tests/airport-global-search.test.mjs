import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {buildGlobalAirportRecords,matchesGlobalRecord,recordsForAirport,englishContactPhone} from '../src/lib/airport-global-search.mjs';
import {selectAirportMarket} from '../src/lib/airport-market-scope.mjs';
test('whole-country search preserves flight, counter contact and guide links in the source market',()=>{const d=selectAirportMarket(JSON.parse(fs.readFileSync('public/data/airport-markets/en-us.json')),'US','en-us');const rows=buildGlobalAirportRecords([{locale:'en-us',data:d}],[]);assert.equal(rows.length,d.routes.length+d.services.length+d.guides.length);assert.ok(rows.some(r=>matchesGlobalRecord(r,'UA878')));assert.ok(rows.some(r=>matchesGlobalRecord(r,'SFO','contact','en-us')));assert.ok(rows.every(r=>r.href.startsWith('/en-us/')));assert.ok(!rows.some(r=>matchesGlobalRecord(r,'SFO','contact','ja')));for(const s of d.services){const r=rows.find(r=>r.id===`en-us:service:${s.id}`);assert.equal(r.phone,s.phone);assert.equal(r.email,s.email);}});
test('common English airline results can be filtered by the market that supplied them',()=>{const rows=buildGlobalAirportRecords([],[{id:'asiana',name:'Asiana Airlines',names:['아시아나항공'],codes:['OZ'],records:[{locale:'ko'}]}]);assert.ok(matchesGlobalRecord(rows[0],'OZ','airline','ko'));assert.ok(!matchesGlobalRecord(rows[0],'OZ','airline','zh-cn'));});

test('short airport codes do not match across ordinary word boundaries',()=>{assert.equal(matchesGlobalRecord({kind:'contact',locale:'ko',search:'daysfor',tokens:'days for'},'SFO'),false);assert.equal(matchesGlobalRecord({kind:'route',locale:'en-us',search:'sfo',tokens:'sfo'},'SFO'),true);assert.equal(matchesGlobalRecord({kind:'route',locale:'ko',search:'oz742',tokens:'oz742'},'OZ'),true);});

test('airport pages keep departure counters at their actual airport even when prose names the destination',()=>{
 const raw=JSON.parse(fs.readFileSync('public/data/airport-markets/en-in.json'));
 const data=selectAirportMarket(raw,'IN','en-in'),rows=buildGlobalAirportRecords([{locale:'en-in',data}],[]);
 const pune=rows.find(r=>r.id==='en-in:service:air-india-express-pnq-terminal');
 assert.ok(pune);assert.equal(matchesGlobalRecord(pune,'BKK'),true);
 const bkk=recordsForAirport(rows,'BKK');
 assert.ok(!bkk.includes(pune));assert.ok(recordsForAirport(rows,'PNQ').includes(pune));
 assert.deepEqual(bkk.filter(r=>r.kind==='contact').map(r=>r.id).sort(),data.services.filter(s=>s.airportIata==='BKK').map(s=>'en-in:service:'+s.id).sort());
 assert.deepEqual(bkk.filter(r=>r.kind==='route').map(r=>r.id).sort(),data.routes.filter(r=>r.originIata==='BKK'||r.destinationIata==='BKK').map(r=>'en-in:route:'+r.id).sort());
 assert.equal(recordsForAirport(rows,undefined),rows);
});

test('English contact labels preserve the recorded international phone digits and ranges',()=>{
 for(const [phone,label] of [['+66-2-134-2895 (방콕 지점)','Bangkok branch'],['+66 2 132 1888 (공항 사무실)','Airport office'],['+66 2 134 5453~5456 (국제선 수하물)','International baggage']]){
  const displayed=englishContactPhone(phone);assert.ok(displayed.includes(label));assert.deepEqual(displayed.match(/\d+/g),phone.match(/\d+/g));assert.equal(displayed.includes('~'),phone.includes('~'));assert.ok(!/[가-힣]/.test(displayed));
 }
 assert.equal(englishContactPhone('+6621321888'),'+6621321888');
});
