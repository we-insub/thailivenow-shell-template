# ap-012 완료 보고 — MY↔TH/IN↔TH 항공사별 공항 서비스 필드 확장

- 확인일: 2026-10-14
- 범위: 상대국 공항만 (KUL·PEN·BOM·DEL·BLR·CCU·MAA·AMD·GAU·GAY·HYD·JAI·LKO). BKK/DMK (SERVICE-01)·태국 지역공항 (REGIONAL) 제외. TG India 미접촉.
- ap-011 전화 facts 재사용 (재조사 없음). ap-011 r2 정정 반영: VZ 1722는 on-hold.
- 하위 worker 0. 후보 노선 확장 0.

## 산출물 (`~/workspace/thailivenow/ap-world-asia-01/`)

| 파일 | 바이트 | SHA256 |
|---|---|---|
| completed/ap-012-ak.json | 2727 | `932cc5d396538f2d5d79293f00add4dc93635471998e9b246990f82f6de0f14a` |
| completed/ap-012-fy.json | 3094 | `5b80090c24e2b1a771c9a750d9931942006b3136c1eafbf78921f86685cf69da` |
| completed/ap-012-fd.json | 8300 | `70ee0c0cfdb7df9ce114c34ee060ca7bc2ca54d01628ceea1b957e687bfb7733` |
| completed/ap-012-vz.json | 2020 | `9bc173566edfefe4081bcfe1ff4e201260db1af91215a7c52f8d078d725e36d3` |
| completed/ap-012-ai.json | 2128 | `69c58ff184c8de056cd4f540084c6b1292da33f3024f08dec8ea8df28220ba86` |
| completed/ap-012-6e.json | 4844 | `66f0d1a4e8edd272125c35f371aa9ae7ce52a7065c4723774bbb3428e556c462` |
| evidence/ap-012-ak-evidence.json | 1871 | `64782a5c7fde71706fb3d8d89df9fe6052d0e54c2fb506c5b7ba61251357c9eb` |
| evidence/ap-012-fy-evidence.json | 1645 | `3553644d90242f62de56d50a2b1d970eebfddee38482cba89cb9c113eef556ce` |
| evidence/ap-012-fd-evidence.json | 1979 | `d312c4f32e5fd074bc617d8b36b36417f5f38b7397f1f2e1e79ff0905de87bf6` |
| evidence/ap-012-vz-evidence.json | 953 | `e49a8eab79e71c153e9780fb00fc0d034f3d355a15de1801a4daadf8a956802e` |
| evidence/ap-012-ai-evidence.json | 192 | `a9f027aefb5f7c8abd44cd1e94595ecb9f5363209a9f9fbc1c869e6f907c8d9f` |
| evidence/ap-012-6e-evidence.json | 1454 | `ca3d189f8c072710bdf05a34a0e37bdd57975302074ac4113e22f7d45d429c1f` |
| gaps/ap-012-ak-gaps.json | 1148 | `99d422aec7287dfa995f687059c4d8c4196c145014497aab6897e8a36a8cdb5a` |
| gaps/ap-012-fy-gaps.json | 1996 | `2b71e6dec2458f115171a3adcf29df9b6e5cc6054e9112a90fdabe205ba1ce61` |
| gaps/ap-012-fd-gaps.json | 1513 | `766db2a59b7890933d6dfb7f8c3704833624998816480a9b158792bb4b19da14` |
| gaps/ap-012-vz-gaps.json | 1586 | `ab55eddf38d842f2eed0cd5b886953771cc093d68f531b57635ab66871acf60f` |
| gaps/ap-012-ai-gaps.json | 773 | `30a28cf551c74f1acadc5c5b8a1cf753f6b11cf58b0b01a6c2ed4dcd4585724e` |
| gaps/ap-012-6e-gaps.json | 1701 | `5859f306744a860776061ccfd5c45523ba7f936eab6fbf4b363c5d22045bf227` |
| manuscript/ap-012-manuscript.md | 5328 | `67f423eb02b8bfbec3aed70fd2eac217344a87667c668c2b6ef6226b9e58ab32` |
| research/ap-012-report.md | (본 파일) | — |

## 검증

- 전건 JSON 파싱 OK (18종)
- claimIds 교차 PASS (항공사별 services + root ⊆ 해당 evidence)
- 신규 AP-EV-0109~0117 — 전 단위 충돌 없음 (총 117 unique)
- '공식 미공개' 단정 0건 · 추측값 0건
- ready=false 전건
- TG India 미접촉 · BKK/DMK·태국 지역공항 미접촉 · 후보 노선 확장 0 · 하위 worker 0

## 항공사별 핵심 판정

### AK (KUL 1조합) — 신규 2건 / gaps 3
- AP-EV-0109: 수하물 사고 절차 + KUL CBTO (주소·전화 +603 8778 5495/5494·이메일). 파손 즉시·지연 PIR·7/21일 기한·분실 선언 7/14일.
- AP-EV-0110: Tune Protect 보험 청구 절차 + 긴급 +603 7628 3630 (24/7). 지연 확인서는 증빙 예시로만 언급.
- gaps: 카운터 번호·공항사무실·확인서 발급 경로 (seasonal-confirmation).

### FD (8조합: KUL·PEN·AMD·GAU·GAY·HYD·JAI·LKO) — 신규 2건 / gaps 4
- AP-EV-0111: AirAsia 그룹 수하물 절차 (FD=Thai AirAsia 포함). KUL CBTO는 AirAsia Berhad/X 명의 — FD 구분 명기.
- AP-EV-0112: Tune Protect 보험 청구 (동일).
- gaps: 카운터 번호·FD 전용 CBTO·공항사무실·확인서 (seasonal-confirmation).

### VZ (KUL 1조합) — 신규 1건 / gaps 5
- AP-EV-0113: 체크인 VZ 국제선 3h~45m·연락 채널(+662-089-1909 08:00-22:00·vz.support@vietjetair.com·AMY)·수하물 클레임 7/21일. KUL 카운터·사무실 미게재.
- 전화 1722: ap-011 r2 정정 반영 → on-hold (VZ 전용 여부 미확인).

### FY (KUL·PEN 2조합) — 신규 2건 / gaps 6
- AP-EV-0114: GCC v2.4 수하물 클레임 7/21일 + 등록 주소 (KLIA Southern Support Zone).
- AP-EV-0115: 위탁수하물 승객 출발 30분 전 카운터 (askfy 공식).
- gaps: 카운터 번호·PIR 데스크·확인서·보험·전화번호 (seasonal-confirmation).

### 6E (5조합: BLR·BOM·CCU·DEL·MAA) — 신규 2건 / gaps 5
- AP-EV-0116: 지연 수하물 공항 헬프데스크 PIR 작성 (goindigo.in 공식 FAQ).
- AP-EV-0117: CAR 결항 보상 (5,000/7,500/10,000 INR) 바우처 청구 플로우.
- gaps: 카운터 번호·공항사무실·PIR 직통·확인서·보험 (seasonal-confirmation).

### AI (BOM·DEL 2조합) — 신규 0건 / gaps 2 (lookup-failed)
- airindia.com HTTP 500 (3회 시도) — 조회 환경 장애. 전 필드 seasonal-confirmation (조회 실패).

## 숫자

- 조합 19 (AK 1·FY 2·FD 8·VZ 1·AI 2·6E 5)
- 신규 claims 9 (AP-EV-0109~0117) / 재사용 5 (AP-EV-0104~0108, r2 정정 반영)
- gaps 25 (미검증 23·조회 실패 2)
- 페이지입력완성 0 / 실제로컬반영 0

## 부모 측 후속

1. 항공사별 묶음 단위 ZIP 패키징 (예: AP-WORLD-ASIA-01-20-ap-012-ak.zip 등) 및 이 채팅 첨부는 부모 진행.
