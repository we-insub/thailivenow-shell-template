# ap-in-007 완료 보고 — IN 노선 메타데이터 마감 (좌표·원고·detailPath)

## 산출물 (~/workspace/thailivenow/ap-world-asia-01/)

| 파일 | 바이트 | SHA256 |
|---|---|---|
| completed/ap-in-007-in-metadata.json | 17,129 | `90c5b1bb8abba12112ae11932c344efb11adcc4b06cec33745d748e4b2c1a27e` |
| evidence/ap-in-007-evidence.json | 3,543 | `88cfd836e9882e94abed4f9e43e2720df7bf2da127dd178201148d7df097c780` |
| gaps/ap-in-007-gaps.json | 2,994 | `5300b676a8a3e5fb5d576e895098d14152fc2ffa77ba3b15657d671711136bee` |
| research/ap-in-007-research.json | 1,129 | `a2761f916ea8b5141bf5529e827db929712736a85f39f7f0e8a9800d10f9e688` |
| manuscript/ap-in-007-manuscript.md | 4,979 | `be5c5bcc67466017c21478ae886644a9e56a1165695891da767ccb64e192b895` |
| coverage/ap-in-007-coverage.json | 810 | `fc7d35c3beefda324232382dc13535fe33761f97fb2c356635ca23b3a7c9569d` |

전건 JSON 파싱 OK · id="ap-in-007" · originThreadKey="AP-WORLD-ASIA-01" 정합 · claimIds 교차 PASS · claims AP-EV-0077~0081 (타 단위와 충돌 없음 — ap-in-006 AP-EV-0076 다음 번호부터 사용) · '공식 미공개' 단정 0건 (단정 아님 명시만) · 내부토큰 0건 · 인계 airport-world-01 파일 미수정 (읽기전용 준수) · TG India 미접촉 · 하위 worker 생성 없음 (단일 직렬).

## 핵심 판정

- **ready=false.** 좌표는 지오코더 참고값 (OSM 객체 대조 미수행, CCU 미검증) · 항공사별 터미널 미확인 · 시즌 유효기간 일부 미확인.
- **신규 확정 (이 작업):** 인도 20개 공항 좌표 지오코더 확인 (AP-EV-0077). AMD 23.07796/72.61844 · ATQ 31.70484/74.80699 · BBI 20.25459/85.81766 · BLR 13.19869/77.71633 · BOM 19.09969/72.87263 · DEL 28.55565/77.08536 · GAU 26.10511/91.58843 · GAY 24.74928/84.94392 · HYD 17.23652/78.42938 · IMF 24.76561/93.89616 · IXB 26.68463/88.32480 · IXZ 11.65006/92.73232 · JAI 26.82847/75.80601 · LKO 26.76480/80.88167 · MAA 12.98053/80.15955 · PAT 25.59492/85.09070 · PNQ 18.57834/73.90755 · SXR 34.00302/74.76298 (relevance 73, 주의) · VGA 16.52334/80.79134 (STREET 수준, 정밀도 주의) · VNS 25.44832/82.85730. 전건 FULL_ADDRESS (VGA 제외).
- **인계 확정분 유지 (재조사 없음):** TH 4개 공항 좌표 ap-my-007 AP-EV-0045 재사용 (BKK/DMK/HKT/KBV, AP-EV-0078) · in-routes.json 공항 메타데이터 20개 공항 인용 (ICAO·공식명·한글명·도시, AP-EV-0079) · ap-in-006 5개 공항(IMF/VGA/PAT/SXR/IXZ) 메타데이터 인용 (AP-EV-0080).
- **미검증:** CCU 좌표 — 지오코더 2회 조회 모두 인근 호텔 매칭만 반환, 공항 객체 미반환 → null + gaps (AP-EV-0081). 좌표 부재가 공식 미게재를 의미하지 않음.
- **시즌 7건·단종/no-direct 5건:** ap-in-001~006 확정분 인용 (FD 6노선 planned-future · 6E GAY/GAU 개시 예정 · 6E1053/1347/1054/1064 individual-date 2026-10-14 · SG VNS-BKK 주일 · XJ 겨울 주4회 · DD HYD-DMK 재개 발표 · AI 12편 current 2026-10-13 · SG DEL/BOM-HKT 중단 · SL 중단 · DD BOM-DMK 중단 · IXB-BKK 1스톱 · IMF/VGA/PAT/SXR/IXZ 직항 없음).
- gaps 11건 (좌표 4 · 터미널 2 · 시즌 4 · ICAO 1).

## 검증 내역

- completed 25개 공항 (IN 21 + TH 4) · seasons 7 · discontinued 5.
- coverage: slug="in-th-metadata" · detailPath="/th/flights/in-th-metadata" · ready=false · gapsCount=11 · verifiedCount=4 · sourceRecordId 25개.
- 원고: 해요체 · FAQ 4문항 · 타 공항 언급 없음 · 내부토큰 0건.

## 숫자

- 후보: 25개 공항 메타데이터 / 회수(인계) 전건 유지 / 독립검증(신규 확인): 2 (좌표 2건) / 페이지입력완성: 0 / 실제로컬반영: 0
- **AP-WORLD-ASIA-01 전 14단위 완료: ap-my-001~007 · ap-in-001~007.**
