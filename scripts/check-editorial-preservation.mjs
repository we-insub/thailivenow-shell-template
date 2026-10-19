import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {parse} from 'parse5';
const [before,after,output='artifacts/editorial-preservation.json']=process.argv.slice(2);
const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(p,e.name)):[path.join(p,e.name)]);
const attr=(n,k)=>n?.attrs?.find(a=>a.name===k)?.value;
const nodes=n=>[n,...(n.childNodes||[]).flatMap(nodes)];
function snapshot(html){const tree=parse(html),main=nodes(tree).find(n=>n.nodeName==='main');if(!main)return null;
 const all=nodes(main),excluded=new Set();for(const n of all){if(attr(n,'data-tln-editorial-byline')!==undefined||attr(n,'data-tln-sharing-credit')!==undefined)nodes(n).forEach(x=>excluded.add(x));if(attr(n,'data-site-date')){let p=n;while(p.parentNode&&!['p','div','li','dd','td','footer'].includes(p.nodeName))p=p.parentNode;nodes(p).forEach(x=>excluded.add(x));}}
 const text=all.filter(n=>n.nodeName==='#text'&&!excluded.has(n)&&!['script','style'].includes(n.parentNode?.nodeName)).map(n=>n.value).join('').replace(/\s+/g,' ').trim();
 const links=all.filter(n=>n.nodeName==='a'&&attr(n,'rel')!=='author'&&!excluded.has(n)).map(n=>attr(n,'href'));
 const media=all.filter(n=>['img','video','iframe','source'].includes(n.nodeName)).map(n=>[n.nodeName,...['src','poster','alt','title','srcset'].map(k=>attr(n,k)||'')]);
 const schemas=nodes(tree).filter(n=>n.nodeName==='script'&&attr(n,'type')==='application/ld+json').flatMap(n=>{try{return[JSON.parse(n.childNodes[0].value)];}catch{return[];}});
 const evidence=[];const visit=v=>{if(!v||typeof v!=='object')return;if([v['@type']].flat().some(t=>['VideoObject','ImageObject','FAQPage'].includes(t)))evidence.push(v);Object.values(v).forEach(x=>Array.isArray(x)?x.forEach(visit):visit(x));};schemas.forEach(visit);
 return {text,links,media,evidence};}
const errors=[],textDifferences=[];let pages=0;
const oldFiles=walk(before).filter(f=>f.endsWith('.html')).map(f=>path.relative(before,f)).sort(),newFiles=walk(after).filter(f=>f.endsWith('.html')).map(f=>path.relative(after,f)).sort();assert.deepEqual(newFiles,oldFiles,'Page URL inventory changed');
for(const file of oldFiles){pages++;const a=snapshot(fs.readFileSync(path.join(before,file),'utf8')),b=snapshot(fs.readFileSync(path.join(after,file),'utf8'));if(!a||!b)continue;for(const key of ['links','media','evidence'])if(JSON.stringify(a[key])!==JSON.stringify(b[key]))errors.push({file,key});if(a.text!==b.text)textDifferences.push({file,before:a.text,after:b.text});}
const report={pages,errors,textDifferences};fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({pages,errors:errors.length,textDifferences:textDifferences.length,output}));assert.equal(errors.length,0,'Links, media, FAQ or actual media creators changed');assert.equal(textDifferences.length,0,'Read preservation text differences before release');
