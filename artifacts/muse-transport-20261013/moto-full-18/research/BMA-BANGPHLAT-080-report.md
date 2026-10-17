# MOTO-REGIONAL-01 13호 BMA-BANGPHLAT-080 (프라핑끌라오 선착장) 완료 보고

- checkedOn: 2026-10-13
- worker: 단일 직렬 (하위 worker 없음)

## 실제시설좌표 확보 여부
- **미확보 (coordinates=null)**. 출처 시도: Overpass `nwr[amenity=motorcycle_taxi]` 반경 500m (랜드마크: OSM 페리 터미널 노드 269347981 'พระปิ่นเกล้า' 13.7629920/100.4906911) → overpass-api.de/api/interpreter에 POST 2회 시도, 전부 HTTP 406 반환으로 소스 정상 응답 없음. 조회 장애로 기록 (부재 증거 아님). OSM Nominatim에 'ท่าน้ำพระปิ่นเกล้า' 직접 검색 — 페리 터미널(amenity=ferry_terminal) 노드만 반환되고 승차대(amenity=motorcycle_taxi) 객체는 OSM에 없음 (미검증, '공식 미공개' 단정 아님). 선착장 위치(13.7629920/100.4906911)는 참고위치일 뿐 승차대 핀이 아니므로 좌표로 사용하지 않음 — 2026-10-13 소유자 지시로 핀 사용 금지. 구청 공식 목록(S07)은 좌표를 수록하지 않음. 찾지 못함 ≠ 공식 미공개.

## 등록원문 확보 여부
- **확보 (confirmed)**. BMA 방플랏 구청 FY2568 (พ.ศ.2568) 공식 목록, 기준월 2025년 2월 (เดือน กุมภาพันธ์ 2568, FY2568=2024년 10월~2025년 9월).
- 원문 URL: https://webportal.bangkok.go.th/public/user_files_editor/77/2568/ITA/O10/%E0%B8%A7%E0%B8%B4%E0%B8%99/%E0%B8%81%E0%B8%9E.pdf (browser.open으로 2026-10-13 실제 열람)
- 행번호: 80. 행 원문: `| 80 | ท่าน้า พระปิ่นเกลา้ | 0 | 6 | 0 |` (PDF 텍스트 추출 태국어 합자 렌더링 왜곡 — stands 레코드 nameTh `ท่าน้ำพระปิ่นเกล้า`와 동일 항목)
- 원문 표기(태국어): ท่าน้ำพระปิ่นเกล้า
- 증명서 수: 6건 (stands 레코드 driverCount=6과 일치 — 등록 시점 통계, 현재 운영 규모 아님)

## 운영 상태 판정
- **미검증**. 2025년 2월 등록 스냅샷 외 현재 운영 근거 없음.

## 미검증 항목 수
- 6건: coordinates·operatingStatus·operatingHours·fareTable·payment·address (전건 '미검증', '공식 미공개' 단정 0건)

## 장애 여부
- BMA PDF 정상 열람 (접속 장애 없음). Overpass 조회만 overpass-api.de HTTP 406 ×2로 실패 — 조회 장애로만 기록 (정보없음과 구분). Nominatim 직접 검색 결과는 페리 터미널만 존재·승차대 객체 없음으로 정보없음(미검증) 구분. 선착장 위치(13.7629920/100.4906911)는 오인 방지용 참고 기록 — 좌표 미사용.

## 3종 파일 바이트·SHA (2026-10-13, JSON 파싱 검증 완료)
- completed/BMA-BANGPHLAT-080.json: 6,818B, SHA256 `46e4b5d477791e17478e795abeb10bf93ac7bb2d0fc6bbd7f98b9a42c002dfa3`
- evidence/BMA-BANGPHLAT-080-evidence.json: 7,201B, SHA256 `34ca6c9eacd9647d88b90cf1d089d1f4502d86d70f3fec3d0f45c15fa69a8776` (claims 6건, 주장별 공식 URL·확인일·원문인용)
- gaps/BMA-BANGPHLAT-080-gaps.json: 3,879B, SHA256 `cbfd158ea7e3c4f6c0021462392a9cf3435199e026a6542c5b7ed5f04d69e41a` (gaps 6건)

## 판정
- **ready=false** — ready=true 조건(실제좌표+객체출처·등록원문·한국어본문/FAQ·장애 없음) 중 실제시설좌표 미검증으로 미달. 등록원문·본문/FAQ(해요체)는 확보됨.
- slug: bma-bangphlat-080 / detailPath (제안): /th/guides/bangkok/transport/motorcycle-stands/bma-bangphlat-080
- 인계 읽기전용 재사용: S02(목록 범위)·S07(수록 범위). stands.json 수정 없음.
