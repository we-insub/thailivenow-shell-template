export const incidents = [
 {id:'flight-delayed',title:'비행기 출발이 늦어졌어요',name:'지연·확인서',first:'변경된 출발 시각과 실제 운항사를 확인하세요.',text:'다음 연결편이나 부친 짐에 영향이 있는지 항공사 직원에게 물어보세요. 확인서는 항공사별 발급 조건에 맞춰 준비하시면 돼요.',link:'지연됐을 때 할 일과 확인서 받기'},
 {id:'flight-cancelled',title:'항공편이 결항됐어요',name:'결항·환불',first:'새 표를 사기 전에 대체편과 환불 방법부터 문의하세요.',text:'기존 예약을 어떻게 처리할지 정하고, 이미 부친 짐과 다음 연결편도 함께 확인해주세요. 결항 알림과 접수 기록은 보관해두세요.',link:'대체편·환불과 결항 증빙 준비하기'},
 {id:'delayed-baggage',title:'도착했는데 짐이 안 나와요',name:'수하물 미도착',first:'수하물표를 가지고 항공사 수하물 데스크로 가세요.',text:'접수번호를 받고 짐을 배송받을 숙소 주소와 연락처를 남겨주세요. 경유편은 마지막 구간을 실제 운항한 항공사에 먼저 신고하시면 돼요.',link:'미도착 신고와 수하물 추적 방법'},
 {id:'damaged-baggage',title:'캐리어가 파손됐어요',name:'수하물 파손',first:'공항을 떠나기 전에 파손된 짐을 직원에게 보여주세요.',text:'파손 부위를 사진으로 남기고 수하물표와 사고 접수 기록을 챙겨주세요. 현장 신고 뒤 항공사별 서면 신고 기한도 지켜야 해요.',link:'현장 신고와 사진·서면 접수 준비하기'},
];
export const movedGuides = new Set(['find-airline-counter','late-arrival-suvarnabhumi','late-arrival-don-mueang','late-arrival-phuket','late-arrival-chiang-mai','daegu-bangkok-timetable']);
export const certificateIds = ['flight-delayed','flight-cancelled'];
export function guideKind(g){
 if(g.id==='caat-passenger-rights')return 'rights';
 if(/insurance|travel-claim/.test(g.id))return 'insurance';
 if(/baggage/.test(g.id))return 'baggage';
 if(/certificate|confirmation|flight-evidence/.test(g.id))return 'certificate';
 if(g.id==='flight-delayed'||g.id==='flight-cancelled')return 'flight';
 if(/redress/.test(g.id))return 'redress';
 return 'airport';
}
export function guidesForAirline(data,id){return data.guides.filter(g=>g.airlineIds?.includes(id)&&!movedGuides.has(g.id));}
export function guideMatches(g,incident){
 if(incident==='all')return true;
 if(/baggage/.test(incident))return guideKind(g)==='baggage';
 return ['certificate','redress'].includes(guideKind(g));
}
export function relatedGuides(data,g){
 const ids = g.id==='insurance-claim'?['samsungfire-travel-claim','hyundai-travel-claim','db-travel-claim']:
 guideKind(g)==='insurance'?['insurance-claim','flight-delayed','delayed-baggage']:
 guideKind(g)==='baggage'?['damaged-baggage','delayed-baggage','insurance-claim']:
 ['caat-passenger-rights','flight-delayed','flight-cancelled','insurance-claim'];
 return ids.filter(id=>id!==g.id).map(id=>data.guides.find(item=>item.id===id)).filter(Boolean);
}
export const carrierIntroductions = {
 'asiana':'아시아나항공을 이용하다 지연·결항이나 수하물 문제가 생겼다면, 필요한 업무에 맞는 접수처부터 찾아보세요. 운항정보확인서는 홈페이지에서 조회하고, 파손되거나 도착하지 않은 짐은 도착지 공항에 신고하시면 돼요. 결항 항공권의 환불과 보험 청구는 각각 따로 진행해야 해요.',
 'korean-air':'대한항공 지연·결항 확인서가 필요하다면 출발일과 편명을 준비해주세요. 짐이 나오지 않거나 파손됐다면 도착 공항 직원에게 먼저 알리고 수하물표와 접수 기록을 챙기시면 돼요. 항공사에 사고를 신고하는 절차와 보험사에 서류를 내는 절차를 나누어 안내해드릴게요.',
 'thai-airways':'타이항공 이용 중 비행기가 지연·결항됐거나 짐에 문제가 생겼나요? 확인서는 실제 타이항공 운항편인지 살펴본 뒤 신청하고, 수하물 사고는 도착 직후 직원에게 알려주세요. 현장에서 받은 사고보고서와 서면 청구 기록을 함께 보관하시면 돼요.',
 'air-busan':'에어부산의 운항 상태 조회, 탑승확인서와 수하물 사고 신고를 필요한 순서로 살펴보세요. 탑승 사실을 증명하는 서류와 지연·결항 사유를 증명하는 서류는 용도가 달라요. 캐리어가 파손됐다면 도착 공항에서 먼저 신고하고, 현장 접수 뒤 서면 신고 조건도 챙겨주세요.',
 'jeju-air':'제주항공 지연·결항 확인서가 필요하다면 예약번호와 국제선 영문 탑승객명을 준비해주세요. 짐이 파손됐거나 예정대로 나오지 않는다면 수하물 수취대에서 직원에게 먼저 알리시면 돼요. 확인서 발급과 수하물 서면 신고를 나누어 안내해드릴게요.',
 'jin-air':'진에어 항공편의 운항 상태와 지연·결항 확인서는 출도착 안내에서 찾아보실 수 있어요. 짐이 파손됐거나 나오지 않는다면 현장에서 직원에게 알리고 수하물표와 사진을 남겨주세요. 처음 사고를 신고하는 서류와 배상이 결정된 뒤 쓰는 동의서는 서로 달라요.',
 'air-premia':'에어프레미아 지연·결항 확인서는 변경 전 출발일을 기준으로 찾아보세요. 짐이 파손됐거나 나오지 않는다면 도착지 지점에 바로 신고해주세요. 파손과 지연·분실은 서면으로 신고해야 하는 기한과 날짜를 세는 기준이 달라 각각 설명해드릴게요.',
 'tway-air':'트리니티항공(구 티웨이항공) 이용 중 지연·결항이나 수하물 문제가 생겼다면, 확인서 발급과 사고 신고부터 진행해주세요. 피해구제를 신청할 때는 피해 내용과 요청하는 처리를 정리하고 접수증을 보관하시면 돼요. 일반 예약 문의와 공항 현장 신고는 구분해서 이용해주세요.',
 'thai-airasia':'타이 에어아시아를 이용하셨다면 항공권에서 실제 운항사와 FD 코드를 먼저 확인해주세요. FD와 타이 에어아시아 X의 XJ는 운항사와 약관이 달라요. 수하물 사고는 현장 직원에게 알리고, 지연·결항 증빙은 공식 고객지원 Chat with Bo에서 발급 방법을 문의하시면 돼요.',
 'eastar-jet':'이스타항공 지연·결항 확인서는 실시간 출도착 조회에서 발급받을 수 있어요. 이 서류에는 승객 개인정보가 없으니 이메일 예매 확인증도 함께 준비해주세요. 수하물 사고는 현장에서 먼저 알리고, 일반 안내와 국제 운송약관의 서로 다른 신고 기한을 구분해 살펴보세요.',
};
