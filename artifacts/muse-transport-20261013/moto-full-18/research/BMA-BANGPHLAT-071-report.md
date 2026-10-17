# MOTO-REGIONAL-01 10호 BMA-BANGPHLAT-071 (메이저 시네플렉스 앞) 완료 보고

- 조사일: 2026-10-13 (KST)
- 대상: BMA-BANGPHLAT-071, 태국어 원문명 หน้าเมเจอร์, 한국어 UI명 메이저 시네플렉스 앞 (음역, 공식 명칭 아님)
- 단일 직렬 작업, 하위 worker 없음

## 실제좌표 확보 여부: 미확보 (미검증)
- 출처: 승차대(Win) 객체 자체 좌표는 미발견 — coordinates=null
- Overpass nwr[amenity=motorcycle_taxi] 반경 500m 조회 시도 (메이저 시네플렉스 핑끌라오 랜드마크 13.7786569/100.4780528 기준, overpass.kumi.systems) — fetch 전송 타임아웃(3회 시도, 소스 HTTP 상태 미반환)으로 소스 상태 미확인 → 조회 장애로만 기록, fetch 실패 정책에 따라 재시도하지 않음 (부재 증거 아님)
- 랜드마크 OSM Nominatim 'เมเจอร์ ซีนีเพล็กซ์ - ปิ่นเกล้า' (13.7786569/100.4780528, shop/mall, ถนนบรมราชชนนี)는 쇼핑몰 건물이므로 승차대 핀이 아님 — 2026-10-13 소유자 지시로 지도 핀 사용 금지, 좌표로 사용하지 않음
- 구청 공식 목록(S07 인계)은 이름·증명서 수만 수록, 좌표 미포함
- 찾지 못함 ≠ 공식 미공개

## 등록원문 확보 여부: 확보 (confirmed)
- 문서: BMA 방플랏 구청 FY2568(พ.ศ.2568) 윈 승차대·공영 오토바이 증명서 발급 공식 목록
- URL: https://webportal.bangkok.go.th/public/user_files_editor/77/2568/ITA/O10/%E0%B8%A7%E0%B8%B4%E0%B8%99/%E0%B8%81%E0%B8%9E.pdf (browser.open 2026-10-13 정상 열람)
- 원문 표기: `| 71 | หน้าเมเจอร์ | 0 | 2 | 0 |` (PDF 텍스트 추출 — 합자 렌더링 왜곡 'หนา้메เจอร์' → stands 레코드 nameTh 'หน้าเมเจอร์'와 동일 항목)
- 행번호: 71번, 증명서 수: 2건 ('2'는 stands 레코드 driverCount=2와 일치 — 등록 시점 통계)
- 문서 범위: 방플랏 구청 등록 승차대 90곳 (행 1~90, 인계 근거 S02와 일치), 기준월 2025년 2월 (เดือน กุมภาพันธ์ 2568, FY2568=2024년 10월~2025년 9월)
- stands 레코드 dataDate 2025-02 (인계)

## 운영 상태 판정: 미검증
- 2025년 2월 기준 등록 스냅샷 외 현재 운영 근거 없음
- driverCount=2는 등록 시점 증명서 발급 수로 표기, 현재 운영 기사 수로 단정하지 않음

## 미검증 항목 수: 6건
- coordinates / operatingStatus / operatingHours / fareTable / payment / address (gaps 6건, 전건 '미검증', '공식 미공개' 단정 0건)

## 장애 여부
- Overpass amenity=motorcycle_taxi 반경 조회: overpass.kumi.systems fetch 전송 타임아웃(3회, 소스 HTTP 상태 미반환) — 조회 장애로만 기록 (부재 증거 아님), 정책상 재시도 없음
- BMA PDF 원문 열람 자체는 정상 — 좌표·운영·시간·요금·결제·주소의 미검증은 장애가 아니라 정보없음으로 구분

## 산출물 (3종, JSON 파싱 검증 완료)
- completed/BMA-BANGPHLAT-071.json — 6,089B, SHA ea538661807e0152a6c40e08d88924b39ffbdc713b018d0b02d1255914d47bb4
- evidence/BMA-BANGPHLAT-071-evidence.json — 6,532B, SHA aca0101c2db6d4d566e3387b7dc54ae555d9ed25a951863e6fcbce709a5cd3e9 (claims B71-E1~E6, 주장별 공식 URL)
- gaps/BMA-BANGPHLAT-071-gaps.json — 3,245B, SHA 63aef1816fae2e014034c53b08caad28b1d50aa5e2136b601e0ccb78166d6a1a (gaps 6건 + obstacles 2건)

## ready 판정: ready=false
- 사유: 실제시설좌표 미검증. 등록원문·한국어본문/FAQ(2문장+3 FAQ, 해요체)는 확보됨.

## 연계용
- id: BMA-BANGPHLAT-071 (유지) / slug: bma-bangphlat-071
- detailPath (제안): /th/guides/bangkok/transport/motorcycle-stands/bma-bangphlat-071

## 숫자
- 후보 15 / 회수 10(진행) / 독립검증 0 / 페이지입력완성 0 (부모가 독립검증 후 ZIP 제출)
