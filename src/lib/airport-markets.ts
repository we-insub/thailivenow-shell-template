import {applyAirportCountryWording} from './airport-country-wording.mjs';
import {withIncidentGuides} from './airport-incident-guides.mjs';
import {selectAirportMarket} from './airport-market-scope.mjs';
import ko from '../../public/data/airport-assistance.json';
const datasets = import.meta.glob('../../public/data/airport-markets/*.json',{eager:true,import:'default'}) as Record<string,any>;
export const airportMarkets = [
 {locale:'ko',country:'KR',name:'대한민국',lang:'ko-KR'},
 {locale:'ms',country:'MY',name:'Malaysia',lang:'ms-MY'},
 {locale:'zh-cn',country:'CN',name:'中国大陆',lang:'zh-Hans-CN'},
 {locale:'en-in',country:'IN',name:'India',lang:'en-IN'},
 {locale:'ru',country:'RU',name:'Россия',lang:'ru-RU'},
 {locale:'ja',country:'JP',name:'日本',lang:'ja-JP'},
 {locale:'en-gb',country:'GB',name:'United Kingdom',lang:'en-GB'},
 {locale:'en-us',country:'US',name:'United States',lang:'en-US'},
 {locale:'es',country:'ES',name:'España',lang:'es-ES'},
 {locale:'zh-tw',country:'TW',name:'台灣',lang:'zh-Hant-TW'},
] as const;
export function airportMarketData(locale:string):any {
 const market=airportMarkets.find(m=>m.locale===locale);
 if(!market)throw new Error(`No airport market: ${locale}`);
 const source=locale==='ko'?ko:datasets[`../../public/data/airport-markets/${locale}.json`] || {market:market.country,routes:[],airlines:[],services:[],guides:[]};
 return withIncidentGuides(selectAirportMarket(applyAirportCountryWording(source,locale),market.country,locale),locale);
}

export function airportPairId(route:any):string {
 const thai=route.thaiAirport;
 const other=route.originIata===thai?route.destinationIata:route.originIata;
 return `${other}-${thai}`.toLowerCase();
}
export function airportPairs(data:any):any[] {
 const pairs=new Map<string,any>();
 for(const route of data.routes){
  if(!route.thaiAirport || ![route.originIata,route.destinationIata].includes(route.thaiAirport))continue;
  const id=airportPairId(route),thai=route.thaiAirport;
  const other=route.originIata===thai?route.destinationIata:route.originIata;
  if(!pairs.has(id))pairs.set(id,{id,thai,other,routes:[]});
  pairs.get(id).routes.push(route);
 }
 return [...pairs.values()];
}
