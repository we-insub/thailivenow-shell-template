# 연관 페이지 연결 규칙 인계 — 2026-10-17

사용자 요청: 재팬·코리아라이브나우에 저장한 연관 페이지 연결 기준을 ThaiLiveNow MD에 반영하고 GitHub에 푸시하여 다른 PC에서 pull 후 사용한다. 목적은 앞으로 관계가 성립하는 페이지·데이터·HTML을 생성·수정할 때 기존 관련 페이지의 연결까지 별도 재지시 없이 작업·검수에 포함하는 것이다. 사이트 전체 링크 수정이나 운영 배포 요청은 이번 범위가 아니다.

## 기준선과 반영

- 저장소: we-insub/thailivenow-shell-template, main.
- 사용자 업로드 기준 커밋: a2e6d8ea9f6cafa5af7e597bd8febb5b134ac828 (`docs: sync ThaiLiveNow markdown files`). 깨끗한 새 checkout에서 시작했다.
- 신규 정본: docs/INTERNAL-LINKING-CONTRACT.md. AGENTS·README·SEO·상세 템플릿·공통 헤더 문서에서 필수 적용으로 연결하고 handoff-required-files.json에 필수 파일로 등록한다.
- 실제 구조 대조: 지원 11개 시장과 `/ko/`, 도시별 루프탑/전망대 허브와 공개 필터, 명소·해변·카메라·공항·노선·역·선착장 구조. 실제 일정이 있을 때만 구성 장소와 연결하도록 조건화한다. 일본의 지역·일정 구조를 복제하지 않는다.
- 기존 본문·사진·출처·확인일·완료 기록·날짜/SEO/공개 제한·정식 검증/배포 관문을 보존한다. 소스·HTML·공개 데이터는 변경하지 않는다.

## 확인 범위와 인계

문서 상대 링크·필수 파일 추적·변경 범위·diff를 확인한다. 확정 결과: `npm run check:handoff` 필수 64파일 존재·추적 PASS, 변경 8파일의 상대 링크 18개 실재 PASS, 필수 진입 문서 5개의 계약 연결 PASS, `git diff --cached --check` PASS. 이번은 규칙 문서와 필수 파일 목록 변경이므로 전체 테스트/빌드·브라우저 PC/모바일·운영 배포·색인 신청은 실행하지 않는다. 관계 기반 자동 생성 엔진·추가 검사 구현도 이번 범위가 아니며 향후 페이지 작업에서는 미구현 부분을 수동 반영·검수한다.

README와 운영 절차상 배포는 Cloudflare Pages Direct Upload로 Git push와 분리돼 있고 checkout에 .github/workflows는 없다. 이번 커밋은 규칙 인계를 위한 main 푸시이며 운영 사이트 배포를 실행하지 않는다. 다른 PC에서는 같은 main에서 `git pull --ff-only origin main` 후 AGENTS와 새 계약을 읽고 적용한다. 다른 PC의 실제 pull·실행 여부는 이 작업에서 확인할 수 없다.
