import en from '../data/delivery-localized/en.json' with {type:'json'};
import enUS from '../data/delivery-localized/en-us.json' with {type:'json'};
import enGB from '../data/delivery-localized/en-gb.json' with {type:'json'};
import enIN from '../data/delivery-localized/en-in.json' with {type:'json'};
import ms from '../data/delivery-localized/ms.json' with {type:'json'};
import zhCN from '../data/delivery-localized/zh-cn.json' with {type:'json'};
import zhTW from '../data/delivery-localized/zh-tw.json' with {type:'json'};
import ru from '../data/delivery-localized/ru.json' with {type:'json'};
import ja from '../data/delivery-localized/ja.json' with {type:'json'};
import es from '../data/delivery-localized/es.json' with {type:'json'};
export const deliveryPacks={en,'en-us':enUS,'en-gb':enGB,'en-in':enIN,ms,'zh-cn':zhCN,'zh-tw':zhTW,ru,ja,es};
export const deliveryLocales=Object.keys(deliveryPacks);
export const deliveryPlatformIds=['grabfood','line-man','shopeefood','robinhood'];
export function getDeliveryGuide(locale,id='food-delivery'){
 const pack=deliveryPacks[locale];
 if(!pack||!pack.guides[id])throw new Error(`Missing complete food delivery guide: ${locale}/${id}`);
 return {locale,guide:pack.guides[id],ui:pack.ui};
}
// Keep the governing condition attached to each highlighted number.
// Text stays plain data: no translated content is interpreted as HTML.
const conditionPhrases={
 en:['3% of the total transaction','minimum of 1 baht','0.5 baht or more round up','smaller fractions round down','6-digit code','more than 15 minutes without an assigned rider','more than 30 minutes while the food is still at the restaurant'],
 'zh-cn':['交易总额3%的境外付款手续费','最低1泰铢','小数部分达到0.5泰铢时进位','不足0.5泰铢则舍去','6位验证码','尚未分配骑手且延误超过15分钟','餐品仍在店内且延误超过30分钟'],
 'zh-tw':['交易總額3%的海外付款手續費','最低1泰銖','小數部分達0.5泰銖時進位','未達則捨去','6位數驗證碼','未指派外送員且延遲超過15分鐘','餐點仍在店內且延遲超過30分鐘'],
 ja:['取引総額の3%の海外決済手数料','最低1バーツ','端数が0.5バーツ以上なら切り上げ','未満なら切り捨て','6桁の認証コード','配達員が未割り当てのまま15分を超えて遅延','料理がお店にある状態で30分を超えて遅延'],
 ms:['3% daripada jumlah transaksi','caj minimum 1 baht','Pecahan 0.5 baht ke atas dibundarkan naik','pecahan lebih kecil dibundarkan turun','kod 6 digit','lewat lebih 15 minit tanpa penghantar ditetapkan','lewat lebih 30 minit sementara makanan masih berada di restoran'],
 ru:['комиссия 3% от общей суммы операции','минимум 1 бат','Дробная часть от 0.5 бата округляется вверх','меньшая — вниз','6-значный код','задержка превышает 15 минут и курьер не назначен','задержка превышает 30 минут, а еда всё ещё находится в ресторане'],
 es:['comisión del 3% del total de la transacción','mínimo de 1 baht','fracciones de 0.5 baht o más se redondean hacia arriba','las inferiores, hacia abajo','código de 6 dígitos','más de 15 minutos de retraso sin repartidor asignado','más de 30 minutos de retraso mientras la comida sigue en el restaurante']
};
export function deliveryTextParts(text,locale='en'){
 const base=locale.startsWith('en')?'en':locale;
 const phrases=[...(conditionPhrases[base]||[]),'Payment details','See all','Place Order','Get Help','Cancel order','Activity','GrabPay','KakaoPay','LINE ID'].sort((a,b)=>b.length-a.length);
 const escaped=phrases.map(value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
 const pattern=new RegExp('('+escaped.join('|')+')','g');
 return text.split(pattern).filter(Boolean).map(value=>({text:value,strong:phrases.includes(value)}));
}
