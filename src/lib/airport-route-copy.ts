import english from '../data/airport-route-copy-en.json';
import northeast from '../data/airport-route-copy-ja-tw-ru.json';
import regional from '../data/airport-route-copy-ms-cn-es.json';
type RouteCopy={intro:string;faqTitle:string;faq:{q:string;a:string}[];koreanReview:Record<string,string>};
export const airportRouteCopy:Record<string,RouteCopy>={};
for(const locale of ['en-in','en-gb','en-us'] as const) airportRouteCopy[locale]={...english[locale],koreanReview:english.koreanReview};
for(const [locale,copy] of Object.entries({...regional,...northeast})) airportRouteCopy[locale]={intro:copy.intro,faqTitle:copy.faqTitle,koreanReview:copy.koreanReview,faq:[{q:copy.statusQ,a:copy.statusA},{q:copy.counterQ,a:copy.counterA},{q:copy.proofQ,a:copy.proofA}]};
