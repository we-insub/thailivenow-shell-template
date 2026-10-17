# MOTO-REGIONAL-01 신규도시 시범 CMX-001 완료 보고

- 완료일: 2026-10-13 (KST)
- 담당: 단일 직렬 작업, 하위 worker 없음
- 인계: MOTORCYCLE-01 측 치앙마이 자료 없음 확인済 — 신규 조사 (중복 작업 없음)

## 대상
- id: CMX-001 (치앙마이 아케이드 버스 터미널 1번 승차대)
- slug: cmx-001
- detailPath (제안): /th/guides/chiangmai/transport/motorcycle-stands/cmx-001

## 실제시설좌표: 미확보 (미검증)
- Overpass amenity=motorcycle_taxi 반경 700m 질의(아케이드 버스 터미널 중심 18.80/99.018): 0건 (정보없음, 부재 증거 아님)
- OSM Nominatim 'Arcade Bus Station Chiang Mai': 버스 터미널 실객체만 반환 (터미널2 18.8007907/99.0172432 · 터미널3 18.7995939/99.0179408) — 승차대 객체 없음
- Photon: 치앙마이 승차대 객체 없음
- 터미널 핀·제3자 가이드의 '터미널2 20번 승강장 옆' 참고 위치는 좌표로 미사용 (소유자 지시)
- 찾지 못함 ≠ 공식 미공개
- coordinates=null

## 등록원문: 확보 (confirmed — 언론 경유 공식 발표)
- Citylife 2015-09-29 보도 "Motorcycle Taxis Made Official in Chiang Mai" (browser.open 정상 열람)
- 원문 URL: https://www.chiangmaicitylife.com/citynews/general/motorcycle-taxis-made-official-in-chiang-mai/
- 발표 주체: 치앙마이 부지사 Nawin Sinthusa-ard · 치앙마이 육상운송사무소 Chanchai Kilapaeng · 치앙마이 경찰 Piyapan Pattarapongsin (치앙마이 국제 전시 컨벤션 센터)
- 발표 내용: 도내 기사에게 공식 조끼·증명서 발급, 등록 승차대 합법화. 기사는 육상운송사무소 교육·동승 주행 시험·차량 기준 검사를 거쳐야 함.
- 문서 범위: 치앙마이도 등록 승차대 61곳·기사 592명. 무앙 치앙마이 8곳·80여 명. 아케이드 버스 터미널 1번 지점 45대 (무앙 내 단일 최대).
- 정보일: 2015-09-29 (dataDate)
- **문서 등급 주의**: DLT 치앙마이 공식 문서 원본 미확보 — 등록 근거는 공식 발표의 언론 보도 경유 (Citylife + scribd 가이드 대조 2종). 'confirmed(언론 경유)'로 등급 명시.
- **태국어 명칭 주의**: 보도에는 영문 표기("Arcade Bus Station (location 1)")만 수록. 'สถานีขนส่งอาเขต (จุดที่ 1)'은 내 번역 표기이며 공식 태국어 명칭은 미확인 (미검증).

## 운영 상태 판정: 미검증
- 2015-09-29 등록 스냅샷 외 현재 운영 근거 없음
- 45대는 등록 당시 배정 대수 (현재 운영 기사 수 아님)

## 한국어 본문/FAQ
- bodyKo 2문장 + faqKo 3개 (사실 기반, 해요체) 확보

## 미검증 항목 수: 7건
- coordinates / officialDocumentOriginal / operatingStatus / operatingHours / fareTable / payment / address
- '공식 미공개' 단정 0건

## 장애
- DLT 치앙마이 공식 사이트(cmi.dlt.go.th) HTTP 500 (2026-10-13, 접근 장애 ×1 — 재시도 안 함)
- 그 외: Citylife 보도 정상 열람 · cmcity.go.th 정상 열람(목록 없음 = 정보없음) · OSM/Nominatim/Photon/Overpass 정상 조회

## 판정
- ready=false (실제시설좌표 미검증 — ready=true 조건 미달. 등록 근거도 언론 경유라 문서 등급이 한 단계 낮음)
- 3종 파일 JSON 파싱 OK

## 산출물 (바이트·SHA)
- completed/CMX-001.json — 6,691B, SHA256 `0a4107f5677fb0ee…`
- evidence/CMX-001-evidence.json — 7,109B, SHA256 `a8c350ff5c997ae6…`
- gaps/CMX-001-gaps.json — 3,833B, SHA256 `bae16833fa98f5c4…`

## 도시 전체 탐색 결과
- research/CNX-discovery-report.md 참조 — 치앙마이시 채널 승차대 목록 없음, DLT 치앙마이 사이트 장애, 무앙 8곳 목록 확보, 시범 CMX-001 1곳 선정
