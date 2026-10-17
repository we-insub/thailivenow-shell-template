# AP-L10N-WEST-01 en-gb 검수 진행 노트

작업키: AP-L10N-WEST-01 / 단위 02 en-gb (영국 영어)
검수일: 2026-10-13 11:29 KST
입력 스냅샷: ~/workspace/thailivenow/airportl10n01/ 2026-10-13 08:52 KST
  (en-gb ZIP 0974d533… — 인계 회신 기준, 재해시 없음)
검수자: ai-reviewed (원어민 검수 미수행)

## 검수 범위
- body.md 25,019B / faq.md 15,394B (검수 대상)
- 기준: market.json (57,623B) / coverage.json (7,076B) / evidence.json (11,760B, GB-L10N-EV-0000~0016) /
  translation-glossary.md / ko body·faq (대조용, manuscript/에 byte-identical 복사)
- en-in/en-us/ru/es/staff-phrases 미접촉 (인계 원본 읽기전용 준수)

## 수행
1. 전 수치(편명/전화번호/카운터/시간/요일) 대조 — market.json 문자열 탐색 + coverage confirmed 목록 대조
2. 사용자 11:07 field 정정 2건 대조:
   - [1] TG "only carrier LHR-BKK" 문장: body.md line 9 실존 확인 → F1 삭제 제안 기록 (원고 직접 수정 금지 준수)
   - [2] TG Heathrow /flight-timetable Only direct + 13Oct 실확정·편명 미확정: 원고가 정확히 반영 — pass 관찰 (F2)
3. 인계 정정분 대조:
   - 2019 PDF 잔존 제거: body.md/faq.md에 2019/product-training 0건 — pass 관찰 (F5)
   - Norse Z0: 원고에 편명 표기 전무, ZO 잔존 0건; market.json은 Z0로 정정済 (12건) — pass 관찰 (F6)
   - MAN-BKK 2026-12-05~2027-04-18: 해당 정확한 날짜 범위는 원고·market.json 어디에도 없음 (grep 0건).
     원고는 "four flights a week from December 2026" — 인계 팩트(market.json N0 MAN-BKK description)와 일치 — pass 관찰 (F7)
   - Allianz UK 3절: market.json uk-insurance-documents에 3절 반영済이나 원고 body.md 보험 섹션에 미반영 (Allianz 0건) — F3 correction 제안
4. 미검증 표기 규범 검사 — '공식 미공개' 단정 0건 (grep '미공개' 0 hits)
5. 언어 품질 — en-gb 일관성 (traveller/enquiries/cancelled), glossary 한국어 괄호 대조, en-in/en-us 혼용 없음,
   전 영어 문장에 괄호 한국어 해석 동반 (자동 검사: 영어-only 줄 0건)
6. ko 원본은 manuscript/에 byte-identical 복사 (SHA 대조 완료), 검수 대상 아님
7. 인계 원본 미수정 (읽기전용 준수)

## 결과 요약
- pass 14 / pass-with-corrections 3 (섹션 17건)
- correction 제안 4건: 중 3건 (F1·F3·F4), pass 관찰 4건 (F2·F5·F6·F7)
- ready=false: 정정 3건 미해결 + BR67/68 근거 충돌(G-BR-01) 소유자 조정 필요 + 원어민 검수 미수행

## 중요 주의사항 (부모 보고용)
- F1과 coverage.json의 충돌: 인계 coverage.json은 BR67/68을 tracker-only/미검증으로 분류하나,
  소유자 11:07 지시는 "BR67/68 공식 non-stop 13–19 Oct"를 근거로 TG "only carrier LHR-BKK" 삭제 제안 지시.
  본 검수는 소유자 지시를 우선해 F1 삭제 제안을 기록했으나, 근거 충돌은 gaps G-BR-01로 기록하고
  소유자 조정이 필요하다. 어느 쪽도 확정 표기하지 않음.
- 원고의 2019 PDF 편명(TG911/TG917/TG910/TG916) 언급은 "tracker-observed" 한정자로만 표기되어
  coverage.json unverified 노트와 정합 — 정정 대상 아님.
- market.json의 TG route description/TG airline section에도 "only carrier/airline" 표현이 있으나
  인계 원본이므로 손대지 않고 F1 note에 AIRPORT-L10N-01 전달용으로 기재.

## 인계 의존
- 인계 자료에 08:52 이후 변경 없음 (인계 회신 기준)
- AIRPORT-L10N-01 중복 종료 협의는 부모 담당 (이 검수의 범위 밖)
- staff-phrases는 이번 단위에서 참고만; 06번 단위에서 5언어판 검수 예정

## 후속 권고
- F1·F3·F4 정정안을 AIRPORT-L10N-01(원본 소유)에 전달하고 반영 여부 확인
- G-BR-01 (BR67/68 근거 충돌) 소유자 조정 후 F1 최종 확정
- 원어민 en-gb 검수 수행 또는 소유자 면제 획득 후 ready 재평가
- ZIP 패키징은 부모가 수행 (본 worker는 ZIP 미생성)
