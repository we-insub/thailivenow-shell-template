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
 if(source.market!==market.country)throw new Error(`Airport data market mismatch: ${locale}`);
 const routes=source.routes.filter((r:any)=>r.market ? r.market===market.country : locale==='es'?r.country==='스페인':locale==='ko'?r.country==='대한민국':false);
 const routeCarrierIds=new Set(routes.map((route:any)=>route.airlineId));
 const excludedCarrierIds=new Set(source.airlines.filter((airline:any)=>!routeCarrierIds.has(airline.id)).map((airline:any)=>airline.id));
 const airlines=source.airlines.filter((airline:any)=>routeCarrierIds.has(airline.id));
 const guides=source.guides.filter((guide:any)=>!guide.airlineIds?.length || guide.airlineIds.some((id:string)=>!excludedCarrierIds.has(id)));
 const services=source.services.filter((service:any)=>!excludedCarrierIds.has(service.airlineId)).map((service:any)=>({
  ...service,
  airline:service.airline || source.airlines.find((airline:any)=>airline.id===service.airlineId)?.name,
 }));
 return {...source,airlines,guides,services,market:market.country,routes};
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
