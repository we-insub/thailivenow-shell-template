# AIR-TRANSFER-01 작업 브리프

- 작업키: AIR-TRANSFER-01
- 제목: 태국 지역공항 시내 이동 조사
- 전담범위: CNX / HKT / CEI / USM / KBV / HDY — 공항→시내 교통수단·실제승차위치·운영시간·요금
- 범위 밖(손대지 않음): BKK·DMK (기존담당 유지)·UTP·타 국가·코드 수정·전체상세 공개·배포
- 기존담당: AIR-01 https://muse.ai/thread/d8a3766e-77bb-47af-a580-015059990f1a

## 재사용 자료 (읽기전용 — 중복 재조사 금지)

`~/workspace/thailivenow/air01/`:
- air01-airport-transport.json — 옵션별 기존 검증 필드 (evidenceId E104/E105, F101/F102 등)
- air01-airports.json, air01-evidence.json, air01-coverage.json — coverage nullItems가 미확인 목록

이미 verified인 필드(요금 수치·노선·운영사 명칭 등)는 재조사 금지. 보완 대상은 null/미확인 필드와 누락 공항(HDY)뿐.

## 공항별 갭 요약 (2026-10-13 실측)

| 공항 | 기존 옵션 | 주요 미확인/누락 |
|---|---|---|
| CNX 치앙마이 | 3 (셔틀버스/그랩/택시) | 운영시간·배차간격 전부 null, 택시 요금 null, 좌표 null |
| HKT 푸껫 | 6 (버스/익스프레스/스마트버스/밴/택시/리무진) | 요금 전부 null, 소요시간 null, 4옵션 운영시간 null, 좌표 null |
| USM 코사무이 | 3 (밴/택시/차량호출) | 요금·탑승장소 전부 null, 좌표 null |
| KBV 끄라비 | 2 (셔틀/택시) | 공식 근거 없음 — 수단·요금·탑승장소 전부, 좌표 null |
| CEI 치앙라이 | 3 (택시/셔틀/렌터카) | 요금 null, 공항버스 운행 여부 미확인, 좌표 null |
| HDY 핫야이 | 0 | AIR-01에 없음 — 전 항목 신규 조사 |

## 규범

- 공식 원문만 verified. AOT(airportthai.co.th)·공항 공식 페이지·CAAT·공식 운영사 채널.
- 제3자(블로그·OTA·리뷰·언론)는 수치를 기록하지 않고 unverified 또는 partial로 분류.
- 미검증 표기: 찾지 못함 ≠ 공식 미공개. "공식 미공개"는 공식 채널에서 없음을 직접 확인했을 때만.
- 좌표·시간·요금·요일 추측 금지. 공항 본체 좌표는 OSM 공항 객체 대조(osm-crosschecked) 가능, 승차장 좌표는 공식 미게시 시 gaps.
- 주장별 공식 URL 필수 + 확인일(실제 조회일) 기록.
- 한국어본문/FAQ, ready/gaps, coverage JSON을 공항별 ZIP(AIR-TRANSFER-01-<순번>-<iata>.zip)으로 순차 제출.
- id/slug/detailPath는 지도핀/상세 연결용으로 준비.

## 실행 순서

1. CNX 시범 1호 단일 직렬 worker → 부모 독립검증 → ZIP 패키징·이 채팅 첨부
2. HKT → CEI → USM → KBV → HDY 순차 (단일 직렬, 하위 worker 금지)

## 숫자 (2026-10-13 10:2x KST 기준)

- 후보: 6공항 / 검증: 0 / 페이지입력완성: 0
- HDY는 신규 — 공항 본체 정보부터 확보 필요
