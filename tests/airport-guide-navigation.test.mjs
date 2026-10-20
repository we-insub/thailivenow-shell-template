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

test('retained airport guide URLs keep their airport navigation instead of disruptions',()=>{
 for(const id of ['late-arrival-suvarnabhumi','late-arrival-don-mueang','late-arrival-phuket','late-arrival-chiang-mai','find-airline-counter','daegu-bangkok-timetable'])assert.equal(isKoreanAirportGuide(`/ko/airport-assistance/guides/${id}/`),true);
});

import {airportLocales,isThaiAirportGuide,thaiAirportHome,thaiAirportLanguagePaths} from '../src/lib/airport-guide-navigation.mjs';
test('Thai-airport navigation and language switches cover all eleven languages without capturing country departure airports',()=>{for(const locale of airportLocales){assert.ok(isThaiAirportGuide(thaiAirportHome(locale)));for(const code of ['bkk','dmk','hkt','cnx']){const p=`/${locale}/airport-assistance/airports/${code}/`;assert.ok(isThaiAirportGuide(p));for(const target of airportLocales)assert.equal(thaiAirportLanguagePaths(p)[target],`/${target}/airport-assistance/airports/${code}/`);}assert.equal(isThaiAirportGuide(`/${locale}/airport-assistance/airports/lax/`),false);assert.equal(thaiAirportLanguagePaths(thaiAirportHome(locale)).ko,'/ko/airports/');}});
