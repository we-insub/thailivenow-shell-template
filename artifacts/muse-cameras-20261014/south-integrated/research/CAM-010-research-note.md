# CAM-010 조사 노트 (2026-10-13 KST)

## 대상
- CAM-010 / 스카이라인 카오락 / Live Cam Khao Lak / 팡아 카오락 / SkylineWebcams 중개 페이지
- URL: https://www.skylinewebcams.com/webcam/thailand/phang-nga/khao-lak/khao-lak.html

## 인계 기록 정리
- TLN-CAM-06-audit.json CAM-010 레코드: audit_decision="제외"
  - audit_reason="라이브 브라우저 실제 재생 확인 (시계 전진·시청자 수 표시) | 시내 거리 화면 — 사용자 제외 범위로 목록에서 제외 (2026-10-12 정정)"
- camera_master_20261012.json CAM-010 레코드: category="제외", status="excluded-street", status_verified_at="2026-10-12 21:55~21:58 JST"
  - operator="미확인", operator_channel_url=null, coordinates=null, coord_class=null
  - free=true, login_required=false, usage_terms="약관 미확인, 외부 링크만", youtube_id=null
- 인계 파일 SHA (브리프 기재값과 대조, 일치 확인):
  - TLN-CAM-05-final-81.json: 607522e8efb56a8fa6644dc55b2ff42a9ee3a268b2092c104cb7b4cd6b2ab9da
  - TLN-CAM-06-audit.json: 9bc9b33957a502b156ef4e0189899f6f1a84c5e9ed009bd717af976970f31fa4
  - camera_master_20261012.json: bece6f80b5fa32f1648fab1c719894e60e5ee1bddeca8d93301401798d74112c

## 작업 내용
- 제외 판정을 뒤집지 않음 (지시 준수). 재생 재검증·좌표 추적·권리 조사를 수행하지 않음.
- 인계 제외 사유를 completed JSON의 exclusion 필드로 확정 기록.
- 원고는 제외 안내(해요체)로 작성 — 왜 제외됐는지 설명.
- '공식 미공개' 단정 0건. 미확인 항목은 전부 "제외 항목이므로 추가 조사 미수행"으로 기록.

## 산출물
- completed/CAM-010.json (exclusion 포함, ready=false)
- completed/CAM-010-manuscript.md (제외 안내)
- evidence/CAM-010-evidence.json (8 facts, 인계 레코드 전사 근거)
- gaps/CAM-010-gaps.json (5건, 제외로 인한 미확인)
- 본 노트
