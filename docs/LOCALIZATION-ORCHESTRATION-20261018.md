# 한국어 정본 기준 10개 언어·시장 현지화

2026-10-18 사용자 실행 승인. 한국어 정본의 태국 여행·루프탑·카메라 전체 본문을 기준으로 외국어 기존 페이지도 자연스럽게 다시 맞춘다. 자료조사는 하지 않는다. 단, 입국·비자 조건은 사용자 추가 승인에 따라 해당 국가 여권·신청 공관의 공식 자료를 새로 확인한다. 공통 영어는 특정 국적의 체류 조건을 보편 규정으로 쓰지 않는다.

## 실행과 소유권

- 총괄/A: 기존 채팅. ms, zh-cn, en 언어별 내부 작업자가 각각 여행 → 루프탑 → 카메라를 직렬 처리한다.
- B: 프로젝트 별도 채팅. en-in, ru, ja를 언어별 내부 병렬 처리한다.
- C: 프로젝트 별도 채팅. en-gb, en-us, es를 언어별 내부 병렬 처리한다.
- D: 프로젝트 별도 채팅. zh-tw를 처리한다.
- 총괄·각 채팅·각 언어 작업자는 GPT-6.1 Sol Medium을 사용한다(사용자 명시). 공유 checkout에서 언어별 폴더만 작성한다. 다른 언어의 원고를 덮어쓰지 않는다.
- 공통 렌더러·라우트·메뉴·언어 전환·페이지네이션·관련 링크·SEO·날짜 레지스트리·공통 검사·전체 빌드는 총괄만 수정·실행한다. 각 세트는 작성 결과를 same-language 실제 페이지로 통합하도록 총괄에 인계한다.
- 이번 현지화는 로컬 제작·통합·검수 범위다. 커밋·푸시·배포·색인 제출은 별도 승인 전 하지 않는다. 다른 작업의 미커밋 소스·자료·QA를 보존한다.

## 작업 전 원문 전체 읽기

AGENTS.md, docs/INTERNAL-LINKING-CONTRACT.md, page-seo-rules.md, natural-korean-copy.md, sirocco-user-full-reference-20261014.txt, detail-template-rules.md, SITE-DATES.md, page-generation-date-contract.md, operations-site-dates.md, language-settings.md를 모두 원문 전체 읽는다. 출력이 잘리면 나눠 재독하고 요약·함축문으로 대체하지 않는다. 각 분야의 기존 여행·입국·카메라·루프탑 작업 MD와 실제 한국어 본문·템플릿도 직접 읽는다.

한국어 기준: 목적지 13개, 여행시기 허브/6지역/우기·건기 8페이지(72개월), 입국4상세, 공개 루프탑·전망대44시설+전체/6도시허브, 카메라29상세+목록/지도/저장/비교. 새로운 관광 사실·가짜 페이지 관계·사진·가격·교통값을 만들지 않는다. 기존 국적 조건을 다른 국가에 복제하지 않는다.

## 언어별 데이터 계약

소유 경로는 `src/data/localized/<locale>/`다. 데이터는 임시 파일에 쓰고 원자적으로 교체하여 불완전 JSON이 공유 렌더러에 들어가지 않게 한다. 생성 스크립트·조사 캡처는 `artifacts/localization-20261018/<locale>/`에 보관한다.

1. `travel.json`: `{destinations:{title,description,h1,intro,areas:{[travelAreas.id]:{name,intro}},entryHeading,entryIntro,seasonsHeading,seasonsIntro},seasons:<travel-seasons-ko.json 동일 전체 구조>,entry:<entry-guides-ko.json 동일 4 guide 배열>}`. 여행시기 숫자·ID·기간·출처·확인일은 그대로 보존한다. 입국은 해당 국가 공식 근거에 맞추되 한국어 안내의 충분한 설명 깊이와 TDAC 단계·필드·예외를 보존한다. 공관별 신청조건은 그 공관 대상으로 한정한다.
2. `rooftops.json`: 44개 ID키 객체의 표시 필드 overlay. name/building/intro/facts(원키)/reasons(title,text)/menu/signature/recommended/bestTime/seating/budget/reservation/entrance/returnTrip/facilityKind/faq를 번역한다. access 배열은 전체 구조를 유지하며 name/line/exit/instructions/distance를 번역한다. taxi는 instructions/destination만 번역하고 영어·태국어 기사 문장은 보존한다. photos는 alt/caption/changes만 번역하고 이미지 URL·권리·저작자·라이선스는 보존한다. sources는 표시명만 번역한다. ID·좌표·공개 상태·근거·URL·수치·확인일을 바꾸지 않는다.
3. `cameras.json`: camera-editorial-ko.json과 같은 29개 ID키 객체. place/preview/context/watch/location/displayTitle/intro/sceneParagraphs/sourceNote/mapLabel/faq 등 전체 공개 본문을 번역한다. relatedIds/basis/placeSources URL 및 사실 근거를 보존한다.
4. `ui.json`: 한국어 원문 문자열을 키로 번역값을 담은 사전. RooftopHub/Detail/Map, CameraKoreanDetail/Gallery/Directory/MapResults/Comparison, TravelSeasonPage, EntryGuideLayout, TopicHub의 여행 분기, 메뉴·페이지네이션의 실제 표시 문구를 모두 읽어 번역한다. strong 앞뒤의 실제 HTML 텍스트 조각과 `${...}` 변수 표기를 보존한다. 누락은 실제 HTML 검사 후 추가한다.
5. `entry-evidence.json`: 실제 읽은 공식 URL·확인일·적용 여권·공관·변경 필드·조건·예외·근거를 기록한다. 검색 결과 요약만으로 조사 완료 처리하지 않는다.
6. `status.json`: travel/rooftops/cameras/ui별 pending/in_progress/complete 실제 상태. 완전 번역·내용 대조가 끝난 단계만 complete로 표시한다.
7. `review.md`: 읽은 원문, 시로코 비교, 실제 사실·수치·조건·예외 보존 검수와 미완료 범위. 파일 존재나 자기평가만으로 최종 페이지 검수 완료를 주장하지 않는다.

문단·조건·예외·FAQ를 함축하거나 단문으로 줄이지 않는다. 직접 자연스러운 현지 문장을 작성하며 외부 자동번역/LLM API를 호출하지 않는다. 같은 언어의 실제 공개 정본끼리 연결하고 없는 번역·미완성 페이지로 보내지 않는다. 단계별 원고 완료와 최종 HTML·기능 검수는 구분한다.

## 총괄 통합 결과

10언어 원고와 공유 라우트·메뉴·페이지네이션·연관 링크 통합 및 로컬 검수를 완료했다. 전체 테스트 62개, 전체 2,488페이지 빌드·SEO 오류 0, 1,010개 외국어 페이지의 미번역·내부 링크 오류 0이다. 실제 Pages 로컬 런타임과 11언어 PC·모바일 주요 화면도 검증했다. 세부 결과·길이 경고 판단·운영 미실행 범위는 `docs/localization-integration-review-20261018.md`와 `artifacts/localization-20261018/integration-acceptance.json`에 기록했다. 원고 단계의 완료와 최종 통합 검수, 운영 배포·색인 상태는 별개다.

## 한국어·다국어 내비게이션과 콘텐츠 범위 기록 — 2026-10-19

사용자가 현재 상태 설명을 기록하도록 요청했다. 아래 내용은 현재 공개·완성 범위를 구분한 기록이며, 메뉴 숨김·추가 번역·새 배포를 지시한 것으로 해석하지 않는다.

- **한국어 `/ko/`:** 전체 내비게이션이 열려 있으며 한국어 콘텐츠로 연결된다. 지도, 태국 여행, 음식, 교통, 태국 공항, 카메라, 저장, 음식배달, 루프탑, 해변, 쿠폰, 지연·결항 메뉴를 사용한다. 메뉴 공개 자체를 모든 내용의 추가 검수 완료로 확대 해석하지 않는다.
- **이번에 한국어 정본 기준으로 전체 현지화한 다국어 범위:** 태국 여행(`/destinations/`, 연결된 입국·여행 시기 포함), 루프탑·전망대(`/rooftops/`), 카메라(지도 홈·`/directory/`·시설별 카메라 상세·저장·비교). 본문·내비·페이지네이션·관련 페이지 연결을 한국어 포함 11개 언어에 반영했다.
- **그 외 다국어 메뉴:** 전체 현지화 완료 상태가 아니다. 메뉴명만 해당 언어로 표시하거나 간단한 영어 안내에서 한국어 상세로 연결하는 화면이 섞여 있다. 특히 `TopicHub.astro`의 음식은 영어 중심 안내와 한국어 루프탑·배달·해변 링크, 교통은 영어 교통수단 안내와 한국어 교통 상세 링크, 쿠폰은 간단한 안내와 외부 공식 링크를 사용하는 상태다. 모든 다른 메뉴가 전부 영어라고 단정하지 않는다.
- **지연·결항 예외:** 기존 언어·국가별 UI·자료가 별도로 있으므로 위의 영어 중심 임시 안내와 동일하게 취급하지 않는다. 이번 세 분야의 현지화 완료 판정을 지연·결항 전체 완료 판정으로 확장하지 않는다.
- **현재 노출 상태:** 다국어에서도 음식·교통·쿠폰 등 미완료 메뉴가 계속 노출된다. 사용자가 숨기도록 별도로 지시하지 않았으므로 이 기록 작업에서는 메뉴 공개 정책을 변경하지 않는다.
- **운영 상태:** 이후 사용자 승인으로 다국어 운영 배포를 완료했다. 기록은 `localization-production-release-20261018.md`에 있다. 루프탑 WebGL 실패 시 대체 지도 복구도 별도 운영 반영했으며 `rooftop-webgl-production-20261018.md`에 기록했다. 앞 절의 초기 로컬 작업·운영 미실행 기록은 당시 단계의 기록이다.

확인 소스: `src/components/DetailHeader.astro`, `src/components/TopicHub.astro`, `src/data/localized/<locale>/status.json`. 추후 다국어 작업은 이 구분을 기준으로 미완료 분야를 선택하고, 메뉴명 번역만으로 본문 현지화 완료라고 보고하지 않는다.
