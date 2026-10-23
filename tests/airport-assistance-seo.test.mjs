import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parse} from 'parse5';
import {applyPageSEO} from '../src/lib/page-seo.mjs';
import {airportLocales,airportLanguageTags,airportAssistanceAlternatePaths} from '../src/lib/airport-guide-navigation.mjs';
import {assistanceCopy,airportEnglishText} from '../src/lib/airport-assistance-copy.mjs';
import {airportIncidentCopy,withIncidentGuides} from '../src/lib/airport-incident-guides.mjs';
import {applyAirportCountryWording} from '../src/lib/airport-country-wording.mjs';
const nodes=n=>[n,...(n.childNodes||[]).flatMap(nodes)];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const make=(locale,title)=>`<html lang="${airportLanguageTags[locale]}"><head><title>${title} | ThaiLiveNow</title></head><body><main><h1>Flight help</h1><p>Find the operating airline and retain your report.</p></main></body></html>`;
test('regional disruption hubs have reciprocal self-referencing alternates without claiming the worldwide directory is a translation',()=>{
 const locales=airportLocales.filter(l=>l!=='en');
 for(const locale of locales){
  const path=`/${locale}/airport-assistance/`,out=applyPageSEO(make(locale,`Flight help · ${locale}`),path);
  const links=nodes(parse(out)).filter(n=>n.nodeName==='link'&&attr(n,'hreflang'));
  assert.equal(links.length,10);
  for(const other of locales)assert(links.some(n=>attr(n,'hreflang')===airportLanguageTags[other]&&attr(n,'href')===`https://thailivenow.com/${other}/airport-assistance/`));
  assert.equal(applyPageSEO(out,path),out);
 }
 for(const path of ['/en/airport-assistance/','/ja/airport-assistance/guides/insurance-claim/','/en-us/airport-assistance/departure-airports/','/zh-tw/airport-assistance/routes/br75-0715/'])assert.equal(airportAssistanceAlternatePaths(path),undefined);
});
test('airport titles retain one regional label and still identify otherwise generic country guides',()=>{
 for(const [locale,country]of [['en-in','India'],['en-in','Indian'],['en-gb','United Kingdom'],['en-gb','UK'],['en-us','United States'],['en-us','USA']]){
  const out=applyPageSEO(make(locale,`Flight help · ${country}`),`/${locale}/airport-assistance/`);
  assert.match(out,new RegExp(`<title>Flight help · ${country} \\| ThaiLiveNow</title>`));
  assert.equal(applyPageSEO(out,`/${locale}/airport-assistance/`),out);
 }
 const generic=applyPageSEO(make('en-us','Baggage reporting'),'/en-us/airport-assistance/guides/test-procedure/');
 assert.match(generic,/<title>Baggage reporting \| ThaiLiveNow · US<\/title>/);
 // Preserve the existing title policy outside this task's airport scope.
 assert.match(applyPageSEO(make('en-us','United States travel'),'/en-us/other/'),/United States travel \| ThaiLiveNow · US/);
});
test('US authored copy and editorial overlays preserve raw evidence, URLs, IDs and other English markets',()=>{
 const source=JSON.parse(fs.readFileSync('public/data/airport-markets/en-us.json')),before=structuredClone(source);
 const revised=applyAirportCountryWording(source,'en-us');
 assert.deepEqual(source,before);
 for(const section of ['airlines','routes','services','guides'])for(const original of source[section]){
  const current=revised[section].find(v=>v.id===original.id);
  for(const key of ['id','sources','checkedAt','phone','email','flightNumber','originIata','destinationIata','market'])assert.deepEqual(current[key],original[key]);
  if(original.thresholds)assert.deepEqual(current.thresholds,original.thresholds.map(row=>({...row,text:airportEnglishText(row.text,'en-us')})));
 }
 assert.equal(assistanceCopy('en-us').incidents[1][0],'My flight has been canceled');
 assert.equal(assistanceCopy('en-gb').incidents[1][0],'My flight has been cancelled');
 assert.match(assistanceCopy('en-us').records[2][0],/itemized/);
 assert.match(airportIncidentCopy('en-us').answer2,/organization/);
 assert.match(airportIncidentCopy('en-gb').answer2,/organisation/);
 const guides=withIncidentGuides(revised,'en-us').guides;
 assert.match(guides.find(g=>g.id==='flight-cancelled').title,/canceled/);
 assert(guides.some(g=>g.id==='flight-cancelled'));
});
