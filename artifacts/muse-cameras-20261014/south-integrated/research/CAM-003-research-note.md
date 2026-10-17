# CAM-003 조사 노트 (푸껫101 파통타워, 푸껫/파통, 도시·해변 전망)

- 조사일: 2026-10-13 KST (worker f0b0d174, 하위 worker 없음, CAM-003만 처리)
- 인계 자료 (읽기전용, 재조사 금지):
  - TLN-CAM-05-final-81.json (SHA 607522e8efb56a8fa6644dc55b2ff42a9ee3a268b2092c104cb7b4cd6b2ab9da): CAM-003 레코드 — status playing-live, verified 2026-10-12 19:45~19:52 ICT, notes "DVR 플레이어 LIVE 뱃지, 카메라 타임스탬프 12초 전진 확인", url https://www.phuket101.net/phuket-webcams/, operator "Phuket 101 (Willy Thuan)", usage_terms "링크 허용 확인 (푸터: However, linking to the blog is welcomed. 이미지/텍스트 무단 사용은 금지)", free true, login_required false, coordinates null
  - TLN-CAM-06-audit.json (SHA 9bc9b33957a502b156ef4e0189899f6f1a84c5e9ed009bd717af976970f31fa4): audit_decision "적용", audit_reason "재생 직접 확인"
  - camera_master_20261012.json (SHA bece6f80b5fa32f1648fab1c719894e60e5ee1bddeca8d93301401798d74112c): 동일 레코드
  - candidates_south.md (SHA 11a99f656bfa1e11f1692da398303c801487adb3eed17bc885ff32244aac1919): 남부 탐색 기록
- 재생 상태: NATIONWIDE 직접 확인 회수 (지시상 재검증 금지) — playing-live

## 신규 확인 (2026-10-13, browser.open 텍스트 열람)
1. 공식 웹캠 페이지 https://www.phuket101.net/phuket-webcams/ 직접 열람:
   - 웹캠은 파통타워(Patong Tower) 상단에서 파통 비치 파노라마 촬영 ("panoramic view of Patong Beach from the top of the Patong Tower")
   - 카메라 위치: 15층, 서쪽 파통 방향 ("on the 15th floor, facing west over Patong")
   - 운영자 소개: 타워는 섬에서 가장 높은 건물 중 하나 ("one of the tallest buildings on the island") — 운영자 주장
   - 운영자 권장 시청 시간: 일출 6:30경·일몰 18:00~18:45, 우기(5~10월) 스톰 접근 확인 — 운영자 안내 기준
   - 사업자 표기: Business: Phuket 101 / Phuket One Co., Ltd. — 연락처 블록 주소 "97, Moo 1, Phra-Phuket-Kaew Road, Kathu, Phuket 83120" (사업자 연락처, 시설 주소 아님)
2. 홈페이지 https://phuket101.net/ 직접 열람: 운영자 Willy Thuan, 1994년부터 푸껫 거주 표기 — 운영자 실체 정합

## 소스 판정
- 원천 (운영자 직영, 중개 아님): 공식 도메인(phuket101.net) 웹캠 페이지에 직접 게재, 운영자 본인 촬영지로 15층 안내
- source_official_url = https://www.phuket101.net/phuket-webcams/ (url과 동일)

## 좌표
- 공식 미공개: 공식 페이지 본문 전체 열람에서 숫자 좌표 없음 (직접 확인) → G-01 공식 미공개
- OSM 실객체 대조: Overpass 본서버 406 Not Acceptable, 미러(overpass.kumi.systems) 25초 타임아웃 → G-02 장애
- map.geocode "Patong Tower, Patong Beach, Phuket": 시설 객체 없음 (Bearpacker Patong Hostel·Patong Beach Sign만 반환) → 미발견(정보없음)
- coordinates null 유지, 좌표 추측 금지

## 권리
- 인계 회수: 공식 푸터 "However, linking to the blog is welcomed." / 이미지·텍스트 무단 사용 금지
- 웹캠 영상 스트림 자체의 재사용/임베드 조건은 공식 미게재 → G-04 미검증

## ready 판정
- ready=false: 재생은 회수만(금일 미확인), 좌표 공식 미공개, 영상 재사용 조건 미검증
- 소스(원천)는 공식 확인 완료, 사이트 전체 재사용 조건은 공식 확인(인계 회수)

## 산출물
- completed/CAM-003.json
- completed/CAM-003-manuscript.md
- evidence/CAM-003-evidence.json (12 facts)
- gaps/CAM-003-gaps.json (5건: 정보없음 4·장애 1, '공식 미공개' 단정 1)
- research/CAM-003-research-note.md (본 파일)

## 후속 후보 (부모 판단)
- 라이브 브라우저로 금일 재생 상태 직접 확인 (현재는 지시상 재검증 금지)
- OSM 조회 채널 복구 시 Patong Tower 실객체 대조
- 운영자에게 영상 재사용/임베드 조건 문의 (공식 미게재)
