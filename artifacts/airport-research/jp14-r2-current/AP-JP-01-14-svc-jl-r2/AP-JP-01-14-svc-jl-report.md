# AP-JP-01 14호-A 완료 보고 — JAL(JL) 지상서비스 (HND/KIX/NRT)

단일 직렬로 3조합만 처리, 하위 worker 없음. 13호 전화 조사 결과 재사용 (읽기전용).

## 산출물 (~/workspace/thailivenow/ap-jp-01/ 아래, JSON 파싱 전부 OK)

- completed/AP-JP-01-14-svc-jl.json — 7,305B, SHA `49dc1c0e65fa90a8ad0d5c000db2335f707e0f03c3a7b18c35dfde8a9f4d01e0`
- completed/AP-JP-01-14-svc-jl-manuscript.md — 2,357B, SHA `2941617aaa3b5cc0647dd909304f61dd93c2afe564f2de7ee6faf137d0d05ddf`
- evidence/AP-JP-01-14-svc-jl-evidence.json — 2,797B, SHA `ec0957652b0844d6923207eae8f45f9ded3456394ffc6ce6e829521c518a94dd` (9 claims)
- gaps/AP-JP-01-14-svc-jl-gaps.json — 1,582B, SHA `55c1aef84da1dc73beeff462188dbe0e41347e24f071f1a2e04ec139158a4189` (6건: 미검증 5/장애 1)
- coverage/AP-JP-01-14-svc-jl-coverage.json — 577B, SHA `a3d6e7d604a98e74925d771b72ed0fa1467135bb8e94b7220111f55fececc087`

## 조합별 확보/미확보 요약 (3조합 × 6필드 = 18필드)

- **official-current 6**: 지연·결항 확인서 웹 발급 (3조합) + 보험청구 증빙 서류 (3조합)
- **third-party 6**: 체크인 카운터 터미널 (HND 국내선 T1/국제선 T3, NRT T2, KIX T1) + 수하물 신고 절차 (3조합)
- **미검증 6**: 발권 카운터 (3) + 공항/시내 사무실 (3)
- '공식 미공개' 단정 0건. 장애 1건: jal.co.jp 공항 안내 페이지 HTTP 403.

## 핵심 근거 3줄

1. JAL 공식 웹 '발착안내' (2026-10-14 직접 열람): 과거 1년간의 결항·도착지연·도착지변경·회항편 검색 및 증명서 발행 — 지연·결항 확인서 신청 경로는 웹 발급으로 공식 확인.
2. JAL카드 공식 약관 PDF (jalcard.jal.co.jp): 보험청구 필요 서류 — 항공사 발행 지연/결항 증명서 + 탑승권 반권(또는 탑승증명서) + 탑승예정 확인서류, 통지일로부터 30일 이내 제출.
3. 수하물 신고 절차 (제3자): 터미널 이탈 전 JAL 공항 직원에게 즉시 신고, 온라인 추적 또는 Baggage Claim Reference로 확인, 파손 시 사진 제출, 수령 후 7일 이내 신고 기한.

## 특이사항

- 카운터 번호는 공식·공항 공식 채널 어디에도 미게재 — 규범대로 "시즌별 변경 가능, 당일 공항 전광판·JAL 직접 확인" 안내로 종료.
- 13호와 일관: JAL은 공항별 전화번호·사무소 정보를 공식 게재하지 않는 구조 (중앙 예약센터 일원화).
