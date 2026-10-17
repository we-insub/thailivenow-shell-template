# AP-L10N-WEST-01 4호 ru 검수 노트

## 검수 대상 (읽기전용)
- ~/workspace/thailivenow/airportl10n01/ru/body.md — 25,217B, SHA 6ceddc8c… (73줄)
- ~/workspace/thailivenow/airportl10n01/ru/faq.md — 21,503B, SHA 06bc3929… (112줄, Q&A 31개)
- market.json 159,811B (routes 100건, airlines 7, services 3, guides 6)
- evidence.json 10,941B (32건), coverage.json 13,267B (confirmed 9/unverified 16/gaps 4)
- translation-glossary.md 3,348B

## 필수 대조 결과
1. **ORCH 정정 (RESO/Ingosstrakh/AlfaStrakhovanie)**: 원고·market·evidence·coverage 전무 (coverage의 'reso' 1건은 'resolution' 오탐). → F1 (중) deferred. coverage unverified 'Unified official list of insurance claim documents per insurer' (공식 통합 목록 없음, 보험사별 상이) 확인. 원고의 '보험사 약관에 따름' 프레이밍은 정합.
2. **Aeroflot SU 노선**: SVO-BKK/HKT active, SVX-BKK seasonal(현재 운항 중·가을~겨울 시즌), LED-HKT seasonal — 원고 정합. 편명 전건 null — 원고 '편명 공식 미공개' 기술 정합. SVX-BKK seasonal 명시 없음 → F2 (하) 선택적 관찰.
3. **CAAT 가이드**: 원고 반영됨. 2/5/10시간·1,500/2,000/3,500/4,500바트·면제 16·17조·제18조→제23조 절차·EU261 아님+제24조 caveat — market 15절 가이드와 일치. 거리 7,106/7,478/7,612km는 _shared/CAAT-01-HANDOFF-TO-L10N.md 출처. 태국어 직원문구 '초안 — 원어민 확인 예정' 명시 — coverage와 정합.

## 언어 품질
- 전 러시아어 문장에 괄호 한국어 해석 동반 (자동 검사 0건 누락). 해석은 검수용 임시본.
- glossary 대조 정합. '공식 미공개' 단정 0건 — 'не подтверждено'/'не найдено' 규범 준수.
- 원어민 검수 미수행 (not-done).

## 판정
- pass 14 / pass-with-corrections 2 (F1 deferred, F2 observation). ready=false.
- gaps 18건 전건 미검증 (장애 G-RU-13 구분).
