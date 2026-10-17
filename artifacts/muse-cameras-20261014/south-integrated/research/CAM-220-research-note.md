# CAM-220 조사 노트 (방락 비치 / Bang Rak Beach)

## 인계 상태
- TLN-CAM-06-audit.json: audit_decision="링크만", audit_reason="무료 개별전망 페이지, 원천 미확인 — 좌표 null"
- 마스터: id CAM-220 / name_ko "방락 비치 (웹캠익스플로어)" / name_original "Bang Rak Beach" / operator "미확인 (중개: webcamexplore)" / place "방락" / province "수랏타니" / scenery_type "해변" / status "unverified" / youtube_id "wexvqk5oqks" / notes "임베드 YT wexvqk5oqks, 원천 불명"

## 조사 결과 (2026-10-13)

### 1. 중개 페이지 확인
- webcamexplore 방락 비치 페이지 실존 확인:
  https://www.webcamexplore.com/countries/thailand/trat/ban-hat-sai-khao/koh-samui-bang-rak-beach-live-webcam-thailand-sunset-views
- YouTube wexvqk5oqks 임베드 확인 (인계 youtube_id와 일치)
- 페이지에 시간(4:02 PM)·기온(32°C)·일출(6:00 AM)·일몰(5:53 PM) 표기 — 라이브 형식으로 제시
- 원천 제공자 표기 없음
- 참고: URL 경로에 "trat/ban-hat-sai-khao"가 포함되나 본문은 코사무이 방락 비치를 설명 (사이트 분류 체계의 특이점, 판단 보류)

### 2. 재생 상태
- YouTube 원본 페이지(https://www.youtube.com/watch?v=wexvqk5oqks): browser.open upstream 429 — 조회 장애 (재시도 금지 지시 준수)
- YouTube oEmbed API: HTTP 403 Forbidden — 조회 장애
- webcamexplore 페이지의 플레이어 실제 재생 상태는 텍스트에 노출되지 않음
- → 재생 미확인. 부모 라이브 브라우저 단계로 이관.

### 3. 원천 (영상 소유자)
- 미확인. YouTube 페이지 열람 실패 및 oEmbed 403으로 채널명 확인 불가.
- webcamexplore 페이지에 원천 제공자 표기 없음.

### 4. 좌표
- Nominatim "Bang Rak, Ko Samui" → 9.5562162, 100.0542731 (type=village, บ้านบางรักษ์)
- 해변 자체의 지오코더 결과 없음. 태국어 "หาดบางรักษ์" 검색 시 병원만 반환 (무관).
- OSM 실객체(natural=beach) 대조: Overpass API 장애 (overpass-api.de 빈 응답, overpass.kumi.systems 파싱 실패)
- → 마을 좌표를 geocoded로 기록 (해변 자체 아님 명시). 공식 숫자 좌표 미게재.

### 5. 권리
- 미검증. 인계 usage_terms="약관 미확인".
- webcamexplore 이용약관 페이지 미발견 (검색 결과 없음).
- 영상 소유자 미확인으로 원천 약관 확인 불가.
- '공식 미공개' 단정 안 함.

### 6. 무료·로그인
- 인계 free=true, login_required=false 회수.

## 판정
- ready=false (재생 미확인·원천 미확인·좌표는 마을 지오코더·권리 미검증)
- 인계 판정 '링크만'을 뒤집지 않음 (실제 검증으로 진전: 중개 페이지 실존 확인, 좌표 부분 확보)

## 완료 보고용 실측값
(파일 저장 후 계산, 아래 보고에 기재)
