import fs from 'node:fs';import path from 'node:path';import {parse} from 'parse5';
const dir=process.argv[2]||'dist';const source=JSON.parse(fs.readFileSync('src/data/attraction-details-ko.json','utf8'));const locales=['ko','ms','zh-cn','en','en-in','ru','ja','en-gb','en-us','es','zh-tw'];
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],attr=(n,k)=>n?.attrs?.find(a=>a.name===k)?.value,text=n=>n?.nodeName==='#text'?n.value:(n?.childNodes||[]).map(text).join('');
const errors=[],details=[],collections=[];let sitemap='';for(const file of fs.readdirSync(dir).filter(n=>/^sitemap.*\.xml$/.test(n)))sitemap+=fs.readFileSync(path.join(dir,file),'utf8');
const fail=(url,check,actual)=>errors.push({url,check,actual});
function checkCollection(url,file,locale){
 const html=fs.readFileSync(file,'utf8'),all=walk(parse(html)),main=all.find(n=>n.nodeName==='main');
 const meta=k=>attr(all.find(n=>n.nodeName==='meta'&&(attr(n,'name')===k||attr(n,'property')===k)),'content');
 const canonical=attr(all.find(n=>n.nodeName==='link'&&attr(n,'rel')==='canonical'),'href');
 if(canonical!==`https://thailivenow.com${url}`)fail(url,'collection-canonical',canonical);
 if(walk(main||{}).filter(n=>n.nodeName==='h1').length!==1)fail(url,'collection-h1');
 if(!meta('robots')?.startsWith('index,follow'))fail(url,'collection-index');
 if(!sitemap.includes(`https://thailivenow.com${url}`))fail(url,'collection-sitemap');
 if(locale!=='ko'&&/[가-힣]/u.test(text(main)))fail(url,'collection-korean');
 if(meta('og:title')!==text(all.find(n=>n.nodeName==='title'))||meta('twitter:title')!==meta('og:title'))fail(url,'collection-title-parity');
 if(!meta('description')||meta('og:description')!==meta('description')||meta('twitter:description')!==meta('description'))fail(url,'collection-description-parity');
 if(all.filter(n=>n.nodeName==='link'&&attr(n,'rel')==='alternate').length!==12)fail(url,'collection-alternates');
 collections.push(url);
}

for(const locale of locales){
 const hub=`/${locale}/attractions/`,hubFile=path.join(dir,hub,'index.html');if(!fs.existsSync(hubFile)){fail(hub,'hub-missing');continue;}
 checkCollection(hub,hubFile,locale);const categories=new Map();for(const category of new Set(source.map(p=>p.category))){const p=`/${locale}/attractions/categories/${category}/`;const file=path.join(dir,p,'index.html');if(!fs.existsSync(file)){fail(p,'category-missing');continue;}checkCollection(p,file,locale);const html=fs.readFileSync(file,'utf8');categories.set(category,html);if(!fs.readFileSync(hubFile,'utf8').includes(`href="${p}"`))fail(hub,'category-incoming-missing',p);}
 for(const place of source){
  const url=`/${locale}/attractions/${place.id}/`,file=path.join(dir,url,'index.html');if(!fs.existsSync(file)){fail(url,'detail-missing');continue;}
  const html=fs.readFileSync(file,'utf8'),all=walk(parse(html)),main=all.find(n=>n.nodeName==='main'),nodes=walk(main||{}),meta=k=>attr(all.find(n=>n.nodeName==='meta'&&(attr(n,'name')===k||attr(n,'property')===k)),'content'),canonical=attr(all.find(n=>n.nodeName==='link'&&attr(n,'rel')==='canonical'),'href');
  const h1=nodes.filter(n=>n.nodeName==='h1');if(h1.length!==1)fail(url,'h1-count',h1.length);
  if(canonical!==`https://thailivenow.com${url}`)fail(url,'canonical',canonical);
  if(!meta('robots')?.startsWith('index,follow'))fail(url,'index-policy',meta('robots'));
  if(!sitemap.includes(`https://thailivenow.com${url}`))fail(url,'sitemap-missing');
  if(nodes.filter(n=>attr(n,'data-tln-editorial-byline')!==undefined).length!==1)fail(url,'byline-count');
  if(nodes.some(n=>attr(n,'data-site-date')==='deployment'))fail(url,'deployment-date-visible');
  if(meta('og:url')!==canonical)fail(url,'og-url');if(meta('og:title')!==text(all.find(n=>n.nodeName==='title')))fail(url,'og-title');if(meta('og:description')!==meta('description'))fail(url,'og-description');if(meta('og:image')!==meta('twitter:image')||meta('og:image:alt')!==meta('twitter:image:alt'))fail(url,'image-parity');
  if(!meta('description')?.trim())fail(url,'description-missing');
  if(meta('twitter:title')!==meta('og:title'))fail(url,'twitter-title');if(meta('twitter:description')!==meta('description'))fail(url,'twitter-description');
  if(!text(h1[0]).includes(place.thai))fail(url,'thai-name-missing');if(!text(h1[0]).includes(place.english))fail(url,'english-name-missing');
  if(locale!=='ko'&&/[가-힣]/u.test(text(main)))fail(url,'korean-main-leftover',text(main).match(/[가-힣]+/gu));
  const alternate=all.filter(n=>n.nodeName==='link'&&attr(n,'rel')==='alternate');if(alternate.length!==12)fail(url,'alternate-count',alternate.length);for(const other of locales)if(!alternate.some(n=>attr(n,'href')===`https://thailivenow.com/${other}/attractions/${place.id}/`))fail(url,'alternate-missing',other);
  const parent=`/${locale}/attractions/categories/${place.category}/`;if(!html.includes(`href="${parent}"`))fail(url,'parent-outgoing');if(!categories.get(place.category)?.includes(`href="${url}"`))fail(url,'category-incoming');
  const graph=all.filter(n=>n.nodeName==='script'&&attr(n,'type')==='application/ld+json').flatMap(n=>{try{const d=JSON.parse(text(n));return d['@graph']||[d];}catch{return[];}});
  const article=graph.find(n=>n['@type']==='Article');if(article?.author?.['@id']!=='https://thailivenow.com/#organization'||article?.publisher?.['@id']!=='https://thailivenow.com/#organization')fail(url,'organization');
  const visibleFaq=nodes.find(n=>attr(n,'aria-labelledby')==='faq-heading');const faq=graph.find(n=>n['@type']==='FAQPage');if(Boolean(visibleFaq)!==Boolean(faq))fail(url,'faq-presence');for(const q of faq?.mainEntity||[])if(!text(visibleFaq).includes(q.name)||!text(visibleFaq).includes(q.acceptedAnswer.text))fail(url,'faq-content-mismatch',q.name);
  details.push({url,title:text(all.find(n=>n.nodeName==='title')),h1:text(h1[0]),canonical,robots:meta('robots'),image:meta('og:image'),alternates:alternate.length});
 }
}
const report={collections:collections.length,collectionPages:collections,details:details.length,expected:source.length*locales.length,errors,pages:details};fs.mkdirSync('artifacts/attractions-localization-20261021',{recursive:true});fs.writeFileSync('artifacts/attractions-localization-20261021/html-audit.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({details:report.details,expected:report.expected,collections:report.collections,errors:errors.length}));if(errors.length)process.exitCode=1;
