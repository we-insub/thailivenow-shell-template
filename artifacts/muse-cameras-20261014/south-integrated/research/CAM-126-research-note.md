# CAM-126 조사 노트 (2026-10-13)

## 대상 (마스터 원문 기준)
- id CAM-126 / name_ko "핏코 비치짐" / name_original "FitKoh Beach Gym" / operator "FitKoh" / place "코사무이" / province 수랏타니 / scenery_type 해변 / status "offline"
- 지시와 마스터가 일치함을 확인 (불일치 없음)

## 인계 제외 판정 (뒤집지 않음)
- TLN-CAM-06-audit.json CAM-126 레코드 직접 열람:
  - audit_decision="제외"
  - audit_reason="webcamera24 Webcam offline"
- 재생 재검증·좌표 추적·권리 조사 모두 미수행 (지시 준수)

## 금일 텍스트 수준 확인 (2026-10-13)
- webcamera24 수랏타니 지역 페이지(http://webcamera24.com/countries/thailand/surat-thani/) 정상 열람
- 페이지 내 해당 항목: "FitKoh Beach Gym, Koh Samui ... Webcam offline" 표기 확인
- 인계 판정(2026-10-12)과 정합 → 제외 판정을 뒤집지 않음
- 스트림 복구 시도 없음

## 기록
- completed/CAM-126.json: status "offline", exclusion 필드(reason/decidedAt/decidedBy/sourceRecordId) 기록
- ready=false (제외 항목 — ready 요건 대상 아님)
- 인계 free=null, login_required=null → 미검증으로 기록 (추측 금지)
- '공식 미공개' 단정 0건
- 인계 파일 SHA 대조: 브리프 기재값과 3종 전부 일치 (TLN-CAM-05 `607522e8…` · audit `9bc9b339…` · master `bece6f80…`)

## 비고
- 하위 worker 미생성, CAM-126 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음
