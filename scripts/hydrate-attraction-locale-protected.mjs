import fs from 'node:fs';
const source=JSON.parse(fs.readFileSync('artifacts/attractions-localization-20261021/source-public.json','utf8'));
function hydrate(base,copy,key=''){
 if(typeof base==='string'&&(/^https?:|^\/ko\//.test(base)||['id','english','thai','category'].includes(key)))return base;
 if(Array.isArray(base)){if(!Array.isArray(copy))return copy;return copy.map((v,i)=>i<base.length?hydrate(base[i],v,String(i)):v);}
 if(base&&typeof base==='object'&&copy&&typeof copy==='object')return {...copy,...Object.fromEntries(Object.entries(base).filter(([k,v])=>k in copy||typeof v==='string'&&(/^https?:|^\/ko\//.test(v)||['id','english','thai','category'].includes(k))).map(([k,v])=>[k,hydrate(v,copy[k],k)]))};
 return copy;
}
for(const target of process.argv.slice(2)){
 const artifactFile=target.startsWith('--file=')?target.slice(7):null;
 if(!artifactFile&&!['en','ja','zh-cn','zh-tw','ms','es','ru'].includes(target))throw new Error('Expected base locale or --file=artifact.json');
 if(artifactFile&&!artifactFile.startsWith('artifacts/attractions-localization-20261021/'))throw new Error('Artifact file outside this task');
 const file=artifactFile||`src/data/attraction-locales/${target}.json`,data=JSON.parse(fs.readFileSync(file,'utf8'));
 for(const place of source)if(data[place.id])data[place.id]=hydrate(place,data[place.id]);
 fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');console.log(target,Object.keys(data).length,'protected values hydrated');
}
