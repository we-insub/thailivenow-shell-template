# CAM-215 연구 노트 — 코홍 핫야이 (제외 기록 확정)

- 조사일: 2026-10-13 (KST)
- 유형: **인계 제외 판정 확정 기록** (audit_decision="제외")

## 마스터 원문 대조 (camera_master_20261012.json에서 직접 읽음)
- id CAM-215 / name_ko "코홍 핫야이" / name_original "Kho Hong Hat Yai"
- operator "미확인 (중개: webcamera24)" / place "핫야이" / province "송클라"
- **scenery_type "도시·산"** (마스터 원문 — 지시 브리프 표기와 동일, 불일치 없음)
- status "unverified" / status_verified_at null
- url: http://webcamera24.com/countries/thailand/ (마스터 — 국가 목록 페이지 일반)
- notes: 개별 URL 미확보
- coordinates null / usage_terms "약관 미확인" / free=true / login_required=false

## 인계 audit 판정 (TLN-CAM-06-audit.json에서 직접 읽음)
- audit_decision="제외"
- audit_reason="개별 URL 미확보 | TLN-CAM-06: 원문 Tags Traffic 확인 — 도로·교통 화면으로 제외 (2026-10-12 사용자 정정)"
- 판정을 뒤집지 않음 — 제외 기록 확정으로 처리.

## 금일(2026-10-13) 텍스트 수준 확인 — webcamera24 카메라 페이지
- 페이지 정상 존재 (타이틀 "Kho Hong, Hat Yai District Live Cam", 본문 87줄 열람). 스트림 복구 시도 없음.
- Tags: **Traffic** (인계 정정 사유와 정합)
- "Status: Webcam online" 표기이나 "Broadcast last updated: 15.08.2023"·"Webcam last checked: 15.08.2023" — 3년 이상 경과.
- 본문 "The Live Cam shows Kho Hong, Hat Yai District in real time. It is located in Songkhla, Thailand." — boilerplate.
- 본문 "In this online broadcast you can also watch traffic." — **도로·교통 화면 확인 → 인계 제외 판정과 정합.**
- "on the map" 섹션에 텍스트 좌표 미노출.

## 수행하지 않은 항목 (제외 항목 지시 준수)
- 재생 재검증 (텍스트 도구로 실제 영상 재생 불가 + 제외 항목)
- 좌표 추적 (인계 null 유지)
- 권리 조사 (인계 "약관 미확인" 유지)

## 결론
- 제외 기록 확정. status=unverified (마스터 원문), ready=false. coverage·ZIP은 부모 담당.
