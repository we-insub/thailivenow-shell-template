# CAM-119 연구 노트 (2026-10-13)

## 대상 (마스터 원문)
- id CAM-119 / name_ko "크리스탈베이 파노라마 180" / name_original "Crystal Bay Yacht Club Panoramic"
- operator "미확인" / place 라마이 / province 수랏타니 / scenery_type 해변 / status "unplayable"
- url https://youtube.com/live/LGNYKz4yziE / youtube_id LGNYKz4yziE
- master notes: "이 동영상을 더 이상 재생할 수 없습니다" / status_verified_at "2026-10-12 21:56 JST"

## 인계 제외 판정 (뒤집지 않음)
- TLN-CAM-06-audit.json CAM-119 레코드: audit_decision="제외", audit_reason="이 동영상을 더 이상 재생할 수 없습니다"
- 재생 재검증·좌표 추적·권리 조사 모두 미수행 (지시 준수)

## 금일 확인 (2026-10-13)
- 텍스트 수준 확인 시도: https://youtube.com/live/LGNYKz4yziE
- 결과: browser.open upstream fetch failed (page had no extractable content, service_status 200)
- 해석: 조회 장애. 재생 상태 확인 불가. 삭제·부재 증거로 사용하지 않음.
- 제외 판정을 뒤집지 않음. 스트림 복구 시도 없음.

## 인계 파일 SHA 대조
- TLN-CAM-05-final-81.json `607522e8efb56a8fa6644dc55b2ff42a9ee3a268b2092c104cb7b4cd6b2ab9da` (브리프 기재값과 일치)
- TLN-CAM-06-audit.json `9bc9b33957a502b156ef4e0189899f6f1a84c5e9ed009bd717af976970f31fa4` (브리프 기재값과 일치)
- camera_master_20261012.json `bece6f80b5fa32f1648fab1c719894e60e5ee1bddeca8d93301401798d74112c` (브리프 기재값과 일치)

## 산출물
- completed/CAM-119.json, completed/CAM-119-manuscript.md
- evidence/CAM-119-evidence.json (8 facts 전건 URL)
- gaps/CAM-119-gaps.json (5건, id 필드 포함 — G-04는 조회 장애로 구분 기록)
- exclusion 필드 기록: reason / decidedAt 2026-10-12 / decidedBy NATIONWIDE 감사 판정 / sourceRecordId
- ready=false (제외 항목 — ready 요건 대상 아님)
