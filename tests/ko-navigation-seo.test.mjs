import test from 'node:test';
import assert from 'node:assert/strict';
import {applyPageSEO} from '../src/lib/page-seo.mjs';
import overrides from '../src/data/page-seo-overrides.json' with {type:'json'};
import koMeta from '../src/data/meta-descriptions/ko.json' with {type:'json'};
import {siteNavigation} from '../src/lib/site-navigation.mjs';
const fixture=locale=>`<!doctype html><html lang="${locale}"><head><title>Original page | ThaiLiveNow</title><meta name="description" content="Original description"></head><body><main><h1>Original page</h1><p>Existing body and sources stay intact.</p></main></body></html>`;
test('every Korean navigation landing has unique metadata and consistent sharing tags',()=>{
 const titles=new Set();
 for(const [,,,path] of siteNavigation('ko')){
  const base=overrides[path];assert.ok(base?.title&&base?.description,path);
  const copy={...base,description:koMeta[path]||base.description};
  assert.ok(!titles.has(copy.title),path);titles.add(copy.title);
  const input=fixture('ko'),html=applyPageSEO(input,path);
  assert.ok(html.includes(`<title>${copy.title}</title>`),path);
  for(const name of ['description','og:description','twitter:description'])assert.ok(html.includes(`<meta ${name.startsWith('og:')?'property':'name'}="${name}" content="${copy.description}">`),name);
  assert.equal(applyPageSEO(html,path),html,path);
  assert.ok(html.includes('<h1>Original page</h1>'),path);
  if(path==='/ko/saved/')assert.match(html,/<meta name="robots" content="noindex,follow">/);
 }
});
test('Korean landing titles do not override another market or a detail page',()=>{
 assert.ok(applyPageSEO(fixture('en'),'/en/directory/').includes('<title>Original page | ThaiLiveNow'));
 // Other markets' hubs carry their own authored titles, never the Korean landing title.
 for(const path of ['/ja/food/','/en-us/transport/']){
  const title=applyPageSEO(fixture(path.split('/')[1]),path).match(/<title>([^<]*)<\/title>/)[1];
  assert.equal(title,overrides[path].title,path);
  assert.doesNotMatch(title,/[가-힣]/,path);
 }
});
