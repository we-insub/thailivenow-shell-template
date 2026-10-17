# CAM-310 연구 노트 — 튜탈레이 에스테이트 차암 (제외 기록 확정)

- 조사일: 2026-10-13 (KST)
- 유형: **인계 제외 판정 확정 기록** (audit_decision="제외")
- 이전 worker 런타임 오류(sqlx pool timed out) 후 재투입 건. 저장 파일 0건이었던 점 확인, 처음부터 작성.

## 이름 정정 기록
- 디스패치 지시의 "타루아오 반도 / Laem Talum Pao"는 부모 브리프의 오기입이었음.
- 마스터 원문 우선 규범에 따라 **name_ko "튜탈레이 에스테이트 차암" / name_original "Thew Talay Estate Cha Am"** 사용.
- slug도 오기입 기반("cam-310-laem-talum-pao")이 아니라 정정된 이름 기준으로 "cam-310-thewtalay-estate-chaam" 사용 (지시와 다름 — 부모 확인 요망).

## 마스터 원문 대조 (camera_master_20261012.json에서 직접 읽음)
- id CAM-310 / name_ko "튜탈레이 에스테이트 차암" / name_original "Thew Talay Estate Cha Am"
- operator "미확인" / place "" (빈값 — 마스터 그대로) / province "펫차부리" / city "차암"
- **scenery_type "해변"** (마스터 원문 — 지시와 일치)
- status "not-working" / status_verified_at null
- url: https://worldcam.eu/webcams/category/panorama/thailand (국가 목록 페이지 일반 — 개별 URL은 audit 기재)
- coordinates null / usage_terms "약관 미확인, 외부 링크만" / free=true / login_required=false
- notes: "uastreaming Not working (최종 성공 2024-11-29) — 정지 가능성"

## 인계 audit 판정 (TLN-CAM-06-audit.json에서 직접 읽음)
- audit_decision="제외", audit_reason="uastreaming Not working (최종 성공 2024-11-29) — 정지 가능성"
- 판정을 뒤집지 않음 — 제외 기록 확정으로 처리.

## 금일(2026-10-13) 텍스트 수준 확인 — worldcam.eu 카메라 페이지
- https://worldcam.eu/webcams/asia/thailand/14104-cha-am-thew-talay-estate 정상 존재 (본문 88줄 열람). 스트림 복구 시도 없음.
- 타이틀 "Cha Am - Thew Talay Estate, Thailand - Webcams".
- 본문은 기상 데이터(온도 29°C, 강수, 운량, 풍속, 기압·습도 등)만 노출되고 스트림 관련 표기는 없음.
- 제외 판정과 정합 — 판정을 뒤집지 않음.

## 수행하지 않은 항목 (제외 항목 지시 준수)
- 재생 재검증 (텍스트 도구로 실제 영상 재생 불가 + 제외 항목)
- 좌표 추적 (인계 null 유지)
- 권리 조사 (인계 "약관 미확인, 외부 링크만" 유지)

## 결론
- 제외 기록 확정. ready=false. coverage는 부모가 생성.
