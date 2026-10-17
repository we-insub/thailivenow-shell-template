# AP-L10N-WEST-01 en-us 검수 진행 노트

작업키: AP-L10N-WEST-01 / 단위 03 en-us (미국 영어)
검수일: 2026-10-13 11:42 KST
입력 스냅샷: ~/workspace/thailivenow/airportl10n01/ 2026-10-13 08:52 KST
  (en-us ZIP 20219a8d… — 인계 회신 기준, 재해시 없음)
검수자: ai-reviewed (원어민 검수 미수행)

## 검수 범위
- body.md 18,784B / faq.md 9,866B (검수 대상, 읽기전용)
- 기준: market.json (39,592B) / coverage.json / evidence.json (EV-US-0001~0013 기반) /
  translation-glossary.md / ko body·faq (대조용, manuscript/에 byte-identical 복사)
- en-in/en-gb/ru/es/staff-phrases 미접촉 (인계 원본 읽기전용 준수)

## 수행
1. 전 수치(편명/전화번호/카운터/시간/요일) 대조 — market.json·coverage confirmed·evidence 인용 대조
2. 사용자 11:07 field 정정 [4] 대조:
   - 0 routes 부재 증명: 원고는 "352 verified U.S.–Thailand airport pairs ... served only with a connection"으로 범위 한정 —
     coverage noDirectConfirmation(352 pairs, airline-official/government evidence only, routesEmptyMeaning "confirmed fact, not missing data")와 정합 — pass 관찰 (F2)
   - 6 service role별 검수: BKK-TG checkin / BKK-TG baggage / BKK-UA checkin / BKK-UA baggage / LAX-UA checkin / BKK-phone(AOT)
     전부 원고에 역할 정확히 반영 — pass 관찰 (F3)
3. ORCH 정정 (Allianz Claims Center + Checklist 6절): market.json guides[2] 'us-travel-insurance-docs'에 6절 반영済이나
   body.md 보험 섹션 미반영 (Allianz 0 hits) — F1 correction 제안 (중)
4. 인계 정정 (CAAT 가이드 없음): body.md/faq.md에 CAAT 0건 — 오표기 없음 — pass 관찰 (F4)
5. 미검증 표기 규범 검사 — '공식 미공개' 단정 0건 (grep '미공개' 0 hits)
6. 언어 품질 — en-us 일관성 (traveler, en-gb 혼용 0건; 'cancelled' double-l은 미국식 허용 표기), glossary 한국어 괄호 대조,
   전 영어 문장에 괄호 한국어 해석 동반 (자동 검사: 영어-only 줄 0건)
7. ko 원본은 manuscript/에 byte-identical 복사 (SHA 대조 완료), 검수 대상 아님
8. 인계 원본 미수정 (읽기전용 준수)

## 발견사항
- F1 (중): body.md 'Travel insurance claim documents' 섹션에 Allianz Claims Center 6절 누락
  (market.json guides[2] sections 2–7: File your claim online (fastest) / What you need to start / Documents by claim type /
  After you file / Filing tips / Email and mail options — 출처 allianztravelinsurance.com/claims-process, /faq.htm)
- 미검증 9건 (G1~G9): UA BKK 고정 카운터 미게재 / UA US 예약 전화 없음 / TG US 예약 전화 없음 / delayletter 미재검증 /
  60분 마감 문구 크롤만 / AOT 항공사별 카운터 안내 미게재 / 태국어 공항명 미확인 / CAAT 인계 대기 / F1 미반영 — 원고 표기와 1:1 정합

## ready 판정
- ready=false: F1 정정 미해결 + 원어민 검수 미수행
