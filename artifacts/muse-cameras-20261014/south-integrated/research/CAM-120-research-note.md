# CAM-120 조사 노트 (2026-10-13)

## 대상
- id CAM-120 / name_ko "크리스탈베이 파노라마 (삭제)" / name_original "Crystal Bay Beach Resort Panoramic"
- operator "미확인" / place "라마이" / province 수랏타니 / scenery_type 해변 / status "deleted"
- 마스터 원문 우선 적용: 지시의 이름·운영자·상태와 마스터 일치 확인 (불일치 없음)

## 인계 판정
- TLN-CAM-06-audit.json CAM-120 레코드: audit_decision="제외", audit_reason="업로더가 삭제한 동영상"
- 마스터 status="deleted", status_verified_at="2026-10-12 21:56 JST", notes="업로더가 삭제한 동영상"
- → 제외 판정을 뒤집지 않음. 재생 재검증·좌표 추적·권리 조사 미수행.

## 금일 텍스트 수준 확인 (2026-10-13)
- https://youtube.com/live/NTTtqzL5OWI 텍스트 열람 (browser.open)
- 본문 2줄: "# YouTube" / "This video isn't available anymore"
- 인계 판정(업로더가 삭제한 동영상)과 정합 → 제외 판정을 뒤집지 않음. 스트림 복구 시도 없음.

## 인계 파일 SHA 대조
- TLN-CAM-05-final-81.json: 607522e8efb56a8fa6644dc55b2ff42a9ee3a268b2092c104cb7b4cd6b2ab9da (일치)
- TLN-CAM-06-audit.json: 9bc9b33957a502b156ef4e0189899f6f1a84c5e9ed009bd717af976970f31fa4 (일치)
- camera_master_20261012.json: bece6f80b5fa32f1648fab1c719894e60e5ee1bddeca8d93301401798d74112c (일치)

## 규범 준수
- '공식 미공개' 단정 0건 (제외 항목이므로 약관 미조사는 미검증으로 기록)
- free/login_required=null → 미검증으로 기록 (추측 금지)
- NATIONWIDE 원본 파일 수정 없음. 코드수정·배포 없음.
- 하위 worker 미생성, CAM-120 이외 ID 미접촉.

## 미검증 항목 5건
- G-01 좌표 (정보없음) / G-02 영상 재사용 조건 (정보없음) / G-03 원천 운영자 (정보없음) / G-04 금일 재생 (정보없음 — 페이지 존재 확인만, 삭제 상태와 정합) / G-05 미리보기 URL (정보없음)
