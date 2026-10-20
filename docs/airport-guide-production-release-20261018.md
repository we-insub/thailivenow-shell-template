# 한국어 공항 안내 운영 배포

사용자 승인에 따라 공항 안내, 지연·결항 허브 중복 목록 정리, PC·모바일 내비게이션 순서 통일을 배포했다. 별도 진행 중인 교통·여행 페이지 미커밋 변경은 제외했다.

- 소스: f6f040b4f80ad788f18b93cbc4a6f14fc85794a3
- 배포 URL: https://b234884c.thai-live-now.pages.dev
- Cloudflare 프로젝트: thai-live-now / main
- 방식: 정식 release 스크립트, 커밋 소스 격리, 전체 빌드, Direct Upload
- 전체 테스트 51개 통과, 1,825페이지 SEO 오류 0(기존 경고 134), 날짜 감사 3,203개 오류 0, 로컬 Pages 검증 통과
- Wrangler Deployment complete 성공 응답 확인
- 사용자 요청으로 배포 후 운영 테스트 생략. release:verify와 기준 승격은 수행하지 않았다.
- 기존 작업 체크아웃 HEAD와 인덱스는 유지했고, 선별 소스는 codex/airport-guide-release-20261018 커밋으로 보존했다. Git push는 수행하지 않았다.

증빙: artifacts/release-airports-20261018-f6f040b/release.json 및 operator-scope.json.
