// Copies each market's food meta descriptions from its food pack into src/data/meta-descriptions/<locale>.json.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const locales=process.argv.slice(2).length?process.argv.slice(2):['ms','zh-cn','zh-tw','en','en-us','en-gb','en-in','ru','ja','es'];
for(const locale of locales){
 const target=path.join(root,'src/data/meta-descriptions',`${locale}.json`);
 const raw=fs.readFileSync(target,'utf8');
 const stored=JSON.parse(raw);
 const pack=JSON.parse(fs.readFileSync(path.join(root,'src/data/food-localized',`${locale}.json`),'utf8'));
 let changed=0;
 for(const [page,text] of Object.entries(pack.meta)){if(stored[page]!==text){stored[page]=text;changed++;}}
 fs.writeFileSync(target,JSON.stringify(stored,null,1)+(raw.endsWith('\n')?'\n':''));
 console.log(locale,changed,'updated');
}
