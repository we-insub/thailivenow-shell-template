# CAM-008 조사 노트 (2026-10-13 KST)

## 지시문 불일치
- 지시: "스카이라인 코코팜 트로피칼 리조트"
- 실제 기록 (인계 마스터·TLN-CAM-05-final-81·WORK-BRIEF 전부 일치): **크리스탈베이 비치리조트 (Crystal Bay Beach Resort)**, 운영자 The Real Samui Webcam
- 실제 기록 기준으로 조사. CAM-001(크리스탈베이 요트클럽 라마이)과 같은 운영자·같은 만.

## 확인 경로
1. 인계 마스터 camera_master_20261012.json#CAM-008: url https://youtube.com/live/Fw9hgttWzIg, youtube_id Fw9hgttWzIg, status playing-live, status_verified_at 2026-10-12 21:56 JST, notes "🔴 표시, 현재 44명 시청 중, 15초간 시크바 전진 확인. CAM-001과 다른 앵글"
2. 웹 검색 (2026-10-13): 운영자 채널의 파노라마 스트림 설명란에 "Crystal Bay Beach Resort Main Webcam (2160p 4K Ultra HD) ► https://youtube.com/live/Fw9hgttWzIg" 직접 표기 → 운영자 직영 확정, 중개 아님
3. 공식 사이트 https://crystalbaysamui.com/ 직접 열람 (2026-10-13): "Three distinct properties on one of Koh Samui's most beautiful bays." — Yacht Club / Beach Club / Beach Resort 3개가 Silver Beach 같은 만에 위치. Beach Resort 소개: "Boutique beachfront on Koh Samui's finest sand", 25 rooms, "European managed since 2010"
4. beachclub 페이지 직접 열람 (2026-10-13): 위치 "Silver Beach (Haad Thongtakian), south-east coast of Koh Samui, between Chaweng and Lamai." / Google Maps 임베드 좌표 9.4768298, 100.0677498 = Beach Club용 (리조트 좌표로 사용 불가)
5. 지오코더 (map.geocode, 2026-10-13): 'Crystal Bay Beach Resort Koh Samui' → FULL_ADDRESS 사업체 매칭 "คริสตัล เบย์ บีช รีสอร์ท", 4169 Maret, Ko Samui, Surat Thani 84310 → 9.47834, 100.06598 (relevance 97). 동시 반환된 "คริสตัล เบย์ ยอชท์ คลับ" → 9.47648, 100.06762 = 인계값과 정확 일치 → 인계값은 Yacht Club의 geocode 값이었음
6. CAM-001 evidence 회수: 동일 운영자 채널 설명란 "Duplication or distribution of our videos is strictly prohibited without permission." / 자매 캠 목록에 youtube.com/live/Fw9hgttWzIg (beach resort) 포함 / 공식 시설 사이트 crystalbaysamui.com

## 실패/장애
- YouTube 라이브 페이지 직접 열람 실패: browser.open upstream_fetch_failed (2026-10-13) — 조회 장애로 기록
- OSM 실객체 대조 미수행 (CAM-001 조사에서 Nominatim 5종 쿼리 객체 없음 기록 회수)

## 판정
- 소스: 직영 (The Real Samui Webcam) — 공식 확인
- 좌표: geocoded (사업체 주소 매칭, 공식·OSM 아님) — 인계값 정정
- 권리: 운영자 공식 문구 (복제·배포 금지, 링크만)
- 재생: NATIONWIDE 직접 확인 회수 (playing-live)
- ready=false (재생 금일 미확인 + 좌표 비공식)
