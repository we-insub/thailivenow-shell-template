# CAM-015 조사 노트 (카오락 랜드 디스커버리)

- 작업일: 2026-10-13
- 작업 유형: 인계 제외 판정 기록 확정 (신규 조사 없음)

## 인계 원자료 대조

- `camera_master_20261012.json` (SHA `bece6f80b5fa32f1648fab1c719894e60e5ee1bddeca8d93301401798d74112c`):
  - CAM-015 = 카오락 랜드 디스커버리 / "Khao Lak Land Discovery webcam" / 운영자 Khao Lak Land Discovery / 카오락·팡아 / 마을·해변 / status `excluded-street` / status_verified_at 2026-10-12 22:00 JST
  - notes: "YouTube 라이브 임베드, LIVE 배지·빨간 진행 바, OSD Time 19:56 UTC+7 현재 시각 일치, 야간 거리 차량 이동. 운영자 무료 제공 문구 확인 | 시내 거리 화면 — 사용자 제외 범위로 목록에서 제외 (2026-10-12 정정)"
  - url: https://www.khaolaklanddiscovery.com/khao-lak-webcam/ / operator_channel_url: https://www.khaolaklanddiscovery.com
  - usage_terms: "무료 확인 (운영자: This webcam service is provided free of charge by Khao Lak Land Discovery)"
  - coordinates null, youtube_id null, free=true, login_required=false
- `TLN-CAM-06-audit.json` (SHA `9bc9b33957a502b156ef4e0189899f6f1a84c5e9ed009bd717af976970f31fa4`):
  - CAM-015 레코드: audit_decision="제외", audit_reason=상기 notes와 동일
  - preview_url=null, preview_basis=null, coordinates=null
- `TLN-CAM-05-final-81.json` (SHA `607522e8efb56a8fa6644dc55b2ff42a9ee3a268b2092c104cb7b4cd6b2ab9da`): 마스터와 동일한 CAM-015 레코드 확인
- 인계 파일 SHA 3종 모두 브리프 기재값과 일치

## 판단

- 인계 제외 판정을 뒤집지 않음. 화면이 시내 거리 뷰(야간 거리 차량 이동)라 해변 카메라 범위 밖 — 소유자 2026-10-12 정정.
- 재생 재검증·좌표 추적·권리 조사는 지시대로 수행하지 않음.
- `status` 필드는 `"excluded-street"`로 직접 기입 (마스터 원문과 일치).
- `usage_terms`는 인계 문구 그대로 전사, 추가 조사 없음 — '공식 미공개' 단정 안 함.
- '공식 미공개' 단정 0건. 모든 gaps는 "제외 항목이므로 추가 조사 미수행" (정보없음)으로 기록.
