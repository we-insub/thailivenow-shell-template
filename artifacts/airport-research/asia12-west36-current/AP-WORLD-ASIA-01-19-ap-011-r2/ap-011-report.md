# ap-011 완료 보고 — 전화값 공백 실조사 (2026-10-14)

## 산출물 (`~/workspace/thailivenow/ap-world-asia-01/`)

| 파일 | 바이트 | SHA256 |
|---|---|---|
| completed/ap-011-phone-gaps.json | 6310 | `4bc4eeb39a033180e40565e1e7a9f70054f19e6c1e23a7021b3ec117b00e61b4` |
| evidence/ap-011-evidence.json | 2924 | `ec27384c4e5e2606b476e3c7fcc613f43651735f66d1b4af35250d1d3c96d0d9` |
| gaps/ap-011-gaps.json | 6111 | `4b90b958a46af7d3107e95ad8d7677186af6191b22f3497f649df2be5a93ab53` |
| coverage/ap-011-coverage.json | 864 | `33aa7070012e878bf294ca89a0062a03a67dba36e30c2b7deb581a2cdd43841b` |
| manuscript/ap-011-manuscript.md | 1625 | `bd3eab759ed26540fc456aef91481713a112ca548cd4b0539784a338517beb14` |
| research/ap-011-report.md | (본 파일) | 최종 SHA는 부모 독립검증 시 실측 (파일 내 자기기재 금지 규범) |

## 검증

- 전건 JSON 파싱 OK · claimIds 교차 PASS (phoneFindings + root ⊆ evidence)
- **AP-EV-0104~0108** — ap-010까지 0103 사용 확인 후 0104부터 시작
- '공식 미공개' 단정 0건 · 추측값 0건
- **ready=false** — 6건만 공식 확인, 19건 seasonal-confirmation gap
- TG India 미접촉 · BKK/DMK·태국 지역공항 미접촉 · 하위 worker 없음 · 후보 노선 확장 없음

## 핵심 판정

- **AP-EV-0104** (airline-official, 직접 열람): Firefly 현행 공식 연락처 페이지 — 전화번호 미게재. 연락 채널 = 라이브챗(Mavis) + 웹폼 + 발권사무소(주소·운영시간). KL Sentral 시내 사무소 1000-2200 HRS · PEN 공항 Operations Centre 0500-2200 HRS. 2018 FAQ 번호(+603 7845 4543)는 현행 근거 없어 로컬 보류 유지 — FY 현행 공식 전화 = 미게재로 판정.
- **AP-EV-0105** (airline-official, 직접 열람): AirAsia 공식 'How to call us' — AskBo 챗이 공식 채널. 전화 라인 목록: AU/CN/ID/JP/KR/TW만. MY/TH/IN 라인 없음 = 미게재. AK KUL·FD KUL/PEN·FD AMD/GAU/GAY/HYD/JAI/LKO 전부에 적용.
- **AP-EV-0106** (airline-official, 직접 열람): IndiGo 공식 — India 0124-6173838 / 0124-4973838 (일반 상담·예약). 6E BLR/BOM/CCU/DEL/MAA 공통. 수하물/PIR 직통은 미게재 (도착홀 데스크 직접 신고).
- **AP-EV-0107** (airport-official, 직접 열람): AOT 공식 페이지 — Thai VietJet Call Center 1722. VZ KUL 일반 상담용. KUL 전용 공항사무실 번호 미게재.
- **AP-EV-0108** (lookup-failed): Air India 공식 사이트 2회 조회 실패 (airindia.com·airindia.in 모두 HTTP 500). AI BOM/DEL gap.

## gaps 19건 (전부 seasonal-confirmation)

- 미게재 17건: AK/FD 전 조합 전화 · FY KUL/PEN 전화 · VZ KUL 공항사무실 · 6E 5공항 공항사무실/수하물 직통 · FD India 6공항 전화
- 조회 실패 2건: AI BOM · AI DEL (공식 사이트 500)

## 조사 과정

1. WORK-BRIEF.md 실독 → 기존 evidence 전수 대조 (전화 claim: AP-EV-0100 FY 콜센터(2018 FAQ, 보류 대상)만)
2. 공식 원문 직접 열람: fireflyz.com.my contact-info · support.airasia.com How-to-call-us · goindigo.in suggestion · suvarnabhumi.airportthai.co.th (AOT) · airindia.com/.in (500 실패)
3. 제3자 번호(indiacustomercare, wego, pissedconsumer 등)는 공식 확인 불가로 미채택

## 부모 측 후속

1. ZIP 패키징 (`AP-WORLD-ASIA-01-18-ap-011.zip` 권장명) 및 이 채팅 첨부는 부모 진행.
2. research/ap-011-report.md의 최종 SHA는 부모 독립검증 시 실측 (파일 내 자기기재 금지 규범).


---

## r2 정정 (2026-10-14, 사용자 직접 지적 5건 반영)

1. **VZ 1722 보류**: AP-EV-0107 verdict를 confirmed → on-hold로 변경. AOT 페이지의 "Call Center 1722"가 공항공사 공통 푸터인지 VZ 전용 본문인지 원문 전후·화면구획 미확인. +66-1722 국제전화 변환 근거 없음. PH-VZ-KUL의 general/reservation 전화값을 null로 변경, current 전화값 확정에서 제외.
2. **FY scope 한정**: "특정 contact page 미게재로 한정" 명시. 전체 항공사 전화 없음 단정 금지. phoneScopeNote 필드 추가.
3. **AirAsia scope 한정**: "How-to-call-us 해당 목록 범위로 한정" 명시. 공항별 직통없음 단정 금지. phoneScopeNote 필드 추가.
4. **6E baggagePir 필드 분리**: 전화 대신 문장이 들어가 있던 baggagePir 값을 null로 변경. 별도 baggagePirProcedure 필드로 절차 분리 (고객센터와 현장 PIR 분리).
5. **FY KL city 사무소 원문 전사 보완**: 잘린 주소/운영시간을 전체 원문 형태로 보완 (50470 Kuala Lumpur, Malaysia + (Daily) 포함). office.quote 필드 추가.
