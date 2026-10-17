# AIR-TRANSFER-01 3호 CEI 조사 노트 (2026-10-13, 단일 직렬)

## 인계 (AIR-01, 읽기전용 — 재조사 금지)
- CEI 3옵션: cei-taxi(도착홀 내 서비스 포인트, 요금 null)·cei-shuttle(사전 예약, 승차장소 미게시, 요금 null)·cei-rental(공항 1층, 요금 null), evidenceId F103
- F103: AOT 치앙라이 공항 공식 'How to get to Chiang Rai Airport' 페이지(2021-07-18 게시). 사전 예약 공항셔틀, 도착홀 서비스 포인트에서 택시 호출, 1층 렌터카. 요금은 '외부보다 약간 높음'(금액 미게시)
- air01-coverage.json nullItems: "CEI 요금·공항버스 운행 여부 — AOT 공식 페이지에 금액·노선 미게시"

## 공식 채널 조회 (2026-10-13 11:31~11:57 KST, 전부 실열람)
1. https://chiangrai.airportthai.co.th/service/way-to-airport/detail/93 — 'How to get to Chiang Rai Airport' (2021-07-18 게시). Car/Taxi/Airport Shuttle 3수단만. 택시: 도착홀 내 서비스 포인트에서 호출, 요금은 "외부보다 약간 높음" 표기만(금액 없음). 셔틀: 사전 예약 안내만(운행사·노선·시간표·요금 없음). 공항버스 노선·시간표·요금 게시 없음. (E1, 정상 열람)
2. https://chiangrai.airportthai.co.th/ — 공식 홈페이지 WAY TO AIRPORT 섹션. 'Car Rental Services at Chaing Rai Airport' 기사 요약: 렌터카 서비스가 공항 1층에 있음, Sawasdee by AOT 앱 사전 예약 시 특별 요금·브랜드 혜택. 기사 본문 페이지의 직접 열람 경로는 확보하지 못함(페이지 텍스트에 outlink 미노출) — 업체 목록은 미확인. (E2, 정상 열람)
3. OSM API (api.openstreetmap.org/0.6/way/593126810): way 593126810, aeroway=aerodrome, aerodrome=international, iata=CEI, icao=VTCT, name 'ท่าอากาศยานเชียงราย' (name:en 'Chiangrai International Airport'). 45노드 기하 중심점 19.95285/99.87952. (E3, 정상 조회·ODbL)

## 불발·미확인 사유
- https://chiangrai.airportthai.co.th/service/transportation — HTTP 500(서버 빈 응답), 3회 시도 후 포기. CNX식 교통 목록 페이지의 CEI 대응 URL이 아님(장애, 정보없음 아님).
- 그랩: AOT CEI 공식 채널(교통 안내·홈페이지)에서 등재를 찾지 못함. 언론 보도(2026-09, telecomlover/prachachat/mgronline — 그랩 측 발표 인용, Airport Pickup이 푸껫·치앙마이·치앙라이 3개 지방공항에서 이미 운영)는 AOT 공식 채널이 아니라 기록하지 않음(미검증).
- 공항버스 운행 여부: AOT 공식 채널에 노선·시간표 게시 없음. 제3자(chiangraitimes·trip.com)의 EV버스 운행 중단 주장(2024-08-22)은 비공식이라 기록하지 않음 — '찾지 못함 ≠ 공식 미공개'.
- 렌터카 업체 목록: 공식 기사 본문 미열람. OTA(Kayak·Expedia 등)의 업체 목록은 비공식이라 기록하지 않음.
- Overpass API 3개 엔드포인트 조회 실패(overpass-api.de 406·kumi.systems/zoverpassapi 타임아웃) — 장애로 기록. Nominatim 검색으로 way 593126810 특정 후 OSM API 직접 대조로 해소.

## 확인된 사실 (신규 verified)
- 좌표: OSM way 593126810 객체 대조, 중심점 19.95285/99.87952, 객체명 'ท่าอากาศยานเชียงราย' (ODbL)
- 택시 승차: 도착홀 내 서비스 포인트 (공식 페이지 재확인)
- 렌터카: 공항 1층 (공식 홈페이지 재확인) + Sawasdee by AOT 앱 사전예약 안내 (공식)
- 요금·운영시간·소요시간: 전건 공식 미기재 — 수치 기록 없음

## 장애와 정보없음 구분
- 장애: /service/transportation 500, Overpass 406/타임아웃
- 정보없음(공식 채널 미게재 → 미검증): 택시 요금표·운영시간, 셔틀 운행사·시간표·요금, 공항버스 운행 여부, 렌터카 업체 목록·요금·운영시간, 그랩 등재 여부, 소요시간, 승차장 공식 좌표
- 공식 미공개 단정: 0건
