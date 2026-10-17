# ROOFTOPS-01 SCHEMA (ThaiLiveNow 태국 도시별 루프탑 허브)

## 산출물 (도시별 독립, city dir에만 쓰기)
각 도시 디렉토리: `bangkok/ chiangmai/ pattaya/ phiphi/ phuket/ kohsamui/ others/`
- `{city}-rooftops.json` — 시설 목록 (아래 스키마, stable id)
- `{city}-rooftops-evidence.json` — 팩트별 근거 (source URL, 확인일, 인용 내용)
- `{city}-rooftops-coverage.json` — 확인 범위/미확보 명시
- `{city}-rooftops-manuscript.md` — 한국어 자연스러운 원고 + FAQ
- `{city}-rooftops-seo.json` — SEO/AEO/GEO 키워드 + 연관질문

공유 원장 없음. 도시 간 파일 공유 쓰기 금지 (AGENTS.md 원장 동시쓰기 금지 준용).

## stable id
`rt-{citycode}-{nnn}` — citycode: bkk/cnx/pty/phi/hkt/usm/oth. 예: `rt-bkk-001`

## rooftops.json 레코드 (상세템플릿 확정 2026-10-13)
{
  "id": "rt-bkk-001",
  "city": {"ko":"방콕","en":"Bangkok","th":"กรุงเทพมหานคร"},
  "names": {"ko":"...","en":"...","th":"..."},
  "type": "hotel-rooftop-bar | hotel-rooftop-restaurant | observatory | public-rooftop",
  "hotel": {"name_en":"...","nonGuestAccess": true/false, "poolNote":"..."},
  "status": "operating | seasonal | temporarily-closed | closed | unknown",
  "location": {
    "address":"...",
    "building": {"lat": null|number, "lng": null|number,
      "coordSource":"official | osm-crosschecked | null",
      "coordNote":"공식 좌표 없으면 null 유지, 임의 핀 금지"},
    "entryFloor": "78층 (건물 좌표와 별도 구분)"
  },
  "hours": {"text":"...","lastEntry":"...","lastOrder":"...","source":"official url"},
  "closedDays": "...|null",
  "childrenAllowed": true|false|null,
  "childCondition": "7세 이상 성인 동반 등",
  "minimumSpend": {"amount":"...|null","appliesTo":"1인 기준 등 적용인원","timeCondition":"시간조건|null"},
  "entryFee": {"amount":"...|null","bookingCondition":"예약 조건 등"},
  "dressCode": "...",
  "reservationUrl": "...|null",
  "setting": {"indoorOutdoor":"indoor|outdoor|both","rainPolicy":"..."},
  "phone": "...|null",
  "access": {"nearest":"BTS ... 역 도보 n분 등","pierOrLandmark":"..."},
  "visitReason": {
    "viewDetail": "실제 보이는 풍경/방향·전망 (공식 근거)",
    "sunsetNight": "노을·야경 포인트 (공식 근거)",
    "music": "음악/DJ/라이브 일정 (공식 근거)",
    "signature": [{"name":"...","price":"...","source":"공식 메뉴 URL"}],
    "fameReason": "왜 유명한지 (공식 근거 — 수상·영화배경 등)"
  },
  "sources": [{"url":"...","accessedAt":"2026-10-13","note":"공식 요금/시간 확인"}]
}

## 필수 규칙
1. 호텔/시설 **공식 원문**(공식 사이트·공식 SNS·공식 예약페이지)으로 현재 운영 여부 확인. 비공식 블로그만으로 운영 단정 금지.
2. 호텔 옥상/수영장(투숙객 전용)과 **비투숙객 입장 가능 루프탑**을 구분. 수영장 투숙객 전용인데 루프탑바로 둔갑 금지.
3. 피피섬 뷰포인트(Phi Phi Viewpoint 등 전망대)는 루프탑이 아님 — type=observatory로만 기록하거나 제외하고 coverage에 명시. 루프탑으로 둔갑 금지.
4. 좌표: 건물 좌표(building.lat/lng)와 입장층(entryFloor)을 구분 기록. 공식 원문에 좌표/지도 링크가 있으면 official. 없으면 OSM을 **별도 출처**로 대조한 경우만 osm-crosschecked, 출처 URL 명기. 대조 불가면 null + coordNote에 "미확보" 명시. 임의 좌표 생성 금지.
5. 없는 도시는 "없음" 단정 금지. coverage.json에 확인 범위(검색한 공식 출처 목록)와 미확보 항목을 명시.
6. 한국어명 + 영어 공식명 필수, 태국어명은 공식 확인분만.
7. 한국/일본 관련 기존 작업 디렉토리·파일에 손대지 않음.
8. 기본필드 우선 추가조사: childrenAllowed/최소연령·동반조건, 영업시간(마지막입장·라스트오더), 휴무일, 최소이용금액(적용인원·시간조건), 입장료(예약조건), 드레스코드. 값 미확보면 우선 조사하되 아래 13번 표기 규범을 따른다.
9. 왜방문할지(visitReason): 실제보이는풍경/방향·전망, 노을·야경, 음악/DJ/라이브일정, 공식시그니처메뉴·칵테일(이름·가격·근거URL), 왜유명한지 근거 — 전부 공식 메뉴·시설 FAQ로 검증된 것만 한국어 작성.
10. 현지인/외국인 인기비율·인지는 출처 없이 절대 기재 금지.
11. fact별 URL: 공식호텔/시설사이트·메뉴·FAQ·예약약관을 직접 확인하고 evidence.json의 각 fact에 URL 첨부.
12. 도시 UX(Codex 구현용): 도시 선택 → 해당 도시 실제지도+시설핀+목록 → 핀/목록 → 각 루프탑 상세. 데이터는 stable id·city·building 좌표 정합성으로 지원.
13. 미검증 표기 (AGENTS.md 소유자 지시): 확인하지 못한 항목은 '미검증'으로 표시. '미확인' 사용 금지. 찾지 못했다고 '공식 미공개'로 단정 금지 — '공식 미공개'는 공식 채널에서 없음을 직접 확인했을 때만 쓴다. 문자열 필드는 '미검증' 문자열로, 숫자/불리언 필드는 null + 사유 명기로 기록.

## coverage.json
{"city":"...","scope":"확인한 공식 출처 목록","confirmedCount":n,"investigatedCount":n,
 "missing":["미확보 항목"],"notes":"..."}

## evidence.json
[{"factId":"F01","fact":"...","sources":[{"url":"...","accessedAt":"...","quote":"..."}],
  "confidence":"confirmed|partial|unknown"}]

## manuscript.md
- 도시별 한국어 자연스러운 소개 원고 (시설별 2-4문장, 과장 금지)
- FAQ 5-8개 (입장료/예약/드레스코드/아이동반/우천 등)

## seo.json
{"keywords_ko":[...],"keywords_en":[...],
 "relatedQuestions":[{"q":"...","intent":"AEO|GEO"}]}
