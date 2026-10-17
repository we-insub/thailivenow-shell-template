# 태국 공항 한국어 메뉴·목록 로컬 반영

사용자 확정: 내비게이션 이름은 ‘태국 공항’. 수완나품 BKK·돈므앙 DMK·푸껫 HKT·치앙마이 CNX만 목록에 표시하고 이번 추가는 한국어만 제공한다. 기존 공항별 언어 설정은 유지한다. 질문은 ‘이용할 태국 공항의 시설과 이용 안내는 어디에서 보나요?’이며 대상은 한국어 여행자다. 운영 배포는 하지 않았다.

## 범위와 관계

- `src/components/DetailHeader.astro`: 한국어 전역 메뉴 → `/ko/airports/`. 모바일 첫 화면에 메뉴 노출. 네 상세에서는 이 메뉴만 활성화한다. 다른 10개 언어·시장 메뉴에 신규 링크를 넣지 않는다.
- `src/pages/ko/airports/index.astro`: 새 목록 → `/ko/airport-assistance/airports/{bkk,dmk,hkt,cnx}/` 네 정본 상세를 초기 HTML 카드로 연결한다. 신규 번역·별도 상세·일정은 생성하지 않는다.
- `src/pages/ko/airport-assistance/airports/[id].astro`: 네 상세 → `/ko/airports/` 목록 복귀 링크. 기존 항공 허브 복귀·항공사·운항 노선·공항쌍·교통·신고 가이드 연결과 시설 데이터는 유지한다. 기존 공항 소속 코드와 한국 시장 데이터로 관계를 판정했다.
- 기존 `/ko/airport-assistance/` 본문의 공항별 상세 진입 링크도 보존한다. 새 목록에서는 항공편 대응 허브를 본문으로 연결한다. 도시 전체·모든 카메라와 일괄 연결할 근거는 없으므로 확장하지 않았다.
- 네 상세 제목은 기존 ‘공항명 항공사 카운터·연락처’에서 ‘공항명 이용 안내 · 시설과 항공편’으로 수정했다. 설명도 기존 시설·이용 방법·한국↔태국 항공사·노선 본문에 맞췄다. 그 외 공항 제목/설명은 유지한다.

## 기준·문체·보존

INTERNAL-LINKING-CONTRACT, SITE-DATES, page-generation-date-contract, operations-site-dates, page-seo-rules, natural-korean-copy, sirocco-user-full-reference-20261014 전체, detail-template-rules, airport-facilities-rules를 읽었다.

새 소개·카드는 시로코의 대중교통/택시 안내처럼 독자가 ‘공항 선택 → 필요한 시설/절차 확인’을 할 수 있게 썼다. 조사 경위와 추상적 추천 대신 각 상세에 실제 있는 안내를 설명한다. 기존 원고의 시간·금액·출처·FAQ·지도 권리·시장별 항공사·제휴값은 수정하지 않았다. 원고 전체 자연화나 공식 자료 재조사는 하지 않았다. 기존의 시설·지도·번역 미완료 범위를 완료로 승격하지 않는다.

다국어 점검: BKK/DMK/HKT 시설 데이터에는 ko와 9개 시장 언어가 있고, CNX는 en 기반 koReview를 한국어로 출력하며 9개 다른 시장 언어가 있다. 사이트 전체 11개 locale 중 공항 시장 상세는 ko와 9개 시장 구조이며, 공통 en을 별도 완성 시장판으로 간주하지 않는다.

## 실제 검증

- `npm test`: 40/40 통과.
- 최종 `npm run build`: 1,822페이지, indexable 1,760, SEO 오류0, 중복 제목0/설명0. 전체 경고134는 기존 길이/keywords 등이며 이번 목록·네 상세에는 SEO 경고가 없다. 전체 본문 전수 의미 검수로 해석하지 않는다.
- 날짜 회귀9/9 및 prepare/audit: 1,822페이지·3,172표식·오류0. 배포일은 기존 2026-10-15를 보존했고 현재 시각을 배포일로 생성하지 않았다.
- `node scripts/audit-site-design.mjs dist`: 1,822페이지 issues0.
- 새 목록·네 상세의 H1 각1개, canonical, 실제 내부 링크 대상, sitemap 포함 수동 HTML 대조 통과. 목록↔상세 링크는 초기 HTML이다. 다른10개 locale 홈에 `/ko/airports/` 추가 링크 없음 확인. 관계 자동화 엔진은 신규 구현하지 않았고 관계 검수는 수동이다.
- PC1280/모바일390: 네 상세 모두 가로넘침0, 시설그룹1, 한국어 검수해석 중복0, 활성메뉴 `/ko/airports/`, 목록 복귀 링크 확인. 목록 카드4개, 모바일 폭390/문서폭390, 태국 공항 메뉴 x198~262로 화면 내 노출.
- 상세의 출처 summary Enter로 열기/닫기 및 상세→목록 실제 클릭 확인. 스크린샷과 DOM 결과는 `artifacts/airports-navigation-20261018/`에 보존.
- 실제 Wrangler Pages 런타임: `npm run check:runtime` 11locale 홈·날짜 응답·자산·preview noindex 통과. 별도 Pages 로컬4338에서 목록·네 상세 HTTP200 및 `site-dates-response` 확인.

로컬 검수 완료. 기존 다른 작업의 미커밋 소스·원고·QA는 보존하며 빌드는 현재 체크아웃 전체 상태를 검증한 것이다. 이번 파일만의 격리 배포 결과가 아니다. 커밋·푸시·운영배포·수집·색인 제출·노출 검증은 수행하지 않았다.
