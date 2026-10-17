# 조사 노트: CAM-309 후아힌 웹캠 (2026-10-13)

## 마스터 원문
- camera_master_20261012.json에서 직접 읽음: id CAM-309 / name_ko "후아힌 웹캠" / name_original "Hua Hin webcam" / operator "미확인 (중개: easeweather/windy)" / place "" / city "후아힌" / province "쁘라쭈압키리칸" / scenery_type "해변" / status "unverified" / url "https://www.easeweather.com" / usage_terms "약관 미확인, 외부 링크만" / free=true / login_required=false / notes "Live now 표기 (중개)". 지시와 불일치 없음.
- 인계: TLN-CAM-06-audit.json audit_decision="적용", audit_reason="원본 URL 추적 확보 (Windy 임베드)" — 실제 검증 대상.

## 조사 과정
1. Windy 임베드 플레이어(https://webcams.windy.com/webcams/public/embed/player/1667053440/day) 본문 열람 — 타이틀 "Webcam player - Cha-am › North", Source: www.mgnewman.com, 스냅샷 "Tue 15:37" + "24 hours" 타임랩스 표기.
2. easeweather 후아힌 웹캠 페이지(https://www.easeweather.com/asia/thailand/prachuap-khiri-khan/hua-hin/webcam) 본문 열람 — "Live now" 표기, 플레이어 라벨 "Hua Hin (Cha-am 21 km)", 스냅샷 images-webcams.windy.com/40/1667053440/ — Windy 1667053440과 동일 피드.
3. 원천 확인: mgnewman.com/chaamkam.php 본문 열람 — "The camera is at Thew Talay Estate in Cha Am". CAM-216(튜탈레이 에스테이트 차암, operator Mike Newman (개인), NATIONWIDE 직접 확인 회수 live-refresh, 좌표 12.7583751, 99.9694691 osm-crosschecked)과 동일 물리 카메라로 판단 → duplicate_of: CAM-216.
4. windy.com/webcams/1667053440 상세 페이지는 JS 렌더라 텍스트 미노출 — 임베드 플레이어 페이지로 대체 확인.
5. Windy 웹캠 이용약관의 재사용 조건은 확인하지 못함 → 권리 미검증.

## 판정
- duplicate_of: CAM-216 (동일 물리 카메라의 Windy/easeweather 중개본). 재생·좌표는 CAM-216 회수값 상속. ready=false (중복 항목).
- 관찰 (소유자 판단 사항): 명칭 '후아힌 웹캠'이나 실제 카메라는 차암(펫차부리). Windy 'Cha-am › North', easeweather 'Hua Hin (Cha-am 21 km)'.

## 완료 보고
- 하위 worker 미생성, CAM-309 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음.
- coverage 미생성 (부모 소유 규범). ZIP 패키징은 부모 담당.
