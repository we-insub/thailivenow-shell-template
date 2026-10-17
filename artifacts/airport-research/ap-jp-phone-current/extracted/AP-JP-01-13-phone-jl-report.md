# AP-JP-01 13호-A 완료 보고 — JAL(JL) HND/KIX/NRT 전화번호 조사

단일 직렬로 3조합만 처리, 하위 worker 없음. BKK/DMK·태국 지역공항 미접촉.

## 판정

- 3조합 × 4용도 = 12필드 전부 **미검증**. 확보한 전화번호 0건.
- '공식 미공개' 단정 0건.

## 조합별 확보/미확보 요약

- **JL × HND**: 체크인/발권/오피스/수하물PIR 전부 미검증. JAL 공식 국내선 수하물 페이지 직접 열람 — 전화번호 게재 없음. jal.co.jp 문의·서포트·공항안내 4개 경로 전부 HTTP 403 차단 (기술적 장애). tokyo-haneda.com 공식 사이트에 JAL 항공사 카운터 전화 미게재.
- **JL × KIX**: 4용도 전부 미검증. kansai-airport.or.jp 검색에서 JAL 공항별 전화 미발견.
- **JL × NRT**: 4용도 전부 미검증. narita-airport.jp 검색에서 JAL 공항별 전화 미발견.

## 핵심 근거 3줄

1. JAL 공식 국내선 수하물 페이지(https://www.jal.co.jp/jp/ja/dom/baggage/) 직접 열람 — 전화번호 게재 없음 (official).
2. HND 공식 사이트 게재 "JAL手荷物受付案内カウンター 03-6428-0662"는 수하물 택배(호텔배송) 전용 카운터로, 체크인·발권·수하물PIR 역할이 아니므로 미채택 (official, 역할 분리).
3. 제3자 사이트 반복 인용 JAL 중앙번호(0570-025-071/0570-025-031 등)는 jal.co.jp에서 확인 불가(403 차단) — 공식 근거로 채택하지 않음.

## 번호 생성·추측·복사 0건

## 산출물 4종 (~/workspace/thailivenow/ap-jp-01/ 아래, JSON 파싱 전부 OK)

- completed/AP-JP-01-13-phone-jl.json
- evidence/AP-JP-01-13-phone-jl-evidence.json (7 claims)
- gaps/AP-JP-01-13-phone-jl-gaps.json (12건, 전건 미검증)
- completed/AP-JP-01-13-phone-jl-manuscript.md (한국어 정리)

## 후속 제안

JAL 공식 문의 페이지의 중앙번호는 라이브 브라우저로 직접 확인 가능 (403은 텍스트 조회 차단일 뿐). 공항별 직통번호는 JAL이 공개하지 않는 구조이므로 중앙번호 공식 확인이 현실적인 다음 단계.
