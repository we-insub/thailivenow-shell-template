# CAM-114 조사 노트 (2026-10-13)

## 대상
- id CAM-114 / name_ko "아오낭 라이브 웨더캠" / name_original "Krabi, Ao Nang, Thailand Live Weather Cam"
- operator "Steve (개인)" / place "아오낭" / province 끄라비 / scenery_type 해변 / status "ended"

## 마스터 원문 우선 적용
- 지시의 이름·운영자·상태와 마스터가 일치함을 확인 — 불일치 없음.

## 인계 제외 판정 (뒤집지 않음)
- TLN-CAM-06-audit.json: audit_decision="제외", audit_reason="녹화를 볼 수 없습니다 오류, 4개월 전"
- 마스터: status="ended", status_verified_at="2026-10-12 19:58 ICT", notes="녹화를 볼 수 없습니다 오류, 4개월 전"
- 즉 YouTube 영상이 재생 불가 상태라 목록에서 제외된 것.

## 금일 텍스트 수준 확인 (2026-10-13, 지시 범위)
- YouTube 영상 페이지(https://www.youtube.com/watch?v=4F81_I_ehds) 존재 확인 — browser.open 텍스트 5줄.
- title: "Krabi, Ao Nang, Thailand Live Weather Cam"
- description: 카메라가 꺼지면 전원·인터넷·소프트웨어 업데이트 가능 사유 안내 문구 (2줄).
- keywords: krabi weather, krabi live stream, ao nang weather
- 텍스트 도구로는 실제 재생 상태·오류·LIVE 배지 확인 불가 → 제외 판정을 뒤집지 않음.
- 스트림 복구 시도 없음 (지시 준수).

## 산출
- 재생 재검증·좌표 추적·권리 조사 모두 미수행 (제외 항목, 지시 준수).
- 좌표: null (인계 마스터·audit 모두 null).
- 권리: "-" (인계) — 추가 조사 미수행, '공식 미공개' 단정 안 함.
- 인계 파일 SHA 대조: 브리프 기재값과 3종 전부 일치 (TLN-CAM-05 607522e8… · audit 9bc9b339… · master bece6f80…).
- ready=false (제외 항목 — ready 요건 대상 아님).

## 비고
- 하위 worker 미생성, CAM-114 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음.
