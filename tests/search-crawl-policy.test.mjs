import test from 'node:test';
import assert from 'node:assert/strict';
import {crawlRobots,sitemapXML} from '../src/lib/search-crawl-policy.mjs';
test('Yeti crawls Korean HTML and shared resources while Google retains all locales',()=>{
 assert.ok(crawlRobots().startsWith('User-agent: Yeti\n'));
 for(const locale of ['en','en-gb','en-in','en-us','ms','zh-cn','ru','ja','es','zh-tw']) assert.ok(crawlRobots().includes(`Disallow: /${locale}/\n`));
 const groups=crawlRobots().split('User-agent: ');
 const rules=agent=>groups.find(s=>s.startsWith(agent+'\n')).split('\n').filter(s=>/^(Allow|Disallow):/.test(s)).map(s=>{const [kind,...rest]=s.split(':');return {kind,pattern:rest.join(':').trim()};});
 const allowed=(agent,path)=>{const matches=rules(agent).filter(r=>new RegExp('^'+r.pattern.replace(/[.+?^{}()|[\]\\]/g,'\\$&').replaceAll('*','.*').replace(/\\\$$/,'$')).test(path)).sort((a,b)=>b.pattern.replaceAll('*','').length-a.pattern.replaceAll('*','').length);return matches[0]?.kind!=='Disallow';};
 for(const path of ['/ko/','/ko/cameras/phuket-cape-panwa/','/_astro/a.js','/images/photo.webp','/data/cameras.json','/sitemap-ko.xml','/site-dates-client.mjs']) assert.equal(allowed('Yeti',path),true,path);
 for(const path of ['/en/','/en-us/','/ja/','/zh-tw/','/ms/','/ru/','/future-language/','/ko-other/']){assert.equal(allowed('Yeti',path),false,path);assert.equal(allowed('*',path),true,path);}
});
test('sitemap serialization preserves URLs and escapes XML characters',()=>{
 const xml=sitemapXML(['https://thailivenow.com/ko/','https://thailivenow.com/ko/test/?a=1&b=2']);
 assert.match(xml,/a=1&amp;b=2/);assert.equal((xml.match(/<loc>/g)||[]).length,2);
});
