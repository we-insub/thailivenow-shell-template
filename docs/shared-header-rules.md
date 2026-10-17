# 공통 헤더 규칙

모든 페이지의 로고·네비게이션·언어 선택은 `src/components/DetailHeader.astro`를 사용합니다. 홈과 카메라 상세페이지도 같은 컴포넌트를 사용합니다.

- 디자인 원본: `src/styles/japan/header.css`, `src/styles/japan/global.css`.
- 태국 데이터 연결과 보정: `src/styles/site-adapter.css`.
- 공통 헤더 높이 76px, 1050px 이하 114px. 상단 sticky, 로고·언어 선택 위 줄, 가로 스크롤 메뉴 아래 줄.
- 태국 국기: `/favicon.svg`, 기본 31×31px, 작은 화면 26×26px. 원본 재팬 크기를 유지합니다.
- 페이지별 CSS에서 헤더·언어 메뉴를 재정의하지 않습니다.
- 본문 CSS는 `main` 또는 본문 클래스에 한정합니다.
- `.tln-shared-header`의 `display:contents` 래퍼로 부모 Astro scoped CSS가 실제 헤더에 전달되지 않도록 보호합니다.
- 상단 고정 본문 요소는 `--site-header-height`로 위치를 계산합니다.
- `SiteFooter`와 주요 `main`은 페이지당 각각 하나만 출력합니다.
- `node scripts/audit-site-design.mjs <빌드경로>`로 전체 페이지와 메뉴 내부 링크를 점검합니다. 동작·가독성은 실제 브라우저로 별도 확인합니다.

이식된 디자인 소스는 위 저장소 상대경로에 포함된다. 과거 개인 프로젝트·복원 백업 경로와 조사 로그는 개발 의존성이 아니다.
