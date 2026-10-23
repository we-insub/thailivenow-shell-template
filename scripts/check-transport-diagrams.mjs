import fs from 'node:fs';
import crypto from 'node:crypto';
const file='src/data/transport-diagrams/generated-manifest.json';
const manifest=JSON.parse(fs.readFileSync(file,'utf8'));
const sha=path=>crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex');
const layout=JSON.parse(fs.readFileSync('src/data/transport-diagrams/layout.json','utf8'));
const locales=['ko','en','ja','zh-cn','zh-tw','ms','ru','es'];
const geometry=new Map();let labels=0;
for(const [path,hash] of Object.entries(manifest.inputs))if(sha(path)!==hash)throw Error(`Regenerate transport diagrams: input changed ${path}`);
if(manifest.outputs.length!==32)throw Error('Expected 32 measured transport diagrams');
for(const locale of locales){
 const dictionary=JSON.parse(fs.readFileSync(`src/data/transport-diagrams/${locale}.json`,'utf8'));
 const source=JSON.parse(fs.readFileSync('src/data/transport-diagrams/ko.json','utf8'));
 if(JSON.stringify(Object.keys(dictionary).sort())!==JSON.stringify(Object.keys(source).sort()))throw Error(`Diagram label keys differ: ${locale}`);
 for(const name of Object.keys(layout)){
  const path=`public/images/transport/train/${name}.${locale}.svg`;
  const record=manifest.outputs.find(row=>row.path===path);
  if(!record||sha(path)!==record.sha256)throw Error(`Diagram output changed: ${path}`);
  const svg=fs.readFileSync(path,'utf8');
  if(/<text(?:\s|>)/.test(svg))throw Error(`Unoutlined text: ${path}`);
  if(locale!=='ko'&&/[가-힣]/.test(svg))throw Error(`Korean remains in native diagram: ${path}`);
  if(record.overflow||record.missingGlyphs)throw Error(`Failed font measurement: ${path}`);
  if(geometry.has(name)&&geometry.get(name)!==record.geometry)throw Error(`Fixed geometry differs: ${path}`);
  geometry.set(name,record.geometry);
  for(const row of record.measurements){
   labels++;
   const spec=layout[name].texts.find(item=>item.key===row.key);
   const [x,y,w,h]=row.box,[x0,y0,x1,y1]=row.bounds;
   if(row.lines.length>2||row.size<spec.size*.75-.001||row.size>spec.size+.001||x0<x-.1||y0<y-.1||x1>x+w+.1||y1>y+h+.1)throw Error(`Text escapes fixed box: ${path} ${row.key}`);
  }
 }
}
console.log(JSON.stringify({diagrams:32,measuredLabels:labels,overflow:0,missingGlyphs:0,geometry:'identical',nativeKoreanResidual:0}));
