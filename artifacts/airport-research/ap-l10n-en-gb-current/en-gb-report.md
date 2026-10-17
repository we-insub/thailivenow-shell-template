# AP-L10N-WEST-01 2호 en-gb (영국 영어) 검수 완료 보고

작업키: AP-L10N-WEST-01 / 단위 02 en-gb
검수일: 2026-10-13 11:29 KST (검수자: ai-reviewed, 원어민 검수 미수행)
입력: ~/workspace/thailivenow/airportl10n01/en-gb/ 2026-10-13 08:52 스냅샷
  (body.md 25,019B SHA 66a7e730… / faq.md 15,394B SHA 0c11b490… — 읽기전용, 미수정)

## 산출물 (ZIP 미생성 — 부모 패키징)
1. completed/ap-l10n-west-01-en-gb.json — 검수 결과 (id "ap-l10n-west-en-gb",
   slug "airport-guide-en-gb", detailPath "/th/airports/guide/en-gb" 제안,
   originThreadKey="AP-L10N-WEST-01", sourceRecordId="airportl10n01/en-gb 2026-10-13 08:52 snapshot",
   nativeReview {done:false}, ready {value:false})
2. evidence/en-gb-evidence.json — GB-L10N-EV-0000~0016 인용
3. gaps/en-gb-gaps.json — 미확인 12건 + G-BR-01 (BR67/68 근거 충돌)
4. coverage/en-gb-coverage.json — 섹션 17건 검수 커버리지
5. manuscript/en-gb-ko-body.md / en-gb-ko-faq.md — ko 원본 byte-identical 복사 (SHA 대조済)
6. research/en-gb-notes.md / research/en-gb-report.md (본 파일)

## 판정 요약
- 섹션: pass 14 / pass-with-corrections 3 (17건)
- correction 제안 4건 (중 3건) + pass 관찰 4건
- ready=false (정정 미해결 3건 + BR67/68 근거 충돌 소유자 조정 필요 + 원어민 검수 미수행)

## 발견사항

### correction 제안 (원고 직접 수정 금지 — 제안만 기록)
- **F1 (중)**: body.md line 9의 TG "only carrier still flying the Heathrow–Bangkok pairing" 문장
  → 소유자 11:07 지시 [1]에 따라 삭제 제안. 근거: "BR67/68 공식 non-stop 13–19 Oct와 모순 (TPE 전구간 오독 금지)".
  단, 인계 coverage.json은 BR67/68을 tracker-only/미검증으로 분류 — 근거 충돌을 gaps G-BR-01에 기록,
  소유자 조정 전까지 어느 쪽도 확정 표기하지 않음. market.json의 동일 표현 2곳(TG route description,
  TG airline section)은 인계 원본이라 손대지 않고 AIRPORT-L10N-01 전달용으로 note에 기재.
- **F3 (중)**: Allianz UK 3절 (How to make a claim / Flight delays: proactive settlement /
  Medical emergencies and documents) — market.json uk-insurance-documents에 반영済이나
  원고 body.md 보험 섹션에 미반영 (Allianz 0건) → 3절 추가 제안
  (근거: coverage.json correctionLog 2026-10-13, https://www.allianz-assistance.co.uk/lbg-travel-insurance-faqs.html)
- **F4 (중)**: faq.md line 8 "Five airlines operate UK–Thailand direct routes with airline-official
  confirmation" — 실제 명시된 항공사는 4곳(TG·BA·Norse·TUI, EVA는 미검증 별도) → "Four"로 정정 제안

### pass 관찰 (소유자 11:07 지시 대조, 조치 불필요)
- **F2**: TG Heathrow /flight-timetable Only direct + 13Oct 실확정·편명 미확정 — 원고가 정확히 반영
  (운항: 공식 운임 페이지 2027년 3월까지 예약 가능 / 편명: 공식 재확인 불가로 예약 시 직접 확인).
  TG911/TG917·TG910/TG916 언급은 "tracker-observed" 한정자 — coverage unverified 노트와 정합.
- **F5**: 2019 PDF 잔존 제거 확인 — 원고에 2019/product-training 0건. LHR 체크인 답변이 항공사 확인으로 위임.
- **F6**: Norse Z0 — 원고에 편명 표기 전무, ZO 잔존 0건. market.json은 Z0 정정済 (12건).
- **F7**: MAN-BKK "2026-12-05~2027-04-18" 정확한 범위는 원고·market.json 어디에도 없음.
  원고의 "four flights a week from December 2026"은 인계 팩트와 일치.

### 언어 품질 (pass)
- en-gb 일관: traveller/enquiries/cancelled. US 철자 0건. en-in/en-us 혼용 0건.
  "Contact Center"는 공식 고유명사(THAI Customer Contact Center, AOT Contact Center)에만 사용.
- 전 영어 문장에 괄호 한국어 해석 동반 (자동 검사: 영어-only 줄 0건).
- glossary 용어 대조 확인 (직항편·체크인 카운터·발권 카운터·미검증·추적 사이트에서 확인된 등).
- '공식 미공개' 단정 0건 — 미검증 규범 준수.

## 장애
- 없음 (이 단위). BA 전화번호는 ba.com fetch timeout으로 미게재 — 정보없음(공식 미게재)으로 분류.
- Norse 카운터/연락처/지연증명서 절차는 SERVICE-01/AIRPORT-SERVICE-01 브라우저 확인 진행 중 — 원고가 미검증으로 정확히 표기.

## 숫자
후보 6 / 회수(인계) 6 / 독립검증 2 (en-in + en-gb) / 페이지입력완성(ready=true) 0

## 후속 권고
1. F1·F3·F4 정정안을 AIRPORT-L10N-01(원본 소유)에 전달, 반영 여부 확인
2. G-BR-01 (BR67/68 근거 충돌) 소유자 조정 후 F1 최종 확정
3. 원어민 en-gb 검수 수행 또는 소유자 면제 획득 후 ready 재평가
4. 3호 en-us 단일 직렬 투입 가능 (본 worker는 en-gb만 담당, 타 범위 미접촉)
