# CAM-317 조사 노트 (코사무이 국제공항 / Koh Samui Airport)

- **인계 제외 판정 확정 (뒤집지 않음)**: TLN-CAM-06-audit.json audit_decision="제외", audit_reason="webcamtaxi Offline 표기".
- 마스터 원문 대조 (dispatch 시점 직접 읽기): id CAM-317 / name_ko "코사무이 국제공항" / name_original "Koh Samui Airport" / operator "미확인 (중개: webcamtaxi)" / province 수랏타니 / city 코사무이 / place "" / scenery_type "공항" / status "offline" / status_verified_at null / url https://www.webcamtaxi.com / youtube_id null / free=true / login_required=false / usage_terms "약관 미확인, 외부 링크만" / coordinates null / coord_class null / coord_source null / notes "webcamtaxi Offline 표기". 지시와 불일치 없음.
- 금일 텍스트 수준 확인 (2026-10-13, browser.open, 재생·스트림 복구 시도 없음): https://www.webcamtaxi.com 정상 열람 — 사이트 루트는 접속 가능 ("Live HD Streaming Webcams from around the globe"). 인계에 카메라 개별 페이지 URL이 없고, 루트 페이지 텍스트에서 해당 카메라의 현재 상태를 확인할 수 없음 → 인계 제외 판정(webcamtaxi Offline 표기)과 정합 → 뒤집지 않음.
- 재생 재검증·좌표 추적·권리 조사 모두 미수행 (제외 항목, 지시 준수).
- completed/CAM-317.json: status "offline", exclusion{reason, decidedAt "2026-10-12", decidedBy "NATIONWIDE 감사 판정 (TLN-CAM-06-audit.json)", sourceRecordId} 기록. slug "cam-317-kosamui-airport", detailPath "/th/cameras/cam-317-kosamui-airport", ready=false, originThreadKey="CAM-SOUTH-01", sourceRecordId(인계 3종 SHA), verificationEvidence 포함.
- gaps 5건 전부 "정보없음" (제외로 인한 미조사). 조회 장애 0건. '공식 미공개' 단정 0건.
- 하위 worker 미생성, CAM-317 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음. ZIP 패키징·coverage는 부모 담당.
