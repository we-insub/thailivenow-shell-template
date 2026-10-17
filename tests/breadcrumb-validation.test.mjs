import {test} from 'node:test';
import assert from 'node:assert/strict';
import {breadcrumbUrlErrors} from '../src/lib/breadcrumb-validation.mjs';
import {applyPageSEO} from '../src/lib/page-seo.mjs';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const crumb=item=>({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'홈',item},{'@type':'ListItem',position:2,name:'선착장'}]});
test('Google breadcrumb URL forms reject relative, empty and non-web identifiers',()=>{
 for(const item of ['/ko/','//thailivenow.com/ko/','',{'@id':'/ko/'},{'@id':'https://'},'javascript:alert(1)',null])assert.equal(breadcrumbUrlErrors({'@graph':[crumb(item)]}).length,1);
 for(const item of ['https://thailivenow.com/ko/',{'@id':'https://thailivenow.com/ko/'}])assert.deepEqual(breadcrumbUrlErrors([crumb(item)]),[]);
});
test('the build SEO audit fails on the actual Search Console relative-item defect',()=>{
 const temp=mkdtempSync(join(tmpdir(),'tln-breadcrumb-test-'));
 try{
  const root=join(temp,'dist');mkdirSync(join(root,'ko'),{recursive:true});
  const html=`<!doctype html><html lang="ko"><head><title>선착장 이용 안내 | ThaiLiveNow</title><meta name="description" content="방콕 선착장 위치와 탑승 안내를 살펴보세요."><script type="application/ld+json">${JSON.stringify(crumb('https://thailivenow.com/ko/'))}</script></head><body><main><h1>선착장 이용 안내</h1></main></body></html>`;
  // Inject the defect after metadata preparation so this still tests the
  // audit boundary even when the normal metadata path repairs relative URLs.
  const defective=applyPageSEO(html,'/ko/').replace('\"item\":\"https://thailivenow.com/ko/\"','\"item\":\"/ko/\"');
  writeFileSync(join(root,'ko','index.html'),defective);
  const result=spawnSync(process.execPath,[fileURLToPath(new URL('../scripts/audit-seo.mjs',import.meta.url)),root],{cwd:temp,encoding:'utf8'});
  assert.equal(result.status,1);
  const report=JSON.parse(readFileSync(join(temp,'artifacts','seo-audit.json'),'utf8'));
  assert(report.errors.some(error=>error.includes('BreadcrumbList itemListElement[0].item')));
 }finally{rmSync(temp,{recursive:true,force:true});}
});
