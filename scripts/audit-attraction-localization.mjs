import fs from 'node:fs';import path from 'node:path';
const sourceFile=process.argv[2]||'artifacts/attractions-localization-20261021/source-public.json';
const source=JSON.parse(fs.readFileSync(sourceFile,'utf8'));
const required=['en','ms','ja','zh-cn','zh-tw','es','ru'];
const markets=['en-in','en-gb','en-us'];const errors=[],warnings=[];const coverage={};
const seen=(s)=>/[가-힣]/u.test(s);
function compare(a,b,p,locale){
 if(Array.isArray(a)){
  if(!Array.isArray(b)||a.length!==b.length){errors.push({locale,path:p,issue:'array-count',expected:a.length,actual:b?.length});return;}
  a.forEach((v,i)=>compare(v,b[i],`${p}/${i}`,locale));return;
 }
 if(a&&typeof a==='object'){
  if(!b||typeof b!=='object'){errors.push({locale,path:p,issue:'missing-object'});return;}
  for(const k of Object.keys(a))compare(a[k],b[k],`${p}/${k}`,locale);return;
 }
 if(typeof a!=='string')return;
 if(typeof b!=='string'||(!b.trim()&&a.trim())){errors.push({locale,path:p,issue:'missing-text'});return;}
 if(/^https?:|^\/ko\//.test(a)||/\/(id|english|thai|category)$/.test(p)){
  if(a!==b)errors.push({locale,path:p,issue:'protected-value',expected:a,actual:b});return;
 }
 if(seen(b))errors.push({locale,path:p,issue:'korean-leftover',text:b});
 const numbers=s=>(s.normalize('NFKC').replace(/(?<=\d),(?=\d{3}(?:\D|$))/g,'').match(/\d+(?:\.\d+)?/g)||[]).sort().join('|');
 if(numbers(a)!==numbers(b))warnings.push({locale,path:p,issue:'number-expression-review',source:a,translated:b});
 if((a.match(/\*\*/g)||[]).length!==(b.match(/\*\*/g)||[]).length)warnings.push({locale,path:p,issue:'emphasis-review',source:a,translated:b});
}
for(const locale of required){
 const file=`src/data/attraction-locales/${locale}.json`;const copy=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{};
 coverage[locale]=Object.keys(copy).filter(id=>source.some(p=>p.id===id)).length;
 for(const item of source){const translated=copy[item.id];if(!translated){errors.push({locale,path:item.id,issue:'missing-place'});continue;}
  compare(item,translated,item.id,locale);
  if(!translated.title?.includes('ThaiLiveNow'))errors.push({locale,path:item.id,issue:'title-brand-missing'});
 }
}
for(const locale of markets){const file=`src/data/attraction-locales/${locale}.json`,copy=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{};coverage[locale]=Object.keys(copy).filter(id=>source.some(p=>p.id===id)).length;for(const item of source)if(!copy[item.id]?.title)errors.push({locale,path:item.id,issue:'market-title-missing'});}
const report={sourceFile,places:source.length,coverage,errors,warnings,meaning:'Structural and protected-data audit. Human language and semantic review are separate.'};
fs.mkdirSync('artifacts/attractions-localization-20261021',{recursive:true});fs.writeFileSync('artifacts/attractions-localization-20261021/content-audit.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({coverage,errors:errors.length,warnings:warnings.length}));if(errors.length)process.exitCode=1;
