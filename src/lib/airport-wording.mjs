export function mergeAirportWording(base,copy,path='') {
 if(typeof base==='string'){if(typeof copy!=='string'||!copy.trim())throw Error(`Missing airport wording: ${path}`);return copy;}
 if(Array.isArray(base)){if(!Array.isArray(copy)||base.length!==copy.length)throw Error(`Airport array mismatch: ${path}`);return base.map((value,i)=>mergeAirportWording(value,copy[i],`${path}.${i}`));}
 if(base&&typeof base==='object'){
  const out={...base};for(const [key,value]of Object.entries(copy||{})){if(!(key in base)||['id','mapId','pin','x','y','defaultMap','legacyCheckedAt','officialSources','sources','url'].includes(key))throw Error(`Protected airport field: ${path}.${key}`);out[key]=mergeAirportWording(base[key],value,`${path}.${key}`);}return out;
 }
 return base;
}
