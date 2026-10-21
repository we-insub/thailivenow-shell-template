import beaches from '../data/beaches.json' with {type:'json'};
import cities from '../data/beach-cities.json' with {type:'json'};
import {navigationLocales} from './site-navigation.mjs';
const beachIds=new Set(beaches.filter(beach=>beach.pilot).map(beach=>beach.id));
const cityIds=new Set(cities.filter(city=>beaches.some(beach=>beach.pilot&&beach.cityId===city.id)).map(city=>city.id));
const deliveryIds=new Set(['grabfood','line-man','shopeefood','robinhood']);
// This is a publication allowlist, not a prefix rewrite for uncreated pages.
export function travelGuideAlternatePaths(pathname){
 const match=pathname.match(/^\/([^/]+)\/(beaches|food-delivery|attractions)\/(.*)$/);
 if(!match||!navigationLocales.includes(match[1]))return undefined;
 const [,locale,topic,tail]=match;
 const rest=tail.replace(/\/$/,'');
 const published=rest===''||topic!=='attractions'&&(topic==='food-delivery'?deliveryIds.has(rest):beachIds.has(rest)||rest.startsWith('cities/')&&cityIds.has(rest.slice(7)));
 if(!published)return undefined;
 const suffix=`/${topic}/${rest?rest+'/':''}`;
 return Object.fromEntries(navigationLocales.map(code=>[code,code===locale?pathname:`/${code}${suffix}`]));
}
