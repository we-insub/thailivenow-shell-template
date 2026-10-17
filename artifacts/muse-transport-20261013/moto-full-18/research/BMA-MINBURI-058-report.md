# MOTO-REGIONAL-01 7호 — BMA-MINBURI-058 (왓 방펭타이) 완료 보고

- 일시: 2026-10-13 KST (확인일 2026-10-13)
- 단일 직렬, 하위 worker 없음
- 기존 담당 자료 읽기전용 재사용 (중복 재조사 없음): stands 레코드(standId BMA-MINBURI-058)·증거 S01·S07·M66-E5(구청 지도 부재)

## 실제시설좌표 확보 여부
- **미검증 (coordinates=null)**
- 시도:
  - Nominatim 'วัดบางเพ็งใต้' 태국어·영어 검색 → 사찰 객체만 (amenity=place_of_worship, node 12253826788, 13.7996164/100.7101619) — 참고 위치일 뿐 승차대 객체가 아니므로 좌표로 사용하지 않음 (임의 핀 금지)
  - Overpass name:th 전역 조회 (kumi.systems 15초 정상 응답) → 사찰 노드 외 승차대 객체 없음
  - Overpass amenity=motorcycle_taxi 반경 조회 → kumi.systems 45초 타임아웃, private.coffee 60초 타임아웃 — **조회 장애(부재 증거 아님)**
- 구청 공식 목록은 좌표 미수록 (S07 인계), 구청 승차대 위치 지도 공개분 없음 (M66-E5 인계)
- '찾지 못함 ≠ 공식 미공개' 준수 — '공식 미공개' 단정 없음

## 등록원문 확보 여부
- **confirmed** — BMA 민부리 구청 FY2569 공식 목록 PDF, browser.open으로 2026-10-13 실제 열람 성공
  - 원문 URL: https://webportal.bangkok.go.th/public/user_files_editor/90/ITA69/O9/O9%202%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%A7%E0%B8%B4%E0%B8%99.pdf
  - 행번호: 58번, 원문 표기: `58 | วัดบางเพ็งใต้ - | 1 | - |`
  - 증명서 수: 1건 (เดิม/기존, ใหม่/신규 미기재)
  - 확인 구간: 2025-10~2026-03 누적 구간(L153) + 2025-10 월간 구간(L511) — 동일 항목·동일 수치
  - 문서 범위: 승차대 121곳·운전자 923명 (S01 인계), 기준일 15 กรกฎาคม 2569 (2026-07-15)
  - 원문 표기와 stands 레코드 nameTh 'วัดบางเพ็งใต้' 동일 항목

## 운영 상태 판정
- **미검증** — 2026-07-15 기준 등록 스냅샷 외 현재 운영 근거 없음
- driverCount=1은 등록 시점 증명서 발급 수로만 표기, 현재 운영 기사 수로 단정 금지

## 미검증 항목 수
- gaps 6건: coordinates·operatingStatus·operatingHours·fareTable·payment·address (전부 미검증)

## 장애 여부
- Overpass 2개 엔드포인트 타임아웃 (조회 장애 — 부재 증거 아님)
- BMA PDF 정상 열람 (장애 아님). '공식 미공개' 단정 0건

## 산출물 3종 (바이트·SHA)
- completed/BMA-MINBURI-058.json — 5,596B, SHA `f364d0a05f8cbf9b4b4e35982264d0d4d664d687300078591c98c3b7ce85c99d`
- evidence/BMA-MINBURI-058-evidence.json — 6,660B, SHA `13e05ab16b4f37efa69f4306919e3da749212adea42cb38d21e69242c21a5e6a`
- gaps/BMA-MINBURI-058-gaps.json — 3,659B, SHA `6b5837cdacedefe7d0054e99eec99777cb0c395cd580a68b41229cb6e8b9e9ac`
- JSON 파싱 3종 전부 OK
- ready=false (실제좌표 미검증) — ready=true 조건 미달
- id/slug/detailPath: BMA-MINBURI-058 / bma-minburi-058 / /th/guides/bangkok/transport/motorcycle-stands/bma-minburi-058 (제안)
- 기존 stands.json 수정 없음 (읽기전용). 파툼완·타 지역·서비스/규칙 손대지 않음
