// Select from the reviewed guide; do not maintain a second fare/timetable ledger.
const destinationNames = {asok:'아속·터미널21',silom:'실롬','old-town':'왓포·왕궁 주변',siam:'시암','khao-san':'카오산'};
export const destinationIds = Object.keys(destinationNames);
export function getTransferDestinations(guide) {
  const rows = guide.sections.find(s => s.id === 'destinations')?.table?.rows;
  if (!rows || rows.length !== destinationIds.length) throw Error('공항 목적지 표를 대조해주세요.');
  return destinationIds.map(id => {
    const row = rows.find(row => row[0] === destinationNames[id]);
    if (!row || row.length !== 5) throw Error('공항 목적지 표를 대조해주세요.');
    return {id, name: row[0], route: row[1], fareParts: row[2], fare: row[3], duration: row[4]};
  });
}
export function compareAirportTransfer(guide, {destination, time, luggage, preference}) {
  const place = getTransferDestinations(guide).find(d => d.id === destination);
  if (!place || !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time) || !['light', 'many'].includes(luggage) || !['compare', 'door'].includes(preference)) throw Error('목적지와 이동 조건을 다시 골라주세요.');
  const railText = guide.sections.find(s => s.id === 'rail').paragraphs.join(' ');
  const hours = railText.match(/(\d{2}):(\d{2})~(\d{2}):(\d{2})/);
  if (!hours) throw Error('공항철도 운행 안내 시간을 대조해주세요.');
  const minutes = Number(time.slice(0,2))*60 + Number(time.slice(3));
  const withinHours = minutes >= Number(hours[1])*60+Number(hours[2]) && minutes < Number(hours[3])*60+Number(hours[4]);
  const hasRailRoute = destination !== 'khao-san';
  const railStatus = !hasRailRoute ? '카오산에는 공항철도 직결역이 없어요. S1이나 택시·차량 호출을 비교하세요.' : !withinHours ? `입력하신 시각(${time})은 공항철도 운행 안내 시간(${hours[0]}) 밖이에요. 이 시각에 바로 출발하려면 차량을 먼저 살펴보세요.` : `입력하신 시각(${time})은 공항철도 운행 안내 시간(${hours[0]}) 안이에요. 실제 열차 출발시각과 MRT·BTS 환승편의 막차는 별도로 확인해야 해요.`;
  const roadFirst = !withinHours || !hasRailRoute || luggage === 'many' || preference === 'door';
  const reason = !hasRailRoute ? '카오산은 공항철도 직결역이 없어 차량부터 보여드려요.' : !withinHours ? '공항철도 운행 안내 시간 밖이어서 차량부터 보여드려요.' : preference === 'door' ? '환승을 줄이고 숙소 앞까지 가고 싶으시다면 차량부터 비교해보세요.' : luggage === 'many' ? '짐이 많다면 숙소 앞까지 가는 차량부터 비교해보세요. 타기 전에 짐이 실리는지 물어보세요.' : '역에서 숙소까지 가는 길과 짐의 양을 생각하며 철도와 차량을 비교해보세요.';
  return {place, withinHours, hasRailRoute, railStatus, roadFirst, reason, time};
}
