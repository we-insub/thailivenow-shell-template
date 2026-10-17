# AIR-TRANSFER-01 4호 USM(코사무이 공항) 조회 노트

조사일: 2026-10-13 (KST). 범위: USM 단일. CNX/HKT/CEI/KBV/HDY·BKK/DMK·타 국가 미접촉.
AIR-01 파일(air01-*.json)은 읽기전용 재사용, 일절 수정 없음. 1~3호 completed는 형식만 참고.

## 조회한 URL (공식)

1. https://www.samuiairport.com/ (공식 공항 사이트, 2026-10-13 열람)
   - 확인: 도착 구역(Arrival zone) 일대 안내에 "จุดบริการ Car Rental แบรนด์ต่างๆ"(여러 브랜드 렌터카 카운터), "บริการ Limousine / Taxi / Transfer" 표기.
   - 불발: 요금표·운영시간·브랜드명·세부 카운터 위치·승차장 좌표 전부 미게시. 버스·철도 안내 없음.
   - 확인일: 2026-10-13T12:28:00+09:00 (evidence E1)
2. https://blog.bangkokair.com/en/samui-international-airport/ (Bangkok Airways 공식 블로그, 2026-10-13 재열람)
   - 확인: "Samui International Airport is Thailand's first privately owned airport, welcoming its first flight on April 25, 1989."
   - 확인일: 2026-10-13T12:33:00+09:00 (evidence E3)
3. https://www.bangkokair.com/flightdeals/view/don-mueang-samui (Bangkok Airways 공식, AIR-01 F102 소스)
   - 2026-10-13 재열람 시도: JS 미렌더로 본문 텍스트 미확보 (조회 장애 — 정보 부재와 구분).
   - AIR-01 인계값(F102: 택시·미니밴·차량호출 / 대중교통·철도 없음 / 차웽 2–5km·10–15분)은 재조사 금지로 계승.
4. OSM API: https://www.openstreetmap.org/way/476938595 및 /api/0.6/way/476938595(+full).json
   - 확인: way 476938595, aeroway=aerodrome, aerodrome=international, iata=USM, icao=VTSM, name "ท่าอากาศยานนานาชาติสมุย".
   - 84 nodes 기하 중심점 9.54925/100.06280 (로컬 계산). ODbL 1.0 명기.
   - 확인일: 2026-10-13T12:40:00+09:00 (evidence E2)

## 조회한 API/서비스 (비공식 제외)

- Nominatim 검색 API (nominatim.openstreetmap.org): way 476938595 식별용. 검색 결과 인용 없음.
- Overpass: overpass-api.de 406 차단 → overpass.kumi.systems 타임아웃. 둘 다 조회 장애로 기록, 결과 미사용.
- map.geocode: 9.54631/100.06414 (프로바이더 지오코딩) — osm-crosschecked가 아니므로 미사용.

## 불발/제외 (비공식이라 미기록)

- mekhe.com USM 요금표 (Toyota Fortuner ฿1,000 등), gobytaxi.com USM 요금 (차웽 300바트 등), taxiautofare.com 요금표, 12go.asia 택시, evendo.com 트랜스퍼, Klook/Kayak 렌터카 업체 목록 (Sixt·Hertz·Avis 등) — 전부 제3자/OTA라 수치·업체명 기록하지 않음.
- 12go의 "Buses are not available / Trains are not available" 표기는 OTA 데이터라 공식 근거로 미사용 (AIR-01 F102 인계값 유지).

## 신규 확인 요약 (공식만)

- usm-rental 옵션 신규: 렌터카 존재(도착 구역 카운터) 공식 확인. 브랜드·요금·운영시간은 미검증.
- usm-taxi boardingPoint: 도착 구역(Arrival zone) 수준으로 승격 (세부 위치는 미검증).
- 공항 본체 좌표 osm-crosschecked: 9.54925/100.06280.
- 사설공항 지위·1989-04-25 첫 운항: 당일 재열람 확인.

## 미검증 (gaps 8건, 공식 미공개 0건)

요금 4수단·운영시간 4수단·렌터카 브랜드·택시/미니밴 세부 승차 지점·차량호출 운영사·승차장 좌표·렌터카 카운터 세부 위치·미니밴 운행사.
