# 관광지 상위 메뉴와 루프탑 하위 허브 — 로컬

사용자 확정: 모든 언어 상단 루프탑 메뉴를 관광지로 변경한다. 관광지 허브에서 루프탑을 누르면 현재 루프탑 화면으로 들어간다. 이후 관광지 자료를 받을 예정이며 이번에는 없는 관광지 정보·새 상세를 만들지 않는다. 작업자 Codex, /Users/matowe/Desktop/ThaiLiveNow main7402659. 기존 목적지 카드 CSS 수정은 별도 사용자 승인 작업으로 보존한다. 운영 배포 승인 없음.

대상: ko/ms/zh-cn/en/en-in/ru/ja/en-gb/en-us/es/zh-tw. nav의 기존8번 루프탑 위치를 관광지(attractions)로 교체하고 순서는 유지한다. 언어별 자연스러운 메뉴명과 제목/설명/루프탑 카드 문구는 attractions-hub-copy.json에 저장. /[locale]/attractions/ 11개 허브는 하나의 AttractionsHub 템플릿과 정적 경로를 사용한다. 준비중 카테고리나 빈 시설 카드를 추가하지 않는다. 현재 공개된 루프탑·전망대 링크 하나를 표시한다.

연결: 상단/하단 관광지 → 같은 시장 /attractions/ → 같은 시장 기존 /rooftops/. 루프탑 허브와 도시·페이지네이션 화면의 공통 RooftopHub에서 관광지로 돌아가는 초기 HTML 링크를 제공한다. 루프탑 기존 상세·도시·목록 URL, 시설44개 데이터·사진·조건·원고·원출처는 유지한다. 관광지/루프탑 하위에서 상단 관광지 활성 상태 유지. 다른 카테고리·기존 쿠폰 보류·메뉴순서·시장 조건을 변경하지 않는다.

읽고 적용한 저장소 계약: AGENTS, page-seo-rules, natural-korean-copy, sirocco-user-full-reference-20261014 전체, detail-template-rules, detail-editorial-policy, INTERNAL-LINKING-CONTRACT, SITE-DATES, page-generation-date-contract, operations-site-dates 및 language-settings. 신규 허브는 상세가 아니므로 byline/상세 판정에 추가하지 않는다. 루프탑 소개·이용조건은 재작성하지 않고 상위 복귀 링크만 추가한다. 날짜는 생성하지 않고 기존 실제 기록/메타를 유지한다. 시로코의 구체적인 장소·이용 내용 소개 원칙을 적용하며 새 관광지의 인기·요금·운영 정보는 만들지 않는다.

SEO: 각 허브에 같은 시장 canonical, 해당 언어 H1/설명, OG/Twitter 공통 처리, 11개 언어+x-default alternates. 한국어 명시적 메타만 기존 override에 추가. 기존 루프탑 메타·URL은 유지. travelGuideAlternatePaths는 관광지 허브만 새로 허용하고 아직 생성하지 않은 관광지 상세의 언어 URL을 만들지 않는다. 사이트맵은 기존 전체 생성기가 다음 빌드에서 실제 라우트를 열거하는 구조를 유지하며 이번 개발 서버 확인을 운영 sitemap 변경으로 보고하지 않는다.

검증: 사용자 지시대로 전체 테스트/빌드 반복 없이 변경 관련 nav/SEO 회귀6개 통과. 각 언어 관광지 허브 HTTP200/H1한개/canonical/alternates12개/같은 시장 루프탑 초기링크 확인. 11언어 PC1280/모바일390 총22개 대표 화면에서 메뉴활성1개·루프탑 목적지·가로넘침 없음. 한국어 카드 실제 클릭 → 기존 루프탑 지도와 시설44개 존재·관광지 상단활성 → 복귀 링크로 관광지 허브 이동을 확인. 기존 루프탑 화면에서 내용 재작성 없음. git diff --check 통과. 전체 빌드·실제 Pages 런타임·운영 sitemap·색인 검증은 이번에 하지 않았다.

로컬: http://127.0.0.1:4413/ko/attractions/ . 이전4411은 기존 스냅샷이라 이번 변경이 없다. 근거 artifacts/destination-card-fix-20261020/attractions-*.json 및 attractions-tests.log. 커밋·푸시·운영 배포·검색 제출 없음.
