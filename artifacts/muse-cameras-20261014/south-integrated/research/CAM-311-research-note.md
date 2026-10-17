# CAM-311 조사 노트 — 코야오야이 터치 글램핑 (2026-10-13)

## 작업 유형
인계 제외 판정 확정 기록. audit_decision="제외" — 뒤집지 않음.

## 마스터 원문 대조 (dispatch 전 직접 읽기)
- camera_master_20261012.json CAM-311 레코드에서 직접 읽음: id CAM-311 / name_ko "코야오야이 터치 글램핑" / name_original "TOUCH Glamping Koh Yao Yai" / province "팡아" / city "코야오야이" / place "" (빈값) / scenery_type "섬" / operator "미확인 (중개: spotcameras)" / url "spotcameras" / status "unverified" / coordinates null / free=true / login_required=false / usage_terms "약관 미확인, 외부 링크만" / notes "may be offline 표기"
- 지시의 이름·운영자·상태·scenery_type("섬")와 마스터가 일치함을 확인 (불일치 없음)

## 인계 감사 판정 (TLN-CAM-06-audit.json — 직접 읽기)
- audit_decision="제외"
- audit_reason="may be offline 표기 | TLN-CAM-06: spotcameras \"This camera may be offline\", 원천 seeitlivethailand 520 소멸 — 원천소멸"
- corrections_applied에도 "CAM-311 제외: 원천소멸(520)+중개 offline" 기록

## 금일 텍스트 수준 확인 (2026-10-13)
- spotcameras 카메라 페이지(https://spotcameras.com/en/cams/Asia/Thailand/15892-Island-Koh-Yao-Yai-South-Thailand-Thailand-View-from-the-campsite-TOUCH-Glamping-to-the-beach) 정상 존재 (본문 98줄 열람)
- 타이틀: "Webcam Island - Koh Yao Yai, South Thailand, Thailand - View from the campsite - TOUCH Glamping to the beach"
- 상태 표기: "This camera may be offline" (50%)
- Source: https://www.seeitlivethailand.com/ (원천 사이트)
- 인계 제외 판정(원천소멸)과 정합 → 제외 판정을 뒤집지 않음
- 스트림 복구 시도 없음 (지시 준수)

## 수행하지 않은 작업 (제외 항목 지시 준수)
- 재생 재검증 · 좌표 추적 · 권리 조사 미수행

## 미검증 항목
- G-01 좌표 / G-02 영상 재사용 조건 / G-03 원천 운영자 / G-04 금일 재생 (페이지 존재·may-be-offline 표기 확인, 판정 유지) / G-05 미리보기 URL
- 전건 "제외 항목이므로 추가 조사 미수행" — 정보없음. '공식 미공개' 단정 0건.

## 비고
- 하위 worker 미생성, CAM-311 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음
- coverage는 만들지 않음 (부모 소유 규범 준수). ZIP 패키징은 부모 담당
