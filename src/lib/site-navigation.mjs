import {thaiAirportHome} from './airport-guide-navigation.mjs';

// Korean navigation is the semantic source and ordering contract for every market.
export const navigationLocales=['ko','ms','zh-cn','en','en-in','ru','ja','en-gb','en-us','es','zh-tw'];
// Owner hold (2026-10-20): keep coupons hidden in every market until explicitly reopened.
// Retain the ordered topic and localized copy below for that future opening.
export const couponsNavigationEnabled=false;
export const navigationIds=['map','destinations','food','transport','airports','cameras','saved','food-delivery','rooftops','beaches','coupons','flight-disruptions'];
const icons=['compass','pin','food','train','plane','grid','heart','food','pin','pin','coupon','plane'];
const koreanLabels=['지도에서 찾기','태국 여행','음식','교통','태국 공항','카메라 목록','저장한 카메라','음식배달','루프탑','해변','할인쿠폰','항공편 지연·결항'];
const koreanShort=['지도','태국 여행','음식','교통','태국 공항','카메라','저장','배달','루프탑','해변','쿠폰','지연·결항'];
const englishLabels=['Map','Thailand travel','Food','Transport','Thailand airports','Camera list','Saved cameras','Food delivery','Rooftops','Beaches','Coupons','Flight delays and cancellations'];
export const navigationLabels={
 ko:koreanLabels,en:englishLabels,'en-in':englishLabels,'en-gb':englishLabels,'en-us':englishLabels,
 ms:['Peta','Melancong di Thailand','Makanan','Pengangkutan','Lapangan terbang Thailand','Senarai kamera','Kamera disimpan','Penghantaran makanan','Ruang atas bumbung','Pantai','Kupon','Penerbangan lewat dan dibatalkan'],
 'zh-cn':['地图','泰国旅行','美食','交通','泰国机场','摄像头列表','已收藏摄像头','外卖','屋顶酒吧与观景台','海滩','优惠券','航班延误与取消'],
 'zh-tw':['地圖','泰國旅遊','美食','交通','泰國機場','攝影機列表','已收藏攝影機','外送','高空酒吧與觀景台','海灘','優惠券','航班延誤與取消'],
 ja:['地図','タイ旅行','グルメ','交通','タイの空港','カメラ一覧','保存したカメラ','フードデリバリー','ルーフトップ','ビーチ','クーポン','航空便の遅延・欠航'],
 ru:['Карта','Путешествия по Таиланду','Еда','Транспорт','Аэропорты Таиланда','Список камер','Сохранённые камеры','Доставка еды','Бары и смотровые площадки на крышах','Пляжи','Купоны','Задержка и отмена рейсов'],
 es:['Mapa','Viajar por Tailandia','Gastronomía','Transporte','Aeropuertos de Tailandia','Lista de cámaras','Cámaras guardadas','Comida a domicilio','Terrazas y miradores','Playas','Cupones','Retrasos y cancelaciones de vuelos']
};
export function siteNavigation(locale='ko'){
 if(!navigationLocales.includes(locale))throw new RangeError(`Unsupported navigation locale: ${locale}`);
 return navigationIds.map((id,i)=>{
  const path=id==='map'?'':id==='cameras'?'directory':id==='flight-disruptions'?'airport-assistance':id;
  const href=id==='airports'?thaiAirportHome(locale):`/${locale}/${path?path+'/':''}`;
  const name=navigationLabels[locale][i];
  return [name,locale==='ko'?koreanShort[i]:name,icons[i],href];
 }).filter((item,index)=>couponsNavigationEnabled||navigationIds[index]!=='coupons');
}
