import entries from '../data/transport-route-registry.json' with {type:'json'};
export const transportLocales=['ko','ms','zh-cn','en','en-in','ru','ja','en-gb','en-us','es','zh-tw'];
export const transportLanguageTags={ko:'ko-KR',ms:'ms-MY','zh-cn':'zh-Hans-CN',en:'en','en-in':'en-IN',ru:'ru-RU',ja:'ja-JP','en-gb':'en-GB','en-us':'en-US',es:'es-ES','zh-tw':'zh-Hant-TW'};
export const transportSourceRoutes=entries;
const bySuffix=new Map(entries.map(entry=>[entry.suffix,entry]));
export function transportRoute(pathname){
 const match=pathname.match(/^\/([^/]+)\/transport(?:\/(.*?))?\/?$/);
 if(!match||!transportLocales.includes(match[1]))return undefined;
 return bySuffix.get((match[2]||'').replace(/\/$/,''));
}
export const transportPath=(locale,suffix='')=>`/${locale}/transport/${suffix?suffix.replace(/^\/+|\/+$/g,'')+'/':''}`;
export function transportLanguagePaths(pathname){const entry=transportRoute(pathname);return entry?Object.fromEntries(transportLocales.map(locale=>[locale,transportPath(locale,entry.canonicalSuffix)])):undefined;}
