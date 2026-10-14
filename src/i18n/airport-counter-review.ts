// Use only after at least one recorded official lookup failed to locate a desk.
export const counterSeasonalNotice:Record<string,string>={
 ko:'카운터 위치는 시즌별로 바뀔 수 있으니 해당 항공사에서 확인 바랍니다.',
 ms:'Lokasi kaunter boleh berubah mengikut musim. Sila semak dengan syarikat penerbangan berkenaan.',
 'zh-cn':'柜台位置可能随季节调整，请向相关航空公司确认。',
 'zh-tw':'櫃檯位置可能隨季節調整，請向相關航空公司確認。',
 ja:'カウンターの場所は季節によって変わる場合があります。該当する航空会社にご確認ください。',
 ru:'Расположение стойки может меняться в зависимости от сезона. Уточните его у соответствующей авиакомпании.',
 es:'La ubicación del mostrador puede cambiar según la temporada. Confírmela con la aerolínea correspondiente.',
 'en-in':'Counter locations may change by season. Please confirm with the relevant airline.',
 'en-gb':'Counter locations may change by season. Please confirm with the relevant airline.',
 'en-us':'Counter locations may change by season. Please confirm with the relevant airline.'
};
export function needsCounterNotice(airline:any,services:any[]){return airline.counterLookupAttempts>=1&&!services.some(s=>s.location&&/check.?in|체크인|報到|值机|カウンター|kaunter|mostrador/i.test(s.type||''));}
