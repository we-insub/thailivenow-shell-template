# 한국어 홈·메뉴 검색 제목과 설명 — 로컬 검수

2026-10-20. 작업자 Codex root. 작업 디렉터리 `/Users/matowe/Desktop/ThaiLiveNow`. 사용자가 확정한 서비스 목적: 태국 여행지·공개 카메라/라이브캠·음식·루프탑·해변·공항·교통 안내. 대상은 한국어 이용자이며 기존 내비게이션 11개 목적지에 적용한다. 운영 배포·푸시·수집 요청은 이번 작업 범위가 아니다.

## 읽고 대조한 기준

page-seo-rules.md, natural-korean-copy.md, sirocco-user-full-reference-20261014.txt 전체, INTERNAL-LINKING-CONTRACT.md, SITE-DATES.md, page-generation-date-contract.md, operations-site-dates.md. 시로코의 소개 항목처럼 구체적인 장소·제공 정보·독자의 행동을 먼저 설명한다. 홈을 카메라 시청 기능 하나로 설명하던 문구는 서비스 전체 범위로 바꿨다. 음식 메뉴의 식문화·음식 소개를 실제 식당 추천인 '맛집'으로 바꾸지 않았으며, 라이브캠·CCTV가 전부 현재 생방송이라는 의미로 쓰지 않았다.

## 변경 범위와 보존

- 기존 page-seo-overrides.json에 한국어 정확한 허브 경로 11개의 title/description을 추가. 기존 상세의 설명과 모든 다른 언어 값은 보존.
- 공통 page-seo.mjs는 정확한 경로의 명시적 title을 읽도록 한 줄 수정. 기존 기본값·정본·공개 상태·사진·날짜·사실은 유지. OG/Twitter/WebPage 메타는 기존 공통 동기화를 이용.
- ThailandMap의 홈 H1 및 PC·모바일 소개, CameraDirectory의 목록 제목·소개는 locale==='ko' 조건으로만 변경. 다른 언어의 분기 문자열은 유지.
- 기존 메뉴·링크·노선·사진·출처·FAQ는 보존. 실제 메뉴로 이동하는 관계도 유지하며 새 상세·번역·정본 URL을 만들지 않았다. 저장은 개인화 페이지이므로 기존 noindex를 유지. 쿠폰 메뉴는 기존 hold를 보존하여 이번 범위에서 제외.
- 다른 채팅의 다국어 원고를 수정하지 않음. 기존 변경이 많은 주 디렉터리는 전체 커밋/복원하지 않음. 빌드 검증은 별도 소스 스냅샷에서 실행하며 운영 업로드하지 않음.

## 최종 원고

### /ko/

제목: 타이라이브나우 | 태국 여행 지도·라이브캠 CCTV·음식·교통

설명: 태국 여행지와 공개 라이브캠·CCTV를 지도에서 찾아보세요. 도시별 음식, 루프탑·전망대, 해변과 공항·교통 안내를 함께 보고 여행을 준비할 수 있어요.

### /ko/destinations/

제목: 태국 여행 준비 | 도시별 여행지·입국·여행 시기 | ThaiLiveNow

설명: 방콕·치앙마이·푸껫 등 도시와 섬별 여행지를 골라보세요. 한국 여권 여행자의 태국 입국·TDAC·비자 준비부터 여행하기 좋은 시기와 해변·루프탑 안내까지 함께 볼 수 있어요.

### /ko/food/

제목: 태국 음식 가이드 | 도시별 대표 음식·먹는 방법 | ThaiLiveNow

설명: 팟타이와 똠얌꿍부터 치앙마이·푸껫의 대표 음식까지, 태국에서 무엇을 먹을지 알아보세요. 음식별 재료와 먹는 방법, 길거리 간식과 과일의 제철도 함께 소개해요.

### /ko/transport/

제목: 태국 교통 안내 | 공항 이동·전철·버스·보트 | ThaiLiveNow

설명: 태국 공항에서 시내로 가는 방법과 전철·기차·버스·보트·택시 이용 방법을 알아보세요. 방콕 노선과 역·선착장 위치를 살펴보고 여행지까지 이동할 교통편을 고를 수 있어요.

### /ko/airports/

제목: 태국 공항 안내 | 수완나폼·돈므앙·푸껫·치앙마이 | ThaiLiveNow

설명: 수완나폼·돈므앙·푸껫·치앙마이공항의 출발·도착과 시설 이용 방법을 알아보세요. 이용할 공항을 고르면 항공사 카운터, 공항 안에서 필요한 시설과 시내 이동 안내를 볼 수 있어요.

### /ko/directory/

제목: 태국 라이브캠·CCTV | 지역별 공개 카메라 | ThaiLiveNow

설명: 방콕·푸껫·코사무이 등 태국의 공개 카메라(CCTV)와 라이브캠을 찾아보세요. 촬영 장소와 영상·갱신 사진의 제공 방식을 살펴보고 카메라별 원본 화면으로 이동할 수 있어요.

### /ko/saved/

제목: 저장한 태국 카메라 | 라이브캠·최근 본 카메라 | ThaiLiveNow

설명: 이 브라우저에 저장한 태국 카메라와 최근 본 카메라를 다시 찾아보세요. 관심 있는 장소의 풍경과 카메라별 원본 화면을 이어서 볼 수 있어요.

### /ko/food-delivery/

제목: 태국 음식배달 앱 | GrabFood·LINE MAN 주문 방법 | ThaiLiveNow

설명: 태국의 GrabFood·LINE MAN·ShopeeFood·Robinhood 음식배달 앱을 알아보세요. 배달받을 주소를 입력하고 음식점을 고르는 방법부터 결제·배달비 확인까지 주문 전에 필요한 내용을 안내해요.

### /ko/rooftops/

제목: 태국 루프탑·전망대 | 예약·입장·가는 방법 | ThaiLiveNow

설명: 방콕·파타야·푸껫 등 태국의 루프탑과 전망대를 지도에서 찾아보세요. 시설별 전망과 예약·입장 조건, 드레스코드와 가는 방법을 살펴보고 방문할 곳을 고를 수 있어요.

### /ko/beaches/

제목: 태국 해변·해수욕장 | 도시·섬별 해변 지도·가는 방법 | ThaiLiveNow

설명: 푸껫·코사무이·끄라비 등 태국 도시와 섬의 해변을 비교해보세요. 해변별 풍경과 가는 방법, 배를 타야 하는 곳과 물놀이 전에 알아둘 조건을 함께 소개해요.

### /ko/airport-assistance/

제목: 태국 항공편 지연·결항·수하물 | 신고·확인서·보험 서류 | ThaiLiveNow

설명: 태국 여행 중 항공편이 지연·결항되거나 짐이 파손·지연됐을 때 먼저 할 일을 알아보세요. 항공사별 신고와 확인서 발급 방법, 보상 신청과 여행보험 청구에 필요한 서류를 안내해요.

## 검증

수정 전/후 비한국어 10개 시장 × 6개 경로, 총 60개 메타 생성 결과가 바이트 단위로 동일하다. 기존 상세의 원고·공개 상태는 변경하지 않았다. 공유 메타·중복 적용·한국어 메뉴 전 경로·비한국어/상세 격리·개인화 noindex 회귀 검사를 추가했다. 전체 테스트는 121개 통과. 전체 빌드·SEO/날짜/편집 정책 감사 및 Pages 런타임·PC/모바일 최종 결과는 완료 후 추가한다.

## Final local validation

Full tests 121 passed; final focused tests 11 passed. Final npm run build (build-complete.log) passed for 2,977 pages: SEO errors 0, existing warnings 251, duplicate titles/descriptions 0; date/editorial audits errors 0. Initial snapshot Git metadata failure is retained in build.log and is not a successful build. The final build explicitly provided the existing source commit; no production date was invented.

Pages runtime checks passed for 11 locale homes, assets and preview noindex. All 11 changed Korean landings returned HTTP200 with server date snapshots. Browser checks at desktop1280/mobile390 passed 22 title/description/H1/overflow observations. Home and camera-list copy was visually read. Other page bodies were not fully re-reviewed. The 11 preview HTML files are byte-identical to the final build. Non-Korean metadata fixtures (60) and existing override records were preserved. Existing canonical/robots/links remained, saved page stays noindex. Robinhood closure wording in an intermediate draft was rejected after checking the existing delivery guide; final copy preserves all four supported guide entries.

Preview: http://127.0.0.1:4410/search-preview.html ; home: http://127.0.0.1:4409/ko/ . Evidence: artifacts/ko-menu-seo-20261020/. No commit, push, deployment or search-engine submission was performed.
