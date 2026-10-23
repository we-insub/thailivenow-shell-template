import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'parse5';
import {transportLocales,transportLanguageTags,transportSourceRoutes,transportPath} from '../src/lib/transport-source-registry.mjs';
const output=process.argv[2]||'dist';const reportPath=process.argv[3]||'artifacts/transport-localization-20261024/final-audit.json';
const failures=[],counts={},canonical=transportSourceRoutes.filter(r=>r.suffix===r.canonicalSuffix);
const fail=(route,check,detail)=>failures.push({route,check,detail});
const texts=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(texts).join('');
const attr=(n,key)=>n.attrs?.find(a=>a.name===key)?.value;
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)];
const tidy=s=>s.replace(/\s+/g,' ').trim();
for(const locale of transportLocales){
 const metadata=JSON.parse(fs.readFileSync(`src/data/meta-descriptions/${locale}.json`));
 for(const r of canonical){const route=transportPath(locale,r.suffix),description=metadata[route];if(typeof description!=='string'||[...description].length<150||[...description].length>=200)fail(route,'metadata-length',description?[...description].length:'missing');}
 if(locale!=='ko'){
  const data=JSON.parse(fs.readFileSync(`src/data/transport-locales/${locale}.json`)).strings;
  const ui=JSON.parse(fs.readFileSync(`src/data/transport-locales/ui-${locale}.json`)).strings;
  for(const [name,translations] of [['data',data],['ui',ui]]){const source=JSON.parse(fs.readFileSync(`src/data/transport-locales/source-${name}.json`)).strings;for(const key of source)if(typeof translations[key]!=='string')fail(locale,'missing-'+name,key);else if(/[가-힣]/.test(translations[key]))fail(locale,'Korean-'+name,key);}
 }
 counts[locale]={routes:0,faqPages:0,faqAnswers:0};
 for(const r of transportSourceRoutes){
  const route=transportPath(locale,r.suffix),file=path.join(output,route,'index.html');if(!fs.existsSync(file)){fail(route,'missing-html',file);continue;}
  const html=fs.readFileSync(file,'utf8'),root=parse(html,{scriptingEnabled:false}),all=walk(root),head=all.find(n=>n.tagName==='head'),main=all.find(n=>n.tagName==='main'),htmlNode=all.find(n=>n.tagName==='html');
  const headNodes=walk(head||{});const metas=name=>headNodes.filter(n=>n.tagName==='meta'&&(attr(n,'name')===name||attr(n,'property')===name));const desc=metas('description');
  if(attr(htmlNode,'lang')!==transportLanguageTags[locale]&&attr(htmlNode,'lang')!==locale)fail(route,'html-lang',attr(htmlNode,'lang'));
  if(all.filter(n=>n.tagName==='h1').length!==1)fail(route,'h1-count',all.filter(n=>n.tagName==='h1').length);
  if(desc.length!==1)fail(route,'description-count',desc.length);
  if(r.suffix===r.canonicalSuffix){for(const name of ['og:description','twitter:description'])if(attr(metas(name)[0],'content')!==attr(desc[0],'content'))fail(route,'description-sync',name);}
  const expected='https://thailivenow.com'+transportPath(locale,r.canonicalSuffix);const canon=headNodes.filter(n=>n.tagName==='link'&&attr(n,'rel')==='canonical');if(canon.length!==1||attr(canon[0],'href')!==expected)fail(route,'canonical',canon.map(n=>attr(n,'href')));
  const robots=attr(metas('robots')[0],'content')||'';if(r.suffix!==r.canonicalSuffix&&!robots.includes('noindex'))fail(route,'alias-indexing',robots);
  const alternate=headNodes.filter(n=>n.tagName==='link'&&attr(n,'rel')==='alternate');for(const target of transportLocales){if(!alternate.some(n=>attr(n,'hreflang')===transportLanguageTags[target]&&attr(n,'href')==='https://thailivenow.com'+transportPath(target,r.canonicalSuffix)))fail(route,'hreflang',target);}
  const picker=all.find(n=>(attr(n,'class')||'').split(/\s+/).includes('language-picker'));
  if(picker){const destinations=walk(picker).filter(n=>n.tagName==='a').map(n=>attr(n,'href'));for(const target of transportLocales)if(!destinations.includes(transportPath(target,r.canonicalSuffix)))fail(route,'language-switch-target',target);}
  else fail(route,'language-switch','missing');
  const bodyText=[];function scan(n){if(['script','style','header','footer'].includes(n.tagName))return;if(n.nodeName==='#text'&&/[가-힣]/.test(n.value))bodyText.push(tidy(n.value));for(const a of n.attrs||[]){if(['alt','title','aria-label','placeholder'].includes(a.name)&&/[가-힣]/.test(a.value))bodyText.push(a.name+': '+a.value);if(a.name==='href'&&a.value.startsWith('/')&&!a.value.startsWith('//')){const target=a.value.split(/[?#]/)[0];if(locale!=='ko'&&/^\/ko\/transport\//.test(target))fail(route,'Korean-transport-link',a.value);if(target&&target.endsWith('/')&&!fs.existsSync(path.join(output,target,'index.html')))fail(route,'missing-internal-target',target);}}for(const c of n.childNodes||[])scan(c);}if(main)scan(main);else fail(route,'main','missing');
  if(locale!=='ko'&&bodyText.length)fail(route,'Korean-rendered',bodyText);
  if(locale!=='ko')for(const n of headNodes)if(n.tagName==='title'||n.tagName==='meta'&&['description','og:title','og:description','twitter:title','twitter:description'].some(k=>attr(n,'name')===k||attr(n,'property')===k)){const value=n.tagName==='title'?texts(n):attr(n,'content');if(/[가-힣]/.test(value))fail(route,'Korean-metadata',value);}
  const questions=[];function schema(n){if(!n||typeof n!=='object')return;if(Array.isArray(n)){n.forEach(schema);return;}if(n['@type']==='FAQPage')questions.push(...(n.mainEntity||[]));Object.entries(n).filter(([k])=>k!=='mainEntity').forEach(([,v])=>schema(v));}
  for(const n of all.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json'))try{schema(JSON.parse(texts(n)));}catch{fail(route,'invalid-jsonld','parse failed');}
  const mainText=tidy(texts(main||{}));for(const q of questions){for(const value of [q.name,q.acceptedAnswer?.text]){if(typeof value!=='string'||!mainText.includes(tidy(value)))fail(route,'FAQ-body-schema-mismatch',value);if(locale!=='ko'&&/[가-힣]/.test(value||''))fail(route,'Korean-FAQ',value);}}
  counts[locale].routes++;if(questions.length){counts[locale].faqPages++;counts[locale].faqAnswers+=questions.length;}
 }
}
fs.mkdirSync(path.dirname(reportPath),{recursive:true});fs.writeFileSync(reportPath,JSON.stringify({passed:failures.length===0,output,counts,failures},null,2)+'\n');console.log(JSON.stringify({passed:failures.length===0,counts,failures:failures.length,reportPath}));if(failures.length)process.exitCode=1;
