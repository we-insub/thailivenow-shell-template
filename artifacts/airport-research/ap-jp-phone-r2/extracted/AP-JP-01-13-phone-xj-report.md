# AP-JP-01 13호-C 완료 보고 — Thai AirAsia X (XJ) 일본 4공항 전화번호 조사

작업: XJ × CTS / KIX / NGO / NRT 4조합의 지상서비스 전화번호 (체크인/발권/오피스/도착수하물·PIR 용도 분리)
확인일: 2026-10-14 01:15 KST (Asia/Seoul)
하위 worker 없음. BKK/DMK·태국 지역공항 미접촉 (범위 밖).

## 산출물 (~/workspace/thailivenow/ap-jp-01/ 아래, JSON 파싱 전부 OK)

- completed/AP-JP-01-13-phone-xj.json — 4,728B, SHA256 `fb77671e80fcca0e7a4d5e680379288d3a90cb05e84dda67a994cb2f0f0e1c2d`
- completed/AP-JP-01-13-phone-xj-manuscript.md — 1,721B, SHA256 `7bcca2394c7061b2019a9b04857ad2fc2a5bb4aa8d380e8132e63ad983721b97`
- evidence/AP-JP-01-13-phone-xj-evidence.json — 3,320B, SHA256 `acc1dddb0b03123dcf0d6ce7994dd32f983ec09aa719228d5241b0e8fcab250f` (8 claims)
- gaps/AP-JP-01-13-phone-xj-gaps.json — 4,421B, SHA256 `21434d98fe3996fec54b167d188c7e90b3da7f27b4d59998ad0dd397ea08bdb8` (16건: 미검증 12 / 공식 미공개 4)

## 조합별 확보/미확보 요약

- **XJ × CTS (신치토세)**: 4용도 전부 미검증. 공식 항공사 안내 경로 404, 공식 디렉토리 미발견.
- **XJ × KIX (간사이)**: 4용도 전부 미검증. kansai-airport.or.jp 직접 조회 HTTP 403 차단 (기술적 장애).
- **XJ × NGO (주부)**: 4용도 전부 **공식 미공개**. centrair.jp 공식 항공사 페이지의 Contact 항목이 '- -' (공백)으로 직접 확인됨.
- **XJ × NRT (나리타)**: 4용도 전부 미검증. narita-airport.jp 직접 조회 HTTP 403 차단 (기술적 장애).
- **일본 전국 공통 공식 번호 (4조합 공통 참조)**: **+81 3 3527 7898** — support.airasia.com 공식 "How to call us" 페이지 게재, Japan | AirAsia & AirAsia X flights (Voicemail service), 24시간·월~일. 공항 카운터/발권/오피스/PIR 직통이 아님.

## 핵심 근거 3줄

1. **공식** (support.airasia.com "AirAsia Flights: How to call us", 2026-10-14 직접 열람): 일본 지역 AirAsia & AirAsia X flights voicemail +81 3 3527 7898, 24시간 월~일. 공항별 직통번호는 공식 페이지에 없음.
2. **공식** (centrair.jp Thai AirAsiaX 항공사 페이지, 2026-10-14 직접 열람): 체크인 카운터 T1 Counter D, 카운터 오픈 출발 3시간 전, Contact 항목 '- -' (공백) — NGO 4용도 '공식 미공개' 단정 근거.
3. **공식 조회 실패** (기술적 장애, 부재 증거 아님): narita-airport.jp → HTTP 403, kansai-airport.or.jp → HTTP 403, new-chitose-airport.jp 항공사 경로 → HTTP 404.

## 규범 준수

- 번호 추측 0건, 타 항공사 번호 복사 0건. 제3자 번호 2건 미채택 (flightbookingoffice.com NRT 번호는 공항 종합안내 번호로 보임 / osakaairport.com 번호는 공식 번호와 동일하여 별도 채택 안 함).
- '공식 미공개' 단정 4건 (NGO, 공식 채널에서 부재 직접 확인). 나머지는 전부 '미검증'.
- 시도 URL·열람 원문 범위·조회 실패(403/404)를 gaps에 구분 기록.
- BKK/DMK·태국 지역공항 미접촉.

## 숫자

후보 4조합 / 회수(공식 확정) 1건 (일본 전국 voicemail) / 공항별 직통 확정 0 / 독립검증 0 (부모 검증 예정) / 페이지입력완성 0.
ZIP 패키징은 부모 판단에 위임.
