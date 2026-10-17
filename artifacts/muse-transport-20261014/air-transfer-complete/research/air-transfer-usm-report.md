# AIR-TRANSFER-01 4호 USM(코사무이 공항) 산출 보고서

- 조사: 2026-10-13 12:26~12:42 KST. 범위: USM 단일. CNX/HKT/CEI/KBV/HDY·BKK/DMK·타 국가 미접촉.
- AIR-01 파일 읽기전용 재사용, 수정 없음. 1~3호 결과 파일 미접촉(형식만 참고).

## 검증된 필드 목록

- 공항 기본: id=air-transfer-usm / airport.id=airport-usm / slug=koh-samui-airport / detailPath=/th/airports/koh-samui-airport
- 사설공항 지위 + 1989-04-25 첫 운항 (Bangkok Airways 공식 블로그, 당일 재열람 — E3)
- 3옵션 존재 + 대중교통(버스)·철도 없음 + 차웽 2–5km·10–15분 (AIR-01 F102 인계 계승)
- usm-taxi: boardingPoint=도착 구역 (Arrival zone) — samuiairport.com 공식 확인 (신규)
- usm-rental 옵션 신규: 렌터카 존재(도착 구역 카운터) — samuiairport.com 공식 확인 (신규)
- 공항 본체 좌표: 9.54925 / 100.06280 — osm-crosschecked (OSM way 476938595, 84 nodes 중심점, ODbL 1.0 명기)
- 태국어 명칭: สนามบินสมุย (공식 사이트) / ท่าอากาศยานนานาชาติสมุย (OSM 공식 명칭)

## 신규 확인 팩트 (공식만)

- 수치·시간·요금 신규 확보 0건 (전건 공식 미기재 — 기록하지 않음).
- 좌표: 9.54925/100.06280 (osm-crosschecked, way 476938595, iata=USM, icao=VTSM, aerodrome=international).
- samuiairport.com 도착 구역: Car Rental 여러 브랜드 카운터 + Limousine / Taxi / Transfer (요금·브랜드·시간·세부 위치 미게시).
- 1989-04-25 첫 운항·태국 최초 사설공항 (당일 재열람).

## gaps

- 미검증 8건 (G1~G8): 요금 4수단 / 운영시간 4수단 / 렌터카 브랜드 / 택시·미니밴 세부 승차 지점 / 차량호출 운영사·앱·요금 / 승차장 좌표 / 렌터카 카운터 세부 위치 / 미니밴 운행사·노선·요금.
- 공식 미공개 0건 (공식 채널에서 '없음'을 직접 확인한 항목 없음).

## 장애 (정보없음과 구분)

- bangkokair.com 노선 페이지 JS 미렌더로 본문 재확인 불가 (조회 장애, G8 기록).
- overpass-api.de 406 차단 → overpass.kumi.systems 타임아웃 (조회 장애). OSM API 직접 대조로 좌표 확보.

## 산출물 (신규 4종, ~/workspace/thailivenow/air-transfer-01/)

- completed/air-transfer-usm.json — ready=false
- evidence/air-transfer-usm-evidence.json — 6 facts (E1·E2·E3 + AIR01 계승 3)
- gaps/air-transfer-usm-gaps.json — 8건
- research/air-transfer-usm-notes.md — 조회 URL·확인/불발 사유

## 숫자

- 후보 6공항 / 인계회수 7종+공식URL 4건 / 독립검증 4 (CNX·HKT·CEI·USM) / 페이지입력완성 0 / 실제로컬반영 0.
