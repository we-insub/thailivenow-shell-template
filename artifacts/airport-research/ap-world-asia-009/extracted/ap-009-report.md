# ap-009 완료 보고 — MY↔TH/IN↔TH 항공사 공항 서비스 공백 회수

## 산출물 (`~/workspace/thailivenow/ap-world-asia-01/`)

| 파일 | 바이트 | SHA256 |
|---|---|---|
| completed/ap-009-airport-services.json | 1106 | `10b23de8b48d7de8b0fccd35f12f83d81090170eb3a88b5b4d5a8c918802d5fd` |
| evidence/ap-009-evidence.json | 1387 | `fd75c58633ff79c17ba772bfa4bce2aca5758aafad8dba2e2bb6fb96543b42dd` |
| gaps/ap-009-gaps.json | 2906 | `32b7621d4c966c13991d8e66d8503321052bb95abe1f728c9e17a8ed7c4371b2` |
| coverage/ap-009-coverage.json | 471 | `dc5af602a40a36ceaa32f925ee90d46fb68975db8bdf318249b98b84eb4d5053` |
| manuscript/ap-009-manuscript.md | 1917 | `36efdbad4aad414e56d38d09f14cbacbc31e01c4ce0855ea1df0d6d7c0c8124b` |

## 검증

- 전건 JSON 파싱 OK
- claimIds 교차 PASS (services + root ⊆ evidence)
- AP-EV-0100~0101 — 전 단위 충돌 없음 (evidence/ap-my-008-evidence.json에서 0099까지 사용 확인 후 0100부터 시작)
- '공식 미공개' 단정 0건 · 추측값 0건
- **ready=false** (2건만 공식 확인, 8항목 seasonal-confirmation gap)
- TG India 미접촉 · ap-my-008/AP-IN-008-r2 일반 정책 재조사 없음 · 후보 노선 확장 없음 · 하위 worker 없음

## 핵심 판정

- **AP-EV-0100** (airline-official, 직접 열람): Firefly 공식 콜센터 +603 7845 4543 (0800–2100 daily) · customer_care@fireflyz.com.my — malaysiaairlines.com 공식 FAQ PDF (2026-10-14 확인). GAP-MY008-03 해소.
- **AP-EV-0101** (airline-official, 직접 열람): Thai AirAsia X DMK 체크인 카운터 — 국제선 터미널(T1) 3층 row 6-7 — support.airasia.com (2026-10-14 확인). XJ 전용, FD/AK 위치는 미기재.

## gaps 8건 (전부 seasonal-confirmation)

- GAP-009-01: AK/FD 공항별 PIR/수하물 클레임 창구 위치 (BKK/DMK/KUL)
- GAP-009-02: FY PEN/HKT 체크인 카운터 위치
- GAP-009-03: AK/FD 지연·결항 확인서 발급 절차
- GAP-009-04: IX VNS 체크인·발권·운영시간
- GAP-009-05: IX VNS 도착 수하물·PIR 창구
- GAP-009-06: IX PNQ 체크인 카운터 위치·운영시간
- GAP-009-07: IX BKK 체크인 카운터·PIR·공항사무실
- GAP-009-08: IX 지연·결항 확인서 발급 절차

전부 "공식 미게재 — 시즌별 변동 가능, 항공사 확인 필요"로 종료. 후보 노선 확장 없음.

## 숫자

- 후보 10항목 / 공식 확인 2 / seasonal-confirmation gap 8 / 페이지입력완성 0 / 실제로컬반영 0

## 부모 측 후속

1. ZIP 패키징 (`AP-WORLD-ASIA-01-17-ap-009.zip` 권장명) 및 이 채팅 첨부는 부모 진행.
