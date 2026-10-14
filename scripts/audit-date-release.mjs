import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {walk,bindDates} from './prepare-site-dates.mjs';
const [original,candidate]=process.argv.slice(2);if(!original||!candidate)throw Error('Usage: audit-date-release ORIGINAL CANDIDATE');
const dates=JSON.parse(fs.readFileSync(path.join(candidate,'data/site-dates.json')));
const allowed=new Set(['data/site-dates.json','site-dates-client.mjs','_routes.json']);const issues=[];let html=0,assets=0,schemas=0;
for(const file of walk(original)){const name=path.relative(original,file),out=path.join(candidate,name);if(!fs.existsSync(out)){issues.push(name+': deleted');continue;}
 const before=fs.readFileSync(file),after=fs.readFileSync(out);
 if(name.endsWith('.html')){html++;const expected=bindDates(before.toString(),'/'+name.replace(/index\.html$/,''),dates).html;
  if(after.toString()!==expected)issues.push(name+': unrelated HTML change');
  const ld=s=>[...s.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(x=>x[1]);
  schemas+=ld(before.toString()).length;if(JSON.stringify(ld(before.toString()))!==JSON.stringify(ld(after.toString())))issues.push(name+': schema changed');
 }else{assets++;if(!before.equals(after)&&!allowed.has(name))issues.push(name+': unrelated asset change');}
}
for(const file of walk(candidate)){const name=path.relative(candidate,file);if(!fs.existsSync(path.join(original,name))&&!allowed.has(name))issues.push(name+': unrelated added asset');}
const report={html,assets,schemas,allowedAddedAssets:[...allowed],issues};fs.mkdirSync('artifacts/site-dates-20261015',{recursive:true});fs.writeFileSync('artifacts/site-dates-20261015/release-scope-audit.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));assert.equal(issues.length,0);
