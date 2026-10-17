# MOTO-REGIONAL-01 6호 — BMA-MINBURI-003 (민부리 신시장) 완료 보고

- 일시: 2026-10-13 KST (확인일 2026-10-13)
- 단일 직렬, 하위 worker 없음

## 실제시설좌표 확보 여부
- **미검증 (coordinates=null)**
- 시도:
  - Nominatim 태국어 'ตลาดใหม่มีนบุรี' → 무관한 나콘라차시마 hamlet(บ้านคลองบริบูรณ์, node 13005887544)만 반환 — 시장 객체 아님, 좌표 사용 불가
  - Nominatim 영어 'Talad Mai Minburi market Bangkok' → 결과 0건
  - Overpass 전역 조회 node[name:th="ตลาดใหม่มีนบุรี"] → kumi.systems 60초 타임아웃, private.coffee 45초 타임아웃 — **조회 장애(부재 증거 아님)**
- 구청 공식 목록은 좌표 미수록 (S07 인계), 구청 승차대 위치 지도 공개분 없음 (M66-E5 인계)
- 임의 핀 금지 → 좌표로 기록할 실제 객체 없음
- '찾지 못함 ≠ 공식 미공개' 준수 — '공식 미공개' 단정 없음

## 등록원문 확보 여부
- **confirmed** — BMA 민부리 구청 FY2569 공식 목록 PDF, browser.open으로 2026-10-13 실제 열람 성공
  - 원문 URL: https://webportal.bangkok.go.th/public/user_files_editor/90/ITA69/O9/O9%202%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%A7%E0%B8%B4%E0%B8%99.pdf
  - 행번호: 3번, 원문 표기: `3 | ตลาดใหม่มีนบุรี - | 10 - |`
  - 증명서 수: 10건 (เดิม/기존, ใหม่/신규 미기재)
  - 확인 구간: 2025-10~2026-03 누적 구간(L21) + 2025-10 월간 구간(L376) — 동일 항목·동일 수치
  - 문서 범위: 승차대 121곳·운전자 923명 (S01 인계), 기준일 15 กรกฎาคม 2569 (2026-07-15)
  - 원문 표기와 stands 레코드 nameTh 'ตลาดใหม่มีนบุรี' 동일 항목

## 운영 상태 판정
- **미검증** — 2026-07-15 기준 등록 스냅샷 외 현재 운영 근거 없음
- driverCount=10은 등록 시점 증명서 발급 수로만 표기, 현재 운영 기사 수로 단정 금지

## 미검증 항목 수
- gaps 6건: coordinates·operatingStatus·operatingHours·fareTable·payment·address (전부 미검증)

## 장애 여부
- Overpass 2개 엔드포인트 타임아웃 (조회 장애 — 부재 증거 아님)
- BMA PDF 정상 열람 (장애 아님). '공식 미공개' 단정 0건

## 산출물 3종 (바이트·SHA)
- completed/BMA-MINBURI-003.json — 5,564B, SHA `24be98ef7e1d1a07f307776fa0e1975ba54074305dc1b33960c84fd6cc855fd7`
- evidence/BMA-MINBURI-003-evidence.json — 6,604B, SHA `45adc2dd36495e13c9723e821523bdc1d0814a7b5b43c824e54c5bf006f6adff`
- gaps/BMA-MINBURI-003-gaps.json — 3,586B, SHA `d275524cd27dcb8b9f6a1c22e8b5340a44fdabb2a2081bfedbf7abdfc51a0bc9`
- JSON 파싱 3종 전부 OK
- ready=false (실제좌표 미검증) — ready=true 조건 미달
- id/slug/detailPath: BMA-MINBURI-003 / bma-minburi-003 / /th/guides/bangkok/transport/motorcycle-stands/bma-minburi-003 (제안)
- 기존 stands.json 수정 없음 (읽기전용). 파툼완·타 지역·서비스/규칙 손대지 않음
