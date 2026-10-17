# CAM-314 조사 노트 (2026-10-13) — 하트란 코란타 / HAT LANT, Koh-Lanta Live Cam

## 인계
- camera_master_20261012.json: id CAM-314 / name_ko "하트란 코란타" / name_original "HAT LANT, Koh-Lanta Live Cam" / operator "미확인 (중개: webcamera24)" / place "하트란" / city "코란타" / province "끄라비" / scenery_type "해변" / status "unverified" / status_verified_at null / free=true / login_required=false / usage_terms "약관 미확인, 외부 링크만" / coordinates null / url http://webcamera24.com/camera/thailand/7201-hat-lant-ko-lanta/ / notes "webcamera24 online 표방이나 갱신 2023-08-15 (3년 묵음)"
- TLN-CAM-06-audit.json: audit_decision="링크만", audit_reason="무료 개별전망 페이지, 원천 미확인 — 좌표 null"
- 지시와 마스터 불일치 없음. 인계 파일 SHA 3종 모두 브리프 기재값과 일치 (TLN-CAM-05 607522e8… · audit 9bc9b339… · master bece6f80…)

## 조사 (2026-10-13, 텍스트 수준)
1. webcamera24 카메라 페이지 정상 열람 (88줄). 타이틀 "HAT LANT, Koh-Lanta Live Cam". Status "Webcam online" 표방, 그러나 Broadcast last updated 15.08.2023 / Webcam last checked 15.08.2023 → 3년 묵음. 마스터 notes와 정합. 실제 스트림 재생 시도는 지시상 미수행.
2. 페이지 본문: 위치 "Krabi, Thailand", Timezone GMT+07:00, Tags "Sea views". 원천 제공자 표기 없음 → 소스는 중개(webcamera24)로만 확정, 원천 미확인.
3. 좌표: 페이지 본문에 공식 숫자 좌표 미게재. 'Webcam HAT LANT, Koh-Lanta on the map' 섹션은 있으나 텍스트에서 좌표 추출 불가. 인근 웹캠 거리 목록(Avani Ao Nang Cliff Krabi Resort 56.3 km 등)으로 내부 좌표 존재는 추정되나 노출되지 않음.
4. 지오코더 2건 모두 정확히 "HAT LANT"와 일치하지 않음:
   - "Hat Lant, Koh Lanta, Krabi, Thailand" → ลันตาคุช (7.50024, 99.06906, relevance 83)
   - "หาดลันตา, เกาะลันตา, กระบี่" → ลันตาคลองนิน (7.53392, 99.05016, relevance 96)
   → 추측 금지 규범상 coordinates는 null 유지. OSM 실객체 직접 대조는 텍스트 도구 한계로 미수행.
5. 권리: webcamera24 약관(https://webcamera24.com/terms/) 원문 열람. 지적재산권 보유·개인 이용 허용·재배포/복제/재판매 금지 확인 → 부분확인. 임베드/프레임 직접 게재 허용 범위는 약관 미기재.

## 판단
- ready=false. 재생·소스(원천)·좌표·권리(게재 조건) 전부 공식 확인 미달.
- 재생 미확인 → 부모 라이브 브라우저 단계로 이관.
- '공식 미공개' 단정 0건. 조회 장애 0건 (전부 정보없음).
- 하위 worker 미생성, CAM-314 외 ID 미접촉, 인계 원본 파일 무수정, 코드수정·배포 없음.
