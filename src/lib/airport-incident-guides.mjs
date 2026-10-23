import wording from '../data/airport-depth/incidents.json' with {type:'json'};
import {assistanceCopy,airportEnglishText} from './airport-assistance-copy.mjs';
const journeyLabels={ms:'Malaysia–Thailand','zh-cn':'中国大陆往返泰国','zh-tw':'台灣往返泰國',ja:'日本発・タイ旅行',ru:'Россия — Таиланд',es:'España–Tailandia','en-in':'India–Thailand','en-gb':'UK–Thailand','en-us':'US–Thailand'};
const types=[['flight-delayed','delay'],['flight-cancelled','cancel'],['delayed-baggage','missing'],['damaged-baggage','damage']];
export function airportIncidentCopy(locale){const c=wording[locale.startsWith('en')?'en':locale];return locale==='en-us'?Object.fromEntries(Object.entries(c).map(([key,text])=>[key,airportEnglishText(text,locale)])):c;}
export function withIncidentGuides(data,locale){
 if(locale==='ko')return data;
 const c=airportIncidentCopy(locale),hub=assistanceCopy(locale);if(!c||!hub)throw Error(`Missing incident manuscript ${locale}`);
 const guides=data.guides.map(g=>structuredClone(g));
 for(const [i,[id,prefix]] of types.entries()){
  const sections=[1,2,3].map(n=>({title:c[`${prefix}${n}Title`],text:c[`${prefix}${n}`]}));
  const faq=(i<2?[1,2,3].map(n=>({q:c[`faq${n}`],a:c[`answer${n}`]})):[1,2].map(n=>({q:c[`faqB${n}`],a:c[`answerB${n}`]})));
  const existing=guides.find(g=>g.id===id);
  if(existing){
   // The incident URL is the country-wide entry. Preserve the original
   // carrier-specific material as an explicitly named example below the steps.
   const retained=[...new Set([existing.description,existing.text].filter(Boolean))].join('\n\n');
   existing.sections=[...sections,...(retained?[{title:existing.title,text:retained,sources:existing.sources||[]}]:[]),...(existing.sections||[])];
   existing.title=hub.incidents[i][0]+' · '+journeyLabels[locale];existing.description=hub.incidents[i][1]+' '+hub.incidents[i][2];existing.text=hub.incidents[i][2];
   existing.faq=[...faq,...(existing.faq||[]).filter(f=>!faq.some(n=>n.q===f.q))];
  }
  else {
   // These instructions carry no carrier-specific deadline or compensation
   // amount. The actual country records remain the source for those details.
   const related=data.guides.filter(g=>g.id!==id&&(i<2?/certificate|confirmation|disruption|flight-evidence/.test(g.id):/baggage/.test(g.id)));
   const serviceSources=i>=2?data.services.filter(s=>s.role==='baggage'||/baggage|bagasi|行李|手荷物|багаж|equipaje/i.test(s.type||'')).flatMap(s=>s.sources||[]):[];
   const sources=[...new Set([...related.flatMap(g=>[...(g.sources||[]),...(g.sections||[]).flatMap(s=>s.sources||[])]),...serviceSources])];
   guides.push({id,title:hub.incidents[i][0]+' · '+journeyLabels[locale],description:hub.incidents[i][1]+' '+hub.incidents[i][2],text:hub.incidents[i][2],sections,faq,sources,actions:[{label:c.search,url:`/${locale}/airport-assistance/airlines/?issue=${i<2?(i===0?'delay':'cancellation'):(i===2?'missing':'damage')}`}],editorialOrigin:'Korean structural reference; existing country procedures; no new research or invented deadlines'});
  }
 }
 return {...data,guides};
}
