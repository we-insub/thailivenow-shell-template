# AP-L10N-WEST-01 6호 staff-phrases 검수 노트

- 일시: 2026-10-13 13:51 KST
- 검수자: ai-reviewed (원어민 검수 미수행)
- 인계: airportl10n01 2026-10-13 08:52 snapshot (읽기전용, 미수정)

## 인계 구조
- `_shared/staff-phrases.json`: SP-01~SP-06 정의 (thai/koLiteral/koNatural/reviewStatus/reviewDetail), nativeReviewDone=false
- 각 로케일 market.json의 "Thai phrases to show staff" 섹션에 로케일판 수록:
  - en-in: guides[0]/sections[5] (SP-01~SP-05)
  - en-gb: guides[0]/sections[3] (SP-01~SP-05)
  - en-us: guides[0]/sections[3] (SP-01~SP-05)
  - ru: guides[0]/sections[2] (SP-01~SP-05)
  - es: guides[0]/sections[3] (SP-01~SP-06)

## 검수 방법
- 29개 phrase-slot 전건 프로그램 대조: thai/situation/koNatural이 _shared/staff-phrases.json과 정확 일치하는지
- reviewStatus 주장 검증: SP-01~03 "terminology-checked"는 CAAT-01-HANDOFF-TO-L10N.md §7 용어표(ล่าช้า/ถูกยกเลิก) 내부 인용으로 정합 확인. SP-04~06 "draft-unreviewed"는 accuracyBasis 기록과 정합.
- 원어민 미검수 고지문 유무: 5개 로케일 전부 섹션 상단에 로케일 언어 + 괄호 한국어 해석으로 명시
- 비한국어 문장별 괄호 한국어 해석: 29개 슬롯 전건 동반 확인

## 발견
- G1 (중): SP-06이 en-in/en-gb/en-us/ru 4개 로케일에 누락 (es만 6/6). 정정 제안으로 기록 (원본 수정 금지).
- en-gb 상황 설명 변형 ("written proof of a delay" vs "delay certificate") — 영국 영어 허용 변형, 의미 보존. pass 관찰.
- '공식 미공개' 단정 0건. reviewPolicy 정직성 준수 확인.

## ready
- ready=false: SP-06 누락 4로케일 + 태국어 원어민 검수 미수행 (nativeReviewDone=false).
