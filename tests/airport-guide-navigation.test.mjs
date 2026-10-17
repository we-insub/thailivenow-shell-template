import test from 'node:test';
import assert from 'node:assert/strict';
import {isKoreanAirportGuide} from '../src/lib/airport-guide-navigation.mjs';
import {bkkGuidePages} from '../src/data/bkk-guide-pages.mjs';
test('the five BKK topics keep the airport navigation home, including the retained transport URL',()=>{
 for(const page of bkkGuidePages)assert.equal(isKoreanAirportGuide(page.url),true,page.url);
 for(const code of ['dmk','hkt','cnx'])assert.equal(isKoreanAirportGuide(`/ko/airport-assistance/airports/${code}/`),true);
});
test('airport navigation does not capture disruptions, unrelated transport, or other markets',()=>{
 for(const path of ['/ko/airport-assistance/','/ko/airport-assistance/guides/flight-delayed/','/ko/airport-assistance/guides/flight-cancelled/','/ko/transport/guides/air/','/ja/airport-assistance/airports/bkk/','/ko/airport-assistance/airports/icn/'])assert.equal(isKoreanAirportGuide(path),false,path);
});
