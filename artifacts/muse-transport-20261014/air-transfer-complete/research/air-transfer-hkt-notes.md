# AIR-TRANSFER-01 2호 HKT 조사 노트

- 조사일: 2026-10-13 (KST)
- 범위: HKT(푸껫 공항) 단독. CNX 재처리 없음. CEI/USM/KBV/HDY·BKK/DMK/UTP·타 국가 미접촉.
- AIR-01 파일 읽기전용 재사용: air01-airport-transport.json (HKT 6옵션 verified 계승), air01-evidence.json E106/E107, air01-coverage.json nullItems.

## 열람 URL (성공)

1. http://phuket.airportthai.co.th/service/way-to-airport/detail/97 (AOT 공식)
   - 재열람 2026-10-13T11:06:00+09:00 (AIR-01 인계 accessedAt 2026-10-13T03:00+09:00와 별도 기록).
   - 확인: Airport Bus(시내행) 08:15–20:15/09:15–21:15 매시간·정차 노선, Airport Bus Express(파통행) 08:00–20:00/06:00–18:30·노선, Phuket Smart Bus(Domestic Terminal 승차·서해안 노선), Public Passenger Vans(공항–파통–카타–카론).
   - 불발: 4수단 모두 요금·소요시간 미표시 (AIR-01 nullItems 계승).

2. https://phuket.airportthai.co.th/service/airport-guide/detail/Arrival_Procedure_HKT (AOT 공식)
   - 재열람 2026-10-13T11:07:00+09:00.
   - 확인: STEP 6 Transportation 등재 수단 — Limousine, Taxi Meter / EV Taxi, Bus, Rent Car, Grab, Others.
   - 불발: 요금표·운영시간 미게재. Grab·렌터카는 AIR-01 인계 옵션에 없고 본 작업 범위 밖이라 옵션 미구성.

3. https://phuketsmartbus.com/payment (운영사 공식 채널)
   - 열람 2026-10-13T11:08:00+09:00.
   - 확인: 요금표 Airport ⇄ Patong ⇄ Rawai = 100바트 정액(Single Ride). 결제: 비접촉 카드(Visa/Mastercard/JCB, Apple Pay·Google Pay 포함), QR/프롬프트페이, 현금. 6세 미만 보호자 동반 무료. 내·외국인 동일 요금.

4. https://phuketsmartbus.com/timetable (운영사 공식 채널)
   - 열람 2026-10-13T11:10:00+09:00. 시간표는 이미지 2종으로 게시되어 있어 직접 판독.
   - 확인: 공항→라와이 공항 출발 08:15 첫차 / 23:30 막차(라와이 도착 01:50). 라와이→공항 라와이 출발 06:45 첫차 / 19:30 막차(공항 도착 21:52). 정차지 15개 게시. 유효: 2026-01-16 기준 그 이후. 문의전화 086 306 1257.

5. https://phuket.airportthai.co.th/service/transportation (AOT 공식)
   - 열람 2026-10-13T11:11:00+09:00. 본문 콘텐츠 없음("Find your ways to/from the airports" 문구만).
   - 불발: 요금·시간표 자료 없음 — 장애가 아니라 페이지 자체에 데이터가 없는 상태.

6. OSM Nominatim: Phuket International Airport 조회
   - 조회 2026-10-13T11:11:00+09:00.
   - 확인: relation 20416548 (aeroway=aerodrome), 객체명 "ท่าอากาศยานนานาชาติภูเก็ต", 중심 8.1101320 / 98.3058153, ODbL 1.0.
   - 참고(비공식): bus_stop node 6877762085 (8.1082862/98.3067200, operator=Phuket Smart Bus;Airport Bus Express;Airport Bus, charge 100 THB, phone 0863061257)는 크라우드 매핑 객체라 공식 좌표로 채택하지 않음. completed 파일에는 기록하지 않음.

## 검색으로 확인했으나 채택하지 않은 자료

- TAT Newsroom (tatnews.org, 2025-07): Phuket OneMap 소개 — Smart Bus 노선·시간·요금 요약(50–170바트 등). TAT 공공 보도자료지만 세부 요금표가 아니라 참고만, completed에 수치 미기록.
- 12go.asia / busbud / planetofhotels / YouTube 등 제3자 요약·OTA·블로그: 시간표·요금(170바트 등) 표기 있으나 비공식이라 수치·시간 미기록, gaps에도 '공식 미공개' 단정 없이 미검증 유지.
- OSM 노드 설명의 Route P1/P2/P3(색상) 표기는 매퍼 기재라 채택하지 않음.

## '미검증' vs '공식 미공개' 적용

- 전건 미검증. '공식 미공개'는 공식 채널에서 없음을 직접 확인했을 때만 쓰는 규범에 따라, 요금·시간표·좌표 모두 공식 채널에 단순 미게시라 미검증으로 표기.

## 신규 확인 팩트 요약

- 스마트 버스 요금: 공항⇄파통⇄라와이 전 구간 100바트 정액 (운영사 공식).
- 스마트 버스 시간표: 공항 출발 08:15–23:30 / 라와이 출발 06:45–19:30 (공항 도착 07:32–21:52) (운영사 공식, 2026-01-16 기준).
- 공항 본체 좌표: 8.1101320 / 98.3058153 (OSM relation 20416548, osm-crosschecked, ODbL).
- 공항 버스(타운행)·익스프레스 운영시간: AIR-01 인계값 AOT 페이지에서 재확인 (변경 없음).
