# CAM-212 조사 노트 — 차우앗 강 (Cha-Uat River)

- 조사일: 2026-10-13 (KST)
- 마스터 원문: id CAM-212 / name_ko "차우앗 강" / name_original "Cha-Uat River" / operator "미확인 (중개: webcamera24)" / place "차우앗" / province 나콘시탐마랏 / scenery_type **강** (마스터 원문. 지시 브리프에 '해변' 표기가 있었으나 마스터 원문을 따름) / status "unverified" / notes "하천 모니터링 경계" / coordinates null
- 인계: TLN-CAM-06-audit.json audit_decision="링크만", audit_reason="무료 개별전망 페이지, 원천 미확인 — 좌표 null"

## 확인 내용

1. **중개 페이지 직접 열람 (2026-10-13)**: https://webcamera24.com/camera/thailand/7213-nakhonsithammarat/ — 본문 87줄. 타이틀 "Cha-Uat River Live Cam", Tags: Rivers, Timezone GMT+07:00, 본문 "The Live Cam shows Cha-Uat River in real time. It is located in Nakhon Si Thammarat, Thailand." — 중개 확정. 원천 제공자 표기 없음.
   - 마스터 url(http://webcamera24.com/countries/thailand/)은 국가 목록 페이지(일반)이고, audit url이 개별 카메라 페이지. 본 조사에서는 개별 카메라 페이지를 기준으로 검증.
2. **재생**: 페이지 표기 "Status: Webcam online"이나, "Broadcast last updated: 15.08.2023"·"Webcam last checked: 15.08.2023" — 3년 이상 경과한 staleness 관찰. 실제 영상 재생은 텍스트 도구 한계로 확인 불가 → 부모 라이브 브라우저 단계로 이관.
3. **제3자 단서 (미채택)**:
   - ht.uastreaming.net "Nakhon Si Thammarat, Cha Uat - Live webcams": "Not working. Last success test 04.01.2024 11:02:09." — 제3자 주장, 검증 아님.
   - foxmonitor "Watch online live IP camera in Cha-Uat": Defeway 제조사, GPS 7.967730, 99.999850 — "Online CCTV camera location is approximate" 표기. webcamera24의 Cha-Uat River 카메라와 동일 카메라 확인 불가 → 좌표로 채택 안 함.
4. **좌표**: null 유지 (미검증). webcamera24 페이지 "on the map" 섹션에 텍스트 좌표 미노출.
5. **권리**: 미검증. 인계 "약관 미확인". webcamera24 약관 페이지 추측 URL(https://webcamera24.com/terms-of-use/)은 HTTP 404 — 공식 약관 미확인. '공식 미공개' 단정 안 함.
6. **화면 범위 관찰 (판단 아님)**: 강 모니터링 성격 (Tags Rivers + 마스터 notes "하천 모니터링 경계" + scenery_type 강). 해변 카메라가 아닐 가능성 — 관광 해변 카메라 포함 여부는 소유자 판단 사항. 인계 판정 '링크만'을 뒤집지 않음.
7. **무료·로그인**: 인계 free=true, login_required=false 회수.

## 미검증 항목

- G-01 금일 재생 (정보없음 — staleness 관찰, 부모 라이브 브라우저 단계로 이관)
- G-02 카메라 설치 지점 좌표 (정보없음)
- G-03 영상 재사용 조건 (정보없음)
- G-04 원천 제공자 (정보없음)
- G-05 화면 범위 판단 (소유자 판단 대기)

## 판정

- ready=false. 재생 미확인·소스 중개(원천 미확인)·좌표 null·권리 미검증 + 화면 범위(강) 판단 대기.
- '공식 미공개' 단정 0건.
- 인계 파일 SHA 대조: 브리프 기재값과 3종 전부 일치 (TLN-CAM-05 607522e8… · audit 9bc9b339… · master bece6f80…).
