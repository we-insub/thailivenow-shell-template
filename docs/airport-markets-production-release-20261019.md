# 공항 대응 국가별 운영 배포 — 2026-10-19

사용자 최신 운영 배포 승인에 따라 실행했다. 운영 기준 0f7373afea5033e363ba287e3bcca3c824d252f1 위에 공항 안내 관련 51개 파일만 분리해 커밋 99dea529b15f0925fe0ad5a060800633722ab7c8을 생성했다. 원래 checkout HEAD와 index, 미커밋·미추적 작업은 보존했다. 다른 국내선 교통 변경은 제외했다.

한국어 허브·항공사 검색·출발공항 하위 화면, 공통 영문 39항공사 검색, 미국 노선·공항 자료, 9시장 허브와 36개 신규 하위 화면 및 한국어 검수 주석 제거를 포함한다. 기존 시장별 사실·출처·실제 확인일과 최신 운영 루프탑·카메라 자료를 보존했다. 미국 BTS 2026년 1~7월 전수와 겨울 전체 노선 미확인 경계도 유지한다.

정식 release 격리 빌드: 전체 테스트 66/66, SEO 회귀 9/9, 날짜 테스트 9/9, 2536페이지·색인 허용 2474·SEO 오류 0·중복 제목/설명 0·기존 길이 경고 251 유지, 날짜 감사 6069 바인딩 오류 0. 실제 Pages 로컬 런타임 통과. 격리 소스 50개 경로를 승인 로컬 파일과 대조했고 날짜 observations는 공항 경로만 병합했다. 45개 국가별 페이지 데이터·서비스·출처·링크 HTML 감사 오류 0.

공식 Wrangler로 감사한 동일 dist와 격리 Functions를 thai-live-now/main에 배포했다. 배포 URL: https://a86c3a22.thai-live-now.pages.dev. 운영 release:verify 18개 검사 통과, verifiedProduction=true. 운영 공항 경로 49개 HTTP 200·H1 1개·자기 canonical·noindex 없음·새 커밋 날짜 스냅샷 확인. 운영 사이트맵·날짜 JSON·robots·카메라 데이터 등 핵심 자산 해시가 후보와 일치한다. pages.dev 미리보기 noindex 유지. 배포일은 명시적 2026-10-19/Asia/Bangkok이며 원고 확인일을 배포일로 덮어쓰지 않았다.

운영 브라우저 중국어 PC 1152px/모바일 351px에서 가로 넘침 0·H1 1개·승인 섹션 순서 확인. 미국 출발공항 LAX/SFO 5개 서비스 표시와 모바일 가독성 확인. 공통 English OZ 검색 결과 Asiana 1개 및 실제 출처 링크 확인. 한국어 허브 승인 순서·H1·가로 넘침 0 확인. 뷰포트는 초기화했다. 근거는 artifacts/release-airport-markets-20261019-99dea52의 release.json, deploy.log, content-audit.json, production-pages.json과 production-*.png, /tmp/tln-airport-release-build.log 및 production-verify.log다.

실제 검색 수집·색인 완료, 순위·AI 인용은 이 배포 검증과 별개이며 제출하지 않았다.
