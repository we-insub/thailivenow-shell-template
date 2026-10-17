# 수완나품 공항 이동 선택 — 로컬 구현·검수

## 사용자 요청과 범위

2026-10-17 사용자 직접 승인: 기존 검증된 자료로 1번 공항 이동 선택 기능을 한국어 페이지에 구현하고 로컬 검증 후 보여준다. 운영 배포하지 않는다.

- 서비스 목적: 태국 관광 여행자의 준비·현지 이용을 돕는 종합 여행 안내.
- 페이지 질문: 수완나품 공항에서 숙소 지역까지 어떤 수단으로 이동하고 어디에서 타는가?
- 대상: 한국어 `/ko/` 이용자. 국적별 입국 규정을 추가하지 않는다.
- 위치: 기존 교통 → 수완나품에서 방콕 시내 이동 상세. URL `/ko/transport/airports/suvarnabhumi-to-bangkok/`, ID `suvarnabhumi-to-bangkok` 유지. 소개 직후 이용 기능, 기존 지도·본문·FAQ·출처 순서 보존.
- 새 페이지·내비게이션·번역·시장·공개/색인 정책·외부 API·예약·결제·통계 이벤트 추가 없음.

## 구현과 사실 보존

- `AirportTransferChooser.astro`: 지역/공항에서 나올 예상 시각/짐/환승 선호 입력, 철도·일반 택시·Grab 비교, 원문 표/픽업/공항 간 환승 연결.
- `airport-transfer-choice.mjs`: 기존 `suvarnabhumi-to-bangkok.json`의 실제 목적지 행을 이름으로 대응해 노선·구간 운임·합계·시간을 재사용. 표 순서 변경에도 ID 보존. 자료 불일치 시 비교 중단.
- 아속·실롬·왓포/왕궁·시암·카오산 5곳만 선택. 철도 52/62/74바트는 기존 성인 1인 기준. 시암은 ARL 45바트+BTS 별도이며 합산 견적을 만들지 않는다. 카오산은 직결역 없음, 철도 요금/시간 카드 행을 숨긴다.
- 기존 운행 안내 문장 05:30~24:00로 시각을 비교. 자정~05:29는 차량 먼저, 05:30~23:59는 운행 안내 시간 안이라고만 표시한다. 실제 열차 출발·MRT/BTS 환승편 막차·당일 운행은 별도 확인. 이 판정은 탑승 가능 확정이 아니다.
- 짐이 많거나 환승을 줄이려면 차량을 먼저 표시한다. 공항 택시의 미터·50바트 할증·실제 톨비·가능한 짐 비용을 분리한다. Grab에 50바트를 일괄 가산하지 않는다. 차량 실시간 견적·도착시간·인원별 나눗셈·우열 점수는 만들지 않는다.
- 입력을 바꾸면 이전 결과를 숨겨 서로 다른 조건의 결과가 남지 않게 한다. 필수 입력·초기화·결과 제목 포커스·상태 안내 적용. 입력은 브라우저 안에서 처리하며 외부 전송/저장 기능을 추가하지 않았다.
- 기존 가이드 JSON의 본문·표·FAQ·공식 출처는 수정하지 않았다. 생성 HTML에서 원문 텍스트 125개, 출처 8개 보존을 대조했다. 기존 FAQ JSON-LD 보존.

## 날짜·SEO

- AGENTS 및 INTERNAL-LINKING-CONTRACT, SITE-DATES, page-generation-date-contract, operations-site-dates, page-seo-rules, natural-korean-copy, sirocco-user-full-reference 전체, detail-template-rules, airport-facilities-rules, shared-header-rules, language-settings와 시로코 컴포넌트 기준 확인.
- 대상 페이지에 RuntimeDate source/modified/deployment를 명시했다. 실제 자료 확인 기록 null은 미확인으로 보존하고 실제 로컬 콘텐츠 수정일만 2026-10-17 기록. 링크 점검 시각·새 배포일을 만들지 않았다. 로컬 배포일 표시는 기존 baseline 2026-10-15이며 이번 운영 배포를 뜻하지 않는다.
- 기존 title/H1/description, canonical, 공개 정책 및 언어 대응을 유지. 기존 제목은 실제 추가된 이동 비교 기능과 부합한다. 변경하지 않은 다른 두 공항 교통 상세에는 선택 UI를 출력하지 않는다.
- 1,821페이지 SEO 감사 오류 0, 중복 제목/설명 검사 포함 통과. 기존 긴 제목 등 경고 134개는 이번 범위에서 원문 명칭을 임의 축약하지 않음. 대상 페이지 경고 0. 전체 경고를 전체 본문 의미 검수 완료로 간주하지 않는다.

## 관련 연결 계약

새 장소·라우트·일정 관계는 만들지 않았다. 기존 상위↔상세 관계와 선택 결과의 실제 다음 행동을 수동 대조했다.

- 들어오는 초기 HTML: `/ko/transport/`, `/ko/transport/airports/airport-rail-link/`, `/ko/airport-assistance/airports/bkk/`에서 대상 상세로 연결 확인. 기존 관계가 충족돼 불필요한 상위 페이지 변경은 하지 않음.
- 상세→상위: 본문 breadcrumb의 `/ko/transport/` 보존.
- 철도 이용 관계: `/ko/transport/airports/airport-rail-link/` 연결. 같은 언어 실제 정본.
- 공항 간 환승은 별도 목적지: `/ko/transport/airports/suvarnabhumi-don-mueang/`로 안내하며 시내 이동 결과에 혼입하지 않음. 실제 클릭·도착 제목 확인.
- 페이지 내 `#destinations`, `#taxi-cost`, `#apps`, `#pickup` 실존·문맥 확인. 목적지 표 앵커 실제 이동 확인.
- 대상 초기 HTML의 내부 링크/앵커 총 62개 대상 파일·ID 대조. canonical `https://thailivenow.com/ko/transport/airports/suvarnabhumi-to-bangkok/` 및 사이트맵 포함 확인.
- 관계 자동 생성 엔진은 이번에 만들지 않음. 수동 관계 검수 + 생성 HTML 대상 검사 실행. 기존 전체 메뉴/링크 디자인 감사 유지.

## 한국어 직접 검수

시로코의 대중교통/택시, 시간·짐 조건, 구체적인 행동 순서와 비교했다. 사실을 다시 조사하거나 시로코의 시설 조건을 복사하지 않았다.

- 추상적인 ‘이동 조건 입력’ 대신 ‘숙소가 있는 지역’, ‘공항에서 나올 예상 시각’, ‘입국심사와 짐 찾기를 마친 뒤’를 사용해 누가 언제 무엇을 입력하는지 명확히 했다.
- ‘입력한 14:00는’이라는 어색한 조사를 ‘입력하신 시각(14:00)은’으로 재작성했다.
- 택시는 1층→게이트→Public Taxi 발권기→대기표, Grab은 앱 목적지→지정 승차장→번호판 대조 행동으로 설명한다. 확인되지 않은 출구·보행시간·견적은 추가하지 않았다.
- 운행 안내 시간과 실제 출발·환승 막차를 구분하고, 성인 1인/차량 비용과 대기·도보 제외 조건을 화면에 유지했다.

## 실행 검증

- `npm test`: 전체 35개 통과(신규 6개: 운임/시암 별도, 자정·시각 경계, 카오산, 짐·선호, 잘못된 입력, 표 재정렬·원문 불변).
- `npm run build`: 전체 1,821페이지 빌드, SEO 감사 통과. postbuild 날짜 테스트 9개·날짜 생성·prepare·감사 오류 0(3,113 표식).
- `node scripts/audit-site-design.mjs dist`: 1,821페이지 issues 0.
- `npm run check:handoff`: 통과.
- `npm run check:runtime`: 실제 Wrangler 4.151.0 Pages 로컬 런타임에서 11개 언어 HTML, 릴리스 날짜 JSON 일치, 정적 자산/사이트맵/robots, preview noindex 통과. 첫 실행은 별도 미리보기와 동시 구동 시 포트 충돌로 실패했으며 이 작업의 미리보기를 종료한 뒤 단독 재실행하여 통과. 다른 작업의 서버는 종료하지 않음.
- Pages 미리보기 `http://127.0.0.1:8788/ko/transport/airports/suvarnabhumi-to-bangkok/#transfer-choice`에서 클라이언트 실제 동작 확인. 개발 서버만으로 검증을 대체하지 않음.
- PC 실제 CSS 1,422px / 모바일 실제 CSS 390px: 가로 스크롤폭=뷰포트, 입력/결과 카드 가독성 확인. 브라우저 확대율을 반영해 실제 CSS 폭을 읽어 검수했으며 임시 뷰포트 복원.
- 브라우저 입력: 아속 14:00/00:00/05:29/05:30, 시암 23:59, 카오산, 실롬·많은 짐·숙소 앞 선호, 미입력·초기화·조건 수정 후 이전 결과 숨김. 키보드 Enter 비교와 출처 Enter 열기/닫기 확인. 모바일 Pages에서 아속 00:30 차량 우선 확인.
- 서버 HTML과 클라이언트 이후 날짜: source 미확인, modified 2026-10-17, deployment 기존 2026-10-15; 서버 snapshot 존재 확인.
- JS 미실행용 noscript 문구·기존 목적지 표·승차 정보·초기 HTML 실제 링크 보존 확인(브라우저의 JS 비활성화 모드로 별도 실행한 것은 아님).
- 로컬 증거: `artifacts/airport-transfer-choice/content-links.json`, `desktop-result.png`, `mobile-night.png`. 빌드 감사: `artifacts/seo-audit.json`. 임시 실행 로그는 `/tmp/tln-transfer-*.log`. 개인 로그/QA 산출물은 커밋 대상에서 제외.

## 상태와 제한

로컬 구현·검증 완료. 미리보기 서버를 열어 사용자 확인용으로 유지한다. 커밋·푸시·운영 배포·색인 제출 없음. 다른 공항·숙소 상세 주소 검색·실시간 운행/배차·가격 API·예약은 구현 범위 밖이다. 자료 확인일 null을 새 검증 완료일로 바꾸지 않았다.
