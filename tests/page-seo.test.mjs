import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parse} from 'parse5';
import {applyPageSEO} from '../src/lib/page-seo.mjs';
const nodes=n=>[n,...(n.childNodes||[]).flatMap(nodes)];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const content=(html,name)=>attr(nodes(parse(html)).find(n=>n.nodeName==='meta'&&(attr(n,'name')===name||attr(n,'property')===name)),'content');
const make=(head='',body='')=>`<!doctype html><html lang="ko"><head><title>태국 입국 · TDAC 준비 | ThaiLiveNow</title>${head}</head><body><main><h1>태국 입국 준비</h1>${body}</main></body></html>`;
test('authored conditions stay complete; no title prefix or hard character cut',()=>{
 const description='한국 여권으로 태국에 입국하기 전에 준비할 서류를 안내해요. '+ '적용 조건과 예외를 함께 읽어주세요. '.repeat(15);
 const out=applyPageSEO(make(`<meta name="description" content="${description.trim()}">`),'/ko/authored-sample/');
 assert.equal(content(out,'description'),description.trim());
 assert.equal(content(out,'og:description'),description.trim());
 assert.equal(applyPageSEO(out,'/ko/authored-sample/'),out);
});
test('explicit indexing opt-out and personal pages remain excluded',()=>{
 assert.match(content(applyPageSEO(make('<meta name="tln:indexing" content="noindex">'),'/ko/draft/'),'robots'),/^noindex/);
 assert.match(content(applyPageSEO(make(),'/ko/saved/'),'robots'),/^noindex/);
 assert.match(content(applyPageSEO(make(),'/ko/entry/'),'robots'),/^index/);
});
test('legacy canonical alias and root language redirect remain excluded',()=>{
 const out=applyPageSEO(make(),'/ko/transport/stations/itsaraphap/');
 assert.match(content(out,'robots'),/^noindex/);
 assert.equal(content(out,'og:url'),'https://thailivenow.com/ko/transport/bangkok/stations/itsaraphap/');
 assert.match(content(applyPageSEO(make(),'/'),'robots'),/^noindex/);
});
test('page-specific configured sharing image survives reprocessing',()=>{
 const out=applyPageSEO(make('<meta property="og:image" content="/images/food/roti.jpg"><meta property="og:image:alt" content="태국 로띠">'),'/ko/food/dishes/roti/');
 assert.equal(content(out,'og:image'),'https://thailivenow.com/images/food/roti.jpg');
 assert.equal(content(out,'og:image:alt'),'태국 로띠');
 assert.equal(applyPageSEO(out,'/ko/food/dishes/roti/'),out);
});
test('body and existing FAQ facts are not rewritten by metadata generation',()=>{
 const faq='<script type="application/ld+json">{"@type":"FAQPage","mainEntity":[]}</script>';
 const input=make(faq,'<p>도착일을 포함한 3일 이내에 작성해요.</p>');
 const out=applyPageSEO(input,'/ko/entry/tdac/');
 assert.ok(out.includes(faq));
 assert.equal(out.slice(out.indexOf('<body>')).replace(/<p[^>]*data-tln-editorial-byline[^>]*>[\s\S]*?<\/p>/,''),input.slice(input.indexOf('<body>')));
});
test('existing WebPage metadata stays aligned without changing FAQ evidence',()=>{
 const input=make('<script type="application/ld+json">{"@type":"WebPage","url":"https://example.invalid/","name":"old","description":"old"}</script><meta name="description" content="한국 여권 기준으로 입국을 준비해요.">');
 const out=applyPageSEO(input,'/ko/entry/');
 const scripts=nodes(parse(out)).filter(n=>n.nodeName==='script'&&attr(n,'type')==='application/ld+json');
 const obj=JSON.parse(scripts[0].childNodes[0].value);
 assert.equal(obj.url,'https://thailivenow.com/ko/entry/');
 assert.equal(obj.description,content(out,'description'));
 assert.equal(applyPageSEO(out,'/ko/entry/'),out);
});
test('site audit rejects duplicated indexable metadata instead of only reporting it',async()=>{
 const {mkdtemp,mkdir,writeFile,readFile,rm}=await import('node:fs/promises');
 const {tmpdir}=await import('node:os');
 const {join}=await import('node:path');
 const {fileURLToPath}=await import('node:url');
 const {spawnSync}=await import('node:child_process');
 const temp=await mkdtemp(join(tmpdir(),'tln-seo-test-'));
 try{
  const root=join(temp,'site'); // A fresh checkout has no artifacts directory.
  for(const topic of ['a','b']){
   const path=`/ko/${topic}/`;
   await mkdir(join(root,'ko',topic),{recursive:true});
   await writeFile(join(root,'ko',topic,'index.html'),applyPageSEO(make('<meta name="description" content="한국 여권으로 입국을 준비해요.">'),path));
  }
  const result=spawnSync(process.execPath,[fileURLToPath(new URL('../scripts/audit-seo.mjs',import.meta.url)),root],{cwd:temp,encoding:'utf8'});
  assert.equal(result.status,1);
  const report=JSON.parse(await readFile(join(temp,'artifacts','seo-audit.json'),'utf8'));
  assert.ok(report.errors.some(error=>error.startsWith('Duplicate indexable title')));
  assert.ok(report.errors.some(error=>error.startsWith('Duplicate indexable description')));
 }finally{await rm(temp,{recursive:true,force:true});}
});
test('production verification and analytics survive repeated metadata application',()=>{
 const once=applyPageSEO(make(),'/ko/entry/');
 const twice=applyPageSEO(once,'/ko/entry/');
 assert.equal(twice,once);
 const all=nodes(parse(twice));
 for(const name of ['naver-site-verification','google-site-verification','msvalidate.01'])assert.equal(all.filter(n=>n.nodeName==='meta'&&attr(n,'name')===name).length,1);
 assert.equal(all.filter(n=>n.nodeName==='script'&&attr(n,'data-tln-analytics')!==undefined).length,1);
 assert.match(twice,/thailivenow\.com/);
});
test('breadcrumb root-relative URLs become absolute without changing FAQ, dates, or visible navigation',()=>{
 const faq={'@type':'FAQPage',mainEntity:[{'@type':'Question',name:'어디에서 타나요?',acceptedAnswer:{'@type':'Answer',text:'1층에서 타요.'}}]};
 const schema={'@graph':[{'@type':'BreadcrumbList',itemListElement:[{position:1,item:'/ko/airports/'},{position:2,item:{'@id':'/ko/airport-assistance/airports/bkk/'}},{position:3,name:'현재 안내'}]},faq,{'@type':'Article',dateModified:'2026-10-14'}]};
 const body='<a href="/ko/airports/">태국 공항</a><script type="application/ld+json">'+JSON.stringify(schema)+'</script>';
 const out=applyPageSEO(make('',body),'/ko/airport-assistance/airports/bkk/');
 const scripts=nodes(parse(out)).filter(n=>n.nodeName==='script'&&attr(n,'type')==='application/ld+json');
 const normalized=scripts.map(n=>JSON.parse(n.childNodes[0].value)).find(s=>s['@graph']?.some(x=>x['@type']==='BreadcrumbList'));
 const graph=normalized['@graph'];
 assert.equal(graph[0].itemListElement[0].item,'https://thailivenow.com/ko/airports/');
 assert.equal(graph[0].itemListElement[1].item['@id'],'https://thailivenow.com/ko/airport-assistance/airports/bkk/');
 assert.equal(graph[0].itemListElement[2].item,undefined);
 assert.deepEqual(graph[1],faq);assert.equal(graph[2].dateModified,'2026-10-14');
 assert(out.includes('<a href="/ko/airports/">태국 공항</a>'));
 assert.equal(applyPageSEO(out,'/ko/airport-assistance/airports/bkk/'),out);
});
test('transport aliases inherit the canonical market description without Korean fallback',()=>{
 const canonical=applyPageSEO('<html><head><title>Blue line | ThaiLiveNow</title></head><body><main><h1>Blue line</h1></main></body></html>','/en/transport/bangkok/lines/mrt-blue/');
 const alias=applyPageSEO('<html><head><title>Blue line | ThaiLiveNow</title><meta name="description" content="한국어 설명"></head><body><main><h1>Blue line</h1></main></body></html>','/en/transport/lines/mrt-blue/');
 const desc=html=>html.match(/<meta name="description" content="([^"]+)"/)?.[1];
 assert.equal(desc(alias),desc(canonical));assert.doesNotMatch(desc(alias),/[가-힣]/);assert.match(alias,/noindex,follow/);
});
