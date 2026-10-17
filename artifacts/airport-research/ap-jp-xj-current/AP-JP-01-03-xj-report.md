# AP-JP-01 3호 완료 보고 — Thai AirAsia X 4레코드 (NRT↔DMK·KIX↔DMK)

- 완료일시: 2026-10-13 11:55 KST (Asia/Seoul)
- 대상 routeId 4건: JP-NRT-DMK-XJUNK-OUT / JP-DMK-NRT-XJUNK-IN / JP-KIX-DMK-XJUNK-OUT / JP-DMK-KIX-XJUNK-IN

## 산출물 (바이트·SHA256·JSON 파싱)
- completed/AP-JP-01-03-xj.json — 9,279B, SHA 4ba1599949e9…, JSON 파싱 OK
- evidence/AP-JP-01-03-xj-evidence.json — 4,773B, SHA 90a0d7c186cc…, JSON 파싱 OK
- gaps/AP-JP-01-03-xj-gaps.json — 2,381B, SHA 1e0535a798e8…, JSON 파싱 OK
- completed/AP-JP-01-03-xj-manuscript.md — 2,620B, SHA f4cf542d913b… (한국어 본문 + FAQ 5개)
- research/AP-JP-01-03-xj-research.md — 2,279B, SHA b8ca24e39528…
- routeId 4건 일치, evidence claimIds 전부 레코드와 교차 확인.

## 판정
- 4레코드 status=active 유지. 후보 4 / 독립검증(공식 관찰) 1 / 페이지입력완성 0.
- 소유자 확정 adopt: NRT↔DMK 2레코드 주 6회, KIX↔DMK 2레코드 주 4회 (basis: ORCH-01 owner-confirmed 2026-10-13, 재조사 없음).
- 공식 뉴스룸(2026-09-22) 'Up to 21/week Tokyo'·'Up to 14/week Osaka'와 소유자 확정값 수치 불일치 — 소유자 값 adopt, 상충 evidence 명기.
- 공항 공식 관찰 1건: 2026-10-13 나리타 출발 전광판에서 XJ601(NRT→Don Mueang, 09:15 JST, Terminal 2, ON TIME) 실측 → JP-NRT-DMK-XJUNK-OUT에만 flightNumber XJ601·depTime 09:15·origin T2를 observation 수준으로 기록. 정기 편명표 아님.

## 핵심 근거 3줄
1. newsroom.airasia.com 2026-09-22 보도자료: XJ DMK→Japan 4개 노선 Q4 운항 확대 (Tokyo 최대 21/주·Osaka 최대 14/주·Sapporo 4/주 10/1~·Nagoya 4/주 10/2~) — 편명·시각·요일 없음.
2. narita-airport.jp/en/flight/dep-search/ 2026-10-13 당일 전광판: XJ0601 THAI AIRASIA X, T2, ON TIME, 09:15, Destination BANGKOK (Don Mueang).
3. 소유자 확정(ORCH-01, 2026-10-13): XJ NRT 6편/주·KIX 4편/주 — adopt.

## ready=false 사유
- 편명 3건(JP-DMK-NRT-IN·KIX 2건)·정기 시각 4건·요일 4건·도착시각 4건·DMK/KIX 터미널·validTo·2026-10-25 동계 스케줄 전부 미검증 (airasia.com 예약엔진 JS 렌더링 필요·KIX 공식 전광판 fetch 실패·항공사 공식 타임테이블 미게재).
- 제3자 참고 편명(XJ600/601/603/607·XJ610/612/614·XJ611/613/615)은 adopt하지 않고 evidence에만 참고용 기록.
- '공식 미공개' 단정 0건. NGO 2레코드·ZG·NQ·TG·CTS 미접촉. 인계 파일 미수정.
