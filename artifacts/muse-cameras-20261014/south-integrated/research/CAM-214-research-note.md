# CAM-214 연구 노트 — 국립연안양식연구소 (제외 기록 확정)

- 조사일: 2026-10-13 (KST)
- 유형: **인계 제외 판정 확정 기록** (audit_decision="제외")

## 마스터 원문 대조 (camera_master_20261012.json에서 직접 읽음)
- id CAM-214 / name_ko "국립연안양식연구소" / name_original "National Institute of Coastal Aquaculture"
- operator "National Institute of Coastal Aquaculture (태국 수산부 산하)" / place "송클라" / province "송클라"
- **scenery_type "해변"** (마스터 원문 — 지시 브리프 표기와 동일, 불일치 없음)
- status "offline" / status_verified_at "2026-10-12"
- url: https://webcamera24.com/camera/thailand/7187-institut-pribreznoj-akvakultury-songkhla/
- coordinates null / usage_terms "약관 미확인" / free=true / login_required=false

## 인계 audit 판정 (TLN-CAM-06-audit.json에서 직접 읽음)
- audit_decision="제외", audit_reason="Broadcast last updated 15.08.2023, 재생 오류. 공식 웹캠 페이지 미발견"
- 판정을 뒤집지 않음 — 제외 기록 확정으로 처리.

## 금일(2026-10-13) 텍스트 수준 확인 — webcamera24 카메라 페이지
- 페이지 정상 존재 (HTTP 접근·본문 89줄 열람). 스트림 복구 시도 없음.
- "Status: Webcam online" 표기이나 "Broadcast last updated: 15.08.2023"·"Webcam last checked: 15.08.2023" — 3년 이상 경과 → 인계 제외 판정과 정합.
- Tags: Sea views, Weather.
- 본문 "The Live Cam shows National Institute of Coastal Aquaculture in real time. It is located in Songkhla, Thailand." — boilerplate.
- "on the map" 섹션에 텍스트 좌표 미노출.

## 수행하지 않은 항목 (제외 항목 지시 준수)
- 재생 재검증 (텍스트 도구로 실제 영상 재생 불가 + 제외 항목)
- 좌표 추적 (인계 null 유지)
- 권리 조사 (인계 "약관 미확인" 유지)

## 결론
- 제외 기록 확정. ready=false. coverage는 부모가 생성.
