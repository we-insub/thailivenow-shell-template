export {assistanceCopy} from './airport-assistance-copy.mjs';
import {guideKind} from './airport-assistance-editorial.mjs';

export const assistanceIssues=['delay','cancellation','missing','damage'];
export function departureAirportCodes(data:any):string[]{
 return [...new Set<string>(data.routes.map((r:any)=>r.originIata===r.thaiAirport?r.destinationIata:r.originIata).filter(Boolean))].sort();
}
export function airportDisplayName(data:any,code:string):string{
 const thaiNames:Record<string,string[]>={MY:['Lapangan Terbang Suvarnabhumi','Lapangan Terbang Antarabangsa Don Mueang','Lapangan Terbang Antarabangsa Phuket','Lapangan Terbang Antarabangsa Chiang Mai'],CN:['素万那普机场','廊曼国际机场','普吉国际机场','清迈国际机场'],TW:['蘇凡納布機場','廊曼國際機場','普吉國際機場','清邁國際機場'],JP:['スワンナプーム空港','ドンムアン空港','プーケット国際空港','チェンマイ国際空港'],RU:['Аэропорт Суварнабхуми','Аэропорт Донмыанг','Аэропорт Пхукет','Аэропорт Чиангмай'],ES:['Aeropuerto de Suvarnabhumi','Aeropuerto de Don Mueang','Aeropuerto de Phuket','Aeropuerto de Chiang Mai']};
 const index=['BKK','DMK','HKT','CNX'].indexOf(code);
 return data.airportNames?.[code]||data.routes.find((r:any)=>r.airportNames?.[code])?.airportNames[code]||data.routes.find((r:any)=>r.originIata===code)?.origin||data.routes.find((r:any)=>r.destinationIata===code)?.destination||data.services.find((s:any)=>s.airportIata===code)?.airport||thaiNames[data.market]?.[index]||({BKK:'Suvarnabhumi Airport',DMK:'Don Mueang International Airport',HKT:'Phuket International Airport',CNX:'Chiang Mai International Airport'} as Record<string,string>)[code]||code;
}
export function serviceCategory(s:any):number {
 if(s.role)return s.role==='check-in'?0:s.role==='baggage'?2:s.role==='remote'?3:1;
 const type=s.type||'';
 if(/check.?in|bag.?drop|baggage tag printing|self.service baggage|daftar|factura|值机|報到|チェックイン|регистрац|自動手荷物|自助|托运|託運|KIOSK|国際出発|国际出发手续|登機|Сдача зарегистрированного/i.test(type))return 0;
 if(/baggage|bagasi|行李|手荷物|багаж|equipaje|lost|perdidos|忘れ物|失物|유실|분실|파손|수하물/i.test(type))return 2;
 if(/office|pejabat|辦公室|办公室|事務所|オフィス|офис|представительств|кассы/i.test(type))return 1;
 if(/reservation|booking|contact.?cent|call.?cent|customer|global support|remote|tempahan|pusat hubungan|客服|服务热线|客戶服務|電話|問い合わせ窓口|予約|контактный центр|бронир|atención|咨询|諮詢/i.test(type))return 3;
 return 1;
}
export function issueForGuide(g:any):'flight'|'baggage'|'other'{
 const kind=guideKind(g);
 return kind==='baggage'?'baggage':['flight','certificate','redress'].includes(kind)||/disruption|flight-delay|flight-cancel/.test(g.id)?'flight':'other';
}
