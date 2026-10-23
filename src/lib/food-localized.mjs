import food from '../data/food.json' with {type:'json'};
import ms from '../data/food-localized/ms.json' with {type:'json'};
import zhCN from '../data/food-localized/zh-cn.json' with {type:'json'};
import zhTW from '../data/food-localized/zh-tw.json' with {type:'json'};
import en from '../data/food-localized/en.json' with {type:'json'};
import enUS from '../data/food-localized/en-us.json' with {type:'json'};
import enGB from '../data/food-localized/en-gb.json' with {type:'json'};
import enIN from '../data/food-localized/en-in.json' with {type:'json'};
import ru from '../data/food-localized/ru.json' with {type:'json'};
import ja from '../data/food-localized/ja.json' with {type:'json'};
import es from '../data/food-localized/es.json' with {type:'json'};
export {fmt} from './food-text.mjs';
// Structure (ids, months, prices, photo files, source URLs) stays in food.json; every
// reader-facing string comes from the market's own pack. Korean keeps its own pages.
export const foodPacks={ms,'zh-cn':zhCN,'zh-tw':zhTW,en,'en-us':enUS,'en-gb':enGB,'en-in':enIN,ru,ja,es};
export const foodLocales=Object.keys(foodPacks);
export function getFoodPack(locale){
 const pack=foodPacks[locale];
 if(!pack)throw new Error(`Missing food pack: ${locale}`);
 return pack;
}
// Same shape as food.json with the localized text laid over it. `availabilityKey`
// keeps the original year-round flag, so logic never depends on translated words.
export function foodData(locale){
 const pack=getFoodPack(locale);
 const photo=(base,entry)=>base?{...base,alt:entry.photoAlt,caption:entry.photoCaption}:base;
 const text=({photoAlt,photoCaption,...rest})=>rest;
 return {
  ...food,
  regions:food.regions.map(item=>({...item,...pack.regions[item.id]})),
  cities:food.cities.map(item=>({...item,...pack.cities[item.id]})),
  dishes:food.dishes.map(item=>({...item,...text(pack.dishes[item.id]),photo:photo(item.photo,pack.dishes[item.id])})),
  fruits:food.fruits.map(item=>({...item,...text(pack.fruits[item.id]),availabilityKey:item.availability,photo:photo(item.photo,pack.fruits[item.id])})),
  fruitPrices:food.fruitPrices.map((item,index)=>({...item,label:pack.fruitPriceLabels[index]})),
  sources:Object.fromEntries(Object.entries(food.sources).map(([id,[label,url]])=>[id,[pack.sources[id]||label,url]]))
 };
}
export const foodRoutes=[
 '','traditions','street-food','fruit-prices','fruits',
 ...food.cities.map(item=>`cities/${item.id}`),
 ...food.dishes.map(item=>`dishes/${item.id}`),
 ...food.fruits.map(item=>`fruits/${item.id}`)
];
