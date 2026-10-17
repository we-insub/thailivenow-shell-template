# LOCAL-SOUTH-01 — 태국 동부·남부 지역교통 조사 작업 브리프

- 작업키: `LOCAL-SOUTH-01`
- 전담범위: **파타야·푸켓·사무이** 쏭태우/지역버스/툭툭 실제노선·승차지점·결제. **타도시·타수단(미터택시·오토바이택시·장거리버스·호출택시)·타국가·한국일본 금지.**
- 사용자 명시 지시: 범위에 맞는 별도 채팅 병렬조사. 기존담당(LOCAL-01) 자료 인계받아 미확인필드·누락항목 보완 집중, 처음부터 중복 재조사 금지.

## 인계 자료 (읽기전용 재사용 — 원본 무수정)

`~/workspace/thailivenow/local01/` (LOCAL-01, 2026-10-13 조사·독립검증 완료분)
- local01-structured.json (30,578B) — TAXI-01 11필드 체계 + 툭툭 지역변형 4곳 + 쏭태우 도시별 5곳
- local01-evidence.json (12,986B, evidence 17건)
- local01-coverage.json (3,672B)
- local01-manuscript.md (16,294B) · local01-seo.json (7,280B)
- raw 2종: `~/workspace/thailivenow-taxi/raw/tuktuk-raw.json` · `songthaew-raw.json` (각 11팩트)

남부 관련 인계 팩트 (재조사 금지, 보완만):
- 파타야 밧 버스(파란색): 고정 순환노선(비치로드·세컨드로드·좀티엔 방면), 1구간 1인당 10~20바트(2026-08-04 확인 기준)·정류장 없이 노선상 아무 곳에서나 승차·하차 벨 미리·내린 뒤 운전석 창구 현금 지불. 상태 partial — 공식 시간표·요금표 없음, 상세 승차지점·운행구간(좀티엔 세부·나끄루아 방면) 미확인.
- 푸켓 파란 송태우: 푸켓타운↔주요 리조트(빠통 등), 차체 영문 목적지 표기, 15~20바트 수준·오전 7시~오후 6시경 운행이라는 지역 안내(공식 시간표·요금표 미확인)·정해진 정류장 없이 노선상 승차. 승차 안내: 빠통 비치로드 관광경찰 박스 근처·푸켓타운 라농로드 시장(타이항공 맞은편). 상태 partial — 결제(하차 후 지불) 및 하차 절차 푸켓 특정 미확인.
- 푸켓 툭툭: 합법 대중교통 등록(노란 번호판, DLT) 확인·미터기 없음·탑승 전 요금 합의 필수. 리조트 지역 5분 거리 100바트부터·해변 지역 밖 400바트부터(공식 아님). 상태 partial — 공식 요금표 없음, 지역별 실제 승차지점 미확인.
- 툭툭 11필드 전국 공통 계승: TAT 공식 "출발 전 요금 협상"(목적지·인원·총요금 탑승 전 합의)·현금 후불·1155/1584 신고·개방형 안전 수칙.

## 누락 항목 (인계 자료에 없음 — 신규 조사)

- **사무이 쏭태우**: LOCAL-01에 전혀 없음. 사무이식 송태우(사실상 택시형·해변 노선) 실제노선·요금 체계·승차지점·결제 신규 조사.
- **사무이 툭툭**: LOCAL-01에 없음. 존재 여부·요금·흥정·결제 신규 확인.
- **파타야 툭툭**: LOCAL-01에 없음. 파타야는 밧 버스 중심이므로 툭툭 존재 여부·이용 맥락부터 확인 (없으면 '미확인'이 아닌 '해당 교통수단 없음'으로 명시적 판정 필요).

## 조사 단위 6건 (id / slug / detailPath)

지도핀/상세 연결용. detailPath는 제안값이며 실제 라우팅은 코드팀(Codex)이 확정 — 이 작업에서는 값만 준비, 코드수정·배포 금지.

| id | 대상 | slug | detailPath |
|---|---|---|---|
| sth-pty-songthaew | 파타야 밧 버스(파란 쏭태우) — 고정노선·실제승차구간·결제 | songthaew-pattaya | /th/guides/pattaya/transport/songthaew |
| sth-pty-tuktuk | 파타야 툭툭 — 존재 여부·이용 맥락·요금 | tuktuk-pattaya | /th/guides/pattaya/transport/tuktuk |
| sth-hkt-songthaew | 푸켓 파란 송태우 — 노선·승차지점·운행시간·결제 | songthaew-phuket | /th/guides/phuket/transport/songthaew |
| sth-hkt-tuktuk | 푸켓 툭툭 — 합법식별·요금·흥정·결제 | tuktuk-phuket | /th/guides/phuket/transport/tuktuk |
| sth-usm-songthaew | 사무이 쏭태우 — 실제노선·요금 체계·승차지점·결제 | songthaew-koh-samui | /th/guides/koh-samui/transport/songthaew |
| sth-usm-tuktuk | 사무이 툭툭 — 존재 여부·요금·흥정·결제 | tuktuk-koh-samui | /th/guides/koh-samui/transport/tuktuk |

## 필드 스키마 (TAXI-01 11필드 계승)

identification · boarding · destination_handoff · fare_meter · fare_fixed · payment · alighting · luggage_passengers · airport_surcharge · complaints · safety_tips
+ 도시 하위항목: route · color · fare · operatingHours · payment · boarding · alighting · boardingPoints[{nameKo,nameTh,nameEn,lat,lng,osmObjectId,source,verifiedOn}] · notes

## evidence / gaps / coverage 규범

- evidence 1건 = {factId, claim, claimKo, sourceURL, confirmedOn(실제 열람일), evidenceLevel: official-government|official-operator|official-tourism|news|guide|blog, quote, note}
- 주장별 공식 URL 필수. **찾지 못했다고 '공식 미공개'로 단정 금지 — 확인하지 못한 항목은 '미검증'으로 표시.**
- 좌표: OSM 실제 시설 객체 직접 대조만 인정 (way/node id 명시, 3종 일치). 추측·근사 금지. 미확보는 null + unverifiedReason.
- 시간·요금·요일: 공식 원문 수치만. 가이드 인용은 evidenceLevel 명시, 현행성 확인일 병기.
- gaps: {field, reason, obstacle|missing} — 장애(차단·미게재·상충)와 정보없음을 구분.

## ready 판정

ready=true 조건: 공식원문 확보 + 확인일 + 필드별 근거 + 실제시설 좌표/객체출처(승차지점) + 한국어본문/FAQ + gaps 명시. 핵심(시간·요금·탑승·결제) 미달 시 ready=false 유지.
숫자 보고 규범: **후보 / 회수(인계) / 독립검증 / 페이지입력완성(ready=true)** 구분.

## 산출물·제출

- completed/<id>.json · evidence/<id>-evidence.json · gaps/<id>-gaps.json · coverage/<id>-coverage.json · manuscript/<id>-ko.md
- ZIP: zips/LOCAL-SOUTH-01-<순번>-<id>.zip (JSON+evidence+gaps+coverage+원고)
- 완료시설부터 즉시 파일 제출 (묶어서 기다리지 않음). 부모 독립검증(바이트·SHA·JSON파싱·id·ready) 후 첨부.

## 진행 순서 (단일 직렬, 하위 worker 금지)

1. sth-pty-songthaew (시범 — 인계 팩트 가장 탄탄, 상세 승차구간·나끄루아 방면 보완)
2. sth-pty-tuktuk
3. sth-hkt-songthaew
4. sth-hkt-tuktuk
5. sth-usm-songthaew
6. sth-usm-tuktuk

## 금지

코드수정·전체상세공개·배포·삭제·API키·유료작업·공개업로드·한국일본·타도시·타수단·LOCAL-01 원본 수정·LOCAL-NORTH-01 범위(치앙마이·치앙라이) 침범.
