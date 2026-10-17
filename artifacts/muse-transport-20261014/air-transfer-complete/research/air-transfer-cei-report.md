# AIR-TRANSFER-01 3호 CEI(치앙라이 매파루앙 공항) 조사 완료 보고

- 조사 시각: 2026-10-13 11:31~11:57 KST (단일 직렬, 하위 worker 없음)
- AIR-01 CEI 3옵션 계승 (재조사 없음): cei-taxi / cei-shuttle / cei-rental + AIR01-F103 + coverage nullItems

## 검증된 필드 (공식 원문 직접 열람)
- cei-taxi.boardingPoint: 도착홀 내 서비스 포인트 (AOT 공식 페이지 재확인, E1)
- cei-rental.boardingPoint: 공항 1층 (AOT 공식 홈페이지 재확인, E2)
- cei-rental: Sawasdee by AOT 앱 사전 예약·특별 요금·브랜드 혜택 안내 존재 (공식 홈페이지, E2)
- 공항 본체 좌표: OSM way 593126810 (aeroway=aerodrome, iata=CEI, 객체명 'ท่าอากาศยานเชียงราย') 기하 중심점 19.95285/99.87952, ODbL (E3)
- 공식 안내 문구 확인: 택시 요금은 '외부보다 약간 높음' 표기만(금액 미게시, E1)

## 신규 확인 팩트
- 수치·시간·요금·요일 신규 확보: 없음 (전건 공식 채널에 미기재 — 수치 기록하지 않음)
- 좌표 신규 확보: 공항 본체 19.95285/99.87952 (OSM 객체 대조)

## gaps
- 미검증 9건(G1~G9): 택시 요금·운영시간, 셔틀 운행사·노선·시간표·요금(공항버스 운행 여부 포함), 렌터카 업체 목록·요금·운영시간, 그랩 AOT 채널 등재 여부, 3옵션 전건 소요시간, 3옵션 전건 승차장 공식 좌표
- 공식 미공개: 0건
- 그랩은 AOT CEI 공식 채널 등재를 찾지 못해 옵션 미구성 (CNX·HKT 선례 기준 미달). 언론 보도(그랩 측 발표 인용)는 비공식이라 기록하지 않음.

## 장애 (정보없음과 구분)
- /service/transportation HTTP 500 (3회 시도)
- Overpass API 406·타임아웃 → OSM API 직접 대조로 해소

## 산출물 (~/workspace/thailivenow/air-transfer-01/)
- completed/air-transfer-cei.json — 8,876B, SHA `b601c281…`
- evidence/air-transfer-cei-evidence.json — 2,974B, SHA `25a52b9e…` (E1·E2·E3·AIR01-F103·AIR01-COV 5건)
- gaps/air-transfer-cei-gaps.json — 3,231B, SHA `a5c8806d…` (9건)
- research/air-transfer-cei-notes.md — 3,980B, SHA `c8258e21…`
- ready=false. 기존 파일 수정 없음. CNX/HKT/BKK/DMK/타 공항 미접촉.
