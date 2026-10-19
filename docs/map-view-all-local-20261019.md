# 지도 전체보기 기본 선택 — 2026-10-19

사용자 요청: 지도 상단 카메라 왼쪽에 전체보기를 두고 기본 선택해 전체 리스트를 표시한다. 지원 11개 언어 모두 동일하게 적용한다. 이번 작업은 로컬 수정·검증이며 별도 운영 배포는 하지 않았다.

대상은 `/{locale}/` 지도 화면이다. 기존 자료·사진·카메라 29개·공개 상태·상세 URL·동일 언어 상세 연결을 보존했다. 새로운 장소나 사실·상세를 만들지 않으므로 연관 페이지 신규 생성은 해당 없음이다. 기존 초기 HTML의 29개 카메라 상세 링크는 모두 유지하고 숨겨진 초기 카드도 전체 표시하도록 바꿨다. canonical·H1·사이트맵 정책을 변경하지 않았다.

읽은 정본: INTERNAL-LINKING-CONTRACT, page-seo-rules, natural-korean-copy, sirocco-user-full-reference-20261014 전체, detail-template-rules, SITE-DATES, page-generation-date-contract, operations-site-dates. 문장 재작성 대신 동작을 정확히 설명하는 짧은 UI 이름 ‘전체보기’를 사용하며 시로코의 구체적인 행동·허브 카드 원칙과 대조했다. 기존 소개·본문·FAQ·확인일·사진권리는 그대로다.

파일: ThailandMap.astro는 맨 왼쪽 전체보기(all)를 추가하고 기존 카메라 버튼을 cameras로 구분한다. ui.ts는 8개 기본 언어의 자연스러운 명칭을 추가하고 영어권 4시장은 공통 View all을 재사용한다. CameraMapResults.astro는 전체보기를 왼쪽 기본값으로 두고 초기 29카드를 출력한다. thailand-map.ts는 기본 resultsScope를 all로 변경하고 all에서 12개 제한과 지도 범위 필터를 적용하지 않는다. 현재 지도 범위 버튼은 사용자가 선택할 수 있다. 카테고리·지역·검색 조건은 보존하고 카메라 버튼도 정상 필터한다. 전체보기로 돌아오거나 지도 초기화하면 all 범위를 다시 선택한다. 날짜 observations는 홈 11개 경로의 실제 수정일만 2026-10-19로 기록하고 확인일/배포일을 바꾸지 않았다.

검수: 전체 테스트 66/66. 전체 빌드 2536페이지, indexable 2474, SEO 오류/중복 제목/설명 0, 기존 길이 경고 251 유지. 날짜 감사 6070바인딩 오류 0. 실제 Pages 로컬 런타임 11언어 통과. 생성 HTML 11페이지 모두 첫 버튼 all/활성, 두 번째 cameras, 29개 초기 카드, H1 1개, 자기 canonical 및 같은 언어 카메라 상세 링크를 대조했다.

실제 브라우저 11언어 PC CSS1422px/모바일 CSS433px에서 활성 all·전체 29개·가로 넘침 0 확인. 뷰포트 요청390px와 브라우저 확대율이 반영된 실제 CSS433px를 구분한다. 한국어 지도 로딩 후에도 29개 유지, 카메라 선택/확대 시29개 유지, 바다22개→전체보기29개 복귀 확인. 뷰포트는 초기화했다. 모바일과 PC를 이미지로 확인한다. 초기 HTML/브라우저 검수는 검색엔진 색인이나 노출 완료를 뜻하지 않는다.

근거: artifacts/map-view-all-local-20261019의 before, tests.log, build.log, runtime.log, html-audit.json, browser.json, desktop.png, mobile.png. 다른 미커밋 변경·QA 기록과 운영 배포 후보는 보존했다. 운영 배포·커밋·푸시·색인 제출 없음. 로컬 http://127.0.0.1:4348/ko/.
