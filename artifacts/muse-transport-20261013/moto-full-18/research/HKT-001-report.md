# MOTO-REGIONAL-01 푸껫 시범 HKT-001 완료 보고

- 조사일: 2026-10-13 (KST)
- 담당: 단일 직렬 작업, 하위 worker 없음
- 범위: 푸껫 오토바이 승차장(Win) 등록·운영 근거 발굴 + 시범 1곳 (HKT-001)

## 1. 도시 공식 채널 조사 결과
- 푸껫시(เทศบาลนครภูเก็ต, phuketcity.go.th): 2026-10-13 직접 열람 — 정상 접속, 홈페이지 스플래시만 텍스트 노출. `site:phuketcity.go.th วิน` 검색 결과 0건 (정보없음). 단 푸껫시 관할은 푸껫 타운 — 빠통은 별도 자치단체(เทศบาลเมืองป่าตอง) 관할로 빠통시 공식 채널은 미확인 (정보없음).
- DLT 푸껫(สำนักงานขนส่งจังหวัดภูเก็ต, phuket.dlt.go.th/th/): 2026-10-13 접속 시도 — fetcher 측 upstream HTTP 500 ×3 시도 실패 (접근 장애, 소스 실패 확정 아님). 재시도 안 함.
- DLT 중앙 뉴스 채널: 푸껫 승차대 개별 목록 원문 미발견 (정보없음).
- '공식 미공개' 단정 0건 — 찾지 못함 ≠ 공식 미공개.

## 2. 시범 1곳 판정: HKT-001 (센트럴 빠통 앞 승차대, ราษฎร์อุทิศ 200 ปี 로드)
- 좌표: 미검증 (승차대 객체 좌표 없음. OSM은 쇼핑몰 객체(node 6514835585, 7.8924048/98.2978693)만 반환 — 승차대 핀으로 사용 금지).
- 등록: 미검증 (HKT-001 개별 등록원문 없음). 지역 단위 맥락: 2024-11-06 빠통 정비 회의에서 PLTO가 "모든 오토바이 택시 기사는 등록하고 공용운전면허를 보유해야 한다" 방침 발표 (The Thaiger 2024-11-07 보도, Bangkok Post 인용 표기, confirmed-언론 경유) — 개별 등록 확인 아님.
- 운영: 미검증 (2024-07 Khaosod·ch3plus 2종 보도에서 'หน้าวินรถรับจ้างหน้าห้างเซ็นทรัล ป่าตอง' 실존 스냅샷 확인 외 현행 운영 직접 근거 없음).
- 한국어본문/FAQ: 작성 완료. ready=false (실제좌표+개별등록원문 미검증).
- 산출물 경로 (고정): ~/workspace/thailivenow/moto-regional-01/
  - completed/HKT-001.json — 8,081B, SHA ee5a8b85c4bcf285e8a47125fa4b737e8c8ebd8c636257e685e9a90743886677
  - evidence/HKT-001-evidence.json — 7,529B, SHA 2ee898fde25e2d14793d4d48103e464d820cbebcbed9cedd6f86d9f8f3dfa2ca (근거 6건: HKT-E1~E6)
  - gaps/HKT-001-gaps.json — 4,829B, SHA 4d76803d6309e3411edb0611ee4f7236942bbfd574cc306b7cec44b6e42d8395 (미검증 7건)
  - research/HKT-discovery-report.md — 5,712B, SHA 5bd6297a3ce2babf25be9372ae42b36e605289b03ef1f2bca2bfcc477701bd3e
- id/slug/detailPath 정합: HKT-001 / hkt-001 / /th/guides/phuket/transport/motorcycle-stands/hkt-001 (제안)

## 3. 미검증 항목 수 / 장애
- 미검증 7건: coordinates·officialDocumentOriginal·operatingStatus·operatingHours·fareTable·payment·address (전건 '정보없음' 또는 '스냅샷 한정', 부재 단정 없음).
- 장애 2건: phuket.dlt.go.th upstream HTTP 500 ×3 (접근 장애) · Overpass amenity=motorcycle_taxi 질의 fetcher 406 ×1 (접근 장애). 모두 부재 증거 아님, 재시도 안 함.

## 4. 숫자
- 후보 1 (HKT-001 시범) / 회수(인계) 0 (MOTORCYCLE-01 측 푸껫 자료 없음, 전량 신규 조사) / 독립검증 (부모 몫) / 페이지입력완성 0 / 실제로컬반영 0.
- 기존 15건·CMX-001·PTY-001·stands.json 미접촉. 서비스/규칙·타 도시 미접촉. 코드수정·배포 없음.

## 5. 다음 단계 제안
- 빠통시(เทศบาลเมืองป่าตอง) 공식 채널 확인 — 푸껫 타운 관할이 아니라 빠통 관할이므로 빠통 자치단체 채널에 승차대 목록·정비 공지 가능성.
- DLT 푸껫 사이트 재접속 (장애 해소 후) — 등록부·승차대 목록 공개 여부 재확인.
- HKT-001 좌표: 라이브 브라우저에서 현장 확인 또는 제3자 스트리트뷰 대조로 승차대 객체 확보 시 ready 재검토.
