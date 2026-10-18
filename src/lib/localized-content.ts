import rooftops from '../data/rooftops.json';
import koreanCameras from '../data/camera-editorial-ko.json';
import {locales} from '../i18n/locales';
const modules=import.meta.glob('../data/localized/*/*.json',{eager:true,import:'default'});
const packs:Record<string,Record<string,any>>={};
for(const [path,value] of Object.entries(modules)){
 const match=path.match(/localized\/([^/]+)\/([^/]+)\.json$/);
 if(match)(packs[match[1]]??={})[match[2]]=value;
}
export const getLocalizedPack=(locale:string)=>packs[locale];
export const localizedUI=(locale:string)=>packs[locale]?.ui||{};
export function hasLocalizedStage(locale:string,stage:'travel'|'rooftops'|'cameras'){
 const pack=packs[locale];
 if(!pack||pack.status?.[stage]!=='complete')return false;
 if(stage==='travel')return pack.travel?.seasons?.regions?.length===6&&pack.travel?.entry?.length===4&&Object.keys(pack.travel?.destinations?.areas||{}).length===13;
 const source=stage==='rooftops'?rooftops:koreanCameras;
 const ids=Array.isArray(source)?source.filter(v=>v.publicationStatus!=='held').map(v=>v.id):Object.keys(source);
 return ids.every(id=>pack[stage]?.[id]);
}
export const localizedLocales=(stage:'travel'|'rooftops'|'cameras')=>locales.filter(item=>item.code!=='ko'&&hasLocalizedStage(item.code,stage));
export const localeTag=(locale:string)=>locales.find(item=>item.code===locale)?.tag||locale;
export function localizedVenue(source:any,locale:string){
 if(locale==='ko')return source;
 const translated=packs[locale]?.rooftops?.[source.id];
 if(!translated)return source;
 const result={...source,...translated,facts:{...source.facts,...translated.facts}};
 result.access=(result.access||[]).map((point:any)=>({...point,detailUrl:point.detailUrl?localizedHref(point.detailUrl,locale):undefined}));
 return result;
}
export function localizedCameraEditorial(locale:string){return locale==='ko'?koreanCameras:packs[locale]?.cameras||koreanCameras;}
export function localizedHref(href:string,locale:string):string|undefined{
 if(locale==='ko')return href;
 if(!href.startsWith('/ko/'))return href;
 const rest=href.slice(3),path=rest.split(/[?#]/)[0];
 if(path==='/'||/^\/(?:destinations|directory|cameras|saved|compare)(?:\/|$)/.test(path))return `/${locale}${rest}`;
 if(/^\/rooftops(?:\/|$)/.test(path)&&hasLocalizedStage(locale,'rooftops'))return `/${locale}${rest}`;
 if(/^\/(?:entry|travel-seasons)(?:\/|$)/.test(path)&&hasLocalizedStage(locale,'travel'))return `/${locale}${rest}`;
 return undefined;
}
export function isLocalizedPage(path:string){
 const [,locale,section]=path.split('/');
 if(!packs[locale])return false;
 if(section==='rooftops')return hasLocalizedStage(locale,'rooftops');
 if(['entry','travel-seasons','destinations'].includes(section))return hasLocalizedStage(locale,'travel');
 return (!section||['cameras','directory','saved','compare'].includes(section))&&hasLocalizedStage(locale,'cameras');
}
