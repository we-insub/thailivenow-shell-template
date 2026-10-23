import copy from '../data/airport-assistance-hub-copy.json' with {type:'json'};
import {regionalWording as airportEnglishText} from './airport-regional-wording.mjs';

// Only authored English prose goes through this helper; record IDs, official
// source URLs, contact details and the original market datasets stay intact.
export {airportEnglishText};
export function assistanceCopy(locale){
 const c=structuredClone(copy[locale]||copy.en);
 const country={'en-us':'US','en-gb':'UK','en-in':'Indian'};
 if(country[locale]){
  c.departures=`Check-in and contacts at ${country[locale]} airports`;
  c.airlinesText=`Search the airlines listed for travel between ${locale==='en-us'?'the United States':locale==='en-gb'?'the United Kingdom':'India'} and Thailand by name, airline code or flight number.`;
 }
 if(locale==='en-us'){
  c.incidents=c.incidents.map(row=>row.map(text=>airportEnglishText(text,locale)));
  c.records=c.records.map(row=>row.map(text=>airportEnglishText(text,locale)));
 }
 return c;
}
