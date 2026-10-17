# AIR-TRANSFER-01 6호 HDY(핫야이 공항) 조사 보고서 (2026-10-13)

## 개요
- 작업키: AIR-TRANSFER-01, 6호 단독 (HDY만 처리. CNX/HKT/CEI/USM/KBV/BKK/DMK/UTP/타국 미접촉)
- 기존 파일 수정 없음. AIR-01은 읽기전용만 사용. CNX·HKT·CEI·USM·KBV 파일은 형식만 참고, 내용 재처리 없음
- 조사자: 단일 직렬 (하위 worker 없음). checkedAt 2026-10-13T13:53:00+09:00

## 검증된 필드 (공식 원문 직접 열람)
1. **공항 본체** (E3+E4): AOT(Airports of Thailand PLC) 관할 — AOT 공식 경영진 페이지에 นายกฤษฎา พุกะทรัพย์ = ผู้อำนวยการท่าอากาศยานหาดใหญ่ 등재. CAAT 공식 문서 "Data and conditions originated by AOT · Airport Code: HDY (VTSS)"
2. **IATA HDY · ICAO VTSS** (E4, CAAT 공식 문서)
3. **공항 좌표** (E2, osm-crosschecked): OSM way 1041194858, lat 6.929073 / lon 100.3948003, 객체명 ท่าอากาศยานนานาชาติหาดใหญ่, ODbL
4. **교통 수단 4종** (E1, AOT 공식 교통 페이지 'How to get to Hat Yai Airport', 2026-10-13 열람)
   - 공항 셔틀: 사전예약 문구만 (요금·시간·운영사·탑승지점 미기재)
   - 미니버스/마이크로버스: 06:00–23:30 운행 시간창, 전 구간 정액 60바트, 왕복 동일 노선 (공항–카셋 시장 밴 정류장–구청–노팟우팃 2로–김용 시장–시계탑 앞–핫야이 대학–코홍–송클라대학교–센트럴 페스티벌–핫야이 버스터미널)
   - 미니버스(시내): 공항 100m 지점 승차, 1인 20–30바트, 왕복 동일 노선 (공항–핫야이나이–핫야이 기숙사–김용 시장–송클라대학교–버스터미널)
   - 공항 밴: 도착 게이트/터미널 출구 'Arrival Van' 표지, 1인 100바트, 왕복 동일 노선 (공항–사나마누손–센트럴 페스티벌–리 가든 핫야이–스창–김용 시장)
   - 콜센터 1722

## 미검증 유지 (공식 미기재/미등재 → null + gaps)
- 셔틀 운영사·요금·시간·탑승지점 (G1), 미니버스 배차간격 (G2)·공항내 탑승지점 (G3), 시내 미니버스 시간·배차 (G4), 공항 밴 시간·배차 (G5)
- 택시 (G7) · 그랩 (G8) · 렌터카 (G9): 공식 페이지 미등재 → 옵션 미구성 (CNX·HKT·KBV 선례). 제3자 요금표 미기록
- 승차장 공식 좌표 (G6), 공항→시내 소요시간·거리 공식 수치 (G10)

## gaps: 10건 (미검증 10 / 공식 미공개 0 / 장애와 정보없음 구분)

## 산출물 (~/workspace/thailivenow/air-transfer-01/ — 신규 파일만)
- completed/air-transfer-hdy.json
- evidence/air-transfer-hdy-evidence.json (E1~E4)
- gaps/air-transfer-hdy-gaps.json (10건)
- research/air-transfer-hdy-notes.md
- research/air-transfer-hdy-report.md (본 파일)

## ready
- ready=false (사유: 셔틀 공식 전건 미기재·미니버스 배차/탑승지점 미기재·시내 미니버스 시간 미기재·밴 시간 미기재·승차장 좌표 미게시·택시/그랩/렌터카 공식 미등재·소요시간 공식 수치 미게시)

## 숫자
- 후보 6공항 중 HDY 1건 완료 / 회수(인계) 0건 (AIR-01 미포함 신규) / 독립검증(본 조사) 1 / 페이지입력완성 0 / 실제로컬반영 0
