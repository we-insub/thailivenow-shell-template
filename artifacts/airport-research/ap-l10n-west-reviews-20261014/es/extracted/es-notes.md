# es 검수 진행 노트 (AP-L10N-WEST-01 5호)

- 검수 대상: ~/workspace/thailivenow/airportl10n01/es/body.md (22,092B), faq.md (19,276B) — 읽기전용, 미수정
- 인계: market.json (E9 1항공사, routes 2, services 3, guides 4), evidence.json (15건), coverage.json (confirmed 17·unverified 8·gaps 5), translation-glossary.md v1.0 — 2026-10-13 08:52 스냅샷
- 사실조사 금지 준수: 신규 외부 검색 0건

## 핵심 대조 (소유자 11:07 [3])
- E9845/E9846 durationMinutes: 인계 market.json에는 730/790 (legacy), 소유자 정정으로 null — tracker(AeroRoutes)/FR24 값은 current 확정으로 사용 금지
- FAQ '¿Cuánto dura?'의 730/790분 ('fuentes especializadas') → F1 (중) 삭제·미검증 표기 제안
- 'unas 12-13 h / ~10.100 km'는 항공사 자체 웹사이트 주장 (인계 confirmed) — F1과 분리, pass
- E9845 목요일 / E9846 금요일 / 주 1회: 원고에 요일 주장 없음, 충돌 없음 (pass 관찰)

## ORCH 정정 대조
- Intermundial 현행 접수 / Mapfre 개인·기업 분리: 인계·원고 모두 없음 → gap (G-INT-01, G-MAP-01), 추측 금지
- Iberojet /es/incidencias-equipaje: 인계 evidence에 있음, 원고 절차 내용 정합 — 명시적 URL 미기재는 F3 (하) 제안

## CAAT 101
- 전 수치·조항이 CAAT-01 handoff master와 일치 (1,500/2,000/3,500/4,500, 2/5/10h, 10,207km→4,500, 168h, complaint.caat.or.th, door closed, 60일, 바우처 규칙, 실제 운항 항공사, EU261 아님)
- 태국어 직원문구 'borrador — pendiente de revisión por hablante nativo' 표기 적정

## 언어 품질
- 전 스페인어 문장에 괄호 한국어 해석 동반 (자동 검사 0건 누락)
- '공식 미공개' 리터럴 0건 — 미검증은 'no publica' 헤징으로 적정 표기
- glossary 정합

## 판정
- 정정 3건 (중 1·하 2), pass 관찰 8건, ready=false (F1 미해결 + 원어민 미수행 + Intermundial/Mapfre 미검증)
- 원어민 검수: 미수행 (5개 로케일 공통)
