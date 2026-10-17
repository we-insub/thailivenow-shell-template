const definitions=[
 {id:'checkin',title:'체크인 카운터',intro:'비행기를 타기 위한 탑승 수속과 짐 부치는 곳이에요. 항공권의 실제 운항사를 찾아 위치와 수속 마감 시각을 살펴보세요.'},
 {id:'ticketing',title:'발권·스카이패스 창구',intro:'항공권 발권이나 스카이패스 업무를 볼 때 이용해요. 체크인 창구와 위치·운영시간이 다를 수 있어요.'},
 {id:'office',title:'항공사 공항 사무실',intro:'항공사의 공항 지점 사무실이에요. 탑승 수속을 하러 가는 체크인 카운터와 구분해 주세요.'},
 {id:'baggage',title:'수하물·분실물 문의',intro:'짐이 나오지 않거나 파손됐다면 공항을 떠나기 전에 항공사 수하물 직원에게 신고하세요. 아래 전화·이메일은 항공사별 문의처이며 현장 신고 창구와 다를 수 있어요.'},
 {id:'reservation',title:'예약센터·전화 상담',intro:'예약이나 항공권을 전화로 상담할 때 이용해요. 공항 카운터의 직통전화와는 달라요.'}
];
export function counterGroup(service){
 const type=service.type||'';
 if(/체크인/.test(type))return 'checkin';
 if(/발권|스카이패스/.test(type))return 'ticketing';
 if(/사무실/.test(type))return 'office';
 if(/수하물|분실물|Lost\s*&\s*Found/i.test(type))return 'baggage';
 if(/예약센터|원격 상담/.test(type))return 'reservation';
 throw new Error(`Unclassified BKK service: ${service.id}`);
}
export function groupCounterServices(services){
 const compare=new Intl.Collator('ko');
 return definitions.map(group=>({...group,services:services.filter(s=>counterGroup(s)===group.id).sort((a,b)=>compare.compare(a.airline,b.airline)||a.id.localeCompare(b.id))})).filter(g=>g.services.length);
}
// Incoming flights do not identify the BKK departure check-in counter.
export function departureRoutesForService(service,routes){
 return routes.filter(r=>r.originIata==='BKK'&&r.airlineId===service.airlineId);
}
