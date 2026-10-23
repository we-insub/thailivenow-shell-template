# 교통 안내 다국어 작업 — 2026-10-24

## 사용자 확정 범위

한국어 `/ko/transport/`의 허브·상세 구조와 검수된 정보를 기준으로 실제 지원 중인 11개 언어·시장에서 같은 경로 구조를 제공한다. 일본어 경로는 기존 서비스의 `/ja/`이며 `/jp/`를 새로 만들지 않는다. 한국어 본문을 함축하거나 요금·시간·조건·예외·FAQ·출처를 줄이지 않는다. 각 시장에서 자연스러운 표현으로 작성하고 title·H1·description·공유 메타·canonical·hreflang·FAQ와 본문을 맞춘다.

열차 안내의 4개 도식은 원래 틀과 도형·연결선을 유지하고 글자만 현지화한다. 메타 설명은 각 정본 페이지의 실제 본문을 읽어 150–199자로 작성한다. 허브에서 하위 상세까지 해당 언어로 연결한다. PC·모바일은 로컬에서 검수한다. Initial work was local-only. The later explicit instruction below authorizes the three-task integration, commit, release, push and IndexNow after validation. 중지된 D-Ticket 신규 열차 시범 노선·역 조사 작업은 이 작업에서 재개하지 않는다.

## 필수 원문 적용

작업 시작 시 page-seo-rules, detail-editorial-policy, detail-template-rules, natural-korean-copy, sirocco-user-full-reference-20261014.txt, INTERNAL-LINKING-CONTRACT, SITE-DATES, page-generation-date-contract, operations-site-dates, diagram-localization-rules-20261023, language-settings를 전체 읽었다. 원문에 근거한 사실·날짜와 운영 배포일을 구분하며 관찰 기록이 없는 자료 확인일은 만들지 않는다.

## 구현 구조

- 정본은 언어당 435개, 기존 별칭 9개를 포함한 방출 경로는 언어당 444개다. ID·경로와 별칭 정본은 `transport-route-registry.json`으로 고정한다.
- 공통 한국어 컴포넌트·시설 데이터를 재사용하고 `transport-locales`의 원문 전체 문자열 및 문장 전체 템플릿으로 현지화한다. 원문 중 단어를 임의 부분 치환하거나 페이지를 로드한 뒤 MutationObserver로 바꾸지 않는다.
- 초기 HTML 현지화 후 공통 SEO 처리를 실행한다. 클라이언트 기능은 해당 시장의 공유 사전 로딩 후 초기화하여 지도·검색·공항 이동 비교 결과도 같은 언어로 만든다.
- 조건부 JSX, 날짜·요금·정류장 수·시설 이름을 합성하는 문구는 실제 렌더링에서 추가 대조한다. 기존 1,260개 UI 사전은 순서와 키를 보존하고 누락 문구를 supplemental 사전에 별도로 반영한다.
- 다국어 내부 링크는 실제 교통 정본 경로와 검증된 관련 경로만 사용한다. 없는 번역 URL은 만들지 않는다. 외부 출처와 추적값은 보존한다.
- 추가 관광지 연결 이름은 기존 해당 시장 관광지 데이터의 같은 ID로 대조한다. 같은 도시라는 이유로 새 연결을 만들지 않는다.

## 열차 도식

`generate-transport-diagrams.py`는 공식 Noto OFL 글꼴의 실제 글자 너비·윤곽 경계를 측정해 글자만 SVG path로 바꾼다. 원래 rect·circle·marker 도형은 보존한다. 본래 글자 크기의 75% 아래로 줄이지 않고 두 줄 이내로 배치하며 번호 원과 겹치는 영역을 비워 둔다. 그림·설명·alt가 같은 언어를 가리킨다.

생성 목록·입력/출력 해시·글꼴 해시·각 글자 영역은 `src/data/transport-diagrams/generated-manifest.json`에 보존한다. `check-transport-diagrams.mjs`는 누락·해시 변조·프레임 변경·글자 넘침을 검사하며 전체 build에도 포함했다. 라이선스는 public/licenses에 둔다.

## 출처·날짜 예외

일부 기존 pilot HTML의 공식 출처 링크 뒤에는 잘린 수집 기록이 포함되어 있다. 수집 기록과 원본 HTML은 보존하고 다국어의 공개 출처 목록은 실제 링크와 간결한 출처명만 표시한다. 본문에 필요한 조건을 삭제하는 예외가 아니다.

열차 guide의 운행 예약 기간 관련 기존 원문의 90일 안내와 거리별 1–90일 표현은 새 사실을 임의 선택하지 않고 원문대로 유지했다. 퍼플라인의 시설 유형 필드와 공식 근거 메모가 상충하는 점은 별도 기록하고 메타 설명에 그 주장을 새로 넣지 않는다. 새 공식 자료 조사로 범위를 확대하지 않았다.

## 검수 기록과 상태

실제 결과는 `artifacts/transport-localization-20261024/`와 각 담당자의 STATUS.json에 저장한다. 사전 키 개수와 번역 저장은 완성 페이지·의미 검수·빌드·운영 배포의 증거를 대신하지 않는다.

- `tests/transport-localization.test.mjs`: 경로·별칭·언어 링크·원문 전체 템플릿·외부 주체·noscript·숫자 목록·날짜 회귀 검사.
- `scripts/check-transport-diagrams.mjs`: 32개 도식·480개 라벨 측정과 프레임 보존.
- `scripts/audit-transport-localization.mjs <출력 폴더>`: 전체 경로의 언어·메타 길이·정본·hreflang·초기 HTML 잔여 한국어·실제 내부 링크·FAQ 본문/스키마 정합성 검사.
- 전체 테스트·전체 build/SEO·날짜·공유 이미지/저자 감사·Pages 로컬 런타임·각 언어 PC/모바일은 통합 결과에 대해 마지막에 실행하고 결과를 구분해 기록한다.

The following sections retain intermediate validation history. Final production and submission evidence is recorded in the completion section below.

## 후속 통합·공개 승인

2026-10-24 사용자는 이 교통 작업이 끝난 뒤 `공항 지원 페이지 다국어 확인`, `병렬 다국어 공항 페이지 생성` 두 작업과 합쳐 운영 배포·Git 푸시·IndexNow를 진행하라고 승인했다. 앞선 로컬 전용 지시는 이 세 작업의 검증 완료 후 공개 범위에서 대체된다. 기존 관광지·언어 선택 등 별도 미커밋 변경 전체를 포함하는 승인은 아니다. 두 공항 작업의 정본 문서·소스 manifest와 개별 검증 결과를 대조한 뒤 같은 커밋의 격리 소스로 다시 통합 검증한다.

중간 전체 빌드는 8,909개 페이지를 생성했으나 빌드된 SSR 모듈에서 번역 사전이 비어 있는 문제를 전수 감사로 발견했다. 개발 화면 통과를 배포 근거로 사용하지 않았다. `typeof import.meta.glob` 런타임 가드가 Vite 변환 후 사전을 버리는 원인이었고, 정적 glob 호출을 직접 변환하도록 고쳤다. `transport-production-glob.test.mjs`는 실제 Vite SSR 번들에서 언어별 사전이 남고 대표 문구가 번역되는지 검사한다. 이 중간 빌드는 공개 후보나 성공 기준으로 사용하지 않는다.

역 상세의 기존 FAQ 원문은 같은 배열에서 HTML과 FAQPage를 함께 생성하도록 연결했다. 원문 질문·답과 조건을 추가·삭제하지 않았으며 원문 전체 번역을 사용한다. 출처 날짜는 실제 관측 기록만 표시하며 한국어 자료의 수정일을 외국어 페이지의 수정일로 오인해 복제하지 않는다.


## Resumed integration verification

- EN4/MS/RU/ES/TW canonical metadata: 435 each complete; JA/CN final entries remain in editorial review.
- All 11 hub-to-train links clicked on desktop 1440px and mobile 390px. No page horizontal overflow. Four diagram paths and eight FAQs preserved.
- Native guide names replaced English copies in JA/CN/TW. TW terminology typos corrected. Long domestic-map captions now wrap below the SVG.
- Boat planner boarding/disembarking templates are rendered separately from the final connection. Independent reproduction, live EN interaction and 10-market regression cover the former Korean particle leakage.
- Locale-picker destinations and self-names are preserved. Regression and complete HTML audit now check every market switch destination, including Korean.
- Existing unrelated attraction and language-picker changes remain outside the selected release. DetailHeader koreanStagePage hunks remain working-tree-only; transport hunks are selected.

Source metadata check completed: all 11 locales have 435 canonical descriptions, 150-199 Unicode characters, with zero same-locale duplicate descriptions. Corpus ownership is frozen after worker final checks. The forthcoming release build must pass against this selected committed source, not the earlier invalid preflight tree.


## Full-build gate corrections

The first committed integration rendered 8,909 pages, but the complete SEO gate rejected 21 duplicate-title groups. The transport HTML audit found 690 metadata tag failures from 230 routes: 150 boat-destination composed titles and 80 noindex aliases whose old source descriptions remained Korean. Visible body, FAQ, canonical, language switching and internal-target checks passed across all 4,884 emitted transport routes. No failed tree was deployed.

Boat destination titles now use an explicit whole authored template. Russian generated pier titles retain their boat-route/boarding scope, distinct from the separate Bangkok pier guides. Transport aliases inherit the corresponding canonical market description while keeping noindex and canonical targeting. Regressions cover both failures. A metadata-only preflight across the prior 8,909-page inventory reports zero corrected-title collisions or foreign Korean metadata; this is diagnostic evidence, not a replacement for the new committed full build.


## Completion and production evidence

- Selected source commit: `0d508fc21404268b5965220f36545af505d8cc2e`; unrelated working-tree changes were preserved.
- Full isolated release: 8,909 HTML pages, 168 tests passed, SEO errors/duplicate titles/duplicate descriptions zero, and all 4,884 transport route checks passed. Canonical descriptions: 435 per market, 11 markets, 150-199 Unicode characters.
- Whole-site date, author/publisher, photo-rights and representative-image gates passed. Existing unavailable-photo brand fallbacks remain recorded. The 1,884 SEO warnings were reviewed: 1,840 long authored titles and 44 existing noindex camera aliases or personal pages with short descriptions; no indexed short-description warning remains.
- Actual Pages local runtime passed. Local desktop 1440px/mobile 390px, same-language hub-to-detail navigation, native train diagrams, airport comparison, boat planner and FAQ/source keyboard controls were checked.
- Production upload: `https://d4160475.thai-live-now.pages.dev`; the immutable preview remains noindex. Production `https://thailivenow.com` was verified against the same source commit. Live page checks: 66; exact train-diagram/locale-pack asset hashes: 46. Production desktop and mobile screenshots are retained with QA records.
- Source was pushed to `origin/main`. IndexNow accepted 4,456 changed URLs with HTTP 200. All 8,758 sitemap URLs were read successfully. No Korean metadata/H1/canonical changed, so the Naver-only Korean endpoint had no URLs to resend. Accepted state is saved in `data/indexnow-state.json` for inclusion with this QA record. Acceptance does not establish indexing or search visibility.
- Final evidence: `docs/qa/transport-localization-20261024/STATUS.json` and the retained release artifact `artifacts/release-transport-airports-20261024-v3/`. Historical temporary paths are evidence locations, not setup requirements for another computer.
