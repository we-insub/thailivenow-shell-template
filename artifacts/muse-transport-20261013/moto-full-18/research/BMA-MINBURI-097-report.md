# MOTO-REGIONAL-01 5호 완료 보고 — BMA-MINBURI-097 (카셈반딧 대학교, 민부리)

- 작업일: 2026-10-13
- 작업자: 단일 직렬 worker (하위 worker 없음)
- stands 레코드: `~/workspace/thailivenow/motorcycle01/motorcycle01-stands.json` 행 4번 (standId `BMA-MINBURI-097`) — 읽기전용 재사용, 수정 없음

## 1. 실제좌표 확보 여부: 미확보 (미검증)
- Nominatim 태국어 검색 `มหาวิทยาลัยเกษมบัณฑิต มีนบุรี`: 카셈반딧 대학교 롬끌라오 캠퍼스 객체만 반환 (amenity=university, way 197484456, 13.8026681/100.7365736, ร่มเกล้า, มีนบุรี)
  → 승차대(Win) 객체가 아니라 캠퍼스 참고 위치이므로 승차대 좌표로 사용하지 않음 (임의 핀 금지)
- OSM Overpass `amenity=taxi` (캠퍼스 중심 반경 800m): 정상 응답·결과 0건
  → 부재 증거가 아니라 미발견(미검증)으로 기록. 찾지 못했다고 '공식 미공개'로 단정하지 않음
- 구청 승차대 위치 지도: 1호 회차(M66-E5) 확인 인계 — 공개 지도 없음 (구청이 공개한 자료는 PDF 목록뿐)
- coordinates=null, coordinateObjectSource=null

## 2. 등록원문 확보 여부: 확보 (confirmed)
- 문서: BMA 민부리 구청 FY2569(พ.ศ.2569) 윈 승차대·공영 오토바이 증명서 발급 공식 목록
- URL: https://webportal.bangkok.go.th/public/user_files_editor/90/ITA69/O9/O9%202%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%A7%E0%B8%B4%E0%B8%99.pdf (browser.open 2026-10-13 정상 열람, 장애 없음)
- 97번 행 원문 표기: `97 | มหาวิทยาลัยเกษมบัณฑิต - | 4 | -` (PDF 텍스트 추출 렌더링상 `มหาวิทยาลัยเกษมบันฑติ`로 표시되나 stands 레코드 nameTh와 동일 항목 — 추출 렌더링 차이)
- 2025-10~2026-03 누적 구간과 2025-10 월간 구간에서 동일 항목·동일 수치(4건) 확인
- 원문 title: ข้อมูลสถานที่รอรับคนโดยสาร (วิน) และการออกใบรับรองรถจักรยานยนต์สาธารณะ ในเขตกรุงเทพมหานคร ประจำปีงบประมาณ พ.ศ.2569 สำนักงานเขตมีนบุรี
- 문서 전체: 승차대 121곳·운전자 923명 (S01 인계), 기준일 15 กรกฎาคม 2569 (2026-07-15)
- 증명서 수 해석: เดิม(original) 4 · ใหม่(new) 미기재 — 등록 시점 증명서 발급 수

## 3. 운영 상태 판정: 미검증
- 등록 목록은 2026-07-15 기준 스냅샷. 현재 시점 실제 운영(운행 중 기사 수·영업 여부)에 대한 별도 근거 없음
- driverCount=4는 등록 시점 증명서 발급 수로만 표기, 현재 운영 기사 수로 단정하지 않음

## 4. 미검증 항목: 6건
1. coordinates — 승차대(Win) 객체 자체 좌표
2. operatingStatus — 현재 시점 실제 운영
3. operatingHours — 공식 목록 미포함(S07)
4. fareTable — 공식 목록 미포함(S07)
5. payment — 공식 목록 미포함(S07)
6. address — 공식 목록 미포함(S07)
- 전건 '미검증' 표기. '공식 미공개' 단정 0건.

## 5. 장애 여부: 없음
- BMA PDF browser.open 정상 열람. Overpass 정상 응답(결과 0건). 신규 장애 0건.

## 6. 산출물 (JSON 파싱 OK)
| 파일 | 바이트 | SHA256 |
|---|---|---|
| completed/BMA-MINBURI-097.json | 5531B | bf8a3e1e5a2e3242bfadec3b8ac08dc97d12c40b24ed72f6213e81aa22315f16 |
| evidence/BMA-MINBURI-097-evidence.json | 6641B | 2822d7ed832454ad88cab8d29c308577995c2d794e5ce6c44797cc499b118d56 |
| gaps/BMA-MINBURI-097-gaps.json | 2934B | 363398da1c12ef0485908387b2bae881e9331382b6dbdddcc826ef41904f77e2 |

- slug: `bma-minburi-097`, detailPath: `/th/guides/bangkok/transport/motorcycle-stands/bma-minburi-097` (제안값)
- bodyKo 2문장 + faqKo 3개 (해요체, 사실 기반) 포함
- ready=false (실제시설좌표 미검증). 등록원문·본문/FAQ 확보.

## 7. 특이 사항
- PDF 텍스트 추출 렌더링 차이: 원문 97번 행이 추출상으로 `มหาวิทยาลัยเกษมบันฑติ`로 표시되나, 공식 명칭 `มหาวิทยาลัยเกษมบัณฑิต`(stands 레코드 nameTh)와 동일 항목임을 원자 대조로 확인. evidence/completed 양쪽에 렌더링 차이 명시.
- 기존 stands.json은 절대 수정하지 않음. 서비스/규칙·파툼완·타 지역 미접촉.
