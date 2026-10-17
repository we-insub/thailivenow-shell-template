# BEACHES-01 구현 흐름 계획 (Codex 허브용 — 데이터 준비까지만)

schemaVersion: BEACHES-01/2026-10-13 / 작성일: 2026-10-13
담당(자료 조사)은 데이터 준비까지만 수행한다. 검수·구현은 Codex 허브.

## 데이터 산출물

- `cities.json` — 15개 도시 목록 (cityId, names{ko,en,th}, region, pilotRecordId, recordCount)
- `beaches-all.json` — 67개 레코드 배열 (상세템플릿 고정 항목)
- `evidence-all.json` — 도시별 claims 병합 (claim별 URL·근거등급)
- `coverage.json` — 도시×레코드 수·facilityType 분포·필드별 확보율·ready 분포·gaps 요약
- `drafts/<city>.md` — 15개 도시 원고 (고유 SEO H1·소개·해변 섹션·자연 한국어 연관질문 FAQ)

## 페이지 흐름

1. **도시 허브** — 15개 도시 목록. 도시별 대표(시범) 레코드 1개를 먼저 노출.
2. **도시별 시범 1개 상세** — `cities.json`의 `pilotRecordId` 레코드를 상세 페이지 입력용 고정 JSON으로 렌더.
   - 이용조건표: `record.codex.tableRows` [{label, value, sourceUrl}]
   - FAQ: `record.codex.faqSimple` [{q, a}] (한국어 기준). 언어별 전체 FAQ는 원자료 `record.faq` 유지.
   - 명칭: `record.codex.name`(KO) / `record.codex.english`(EN)
3. **전체 레코드 상세** — 시범 검증이 끝난 도시부터 순차 확장 (사용자 진행 지시 시).

## 지도

- **메인 지도에 해변 토글을 켰을 때만 핀을 표시**한다. 토글이 꺼져 있으면 핀 없음.
- 핀 후보는 `coordinates.verified=true`인 레코드만. verified=false(미검증)는 핀에서 제외.
- OSM 좌표 사용 시 지도/페이지에 ODbL 귀속을 표기한다 (sourceOSM URL·대표점 규칙은 `coordinates`에 기록됨).
- 좌표 없는 레코드(null)는 핀 없이 목록/표로만 노출.

## 공개 게이트

- `ready=true`인 레코드만 상세 공개 가능. **현재 전 레코드 `ready=false`** — 전체 상세 공개는 사용자 추후 지시 전까지 보류.
- `gaps`가 비어 있지 않은 레코드는 미완료 필드를 사용자에게 '미검증'으로 표시하고, 후속 조사(`followUp`) 상태를 노출하지 않는다(내부용).
- '항상 안전' 표현 금지. 수영 안내는 조건부 문구만 (`swimming.note`).
- `swimmable=true`는 직접 공식 근거(TAT/DNP/지자체/군 공식의 수영 허용·구역·안전관리 명시)가 있는 경우만. TAT 명소 페이지 존재만으로는 수영 허용으로 표시하지 않는다.

## 번역

- 한국어 원문을 우선 게시. EN/TH는 `translationVerified`가 true인 항목만 게시.
- `translationVerified=false`인 언어 필드는 **미검수 게시 금지** (자동번역 그대로 게시 금지).

## 시설유형별 주의

- `government` (코사메산·국립공원 등): 예약·인원·배편·국적/외국인 동반 조건·금지구역·보호정책을 이용조건표 최상단에 노출.
- `hotelPrivate`: 숙박 필수 여부·외부인 입장·데이패스 조건을 이용조건표 최상단에 노출.
- `island`/`snorkeling`: 배편(운항사·출발지·시간표·왕복)을 교통 섹션에 우선 노출. 시간표는 공식 timetable만, 없으면 null.

## 사진

- 사용권이 확정된 사진만 게시 (`photos[].license`·`sourceUrl`·`rightsNote` 필수). 권리 불명 사진은 제외.
- alt는 `photos[].alt.ko` (한국어 페이지 기준), 언어별 페이지는 해당 언어 alt.
