AP-L10N-WEST-01 6호 staff-phrases (현지어 직원문구) 검수 완료. 6종 산출물 전건 작성·JSON 파싱·바이트·SHA256 검증 완료. ZIP은 지시대로 만들지 않았습니다.

## 완료 보고

**검수 대상**: airportl10n01 2026-10-13 08:52 snapshot — `_shared/staff-phrases.json` (SP-01~SP-06) + 5개 로케일 market.json의 "Thai phrases to show staff" 섹션. 읽기전용, 미수정.

**검수 방법**: 29개 phrase-slot 전건을 _shared/staff-phrases.json과 프로그램 대조 (thai/situation/koNatural 정확 일치 확인). reviewStatus 주장은 내부 인용(HANDOFF-TO-L10N.md §7 용어표)으로 정합 확인. 신규 사실조사 0건, 추측 0건.

**산출물** (`~/workspace/thailivenow/ap-l10n-west-01/` 하위):
- completed/ap-l10n-west-01-staff-phrases.json — id `ap-l10n-west-staff-phrases`, locale `multi`, nativeReview {done:false}, ready=false
- evidence/staff-phrases-evidence.json — 인계 인용 7건 (SP-EV-0001~0007)
- gaps/staff-phrases-gaps.json — 2건 (G-SP-06 SP-06 누락, G-NAT-01 원어민 미검수)
- coverage/staff-phrases-coverage.json — 29슬롯 커버리지
- research/staff-phrases-notes.md / research/staff-phrases-report.md (본 파일)

**판정**: pass 관찰 24 / correction 제안 1 (중). **ready=false** (SP-06 누락 4로케일 + 원어민 검수 미수행).

**핵심 발견**:
- **G1 (중)**: SP-06 (수하물 파손 PIR 접수 문의)이 es에만 있고 en-in/en-gb/en-us/ru 4개 로케일에 누락. 정정 제안으로 기록 (원본 직접 수정 금지 — AIRPORT-L10N-01 disposition 필요).
- SP-01~SP-03 "terminology-checked" 주장 정합 (ล่าช้า/ถูกยกเลิก이 CAAT-01-HANDOFF-TO-L10N.md §7 용어표와 일치). SP-04~SP-06 "draft-unreviewed" 주장 정합 (AI 초안만, 용어집 대조 해당 없음).
- 5개 로케일 전부 원어민 미검수 고지문 명시 (로케일 언어 + 괄호 한국어 해석). 비한국어 문장별 괄호 한국어 해석 29개 슬롯 전건 동반. '공식 미공개' 단정 0건.

**장애**: 없음. 타 범위(ko/ja/ms/zh-cn/zh-tw) 미접촉, 인계 원본 읽기전용 준수 확인.

**숫자**: 후보 6 / 회수(인계) 6 / 독립검증 6 (en-in·en-gb·en-us·ru·es·staff-phrases) / 페이지입력완성(ready=true) 0 / 실제로컬반영 0.
