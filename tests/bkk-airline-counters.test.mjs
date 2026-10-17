import {test} from 'node:test';import assert from 'node:assert/strict';
import data from '../public/data/airport-assistance.json' with {type:'json'};
import details from '../src/data/bkk-airline-counter-details-ko.json' with {type:'json'};
import {counterGroup,groupCounterServices,departureRoutesForService} from '../src/lib/bkk-airline-counters.mjs';
const services=data.services.filter(s=>s.airportIata==='BKK'||s.airport?.includes('BKK'));
test('BKK services appear once, grouped by job before airline sorting',()=>{
 const groups=groupCounterServices(services);
 assert.deepEqual(groups.map(g=>g.id),['checkin','ticketing','office','baggage','reservation']);
 assert.deepEqual(groups.flatMap(g=>g.services.map(s=>s.id)).sort(),services.map(s=>s.id).sort());
 for(const g of groups){assert.equal(new Set(g.services.map(s=>s.id)).size,g.services.length);assert.deepEqual(g.services.map(s=>s.airline),g.services.map(s=>s.airline).sort((a,b)=>a.localeCompare(b,'ko')));}
 assert.equal(counterGroup(services.find(s=>s.id==='air-premia-bkk-baggage')),'baggage');
 assert.equal(counterGroup(services.find(s=>s.id==='jin-air-bkk-office')),'office');
});
test('counter flight links use BKK departures from the same airline, not incoming flights',()=>{
 for(const s of services.filter(s=>counterGroup(s)==='checkin')){const routes=departureRoutesForService(s,data.routes);assert(routes.length>0,s.id);assert(routes.every(r=>r.originIata==='BKK'&&r.airlineId===s.airlineId));}
 const premia=departureRoutesForService(services.find(s=>s.id==='air-premia-bkk-checkin'),data.routes);
 assert(premia.some(r=>r.flightNumber==='YP602'));assert(!premia.some(r=>r.flightNumber==='YP601'));
});
test('counter explanations preserve weekday boundaries, cabin distinctions and next-day hours',()=>{
 const p=details['air-premia-bkk-checkin'];assert.deepEqual(p.locations.map(r=>r[0]),['화·수·목·토요일','금요일','일요일']);assert.match(p.locations[0][1],/Q구역 5~10번/);assert.match(p.text,/월요일/);
 const thai=details['ko-service-thai-airways-bkk-bfdb856590'];assert.equal(thai.locations[0][0],'일반석');assert.equal(thai.locations[1][0],'로열 실크');
 assert(details['ke-bkk-checkin'].hours.some(([f,t])=>f==='KE656'&&t.includes('다음 날 01:35')));
 assert.match(details['ko-service-asiana-bkk-6a789ad526'].hours[1][1],/A380.*50분/);
});
