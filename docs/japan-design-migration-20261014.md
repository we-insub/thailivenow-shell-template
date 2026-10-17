# 재팬 디자인 → 타이 데이터 이식

참조 프로젝트: `/Users/matowe/Desktop/재팬라이브나우/japan-live-now`
복원 백업: `/Users/matowe/Desktop/thai_live_now_backups/thai_live_now_before_japan_20261014_013437.tar.gz`

## 공통 구조

- `src/styles/japan/global.css`: 재팬 공통 스타일 원본.
- `src/styles/japan/header.css`: 재팬 공통 헤더 원본. 접두사만 `.tln-shared-header`로 변경.
- `src/styles/japan/detail.css`: 재팬 상세 읽기 템플릿. `.airport-detail`을 `.thai-detail`로 변경.
- `src/styles/site-adapter.css`: 기존 태국 콘텐츠·지도 DOM을 공통 디자인에 연결하는 스타일.
- `SiteDesign`, `DetailHeader`, `SiteBrand`, `LanguagePicker`, `SiteFooter`: 모든 문서의 공통 UI.
- 헤더 태국 국기 표시 크기: 기본 31×31px / 1050px 이하 26×26px.
- 모든 공통 헤더는 기본 높이 76px / 1050px 이하 114px, 상단 sticky.

## 데이터와 동작

기존 태국 노선도·역·선착장·버스 터미널·목적지·요금·공항·루프탑·배달 상세 정보와 주소를 보존합니다. 원본 데이터 파일을 디자인 이식 코드에서 덮어쓰지 않습니다.

홈은 기존 태국 지역·카메라·루프탑·교통 안내를 실제 상세페이지와 연결합니다. 지도에서 검색·지역·풍경 필터·핀 선택을 사용하고, 선택 정보는 재팬과 같은 측면 패널 / 모바일 하단 패널에 표시합니다. 모바일 목록 열기·닫기, 선택 닫기, 지도 초기화, 카메라 URL 선택 상태, 원본·상세 링크를 연결합니다.

11개 기존 언어의 카메라 목록과 저장 목록을 추가했습니다. `thailivenow.saved-cameras`는 현재 브라우저 저장 목록입니다. 저장·해제·재방문과 목록 검색을 제공합니다. 기존 언어 선택 URL·선호 저장·자동 선택·Escape/바깥 클릭 닫기를 유지합니다.

## 검증

- 1,655개 페이지 빌드 및 SEO 검사 통과.
- 전체 페이지의 공통 헤더·푸터·main 각 1개, 공통 메뉴의 내부 링크 검사 통과.
- 기존 1,633개 URL 중 누락 0개.
- 버스 터미널 3곳 / 노선 157개 / 요금 안내 125개 / 시간 안내 129개, 기존 감사 통과.
- 홈페이지 변경 외 기존 비공항 상세 본문 텍스트 변경 0개. 공항 문구는 병행 작업의 최신 데이터가 반영돼 이전 빌드와 차이가 있으며, 디자인 이식에서 되돌리지 않았습니다.
- 18개 대표 화면 × 390/900/1440px = 54개 화면, 스크롤 고정·언어 메뉴·가로 넘침·헤더/푸터 중복 검사 통과.
- 11개 언어 × 320/390/1440px = 33개 화면 검사 통과.
- 카메라 선택·저장·해제·저장 목록 재방문·검색 검사 통과, 페이지 JavaScript 오류 0개.

검증 기록은 `artifacts/japan-design-*-audit.json`과 `artifacts/japan-design-*.png`에 저장했습니다. `node scripts/audit-site-design.mjs <빌드경로>`로 공통 UI와 링크를 재검사합니다.

현재 상태: 로컬 반영, 운영 배포는 별도입니다.
