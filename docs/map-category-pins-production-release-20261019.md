# 전체보기·카테고리 핀 — 운영 배포 2026-10-19

사용자 승인: “지금 전체보기랑 카테고리별 핀 수정한 거 모든 언어 운영배포해”. 최신 운영 commit 026fca29d5c430de780355517a4556647384a9f3은 직전 공항 배포99dea52에 ads.txt만 추가한 소스임을 확인했다. 새 커밋2fe14d0338b752ba7f68335ab2d98adcf7cf87ff은 최신 운영 부모 위에 지도 관련10개 파일만 분리했다. 원래 checkout HEAD378677ab와 비어 있던 index, 다른 미커밋/미추적 작업은 보존했다. ads.txt와 미국공항·카메라·루프탑 원본 자료는 최신운영과 바이트동일하다.

최신 운영026fca29의 검증된 release.json/graph.json 세트를 현재 checkout에서 찾지 못해 오래된99dea52 기준으로 부분 배포하지 않았다. PARTIAL-RELEASE 계약의 기준 없는 bootstrap 전체 빌드 경로로 새 커밋의 git archive를 격리하고 npm ci/전체검증을 실행했다. 업로드 직전에 운영 commit026fca29가 그대로인지 다시 검사했다. 배포일은 명시적2026-10-19/Asia/Bangkok, 실제 홈 수정일만2026-10-19이며 관찰일/확인일은 보존했다.

배포 대상: 지원11언어 홈 지도. 전체보기 맨왼쪽 기본선택, 전체 카메라목록29개, 지도는 공항제외 카메라/관광지 핀 동시표시, 카테고리별로 해당 풍경/시설핀만 남기고 범위 조정. 기존 좌표12카메라/공개44시설 기준이며 좌표없는17카메라는 목록만 유지한다. 신규 장소/좌표/번역상세/요금/정책을 만들지 않았다. 상세URL·동일시장링크·canonical/H1/사이트맵·기존운영범위 유지.

격리검증: 전체테스트70/70, SEO회귀9/9·날짜테스트9/9, 전체2536페이지·indexable2474·SEO오류0·중복제목/설명0·기존길이경고251유지, 날짜감사6069바인딩오류0, 실제Pages로컬런타임11언어통과. 최종초기HTML11언어 기본전체보기/공항버튼없음/29초기카드/자기canonical/동일언어카메라링크 PASS. 배포6개구현/테스트소스를 승인된로컬파일과 바이트대조했다.

공식Wrangler4.151.0으로 감사한 불변dist와 격리Functions를 thai-live-now/main에 업로드했다. 성공배포 https://54c14f77.thai-live-now.pages.dev . release:verify18개검사통과, verifiedProduction=true. 운영공통날짜JSON·사이트맵·robots·카메라데이터·11언어홈스냅샷·미리보기noindex를 확인했다. 추가운영검사11홈의HTTP/카테고리/29카드/릴리스SHA및7개참조JS/CSS/ads.txt 자산해시일치, 오류0. 운영브라우저11언어×7카테고리×PC1280/모바일390px=154상태의 선택/마커ID/목록수/공항제외/가로넘침없음 PASS. 뷰포트초기화, 한국어운영탭유지.

근거: artifacts/release-map-category-pins-20261019-2fe14d0/release.json, deploy.log, build.log, production-verify.log, html-audit.json, production-checks.json, production-browser.json, production-mobile.png. 실제검색수집·색인/순위/AI인용은 배포검증과 별개이며 제출하지 않았다. 이번 성공후 검증된결과물을 다음배포기준으로 사용할 수 있다.
