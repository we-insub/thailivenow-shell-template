# ms 말레이시아 전체 원고 번역 · 데이터 검수

소유 범위는 src/data/localized/ms/의 travel.json, rooftops.json, cameras.json, ui.json, entry-evidence.json, status.json, review.md다. 공유 렌더러·한국어 원문·정본 날짜·라우트는 수정하지 않았다. 생성 스크립트와 실제 읽은 KL공관 TR1 이미지는 artifacts/localization-20261018/ms/에 둔다.

## 읽은 원문과 기준

필수 규칙 원문은 출력이 잘린 묶음을 작은 범위로 다시 읽었다. 시로코 변경 전/후 192줄, 자연화 분석, 상세 템플릿의 과거 보류와 최신 해제, 날짜·언어·연결 계약을 실제 읽었다. 아래 해시는 이번 읽은 파일 식별용이며 원문 읽기의 대체 증거로 삼지 않는다.

- `AGENTS.md` · f0a46b54fac3497114bae5890a1b0a8bbe31a83d987dc778a3eaee07e32bd750
- `docs/INTERNAL-LINKING-CONTRACT.md` · 465a7b8a21ce74f94900891815ba82009deb516813c6c81da9654027f4a9261a
- `docs/page-seo-rules.md` · 5276cb346166a300ee9458ab94f7669287583aad55a775417e5efb516f6d005e
- `docs/natural-korean-copy.md` · 9a43b6e801d1670f8079cce8fd30bcacbe96989673b6835df362ebd384976b0a
- `docs/sirocco-user-full-reference-20261014.txt` · a0e56df08336de7d2437b8d6a523bcaeb83f75271924734205cbb1f82fa71f77
- `docs/detail-template-rules.md` · ea0687f7f2416300370f1c1fc1e998429189230116da5b5e6640cbd75653c0e0
- `docs/SITE-DATES.md` · 843c575243a8804c91e981f29db5e615c13971809e6cb13931d909355348a01e
- `docs/page-generation-date-contract.md` · a07157af48b6c7b7e241244fb9af50bfaca209c988dc1cc5fee2916d3b9188bc
- `docs/operations-site-dates.md` · d2328160c259485a6bb0d6296db17832bc3c299b12f0fc974a61f5da87fe76c5
- `docs/language-settings.md` · 897b427099e0bacd5bea77dd5b0a9d8b71ae8fc8786475a730237d3426fb3af1
- `docs/travel-hub-entry-copy-review-20261014.md` · 2c9179e25956810fd2e6b85bca3304d4b9bdb1627db676cb6cbe636d2f1671ec
- `docs/destination-intros-ko-20261015.md` · b27b5b40ce26cc8d435d68da2ea1afb26c0f9987e9faee685217dd0fed06211f
- `docs/destination-card-layout-local-20261018.md` · 87aaafd9ca0c5d79a130082744aa211a3a3774603a6bddc039283114f9495172
- `docs/travel-seasons-review-20261014.md` · 6199aa061c9a287e5006064d6600333118321809e12ca46c5b3fa0869ee32cd8
- `docs/travel-seasons-korean-rewrite-20261015.md` · 271d434b2727f4f3ab2405660fc73ab12c0c5b2f175224b64cbe93a70cd89679
- `docs/travel-seasons-menu-meta-20261015.md` · 324cfa827cceb6d54e8910022022fabb0834558defc4b5d5ff3d942ff7333f89
- `docs/entry-korean-editorial-review-20261014.md` · acc89b2833896ce2928984523de4f4efb81e3eae07bdd09b5196275891bf7143
- `docs/camera-beginner-review-local-20261017.md` · 8faa92d346716103d29e688b227954cd22eb7eb2765f1923c958bf1d800ea007
- `docs/camera-place-review-local-20261018.md` · a38773bce77a0f3ab21d6009a911ef012c3e6022b8fc6e8a5a2e90ceaf822897

한국어 TopicHub 여행분기, TravelSeasonPage/EntryGuideLayout의 하드코딩 본문, RooftopHub/Detail/Map 및 camera-editorial-ko.json 29개·CameraKoreanDetail와 목록/지도/비교 컴포넌트도 직접 읽었다. 다른 작업의 미커밋 변경을 보존했다.

## 실제 작성 범위

- 여행: 목적지13개 전체소개, 여행시기6지역×12개월의 장점/주의사항/시즌 및 지역 전체소개·카드·추천FAQ답변. 한국어 수치360개, 관측소·PDF쪽·기간·출처·확인일 보존. 여행시기 허브/우기건기의 하드코딩 장문/FAQ/표/라벨은 ui사전에 포함.
- 입국: entry/tdac/visa/tourist-visa 4개, sections 5/11/4/4와 FAQ 3/10/3/4의 전체깊이. TDAC각항목설명·캡션·공식영상완료예시/미제출조건·수정불가4정보·사진과영상차이·건강신고조건 보존. 한국에서출발/한국여권예시는 말레이시아 실제상황으로 전환하고 기존스크린샷이 한국을선택한 예시인 사실은 사진설명에 명시.
- 입국/비자 예외만 신규공식조사. Malaysia일반여권30일제도/발효일, KL신청실제위치, 수수료와TR1서류, 처리기간과권고신청여유 구분. Seoul/한국양자협정90일/한국수수료면제/K-ETA조건 복제하지않음. 사실변경원문·보류는 entry-evidence.json에 기록.
- 루프탑: 공개44개 전체intro/facts/reasons/menu/signature/recommended/bestTime/seating/budget/reservation/entrance/skyWalk/locationNote/FAQ/access/taxi표시문장, 사진alt/caption/changes, 출처라벨. 없는필드·빈사진을 새로채우지않음. 모든기존키·배열길이보존. 주소·전화·금액·시간·연령·취소경계와조건·예외 보존.
- 카메라:29개 전체public필드와기존intro/sceneParagraphs/FAQ배열길이보존. basis/relatedIds/근거URL불변.3쌍관계이외새관계생성없음. 지역참고좌표와정확한설치점구분,갱신사진과영상구분,중개사이트와원천운영자구분,현재방송미확인유지.
- 공통UI:여행허브/여행시기/입국/루프탑허브·상세·지도/카메라상세·목록·갤러리·지도결과·비교·영상방식/메뉴·페이지네이션의원문키→말레이어사전.동적템플릿의변수표기는원문그대로유지.루트통합에서실제텍스트조각/클라이언트생성문장대조필요.

## 시로코와 직접 비교한 편집 판단

소개는 장소의특징→누구와무엇을할지→경험으로연결했다. 예컨대 Sirocco는 황금돔/지중해식사/연인기념일·부모님/석양과도시불빛을모두유지하고말레이어문장순서로썼다. 예약FAQ는입금확정·식사비차감·72시간전무료변경/그이후환불불가·특별행사/단체예외를각각보존했다. 하이힐·정장필수로만들지않았고,금지복장과추천예시를구분했다.

Baba Nest는투숙/외부각1,500/3,000net·17–20시·15분보류·취소/노쇼전액·악천후대체사용을보존했다. Spire20세미만19시까지,Flute7세이상성인동반,BARBÙ가족허용과Skybar18세이상,Distil/Alfresco/No.3/CRU/Cocoa20세이상조건을서로섞지않았다.공연요일/시간이없는시설에새일정을만들지않았다.

카메라문장은장소/풍경을앞에두고시청조작은별도UI로뒀다. Cape Panwa의NĀMA Bay촬영대상과Tang Khen Bay지도참고점을동일설치장소로확정하지않았다.정보부족한강/사원/해안은없는교통·입장조건·안전을추가해길이를늘리지않았다.모든전망대를바또는로맨틱명소로소개하지않았다.

## 실행한 검수와 남은 통합 관문

JSON구문로드,여행360개기후수치동일,13목적지·4입국전체섹션/FAQ배열길이,44루프탑전체키/배열길이·ID·좌표·공개상태·URL·사진권리/원출처·영어/태국어기사문장동일,29카메라ID·근거·관련ID·근거URL·배열길이동일을실행확인했다. 루프탑/카메라 public데이터의한국어잔여0. travel의한국어잔여는원래TDAC내부verificationEvidence.review뿐이며본문에노출되지않는다.

status complete는해당번역데이터단계완료다.공유통합후실제HTML의same-language링크·canonical/hreflang·sitemap·공개필터·PC/모바일·동적지도/필터/월선택/저장비교·키보드출처·전체테스트/SEO/날짜감사/Pages런타임은담당루트의미완료관문이다.한국어access.detailUrl등정본URL은원본에보존했으므로실제같은시장공개페이지가없다면관련추천을보류해야한다.새배포일/확인시각을만들지않았다.커밋·푸시·배포·색인신청없음.

## 첫 통합 HTML의 UI 보완

루트가 생성한 artifacts/localization-20261018/ms/html-audit.json의 101페이지 결과와 279개 gaps 원문을 읽었다. 루프탑/여행의 실제 텍스트 조각, strong 전후, 메타·제목 2쪽, 날짜 콜론, 월 이름과 강수일 단위, 연결·출처·사진 credit 문장을 exact key로 보완했다. 카메라는 해당 빌드 시점 pending의 구형 템플릿도 포함돼 있어 그 구문 역시 사전에 추가하되 카메라 전문원고 HTML 완료로 계산하지 않는다. src/lib/locale-text.mjs의 translateLocaleText(value,dict)를 실제 가져와 279개 전체 원문에 실행했고, 말레이어 출력의 한글 잔류 0개를 확인했다. 이는 새 빌드·실제 PC/모바일·스크립트 이후 UI 검수를 대체하지 않는다. 이름과 영문 공식명이 같은 루프탑에서 H1/title에 이름이 중복되는 문제는 공유 렌더러 담당 루트에 전달했다.

입국 현금20,000/40,000바트 문장은 워싱턴 태국대사관의 2026-09-17 갱신30일제도 공통조건 원문(281–286행)으로도 대조했다. 미국 전용 공관신청 조건을 가져온 것이 아니라 해당 무비자제도 공통 cash 조건만 사용했고, KL 비자신청 은행증빙20,000바트와 구분했다. 원문 URL과 실제 읽은 범위는 entry-evidence.json에 추가했다.

## 두 번째 native 카메라 HTML의 UI 보완

갱신된 같은 HTML 감사의 213개 gaps를 전부 읽고 exact key로 보완했다. 카메라 전문원고가 처음 적용된 레이아웃의 title/meta·지역/장소 조합·참고지도 aria·제공자/사진 credit·중개사이트 설명·비교바·footer 및 저장/공유 버튼을 포함한다. saved-cameras.ts, DetailHeader.astro, SiteFooter.astro, camera-weather.ts 실제 원문을 직접 읽고 비교제거/4개제한/저장불가/링크복사/최근본빈상태/동적바람 전체줄/날씨지역명 패턴도 추가했다. translateLocaleText를 213개 전체에 실행해 한글잔류0을 확인했다. 실제 번역 출력은 artifacts/localization-20261018/ms/native-gap-translations.json에 보존했다. UI 사전은 이 단계에서920키다. 새 빌드·공유코드 변경은 없고 최종 HTML 및 브라우저 재검증은 루트 관문이다.
