// Airport guides share a navigation home even when retained URLs live in
// airport-assistance or transport. Disruption guides keep their own home.
export function isKoreanAirportGuide(pathname) {
  return /^\/ko\/airport-assistance\/airports\/(bkk|dmk|hkt|cnx)\/(?:[^?#]*)$/.test(pathname)
    || pathname === '/ko/transport/airports/suvarnabhumi-to-bangkok/'
    || /^\/ko\/airport-assistance\/guides\/(?:late-arrival-(?:suvarnabhumi|don-mueang|phuket|chiang-mai)|find-airline-counter|daegu-bangkok-timetable)\/$/.test(pathname);
}

export const airportLocales=['ko','ms','zh-cn','en','en-in','ru','ja','en-gb','en-us','es','zh-tw'];
export const thaiAirportLabels={ko:'태국 공항',ms:'Lapangan terbang Thailand','zh-cn':'泰国机场','zh-tw':'泰國機場',ja:'タイの空港',ru:'Аэропорты Таиланда',es:'Aeropuertos de Tailandia',en:'Thailand airports','en-in':'Thailand airports','en-gb':'Thailand airports','en-us':'Thailand airports'};
export const thaiAirportHome=locale=>locale==='ko'?'/ko/airports/':`/${locale}/airport-assistance/airports/`;
export function isThaiAirportGuide(pathname){
 const locale=pathname.split('/')[1];if(!airportLocales.includes(locale))return false;
 return pathname===thaiAirportHome(locale)||/^\/[^/]+\/airport-assistance\/airports\/(bkk|dmk|hkt|cnx)\/(?:[^?#]*)$/.test(pathname)||isKoreanAirportGuide(pathname);
}
export function thaiAirportLanguagePaths(pathname){
 if(!isThaiAirportGuide(pathname))return undefined;
 let code=pathname.match(/\/airports\/(bkk|dmk|hkt|cnx)\//)?.[1];
 if(!code&&pathname.includes('/guides/late-arrival-'))code=({'suvarnabhumi':'bkk','don-mueang':'dmk',phuket:'hkt','chiang-mai':'cnx'})[pathname.split('late-arrival-')[1].replace(/\/$/,'')];
 if(!code&&isKoreanAirportGuide(pathname))code='bkk';
 const part=pathname==='/ko/transport/airports/suvarnabhumi-to-bangkok/'?'transport':pathname.match(/\/airports\/bkk\/(map|smoking|transport|airlines)\//)?.[1];
 return Object.fromEntries(airportLocales.map(locale=>[locale,code==='bkk'&&part?(locale==='ko'&&part==='transport'?'/ko/transport/airports/suvarnabhumi-to-bangkok/':`/${locale}/airport-assistance/airports/bkk/${part}/`):code?`/${locale}/airport-assistance/airports/${code}/`:thaiAirportHome(locale)]));
}

// Only genuinely equivalent common-airport guides have hreflang alternates.
// Country departure airports, airline routes and jurisdiction-specific claims
// are not interchangeable merely because their slugs resemble one another.
export function thaiAirportAlternatePaths(pathname){
 const locale=pathname.split('/')[1];if(!airportLocales.includes(locale))return undefined;
 const common=pathname===thaiAirportHome(locale)||/^\/[^/]+\/airport-assistance\/airports\/(?:dmk|hkt|cnx)\/$/.test(pathname)||/^\/[^/]+\/airport-assistance\/airports\/bkk\/(?:(?:map|smoking|transport|airlines)\/)?$/.test(pathname)||pathname==='/ko/transport/airports/suvarnabhumi-to-bangkok/';
 return common?thaiAirportLanguagePaths(pathname):undefined;
}
export const airportLanguageTags={ko:'ko-KR',ms:'ms-MY','zh-cn':'zh-Hans-CN',en:'en','en-in':'en-IN',ru:'ru-RU',ja:'ja-JP','en-gb':'en-GB','en-us':'en-US',es:'es-ES','zh-tw':'zh-Hant-TW'};
