# MOTO-REGIONAL-01 8호 BMA-MINBURI-100 (왓 팍븡) 완료 보고

- 조사일: 2026-10-13 (KST)
- 대상: BMA-MINBURI-100, 태국어 원문명 วัดปากบึง, 한국어 UI명 왓 팍븡 (음역, 공식 명칭 아님)

## 실제좌표 확보 여부: 미확보 (미검증)
- 출처: 승차대(Win) 객체 자체 좌표는 미발견 — coordinates=null
- Nominatim 'วัดปากบึง': 사찰 객체만 (way 1565100003, place_of_worship, 13.7763498/100.7379384) — 참고 위치일 뿐, 좌표 미사용 (임의 핀 금지)
- Overpass nwr["name:th"="วัดปากบึง"] 전역 조회: 사찰 노드(node 12253828404, place_of_worship) 외 승차대 객체 없음 (private.coffee 정상 응답)
- Overpass nwr[amenity=motorcycle_taxi] 반경 500m: private.coffee·kumi.systems 양쪽 모두 응답 본문 없음·45초 타임아웃 → 조회 장애로 기록 (부재 증거 아님)
- 구청 공식 목록(S07 인계)은 이름·증명서 수만 수록, 좌표 미포함
- 구청 승차대 위치 지도: 공개분 없음 확인済 (M66-E5 인계)
- 찾지 못함 ≠ 공식 미공개

## 등록원문 확보 여부: 확보 (confirmed)
- 문서: BMA 민부리 구청 FY2569(พ.ศ.2569) 윈 승차대·공영 오토바이 증명서 발급 공식 목록
- URL: https://webportal.bangkok.go.th/public/user_files_editor/90/ITA69/O9/O9%202%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%A7%E0%B8%B4%E0%B8%99.pdf (browser.open 2026-10-13 정상 열람)
- 행번호: 100번, 원문 표기: `100 | วัดปากบึง - | 5 | - |` (stands 레코드 nameTh 'วัดปากบึง' 동일 항목)
- 증명서 수: 5건 (เดิม/original, ใหม่/new 미기재) — 2025-10~2026-03 누적 구간(L281)·2025-10 월간 구간(L645) 동일 수치 확인
- 문서 범위: 민부리 구청 등록 승차대 121곳·운전자 923명 (S01 인계), 기준일 15 กรกฎาคม 2569 (2026-07-15), stands 레코드 dataDate 2026-07-15

## 운영 상태 판정: 미검증
- 2026-07-15 기준 등록 스냅샷 외 현재 운영 근거 없음
- driverCount=5는 등록 시점 증명서 발급 수로 표기, 현재 운영 기사 수로 단정하지 않음

## 미검증 항목 수: 6건
- coordinates / operatingStatus / operatingHours / fareTable / payment / address (gaps 6건, 전건 '미검증', '공식 미공개' 단정 0건)

## 장애 여부
- Overpass amenity=motorcycle_taxi 반경 조회 2개 엔드포인트 응답 없음·타임아웃 — 조회 장애로만 기록 (부재 증거 아님)
- curl 직접 PDF 다운로드: Cloudflare 차단 → browser.open 경로로 정상 열람, 원문 실재 확인済 (원문 미확보 장애 아님)
- BMA PDF 원문 열람 자체는 정상 — 좌표·운영·시간·요금·결제·주소의 미검증은 장애가 아니라 정보없음으로 구분

## 산출물 (3종, JSON 파싱 검증 완료)
- completed/BMA-MINBURI-100.json (바이트·SHA는 부모 독립검증에서 실측)
- evidence/BMA-MINBURI-100-evidence.json (claims M100-E1~E6, 주장별 공식 URL 필수 — M100-E6 운영은 근거 없으므로 urls 없음, status unverified)
- gaps/BMA-MINBURI-100-gaps.json (gaps 6건 + obstacles 2건)

## ready 판정: ready=false
- 사유: 실제시설좌표 미검증. 등록원문·한국어본문/FAQ(2문장+3 FAQ, 해요체)는 확보됨.

## 연계용
- id: BMA-MINBURI-100 (유지) / slug: bma-minburi-100
- detailPath (제안): /th/guides/bangkok/transport/motorcycle-stands/bma-minburi-100

## 숫자
- 후보 15 / 회수 8(진행) / 독립검증 0 / 페이지입력완성 0 (부모가 독립검증 후 ZIP 제출)
