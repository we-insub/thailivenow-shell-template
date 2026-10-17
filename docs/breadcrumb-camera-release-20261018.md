# 탐색경로 URL 수정과 기존 카메라 업데이트 배포

## 사용자 승인 및 범위

2026-10-18(클라이언트 날짜) 사용자가 Search Console 탐색경로 경고의 관련 교통 페이지 전체 수정·검증·배포와 수정 결과 확인 제출을 요청했다. 이어 이미 로컬 검수가 끝난 메인·카메라 업데이트를 함께 배포하도록 승인했고 운영에서 검수하지 말고 로컬 검수를 먼저 끝내도록 명시했다.

기존 교통 안내의 검색 의도·한국어·본문·FAQ·출처·지도·공개 범위와 정본은 보존한다. 교통 원본 HTML 36개에서 BreadcrumbList의 상대 item을 실제 운영 절대 URL로 수정한다. 기존 Itsaraphap의 MRT 블루라인 schema 링크는 .html 별칭 대신 기존 공개 정본 /ko/transport/bangkok/lines/mrt-blue/를 사용한다. 마지막 항목의 item 생략은 Google 허용 형식으로 유지한다. 메타 수정이며 새 자료 확인일이나 본문 수정일을 만들지 않는다.

카메라는 camera-place-review-local-20261018.md의 검수 완료 원고 29개와 메인·목록·지도 결과·저장·비교, 해당 컴포넌트·클라이언트 스크립트·카메라별 날짜 기록을 선별한다. 기존 카메라 원본 URL·좌표·검증 기록·사진 권리·다른 시장 본문을 유지한다. 사용자 지시대로 기존 카메라 내용/화면 검수는 반복하지 않고 배포 후보에 동일한 코드·원고가 들어가는지와 필수 통합 관문을 로컬에서 확인한다.

공항·국내선·공통 헤더의 진행 중 변경은 이번 배포에 포함하지 않는다. 혼합된 observations는 카메라 상세 29개와 /ko/, /ko/directory/, /ko/directory/2/, /ko/saved/, /ko/compare/ 기록만 index에 선별하고 작업 디렉터리 원본은 보존한다.

## 연결과 보존

관계/장소/노선/언어/공개 범위를 새로 만들거나 변경하지 않는다. 기존 목록↔상세, 동일 촬영 대상의 3쌍 카메라 링크, 교통 상위 복귀 링크를 보존한다. 탐색경로 item은 기존 페이지 정본으로 연결하고 새 시설·일정·번역을 생성하지 않는다. 관계 자동 생성 엔진은 추가하지 않는다. 카메라 기존 연결 검수 근거는 해당 작업 MD와 artifacts/camera-28-rework에 있다.

## 검증 및 배포

저장소 AGENTS, INTERNAL-LINKING-CONTRACT, SITE-DATES, page-generation-date-contract, operations-site-dates, page-seo-rules, PARTIAL-RELEASE, detail-template-rules, natural-korean-copy, sirocco-user-full-reference와 기존 카메라 기록을 확인했다. 기존 시로코 문체 기준을 유지하며 검수된 본문을 다시 쓰지 않는다.

새 breadcrumb 회귀 검사는 Google 경고와 같은 상대 item 및 객체 @id, 잘못된 URL이 실제 SEO 빌드 감사에서 실패하는지 검증한다. 유효한 절대 URL과 마지막 item 생략을 허용한다. npm run build 전체 감사에 연결한다. 커밋된 선별 소스의 격리 전체 빌드·전체 테스트·SEO/날짜·디자인 감사·실제 Pages 로컬 런타임을 통과한 후보만 배포한다. 재사용 가능한 검증 release/graph/dist 세트가 이 checkout에 없어 정식 전체 빌드를 수행한다.

배포 후에는 업로드 성공과 운영 커밋/반영 응답만 확인하고 운영 UI 기능 검수는 반복하지 않는다. Search Console에서 수정 결과 확인을 제출한 후 상태를 기록한다. 제출 접수와 Google 검증 완료·수집·색인·노출은 별개다. 실행 결과는 완료 후 이 문서에 추가한다.

첫 격리 전체 감사에서 연결 명소 왓아룬의 동일 상대 item 3개도 검출했다. 해당 BreadcrumbList만 실제 화면의 홈·여행지·방콕 지도 링크와 같은 절대 URL로 수정하고 전체 검사를 재실행한다. 교통 원본 36개와 연결 명소 1개이며 본문·사진·FAQ는 그대로다.
