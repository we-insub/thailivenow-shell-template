import koreanEditorial from '../data/attraction-detail-enrichment-ko.json';
import {applyAttractionEditorial} from './attraction-editorial.mjs';
import {englishMarketText} from './attraction-english-market.mjs';
import source from '../data/attraction-details-ko.json';
import {attractionCategories} from '../data/attraction-categories-ko.mjs';
import {locales} from '../i18n/locales';
import {localizedHref} from './localized-content';
const modules=import.meta.glob('../data/attraction-locales/*.json',{eager:true,import:'default'});
const packs:Record<string,any>={};
for(const [path,value] of Object.entries(modules))packs[path.split('/').pop()!.replace('.json','')]=value;
export const attractionLocales=locales.map(l=>l.code);
export const attractionTag=(locale:string)=>locales.find(l=>l.code===locale)?.tag||locale;
const baseLocale=(locale:string)=>locale.startsWith('en')?'en':locale;
// The reviewed Korean overlay is the current editorial source for every market.
// Keep the frozen base data intact while localizing the published manuscript.
const editorialSource=source.map(p=>applyAttractionEditorial(p,'ko',koreanEditorial));
export const attractionUI=(locale:string)=>englishMarketText(packs['ui-'+baseLocale(locale)],locale);
export const attractionCategoryUrl=(id:string,locale='ko')=>id==='rooftops'?`/${locale}/rooftops/`:`/${locale}/attractions/categories/${id}/`;
const ready:Record<string,boolean>={ko:true};
export function hasAttractionLocale(locale:string){
 if(locale in ready)return ready[locale];
 return ready[locale]=editorialSource.every(p=>{const copy=packs[baseLocale(locale)]?.[p.id];return copy?.title&&copy?.description&&copy?.intro?.length===p.intro.length&&copy?.experiences?.length===p.experiences.length&&copy?.faq?.length===p.faq.length&&['rules','facts','accessSections','visitPrograms','visitServices','sources'].every(k=>!p[k]||copy[k]?.length===p[k].length)&&!/[가-힣]/u.test(JSON.stringify(copy))&&(locale===baseLocale(locale)||packs[locale]?.[p.id]?.title);});
}
export function attractionHref(href:string,locale:string){
 if(locale==='ko'||!href.startsWith('/ko/'))return href;
 if(/^\/ko\/attractions\/(?:categories\/(?:temples|zoos-aquariums|markets|museums-heritage|theme-water-parks|streets-neighborhoods)\/)?$/.test(href)||source.some(p=>href===`/ko/attractions/${p.id}/`))return href.replace('/ko/',`/${locale}/`);
 return localizedHref(href,locale);
}
export function localizedAttraction(p:any,locale:string){
 p=applyAttractionEditorial(p,'ko',koreanEditorial);
 if(locale==='ko')return p;
 const core=packs[baseLocale(locale)]?.[p.id];
 if(!core)throw new Error(`Missing attraction translation ${locale}/${p.id}`);
 const copy={...core,...(locale!==baseLocale(locale)?packs[locale]?.[p.id]:{})};
 const allowed=['name','categoryName','cityName','type','title','description','intro','addressKo','factsHeading','facts','factNotes','experienceHeading','experiences','rulesHeading','rules','accessSections','faq','mapNote','visitPrograms','programsHeading','programsIntro','visitServices','servicesHeading','servicesIntro','prices','guideLanguages','operator','access','tripOfferCopy'];
 const result={...p,...Object.fromEntries(allowed.filter(k=>k in copy).map(k=>[k,copy[k]]))};
 result.photos=(p.photos||[]).map((photo:any,i:number)=>({...photo,...Object.fromEntries(['alt','caption','modifications','changes'].filter(k=>copy.photos?.[i]?.[k]!==undefined).map(k=>[k,copy.photos[i][k]]))}));
 for(const field of ['visitServices','visitPrograms'])if(p[field])result[field]=p[field].map((item:any,i:number)=>({...item,...copy[field]?.[i],url:item.url}));
 result.sources=p.sources.map(([label,href]:string[],i:number)=>[copy.sources?.[i]?.[0]||label,href]);
 result.related=(p.related||[]).flatMap(([label,href]:string[],i:number)=>{const target=attractionHref(href,locale);return target?[[copy.related?.[i]?.[0]||label,target]]:[];});
 if(locale.startsWith('en-')){for(const key of allowed.filter(k=>k!=='name'))if(key in result)result[key]=englishMarketText(result[key],locale);result.photos=result.photos.map((photo:any)=>({...photo,...Object.fromEntries(['alt','caption','modifications','changes'].filter(k=>k in photo).map(k=>[k,englishMarketText(photo[k],locale)]))}));result.sources=result.sources.map(([label,href]:string[])=>[englishMarketText(label,locale),href]);result.related=result.related.map(([label,href]:string[])=>[englishMarketText(label,locale),href]);}
 return result;
}
export const localizedAttractions=(locale:string)=>source.map(p=>localizedAttraction(p,locale));
export function localizedAttractionCategories(locale='ko'){
 const u=attractionUI(locale);
 return attractionCategories.map((c:any,i:number)=>locale==='ko'?c:{...c,...u.categories[i],href:attractionCategoryUrl(c.id,locale)});
}
export const attractionLanguagePaths=(path:string)=>Object.fromEntries(locales.filter(l=>hasAttractionLocale(l.code)).map(l=>[l.code,path.replace(/^\/[^/]+\//,`/${l.code}/`)]));
