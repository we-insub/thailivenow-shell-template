# 한국어 관광지 허브와 짐 톰슨 하우스 시안

## 승인 범위와 목적

사용자 요청은 한국어 허브를 먼저 보고 상세를 하나씩 판단하는 로컬 시안이다. 추가 질문에 사용자가 짐 톰슨 하우스 상세 1곳을 선택했다. 신규 상세는 `/ko/attractions/jim-thompson-house/` 하나다. 기존 루프탑·전망대와 다른 관광지 상세는 재작성하지 않는다. 다른 채팅의 다국어 개발, 커밋·푸시·운영 배포·색인 제출은 범위 밖이다.

허브의 질문은 태국에서 어떤 종류의 장소를 방문할지이며, 상세의 질문은 짐 톰슨 하우스가 어떤 곳이고 무엇을 어떻게 관람하는지다. 대상은 한국어를 읽는 초행 여행자다. 명소명은 한국어·영어·태국어를 함께 쓴다. 내부 필드명·수집 현황은 여행 안내 본문에 노출하지 않는다.

## 읽은 기준과 적용

AGENTS.md, page-seo-rules.md, natural-korean-copy.md, sirocco-user-full-reference-20261014.txt 전체, detail-template-rules.md, detail-editorial-policy.md, INTERNAL-LINKING-CONTRACT.md, SITE-DATES.md, page-generation-date-contract.md, operations-site-dates.md, shared-header-rules.md, language-settings.md 및 이전 관광지 내비게이션 작업 기록을 읽었다. 현재 RooftopDetail.astro와 rooftops.json의 시로코 원문도 직접 비교했다. fire-your-seo-agency의 SEO·AEO·GEO·LLMO·NEO 원문을 읽고 이번 로컬 제작 범위에 적용했다. 검색엔진 등록이나 블로그 생성으로 범위를 넓히지 않는다.

시로코의 소개 → 핵심 지도/접근 → 기본 정보 → 구체적인 경험과 이용 조건 → 실제 질문 → 관련 안내 → 접힌 출처 구조를 사용한다. 사용자 최신 지시에 따라 형식적인 FAQ 할당은 하지 않는다. 질문은 현장 방문과 한국어 가이드 두 가지다. 본문·FAQ 데이터와 JSON-LD를 같은 자료에서 생성한다.

시로코와 비교한 핵심은 이름을 처음 듣는 사람도 방문 장면을 떠올릴 수 있는지다. ‘실크 사업가의 컬렉션’만 쓰지 않고 티크 목조 주택 여섯 채, 운하 건너 직조 마을, 불교 조각·태국 회화·청화백자·벤짜롱 도자기를 설명한다. 실크 매장과 박물관, 본관과 아트센터를 구분한다. 엘리베이터가 없다는 사실을 계단 이동이 어려운 동행의 방문 판단과 연결한다. 다른 시설의 복장·예약금·관람시간을 복사하지 않는다.

## 구현과 보존

- 한국어만 KoreanAttractionsHub를 사용한다. 다른 10개 시장은 기존 AttractionsHub와 기존 번역 데이터를 그대로 사용한다.
- 일곱 카테고리의 실제 성격을 설명한다. 만든 적 없는 카테고리 상세나 86개 후보의 가짜 링크는 만들지 않는다. 기존 루프탑 허브와 신규 짐 톰슨 하우스 상세만 연결한다.
- 명소의 세 언어 이름을 H1과 허브의 명소 소개에 표시한다. SEO 제목은 실제 방문 질문에 맞추고 긴 태국어 이름으로 키워드를 나열하지 않는다.
- 상세는 공통 헤더·푸터·시로코 공통 detail CSS를 사용한다. 지도와 표·주소 영역 CSS는 새 본문에만 제한한다.
- Leaflet 실제 지도, 지도 자체 확대·축소, 공식 Google 지도 연결과 길찾기, 주소 복사를 제공한다. 좌표는 운영기관 방문 안내의 지도 링크에서 얻은 박물관 위치다. 입구·매표소·차량 승하차 핀으로 바꾸지 않는다.
- 공통 isDetailPath가 attractions 상세를 이미 포함하는지 확인하고 상세/허브 구별과 처리 멱등성 회귀 테스트를 추가했다. 같은 언어 상세가 없는 시장의 hreflang은 생성하지 않는다.
- Article/Museum/FAQPage/BreadcrumbList와 공통 WebPage·Organization 처리를 사용한다. Museum과 페이지 저자 조직, 실제 외부 자료 제작자는 구분한다.

시작 시 존재하던 DetailHeader·RooftopHub·SiteFooter·TopicHub·site-navigation·travel-guide-navigation·site-navigation 테스트의 변경을 보존한다. page-seo-overrides는 기존 한국어 관광지 허브 항목만 이번 범위에서 갱신한다. 초기 변경 파일 해시와 일부 원본은 artifacts/attractions-pilot-20261020/baseline에 보존했다.

## 공식 근거와 상충 판단

현재 박물관의 방문 페이지와 홈페이지에서 요금·마지막 가이드·예약·언어·가방·신발·촬영·흡연·계단·BTS 출구를 읽었다. Heritage Quarter의 영어/태국어 소개에서 재단·주택의 이전과 재조립·태국어 이름을 대조했다. 박물관이 직접 연결한 재단 Google Arts & Culture 소개·온라인 전시에서 행정구역을 포함한 주소와 소장품 설명을 확인했다.

박물관 전용 안내와 공식 홈페이지, 재단 Google Arts 프로필은 10–17시로 일치한다. Heritage Quarter의 10–18시와 상충하므로 현재 박물관 관람 안내를 우선한다. 17시 마지막 가이드 시작을 별도 입장 마감으로 바꾸지 않았다. MuseumThailand의 무료/6번지와 다른 주소/과거 연도는 혼합된 내용이 있어 현재 실무정보 근거로 사용하지 않았다.

실제 자료 열람일은 Bangkok 기준 2026-10-20이다. 확인 중 클라이언트가 Tokyo 기준 2026-10-21이 되었지만 서버 날짜 계약의 운영 시간대와 실제 UTC 시각을 기준으로 기록했다. 운영 배포일을 만들거나 이를 확인일로 복사하지 않았다. `data/site-date-observations.json`에 신규 상세의 실제 확인일을 등록하고 RuntimeDate로 출력한다.

일부 원문은 웹 도구의 공식 페이지 열람/색인 본문으로 읽었다. requests로 받은 403 텍스트는 공식 본문으로 간주하지 않는다. 원문 출처와 공개한 항목, 생략한 세부사항은 `artifacts/attractions-pilot-20261020/field-evidence-and-gaps.json`에 분리했다. 17개 공통 항목을 모두 검토했지만 근거가 없는 세부값은 공개하지 않는다.

## 사진과 미확보 정보

Wikimedia Commons의 Deror_avi 사진 후보 두 개에 CC BY-SA 3.0 표시가 있으나 파일 회수는 403/시간 초과로 실패했다. 사용할 이미지 파일을 시각 검수하지 못해 사진을 넣지 않았다. 빈 사진 박스·다른 장소 사진은 없다. OG/Twitter는 공통 브랜드 이미지와 missing-place-image 예외를 사용한다. 본문에는 재단의 실제 사진·소장품 온라인 전시 링크를 제공한다.

현재 미확보: 정확한 정문/매표소/승하차 좌표, 공식 관람 소요시간, 시니어 요금·세금 명시, 재입장·표 유효기간·다른 전시 포함, 판매처별 취소/환불, 검증된 도보 시간·거리와 귀가 막차, 본관 외 무장애 동선, 화장실·주차·결제·보관함 요금. 사용자가 허용한 대로 없는 항목은 화면에서 생략한다. 출입구가 미확인이라는 이유로 검증된 박물관 위치 지도까지 없애지는 않는다.

## 연결과 검증 기록

허브 → 상세 → 허브의 초기 HTML 링크를 제공한다. 실제 접근 근거가 있는 BTS 실롬선 내셔널스타디움 1번 출구를 방콕 교통 지도와 연결하고, 한국어 방콕 교통 페이지에서도 해당 상세로 들어오는 링크를 추가한다. 같은 도시의 다른 시설·카메라·존재하지 않는 일정을 자동 연결하지 않는다. 관계 판단은 수동 반영이며 새로운 관련 링크 생성 엔진은 만들지 않았다.

PC 1280·모바일 390에서 실제 본문·주소·지도·버튼·표·FAQ·출처를 확인한다. 지도 타일, 확대·축소, 주소 복사, 허브에서 상세 이동, 출처 키보드 Enter 열기/닫기, 단일 H1/main/byline, 가로 넘침과 JS 오류를 검사한다. 다른 언어 원고 보존과 초기 HTML 메타/링크는 별도로 대조한다. 전체 테스트·빌드·SEO/날짜/상세 편집 정책 감사·Pages 런타임의 실행 결과는 같은 artifact 폴더의 로그와 최종 QA 기록에 남긴다.

로컬 렌더·감사 통과는 검색엔진 색인·검색 노출·AI 인용 확인과 다르다. 이번 시안에는 검색 결과 측정일을 임의로 만들거나 자동 제출을 예약하지 않는다. 실제 공개 승인 이후 수집과 검색 성과를 별도로 측정해야 한다.


## Local verification results

125 tests passed. Full build: 2,989 pages. SEO errors: 0; target warnings: 0. Date, editorial and site design audits: 0 errors. Four PC/mobile checks on the Pages local runtime passed: no horizontal overflow or JavaScript errors, loaded map tiles, zoom controls, address copying, hub-to-detail navigation and keyboard source disclosure. Source date 2026-10-20 survives server and client processing. Evidence: artifacts/attractions-pilot-20261020/FINAL-QA.json.

Existing components and copy for the other ten locales were preserved. Their HTML retains the original rooftop link without the new Korean detail link. Both directions of hub/detail and Bangkok transport/detail links were checked in initial HTML. The new detail appears in the local sitemap. No production sitemap submission, commit, push, deployment or indexing request was made.

Review: http://127.0.0.1:4414/ko/attractions/ and http://127.0.0.1:4414/ko/attractions/jim-thompson-house/ . Dev server 4413 is also retained.

## 2026-10-21 한국어 문장·본문 구분 보완

사용자 검토에 따라 허브의 추상적인 마무리 문구를 ‘운영시간과 교통편도 확인해보세요’로 바꾸고 운영시간·관람 방식·왕복 교통편을 설명했다. 짐 톰슨 하우스의 볼거리 설명은 사실을 유지하며 다시 다듬었다. 볼거리 세 항목에 소제목 왼쪽 강조선과 항목 사이 구분선을 넣고, 방문 조건은 신발·가방 / 계단·승강기 / 촬영·금연의 세 카드로 분리했다. 설명을 줄여 카드에 맞추지 않았다.

자료 JSON은 experiences 밖의 모든 필드가 이전 파일과 동일함을 대조했다. 다른 언어 원고·경로는 변경하지 않았다. 125개 테스트 통과, 전체 2,989페이지 빌드 성공, SEO 오류 0, 날짜·상세 편집 감사 오류 0. 기존 전체 SEO 경고 251개는 별도이며 이번 문장·레이아웃 검수 통과와 구분한다. Pages 로컬 4414에서 PC 1280 / 모바일 390의 변경 구역을 캡처했고 구분선·카드 3개·가로 넘침 없음을 확인했다. 증거: artifacts/attractions-copy-layout-20261021/. 운영 배포·커밋·푸시 없음.
