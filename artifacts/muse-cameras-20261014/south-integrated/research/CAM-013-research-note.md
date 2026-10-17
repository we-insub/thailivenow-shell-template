# CAM-013 조사 노트 (2026-10-13)

## 대상
- id CAM-013 / name_ko "스카이라인 카말라비치" / name_original "Kamala Beach live webcam"
- operator "미확인" / place "카말라 해변" / province 푸껫 / scenery_type 해변 / status "offline"
- 마스터 원문 기준 (지시와 일치, 불일치 없음)

## 인계 판정 (뒤집지 않음)
- TLN-CAM-06-audit.json CAM-013 레코드: audit_decision="제외", audit_reason="Skyline 플레이어에 OFFLINE 문구 표시"
- camera_master_20261012.json CAM-013 레코드: status="offline", notes="Skyline 플레이어에 OFFLINE 문구 표시", status_verified_at="2026-10-12 21:55~21:58 JST"
- 인계 파일 SHA 대조: 브리프 기재값과 3종 전부 일치 (audit 9bc9b339… · master bece6f80… · TLN-CAM-05 607522e8…)

## 금일 확인 (2026-10-13, 텍스트 수준)
- SkylineWebcams 카메라 페이지(https://www.skylinewebcams.com/en/webcam/thailand/southern-thailand/phuket/kamala.html) 텍스트 열람 — 본문 42줄 확인
- 플레이어 상태 문구(OFFLINE 등)는 텍스트에 노출되지 않음 — 플레이어가 JS 렌더링이라 텍스트 도구로 OFFLINE 지속 여부 확정 불가
- 재생 복구 시도 없음 (지시 준수), 소스·좌표·권리 심층 조사 미수행 (제외 항목)
- 제외 판정 유지 — 뒤집지 않음

## 산출
- completed/CAM-013.json (status "offline", exclusion 필드, ready=false)
- completed/CAM-013-manuscript.md (제외 안내, 해요체)
- evidence/CAM-013-evidence.json (8 facts, 인계 레코드 전사 근거 + 금일 텍스트 확인)
- gaps/CAM-013-gaps.json (5건, 전부 "제외 항목이므로 추가 조사 미수행")
- '공식 미공개' 단정 0건
