import fs from 'node:fs/promises';
import path from 'node:path';
import {parse} from 'parse5';
const root=path.resolve(process.argv[2]||'dist');
async function pages(dir){const results=[];for(const item of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())results.push(...await pages(file));else if(file.endsWith('.html'))results.push(file);}return results;}
const issues=[];let checked=0;
for(const file of await pages(root)){
 const doc=parse(await fs.readFile(file,'utf8')),headers=[],footers=[],mains=[];
 function visit(node){const attrs=Object.fromEntries((node.attrs||[]).map(a=>[a.name,a.value]));if('data-site-header'in attrs)headers.push(node);if('data-site-footer'in attrs)footers.push(node);if(node.tagName==='main')mains.push(node);for(const child of node.childNodes||[])visit(child);}
 visit(doc);checked++;
 if(headers.length!==1||footers.length!==1||mains.length!==1)issues.push({page:path.relative(root,file),headers:headers.length,footers:footers.length,mains:mains.length});
 for(const parent of [...headers,...footers]){
  async function links(node){const attrs=Object.fromEntries((node.attrs||[]).map(a=>[a.name,a.value]));if(node.tagName==='a'&&attrs.href?.startsWith('/')&&!attrs.href.startsWith('//')){const href=attrs.href.split(/[?#]/)[0];const target=path.join(root,href.replace(/^\//,''),href.endsWith('/')?'index.html':'');try{await fs.access(target);}catch{issues.push({page:path.relative(root,file),missingNavigationLink:attrs.href});}}for(const child of node.childNodes||[])await links(child);}
  await links(parent);
 }
}
console.log(JSON.stringify({pages:checked,issues},null,2));if(issues.length)process.exitCode=1;
