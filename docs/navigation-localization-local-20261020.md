# 공통 메뉴·언어 대응 로컬 작업 기록

2026-10-20. 작업 위치 `/Users/matowe/Desktop/ThaiLiveNow`. 담당 navigation_contract. 로컬 구현만 수행하며 커밋·푸시·배포·색인 제출은 하지 않았다. 기존 dirty 작업은 보존했다.

## 확정 목적과 범위

사용자가 확정한 한국어 메뉴를 정본으로, 태국 여행자의 지도·여행·음식·교통·공항·카메라·저장·음식배달·루프탑·해변·쿠폰·항공편 지연/결항 탐색을 모든 11개 시장에서 같은 순서로 제공한다. 한국어 메뉴의 full/short 문구와 정본 URL은 그대로 유지한다. 다른 10개 시장은 각 시장 언어의 메뉴이며 음식배달·해변은 해당 시장 허브에 연결한다. 마지막 항목은 일반 항공편이 아니라 지연·결항 안내임을 설명한다.

읽은 정본: AGENTS.md, page-seo-rules, detail-editorial-policy, INTERNAL-LINKING-CONTRACT, detail-template-rules, SITE-DATES, page-generation-date-contract, operations-site-dates, language-settings, natural-korean-copy, sirocco-user-full-reference-20261014. 자연언어 기준은 japanlivenow-localized-writing 스킬의 공유 workflow 및 en/in/us/ja/cn/tw/kr 프로필을 참고하되 ThaiLiveNow 11개 시장과 최신 저장소 규칙을 우선했다. 해당 스킬에 없는 Malay/Russian/Spanish/UK는 기존 시장 언어 및 자연스러운 메뉴 의미를 직접 대조했다. 한국어 본문은 수정하지 않았다.

## 구현

`src/lib/site-navigation.mjs`가 같은 12항목과 순서를 생성한다. PC/full 및 모바일/short 모두 이 결과에서 나오며 외국어 short도 같은 의미를 유지한다. 기존 header.css의 가로 스크롤 메뉴 동작은 보존한다. 공항 URL은 한국어 `/ko/airports/`, 외국어 `/:locale/airport-assistance/airports/`의 실제 경로 차이를 보존했다.

`src/lib/travel-guide-navigation.mjs`는 /food-delivery/와 grabfood,line-man,shopeefood,robinhood 상세, /beaches/와 beaches.json의 pilot 19개 상세 및 그 cityId에 해당하는 9개 도시 허브만 동일 주제 대응으로 인정한다. 없는 상세·도시·비지원 언어에는 대응 경로를 만들지 않는다. 양 작업 담당자가 한국어+외국어10시장 전부 같은 ID를 생성함을 확인했다. DetailHeader의 LanguagePicker와 page-seo의 hreflang이 이 단일 대응표를 사용한다. x-default는 공통 영어다. 언어 전환 클라이언트는 명시 대응 경로에서도 query/fragment를 보존하도록 기존 연산 괄호를 보완했다.

상위↔상세 및 도시·카메라 연결의 실제 본문 구현은 beach/delivery 담당 범위다. 전역 메뉴만으로 관계 계약 완료로 판정하지 않는다. 이 작업은 공통 메뉴의 들어오는 허브 링크와 같은 주제 언어 대응만 담당했다.

## 편집 정책·이미지·날짜

기존 isDetailPath가 /beaches/:id와 /food-delivery/:id를 모든 11시장 상세로 이미 포함하고 허브·도시 허브는 제외한다. 정책 코드는 변경하지 않았다. fixture에서 초기 byline 1개·조직 메타·진짜 source 날짜 보존·반복 처리 안정성·이미지 상태를 검사했다. beach 사진 근거는 같은 장소 ID에 연결된 기존 생성 카탈로그를 사용한다. 배달 사진을 만들어 넣지 않으며 기본 브랜드 공유 이미지와 missing-place-image 상태를 유지한다. 외부 사진가·원출처·라이선스·실제 날짜는 수정하지 않았다.

`node scripts/generate-editorial-image-rights.mjs --check` PASS (82 assets). production 5f93126 대비 root에는 beach loop가 새로 있으므로 격리 통합 시 generator와 catalog를 함께 가져가야 한다.

## 검사와 한계

`node --test tests/site-navigation.test.mjs tests/airport-guide-navigation.test.mjs tests/page-seo.test.mjs tests/detail-editorial-policy.test.mjs`: 25/25 PASS. 새 테스트는 11시장/12항목/한국어 exact tuples, 실제 pilot·city·delivery allowlist, 잘못된 경로 제외, 초기 저자·source 날짜·공유 이미지·12개 hreflang 및 반복 처리 안정성을 검사한다.

전체 빌드·생성 HTML·실제 Pages 런타임·PC/모바일·언어 선택 query/fragment 기능은 통합 담당자가 수행한다. 원고 전체 언어 검수·운영 반영·수집·색인·AI 인용은 이 검사로 완료 처리하지 않았다.

## 소유 파일

- src/components/DetailHeader.astro
- src/lib/site-navigation.mjs (new)
- src/lib/travel-guide-navigation.mjs (new)
- src/lib/page-seo.mjs (import 및 alternate map 선택 2줄만)
- src/scripts/language-picker.ts (명시 대응 경로의 query/fragment 보존 괄호)
- tests/site-navigation.test.mjs (new)
- docs/navigation-localization-local-20261020.md (new)

## 격리 통합 시 확인한 기존 한국어 해변 의존성

production5f9312684ee54db516bcab4c254cf098c0588ec7 sourceDirectory와 비교했다. beach data, beach-cities data, BeachHub, BeachDetail, KO national hub route, KO city hub route, TransportPlaceMap(showPlaces/linkLabel/compactPins), image generator의 beach loop, 82asset catalog 및 KO29 beach 날짜 관측값이 필요한 기존 root 차이다. KO beach [id] route·ImportantText·camera-editorial-ko·detail-editorial-policy·header.css는 production과 같다. root 날짜 관측값의 `/ko/transport/guides/air/` 수정은 이 작업과 무관하므로 격리 통합에서 제외한다. 이 비교는 원고 전체 승인이나 이전 공개 승인 증거를 대신하지 않는다.
