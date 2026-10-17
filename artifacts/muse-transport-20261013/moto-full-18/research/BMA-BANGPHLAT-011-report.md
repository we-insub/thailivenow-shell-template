# MOTO-REGIONAL-01 14호 완료 보고 — BMA-BANGPHLAT-011 (짜란싸닛웡 44번 골목 입구, 방플랏)

- 작업일: 2026-10-13
- 판정: ready=false (실제시설좌표 미검증) — 등록원문·본문/FAQ는 확보

## 실제좌표 확보 여부
- 미확보 (coordinates=null, coordinateObjectSource=null)
- OSM Nominatim 'ปากซอยจรัญสนิทวงศ์44' 직접 검색 — 0건 반환 (승차대 객체 미발견, 정보없음)
- Photon 'ปากซอยจรัญสนิทวงศ์44' 검색 — 0건 반환
- Overpass amenity=motorcycle_taxi 반경 조회: overpass-api.de HTTP 406 ×2 (소스 정상 응답 없음, 조회 장애) / overpass.kumi.systems는 Soi 44 도로 객체(way 237653887·312017927)까지만 정상 응답, 반경 질의 3회 서버 과부하 타임아웃 (조회 장애, 존재 여부 미확인 — 부재 증거 아님)
- Soi 44 도로 객체 중심(13.7758455/100.4901218대·13.7727955/100.4935055)은 승차대 객체가 아니므로 좌표로 사용하지 않음 (소유자 지시)
- 구청 공식 목록은 좌표 미수록 (S07)

## 등록원문 확보 여부
- 확보 (confirmed) — BMA 방플랏 구청 FY2568(พ.ศ.2568, 2024년 10월~2025년 9월) 공식 목록, 기준월 2025년 2월(เดือน กุมภาพันธ์ 2568), 방플랏 구청 등록 승차대 90곳(행 1~90)
- 원문 URL: https://webportal.bangkok.go.th/public/user_files_editor/77/2568/ITA/O10/%E0%B8%A7%E0%B8%B4%E0%B8%99/%E0%B8%81%E0%B8%9E.pdf (browser.open으로 2026-10-13 정상 열람)
- 행번호: 11 — 원문표기 ปากซอยจรัญสนิทวงศ์44 — 증명서 수 42건(행 원문 '| 11 | ปากซอยจรัญสนิทวงศ์44 | 0 | 42 | 0 |', stands 레코드 driverCount=42와 일치)
- 소수열 헤더 매핑은 텍스트 추출 대응 불완전 → 원값 그대로 기록, 열 매핑 추측 금지
- 참고: stands 레코드 recordNote의 '구역 내 최다(42명)'는 인계값으로 이 파일에서 재주장하지 않음 — 동일 PDF 내 수치가 더 큰 행이 확인되어(예: 32·33·41·42번대) 미확인으로 둠

## 운영 상태 판정
- 미검증 — 2025년 2월 기준 등록 스냅샷 외 현재 운영 근거 없음. driverCount=42는 등록 시점 증명서 발급 수로 표기

## 미검증 항목 수
- 6건 (coordinates·operatingStatus·operatingHours·fareTable·payment·address) — 전부 정보없음(미검증)
- '공식 미공개' 단정 0건

## 장애 여부
- Overpass 질의 장애 2종 (overpass-api.de HTTP 406 ×2 · kumi.systems 반경 질의 타임아웃 ×3) — 좌표 존재 여부 확인 불가, 조회 장애로만 기록
- 그 외 장애 없음 (BMA PDF 정상 열람, Nominatim·Photon 정상 응답)

## 3종 파일 바이트·SHA
- completed/BMA-BANGPHLAT-011.json — 6,987B, SHA 3e192367584d4c8ce359735b2f3e4765ffbfc338d8b1acab58d6af97456d019f
- evidence/BMA-BANGPHLAT-011-evidence.json — 7,654B, SHA 96b764c10a057329ef8d86b3238fc73430b24e24fc9034336a8bfde6e5af50b3
- gaps/BMA-BANGPHLAT-011-gaps.json — 4,159B, SHA 7449be207f37327aeffed64712ac87073d228761b8587d487aefcfee0666f6ba
- JSON 파싱 전건 PASS, id/slug/detailPath(BMA-BANGPHLAT-011 / bma-bangphlat-011 / /th/guides/bangkok/transport/motorcycle-stands/bma-bangphlat-011, 제안값) 정합, ready=false
