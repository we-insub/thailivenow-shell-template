import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';
import {hashes} from './core.mjs';
const root=path.resolve(process.argv[2]||''),p=path.join(root,'release.json'),report=JSON.parse(fs.readFileSync(p));
if(!report.deploymentURL)throw Error('No successful deployment URL');
if(JSON.stringify(hashes(path.join(root,'dist')))!==JSON.stringify(report.hashes))throw Error('Candidate changed after audit');
const production='https://thailivenow.com';
const get=async url=>{for(let i=0;i<3;i++){try{const r=await fetch(url,{signal:AbortSignal.timeout(25000),cache:'no-store'});if(!r.ok)throw Error('HTTP '+r.status);return r;}catch(e){if(i===2)throw e;}}};
const live=await get(production+'/data/site-dates.json').then(r=>r.json());if(live.release?.commit!==report.commit)throw Error('Production commit differs');
// The exact audited tree is uploaded as a unit. Verify key public bytes and all
// language entry points before promoting the candidate to a reusable baseline.
const checks=[];
for(const file of ['data/site-dates.json','sitemap.xml','robots.txt','analytics-consent.mjs','data/cameras.json']) {
 const expected=report.hashes[file];if(!expected)continue;const bytes=Buffer.from(await get(production+'/'+file).then(r=>r.arrayBuffer()));if(createHash('sha256').update(bytes).digest('hex')!==expected)throw Error('Production asset differs: '+file);checks.push(file);
}
const languages=['ko','ms','zh-cn','en','en-in','ru','ja','en-gb','en-us','es','zh-tw'];
const urls=[...new Set([...languages.map(l=>'/'+l+'/'),'/ko/privacy/','/ko/food/street-food/'])];
for(const url of urls){const html=await get(production+url).then(r=>r.text());if(!html.includes(report.commit)||!html.includes('id="site-dates-response"'))throw Error('Missing server snapshot: '+url);checks.push(url);}
const preview=await get(report.deploymentURL+'/ko/');if(!preview.headers.get('x-robots-tag')?.includes('noindex')&&!(await preview.text()).includes('noindex'))throw Error('Preview protection missing');
report.verifiedProduction=true;report.productionChecks=checks;report.verifiedAt=new Date().toISOString();fs.writeFileSync(p,JSON.stringify(report,null,2));console.log(JSON.stringify({verified:true,commit:report.commit,checks:checks.length,baseline:root}));
