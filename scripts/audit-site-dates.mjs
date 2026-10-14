import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {walk,dateLabels} from './prepare-site-dates.mjs';
import {validDocument,validDate,validTimestamp} from '../src/lib/site-dates-runtime.mjs';
const directory=process.argv[2]||'dist';const errors=[];
const dates=JSON.parse(fs.readFileSync(path.join(directory,'data/site-dates.json')));
assert.ok(validDocument(dates),'Invalid common date document');let pages=0,bindings=0,cameraPages=0;
for(const file of walk(directory).filter(f=>f.endsWith('.html'))){
 const html=fs.readFileSync(file,'utf8');pages++;
 for(const [label]of dateLabels)if(new RegExp(label+':\\s*(?:<span[^>]*>)?\\d{4}-\\d{2}-\\d{2}').test(html))errors.push(file+': unbound common date');
 const matches=[...html.matchAll(/<(?:time|span)\b[^>]*data-site-date="([^"]+)"[^>]*>/g)];bindings+=matches.length;
 for(const [markup,kind]of matches){if(!['deployment','source','camera-source','camera-link','modified'].includes(kind))errors.push(file+': invalid date kind');const value=markup.match(/datetime="([^"]+)"/)?.[1];if(value&&!(kind==='camera-link'?validTimestamp(value):validDate(value)))errors.push(file+': invalid fallback');}
 if(html.includes('data-camera-detail=')){cameraPages++;if(!html.includes('data-site-date="camera-source"'))errors.push(file+': unbound camera observation');}
 if(matches.length&&!html.includes('/site-dates-client.mjs'))errors.push(file+': missing client snapshot binding');
}
assert.ok(bindings>0,'No bound dates');
fs.mkdirSync('artifacts/site-dates-20261015',{recursive:true});const report={pages,bindings,cameraPages,cameras:Object.keys(dates.cameras).length,errors};fs.writeFileSync('artifacts/site-dates-20261015/date-audit.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));assert.equal(errors.length,0);
