# 모든 지원 언어 상세페이지 저자·날짜·공유 이미지 제작 계약

2026-10-20 사용자 확정. 신규 상세 생성, 기존 상세 수정, 언어 확장, 공통 템플릿 변경 전에 이 문서 전체를 읽고 결과 HTML에 적용한다. 문서를 읽거나 저장한 것만으로 적용 완료로 보고하지 않는다. 과거의 공개 배포일 상시 표시·배포일을 확인일로 사용하는 지시보다 이 계약이 우선한다.

## 적용 범위와 보존

- 지원 언어·시장: `ko`, `ms`, `zh-cn`, `en`, `en-in`, `ru`, `ja`, `en-gb`, `en-us`, `es`, `zh-tw`. 모든 지원 언어의 공개 상세에 적용하며 신규 상세도 동일하다.
- 명소·루프탑·전망대·카메라·해변·입국·여행 시기·음식·배달·공항·항공사·노선·교통·역·선착장·지연/결항·보험 등 해당 상세를 포함한다. 허브·목록·페이지네이션·개인화 화면과 상세를 구분한다. 실제 판정은 `src/lib/detail-editorial-policy.mjs`의 `isDetailPath`와 생성 라우트를 대조한다.
- 새 종류의 상세 경로를 추가하면 기존 판정이 자동으로 포함한다고 가정하지 않는다. 경로 판정과 회귀 테스트에 해당 패턴을 반영하고 생성 HTML의 저자 표시·조직·이미지 메타를 검수한다. 허브를 상세로 임의 변경하지 않는다.
- 기존 본문·사진·사실·조건·예외·FAQ·정본/내부 URL·제휴 추적값·실제 원출처·실제 제작자/제공기관·검수 기록을 보존한다. 요청받지 않은 사실 조사·다국어 생성·공개 범위 확대를 시작하지 않는다.
- 각 시장의 실제 데이터와 언어를 유지하며 중국 본토/대만, 미국/영국/인도 조건을 섞지 않는다. 기존 시로코 문체·상세 구성 및 연관 페이지 양방향 연결 계약도 계속 적용한다.

## 제목 아래 저자와 조직 연결

- H1 바로 다음에 해당 언어의 ‘글·해설: ThaiLiveNow’를 하나만 표시한다. 본문 소개나 메뉴 안에 숨기지 않는다. 페이지 생성 뒤 자바스크립트 실행을 기다리지 않고 초기 HTML에 존재해야 한다.
- 현지어 문구의 정본은 `src/lib/detail-editorial-policy.mjs`의 `bylineLabels`다. 영어권 시장은 공통 영어 문구를 사용한다. 개별 템플릿에서 중복 byline을 넣거나 문구를 다르게 하드코딩하지 않는다.
- 페이지의 author/publisher는 `https://thailivenow.com/#organization`을 참조하고 같은 HTML에 ThaiLiveNow Organization 정보가 있어야 한다. 조직 이름은 ThaiLiveNow, URL은 `https://thailivenow.com/`이다. 실재하지 않는 개인 저자·자격·현장 취재 이력을 만들지 않는다.
- ThaiLiveNow는 페이지의 글·해설 저자/발행 주체다. 외부 영상·사진·데이터의 creator, provider, publisher, credit, 라이선스와 실제 원출처를 ThaiLiveNow로 바꾸지 않는다. 외부 미디어와 페이지의 저자 정보를 구분한다.

## 공개 날짜와 실제 기록

- 운영 배포일은 공개 날짜 줄에서 표시하지 않는다. 배포일을 복사해 만든 ‘자료 확인일’, ‘정보 업데이트’, ‘최근 수정일’ 또는 다른 언어의 유사 표현으로 다시 표시하지 않는다. 라벨만 없애고 날짜 값만 남기는 것도 금지한다.
- 실제 원자료 확인일·촬영 시각·영상 재생/링크 점검 기록·실제 콘텐츠 수정 기록은 보존한다. 실제 기록의 날짜가 우연히 배포일과 같다는 이유로 삭제하지 않는다.
- 배포일은 운영 추적용 JSON·커밋·서버 스냅샷·릴리스 기록에 유지한다. 공개 화면에서 제거한다는 이유로 운영 기록이나 실제 확인 기록을 지우지 않는다. 기록이 없으면 내부에서 null/미확인으로 유지하고 공개 날짜를 임의 생성하지 않는다.
- `RuntimeDate`의 source/camera-source/camera-link/modified에는 해당 의미의 실제 기록만 전달한다. source의 fallback에 `getOperationalDeployDate()`, 현재 시각 또는 개발 서버 실행일을 넣지 않는다. 개별 항공사·출처의 실제 확인일을 일반 페이지 날짜로 덮어쓰지 않는다.
- 공통 `RuntimeDate`, `public-date-policy.mjs`, 날짜 prepare, Pages 서버 처리와 `site-dates-client.mjs`를 우회하지 않는다. 신규 템플릿에 공개 deployment 날짜 예제나 별도 삽입 스크립트를 복사하지 않는다. JSON-LD dateModified도 배포일로 갱신하지 않는다.

## 대표·공유 이미지

- 해당 장소와 일치하며 이용 근거가 보존된 실제 사진만 대표 공유 이미지로 사용한다. 같은 도시의 사진, 다른 시설의 사진, 확인되지 않은 영상 썸네일을 대신 쓰지 않는다. 공식 사이트에 공개돼 있다는 이유만으로 재사용 허용을 인정하지 않는다.
- 실제 원출처 URL·사진가/제공기관·라이선스·허용 근거와 연결할 장소/카메라 ID를 보존한다. 현재 근거 카탈로그는 `src/data/editorial-image-rights.json`이며 생성기는 `scripts/generate-editorial-image-rights.mjs`다. 새 이미지 소스 종류는 검토 후 생성기에 반영한다.
- 새 사진을 반영할 때 `node scripts/generate-editorial-image-rights.mjs`로 카탈로그를 만들고 장소 ID·원출처·이용 근거를 직접 읽어 검토한다. 생성 성공만으로 사용권 검수가 끝난 것이 아니다. `--check` 검사를 끄거나 미검증 사진을 완료 처리하지 않는다.
- OG와 Twitter는 같은 이미지 URL과 같은 의미의 해당 언어 이미지 설명을 사용한다. 실제 사진가·라이선스·원출처 표시는 보존하고 신규 공유 이미지의 출처도 표시한다.
- 카메라 장소 참고사진은 해당 언어로 ‘장소 참고사진이며 실제 카메라 화면이 아님’을 설명한다. 확인되지 않은 사진을 현재 라이브 화면·직접 촬영 사진처럼 표현하지 않는다.
- 사용할 장소 사진이 없으면 본문에 빈 사진 영역이나 대체 장소 사진을 넣지 않는다. 공유 메타에는 기본 브랜드 이미지와 `missing-place-image` 상태를 사용한다. 해당 URL·누락 이유를 이번 작업 예외 목록에 남긴다. 현재 빌드 감사의 전체 예외 목록은 `artifacts/detail-editorial-audit.json`에 생성되며 과거 날짜가 붙은 예외 목록을 최신 전체 현황으로 간주하지 않는다.

## 생성·수정 순서와 필수 검수

1. AGENTS·이 계약·SEO·시로코 상세/문체·날짜 계약·연관 페이지 연결 계약을 읽는다. 기존 대상 언어/시장, 상세 URL, 공개 범위, 실제 콘텐츠와 확인 기록을 확인한다.
2. 원고·사진·사실·URL·원출처·검수 기록의 보존 기준을 남기고 공통 템플릿과 실제 라우트 생성 경로를 사용한다. 공통 middleware/SEO 처리를 생략하는 별도 HTML 생성 경로를 만들지 않는다.
3. 신규 경로가 상세 판정에 포함되는지 확인한다. 실제 자료 확인 기록과 장소별 사진 근거를 연결한다. 필요한 같은 시장의 상위↔상세·관련 페이지 링크를 실제 초기 HTML에 반영한다.
4. `npm test`, `npm run build`를 실행한다. build의 SEO·날짜 감사·이미지 카탈로그 검사·전체 상세 편집 정책 감사를 유지한다. 별도 출력 폴더를 만들었다면 그 폴더에 동일 감사를 실행한다. 이미지/날짜/저자 오류나 반복 처리 오류를 경고로 낮추거나 검사를 끄지 않는다.
5. 모든 영향 언어의 생성 HTML에서 H1 바로 아래 byline 1개, author/publisher 조직 참조, 외부 주체 보존, 공개 배포일/잔여 값 없음, 실제 확인일 보존, OG/Twitter 이미지·설명·출처 및 이미지 예외 목록을 확인한다. 두 번 처리한 결과도 달라지지 않아야 한다.
6. PC·모바일의 실제 렌더링과 변경 기능, 실제 Pages 로컬 런타임의 서버 응답·클라이언트 적용 뒤 날짜, 출처 키보드 접기·펼치기, canonical·hreflang·사이트맵·기존 색인 범위를 확인한다. 자동 검사는 원문·장소·이용 근거의 사람 검수를 대신하지 않는다.
7. 유지보수는 변경 전후 URL·본문·링크·미디어·FAQ·실제 외부 주체를 비교한다. `scripts/check-editorial-preservation.mjs`는 이번 정책만 바꾸는 작업의 비교 도구다. 사용자 승인으로 본문을 수정하는 작업에서는 승인된 문장 변경과 보존할 사실/원출처를 구분해 검수하며, 무조건 문자 일치를 요구해 필요한 수정을 막지 않는다.
8. 수정 파일·대상 URL/언어·검사 결과·이미지 미확보/보류·남은 한계를 작업 기록에 남긴다. 로컬 검증, 커밋/푸시, 운영 업로드, 실제 운영 확인, 실제 색인과 AI 인용을 각각 구분한다. 이 문서 저장은 배포·색인 제출의 승인이 아니다. 운영 변경은 해당 작업의 사용자 승인과 정식 릴리스 절차를 따른다.

## 현재 구현 위치

- 공통 진입: `src/middleware.ts` → `src/lib/page-seo.mjs` → `src/lib/detail-editorial-policy.mjs`.
- 공개 날짜: `src/lib/public-date-policy.mjs`, `src/components/RuntimeDate.astro`, `scripts/prepare-site-dates.mjs`, `src/lib/site-dates-runtime.mjs`, `functions/_middleware.js`, `public/site-dates-client.mjs`.
- 사진 근거: `scripts/generate-editorial-image-rights.mjs` → `src/data/editorial-image-rights.json`.
- 전체 HTML 검사: `scripts/audit-seo.mjs`, `scripts/audit-site-dates.mjs`, `scripts/audit-detail-editorial.mjs`; 전체 빌드의 `scripts/postbuild-site-dates.mjs`와 정식 릴리스의 `scripts/release/run.mjs`에서 적용한다.
- 회귀 검사: `tests/detail-editorial-policy.test.mjs`, `tests/page-seo.test.mjs`, `tests/site-dates-runtime.test.mjs`.
- 이전 적용의 작업 기록은 `docs/detail-editorial-release-20261020.md`다. 당시 수치·커밋·예외 목록은 과거 실행 증거이며 미래 작업의 검증 결과로 재사용하지 않는다.
