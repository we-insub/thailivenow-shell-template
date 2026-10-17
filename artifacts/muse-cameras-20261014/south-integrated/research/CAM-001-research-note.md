# CAM-001 조사 노트 (2026-10-13 10:35 KST)

## 대상
CAM-001 크리스탈베이 요트클럽 라마이 — YouTube https://www.youtube.com/watch?v=3N3ZwIB_X4Y, 운영자 The Real Samui Webcam

## 시도한 URL 및 결과

1. https://www.youtube.com/watch?v=3N3ZwIB_X4Y — 성공. 제목 "🔴 LIVE Crystal Bay Yacht Club Lamai | Koh Samui Beach Webcam | Thailand 24/7 | 2160p 4K" 유지 확인. 설명란에서 24/7 실시간 표방, 촬영 위치(크리스탈베이 남단·라마이·코사무이), 현지 일몰 약 18:30, 복제·배포 금지 문구, Patreon/Facebook/Posts Page/이메일 연락처, 자매 카메라 3종 링크(LGNYKz4yziE 파노라마·Fw9hgttWzIg 비치리조트·NTTtqzL5OWI 비치리조트 파노라마) 확인. "Stay here" 링크로 https://crystalbaysamui.com/yachtclub... 표기(크롤에서 잘림 — 경로 창작하지 않음).
2. https://crystalbaysamui.com/ — 성공(금일 직접 열람). Crystal Bay Samui 공식 사이트로 Yacht Club/Beach Club/Beach Resort 3개 프로퍼티 소개. Yacht Club: 언덕 위 풀빌라·오션뷰, 14,000㎡ 열대 정원, 43개 방갈로, 타이 마사지·스파, 걸프 전망 대형 풀.
3. https://crystalbaysamui.com/room/yacht-club-two-bedroom-superior-villa/ — 검색 결과 스니펫으로 확인(직접 열람 아님). Yacht Club 공식 주소 "209/1 Moo 4, Maret (Lamai), Ko Samui 84310, Thailand" 게재. 좌표는 없음.
4. https://www.youtube.com/@TheRealSamuiWebcam — 인계 자료의 운영자 채널 URL(재조사 아님, 인계 유지).
5. Nominatim API 5종 쿼리(Crystal Bay Yacht Club / Crystal Bay Beach Resort / Haad Thongtakian / Silver Beach / Tong Takian Beach + Koh Samui) — 전부 0건. OSM 실객체 없음. way/node ID 기록 불가.
6. map.geocode "Crystal Bay Yacht Club" — 프로바이더 보간 결과(9.47648, 100.06762, 태국어 전체주소 매칭) 반환. OSM 객체가 아니고 보간값이므로 좌표로 채택하지 않음(추측 금지 규범).
7. geocam.ru 중개 페이지 — 임베드 ID가 5FNI26lPfgE로 원천 영상 ID(3N3ZwIB_X4Y)와 다름. 중개 불일치이므로 원천만 사용, 중개값 무시.

## 판단 근거
- 재생: 금일 텍스트 확인에서 LIVE 표방 유지. 실제 재생은 텍스트 도구로 확정 불가 → 부모 라이브 브라우저 단계로 이관. 인계에 2026-10-12 실제 라이브 확인 기록이 있어 상태값은 playing-live 유지.
- 소스: 운영자 직영(YouTube 채널 직접 송출) — 중개 아님. 독립 공식 카메라 페이지는 없음. 시설 공식 사이트 crystalbaysamui.com 확인.
- 좌표: 공식 좌표 미게재 + OSM 실객체 없음 → 인계 근사값(9.47205, 100.04834) 유지, coord_class=approximate, 미검증.
- 권리: 운영자 설명란의 복제·배포 금지 문구 = 공식 확인. 독립 약관 페이지는 미발견(미검증, "공식 미공개" 단정 아님).
- ready=false: 재생 실제확인·좌표·독립약관 3건 미달.

## 미접촉
- 다른 62건 ID, 범위 밖 18건, NATIONWIDE 원본 파일 — 전부 미접촉.
- 코드수정·배포 없음.
