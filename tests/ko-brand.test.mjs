import test from 'node:test';
import assert from 'node:assert/strict';
import {applyPageSEO} from '../src/lib/page-seo.mjs';
import {siteBrand} from '../src/lib/site-brand.mjs';
const page='<html lang="ko"><head><title>장소 안내 | ThaiLiveNow</title><meta name="description" content="기존 소개와 조건입니다."></head><body><main><h1>장소 안내</h1><p>공식 제공처·80바트·4층</p></main></body></html>';
test('Korean display name and metadata retain the English organization and canonical URL',()=>{
 const out=applyPageSEO(page,'/ko/cameras/test/');
 assert.match(out,/<title>장소 안내 \| 태국라이브나우<\/title>/);
 assert.match(out,/og:site_name" content="태국라이브나우"/);
 assert.match(out,/rel="author" href="\/ko\/">태국라이브나우<\/a>/);
 assert.match(out,/"name":"ThaiLiveNow"/);
 assert.match(out,/https:\/\/thailivenow.com\/ko\/cameras\/test\//);
 assert.ok(out.includes('공식 제공처·80바트·4층'));
 assert.equal(applyPageSEO(out,'/ko/cameras/test/'),out);
});
test('English name remains unchanged for all ten other markets',()=>{
 for(const locale of ['en','en-us','en-gb','en-in','ja','ms','ru','es','zh-cn','zh-tw']){
 assert.equal(siteBrand(locale),'ThaiLiveNow');
 const out=applyPageSEO(page.replace('lang="ko"',`lang="${locale}"`),`/${locale}/cameras/test/`);
 assert.ok(!out.includes('태국라이브나우'),locale);
 assert.match(out,/og:site_name" content="ThaiLiveNow"/);
 }
});
