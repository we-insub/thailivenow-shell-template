# ap-my-008 완료 보고 — MY↔TH 항공사 공항 서비스 (공식 근거분)

## 산출물 (`~/workspace/thailivenow/ap-world-asia-01/`)

| 파일 | 바이트 | SHA256 |
|---|---|---|
| completed/ap-my-008-my-routes-services.json | 2660 | `1d76b117cc155b81e0e755871edd841e82cc414c84152b49600d41f221680da3` |
| evidence/ap-my-008-evidence.json | 1619 | `de3683a4862c95116c14bf634a9658946d82f9d468def4bb179f9e2485bc4a4e` |
| gaps/ap-my-008-gaps.json | 969 | `e3a1389eab366275792df276054f510e467b9c9a0b5b8a8e89bf9c2c298dcefe` |
| manuscript/ap-my-008-manuscript.md | 1808 | `d01fb8740a0073877d17f15c6cc3713387409ffd02c9876f4dd8324660080196` |
| coverage/ap-my-008-coverage.json | 493 | `ebefc119e91d4058063ce6edc643e6796fe556b2197898c5bbce13649114cff1` |
| research/ap-my-008-report.md | 3085 | `742850001a7d2081afd153fda283b6590df2d59bc0af53bf5526210d95836fd8` |

## 핵심 판정

- **ready=false.** 항공사 공항 서비스 공식 확인분만 기록. 노선 편명·시각은 기존 15개 ZIP 확정분 유지 (재조사 없음).
- **AP-EV-0097** (airline-official, 직접 열람): AirAsia 공식 위탁수하물 정책 — 가방당 최대 119x81x119cm·32kg, 최대 60kg 옵션, Value Pack/Premium Flex/Premium Flatbed 무료 포함, 유모차/휠체어/목발 무료. `https://support.airasia.com/s/article/What-I-need-to-know-about-checked-baggage?language=en_GB`
- **AP-EV-0098** (airline-official): AirAsia 국제선 체크인 카운터 — 출발 3시간 전 오픈·60분 전 마감 (AK/FD MY↔TH 적용). `https://www.airasia.com/cdn/docs/en-MY-docs/arrival-departure-flyer.pdf`
- **AP-EV-0099** (airline-official, 직접 열람): Firefly 공식 — 무료 위탁수하물 10kg·기내 다과 무료. `https://www.fireflyz.com.my/my/en/home.html`
- claim ID: AP-EV-0097~0099. 기존 96건과 충돌 없음.
- TG India 미접촉. 기존 15개 ZIP + AP-IN-008-r2 재조사 없음. 하위 worker 없음.

## gaps 4건 (전부 미검증)

- GAP-MY008-01: AK/FD 공항별 PIR/수하물 클레임 창구 위치 — 공식 미게재
- GAP-MY008-02: FY PEN/HKT 체크인 카운터 위치 — 공식 미게재
- GAP-MY008-03: FY 공식 연락처 (전화) — 공식 사이트에서 미확인
- GAP-MY008-04: AK/FD 지연·결항 확인서 발급 절차 — 공식 미게재

## 조사 과정

1. 기존 MY 7단위 completed/gaps 전수 대조 — 공식 근거 있는 미반영 서비스 특정.
2. 인계 my-evidence.json 88건 중 서비스 관련 claim 확인 (MY-EV-0085 MH 카운터는 ap-my-002에 이미 반영됨).
3. 공식 출처 직접 검색·열람: support.airasia.com (위탁수하물 정책 직접 열람 성공), fireflyz.com.my (메인 페이지 직접 열람 성공), airasia.com 공식 PDF (체크인 시간).
4. Batik Air (batikair.com.my 403/JS), Thai AirAsia 개별 페이지는 공식 근거 확보 불가 — 이번 회차 범위 밖으로 제외 (gaps 미기재).
5. '공식 미공개' 단정 0건. 추측값 0건.

## 숫자

- 후보 3개 항공사 서비스 / 회수(인계) 0 (신규 공식 확인) / 독립검증(신규) 3 / 페이지입력완성 0 / 실제로컬반영 0
