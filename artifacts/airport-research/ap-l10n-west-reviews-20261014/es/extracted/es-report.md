# AP-L10N-WEST-01 5호 es (스페인어) 검수 완료 보고

## 검수 대상
- ~/workspace/thailivenow/airportl10n01/es/body.md (22,092B), faq.md (19,276B) — 읽기전용, 미수정
- 인계: market.json / evidence.json (15건) / coverage.json (confirmed 17·unverified 8·gaps 5) / translation-glossary.md v1.0 (2026-10-13 08:52 스냅샷)
- 사실조사 금지 준수 (신규 외부 검색 0건), 타 로케일·원본 미접촉, 코드수정·배포 없음

## 발견사항
- **F1 (중, correction 제안)**: FAQ '¿Cuánto dura el vuelo?' — "unos 730 minutos Madrid-Bangkok y 790 minutos Bangkok-Madrid" (fuentes especializadas). 소유자 11:07 [3]에 따라 durationMinutes=null — tracker/AeroRoutes 값은 current 확정으로 사용 금지. 삭제 또는 명시적 미검증 표기 제안. (인계 market.json의 730/790은 legacy 스냅샷 — 소유자 정정이 우선.)
- **F2 (하)**: 'South Europe Ground Services' (Aena 공개 Iberojet 분실수하물 취급사) — 인계 confirmed이나 원고에 미기재 → 추가 제안.
- **F3 (하)**: Iberojet 수하물 절차는 공식 페이지 내용과 정합하나 명시적 URL(/es/incidencias-equipaje) 미인용 → 인용 제안.
- **pass 관찰 8건**: 'unas 12-13 h / ~10,100 km'는 항공사 자체 주장 (인계 confirmed, F1과 분리) / 주 1회 운항은 TAT 2024-05-31과 정합, 요일 주장 없음 (E9845 목요일·E9846 금요일은 소유자 제공 current-local, 인계에 없어 충돌 없음) / route active 상태는 FR24·공식 상품 페이지로 뒷받침 / BKK 카운터 미공개 정확 표기 / DGSFP·AESA·보험 서류 전건 인계와 일치 / CAAT 101 전 수치·조항이 CAAT-01 handoff master와 일치 (1,500/2,000/3,500/4,500, 2/5/10h, 10,207km→4,500, 168h, complaint.caat.or.th, door closed, 60일, 바우처 규칙, 실제 운항 항공사, EU261 아님) / 태국어 직원문구 'borrador — pendiente de revisión por hablante nativo' 표기 적정 / 전 스페인어 문장에 괄호 한국어 해석 동반 (0건 누락) / '공식 미공개' 리터럴 0건 (미검증 헤징 적정) / glossary 정합.
- **gaps 9건**: G-INT-01 (Intermundial 현행 접수), G-MAP-01 (Mapfre 개인/기업 분리) — 인계·원고 모두 없어 미검증 (실작성 페이즈 대상, 추측 금지) / G-DUR-01 (E9845/E9846 duration null, dated official 시각은 current-local) / G-PHONE-01·G-BKK-01·G-CERT-01·G-SCHED-01·G-TICKET-01·G-LOSTFOUND-01 (인계 gap/unverified).

## ready 판정
- **ready=false**: F1 미해결 + 원어민 검수 미수행 (nativeReview.done=false) + Intermundial/Mapfre 미검증.

## 산출물 (ZIP 미생성 — 부모 패키징)
- completed/ap-l10n-west-01-es.json (id ap-l10n-west-es, originThreadKey=AP-L10N-WEST-01, nativeReview done=false, ready=false)
- evidence/es-evidence.json (ES-EV-0001~0015 인용)
- gaps/es-gaps.json (미검증 9건)
- coverage/es-coverage.json (섹션 7건)
- manuscript/es-ko-body.md, es-ko-faq.md (ko 원본 byte-identical)
- research/es-notes.md, es-report.md (본 파일)

## 숫자
- 후보 6 / 확보(인계) 6 / 독립검증 4 (en-in·en-gb·en-us·es) / 페이지입력완성(ready=true) 0 / 실제로컬반영 0
- 장애: 없음
