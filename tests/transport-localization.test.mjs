import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {transportSourceRoutes,transportRoute,transportLanguagePaths,transportHref,translateTransportText,localizeTransportData} from '../src/lib/transport-localization-core.mjs';
import {applyTransportLocalization,transportFormat} from '../src/lib/transport-localization.mjs';
test('registry preserves all Korean route identities and nine canonical aliases',()=>{
 assert.equal(transportSourceRoutes.length,444);assert.equal(new Set(transportSourceRoutes.map(r=>r.suffix)).size,444);
 assert.equal(transportSourceRoutes.filter(r=>r.suffix===r.canonicalSuffix).length,435);
 const stations=JSON.parse(fs.readFileSync(new URL('../src/data/transport/bangkok-stations.json',import.meta.url)));assert.equal(transportSourceRoutes.filter(r=>r.kind==='station').length,stations.length);
 const buses=JSON.parse(fs.readFileSync(new URL('../src/data/transport/bus-terminals.json',import.meta.url)));assert.equal(transportSourceRoutes.filter(r=>r.kind==='bus-route').length,buses.routes.length);
 assert.equal(transportRoute('/jp/transport/'),undefined);assert.equal(transportRoute('/ja/transport/imaginary/'),undefined);
 assert.equal(transportLanguagePaths('/ja/transport/bangkok/').ko,'/ko/transport/bangkok/');
});
test('only registered transport routes change market, preserving parameters and fragments',()=>{
 assert.equal(transportHref('/ko/transport/guides/rail/?line=arl#map','ja'),'/ja/transport/guides/rail/?line=arl#map');
 assert.equal(transportHref('/ko/transport/piers/sathorn/?x=1#map','ru'),'/ru/transport/bangkok/piers/sathorn/?x=1#map');
 assert.equal(transportHref('/ko/transport/unknown/','ja'),'/ko/transport/unknown/');
 assert.equal(transportHref('https://example.org/?lang=ko','ja'),'https://example.org/?lang=ko');
});
test('complete authored templates reorder variables and exact data without substring substitution',()=>{
 const d={'시암':'Siam','방콕':'Bangkok','${v0}역에서 ${v1}로 가요.':'Travel to ${v1} from ${v0} station.'};
 assert.equal(translateTransportText('시암역에서 방콕로 가요.',d),'Travel to Bangkok from Siam station.');
 assert.equal(translateTransportText('시암에 관한 없는 문장',d),'시암에 관한 없는 문장');
 assert.equal(translateTransportText(' 시암 →',d),' Siam →');
 const data={id:'node-123',coordinates:[100.5,13.7],label:'시암',url:'https://official.example/a?q=1',unknown:null,closed:false,fare:0};
 const out=localizeTransportData(data,'ja',d);assert.equal(out.label,'Siam');for(const key of ['id','coordinates','url','unknown','closed','fare'])assert.deepEqual(out[key],data[key]);assert.equal(localizeTransportData(data,'ko',d),data);
});
test('native projection precedes SEO, localizes data payloads and preserves external identity',()=>{
 const html='<!doctype html><html lang="ko"><head><title>시암</title><script type="application/ld+json">{"@type":"Article","inLanguage":"ko","provider":{"name":"External"}}</script></head><body><main><h1>시암</h1><a href="/ko/transport/guides/rail/?line=arl#map">시암</a><a href="/ko/missing/">시암</a><div data-points="[{&quot;name&quot;:&quot;시암&quot;}]"></div></main></body></html>';
 const result=applyTransportLocalization(html,'/ja/transport/bangkok/',{dictionary:{시암:'Siam'}});
 assert.match(result,/lang="ja-JP"/);assert.match(result,/\/ja\/transport\/guides\/rail\/\?line=arl#map/);assert.doesNotMatch(result,/href="\/ko\/missing\//);assert.match(result,/&quot;name&quot;:&quot;Siam&quot;/);assert.match(result,/"inLanguage":"ja-JP"/);assert.match(result,/"name":"External"/);
 assert.equal(applyTransportLocalization(result,'/ja/transport/bangkok/',{dictionary:{시암:'Siam'}}),result);
 assert.equal(applyTransportLocalization(html,'/ko/transport/bangkok/'),html);
});
test('explicit formats preserve all parameters and reject missing values',()=>{assert.equal(transportFormat('${a} → ${b}',{a:'A',b:'B'},'ko'),'A → B');assert.throws(()=>transportFormat('${a}',{},'ko'),/Missing transport/);});
test('authored entities and numbered navigation preserve layout without leaving Korean labels',()=>{
 const dictionary={'&gt; 시암':'&gt; Siam','시암':'Siam','파야타이 (Phaya Thai)':'Phaya Thai','출발 ${v0}일 뒤':'${v0} day after departure'};
 assert.equal(translateTransportText('> 시암',dictionary),'> Siam');
 assert.equal(translateTransportText('2. 파야타이 (Phaya Thai) →',dictionary),'2. Phaya Thai →');
 assert.equal(translateTransportText('› 시암',dictionary),'› Siam');
 assert.equal(translateTransportText('09:30 (출발 1일 뒤)',dictionary),'09:30 (1 day after departure)');
});
test('noscript content is translated as markup and absent source dates are not invented',()=>{
 const html='<!doctype html><html><head></head><body><main><noscript><p>시암</p></noscript><p>출처 확인일: 2026-10-15</p><time data-date-locale="ko">2026-10-17</time></main></body></html>';
 const result=applyTransportLocalization(html,'/en/transport/guides/train/',{dictionary:{시암:'Siam'}});
 assert.match(result,/<noscript><p>Siam<\/p><\/noscript>/);assert.doesNotMatch(result,/출처 확인일|2026-10-15/);assert.match(result,/data-date-locale="en"/);
});
test('Latin translations keep word boundaries around emphasized Korean fragments',()=>{
 const html='<html><head></head><body><main><p><strong>태국 현지 시각</strong>이에요.</p></main></body></html>';
 const result=applyTransportLocalization(html,'/en/transport/guides/train/',{dictionary:{'태국 현지 시각':'Thailand local time','이에요.':'is the time to use.'}});
 assert.match(result,/<strong>Thailand local time<\/strong> is the time to use\./);
 assert.equal(applyTransportLocalization(result,'/en/transport/guides/train/',{dictionary:{}}),result);
});
test('boat planner localizes boarding and final connection as distinct authored units',()=>{
 for(const locale of ['en','en-gb','en-in','en-us','ja','zh-cn','zh-tw','ms','ru','es']){
  const dictionary=Object.assign({},...['','ui-','supplement-'].map(prefix=>JSON.parse(fs.readFileSync(new URL(`../src/data/transport-locales/${prefix}${locale}.json`,import.meta.url))).strings));
  const boarding=translateTransportText('Sathorn에서 승선 → ICONSIAM에서 하선 →',dictionary);
  for(const connection of ['ICONSIAM까지 도보','호텔 전용 셔틀 → Mandarin Oriental']){
   const rendered=boarding+' '+translateTransportText(connection,dictionary);
   assert.doesNotMatch(rendered,/[가-힣]/,`${locale}: ${rendered}`);
   for(const identity of ['Sathorn','ICONSIAM'])assert.ok(rendered.includes(identity));
  }
 }
 const source=fs.readFileSync(new URL('../src/components/BoatNetwork.astro',import.meta.url),'utf8');
 assert.ok(source.includes("transportText(origin.name_ko+'에서 승선 → '+choice.pier.name_ko+'에서 하선 →')"));
});
test('language picker preserves the Korean alternate rather than rewriting it to the current market',()=>{
 const source='<html><head></head><body><header><details class="language-picker"><a href="/ko/transport/guides/boat/">한국어</a><a href="/ja/transport/guides/boat/">日本語</a></details></header><main><a href="/ko/transport/guides/boat/">보트</a></main></body></html>';
 const html=applyTransportLocalization(source,'/en/transport/guides/boat/',{dictionary:{한국어:'Korean',보트:'Boats'}});
 assert.match(html,/<a href="\/ko\/transport\/guides\/boat\/">한국어<\/a>/);
 assert.match(html,/<main><a href="\/en\/transport\/guides\/boat\/">Boats<\/a>/);
});
