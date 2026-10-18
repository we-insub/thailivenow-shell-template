const caches=new WeakMap();
const escape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,character=>'\\'+character);
function prepare(dictionary){
 let result=caches.get(dictionary);if(result)return result;
 const patterns=[];
 for(const [source,target] of Object.entries(dictionary).sort(([a],[b])=>b.length-a.length)){
  if(typeof target!=='string'||!source.includes('${'))continue;
  const variables=[...source.matchAll(/\$\{([^}]+)\}/g)].map(match=>match[1]);
  if(!variables.length)continue;
  const pieces=source.split(/\$\{[^}]+\}/g);
  // A template needs a real Korean text anchor; Korean inside a JS
  // conditional placeholder is not an anchor in the rendered string.
  if(!/[가-힣]/.test(pieces.join('')))continue;
  let expression=escape(pieces[0]);
  variables.forEach((key,index)=>{expression+=(/(?:length|count|page|month|toFixed|^i\+1$)/i.test(key)?'([0-9.,]+)':'(.+?)')+escape(pieces[index+1]);});
  patterns.push({expression:new RegExp('^'+expression+'$'),literals:pieces.filter(Boolean),variables,target});
 }
 result={patterns,memo:new Map()};caches.set(dictionary,result);return result;
}
function translateOnce(value,dictionary){
 if(typeof value!=='string')return value;
 if(typeof dictionary[value]==='string')return dictionary[value];
 if(!/[가-힣]/.test(value)&&typeof dictionary[value.trim()]!=='string')return value;
 const state=prepare(dictionary);if(state.memo.has(value))return state.memo.get(value);
 const trimmed=value.trim();let translated=typeof dictionary[trimmed]==='string'?dictionary[trimmed]:undefined;
 if(translated===undefined){const arrow=trimmed.match(/^(.*\S)(\s*[→↗])$/);if(arrow&&typeof dictionary[arrow[1]]==='string')translated=dictionary[arrow[1]]+arrow[2];}
 if(translated!==undefined)translated=value.slice(0,value.indexOf(trimmed))+translated+value.slice(value.indexOf(trimmed)+trimmed.length);
 if(translated===undefined)for(const {expression,literals,variables,target} of state.patterns){
  if(literals.some(piece=>!trimmed.includes(piece)))continue;
  const match=trimmed.match(expression);if(!match)continue;
  translated=target.replace(/\$\{([^}]+)\}/g,(token,key)=>{const index=variables.indexOf(key);return index<0?token:dictionary[match[index+1]]??match[index+1];});break;
 }
 const result=translated??value;state.memo.set(value,result);return result;
}

export function translateLocaleText(value,dictionary){
 let result=value;const seen=new Set([value]);
 for(let step=0;step<4;step++){const next=translateOnce(result,dictionary);if(next===result||seen.has(next))break;result=next;seen.add(next);}
 return result;
}
