import rawBeaches from '../data/beaches.json' with {type:'json'};
import rawCities from '../data/beach-cities.json' with {type:'json'};
import en from '../data/beach-localized/en.json' with {type:'json'};
import cn from '../data/beach-localized/zh-cn.json' with {type:'json'};
import tw from '../data/beach-localized/zh-tw.json' with {type:'json'};
import ja from '../data/beach-localized/ja.json' with {type:'json'};
import ms from '../data/beach-localized/ms.json' with {type:'json'};
import ru from '../data/beach-localized/ru.json' with {type:'json'};
import es from '../data/beach-localized/es.json' with {type:'json'};
import uiCopy from '../data/beach-localized/ui.json' with {type:'json'};
import cityCopy from '../data/beach-localized/cities.json' with {type:'json'};
import metaCopy from '../data/beach-localized/meta.json' with {type:'json'};
import photoCopy from '../data/beach-localized/photo-captions.json' with {type:'json'};
export const beachLocales=['en','en-us','en-gb','en-in','ms','zh-cn','zh-tw','ru','ja','es'];
const packs={en,'zh-cn':cn,'zh-tw':tw,ja,ms,ru,es};
const sourceKeys={'지방자치단체·공식 관광 안내':'official','TAT 공식 해변·접근 안내':'tatAccess','TAT 해변 깃발·해상 활동 안내 (2018년 자료)':'tatSafety','지도 위치 · OpenStreetMap':'osm','공식 자료의 위치':'officialLocation','태국 정부 공보국 · 지정 구역 수영 금지 (2023년 자료)':'prd','TAT 코사멧 배편·섬 안 이동 안내':'boatSource'};
const enVariant=(s,locale)=>locale==='en-us'?s.replaceAll('travelling','traveling').replaceAll('travellers','travelers').replaceAll('traveller','traveler').replaceAll('centre','center').replaceAll('colour','color').replaceAll('neighbourhood','neighborhood').replaceAll('snorkelling','snorkeling'):s;
const nativeDeep=(v,locale)=>typeof v==='string'?enVariant(v,locale):Array.isArray(v)?v.map(x=>nativeDeep(x,locale)):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,nativeDeep(x,locale)])):v;
export function getBeachLocale(locale){
 if(locale==='ko')return {beaches:rawBeaches.filter(b=>b.pilot),cities:rawCities,ui:{hubTitle:'태국 해변',hubIntro:'도시·섬별 해변을 비교해보세요.',all:'전체',compare:'해변 비교',detail:'방문 안내',map:'해변 지도',search:'해변 검색',count:'곳',locate:'지도에서 보기',mainMap:'메인 지도에서 바다·해변 찾기'}};
 if(!beachLocales.includes(locale))throw new Error(`Unsupported beach locale ${locale}`);
 const lang=locale.startsWith('en')?'en':locale,ui=nativeDeep(uiCopy[lang],locale),pack=packs[lang];
 const cities=rawCities.map((c,i)=>({...c,name:cityCopy[lang][i][0],intro:cityCopy[lang][i][1]}));
 const beaches=rawBeaches.filter(b=>b.pilot).map((b,index)=>{
  const p=nativeDeep(pack[b.id],locale);if(!p)throw new Error(`Missing beach ${locale}/${b.id}`);
  const city=cities.find(c=>c.id===b.cityId);
  const coordinateKind=ui[b.coordinateKind==='만 대표 위치'?'coordinateBay':b.coordinateKind==='마을 대표 위치'?'coordinateVillage':'coordinateBeach'];
  const photos=b.photos.map((photo,i)=>{const caption=photoCopy[lang][b.id]?.[i]||`${p.name} · ${ui.coastPhoto}`;return {...photo,alt:caption,caption};});
  return {...b,name:p.name,city:city.name,facilityType:ui.beach,intro:p.intro,title:enVariant(p.title||`${p.name} | ${metaCopy[lang]?.[index]?.[0]||ui.guideSuffix}`,locale),description:enVariant(p.description||metaCopy[lang]?.[index]?.[1]||p.access,locale),
   coordinateKind,experience:p.experience,experienceTitles:p.experienceTitles,
   accessConditions:b.accessConditions.map(r=>({...r,label:ui.location,value:p.access})),
   facilities:b.facilities.map(r=>({...r,label:ui.nearby,value:p.facilities})),
   swimming:b.swimming.map(r=>({...r,label:ui.swimming,value:p.swimming})),
   seasons:b.seasons.map(r=>({...r,label:ui.swimming,value:b.id==='maya-bay'?ui.mayaSeason:ui.season})),
   transport:b.transport.map(r=>({...r,name:ui.access,instructions:p.transport})),
   faq:[...p.faq,[ui.redQuestion,ui.redAnswer]],photos,
   sources:b.sources.map(([label,url])=>[ui[sourceKeys[label]],url]),
   // Preserve Korean evidence, gap records and review history as raw source data.
   // Native editorial review is recorded separately; a KO pass is not a locale pass.
   editorialReview:{...b.editorialReview,pass:false,reviewStatus:'localized-draft-local-only',reviewScope:'Native full-body adaptation; separate integration and rendered verification required.'}
  };
 });
 return {beaches,cities,ui};
}
