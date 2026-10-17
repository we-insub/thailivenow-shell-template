# CAM-308 조사 노트 (프리덤비치 전망대 / Freedom Beach viewpoint) — 2026-10-13

## 인계 (직접 읽기)
- 마스터 (camera_master_20261012.json): id CAM-308 / name_ko "프리덤비치 전망대" / name_original "Freedom Beach viewpoint" / operator "미확인 (중개: Windy)" / place "프리덤비치" / city "파통" / province 푸껫 / scenery_type 해변 / status "unverified" / status_verified_at null / coordinates null / url "windy ID 1500120146" / notes "Windy는 주기 캡처 이미지/타임랩스 성격"
- 감사 (TLN-CAM-06-audit.json): audit_decision="적용", audit_reason="원본 URL 추적 확보 (Windy 임베드)", url="https://webcams.windy.com/webcams/public/embed/player/1500120146/day"

## 조사 과정
1. Windy 임베드 URL 직접 열람 (2026-10-13): 페이지 정상 존재. 제목 "Phuket › North-east: Phuket Ocean View Resort - Freedom Beach - Freedom Beach Viewpoint". Source 항목: "phuket-cheap-tour.ru" (URL은 잘려 표시됨 — 전체 URL 인용 불가). 최신 캡처 "Tue 16:16", 타임라인 옵션 24 hours / 30 days / 12 months / Lifetime → 카메라가 현재 촬영 중임을 시사. 플레이어 타입 /day = 일간 타임랩스.
2. Windy 공개 디렉토리 페이지 시도: https://webcams.windy.com/webcams/public/webcam/1500120146 → 404 (내가 추측한 URL 형식이라 실패 — 정정 후 재시도). https://www.windy.com/webcams/1500120146 → 200이나 JS 렌더 앱 셸이라 텍스트 추출 불가 (정보없음).
3. 임베드 페이지의 Source 아웃링크 열람 시도 → 같은 임베드 페이지로 복귀 (링크 해석 불가). Source 표기 텍스트만 근거로 사용.
4. Windy 웹캠 약관 원문 열람 (https://account.windy.com/agreements/windy-webcams-terms-of-use, 2023-09-01 개정): Webcam User 무료 이용 / Transmitted Content는 Webcam Operator의 재산 / 제3자 재배포 금지 / 내부 목적 외 사용·부가가치 서비스 생성 금지.
5. 리조트 주소 확인: 제3자 4종(top-rated.online·traveltriangle·tripadvisor.in·dinogo)에서 "5 Sirirat Rd, Pa Tong, Kathu District, Phuket 83150, Thailand" 일치 확인.
6. map.geocode: "Phuket Ocean View Resort, 5 Sirirat Road, Patong, Phuket" → 7.88039, 98.29364 (FULL_ADDRESS 매치). 카메라 설치 위치(리조트) 기준 지오코딩 — 프리덤비치 자체 좌표가 아님을 명시.
7. 실제 스트림 재생 시도 없음 (지시 준수). 텍스트 도구 한계 → 부모 라이브 브라우저 단계로 이관.

## 판정
- 임베드 실존 확인 + 촬영 중 정황 확인. 재생(실제 스트림)·공식 운영자·공식 좌표는 미검증 → ready=false.
- 권리: 약관 원문 확인 — 재배포 금지 명시. 임베드 플레이어 공식 게재 허용 범위는 미확인 (gaps G-04).
- '공식 미공개' 단정 0건. 조회 장애 0건 (404는 내 URL 추측 실패 — 정정 후 정상 접근).
