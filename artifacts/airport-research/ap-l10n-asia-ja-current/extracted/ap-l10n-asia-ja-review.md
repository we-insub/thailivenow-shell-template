# AP-L10N-ASIA-01 3호 일본어(ja) 검수 기록 (한국어)

- 작업키: AP-L10N-ASIA-01 / locale: ja
- 인계 자료 (읽기전용, 수정 없음): body.md 37,234B (SHA ce819330) / faq.md 23,575B (SHA 67bf4e5e) / market.json 82,158B (SHA cd866f71, routes 46) / evidence.json 13,948B (SHA 65936083, 43 records) / coverage.json 10,027B (SHA 035f3dbb, confirmed 18 / gaps 10 / unverified 14 / pending 0) / translation-glossary.md 5,425B
- 원어민 검수 상태: not-done (staff-phrases.json nativeReviewDone=false, 수행하지 않음 — 수행으로 표기하지 않음)

## (1) coverage 대조 — 허위 confirmed 0건
confirmed 18건 전건이 인계 evidence 기록(EV-JP-0023~EV-JP-AIG-CLAIM, 43건)과 대조됨. 근거 없는 확정 없음.
- routes 46건 (44 active + 2 suspended): market.json 실측 일치, 중복 id 0건, 전건 evidence 필드 보유.
- JAL BKK 체크인(P 카운터·4층)·편별 개시 시각(JL708 05:25–07:10 등)은 body.md:45 / faq.md:37에 반영.
- TG 체크인·사무소·수하물 지연 절차·ANA 톨프리·XJ DMK 카운터 등도 evidence[25-30]과 정합.
- blockTime 정정(ZG51 280→400, ZG52 440→380, EV-JP-0051) coverage confirmed[12]에 기록.

## (2) CAAT 승객권리 가이드 부재 — 확인 (G-11)
- ja 본문에는 CAAT 풀 가이드 없음. body.md:137-139는 "CAAT 신고" 언급 + "詳細な手順はCAAT-01の日本語化反映後に追記予定で、本稿では未検証です(상세 절차는 CAAT-01의 일본어화 반영 후에 추기 예정, 본고에서는 미검증)"으로 명시적 placeholder.
- faq.md:116-117도 동일하게 상세 절차 미검증 표기.
- coverage unverified[13] "본문에 CAAT 내용 없음"과 정합 (HANDOFF-TO-L10N.md 도착 전 pending).
- 다만 _shared/CAAT-01-HANDOFF-TO-L10N.md (16,574B, 2026-10-13 작성, 사실 48건·근거 10건)가 도착해 있음 → 실작성 단계에서 사용 가능. 실작성 대상 확정.

## (3) JAL 8편 확정값 반영 여부 — 반영済 (단, G-12 정합 이슈)
- block times: faq.md:46에 "JL031・JL033 390分 / JL707 395分 / JL727 345分 / JL032 380分 / JL034 375分 / JL708 370分 / JL728 325分"로 반영. market.json 3개 블록에도 동일.
- AIG Japan 보험 청구 서류: body.md:127-128에 2026-10-13 공식 확인분으로 반영 (증명서 대체 규칙·사진 불가 시 그림 허용·30일 제출·0120-041799).
- **G-12**: 부모 브리프의 "JL033 385分"과 인계 자료(JL031/033 390分, owner-confirmed Codex 공식 대조 2026-10-13)가 상충. 인계 자료 전건 정합(390분). 원고는 건드리지 않고 부모 판단으로 남김.

## (4) body/faq 검수
- 내부토큰 잔존 0건 (TODO/FIXME/원자료/DRAFT/미완성 등 전수 grep 0).
- 한국어 해석: 일본어 라인 body 89/89·faq 76/76 전건에 괄호 한국어 동반 (누락 0).
- FAQ 34개 항목(## 수준), 본문 섹션 9개.
- 사소 메모: body.md:138의 "航空会社に請求し(항공사에 청구하고)"는 CAAT 가이드 §10의 "항공사 선접수 → CAAT 신고" 순서와는 정합되나, 본고에서는 CAAT 상세 절차 미검증으로 표기되어 있어 모순 아님.

## (5) staff-phrases 연결분 — 누락 0건
- SP-01~SP-05 → market.json delay-certificate 가이드 섹션, SP-06 → baggage-pir 가이드 섹션에 전건 수록.
- 양 가이드 섹션 선두에 "タイ語ネイティブによる意味確認は未実施 — 使用前に現地での確認を推奨。(태국어 원어민 검수 미완료 — 사용 전 현지 확인 권장)" 명시 → 표기 누락 없음.
- 태국어 문장·한국어 자연 해석 6건 전건이 staff-phrases.json과 바이트 정합.
- reviewStatus: SP-01/02/03 terminology-checked, SP-04/05/06 draft-unreviewed (원어민 검수는 전부 미수행).

## (6) gaps
- coverage gaps[0-9]·unverified[0-13]는 그대로 유지 (counter/ticketing/발권 미게재·증명서 절차 미게재 등).
- 신규: G-11 (CAAT 풀 가이드 미포함 — 실작성 대상), G-12 (JL033 385/390 정합 — 부모 판단).
- 사실 오류 정정 없음 (사실 자체는 건드리지 않음).

## (7) ready — false
- 근거: G-11 미해소 + G-12 미해소 + 태국어 원어민 검수 미완료 + ja 56-current 병합 미착수(본 검수 범위 밖, ja/market.json 미접촉).

## 산출물
- completed/ap-l10n-asia-ja.json — 검수 결과 (id `ap-l10n-asia-ja`, slug `ap-l10n-asia-ja`, detailPath `/th/airports/guide/ja`, ready=false, nativeReviewStatus not-done, originThreadKey="AP-L10N-ASIA-01")
- evidence/ap-l10n-asia-ja-evidence.json — 인계 팩트 10건 인용
- gaps/ap-l10n-asia-ja-gaps.json — G-11/G-12 + coverage 기존 갭 유지
- manuscript/ap-l10n-asia-ja-review.md — 본 기록
