# TLN-TRANSIT-02 — Codex 통합 안내

## 구성
- `ko/transport/index.html` — 허브: 8개 가이드 카드 + 방콕 노선 보기 + 왓아룬 연결
- `ko/transport/guides/{rail,train,bus,boat,taxi,motorcycle,local,air}/index.html` — 8개 교통수단별 이용 안내
- `ko/transport/bangkok/index.html` — 방콕 허브: 10개 노선 선택 탭 + 전체 환승 도식(SVG) + 보트 + 가이드 연결
- `ko/transport/bangkok/lines/{bts-sukhumvit,bts-silom,mrt-blue,mrt-purple,gold,pink,pink-branch,yellow,arl,srt-dark-red,srt-light-red,orange-flag}.html` — 노선별 페이지 (역 목록·환승 표시)
- `ko/transport/bangkok/stations/itsaraphap.html`, `piers/{5}.html` — 기존 파일럿 유지
- `ko/attractions/wat-arun/index.html` — 기존 파일 (교통 연결 섹션 포함). **주의: Codex가 DetailHeader·언어선택·도보 거리 등을 보완한 버전이 우선. 이 파일로 덮어쓰지 마세요.**
- `data/transit-data.json` — 파일럿 데이터 (유지), `data/transit02-data.json` — 8개 가이드 + 11개 노선 메타 + 공사중/계획 목록
- `assets/transit.css`, `assets/transit.js` — 공통 스타일/스크립트 (운영배포일 함수, 탭 키보드 조작)
- `research/rail-official.md` — 운행노선 대조표 (맨 앞) + 철도 공식자료 조사
- `research/road-water-air-official.md` — 버스·보트·택시·항공 공식자료 조사
- `build02*.py`, `run02.py` — 재생성 스크립트

## Astro 적용 매핑
- `ko/transport/**` → `/ko/transport/**` route
- `data/transit02-data.json` → 가이드·노선 data 소스
- `getOperationalDeployDate()` → 기존 공통 운영배포일 함수로 교체

## 검증 (2026-10-13 공식원문 재검증 반영)
- 8개 가이드 전체를 evidence JSON의 verified 항목만으로 재생성 (`research/road-air-evidence.json` 30 facts, `research/rail-evidence.json` 21 facts)
- 각 사실→공식 상세 URL을 evidence JSON과 가이드 출처 섹션에 병기 (홈페이지 링크만으로 검증 처리 금지)
- 공식 충돌 해소: Transport Co. LINE @BKS99(운영사 공식 우선), AOT 수완나품 버스 현행 페이지 우선, 보트 요금 공식 페이지(시행일 2026-10-06) 우선, SRT 예매 90일(2026-04-24 발표로 구 규정 대체)
- 철도 verified 추가 확보: BEM 퍼플 시간대(월–금 05:30–24:00), EMV 사용 카드 목록·구 카드 종료/환불, BTS TIM/TVM·1회권 당일 유효·Rabbit 종류·와이드 개찰구 90cm, 핑크 NBM 공식 사이트·상업운행일, SRT 레드 시간표 05:00–24:00
- BMTA 심층 확보: 에어컨/일반 요금 체계·차장 QR 결제·시내/도시간 구분을 [공식인용]으로 버스 가이드에 반영 (bmta-evidence.json)
- 미검증 항목은 가이드에서 제외: BMTA 승차·하차 절차, TCL 터미널·등급, DLT 택시 고시 원문, 보트 승선절차, Thai Smile, Grab 도움말, 오토바이 요금 원문, Rabbit 여권 규정, BTS 운행시간 상세, 골드 16바트, 옐로 결제, ARL 요금, SRT 레드 요금·결제, D-Ticket 채널, 음식물/어린이 규칙
- 29페이지, 내부 링크 전수 0깨짐, 고유 title/description, hreflang 없음, 날짜 하드코딩 없음
- 환승도 대조: Tao Poon 공식 확인(실선), Krung Thep Aphiwat 부분, 나머지 17쌍 2차 기준(점선) — 도식에 구분 표기
- BEM 탑승 절차 공식 반영 (승강장·열차 안·역 구조)
- 실패 보고서: research/acquisition-failures.md (시도 URL·실패 이유·남은 요구)

## 미완료 범위 (보고용)
- 역 태국어명: 블루라인 전체·옐로라인 전체·핑크 PK01–PK05만 확보, 나머지 미확인 → 표기 제외
- 표·결제: ARL·SRT 레드라인 공식 미확인 → 표에서 제외
- BMTA 승차 절차·결제 수단, Transport Co. 공식 요금표·시간표: 미확인 → 제외
- Thai Smile Boat 현행 요금·시간표, 횡단페리 요금·시간: 미확인 → 제외
- Bolt 공식 도움말, 오토바이택시 공식 이용 절차, 툭툭·쏭태우 공식 규정: 없음 → 제외/명시
- 돈므앙공항 공식 교통 안내: 미확인 (수완나품–돈므앙 무료 셔틀만 공식)
- 배포하지 말 것
