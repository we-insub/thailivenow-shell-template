# CAM-210 조사 노트 (2026-10-13)

## 대상
- id: CAM-210 / name_ko: 아바니 아오낭 클리프 / name_original: Avani Ao Nang Cliff Krabi Resort
- operator: GISTDA (태국 지리정보우주기술개발청)
- place: 아오낭, province: 끄라비, scenery_type: 해변
- status: playing-live (마스터 원문, status_verified_at="2026-10-12 20:04 ICT" 회수)
- url: http://coastalradar.gistda.or.th/cctvlive/120219398703252507325226914621193549970/live.html
- free=true, login_required=false, usage_terms="약관 미확인" (인계)
- 중개: webcamera24.com/camera/thailand/7200-hat-nang-plaz-ao-nang/ (마스터 notes 기재)

## 인계 판정 (뒤집지 않음)
- TLN-CAM-06-audit.json CAM-210 레코드: audit_decision="보류", audit_reason="GISTDA 연안감시 피드 — 관광 포함 여부 사용자 판단"
- 마스터 notes: "원천 추적 결과: 호텔 웹캠이 아닌 정부 연안관측 CCTV 피드. 화면 오버레이 GISTDA COASTAL RADAR NANG OUT, LIVE, 타임스탬프 확인. 정부 감시 목적 피드라 관광 포함 여부는 중앙 판단 필요."

## 금일 확인 (2026-10-13, 텍스트 수준)
- GISTDA 피드 페이지 열람 시도 → browser.open upstream 500 (조회 장애). 페이지 존재 여부·현재 재생 상태 단정 불가. 재시도 금지 지시 준수, 스트림 복구 시도 없음.
- 인계 파일 SHA 대조: 브리프 기재값과 3종 전부 일치 (TLN-CAM-05 `607522e8…` · audit `9bc9b339…` · master `bece6f80…`)
- 마스터 원문 우선 적용: 지시의 이름·운영자·상태와 마스터가 일치함을 확인 (불일치 없음).

## 수행하지 않은 것 (지시 준수)
- 재생 재검증 (보류 항목)
- 좌표 추적 (보류 항목, 인계 마스터·audit 모두 coordinates null)
- 권리 조사 (보류 항목, usage_terms="약관 미확인" — '공식 미공개' 단정 안 함)
- 포함/제외 결론 (소유자 판단 필요 — 보류 상태 유지)

## 산출물
- completed/CAM-210.json (hold 필드 포함, ready=false)
- completed/CAM-210-manuscript.md (보류 안내, 해요체)
- evidence/CAM-210-evidence.json (9 facts 전건 URL)
- gaps/CAM-210-gaps.json (5건, id 필드 포함 — G-03은 조회 장애)
- research/CAM-210-research-note.md (이 파일)

## 비고
- 하위 worker 미생성, CAM-210 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음.
- ZIP 패키징은 부모 담당.
