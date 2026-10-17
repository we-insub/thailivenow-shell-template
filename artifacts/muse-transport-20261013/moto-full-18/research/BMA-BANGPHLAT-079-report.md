# MOTO-REGIONAL-01 12호 BMA-BANGPHLAT-079 (파타 핑끌라오 백화점 출구) 완료 보고

- checkedOn: 2026-10-13
- worker: 단일 직렬 (하위 worker 없음)

## 실제시설좌표 확보 여부
- **미확보 (coordinates=null)**. 출처 시도: Overpass `nwr[amenity=motorcycle_taxi]` 반경 500m (랜드마크: OSM Nominatim 파타 핑끌라오 백화점 13.7717032/100.4843923, 인계 S09) → overpass-api.de/api/interpreter에 POST 2회 시도, 전부 HTTP 406 반환으로 소스 정상 응답 없음. 조회 장애로 기록 (부재 증거 아님). OSM Nominatim에 승차대 태국어 공식명 'ทางออกห้างพาต้าปิ่นเกล้า' 직접 검색 — 결과 0건 (미검증, '공식 미공개' 단정 아님). 백화점 랜드마크는 참고위치일 뿐 승차대 핀이 아니므로 좌표로 사용하지 않음 — 2026-10-13 소유자 지시로 핀 사용 금지. 구청 공식 목록(S07)은 좌표를 수록하지 않음. 찾지 못함 ≠ 공식 미공개.

## 등록원문 확보 여부
- **확보 (confirmed)**. BMA 방플랏 구청 FY2568 (พ.ศ.2568) 공식 목록, 기준월 2025년 2월 (เดือน กุมภาพันธ์ 2568, FY2568=2024년 10월~2025년 9월).
- 원문 URL: https://webportal.bangkok.go.th/public/user_files_editor/77/2568/ITA/O10/%E0%B8%A7%E0%B8%B4%E0%B8%99/%E0%B8%81%E0%B8%9E.pdf (browser.open으로 2026-10-13 실제 열람)
- 행번호: 79. 행 원문: `| 79 | ทางออกหา้งพาตา้ปิ่นเกลา้ | 0 | 23 | 0 |` (PDF 텍스트 추출 태국어 합자 렌더링 왜곡 — stands 레코드 nameTh `ทางออกห้างพาต้าปิ่นเกล้า`와 동일 항목)
- 원문 표기(태국어): ทางออกห้างพาต้าปิ่นเกล้า — '출구'. 78번 `ทางเข้าห้างพาต้าปิ่นเกล้า`(입구)와 다른 행.
- 증명서 수: 23건 (stands 레코드 driverCount=23과 일치 — 등록 시점 통계, 현재 운영 규모 아님)

## 운영 상태 판정
- **미검증**. 2025년 2월 등록 스냅샷 외 현재 운영 근거 없음.

## 미검증 항목 수
- 6건: coordinates·operatingStatus·operatingHours·fareTable·payment·address (전건 '미검증', '공식 미공개' 단정 0건)

## 장애 여부
- BMA PDF 정상 열람 (접속 장애 없음). Overpass 조회만 overpass-api.de HTTP 406 ×2로 실패 — 조회 장애로만 기록 (정보없음과 구분). Nominatim 직접 검색 결과 0건은 정보없음(미검증)으로 구분.

## 3종 파일 바이트·SHA (2026-10-13, JSON 파싱 검증 완료)
- completed/BMA-BANGPHLAT-079.json: 6,773B, SHA256 `d282f4e01d9869974e09714b6138b836bb80444dcb8c7eb4d4a4a76be0341e2d`
- evidence/BMA-BANGPHLAT-079-evidence.json: 7,348B, SHA256 `20ff99ad9dfa1acebc01d3aeb1ccb70230f2a679822bcc5ddef7ddd95d652a03` (claims 6건, 주장별 공식 URL·확인일·원문인용)
- gaps/BMA-BANGPHLAT-079-gaps.json: 3,663B, SHA256 `ac3dfcab9421827229faa2acb1ef7c590e29617323dfb65d59dc3df31ac17b6c` (gaps 6건)

## 판정
- **ready=false** — ready=true 조건(실제좌표+객체출처·등록원문·한국어본문/FAQ·장애 없음) 중 실제시설좌표 미검증으로 미달. 등록원문·본문/FAQ(해요체)는 확보됨.
- slug: bma-bangphlat-079 / detailPath (제안): /th/guides/bangkok/transport/motorcycle-stands/bma-bangphlat-079
- 인계 읽기전용 재사용: S02(목록 범위)·S07(수록 범위)·S09(참고위치, 핀 금지). stands.json 수정 없음.
