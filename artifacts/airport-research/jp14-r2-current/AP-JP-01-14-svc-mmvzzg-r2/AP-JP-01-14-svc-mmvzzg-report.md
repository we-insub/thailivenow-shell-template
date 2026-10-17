# AP-JP-01 14호-B 완료 보고 — 지상서비스 (MM×KIX / VZ×KIX / ZG×NRT)

작업키 AP-JP-01 14호-B. 단일 직렬 조사, 하위 worker 없음. 13호 전화 정본(completed/AP-JP-01-13-phone-mmvzzg.json) 읽기전용 재사용.

## 판정
- 3조합 × 6필드 = 18필드 중 **공식 11 / 미검증 7**. '공식 미공개' 단정 0건 (전부 '미검증').
- BKK/DMK·태국 지역공항은 범위 밖 — 미포함.

## 조합별 확보/미확보 요약

### MM (Peach) × KIX — 공식 5/6
- 확보: 체크인 카운터 (T2 국제선 1층, 키오스크 150~50분 전) · 공항 사무실 (+81(0)3-6629-1627, KIX 공식 사이트) · 수하물 파손 신고 (수령 직후 직원 신고, 이탈 후 7일 이내 Contact Form) · 지연/취소/탑승 증명서 (flypeach.com Flight Certification 온라인 폼, 지연 정의 10분 초과) · 보험 증빙 (위 증명서 + 자사 사유 보상제도: 국내선 1만엔·국제선 2만원, 2026-08-19 시행)
- 미확보: 발권 카운터 번호·위치 (공식 미게재)

### VZ (Thai VietJet) × KIX — 공식 2/6
- 확보: 공항 사무실 (+81(0)50-5482-5539, vj-contact@vietjetair-wcc.jp, KIX 공식 사이트) · 수하물 신고 기한 (공식 운송약관: 파손·분실 7일, 지연 21일; KIX T1 Lost & Found는 이메일 kixll@ckts.kansai-airports.co.jp만)
- 미확보: 체크인 카운터 번호·위치 · 발권 카운터 · 지연·결항 확인서 절차 · 보험 증빙 (Sky Care는 보도 기준, VZ便 적용 공식 미확인)

### ZG (ZIPAIR) × NRT — 공식 4/6
- 확보: 체크인 카운터 (T1-North, 카운터 C — 나리타공항 공식 출발전광판) · 지연·결항 증명서 (zipair.net 공식 Certificate 페이지: 탑승/지연·결항/목적지 변경 3종) · 보험 증빙 (위 증명서) · 연락처 (Special Assistance 전용 +1-646-828-8233, 일반 문의용 아님)
- 미확보: 발권 카운터 · NRT 공항 오피스 전화 · 수하물 파손·지연 공식 절차 (zipair.net 직접 열람 시 HTTP 403 — 기술적 장애, 부재 아님)

## 핵심 근거 3줄
1. flypeach.com 공식 KIX 공항 안내 (T2 국제선 1층 체크인) + Flight Certification 온라인 폼 (취소/지연/탑승 증명서) + 보상제도 페이지 (2026-08-19 시행).
2. KIX 공식 공항 사이트 항공사 디렉토리 (kansai-airport.or.jp): Peach +81(0)3-6629-1627 · Thai VietJet +81(0)50-5482-5539 + vj-contact@vietjetair-wcc.jp.
3. 나리타공항 공식 출발전광판 (narita-airport.jp): ZIPAIR T1-North 체크인 C + zipair.net 공식 Certificate 페이지 (검색 인덱싱 확인, 직접 열람은 403).

## 산출물 (~/workspace/thailivenow/ap-jp-01/ 아래, JSON 파싱 전부 OK)
- completed/AP-JP-01-14-svc-mmvzzg.json — 9,312B, SHA d10216c27b1844e52cde95389ab3f0c6e403e7e0cd6fb22e8013dbc0a39451a7
- completed/AP-JP-01-14-svc-mmvzzg-manuscript.md — 4,019B, SHA e8edaf5e8f4d4247dd88e99b3b13d089ccdbaae9ad989e3ed6075d170eb9468b (한국어 정리, 확인된 사실만)
- evidence/AP-JP-01-14-svc-mmvzzg-evidence.json — 4,066B, SHA 88b21aac9b263f09d3dafdd0de1176dcacf276e7e7b40c225d0c532f9ace8955 (12 claims)
- gaps/AP-JP-01-14-svc-mmvzzg-gaps.json — 2,242B, SHA f0a6b12d64b603872f2da82f3d43200ce08dd35ef0ba0d75bb1bed4738b40dae (9건, 전건 미검증)
- coverage/AP-JP-01-14-svc-mmvzzg-coverage.json — 897B, SHA 6b78980e87453cc75b743ec2f3f643146dc30edde925a302610a58e0f803c3a1 (조합별 필드 상태)

숫자: 후보 3조합 / 회수(13호 전화 정본 재사용) 3 / 독립검증 0(부모 검증 예정) / 페이지입력완성 0.
ZIP 패키징은 부모 판단에 위임.
