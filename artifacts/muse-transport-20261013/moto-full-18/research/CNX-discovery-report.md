# MOTO-REGIONAL-01 치앙마이 도시 탐색 보고서 (신규 도시 시범)

- 조사일: 2026-10-13 (KST)
- 담당: 단일 직렬 작업, 하위 worker 없음
- 범위: 치앙마이 도시 오토바이 승차장(Win) 등록·운영 근거 발굴 + 시범 1곳

## 1. 인계 자료
- MOTORCYCLE-01 측에 치앙마이 관련 자료 없음 확인済 — 신규 조사 (중복 작업 없음)

## 2. 공식 채널 조사 결과

### 치앙마이 육상운송사무소 (DLT Chiang Mai, สำนักงานขนส่งจังหวัดเชียงใหม่)
- 공식 사이트 cmi.dlt.go.th 2026-10-13 접속 시도 → **HTTP 500 (접근 장애)** — 재시도 금지 지침 준수. 공식 문서 원본 확보 불가, 접근 장애로만 기록.
- DLT 중앙 뉴스 채널에서 2015년 발표 원문 검색 → 미발견 (정보없음).

### 치앙마이시 (เทศบาลนครเชียงใหม่, cmcity.go.th)
- 2026-10-13 직접 열람 — 공개 사이트에 승차대(Win) 목록 섹션 없음 (정보없음). 사이트에는 공지·입찰·채용 중심.
- 방콕 BMA식 '구청 공식 승차대 목록 PDF' 같은 자료는 치앙마이시 채널에서 확인되지 않음.

## 3. 확보한 등록 근거 (공식 발표의 언론 보도 경유)

### Citylife 2015-09-29 "Motorcycle Taxis Made Official in Chiang Mai"
- URL: https://www.chiangmaicitylife.com/citynews/general/motorcycle-taxis-made-official-in-chiang-mai/
- 2015년 9월 29일 치앙마이 국제 전시 컨벤션 센터에서 공식 발표:
  - 치앙마이 부지사 Nawin Sinthusa-ard
  - 치앙마이 육상운송사무소 Chanchai Kilapaeng
  - 치앙마이 경찰 Piyapan Pattarapongsin
- 내용: 도내 오토바이 택시 기사에게 공식 조끼·증명서 발급, 등록 승차대 합법화. 기사는 육상운송사무소 교육·동승 주행 시험·차량 기준 검사를 거쳐야 함.
- 도 전체: **61개 승차대·592명 기사**. 무앙 치앙마이(시내): **8곳·80여 명**.
- 무앙 치앙마이 8곳 (등록 당시 배정 대수):
  - Arcade Bus Station (location 1) — 45대
  - Arcade Bus Station (location 2) — 11대
  - Arcade Bus Station (location 3) — 3대
  - Chang Peuak Bus Station — 7대
  - Ton Payom Market — 5대
  - Provincial Hall Entrance — 6대
  - Nakorn Ping Bridge — 3대
  - Ta Mai Bridge — 1대
- 도 전체 61곳 중 나머지 53곳은 다른 구(district) 소재 — Сан Кампхэнг 5·Doi Saket 2·Phrao 1·Mae Rim 4·Hang Dong 3·San Patong 2·Jom Tong 1·Mae Taeng 7·Wiang Haeng 2·Chiang Dao 2·Mae Ai 3·Chaiprakan 2·Fang 19 (보도 원문 전체 열람 기준).

### 대조 자료 — scribd 디지털 노마드 가이드 (치앙마이)
- URL: https://www.scribd.com/document/321777908/NomadGuide-CHIANG-MAI-guide-book-preview
- "with effect from September 2015" 무앙 치앙마이 80여 명(+주변 구 96명) 등록, 번호가 적힌 공식 고가시성 노랑 줄무늬 분홍 조끼 발급.
- 아케이드 버스 터미널에 약 60명 배치 — "터미널2 20번 승강장 옆" (참고 위치일 뿐 좌표로 미사용).

### 맥락
- Pantip 2023-06 스레드에서 치앙마이 시내 특정 지점에 "วิน...ไม่มี"(승차대 없음) 언급 — 방콕과 달리 치앙마이 시내 승차대는 희소 (제3자 커뮤니티, 참고용).
- 치앙마이의 대중 교통은 레드트럭(송태우)·툭툭·Grab 중심, 관광객은 오토바이 렌털을 많이 이용.

## 4. 시범 1곳 선정: CMX-001 (아케이드 버스 터미널 1번)
- 선정 사유: 무앙 치앙마이 8곳 중 단일 최대 규모(45대) + 버스 터미널 내 위치로 관광객 이용 가능성 가장 높음.
- 등록: confirmed(언론 경유) — DLT 치앙마이 공식 발표 (2015-09-29).
- 좌표: 미검증 (Overpass 0건·Nominatim/Photon 승차대 객체 없음).
- 운영: 미검증 (2015 스냅샷 외 근거 없음).
- ready=false.
- 산출물: completed/CMX-001.json · evidence/CMX-001-evidence.json · gaps/CMX-001-gaps.json + research/CMX-001-report.md

## 5. 미검증 항목 수 (도시 전체 관점)
- 공식 문서 원본 (DLT 치앙마이 승차대 목록 PDF 등): 미확보 — cmi.dlt.go.th HTTP 500 접근 장애
- 치앙마이시 채널의 승차대 목록: 없음 (정보없음)
- 시범 1곳 좌표/운영/시간/요금/결제/주소: 전건 미검증
- 나머지 7곳 시내 승차대 + 53곳 외곽: 미착수 (범위 밖 — 파타야·푸껫과 함께 다음 라운드 후보)

## 6. 장애
- cmi.dlt.go.th HTTP 500 (2026-10-13, 접근 장애 ×1, 재시도 안 함)
- 그 외: Citylife 보도 정상 열람, OSM/Nominatim/Photon/Overpass 정상 조회

## 7. '공식 미공개' 단정
- 0건. 찾지 못함 ≠ 공식 미공개 규범 준수.
