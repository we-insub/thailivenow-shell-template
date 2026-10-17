# AP-L10N-WEST-01 3호 en-us (미국 영어) 검수 완료 보고

작업키: AP-L10N-WEST-01 / 단위 03 en-us
검수일: 2026-10-13 11:42 KST (검수자: ai-reviewed, 원어민 검수 미수행)
입력: ~/workspace/thailivenow/airportl10n01/en-us/ 2026-10-13 08:52 스냅샷
  (body.md 18,784B SHA fb1c5713… / faq.md 9,866B SHA 3d1bfca1… — 읽기전용, 미수정)

## 산출물 (ZIP 미생성 — 부모 패키징)
1. completed/ap-l10n-west-01-en-us.json — 검수 결과 (id "ap-l10n-west-en-us",
   slug "airport-guide-en-us", detailPath "/th/airports/guide/en-us" 제안,
   originThreadKey="AP-L10N-WEST-01", sourceRecordId="airportl10n01/en-us 2026-10-13 08:52 snapshot",
   nativeReview {done:false}, ready {value:false})
2. evidence/en-us-evidence.json — EV-US-0001~0013 + Allianz marketRichSources 인용
3. gaps/en-us-gaps.json — 미확인 9건 (G1~G9, 장애/정보없음 구분)
4. coverage/en-us-coverage.json — 섹션 19건 검수 커버리지
5. manuscript/en-us-ko-body.md / en-us-ko-faq.md — ko 원본 byte-identical 복사 (SHA 대조済)
6. research/en-us-notes.md / research/en-us-report.md (본 파일)

## 판정 요약
- 섹션: pass 18 / pass-with-corrections 1 (19건)
- correction 제안 1건 (중) + pass 관찰 3건
- ready=false (F1 정정 미해결 + 원어민 검수 미수행)

## 발견사항

### correction 제안 (원고 직접 수정 금지 — 제안만 기록)
- **F1 (중)**: body.md 'Travel insurance claim documents' 섹션에 Allianz Claims Center 6절 누락.
  market.json guides[2] 'us-travel-insurance-docs'에는 ORCH 정정(2026-10-13 correctionLog)으로 6절이 반영되어 있으나
  원고에는 없음 (body.md/faq.md에서 'Allianz' 0건).
  추가 제안: (1) File your claim online (fastest) — 1-888-497-6992/팩스 804-673-1469/우편 P.O. Box 72031 Richmond VA;
  (2) What you need to start — 이메일/증권번호 + 출발일, 확인 이메일, Allyz 앱;
  (3) Documents by claim type — 취소/의료/수하물/렌트카;
  (4) After you file — 24시간 온라인 조회, 10영업일 심사, Check a Claim 페이지, 고객센터 1-866-884-3556;
  (5) Filing tips — 여러 사고 동시 접수, 주소/지급정보 확인, HIPAA 준수;
  (6) Email and mail options — claimsinquiry@allianzassistance.com (온라인보다 느림).
  출처: https://www.allianztravelinsurance.com/claims-process, https://www.allianztravelinsurance.com/faq.htm

### pass 관찰 (사용자 11:07 [4]·인계 정정 대응)
- **F2**: "직항 없음" 표기는 "as of October 13, 2026, every U.S.–Thailand airport pair we verified (352 pairs)"로 범위 한정 —
  coverage noDirectConfirmation(352 pairs, airline-official/government evidence only, "confirmed fact, not missing data")와 정합.
  전수 부재 증명 단정 아님.
- **F3**: market.json services 6건 모두 원고에 역할 정확히 반영 — TG 카운터 소유자확정 데이터는 TG에만, United/LAX/AOT는 각 해당 섹션에만.
- **F4**: CAAT 가이드 오표기 없음 — body.md/faq.md에 'CAAT' 0건. 인계 정정 ("en-us: CAAT 가이드 없음") 준수.

### 사실 정합성 (주요 수치 전건 대조済)
- UA820 LAX 23:15→BKK 11:25 / UA821 BKK 16:55→LAX 20:25 daily via HKG (TAT) — United only US carrier serving BKK (newsroom 2025-04-02)
- TG: BKK-LAX 종료 2015-10-25 / BKK-JFK 종료 2008 — AA no Thailand service
- TG BKK 카운터: H6–H17 (이코노미) / A3–A10 (로열 실크) / D5–D9·J5–J19 (셀프 수하물), 체크인 8시간 전~50분 전 마감, 수하물 60분 전
  (owner-confirmed, EV-US-0005) — 구 J/H/C 행 번호 사용 금지 표기 유지
- 전화: THAI +66 2 356-1111 / +66-2132-1888 (4층) / +66-2134-5453~56 (24h) · AOT 1722 / +66 2 132 1888 · Bags VIP 1-877-847-0045
- TG disruption form (직접 열람 검증) / United delayletter@united.com ('reported, not re-verified' 표기 정합)
- DOT 자동 환불 규정 (7영업일/20일, 6시간+ 국제선, 바우처 동의 필수) · 현금 보상 규정 없음
- PIR 21일 (TG) · Bags VIP 12시간+ 일부 자동 환불 · DOT 수하물 요금 환불 15/30시간
- United Vacations Travel Protection Plus / Generali U.S. Branch: $1,000 (지연 6시간+) · $300 (수하물 6시간+)

### 언어 품질
- en-us 일관성 (traveler; en-gb 혼용 0건; 'cancelled' double-l은 미국식 허용)
- 전 영어 문장에 괄호 한국어 해석 동반 (영어-only 줄 0건) — 한국어 해석은 검수용 임시본 명기
- glossary 용어 매핑 정합 (논스톱(무경유) 항공편, 1회 경유 여정, 여행 지연 보상금, 클레임 키트, 현금 자동 환불 등)
- '공식 미공개' 단정 0건 — 미검증 규범 준수

## 장애
- 없음 (사실조사 금지 준수 — 신규 외부 검색 수행하지 않음)

## 인계 원본
- ~/workspace/thailivenow/airportl10n01/ 전건 미수정 (읽기전용 준수 확인)

## 숫자
- 후보 6 / 확보(인계) 6 / 독립검증 3 (en-in·en-gb·en-us) / 페이지입력완성(ready=true) 0
