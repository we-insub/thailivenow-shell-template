# AIR-TRANSFER-01 시범 CNX 조사 노트 (2026-10-13 10:32–10:36 KST)

## 읽기전용 인계 (수정 없음)
- ~/workspace/thailivenow/air01/air01-airport-transport.json — CNX 3옵션(cnx-shuttle-bus A1 40/A2 40/A3 60바트·cnx-grab·cnx-taxi)의 verified 필드 계승, 재조사 안 함
- ~/workspace/thailivenow/air01/air01-evidence.json — E104(GRAB, detail/138) / E105(셔틀, detail/145) 원문 인용
- ~/workspace/thailivenow/air01/air01-coverage.json — nullItems 'CNX 택시 요금 — AOT 공식 안내 미기재' 계승
- ~/workspace/thailivenow/air01/air01-airports.json — CNX 기본 정보 (좌표 null 인계)

## 직접 열람한 공식 원문 (browser.open, 2026-10-13 10:32–10:36 KST)
1. https://chiangmai.airportthai.co.th/service/transportation/detail/145 (Airport Shuttle Bus)
   - 확인: A1 40바트 / A2 40바트 / A3 60바트, 전 구간 정액. 노선 서술 인계값과 일치.
   - 미기재: 첫차·막차·배차간격 (페이지에 'typically have set departure times' 문구만). → gaps G1 (미검증)
2. https://chiangmai.airportthai.co.th/service/transportation/detail/138 (GRAB TAXI)
   - 확인: Grab Taxi/Grab Car/Just Grab 3종, 공항 지정 승차·하차 지점 이용.
   - 미기재: 요금 수치, 운영 시간. → gaps G4 (미검증)
3. https://chiangmai.airportthai.co.th/service/transportation (Transportation 목록)
   - 확인: 렌터카 9개 업체명 (Avis, BUA Travel & Car Rental, Europcar, Drive Car Rental, Hertz, Sixt, Chic Car Rent, Budget, Asap)
   - 확인: 'RTC Chiang Mai City Bus' 카드 존재. 'Taxi'는 필터 카테고리 태그로만 있고 목록에 택시 카드 미노출.
   - 목록에 업체별 카운터 위치·요금·운영시간 없음 → gaps G6
4. https://chiangmai.airportthai.co.th/service/transportation/detail/139 (RTC Chiang Mai City Bus)
   - 확인: 전 구간 30바트 정액. R3 Red Line(좌회전 순환) / R3 Yellow Line(우회전 순환), 양 노선 모두 치앙마이 국제공항 경유.
   - 미기재: 운행 시간·배차간격. 페이지 하단 'Thursday / Closed / ⋅ open 07.00 AM' 블록은 버스 운행 시간으로 해석 근거 없음 → gaps G2
5. Nominatim (OSM): 공항 본체 relation 12410725 (aeroway=aerodrome, 객체명 ท่าอากาศยานนานาชาติเชียงใหม่)
   - 좌표 lat 18.7668427 / lon 98.9648781. 라이선스: Data © OpenStreetMap contributors, ODbL 1.0. → E6 osm-crosschecked

## 장애·불발
- https://chiangmai.airportthai.co.th/service/transportation?service_type=taxi — 500 응답(서버 장애). 택시 필터 조사는 본 URL로 수행하지 않음(목록 페이지에서 택시 카드 미노출로 이미 확인).
- 웹 검색에서 택시 요금 수치(150–200바트 등)는 전부 제3자(트립닷컴 블로그·국내선태국 가이드·포럼) — 미검증으로 기록하지 않음.
- '공식 미공개' 단정 0건: 택시 요금표는 공식 채널에 요금표 자체가 없어 '미검증'으로 분류(공식에서 없음을 확인한 것이 아님).

## 신규 옵션 2건 추가 (공식 목록 기반)
- cnx-city-bus (RTC, 30바트, R3 레드·옐로)
- cnx-car-rental (9개 업체명만 — 카운터·요금·시간은 gaps)

## 산출물
- completed/air-transfer-cnx.json / evidence/air-transfer-cnx-evidence.json / gaps/air-transfer-cnx-gaps.json / research/air-transfer-cnx-notes.md (본 파일)
- AIR-01 원본 파일 수정 없음. 코드수정·배포 없음. CNX 외 공항(HKT/CEI/USM/KBV/HDY) 미접촉.
