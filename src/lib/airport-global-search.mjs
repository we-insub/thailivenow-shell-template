import {normalizeAirlineQuery} from './airport-airline-search.mjs';
export const marketLabels={ko:['South Korea','Korean'],ms:['Malaysia','Malay'],'zh-cn':['Mainland China','Simplified Chinese'],'zh-tw':['Taiwan','Traditional Chinese'],ja:['Japan','Japanese'],ru:['Russia','Russian'],es:['Spain','Spanish'],'en-in':['India','English'],'en-gb':['United Kingdom','English'],'en-us':['United States','English']};
export function buildGlobalAirportRecords(datasets,catalogue){
 const names=new Map(catalogue.map(a=>[a.id,a.name])),rows=[];
 const add=(record)=>{const text=[record.title,record.country,record.locale,record.keywords].join(' ');rows.push({...record,tokens:text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim(),search:normalizeAirlineQuery(text)});};
 for(const a of catalogue)add({id:'airline:'+a.id,kind:'airline',title:a.name+(a.codes.length?' · '+a.codes.join(' / '):''),country:'All markets',locale:'en',locales:a.records.map(r=>r.locale),href:'/en/airport-assistance/#airline-'+a.id,description:'Find an English explanation and the airline’s official reporting and support channels.',keywords:[a.id,...a.names,...a.codes,...a.records.map(r=>marketLabels[r.locale]?.[0]||'')].join(' ')});
 for(const {locale,data}of datasets){const[country,language]=marketLabels[locale];const base=`/${locale}/airport-assistance/`,native=language==='English'?'English':language;
  for(const r of data.routes)add({id:`${locale}:route:${r.id}`,kind:'route',airportCodes:[r.originIata,r.destinationIata].filter(Boolean),title:`${r.flightNumber||names.get(r.airlineId)||r.airline} · ${r.originIata} → ${r.destinationIata}`,country,locale,href:base+'routes/'+r.id+'/',description:`${names.get(r.airlineId)||r.airline}. Read the ${country} flight record in ${native} for its dates, operating conditions and sources. A listed timetable is not live flight status.`,keywords:[r.origin,r.destination,r.airline,names.get(r.airlineId),r.description,r.schedule,r.status,JSON.stringify(r.airportNames||{})].join(' ')});
  for(const s of data.services)add({id:`${locale}:service:${s.id}`,kind:'contact',airportCodes:[s.airportIata].filter(Boolean),title:`${language==='English'&&s.type?s.type:({'check-in':'Check-in counter',baggage:'Baggage service',office:'Airport office',remote:'General airline contact'})[s.role]||'Airport contact'} · ${names.get(s.airlineId)||s.airline||'Airport service'} · ${s.airportIata||s.airport||''}`,country,locale,href:base+'airports/'+s.airportIata?.toLowerCase()+'/'+(s.airportIata==='BKK'&&locale!=='ko'?'airlines/#'+s.id:''),description:`Find the recorded counter, office or baggage contact in the ${country} guide (${native}). Check the service purpose before calling; a general airline contact is not necessarily a counter direct line.`,phone:s.phone,email:s.email,keywords:[s.type,s.location,s.hours,s.text,s.phone,s.email,s.airport,s.airportIata,s.airline,names.get(s.airlineId)].join(' ')});
  for(const g of data.guides)add({id:`${locale}:guide:${g.id}`,kind:'guide',airportCodes:[g.airportIata].filter(Boolean),title:`${country} · ${g.id.split('-').join(' ')}`,country,locale,href:base+'guides/'+g.id+'/',description:`Open the ${country} guide in ${native}. Keep the airline’s reporting process and your own travel-insurance claim separate. The source guide contains the applicable conditions.`,keywords:[g.title,g.description,g.text,...(g.airlineIds||[]).map(id=>names.get(id)||id),...(g.sections||[]).flatMap(s=>[s.title,s.text]),...(g.faq||[]).flatMap(x=>[x.q,x.a])].join(' ')});
 }
 return rows;
}
export function matchesGlobalRecord(record,query,kind='all',locale='all'){
 const q=normalizeAirlineQuery(query);const matched=!q||(/^[a-z0-9]{2,3}$/.test(q)?String(record.tokens||'').split(' ').some(t=>t===q||(q.length===2&&t.startsWith(q)&&/^\d/.test(t.slice(2)))):record.search.includes(q));return(kind==='all'||record.kind===kind)&&(locale==='all'||record.locale===locale||record.locales?.includes(locale))&&matched;
}

// Airport membership is factual, separate from a free-text search. A Pune
// counter mentioning PNQ–BKK is still a Pune counter.
export function recordsForAirport(records,airport){
 const code=String(airport||'').trim().toUpperCase();
 return code?records.filter(record=>record.airportCodes?.includes(code)):records;
}

// Translate display labels only; keep the recorded phone and number range intact.
export function englishContactPhone(phone){
 return String(phone||'').replaceAll('방콕 지점','Bangkok branch').replaceAll('공항 사무실','Airport office').replaceAll('국제선 수하물','International baggage');
}
