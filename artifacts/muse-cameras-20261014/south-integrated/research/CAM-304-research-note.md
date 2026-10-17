# CAM-304 조사 노트 (시뷰 선라이즈 리조트 하드린) — 2026-10-13

## 유형
인계 제외 판정 확정 기록 (audit_decision="제외" — 뒤집지 않음)

## 마스터 원문 대조 (dispatch 전 직접 읽기)
- camera_master_20261012.json CAM-304 레코드에서 직접 읽음: id CAM-304 / name_ko "시뷰 선라이즈 리조트 하드린" / name_original "Seaview Sunrise Resort Haad Rin" / operator "미확인" / place "하드린" / city "코팡안" / province "수랏타니" / scenery_type "해변" / status "ended" / status_verified_at "2026-10-12 22:08~22:11 JST" / coordinates null / url `https://www.youtube.com/watch?v=1nVFCfRlqRo` / youtube_id "1nVFCfRlqRo" / usage_terms "약관 미확인, 외부 링크만" / free=true / login_required=false / notes "이 동영상을 더 이상 재생할 수 없습니다 (삭제/비공개)"
- 지시와 불일치 없음.

## 인계 제외 판정
- TLN-CAM-06-audit.json CAM-304 레코드: audit_decision="제외", audit_reason="이 동영상을 더 이상 재생할 수 없습니다 (삭제/비공개)"
- 판정 유지, 재생 재검증·좌표 추적·권리 조사 미수행 (제외 항목 지시 준수).

## 금일 텍스트 수준 확인 (2026-10-13)
- YouTube 페이지(https://www.youtube.com/watch?v=1nVFCfRlqRo) browser.open 실패 — upstream HTTP 429, 3회 시도 후 중단. **조회 장애로 기록** (페이지 존재 여부·현재 재생 상태 단정 불가). 재시도 금지 지시 준수.
- 인계 제외 판정(삭제/비공개, 2026-10-12 직접 확인)은 뒤집지 않음. 스트림 복구 시도 없음.

## 소스·운영자
- 직영 — YouTube 영상 (운영자 미확인, 인계 기재). 제외 항목이므로 추가 판정 미수행.

## 좌표·권리
- 좌표 null 유지 (제외 항목이라 추적 미수행). 권리 "약관 미확인, 외부 링크만" (인계) — '공식 미공개' 단정 안 함.

## 무료·로그인
- 인계 free=true, login_required=false (회수).

## 인계 파일 SHA 대조
- 브리프 기재값과 3종 전부 일치 (TLN-CAM-05 `607522e8…` · audit `9bc9b339…` · master `bece6f80…`).

## 미검증 항목 (gaps — 5건)
1. 좌표 (정보없음 — 제외로 인한 미조사)
2. 영상 재사용 조건 (정보없음 — 제외로 인한 미조사)
3. 원천 운영자 (정보없음 — 제외로 인한 미조사)
4. 금일 재생 (**조회 장애** — upstream 429, 인계 제외 판정 유지)
5. 프리뷰 (정보없음 — 제외로 인한 미조사)
- '공식 미공개' 단정 0건.

## 비고
- 하위 worker 미생성, CAM-304 이외 ID 미접촉, 인계 원본 파일 수정 없음, 코드수정·배포 없음.
- ZIP 패키징은 부모 담당 (coverage는 브리프상 부모 생성).
