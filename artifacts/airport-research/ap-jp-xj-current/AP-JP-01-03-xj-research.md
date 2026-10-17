# AP-JP-01 3호 조사 노트 — XJ 4레코드 (NRT↔DMK·KIX↔DMK)

- 조사일시: 2026-10-13 11:4x~11:55 KST (Asia/Seoul)
- 대상: JP-NRT-DMK-XJUNK-OUT / JP-DMK-NRT-XJUNK-IN / JP-KIX-DMK-XJUNK-OUT / JP-DMK-KIX-XJUNK-IN
- 범위 준수: NGO↔DMK 2레코드·ZG·NQ·TG·CTS 미접촉. 인계 파일 읽기전용(수정 없음).

## adopt (소유자 확정, 재조사 없음)
- ORCH-01 경유 소유자 확정: XJ NRT 6편/주, KIX 4편/주. 4레코드에 그대로 반영.
- 상충 기록: 공식 뉴스룸(2026-09-22)은 Tokyo 'Up to 21/week'·Osaka 'Up to 14/week' — 소유자 확정값과 수치상 불일치. 소유자 값 adopt, 상충은 evidence에 명기.

## 공식 조회 결과
1. newsroom.airasia.com (2026-09-22 보도자료, 2026-10-13 열람): Q4 윈터 스케줄 Tokyo 최대 21/주·Osaka 최대 14/주·Sapporo 최대 4/주(10/1~)·Nagoya 4/주(10/2~). 편명·시각·요일 없음.
2. narita-airport.jp/en/flight/dep-search/ (2026-10-13 열람, 당일 전광판): XJ0601 THAI AIRASIA X, Terminal T2, Check-in N, ON TIME, 09:15(JST), Destination BANGKOK (Don Mueang). → JP-NRT-DMK-XJUNK-OUT에 flightNumber XJ601 / depTime 09:15 / origin terminal T2를 "official-airport-observation" 수준으로 기록(정기 스케줄 단정 불가).
3. flightinfo.kix-ap.ne.jp/en/ fetch 실패. airasia.com 예약엔진은 JS 렌더링 필요(텍스트 fetch 불가). → KIX↔DMK 공식 편명·시각·요일·터미널 전부 미검증.
4. 간사이공항 공식 보도자료에서 XJ 편명 포함 항목 미발견.

## 제3자 참고 (참고용만, adopt 안 함)
- airpaz: XJ600 DMK 23:30→NRT 08:00 / XJ601 NRT 09:15→DMK 14:00 / XJ610 DMK 09:50→KIX 18:25 / XJ613 KIX 10:25→DMK 14:25 등.
- flightmapper/flightradar24: XJ600 daily 16:30 DMK→NRT(10/13~17 실측), XJ601 daily NRT 09:15→DMK 14:40 (유효 2026-03-30~10-25).
- 12go/airportia/XJ610 history: DMK→KIX 10:30→18:25 실측 다수.

## 판정
- 4레코드 status=active 유지. ready=false 4건 (편명 3건 미검증·정기시각 4건 미검증·요일 4건 미검증·validTo 4건 미검증·DMK/KIX 터미널 미검증·2026-10-25 동계스케줄 미게재).
- 후속 필요: 라이브 브라우저로 airasia.com 예약엔진 또는 간사이/돈므앙 공식 전광판 조회.
