# MOTO-REGIONAL-01 파타야 시범 PTY-001 완성 보고서

- 조사일: 2026-10-13 (KST)
- 담당: 단일 직렬 작업, 하위 worker 없음
- 대상: 파타야 시범 1곳 — PTY-001 (비치로드·소이 9 입구 승차대)

## 1. 도시 공식 채널 조사 결과

### 파타야시 (City of Pattaya, pattaya.go.th)
- 2026-10-13 직접 열람 — 정상 접속, 홈페이지 본문에 "วิน"(승차대) 언급 0건.
- 공개 사이트에 승차대(Win) 목록 섹션 없음 → **정보없음** (부재 증거 아님, '공식 미공개' 단정 없음).

### DLT 촌부리 방람뭉 지소 (blm.dlt.go.th/th)
- 2026-10-13 접속 시도 — fetcher 측 upstream fetch 실패 (소스 실패 확정 아님, 재시도 안 함) → 공개 여부 **미확인**.
- DLT 중앙 뉴스 채널에서 파타야 개별 승차대 목록 원문 미발견 (정보없음).

### 공식 등록부 존재 (공개 목록은 아님)
- 2025-10 방람뭉구 지방소위원회 재등록 (10/20~31, Sala Prachakhom) — 미신고 시 공식 등록부 제명 → 공식 등록부 존재 확인.
- 2026-03-23 방람뭉구 앱 경유 118명 추가 승인 (4개 승차대 위치 신청 포함), 2023년 시범 이후 누적 376명 — DLT 촌부리 방람뭉 지소 자격 검증.
- 즉, 등록 체계는 공식적으로 운영 중이나 **개별 승차대 공개 목록은 없음**.

## 2. 시범 1곳 판정: PTY-001

- **등록**: confirmed(언론 경유 공식 조치) — 2014-07 NCPO 파타야 오토바이 택시 정비 프로그램이 바로 이 승차대(Beach Road and Soi 9)에서 등록 개시. 참석: Capt. Sittichai Chamsawat(제14군관구)·부시장 Ronakit Ekasingh·방람뭉 상임서기 Pongsathit Pijnont. 요건: 번호 조끼·노랑 공용 번호판·승차대 등록 기사 명단 게시·헬멧·육상운송부 요금·예의.
- **좌표**: 미검증 — OSM 승차대 객체 없음 (Overpass fetcher 406 ×2, Nominatim 도로 객체만). 임의 핀 금지.
- **운영**: 미검증 — 2014-07 스냅샷 외 비치로드 측 현행 직접 근거 없음. 2023-11 소이 9 승차대 클러스터(2번도로 측 입구, 별개 지점) 실존은 언론으로 확인.
- **대조**: 부라파대학교 논문(buuir) 'ปากซอย9 ชายหาด' 승차대 명시 + Siam Rath 2023-11 Soi 9 승차대 보도.
- **ready**: false (실제시설좌표 미검증).

## 3. 미검증 항목 수

- PTY-001 gaps 7건: coordinates·officialDocumentOriginal·operatingStatus·operatingHours·fareTable·payment·address — 전건 미검증
- 도시 전체: 파타야시 채널 승차대 목록 없음(정보없음) / DLT 지소 공개 여부 미확인(접속 장애) / 2014년 파타야시 530개 등 나머지 승차대 미착수

## 4. 장애

1. blm.dlt.go.th — fetcher 측 upstream fetch 실패 (소스 실패 확정 아님, 재시도 안 함)
2. overpass-api.de — HTTP 406 거부 ×2 (fetcher 수준, 재시도 금지 지침 준수)
3. Nominatim 구조화 amenity 검색 — 로컬 세션 메타데이터 타임아웃 (소스 실패 아님)
- '공식 미공개' 단정 0건. 찾지 못함 ≠ 공식 미공개.

## 5. 산출물 (바이트·SHA)

- research/PTY-discovery-report.md — 도시 전체 탐색 보고서
- completed/PTY-001.json — 시범 1곳 완성본
- evidence/PTY-001-evidence.json — 주장별 근거 (PTY-E1~E7)
- gaps/PTY-001-gaps.json — 미검증 7건 + 장애 4건
- research/PTY-001-report.md — 본 보고서

## 6. 다음 단계 제안

- 파타야는 2014년 기준 파타야시만 530개 승차대 — 시범 이후 별도 라운드 필요 (부라파대 논문 표의 승차대 위치들이 후보).
- 좌표 확보는 현장 확인 또는 OSM 직접 매핑이 필요 (원격 질의 한계).
- DLT 방람뭉 지소 사이트는 추후 재접속 시도 시 공개 목록 여부 재확인.
