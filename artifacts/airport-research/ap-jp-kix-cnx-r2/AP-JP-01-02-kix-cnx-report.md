# AP-JP-01 2호 완료 보고 — KIX↔CNX VZ822/823 공식 확인

- 작업: AP-JP-01 2호 (순번 02) / JP-KIX-CNX-NODIRECT-OUT · JP-CNX-KIX-NODIRECT-IN
- 조사 시각: 2026-10-13 11:30~11:34 KST (Asia/Seoul 실측)

## 판정

- 2레코드 모두 **status=active (medium-high)**, ready=false
- VZ822 CNX 00:35→KIX 07:55 / VZ823 KIX 08:55→CNX 도착(공식 2024: 12:30 / 제3자 2026-10: 12:50)
- 편명 공식 근거: 2023-01-18 간사이공항 공식 취항 보도자료(편명 명시, 2023-02-17 취항)

## 핵심 근거 3줄

1. KIX 공식 보도자료(2023-01-18): Thai VietJet VZ822/823 CNX↔KIX 2023-02-17 취항, 편명·당시 스케줄 명시.
2. VietJet Thailand 공식 뉴스(2024-07-24): CNX↔Osaka 주4회(화·목·토·일, CNX 출발일)·CNX 00:35→Osaka 07:55·Osaka 08:55→CNX 12:30 (현지시각) 명시.
3. 2026-09/10 제3자 운항추적 3곳(planemapper·airportinfo·airpaz)에서 VZ822/823 실제 운항·예약 가능 확인 (참고용). 운휴/중단 공식 발표 없음.

## ready=false 사유

- 2026-10 현행 공식(vietjetair.com) 시각·요일 타임테이블 미게재 — 라이브 브라우저 필요.
- 요일 체계 변경 가능성: 공식 2024 주4(화·목·토·일) vs 제3자 2026-10 주3(월·수·금) 불일치.
- VZ823 도착시각 불일치(공식 12:30 vs 제3자 12:50), 터미널·시즌·기재·코드셰어 공식 미게재.
- KIX/치앙마이 공항 당일 운항판은 동적(JS)이라 텍스트 조회 불가 — 라이브 브라우저 필요.

## 산출물 (5종)

| 파일 | 바이트 | SHA256(12자) | JSON |
|---|---|---|---|
| completed/AP-JP-01-02-kix-cnx.json | 6,586 | 869f3fc858ef | OK |
| evidence/AP-JP-01-02-kix-cnx-evidence.json | 3,657 | d52a93bc0513 | OK |
| gaps/AP-JP-01-02-kix-cnx-gaps.json | 1,868 | 63ae5db23dbf | OK |
| completed/AP-JP-01-02-kix-cnx-manuscript.md | 3,231 | 6554f4f8353e | — |
| research/AP-JP-01-02-kix-cnx-research.md | 2,437 | 5941a4b9660f | — |

- '공식 미공개' 단정 0건 (전부 '미검증' 표기). 인계 자료 읽기전용 준수 — 수정 없음.
- 숫자: 후보 2 / 회수(인계) 2 / 독립검증 0(단일 worker, 부모 검증 예정) / 페이지입력완성 0.
- 제안: slug vz-kix-cnx / vz-cnx-kix, detailPath /th/flights/vz-kix-cnx·/th/flights/vz-cnx-kix (코드팀 확정).
- 다음 순번: 3호 TG623/622 (KIX–BKK) · TG645/644 (NGO–BKK) — 본 worker는 여기까지.
