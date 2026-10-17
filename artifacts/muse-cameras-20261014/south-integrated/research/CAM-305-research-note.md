# CAM-305 조사 노트 (TAT 푸껫 공식 라이브)

## 작업 유형
인계 제외 판정 확정 기록 (뒤집지 않음).

## 마스터 원문 (camera_master_20261012.json에서 직접 읽음)
- id CAM-305 / name_ko "TAT 푸껫 공식 라이브" / name_original "TAT PHUKET OFFICIAL Live Stream"
- operator "TAT Phuket Office" / province 푸껫 / city 푸껫 / place "" (빈값)
- scenery_type "미확인" (마스터 원문 — 지시와 불일치 없음)
- status "ended" / status_verified_at "2026-10-12 22:08~22:11 JST"
- url https://www.youtube.com/watch?v=EROBaqHfOY0 / youtube_id "EROBaqHfOY0"
- usage_terms "약관 미확인, 외부 링크만" / free=true / login_required=false
- coordinates null
- notes "58분 8초 VOD (1개월 전). 실제 장면은 야간 콘서트 — 풍경 아님"

## 인계 제외 판정 (TLN-CAM-06-audit.json)
- audit_decision="제외"
- audit_reason="58분 8초 VOD (1개월 전). 실제 장면은 야간 콘서트 — 풍경 아님"
- 판정 유지. 재생 재검증·좌표 추적·권리 조사 미수행 (지시 준수).

## 금일 텍스트 수준 확인 (2026-10-13)
- YouTube 페이지(https://www.youtube.com/watch?v=EROBaqHfOY0) 정상 존재 확인.
- 타이틀 "TAT PHUKET OFFICIAL Live Stream" 확인, 설명란은 비어 있음.
- 페이지 텍스트에 현재 재생 상태(LIVE/VOD 종료)는 노출되지 않음.
- 인계 제외 판정(2026-10-12 직접 확인: VOD, 야간 콘서트 — 풍경 아님)과 정합 → 제외 판정을 뒤집지 않음.
- 스트림 복구 시도 없음.

## 판정
- status "ended", exclusion 필드 기록, ready=false (제외 항목 — ready 요건 대상 아님).
- '공식 미공개' 단정 0건. 좌표·권리 등 5건은 제외 항목이라 미조사 (정보없음).
- slug "cam-305-tat-phuket-live", detailPath "/th/cameras/cam-305-tat-phuket-live".
- 인계 파일 SHA 대조: 브리프 기재값과 3종 전부 일치 (TLN-CAM-05 `607522e8…` · audit `9bc9b339…` · master `bece6f80…`).

## 비고
- 하위 worker 미생성, CAM-305 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음.
- ZIP 패키징은 부모 담당.
