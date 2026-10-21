// Orthography only: this does not translate Korean or change facts, currencies or units.
const pairs=[['metre','meter'],['metres','meters'],['kilometre','kilometer'],['kilometres','kilometers'],['centimetre','centimeter'],['centimetres','centimeters'],['colour','color'],['colours','colors'],['coloured','colored'],['colourful','colorful'],['centre','center'],['centres','centers'],['neighbourhood','neighborhood'],['neighbourhoods','neighborhoods'],['travelling','traveling'],['travelled','traveled'],['traveller','traveler'],['travellers','travelers'],['programme','program'],['programmes','programs'],['organisation','organization'],['organisations','organizations'],['organised','organized'],['favourite','favorite'],['favourites','favorites']];
export function englishMarketText(value,locale){
 if(typeof value==='string'){
  if(/^https?:|^\//.test(value)||!['en-us','en-gb','en-in'].includes(locale))return value;
  for(const [british,american] of pairs){const from=locale==='en-us'?british:american,to=locale==='en-us'?american:british;value=value.replace(new RegExp(`\\b${from}\\b`,'g'),to);}
  return value;
 }
 if(Array.isArray(value))return value.map(v=>englishMarketText(v,locale));
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,v])=>[key,englishMarketText(v,locale)]));
 return value;
}
