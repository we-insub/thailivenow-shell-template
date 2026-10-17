# CAM-004 조사 노트 (스카이라인 바오밥 / Skyline Baobab)

- 조사일: 2026-10-13 KST
- 전담: CAM-SOUTH-01 4호 단일 조사 (하위 worker 없음, 타 ID 미접촉)
- NATIONWIDE 원본 파일 수정 없음 (읽기전용 인계)

## 인계 회수 (재조사 금지)
- TLN-CAM-05-final-81.json (SHA 607522e8…f9): url https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/koh-samui-baobab.html, operator SkylineWebcams (현지 제공자 미표기), status playing-live, status_verified_at 2026-10-12 19:45~19:52 ICT, notes "Live 뱃지·라이브 진행 바, 야자잎 움직임 확인", free true, login_required false, coordinates null
- TLN-CAM-06-audit.json (SHA 9bc9b339…fa): audit_decision 적용(재생 직접 확인), preview_url "SkylineWebcams 공식 5분갱신 photogram Embed (Codex 확보)", preview_basis FAQ 'you may incorporate a photogram that updates every 5 minutes' — Embed 버튼 공식 HTML 코드
- camera_master_20261012.json (SHA bece6f80…c9): 동일 레코드

## 본 조사 신규 확인 (2026-10-13)
1. 소스: Skyline 카메라 페이지 본문 직접 열람 — "a mesmerizing view from the Baobab Restaurant" → 중개(SkylineWebcams) 확정, 실제 설치 주체는 Baobab Restaurant. Skyline은 중개이며 현지 제공자 표기 없음.
2. 좌표: Skyline 페이지 본문 38줄 전체에 숫자 좌표 없음(공식 미공개 직접 확인). OSM 실객체 대조: Overpass 미러에서 node 4676777092 "Baobab Beach Restaurant" (amenity=restaurant, cuisine=french;fish;sandwich;thai, internet_access=wlan) → 9.458286, 100.042338. cuisine=french 태그와 프렌치 레스토랑 Baobab 특성이 일치해 동일 시설로 판정. coord_class osm-crosschecked. way/relation 객체 질의는 미러 25초 타임아웃·overpass-api.de 406으로 미수행(장애 기록).
3. 주소: 바오밥 레스토랑 자체 공식 도메인 미발견. 제3자 디렉토리(grubbio·kohplanner·tripadvisor·trip.com·evendo) 일치 주소: 127/64 Moo 3, Had Lamai Rd, Maret, Ko Samui, Surat Thani 84310 (공식 게재 아님).
4. 권리: SkylineWebcams Terms of Use 직접 열람(2026-10-13, Last updated April 16th 2020) — 콘텐츠 독점 소유권 VisioRay Srl(운영 주체), 허용 이용은 열람 + 제공되는 공유 링크를 통한 공유만, 무단 복제·다운로드·추출·배포 금지, 재생산 승인 요청 이메일 info@visioray.com. FAQ(공식 URL, 검색 스니펫 + 인계 감사 기록으로 확인): 라이브 피드 임베드는 웹캠 호스트만, 일반 사이트는 5분 갱신 photogram을 Embed 버튼 HTML 코드로 삽입 가능.
5. 재생: 회수만. 금일(2026-10-13) 재확인 미수행(지시상 금지).

## 판정
- ready=false (재생=회수만·좌표=OSM 대조만(공식 미공개)·소스/권리=공식 확인)
- '공식 미공개' 단정 1건 (G-02, 공식 페이지 직접 열람으로 숫자 좌표 없음 확인)
- 장애 1건 (G-03, Overpass way 질의 타임아웃/406 — node 대조는 성공이므로 좌표 기록에는 영향 없음)
- 제약 준수: 좌표 추측 없음, 재생 재검증 없음, NATIONWIDE 파일 미수정, 코드수정·배포 없음
