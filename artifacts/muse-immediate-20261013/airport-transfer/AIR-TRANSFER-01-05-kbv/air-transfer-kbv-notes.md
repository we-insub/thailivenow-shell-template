# AIR-TRANSFER-01 5호 KBV 조사 노트 (2026-10-13)

## 조회한 URL 및 확인/불발 사유

### 성공 — 공식 원문
- https://krabibus.com/ (공식 운영사 채널: บริษัท พิเชษฐขนส่ง จำกัด / Pichet Transportation Co., Ltd.)
  - 노선: 8415 สนามบินกระบี่ อ่าวนาง นพรัตน์ธารา เกาะกวาง (공항–아오낭–놉파랏타라–카오꽝)
  - 공항 출발 요금: บขส.กระบี่ 80 / ในตัวเมืองกระบี่ 90 / ท่าเรือคลองจิหลาด 90 / หาดอ่าวนาง 150 / หาดมะม่วง 200 / หาดเขากวาง 200 바트
  - 정차: 지상층(G) 정문 입구에서 매 40분 (รถบัสจะจอดตรงทางเข้าด้านหน้าชั้น G ทุก 40 นาที)
  - 아오낭까지 약 30km 표기
  - 첫차·막차 미기재
- https://nominatim.openstreetmap.org/search?q=Krabi+International+Airport&format=jsonv2&limit=3
  - way 161515595, lat 8.0964079, lon 98.9851238, 객체명 ท่าอากาศยานนานาชาติกระบี่, ODbL

### 시도 — 불발/장애
- https://minisite.airports.go.th/krabi/ — upstream 500 (서버 빈 응답), 3회 시도 실패. DOA 공식 공항 미니사이트이나 텍스트 조회 장애. 정보 없음과 구분.
- browser.search 'site:airports.go.th krabi transport' — 결과 0건.
- browser.search 'Krabi Airport transportation official DOA' — 제3자 결과만 (domesticflightsthailand·airportsdata.net·smartenplus 등). DOA 공식 교통안내 페이지 없음.

### 참고 — 기록하지 않은 자료 (공식 근거 아님)
- http://www.aonang.go.th/storage/uploads/177821086524.pdf (끄라비 지방정부 아오낭 관청 관광문서): 공항 공식 사이트로 https://minisite.airports.go.th/krabi/flight 인용. 공항 공식 채널 존재 간접 확인용 참고(수치 미인용).
- airportsdata.net · blog.smartenplus.co.th · byklo.rent · aifly.one — 택시/그랩/요금표 주장은 전부 제3자 → 수치·좌표 미기록.
- rome2rio — 제3자 집계 → 미기록.

## 판결 요약
- 셔틀(8415)은 공식 운영사 근거 확보 → verified 승격 (E1).
- 택시는 AIR-01 인계값 유지, 공식 근거 없음 → 미검증 유지 (G2).
- 그랩·렌터카는 공식 채널 미등재 → 옵션 미구성 (G3·G6).
- 좌표: 공항 본체만 OSM 대조 확보 (E2), 승차장 좌표 미게시 (G4).
- DOA 공식 교통안내 채널: 미검증 (G5, '공식 미공개' 단정 아님).
