# AIR-TRANSFER-01 5호 KBV(끄라비 공항) 조사 보고서 (2026-10-13)

## 개요
- 작업키: AIR-TRANSFER-01, 5호 단독 (KBV만 처리. CNX/HKT/CEI/USM/BKK/DMK/UTP/타국 미접촉)
- 기존 파일 수정 없음. AIR-01은 읽기전용 재사용 (air01-airport-transport.json · air01-evidence.json · air01-coverage.json)
- 조사자: 단일 직렬 (하위 worker 없음). checkedAt 2026-10-13T13:38:00+09:00

## 검증된 필드 (공식 원문 직접 열람)
1. **셔틀버스 8415** (E1, 공식 운영사 krabibus.com): 노선 8415(공항–아오낭–놉파랏타라–카오꽝), 요금 버스터미널 80/끄라비타운 90/클롱질라드선착장 90/아오낭 150/클롱무앙 200/카오꽝 200바트(정액), G층 정문 입구 매 40분 정차 → verified 승격 (AIR-01 '공식 근거 없음' 상태 해소)
2. **공항 좌표** (E2, osm-crosschecked): OSM way 161515595, lat 8.0964079 / lon 98.9851238, 객체명 ท่าอากาศยานนานาชาติกระบี่, ODbL
3. **DOA 관할** (AIR01-F104 계승): KBV는 DOA(태국 교통부 산하) 운영, AOT 소속 아님
4. **DOA 공식 교통안내 채널 부재** (E3, verified-negative): DOA 미니사이트 텍스트 조회 upstream 500(조회 장애), site:airports.go.th 검색 0건 → '미검증' 유지, '공식 미공개' 단정 아님

## 미검증 유지 (기존 필드 유지 + gaps 명시)
- kbv-taxi: 요금·탑승장소·운영시간 전부 공식 미확인 (AIR-01 인계값 유지, G2)
- 그랩: 공식 채널 미등재 → 옵션 미구성 (CNX·HKT 선례, G3). 제3자 픽업 지점 주장 미기록
- 렌터카: 공식 안내 미확인 → 옵션 미구성 (G6)
- 셔틀 첫차·막차 (G1), 승차장 공식 좌표 (G4), 공항→시내 소요시간·거리 공식 수치 (G7)

## gaps: 7건 (미검증 7 / 공식 미공개 0 / 장애와 정보없음 구분 — G5)

## 산출물 (~/workspace/thailivenow/air-transfer-01/ — 신규 파일만)
- completed/air-transfer-kbv.json — 9,849B, SHA `8a1b56531876e06d56dbaf8d10537e7b38708f894132e8cb9a8eeab25a096273`
- evidence/air-transfer-kbv-evidence.json — 4,639B, SHA `005b5c22d51f6dcaf479793552ea4da4e5bd3d44cdb1eea214d724c51a703035`
- gaps/air-transfer-kbv-gaps.json — 2,880B, SHA `79c1c519a61d06ef258f8fc409546009c7f14c9ca7d0a674055e26055c8dc7b4`
- research/air-transfer-kbv-notes.md — 2,674B, SHA `8183087481a0a5e1b3fb7580464b6f4ec77660c996fb59d11cc0831698a8ce1e`

## ready
- ready=false (사유: 셔틀 첫차·막차·택시 공식 전건·그랩 등재·승차장 좌표·DOA 채널 상태·렌터카·소요시간 공식 수치 미검증)

## 숫자
- 후보 6공항 중 KBV 1건 완료 / 회수(인계) 5공항+2파일 중 KBV 인계값 재사용 / 독립검증(본 조사) 1 / 페이지입력완성 0 / 실제로컬반영 0
