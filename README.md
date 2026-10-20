# ThaiLiveNow

태국 관광 여행자를 위한 종합 여행 안내 사이트. Astro 정적 사이트와 Cloudflare Pages Functions를 함께 사용한다. 기존 메뉴와 11개 언어·시장 경로를 유지한다.

## 작업 전 읽기

먼저 [AGENTS.md](AGENTS.md)를 전체 읽고 그 문서의 날짜·SEO·한국어·상세 제작 규칙과 연결된 원문을 읽는다. [서비스 목적](docs/service-purpose-decisions-20261015.md), [언어·시장](docs/language-settings.md), [공통 헤더·내부 링크](docs/shared-header-rules.md)도 적용한다. 목적·메뉴 위치·주된 질문·대상 시장이 불명확한 새 부분은 사용자에게 먼저 묻고 답변 전에 제작을 확정하지 않는다.

필수 파일 목록은 [handoff-required-files.json](docs/handoff-required-files.json), 검증 결과와 제외 범위는 [GIT-HANDOFF-VERIFICATION.md](docs/GIT-HANDOFF-VERIFICATION.md)에 있다. 개인 Codex 스킬이나 개인 메모리가 없어도 이 규칙을 사용할 수 있다. 과거 작업 문서의 로컬 절대경로와 QA 산출물은 역사 기록이며 clone으로 제공되는 개발 의존성이 아니다.

연관 페이지·HTML을 생성·수정할 때는 [연관 페이지 연결·생성 검수 계약](docs/INTERNAL-LINKING-CONTRACT.md)을 필수 적용한다. 새 상세와 기존 상위·관련 페이지의 실제 링크를 같은 작업에서 반영·검수한다. 다른 PC에서도 이 저장소의 AGENTS와 계약을 정본으로 사용한다.

신규 상세 생성·기존 상세 수정·언어 확장 전에는 [상세 저자·공개 날짜·공유 이미지 제작 계약](docs/detail-editorial-policy.md) 전체를 필수 적용한다. 공통 생성 경로·신규 상세 경로 판정·실제 확인일 보존·공유 사진 근거·미확보 목록·전체 언어 HTML/PC/모바일 검수까지 포함하며, 과거 공개 배포일 표시 지시를 다시 적용하지 않는다.

## 새 컴퓨터 설치·실행

Git, Node.js 24.13.0, npm 11.6.2와 npm 레지스트리 인터넷 접근이 필요하다. nvm 사용자는 다음 순서로 실행한다. 다른 Node 설치 도구도 같은 버전을 선택하면 된다.

```bash
git clone https://github.com/we-insub/thailivenow-shell-template.git
cd thailivenow-shell-template
git switch main
git pull --ff-only origin main
nvm install
nvm use
cp .env.example .env
npm ci
npm run check:handoff
npm run dev -- --host 127.0.0.1
```

브라우저에서 http://127.0.0.1:4321/ko/ 를 연다. 기본 로컬 실행에는 비밀값이 필요 없다. `.env.example`의 설정은 선택 사항이다. Astro 외 Node 날짜·릴리스 스크립트는 `.env`를 자동 로드하지 않으므로 필요한 변수는 셸에서 export한다. 배포일을 현재 날짜로 설정하지 않는다.

## 검사·테스트·빌드

```bash
npm run check:handoff
npm test
npm run build
npm run audit:site-dates
node scripts/audit-site-design.mjs dist
npm run check:runtime
```

`build`는 SEO 테스트·Astro 전체 빌드·SEO 감사 후 날짜 테스트·데이터 생성·날짜 표식 준비·날짜 감사·공유 이미지 근거 카탈로그 검사·전체 상세 편집 정책 감사를 실행한다. 생성되는 `public/data/site-dates.json`, `dist`, `artifacts`는 Git에서 제외한다. 날짜는 추적된 실제 기록과 기존 고정 기준에서 만들며 로컬 생성은 운영 배포를 의미하지 않는다. `check:runtime`은 고정 버전 Wrangler 4.151.0을 npx로 받아 실제 Pages 로컬 서버에서 11개 언어 HTML·날짜·자산·preview noindex를 검사하고 종료한다. 최초 실행에는 다운로드가 필요하다.

## 별도 준비가 필요한 작업

지도 타일·카메라·공식 외부 링크는 제공자의 네트워크·공개 상태에 의존한다. 공개 데이터와 사용권이 확인된 현재 이미지는 저장소에 포함되지만 비공개 조사 ZIP·Muse 대화·로컬 QA·운영 기준 결과물은 포함하지 않는다. 신규 조사에는 별도 자료와 접근권한이 필요하다.

배포는 Git push와 분리된 Cloudflare Pages Direct Upload다. 운영자 Cloudflare 권한(대화형 로그인 또는 별도 토큰), 명시된 배포일·커밋, 사용자 배포 승인이 필요하다. [부분 배포 규칙](docs/PARTIAL-RELEASE.md)을 먼저 읽는다. 다른 컴퓨터에 검증된 운영 기준 release.json/graph.json/dist 세트가 없다면 전체 빌드로 시작한다. 기준을 꾸미거나 과거 절대경로를 복제하지 않는다. 이 안내의 검증 명령은 배포·색인 제출을 하지 않는다.
