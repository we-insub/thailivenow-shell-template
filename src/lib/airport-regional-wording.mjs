// English regional spelling only. Evidence, IDs and real supplier names are not
// rewritten by this helper. It never creates a country-specific fact.
const protectedKeys=new Set(['id','url','sources','officialSources','legacyCheckedAt','mapId','pin','defaultMap','x','y']);
export function regionalWording(value,locale){
 if(locale!=='en-us')return value;
 if(typeof value==='string')return /^(?:https?:\/\/|\/)/.test(value)?value:value.replace(/\bcentres\b/g,'centers').replace(/\bcentre\b/g,'center').replace(/\btravellers\b/g,'travelers').replace(/\btraveller\b/g,'traveler').replace(/\btravelling\b/g,'traveling').replace(/\btravelled\b/g,'traveled').replace(/\bcancelled\b/g,'canceled').replace(/\bitemised\b/g,'itemized').replace(/\borganisation\b/g,'organization');
 if(Array.isArray(value))return value.map(v=>regionalWording(v,locale));
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,protectedKeys.has(key)?item:regionalWording(item,locale)]));
 return value;
}
