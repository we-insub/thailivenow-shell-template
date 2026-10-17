# AIR-TRANSFER-01 6호 HDY 조사 노트 (2026-10-13)

HDY는 AIR-01에 없는 신규 조사 대상. 공항 본체부터 공식 원문으로 확보.

## 조회한 URL 및 확인/불발 사유

### 성공 — 공식 원문
- https://hatyai.airportthai.co.th/service/way-to-airport/detail/96 (AOT 공식 교통 안내, 영문, 직접 열람 13:50~13:53)
  - Airport Shuttle: 사전예약 문구만. 요금·시간·운영사·탑승지점 미기재
  - Minibus / Microbus: 06:00–23:30 운행 시간창, 전 구간 정액 60바트. 노선: 공항–Kaset Market Van Station–District Office–Nopat-Uthit 2 Rd–Kim Yong Market–In front of the Clock Tower–Hat Yai College–Kho Hong–Prince of Songkla University–Central Festival–Hat Yai Bus Terminal. 왕복 동일
  - Minibus: 공항 100m 지점 승차, 1인 20–30바트. 노선: 공항–Hat Yai Nai–Hat Yai Dormitory–Kim Yong Market–Prince of Songkla University–Bus Terminal. 왕복 동일. 스케줄 "quite flexible"
  - Airport Van: 도착 게이트/터미널 출구 'Arrival Van' 표지, 1인 100바트. 노선: 공항–Sanamanusorn–Central Festival–Lee Garden Hat Yai–Shichang–Kim Yong Market. 왕복 동일
  - Call Center 1722. 택시·그랩·렌터카 업체명 등재 없음
- https://www.airportthai.co.th/คณะผู้บริหาร-ทอท/ (AOT 공식 경영진 페이지, 직접 열람 13:51)
  - นายกฤษฎา พุกะทรัพย์ = ผู้อำนวยการท่าอากาศยานหาดใหญ่ (핫야이 공항장) → AOT 관할 직접 확인
- https://www.caat.or.th/wp-content/uploads/2025/10/HDY_NAC_S26.pdf (CAAT 공식 문서, 직접 열람 13:52)
  - "Data and conditions originated by AOT and approved by Slot Coordination Committee", "Airport Code: HDY (VTSS)", "HAT YAI AIRPORT"
  - 코드·AOT 출처 확인용만 사용. 슬롯 스케줄 수치는 범위 밖이라 미인용
- https://nominatim.openstreetmap.org/search?q=Hat+Yai+International+Airport&format=jsonv2&limit=3 (curl 직접 조회 13:52)
  - way 1041194858, lat 6.929073, lon 100.3948003, 객체명 ท่าอากาศยานนานาชาติหาดใหญ่, ODbL
  - 터미널 객체 way 310488889 (Hat Yai International Airport) 별도 확인 — 본체 좌표는 공항 객체 사용

### 시도 — 불발
- browser.search 'site:hatyai.airportthai.co.th วิธีเดินทางสนามบินหาดใหญ่ รถมินิบัส รถตู้ 60 บาท' — 태국어 버전 교통 페이지 없음(미검증). 영문 페이지만 확인
- 검색 결과의 제3자 교통 안내(rome2rio·trip.com·12go·hatyaicity.com·agoda 등) — 비공식이라 수치·좌표 미기록

### 참고 — 기록하지 않은 자료 (공식 근거 아님)
- gcc.go.th (2025-11-23): 핫야이 공항발 3개 기관 셔틀 공지(กองบิน 56·มฑบ.42·แขวงทางหลวงสงขลาที่ 1) — 정부 도메인이지만 공항 공식 채널이 아니고 한시 운행 공지라 옵션 미구성
- matichon.co.th (2025-11-22): 수해 시 한시 교통 공지 — 보도라 미기록
- 12go.asia/travel/bangkok/hat-yai: "AOT 운영" 언급 있으나 OTA라 미기록
- trip.com/rome2rio 택시·그랩 요금표: 비공식 → 미기록

## 판결 요약
- 공항 본체: AOT 관할(E3+E4), HDY/VTSS(E4) → verified
- 옵션 4종: 전부 E1 공식 페이지 근거 → verified (단, 필드별 미기재 항목은 null+미검증)
- 택시·그랩·렌터카: 공식 미등재 → 옵션 미구성 (G7·G8·G9)
- 좌표: 공항 본체만 OSM 대조 확보 (E2), 승차장 좌표 미게시 (G6)
- '공식 미공개' 단정 0건 — 전부 미검증 유지
