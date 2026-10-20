import { crawlRobots, sitemapXML } from '../src/lib/search-crawl-policy.mjs';
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { parse } from 'parse5';
import { applyPageSEO } from '../src/lib/page-seo.mjs';
import { breadcrumbUrlErrors } from '../src/lib/breadcrumb-validation.mjs';
const root = process.argv[2] || 'dist';
async function files(dir) { return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(async e=>e.isDirectory()?files(`${dir}/${e.name}`):e.name.endsWith('.html')?[`${dir}/${e.name}`]:[]))).flat(); }
const nodes = n=>[n,...(n.childNodes||[]).flatMap(nodes)];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
const pages=[];const errors=[];const warnings=[];
for(const file of await files(root)){
 const html=await readFile(file,'utf8');const parsed=nodes(parse(html));const all=nodes(parsed.find(n=>n.nodeName==='head')); 
 const key=(tag,k,value)=>all.filter(n=>n.nodeName===tag && (!k||attr(n,k)===value));
 const required=[['title'],['meta','name','description'],['meta','name','robots'],['link','rel','canonical'],['meta','property','og:title'],['meta','property','og:description'],['meta','property','og:url'],['meta','property','og:image'],['meta','name','twitter:card']];
 for(const [t,k,v] of required){const list=key(t,k,v);if(list.length!==1)errors.push(`${file}: ${v||t} count ${list.length}`);if(list.length && !(t==='title'?text(list[0]):attr(list[0],t==='link'?'href':'content'))?.trim())errors.push(`${file}: empty ${v||t}`);}
 const title=text(key('title')[0]||{}),canonical=attr(key('link','rel','canonical')[0]||{},'href'),robots=attr(key('meta','name','robots')[0]||{},'content');
 if(!canonical?.startsWith('https://thailivenow.com/'))errors.push(`${file}: canonical origin`);
 if(attr(key('meta','property','og:url')[0]||{},'content')!==canonical)errors.push(`${file}: sharing URL differs`);
 const description=attr(key('meta','name','description')[0]||{},'content');
 if(attr(key('meta','property','og:title')[0]||{},'content')!==title)errors.push(`${file}: OG title differs`);
 if(attr(key('meta','property','og:description')[0]||{},'content')!==description)errors.push(`${file}: OG description differs`);

 if(file.includes('/ko/')){
  const main=parsed.find(n=>n.nodeName==='main');
  const bodyNodes=main?nodes(main):[];
  const paragraphs=bodyNodes.filter(n=>n.nodeName==='p').map(text);
  if(paragraphs.some(p=>/로컬 진행본|자료를 수집하고/.test(p)))errors.push(`${file}: editorial workflow exposed in Korean body`);
  if(file.includes('/bangkok/stations/') && title.includes('주변 명소') && !bodyNodes.filter(n=>/^h[23]$/.test(n.nodeName)).some(n=>text(n).includes('주변 명소')))errors.push(`${file}: station title promises missing attraction section`);
  if(file.endsWith('/ko/beaches/index.html') && !robots?.includes('noindex') && !bodyNodes.some(n=>n.nodeName==='article'))errors.push(`${file}: empty beach hub must remain noindex`);
 }
 const h1=parsed.filter(n=>n.nodeName==='h1');
 if(!robots?.includes('noindex') && h1.length!==1)errors.push(`${file}: h1 count ${h1.length}`);
 if(key('meta','name','keywords').length)warnings.push(`${file}: unused meta keywords; review removal rather than inherit home keywords`);
 if([...title].length>110)warnings.push(`${file}: long title; manually review the primary search intent`);
 if(description && [...description].length>350)warnings.push(`${file}: long description; write a concise complete summary`);
 if(!title.includes('ThaiLiveNow') && !title.includes('타이라이브나우'))errors.push(`${file}: missing brand`);
 for(const n of parsed.filter(n=>n.nodeName==='script'&&attr(n,'type')==='application/ld+json')){
  try{
   const schema=JSON.parse(text(n));
   errors.push(...breadcrumbUrlErrors(schema).map(error=>`${file}: ${error}`));
   const visit=value=>{
    if(!value||typeof value!=='object')return;
    if(value['@type']==='WebPage'){
     if(value.url!==canonical||value.name!==title||value.description!==description)errors.push(`${file}: WebPage metadata differs`);
    }
    Object.values(value).forEach(child=>{if(Array.isArray(child))child.forEach(visit);else visit(child);});
   };
   visit(schema);
  }catch{errors.push(`${file}: invalid JSON-LD`);}
 }
 const indexPolicy=attr(key('meta','name','tln:indexing')[0]||{},'content');
 if(indexPolicy && !['index','noindex'].includes(indexPolicy))errors.push(`${file}: unknown explicit indexing policy`);
 const pathname='/'+file.slice(root.length+1).replace(/index\.html$/,'');
 if(applyPageSEO(html,pathname)!==html)errors.push(`${file}: metadata transform is not idempotent`);
 pages.push({path:pathname,title,description:attr(key('meta','name','description')[0]||{},'content'),canonical,robots,alternates:key('link','rel','alternate').filter(n=>attr(n,'hreflang')).map(n=>({lang:attr(n,'hreflang'),href:attr(n,'href')}))});
}
if(!pages.length)errors.push('Empty build');
const groups=Object.groupBy(pages,p=>p.title);
const duplicateTitles=Object.entries(groups).filter(([,p])=>new Set(p.filter(x=>!x.robots.includes('noindex')).map(x=>x.canonical)).size>1).map(([title,p])=>({title,paths:p.map(x=>x.path)}));
for(const duplicate of duplicateTitles)errors.push(`Duplicate indexable title: ${duplicate.title}`);
const descriptions=Object.groupBy(pages.filter(p=>!p.robots.includes('noindex')),p=>`${p.path.split('/')[1]}:${p.description}`);
const duplicateDescriptions=Object.entries(descriptions).filter(([,p])=>new Set(p.map(x=>x.canonical)).size>1).map(([,p])=>({description:p[0].description,paths:p.map(x=>x.path)}));
for(const duplicate of duplicateDescriptions)errors.push(`Duplicate indexable description: ${duplicate.paths.join(', ')}`);
const paths=new Set(pages.map(p=>p.path));
for(const page of pages){
 const target=new URL(page.canonical).pathname;
 if(!paths.has(target))errors.push(`${page.path}: canonical target missing ${target}`);
 if(!page.robots.includes('noindex') && target!==page.path)errors.push(`${page.path}: indexable alias must be explicitly reviewed`);
 for(const alternate of page.alternates){
  const url=new URL(alternate.href);
  if(url.origin!=='https://thailivenow.com'||!paths.has(url.pathname))errors.push(`${page.path}: invalid hreflang target ${alternate.href}`);
 }
}
const report={pages:pages.length,indexable:pages.filter(p=>!p.robots.includes('noindex')).length,errors,warnings,duplicateTitles,duplicateDescriptions,metadata:pages};
await mkdir('artifacts',{recursive:true});
await writeFile('artifacts/seo-audit.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({pages:pages.length,indexable:report.indexable,errors:errors.length,warnings:warnings.length,duplicateTitles:duplicateTitles.length,duplicateDescriptions:duplicateDescriptions.length}));
if(errors.length){console.error(errors.slice(0,10));process.exit(1);}
const urls=[...new Set(pages.filter(p=>!p.robots.includes('noindex')).map(p=>p.canonical))].sort();
await writeFile(`${root}/sitemap.xml`,sitemapXML(urls));
await writeFile(`${root}/sitemap-ko.xml`,sitemapXML(urls.filter(url=>new URL(url).pathname.startsWith('/ko/'))));
await writeFile(`${root}/robots.txt`,crawlRobots());
