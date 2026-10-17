# MOTO-REGIONAL-01 푸껫 도시 탐색 보고서 (신규 도시 시범)

- 조사일: 2026-10-13 (KST)
- 담당: 단일 직렬 작업, 하위 worker 없음
- 범위: 푸껫 도시 오토바이 승차장(Win) 등록·운영 근거 발굴 + 시범 1곳

## 1. 인계 자료
- MOTORCYCLE-01 측에 푸껫 관련 자료 없음 — 신규 조사 (중복 작업 없음)
- 기존 15승차장(방콕)·CMX-001(치앙마이)·PTY-001(파타야) 파일은 손대지 않음

## 2. 공식 채널 조사 결과

### 푸껫시 (Phuket City Municipality, เทศบาลนครภูเก็ต, phuketcity.go.th)
- 2026-10-13 browser.open 직접 열람 — 정상 접속. 홈페이지는 기념문구 스플래시만 텍스트 노출 (내부 페이지 탐색 불가).
- `site:phuketcity.go.th วิน` 검색 → 결과 0건. 인덱싱된 공식 채널 페이지에 'วิน' 언급 없음 (정보없음, 부재 증거 아님).
- 푸껫시 관할은 푸껫 타운 지역 — 빠통은 별도 지방자치단체(เทศบาลเมืองป่าตอง, Patong City Municipality) 관할. 빠통시 공식 채널은 이번에 미확인 (정보없음).

### 푸껫 육상운송사무소 (DLT Phuket, สำนักงานขนส่งจังหวัดภูเก็ต)
- 공식 사이트 https://phuket.dlt.go.th/th/ — 2026-10-13 browser.open 접속 시도 → fetcher 측 upstream HTTP 500 × 3회 시도 실패 (접근 장애, 소스 실패 확정 아님). 재시도 금지 지침 준수. 승차대 목록 공개 여부는 미확인 (정보없음).
- DLT 중앙 뉴스 채널에서 푸껫 승차대 개별 목록 원문은 미발견 (정보없음).

## 3. 확보한 등록·운영 근거 (공식 조치의 언론 보도 경유)

### The Thaiger 2024-11-07 "Patong slams brakes on taxi conflicts to boost tourism image" (원본, Bangkok Post 인용 표기)
- URL: https://thethaiger.com/news/phuket/patong-tackles-taxi-conflicts-to-boost-tourism-image (작성 Puntid Tantivangphaisal, 사진 Bangkok Post 제공)
- 2024-11-06 빠통 오토바이 택시 정비 회의 (People's Party 푸껫 국회의원 Chalermpong Saengdee 공개):
  - 푸껫 육상운송사무소(PLTO) 대표: 대중교통 규제 계획 발표 — 감독위원회(supervisory committee) 구성 제안, 공식 승객 승하차 지점(official passenger pickup points) 지정 논의
  - "All motorcycle taxi drivers must be registered and possess a public transport driver's licence obtained through a training programme." (모든 오토바이 택시 기사는 등록 + 공용운전면허·교육 프로그램 필수)
  - 까투 구청장 Teerapong Chuaychu 참석 — 기사 간 다툼 문제 제기
- 빠통 전역 승차대 등록 체계 정비 근거 (지역 단위, 개별 승차대 등록 원문 아님). 등급: confirmed(언론 경유).

### Khaosod 2024-07-15 "มอเตอร์ไซค์รับจ้าง สุดโหด รุมตื้บนักท่องเที่ยวสลบ หน้าห้างดัง หาดป่าตอง" (직접 열람)
- URL: https://www.khaosod.co.th/around-thailand/news_9321402
- 'ศูนย์ข้อมูลภูเก็ต Phuket info Center' 페이지 제보 영상 인용: "บริเวณหน้าวินรถรับจ้างหน้าห้างเซ็นทรัล ป่าตอง" — **센트럴 빠통(ห้างเซ็นทรัล ป่าตอง) 앞 승차대 실존 확인 (2024-07 스냅샷)**.
- 대조: ch3plus.com 동일 사건 보도 (검색 스니펫, https://ch3plus.com/news/social/morning/408550) — 같은 지점 표기 "หน้าวินรถรับจ้างหน้าห้างเซ็นทรัล ป่าตอง" 확인. 2종 일치.
- 주의: 기사 본체는 사건 보도이며, 승차대 등록 상태·요금·운영시간에 대한 근거 아님. SNS 댓글의 승차대 품평은 미검증 주장으로 인용하지 않음.

### 랜드마크 대조 (OSM, 승차대 객체 아님)
- Nominatim 'Central Patong Phuket' → node 6514835585 (shop=department_store, name=Central): 7.8924048/98.2978693, 주소 ถนนราษฎร์อุทิศ 200 ปี, ป่าตอง, ตำบลป่าตอง, อำเภอกะทู้, จังหวัดภูเก็ต 83159.
- 이는 쇼핑몰 객체 좌표로, 승차대(Win) 객체 좌표가 아님 — 임의 핀 금지 (소유자 지시). 랜드마크 참조용으로만 기록.
- Overpass amenity=motorcycle_taxi 질의 (센트럴 빠통 반경 1500m) — fetcher 측 HTTP 406 거부 (접근 장애, 재시도 안 함).

## 4. 시범 1곳 선정: HKT-001 (센트럴 빠통 앞 승차대, ราษฎร์อุทิศ 200 ปี 로드)
- 선정 사유: 빠통 중심 관광지(센트럴 빠통 쇼핑몰 앞) — 관광객 이용 가능성 최고 + Khaosod·ch3plus 2종 보도에서 명명된 실존 승차대.
- 위치: ถนนราษฎร์อุทิศ 200 ปี (랏우팃 200삐 로드), ตำบลป่าตอง อำเภอกะทู้ จังหวัดภูเก็ต (센트럴 빠통 앞).
- 등록: 미검증 (개별 승차대 등록 원문 없음). 2024-11 빠통 정비 회의에서 "기사 전원 등록" 방침이 발표된 것은 지역 단위 맥락으로만 기록 — 해당 승차대 등록 확인 아님.
- 좌표: 미검증 (OSM 승차대 객체 없음, Overpass fetcher 406, 임의 핀 금지).
- 운영: 미검증 (2024-07 실존 스냅샷 외 현행 운영 직접 근거 없음).
- ready=false.
- 산출물: completed/HKT-001.json · evidence/HKT-001-evidence.json · gaps/HKT-001-gaps.json + research/HKT-001-report.md
