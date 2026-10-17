# CAM-303 조사 노트 (탱고 비치 리조트) — 2026-10-13 KST

## 대상
- id CAM-303 / name_ko "탱고 비치 리조트" / name_original "Tango Beach Resort Chaweng"
- operator "미확인 (중개: geocam.ru)" / place "차웽" / city "코사무이" / province "수랏타니"
- scenery_type "해변" / status "ended" (status_verified_at "2026-10-12 22:08~22:11 JST")
- url https://www.youtube.com/watch?v=yjjGE5Nq7AE / youtube_id "yjjGE5Nq7AE"
- usage_terms "약관 미확인, 외부 링크만" / free=true / login_required=false / coordinates null

## 인계 제외 판정 (뒤집지 않음)
- TLN-CAM-06-audit.json CAM-303 레코드: audit_decision="제외", audit_reason="이 동영상을 더 이상 재생할 수 없습니다 (삭제/비공개)"
- 지시 준수: 재생 재검증·좌표 추적·권리 조사 미수행.

## 금일 텍스트 수준 확인 시도 (2026-10-13)
- YouTube 페이지(https://www.youtube.com/watch?v=yjjGE5Nq7AE) browser.open 실패 — upstream HTTP 429, 3회 시도 후 중단.
- **조회 장애로 기록** (페이지 존재 여부·현재 재생 상태 단정 불가). 재시도 금지 지시 준수.
- 인계 제외 판정(삭제/비공개, 2026-10-12 직접 확인)은 뒤집지 않음. 스트림 복구 시도 없음.

## 마스터 원문 대조
- 지시의 이름·운영자·상태·scenery_type("해변")와 마스터가 일치함을 dispatch 전 직접 읽기에서 확인. 불일치 없음.

## 인계 파일 SHA 대조
- TLN-CAM-05-final-81.json SHA 607522e8efb56a8fa6644dc55b2ff42a9ee3a268b2092c104cb7b4cd6b2ab9da — 브리프 기재값과 일치
- TLN-CAM-06-audit.json SHA 9bc9b33957a502b156ef4e0189899f6f1a84c5e9ed009bd717af976970f31fa4 — 브리프 기재값과 일치
- camera_master_20261012.json SHA bece6f80b5fa32f1648fab1c719894e60e5ee1bddeca8d93301401798d74112c — 브리프 기재값과 일치

## 미검증 항목
- 좌표 / 영상 재사용 조건 / 원천 운영자 / 미리보기 URL — 전부 "제외 항목이므로 추가 조사 미수행" (정보없음).
- 금일 재생 — 조회 장애 (upstream 429), 인계 제외 판정 유지.
- '공식 미공개' 단정 0건.

## 비고
- 하위 worker 미생성, CAM-303 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음.
- ZIP 패키징은 부모 담당.
