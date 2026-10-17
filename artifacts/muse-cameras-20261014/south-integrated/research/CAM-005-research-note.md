# CAM-005 조사 노트 (스카이라인 반얀트리 라마이베이)

- 작업일: 2026-10-13 KST / 실행자: 5fc6573e (단독, 하위 worker 없음)
- 대상: CAM-005 | 수랏타니 | 코사무이 | 라마이 | 해변 | status playing-live (인계 회수)

## 인계 스냅샷 (재조사 금지 — 미확인 필드만 보완)
- TLN-CAM-05-final-81.json: SkylineWebcams 중개, url=skylinewebcams.com/webcam/thailand/surat-thani/ko-samui/lamai-banyan-tree-samui.html, status playing-live (verified 2026-10-12 19:45~19:52 ICT, notes "Live 뱃지, 수면 조명 반사 변화 확인"), free true, login false, coord None, usage_terms "약관 미확인"
- TLN-CAM-06-audit.json: audit_decision 적용 (재생 직접 확인), preview_basis Skyline FAQ 5분 갱신 photogram Embed
- camera_master_20261012.json: 위와 동일 필드셋

## 수행한 보완 조사
1. Skyline 공식 카메라 페이지 본문 전체 직접 열람 (/en/webcam/.../lamai-banyan-tree-samui.html, 34줄)
   - 중개 확정. 제목에만 "Banyan Tree Samui" 표기, 본문에는 설치 주체 명시 없음 (CAM-004의 Baobab 페이지 "a mesmerizing view from the Baobab Restaurant" 명시와 대비)
   - 카메라가 바라보는 장면 = 라마이 베이 파노라마 뷰 (본문)
   - 본문에 숫자 좌표 없음 → 공식 미공개 (직접 확인)
2. 원천 운영자 공식 페이지 발견·열람: https://www.banyantree.com/thailand/samui/resort-live-cam
   - Banyan Tree Hotels and Resorts 공식 사이트 "Resort Live Cam" 페이지 — "Your very own eagle eye in the sky overlooking Banyan Tree Samui" + "Click to View"
   - 실제 재생(Click to View) 확인은 미수행 → G-05
3. OSM 실객체 대조
   - Overpass 미러 4곳 전부 장애: overpass-api.de GET/POST 406 · overpass.kumi.systems 타임아웃 · overpass.private.coffee 타임아웃 · overpass.nchc.org.tw 빈 응답 (G-04 장애 기록)
   - Nominatim OSM 객체 조회로 way 528060226 "Banyan Tree Samui" 확인 → 9.4728522, 100.0693285 (display_name에 Ko Samui/Surat Thani 84310 포함)
   - coord_class osm-crosschecked. way 태그 대조는 미수행(장애)
4. 권리: 지시상 재확인 불필요 → CAM-004 worker의 2026-10-13 SkylineWebcams Terms of Use·FAQ 직접 열람 기록 회수
   - VisioRay Srl 독점 소유권, 열람+공유 링크 공유만 허용, 무단 복제·다운로드·추출·배포 금지, 승인 요청 info@visioray.com
   - 라이브 피드 임베드는 웹캠 호스트만, 일반 사이트는 5분 갱신 photogram Embed HTML 코드
5. 재생 상태: NATIONWIDE 직접 확인 회수 (지시상 재검증 금지). 금일 미확인 → G-01

## 판정
- ready=false: 재생 금일 미확인(회수)·좌표 official 아님·설치 주체 본문 미명시·권리는 회수
- 완료 산출물 4종 저장 완료 (completed/CAM-005.json · CAM-005-manuscript.md · evidence/CAM-005-evidence.json · gaps/CAM-005-gaps.json)
- ZIP 패키징은 부모 담당
