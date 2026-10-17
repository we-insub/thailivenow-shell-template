# CAM-211 조사 노트 (주카페 코팡안 / Zoo Cafe Koh Phangan)

## 마스터 원문 (우선 적용)
- id CAM-211 / name_ko "주카페 코팡안" / name_original "Zoo Cafe Koh Phangan"
- operator "Zoo Cafe" / place "코팡안" / province 수랏타니 / scenery_type 해변 / status "unverified"
- url https://www.youtube.com/watch?v=wt3RW4_Vn9o / youtube_id wt3RW4_Vn9o
- notes: "원본 열기 실패(HTTP 429), 중개 livewebcamstream.com LIVE 24/7 주장"
- 인계 audit: audit_decision="링크만", audit_reason="무료 개별전망 페이지, 원천 미확인 — 좌표 null"
- 지시와 마스터 불일치 없음.

## 신규 확인 (2026-10-13)
1. **영상 소유 채널 특정**: YouTube oEmbed API → video wt3RW4_Vn9o의 title "🔴 Zoo Cafe · Feed the Fish LIVE!", author "Teleport.camera" (https://www.youtube.com/@Teleport.camera). 즉 원천은 Zoo Cafe가 아니라 제3자 웹캠 채널. 인계 "원천 미확인"에서 진전.
2. **재생 상태 미확인**: YouTube watch 페이지 browser.open upstream 429 (인계와 동일, 조회 장애). 재시도 금지 지시 준수. webcamtaxi 중개 페이지(https://www.webcamtaxi.com/en/thailand/surat-thani/koh-phangan-zoocafe.html) 금일 본문 열람 — 플레이어 상태 텍스트 미노출. livewebcamstream 중개 페이지(https://livewebcamstream.com/webcam/zoo-cafe-webcam-in-koh-phangan-1273) 금일 열람 — 동일 YouTube ID 임베드 확인, "LIVE 24/7"은 중개 주장.
3. **좌표 신규 확보 (geocoded)**: Nominatim "Zoo Cafe, Ko Pha Ngan" (type=restaurant) → 9.7357255, 100.0117324. 중개 페이지 기재 좌표(9.7360611786549, 100.01160034674)와 약 40m 정합. OSM 실객체 직접 대조는 Overpass 장애(406 ×2, kumi 타임아웃)로 미수행 — 조회 장애 기록.
4. **카페 실체 확인**: 제3자 디렉토리(top-rated.online)에 Zoo Cafe 실존 — 주소 108/8 Moo3, Phaeng Waterfall, Ko Pha-ngan, Surat Thani 84280, 전화 +66 84 850 6273.
5. **인계 파일 SHA 대조**: 4종 전부 브리프 기재값과 일치.

## 관찰 (판단 아님 — 소유자 판단 사항)
- 중개 페이지 설명상 이 카메라는 동물원 카페의 동물들을 비추는 화면. 해변 화면이 아님. master scenery_type='해변'과 불일치 가능. 인계 판정 '링크만'을 뒤집지 않음.

## 미검증
- 금일 재생 상태, 공식 숫자 좌표, OSM 실객체 대조(장애), 영상 재사용 조건, Zoo Cafe 공식 채널 운영 여부.

## 비고
- 하위 worker 미생성, CAM-211 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음.
- ready=false.
