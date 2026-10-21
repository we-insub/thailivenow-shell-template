import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {parse} from 'parse5';
import {sharingImage,isDetailPath} from '../src/lib/detail-editorial-policy.mjs';
const root=path.resolve(process.argv[2]||'dist');
const reportPath=process.argv[3]||'artifacts/representative-image-audit.json';
const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(p,e.name)):[path.join(p,e.name)]);
const nodes=n=>[n,...(n.childNodes||[]).flatMap(nodes)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const rows=[],errors=[];
for(const file of walk(root).filter(f=>f.endsWith('.html'))){const pathname='/'+path.relative(root,file).replaceAll(path.sep,'/').replace(/index\.html$/,'');const html=fs.readFileSync(file,'utf8'),chosen=sharingImage(html,pathname);if(!chosen)continue;const all=nodes(parse(html)),meta=k=>attr(all.find(n=>n.nodeName==='meta'&&(attr(n,'name')===k||attr(n,'property')===k)),'content');const image=meta('og:image'),alt=meta('og:image:alt');
 if(image!==chosen.url||image!==meta('twitter:image')||alt!==chosen.alt||alt!==meta('twitter:image:alt'))errors.push(pathname+': social metadata mismatch');
 if(chosen.status==='verified-place-image'){
  if(!chosen.sourceUrl||!chosen.license||!chosen.credit)errors.push(pathname+': incomplete reuse evidence');
  const local=new URL(image);if(local.origin==='https://thailivenow.com'&&(!fs.existsSync(root+local.pathname)||fs.statSync(root+local.pathname).size<5000))errors.push(pathname+': absent/tiny asset');
  if(chosen.width&&chosen.height&&(chosen.width<150||chosen.height<150||Math.max(chosen.width/chosen.height,chosen.height/chosen.width)>3))errors.push(pathname+': unsuitable dimensions');
  if(!all.some(n=>attr(n,'data-tln-sharing-credit')!==undefined))errors.push(pathname+': visible attribution missing');
 }
 rows.push({path:pathname,type:isDetailPath(pathname)?'detail':'hub-or-other',image,status:chosen.status,source:chosen.sourceUrl||null});
}
const grouped={};for(const row of rows){const topic=row.path.split('/')[2]||'home';const key=topic+':'+row.status;grouped[key]=(grouped[key]||0)+1;}
const report={pages:rows.length,verified:rows.filter(r=>r.status==='verified-place-image').length,fallback:rows.filter(r=>r.status==='missing-place-image').length,grouped,errors,rows};fs.mkdirSync(path.dirname(reportPath),{recursive:true});fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,rows:undefined}));assert.equal(errors.length,0,'Representative image audit failed');
