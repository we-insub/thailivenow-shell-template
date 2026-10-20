import {mergeAirportWording} from './airport-wording.mjs';
import korean from '../data/airport-detail-guides-ko.json';
import directory from '../data/airport-map-directory-ko.json';
import uiData from '../data/airport-depth/ui.json';
import facilityUI from '../data/airport-depth/facility-ui.json';
const manuscripts=import.meta.glob('../data/airport-depth/*.json',{eager:true,import:'default'}) as Record<string,any>;
export const depthLocales=['ko','ms','zh-cn','en','en-in','ru','ja','en-gb','en-us','es','zh-tw'];
export const languageFor=(locale:string)=>locale.startsWith('en')?'en':locale;

import {regionalWording} from './airport-regional-wording.mjs';
export function airportDepthUI(locale:string):any {
 const value=(uiData as any)[languageFor(locale)];
 if(!value)throw Error(`Missing airport interface manuscript: ${locale}`);
 return regionalWording({...value,facilityNames:{...value.facilityNames,...(facilityUI as any)[languageFor(locale)]}},locale);
}
// Only visible wording is overlaid. Coordinates, source URLs, map IDs and real
// observation dates always come from the preserved Korean reference dataset.
export function airportDepthGuide(code:string,locale:string):any {
 const base=(korean as any)[code];if(!base)return null;if(locale==='ko')return base;
 const copy=manuscripts[`../data/airport-depth/${languageFor(locale)}.json`]?.[code];if(!copy)throw Error(`Missing full airport manuscript: ${locale}/${code}`);
 for(const field of ['name','intro','facts','steps','sections','faq','smoking','pins'])if(!(field in copy))throw Error(`Incomplete airport manuscript: ${locale}/${code}/${field}`);
 return regionalWording(mergeAirportWording(base,copy,`${locale}/${code}`),locale);
}
export function airportDepthDirectory(code:string,locale:string):any {
 const source=(directory as any)[code];if(locale==='ko')return source;const ui=airportDepthUI(locale);
 return {...source,maps:source.maps.map((map:any)=>({...map,label:`${ui.zones[map.zoneOriginal]||map.zoneOriginal} · ${map.floor==='B1'?ui.basement:ui.level.replace('{n}',map.floor)}`,facilities:map.facilities.map((f:any)=>({...f,categoryLabel:ui.categories[f.categoryKo]}))}))};
}

import transportBase from '../data/transport/airport-guides/suvarnabhumi-to-bangkok.json';
import transferUI from '../data/airport-depth/transfer-ui.json';
export const bkkParts=['overview','map','smoking','transport','airlines'];
export function bkkPartUrl(locale:string,part:string){
 if(locale==='ko'&&part==='transport')return '/ko/transport/airports/suvarnabhumi-to-bangkok/';
 return `/${locale}/airport-assistance/airports/bkk/${part==='overview'?'':part+'/'}`;
}
export function bkkDepthPages(locale:string){const ui=airportDepthUI(locale);return bkkParts.map((id,i)=>({id,url:bkkPartUrl(locale,id),label:ui.pageLabels[i],description:ui.pageDescriptions[i]}));}
export function airportTransferUI(locale:string):any{return regionalWording((transferUI as any)[languageFor(locale)],locale);}
export function airportTransportGuide(locale:string):any{
 const copy=manuscripts[`../data/airport-depth/transport-${languageFor(locale)}.json`];if(!copy)throw Error(`Missing full transport manuscript: ${locale}`);
 if(copy.sections.length!==transportBase.sections.length||copy.faq.length!==transportBase.faq.length||copy.sources.length!==transportBase.sources.length)throw Error(`Incomplete transport manuscript: ${locale}`);
 const sections=transportBase.sections.map((source:any,i:number)=>{
  const wording=copy.sections[i];
  for(const field of ['paragraphs','links'])if((source[field]?.length||0)!==(wording[field]?.length||0))throw Error(`Transport ${locale}/${i}/${field}`);
  if(source.table&&(source.table.rows.length!==wording.table.rows.length||source.table.headers.length!==wording.table.headers.length))throw Error(`Transport table ${locale}/${i}`);
  return {...source,...wording,id:source.id,map:source.map,links:source.links?.map(([urlLabel,url]:string[],j:number)=>{
   if(wording.links[j][1]!==url)throw Error(`Transport source URL changed: ${locale}/${i}/${j}`);
   // Existing native sections answer these questions. Never synthesize a native
   // URL for a page that has not actually been translated and generated.
   const native=url==='/ko/transport/airports/airport-rail-link/'?'#rail-map':url==='/ko/transport/bangkok/'?'#rail-map':url==='/ko/transport/guides/taxi/'?'#taxi':url==='/ko/transport/airports/suvarnabhumi-don-mueang/'?`/${locale}/airport-assistance/airports/dmk/`:url;
   return [url.includes('suvarnabhumi-don-mueang')?airportDepthGuide('DMK',locale).name:wording.links[j][0],native];
  })};
 });
 const sources=transportBase.sources.map((s,j)=>{if(copy.sources[j][1]!==s[1])throw Error(`Transport source changed ${locale}/${j}`);return [copy.sources[j][0],s[1]];});
 return regionalWording({...transportBase,...copy,sections,sources},locale);
}
import bkkUI from '../data/airport-depth/bkk-ui.json';
export function airportBkkUI(locale:string):any{return (bkkUI as any)[languageFor(locale)];}
export function bkkPartFAQ(locale:string,part:string){
 const ui=airportBkkUI(locale),g=airportDepthGuide('BKK',locale);
 if(part==='overview')return [1,2].map(n=>({q:ui[`overviewQ${n}`],a:ui[`overviewA${n}`]}));
 if(part==='map')return [1,2].map(n=>({q:ui[`mapQ${n}`],a:ui[`mapA${n}`]}));
 if(part==='smoking')return [1,2,3].map((n,i)=>({q:ui[`smokingQ${n}`],a:g.smoking[i].body.join(' ')}));
 return [];
}

export function airportFacilityName(name:string,locale:string):string{
 const ui=airportDepthUI(locale);if(ui.facilityNames[name])return ui.facilityNames[name];
 const sales=name.match(/^(.*?) (?:Ticketing|Sales) Counter(?: (\d+))?$/);
 if(sales)return `${sales[1]} · ${ui.categories['항공권 발권']}${sales[2]?' '+sales[2]:''}`;
 if(name==='King Power Pick Up Counter'||name==='Collection Point (King Power)')return `King Power · ${ui.facilityNames['Pick Up Counter']}`;
 if(name==='Bellugg Left Luggage')return `Bellugg · ${ui.facilityNames['Left Luggage']}`;
 if(/, Currency Exchange$/.test(name))return name.replace(/, Currency Exchange$/,` · ${ui.facilityNames['Money Exchange']}`);
 if(name==='K Bank Exchange')return `KBank · ${ui.facilityNames['Money Exchange']}`;
 return name;
}
