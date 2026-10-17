# MOTO-REGIONAL-01 4호 BMA-MINBURI-096 완료 보고

- **대상**: BMA-MINBURI-096 (빅씨 롬끌라오, 태국어 공식명 บิ๊กซีร่มเกล้า)
- **날짜**: 2026-10-13

## 검증 결과
- **실제시설좌표**: 미확보 (coordinates=null). 구청 공식 목록은 좌표 미수록(S07 인계). Nominatim 영문 검색 0건, 태국어 검색은 매장 건물 객체(shop=supermarket, way 904161545)만 반환 — 참고 위치일 뿐 승차대 좌표 아님, 임의 핀 금지. OSM Overpass amenity=taxi 조회는 단일 시도에서 수신 타임아웃 (장애로 기록, 부재 증거 아님). 구청 승차대 위치 공개 지도는 없음(M66-E5 인계).
- **등록원문**: 확보. BMA 민부리 구청 FY2569(พ.ศ.2569) 공식 목록 96번, เดิม 6 · ใหม่ 미기재. 누적 구간(2025-10~2026-03)과 월간 구간(2025-10)에서 동일 항목·동일 수치 확인. 원문 URL: https://webportal.bangkok.go.th/public/user_files_editor/90/ITA69/O9/O9%202%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%A7%E0%B8%B4%E0%B8%99.pdf . 원문표기: บิ๊กซีร่มเกล้า. 확인일 2026-10-13 (browser.open 정상 열람 성공).
- **운영 상태**: 미검증. driverCount=6은 2026-07-15 기준 등록 시점 증명서 발급 수로만 표기, 현재 운영 기사 수로 단정하지 않음. 현재 운영 근거 없음.
- **미검증 항목**: 6건 (coordinates·operatingStatus·operatingHours·fareTable·payment·address)
- **장애**: 1건 — OSM Overpass amenity=taxi 조회(민부리·롬끌라오 구역) 1회 시도에서 수신 타임아웃, 정책상 재시도 없음. 좌표 부재의 증거로 사용하지 않음. 등록원문 PDF 열람은 정상 (장애 아님).
- **ready**: false — 실제시설좌표 미검증 + Overpass 장애 1건. 등록원문·본문/FAQ는 확보.

## 산출물 (3종, JSON 파싱 검증 완료)
| 파일 | 바이트 | SHA256 |
|---|---|---|
| completed/BMA-MINBURI-096.json | 5173 | 3de15d2cb648c4b88f95e1870305515870b235417857c38715b05b5cf56221a3 |
| evidence/BMA-MINBURI-096-evidence.json | 6217 | d9dcc7f3d4ecb358a8c44f897eafe9443e23bc1fcbf5c834fb5c75176b440e53 |
| gaps/BMA-MINBURI-096-gaps.json | 3136 | db8282b59c4faa5387d1364e9e274fe2465db52572513877a609ba2999ee2310 |

- slug `bma-minburi-096`, detailPath `/th/guides/bangkok/transport/motorcycle-stands/bma-minburi-096` (제안).
- id 유지 BMA-MINBURI-096. 기존 stands.json 수정 없음. stands 레코드(읽기전용) 및 1호 회차 인계 근거(S01·S07·M66-E5) 재사용, 처음부터 중복 재조사 없음.
- '찾지 못함 ≠ 공식 미공개' 준수 — '공식 미공개' 단정 0건.
