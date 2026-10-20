import revisions from '../data/airport-depth/editorial-revisions.json' with {type:'json'};
export function applyAirportCountryWording(source,locale){
 const entries=revisions[locale];if(!entries?.length)return source;
 const data=structuredClone(source);
 for(const entry of entries){
  if(!['airlines','routes','services','guides'].includes(entry.section)||!/(?:^|\.)(?:text|a|description|durationNote|note)$/.test(entry.path))throw Error(`Protected editorial field: ${locale}/${entry.path}`);
  const record=data[entry.section].find(r=>r.id===entry.id);if(!record)throw Error(`Missing editorial record: ${locale}/${entry.id}`);
  const parts=entry.path.split('.'),last=parts.pop();let node=record;for(const part of parts)node=node?.[part];
  if(!node||node[last]!==entry.from)throw Error(`Stale editorial wording: ${locale}/${entry.id}/${entry.path}`);
  node[last]=entry.to;
 }
 return data;
}
