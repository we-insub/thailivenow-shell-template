import test from 'node:test';
import assert from 'node:assert/strict';
import {applyPageSEO} from '../src/lib/page-seo.mjs';
import overrides from '../src/data/page-seo-overrides.json' with {type:'json'};
import {siteNavigation} from '../src/lib/site-navigation.mjs';
const fixture=locale=>`<!doctype html><html lang="${locale}"><head><title>Original page | ThaiLiveNow</title><meta name="description" content="Original description"></head><body><main><h1>Original page</h1><p>Existing body and sources stay intact.</p></main></body></html>`;
test('every Korean navigation landing has unique metadata and consistent sharing tags',()=>{
 const titles=new Set();
 for(const [,,,path] of siteNavigation('ko')){
  const copy=overrides[path];assert.ok(copy?.title&&copy?.description,path);
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
 for(const path of ['/ja/food/','/en/directory/','/en-us/transport/'])assert.ok(applyPageSEO(fixture(path.split('/')[1]),path).includes('<title>Original page | ThaiLiveNow'));
});
