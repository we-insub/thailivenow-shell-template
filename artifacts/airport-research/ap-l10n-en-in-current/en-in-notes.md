# AP-L10N-WEST-01 en-in 검수 진행 노트

작업키: AP-L10N-WEST-01 / 단위 01 en-in (인도 영어)
검수일: 2026-10-13
입력 스냅샷: ~/workspace/thailivenow/airportl10n01/ 2026-10-13 08:52 KST
  (en-in ZIP afc0ee8f… — 인계 회신 기준, 재해시 없음)
검수자: ai-reviewed (원어민 검수 미수행)

## 검수 범위
- body.md 25,687B (lead + 10섹션 + footer) → 11섹션
- faq.md 22,549B (header + 8섹션, 총 40 Q&A) → 9섹션
- 기준: market.json (139,869B) / coverage.json (44,646B) / evidence.json (18,145B) /
  translation-glossary.md (118행) / ko body·faq (대조용)

## 수행
1. 전 수치(편명/전화번호/카운터/시간/금액/요일) 대조 — python으로 market.json 전체 문자열 탐색 + coverage confirmed 목록 대조
2. 미검증 표기 규범 검사 — '공식 미공개' 단정 없음 확인; flat 표현 4건(F2~F5)을 correction 제안으로 기록
3. 언어 품질 — en-in 일관성 (traveller, centre), glossary 한국어 괄호 대조, en-gb/en-us 혼용 없음
4. 내부 불일치 1건 적발 — F1 (body "TG check-in closes 50 min" vs FAQ "closes 60 min"; 60분은 수하물 마감)
5. ko 원본은 manuscript/에 byte-identical 복사 (대조용, 검수 대상 아님)
6. 인계 원본 미수정 (읽기전용 준수), en-gb/en-us/ru/es/staff-phrases 미접촉

## 결과 요약
- pass 18 / pass-with-corrections 3
- correction 제안 7건: 중 5건 (F1~F5), 하 2건 (F6, F7)
- ready=false: 정정 미해결 + 원어민 검수 미수행

## 인계 의존
- 인계 자료에 08:52 이후 변경 없음 (인계 회신 기준)
- AIRPORT-L10N-01 중복 종료 협의 회신은 부모 담당 (이 검수의 범위를 벗어남)
- staff-phrases는 이번 단위에서 참고만; 06번 단위에서 5언어판 검수 예정

## 후속 권고
- F1~F5 정정안을 AIRPORT-L10N-01(원본 소유)에 전달하고 반영 여부 확인
- 원어민 en-in 검수 수행 또는 소유자 면제 획득 후 ready 재평가
- ZIP 패키징은 부모가 수행
