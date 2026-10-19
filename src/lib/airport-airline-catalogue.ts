import ko from '../../public/data/airport-assistance.json';
const marketFiles=import.meta.glob('../../public/data/airport-markets/*.json',{eager:true,import:'default'}) as Record<string,any>;
const datasets=[{locale:'ko',data:ko},...Object.entries(marketFiles).map(([file,data])=>({locale:file.split('/').at(-1)!.replace('.json',''),data}))];
import {normalizeAirlineQuery} from './airport-airline-search.mjs';
const map=new Map<string,any>();
for(const {locale,data} of datasets)for(const airline of data.airlines||[]){
 const row=map.get(airline.id)||{id:airline.id,name:airline.officialName||airline.name,names:new Set<string>(),codes:new Set<string>(),records:[],sources:new Set<string>(),links:new Map<string,string>()};
 if(airline.id==='azur-air')row.name='AZUR air';
 row.names.add(airline.name);row.names.add(airline.officialName||airline.name);row.records.push({locale,airline});
 if(airline.code)row.codes.add(airline.code);
 for(const route of data.routes.filter((r:any)=>r.airlineId===airline.id)){const code=route.flightNumber?.match(/^([A-Z0-9]{2})\s*\d+/)?.[1];if(code)row.codes.add(code);}
 const guides=(data.guides||[]).filter((g:any)=>g.airlineIds?.includes(airline.id));
 const actions=[...(airline.actions||[]),...(airline.sections||[]).flatMap((s:any)=>s.actions||[]),...guides.flatMap((g:any)=>[...(g.actions||[]),...(g.sections||[]).flatMap((s:any)=>s.actions||[])])];
 const sourceUrls=[...(airline.sources||[]),...(airline.sections||[]).flatMap((s:any)=>s.sources||[]),...guides.flatMap((g:any)=>[...(g.sources||[]),...(g.sections||[]).flatMap((s:any)=>s.sources||[])])];
 for(const url of sourceUrls)if(/^https?:\/\//.test(url))row.sources.add(url);
 const labelFor=(url:string)=>{
  if(/flylax\.com\/lax-comments-and-contact-us\/lost-and-found/.test(url))return 'Airport lost property · LAX';
  if(/damaged.baggage|damage|破損/i.test(url))return 'Damaged baggage';
  if(/delayed.baggage|missing.baggage|My-baggage-is-delayed|bagage.*retard/i.test(url))return 'Delayed or missing baggage';
  if(/baggage|luggage|equipaje|lost-carry|mybag/i.test(url))return 'Baggage reporting and claims';
  if(/certificate|certification|FltConf|confirmation|irregular|flight-disruption|documents_about_the_flight|enquiry|証明|delay_cancellation/i.test(url))return 'Flight documents and disruption';
  if(/reclamaciones|compensation|customer.*experience/i.test(url))return 'Complaints and claims';
  if(/contact|support|qna|inquiry|AskMH|AskFY|feedback/i.test(url))return 'Customer support';
  if(/conditions|terms|tnc|international.*carriage|gjysztj/i.test(url))return 'Conditions of carriage';
  return 'Official service information';
 };
 const add=(url:string,label:string)=>{if(/^https?:\/\//.test(url)&&!row.links.has(url))row.links.set(url,label)};
 if(airline.flightStatusUrl)add(airline.flightStatusUrl,'Flight status');
 for(const {url} of actions)if(url?.startsWith('http'))add(url,labelFor(url));
 for(const url of sourceUrls){const label=labelFor(url);if(label!=='Official service information')add(url,label);}
 if(!row.links.size&&sourceUrls[0])add(sourceUrls[0],'Official information');
 map.set(airline.id,row);
}
export const airlineCatalogue=[...map.values()].map(row=>({...row,names:[...row.names],codes:[...row.codes],sources:[...row.sources],links:[...row.links].map(([url,label])=>({url,label})),korean:ko.airlines.find(a=>a.id===row.id),search:normalizeAirlineQuery([...row.names,...row.codes,row.id,row.id==='tway-air'?'Tway T’way Trinity':''].join(' '))}));
