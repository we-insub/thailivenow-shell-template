// Structural check of src/data/food-localized/<locale>.json against the Korean reference pack.
// It cannot judge wording; it checks keys, placeholders, bold markers, meta description length and leftover Korean.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dir=path.join(root,'src/data/food-localized');
const food=JSON.parse(fs.readFileSync(path.join(root,'src/data/food.json'),'utf8'));
const ref=JSON.parse(fs.readFileSync(path.join(dir,'ko.json'),'utf8'));
const locales=process.argv.slice(2).length?process.argv.slice(2):fs.readdirSync(dir).filter(f=>f.endsWith('.json')&&f!=='ko.json').map(f=>f.replace('.json',''));
export const metaPaths=locale=>['/','/traditions/','/street-food/','/fruit-prices/','/fruits/',...food.cities.map(c=>`/cities/${c.id}/`),...food.dishes.map(d=>`/dishes/${d.id}/`),...food.fruits.map(f=>`/fruits/${f.id}/`)].map(p=>`/${locale}/food${p}`.replace(/\/food\/$/,'/food/'));
const holders=s=>[...String(s).matchAll(/\{(\w+)\}/g)].map(m=>m[1]).sort().join(',');
const count=s=>[...String(s)].length;
let total=0;
for(const locale of locales){
 const errors=[];const warnings=[];
 const file=path.join(dir,`${locale}.json`);
 if(!fs.existsSync(file)){console.log(`${locale}: missing file`);total++;continue;}
 let pack;try{pack=JSON.parse(fs.readFileSync(file,'utf8'));}catch(e){console.log(`${locale}: invalid JSON ${e.message}`);total++;continue;}
 if(pack.locale!==locale)errors.push(`locale field is ${pack.locale}`);
 const walk=(r,v,p)=>{
  if(p==='meta')return;
  if(typeof r==='string'){
   if(typeof v!=='string'||!v.trim()){errors.push(`${p}: missing or empty string`);return;}
   if(holders(r)!==holders(v))errors.push(`${p}: placeholders {${holders(v)}} differ from reference {${holders(r)}}`);
   if((r.match(/\*\*/g)||[]).length!==(v.match(/\*\*/g)||[]).length)errors.push(`${p}: ** bold markers differ from reference`);
   if(r.includes('|')!==v.includes('|'))errors.push(`${p}: line-break marker | differs from reference`);
   if(/[ㄱ-ㆎ가-힣]/.test(v))errors.push(`${p}: contains Korean text`);
   if(/<[a-z!/]/i.test(v))errors.push(`${p}: contains HTML`);
  }else if(Array.isArray(r)){
   if(!Array.isArray(v)||v.length!==r.length){errors.push(`${p}: expected array of ${r.length}`);return;}
   r.forEach((x,i)=>walk(x,v[i],`${p}[${i}]`));
  }else if(r&&typeof r==='object'){
   if(!v||typeof v!=='object'){errors.push(`${p}: missing object`);return;}
   for(const k of Object.keys(r))walk(r[k],v[k],p?`${p}.${k}`:k);
   for(const k of Object.keys(v))if(!(k in r))errors.push(`${p?p+'.':''}${k}: key not in reference`);
  }else if(r===null){ if(v!==null&&typeof v!=='string')errors.push(`${p}: expected null or string`); else if(typeof v==='string'&&/[ㄱ-ㆎ가-힣]/.test(v))errors.push(`${p}: contains Korean text`);}
 };
 for(const k of Object.keys(ref))if(k!=='locale')walk(ref[k],pack[k],k);
 for(const [id,fruit] of Object.entries(food.fruits.reduce((a,f)=>({...a,[f.id]:f}),{}))){
  if(fruit.regional&&!pack.fruits?.[id]?.regional)errors.push(`fruits.${id}.regional: required because the base data has a regional note`);
  if(!fruit.regional&&pack.fruits?.[id]?.regional)errors.push(`fruits.${id}.regional: must be null`);
 }
 for(const [id,d] of Object.entries(pack.dishes||{})){
  const text=[d.intro,d.flavor,d.ingredients,d.story,d.tip,...(d.steps||[])].join('\n');
  for(const term of d.emphasis||[])if(!text.includes(term))warnings.push(`dishes.${id}.emphasis "${term}" is not a substring of the dish text`);
 }
 const meta=pack.meta||{};const wanted=metaPaths(locale);
 const seen=new Map();
 for(const p of wanted){
  const m=meta[p];
  if(typeof m!=='string'){errors.push(`meta ${p}: missing`);continue;}
  const n=count(m);
  if(n<150||n>199)errors.push(`meta ${p}: ${n} characters (need 150-199)`);
  if(/["“”「」]|\p{Extended_Pictographic}/u.test(m))errors.push(`meta ${p}: contains double quotes or emoji`);
  if(/[ㄱ-ㆎ가-힣]/.test(m))errors.push(`meta ${p}: contains Korean text`);
  if(seen.has(m))errors.push(`meta ${p}: duplicates ${seen.get(m)}`);seen.set(m,p);
 }
 for(const p of Object.keys(meta))if(!wanted.includes(p))errors.push(`meta ${p}: unexpected path`);
 console.log(`${locale}: ${errors.length} errors, ${warnings.length} warnings`);
 errors.slice(0,60).forEach(e=>console.log('  ERROR',e));if(errors.length>60)console.log(`  ... ${errors.length-60} more errors`);
 warnings.slice(0,15).forEach(w=>console.log('  warn',w));
 total+=errors.length;
}
process.exit(total?1:0);
