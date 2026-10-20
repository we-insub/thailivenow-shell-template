// Market membership is determined by the route dataset, never the UI language alone.
export function selectAirportMarket(source, market, locale) {
 if(source.market!==market)throw new Error(`Airport data market mismatch: ${locale}`);
 const routes=source.routes.filter(r=>r.market?r.market===market:locale==='ko'?r.country==='대한민국':locale==='es'?r.country==='스페인':false);
 const carrierIds=new Set(routes.map(r=>r.airlineId));
 const airlines=source.airlines.filter(a=>carrierIds.has(a.id));
 const guides=source.guides.filter(g=>!g.airlineIds?.length||g.id?.endsWith('-brand-status')||g.airlineIds.some(id=>carrierIds.has(id)));
 const services=source.services.filter(s=>!s.airlineId||carrierIds.has(s.airlineId)).map(s=>({...s,airline:s.airline||source.airlines.find(a=>a.id===s.airlineId)?.name}));
 return {...source,market,routes,airlines,guides,services};
}
