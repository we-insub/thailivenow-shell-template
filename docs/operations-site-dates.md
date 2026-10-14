# 날짜 릴리스 운영 절차

이 저장소의 실제 운영은 GitHub 자동 배포가 아닌 Cloudflare Pages Direct Upload와 공식 Wrangler다. 조사 시 origin/main은 초기 쉘이며 운영 콘텐츠는 미커밋 상태였다. 이 차이를 무관한 파일 일괄 커밋으로 해소하지 않는다.

이번 날짜 릴리스는 성공 배포 `2c56ab40-ae6a-49b1-ad5b-6c1fe6cf1c85`의 기존 전체 자산을 기준으로 조립한다. 보관 ZIP의 SHA와 현재 운영 배포 ID를 검증하고, 날짜 표식·날짜 데이터·클라이언트 모듈·Functions·라우팅 외 파일은 원본과 동일한지 검사한다. 새 원고나 자산을 섞지 않는다. 이는 이번 범위의 격리 절차이며 일반 콘텐츠 부분 배포 활성화가 아니다.

1. 규칙·origin/main·Git 상태·worktree·Pages 최근 성공 배포를 확인한다.
2. 기존 전체 테스트·빌드·SEO 감사를 실행한다. 날짜 테스트와 추가 감사를 실행한다. 검사 실패 시 원인을 고친다.
3. 날짜 코드만 격리 worktree에 커밋하고 GitHub에 푸시한다. 기존 작업 디렉터리의 미커밋 파일과 QA 기록은 보존한다.
4. `SITE_DEPLOYMENT_DATE`와 `SITE_RELEASE_COMMIT`으로 JSON을 만들고, 검증된 운영 기준 디렉터리에 prepare를 적용한다. 날짜 외 변경이 없음을 비교한다.
5. 실제 Pages 로컬 런타임에서 실패·날짜 변경·클라이언트·언어별 PC/모바일을 시험한다. fixtures는 운영 후보에 넣지 않는다.
6. `npx wrangler pages deploy <검증된 후보> --project-name thai-live-now --branch main --commit-hash <커밋>`으로 정식 배포한다. 성공 이전에 완료로 기록하지 않는다.
7. 실제 thailivenow.com의 언어별 HTML·날짜 JSON·카메라 확인 기록·메타·사이트맵·데이터/API와 화면을 확인한다. 배포 ID와 커밋을 릴리스 기록에 남긴다.

롤백은 Cloudflare의 이전 성공 배포를 다시 활성화한다. 날짜 JSON도 이전 배포의 ASSETS로 돌아가므로 카메라 기록을 삭제하거나 성공 상태를 만들지 않는다.


## 2026-10-15 부분 배포 경로

별도 사용자 승인으로 [PARTIAL-RELEASE.md](./PARTIAL-RELEASE.md)의 실제 배포 경로를 구현했다. 공통 날짜 계약과 전체 테스트·합친 전체 SEO/날짜 감사·Pages 런타임 검증을 유지하며, 성공 운영 결과물을 기준으로 영향 라우트만 렌더링한다. 이전 날짜 릴리스 자체가 부분 배포를 활성화한 것은 아니라는 기록과 구분한다. 배포 작업 전에 새 운영 절차도 반드시 읽는다.
