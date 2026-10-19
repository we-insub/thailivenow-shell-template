# 공통 서버 날짜 계약

2026-10-15 사용자 확정. 작업 전에 이 문서를 읽는다. 이전의 ‘자료 확인일도 배포일’ 지침보다 이 계약을 우선한다.

## 값과 의미

- 운영 도메인: `https://thailivenow.com`. Cloudflare Pages 프로젝트: `thai-live-now`, production branch: `main`.
- 운영 시간대: `Asia/Bangkok`. 기존 날씨·현지 안내 시간대와 일치한다. JapanLiveNow의 Tokyo 설정을 복사하지 않는다.
- `public/data/site-dates.json`: 배포일, 배포 커밋, 카메라별 자료 확인일·링크 점검 시각, 페이지별 자료 확인일·실제 콘텐츠 수정일을 구분한다.
- 배포일은 `SITE_DEPLOYMENT_DATE=YYYY-MM-DD`로 릴리스가 명시한다. 현재 시각·방문자 시각·개발 서버 재시작으로 만들지 않는다. Pages가 성공한 배포를 활성화할 때 그 배포의 ASSETS에 속한 값만 운영에서 사용된다. 실패한 후보 데이터는 운영 값이 아니다.
- 날짜는 `YYYY-MM-DD`, 정확한 시각은 시간대가 있는 ISO 8601이다. 기존 화면의 ISO 날짜 표시는 유지한다. 링크 시각은 Bangkok 기준으로 언어별 표시한다.
- `data/site-date-observations.json`은 보존한 실제 기록이다. 배포 스크립트는 이 기록에서 확인일·점검 시각을 생성하지 않는다. 정확한 시각이 없는 날짜·관측 시간 범위는 원문으로 보존하고 `linkCheckedAt:null`을 유지한다. 장애·미검증 상태도 유지한다.
- 실제 확인일을 찾지 못한 기존 공통 출처 날짜는 ‘미확인’으로 유지한다. 과거에 배포일을 대신 표시했다는 이유로 실제 확인일로 인정하지 않는다.
- `contentModifiedOn`과 기존 JSON-LD `dateModified`는 실제 콘텐츠 정책을 그대로 보존한다. 새 배포일로 덮어쓰지 않는다. 공식 자료 일자·촬영일·날씨 관측일·행사일·상품 기한은 공통 날짜 대상이 아니다.

## 템플릿·신규 페이지

공통 컴포넌트 `src/components/RuntimeDate.astro`를 사용한다. `kind`는 `deployment`, `source`, `camera-source`, `camera-link`, `modified` 중 하나다. `fallback`에는 실제 기록만 넣고 없으면 null이다. 카메라는 `cameraId`, 페이지는 `pagePath`로 식별한다. `locale`, `format`은 의미와 독립적인 표시 설정이다.

```astro
<RuntimeDate kind="deployment" fallback={getOperationalDeployDate()} locale={locale}/>
<RuntimeDate kind="source" fallback={record.checkedAt} pagePath={Astro.url.pathname} locale={locale}/>
<RuntimeDate kind="camera-source" fallback={camera.checked} cameraId={camera.id} locale={locale}/>
```

`data/runtime-date-baseline.json`은 성공한 기존 배포의 고정 HTML 대체 날짜다. 날짜만 변경한 릴리스에서는 수정하지 않는다. `<time data-site-date="…">` 표식만 서버가 변경한다. 신규 레이아웃·원고에서도 별도 날짜 상수나 현재 시각을 추가하지 않는다. 기존 템플릿의 공통 출처/배포 라벨은 빌드 후 prepare 단계가 표식으로 연결하며 감사가 누락을 검출한다. 자료 확인 기록은 별도로 등록해야 하며 없는 값은 미확인이다.

## 서버·클라이언트

`functions/_middleware.js`는 같은 배포의 `/data/site-dates.json`을 `env.ASSETS`로 조회한다. GET·성공 HTML만 변환하며 API·정적 자산·HEAD·에러·리다이렉트는 통과시킨다. 누락·잘못된 JSON·조회 실패는 유효한 정적 대체 값이나 미확인 상태를 유지한다. 미리보기 `.pages.dev` HTML의 noindex는 실패 시에도 유지한다.

서버 HTML에 현재 페이지의 날짜 스냅샷을 함께 넣는다. `public/site-dates-client.mjs`는 이 동일한 스냅샷으로 클라이언트 재렌더링이 대체 날짜를 복구하지 않게 한다. 브라우저 시계나 다른 릴리스의 새 JSON을 섞지 않는다. 현재 사이트에는 Preact/React hydration이 없으며 DOM 재렌더링 복구를 검증한다. 새 hydrated 프레임워크를 도입하면 그 프레임워크에서도 이 스냅샷을 초기 값으로 사용하고 별도 검증한다.

## 필수 관문

- 기존 전체 테스트, `npm run build`의 SEO 회귀 테스트·Astro 빌드·전체 SEO 감사를 유지한다.
- `node --test tests/site-dates-runtime.test.mjs` → `SITE_DEPLOYMENT_DATE=… node scripts/generate-site-dates.mjs` → `node scripts/prepare-site-dates.mjs dist` → `node scripts/audit-site-dates.mjs dist`.
- 실제 로컬 런타임: `npx wrangler pages dev dist --compatibility-date=2026-10-12`. 일반 정적 preview만으로 통과시키지 않는다.
- 동일 HTML 해시 + 공통 JSON만 다음 날로 변경, 조회 실패·잘못된 값, 실제 기록 보존, 클라이언트 이후 값, JSON-LD·메타·링크·API·미리보기 보호, 11개 언어 PC·모바일을 확인한다.
- [페이지 생성 명세](./page-generation-date-contract.md), [운영 절차](./operations-site-dates.md), [이번 릴리스 기록](./SITE-DATES-RELEASE-2026-10-15.md)을 함께 적용한다.

공통 날짜 분리는 개별 콘텐츠 부분 배포 workflow를 활성화한 것이 아니다. 일정 자동화·색인 신청은 추가하지 않는다.


## 2026-10-15 부분 배포 경로

별도 사용자 승인으로 [PARTIAL-RELEASE.md](./PARTIAL-RELEASE.md)의 실제 배포 경로를 구현했다. 공통 날짜 계약과 전체 테스트·합친 전체 SEO/날짜 감사·Pages 런타임 검증을 유지하며, 성공 운영 결과물을 기준으로 영향 라우트만 렌더링한다. 이전 날짜 릴리스 자체가 부분 배포를 활성화한 것은 아니라는 기록과 구분한다. 배포 작업 전에 새 운영 절차도 반드시 읽는다.


## 2026-10-20 사용자 확정: 상세 저자와 공개 날짜·공유 이미지

최신 사용자 지시에 따라 공개 운영 배포일 및 배포일에서 유래한 자료 확인일·정보 업데이트 표시는 제거한다. 기존 배포일 상시 노출 요구보다 이 절이 우선한다. 운영 배포 JSON·서버 스냅샷·실제 자료 확인일·촬영 시각·재생 확인·콘텐츠 수정 기록은 보존한다. 실제 확인 기록은 날짜가 배포일과 같아도 제거하지 않으며 출처별 실제 날짜를 일반 페이지 날짜로 덮어쓰지 않는다.

모든 지원 언어 상세 H1 바로 아래에 현지 언어의 ‘글·해설: ThaiLiveNow’를 표시하고 author/publisher는 ThaiLiveNow 조직에 연결한다. 외부 미디어·데이터 주체는 기존 실제 제작자·제공기관을 유지한다. 공통 SEO·날짜 prepare·서버 및 클라이언트 날짜 경로에도 적용한다.

대표 공유 이미지는 장소와 일치하고 이용 근거가 보존된 사진을 사용한다. OG/Twitter 이미지·설명을 일치시키며 카메라 참고사진은 실제 카메라 화면과 구분한다. 사진이 없으면 브랜드 이미지와 예외 기록을 사용한다. `scripts/audit-detail-editorial.mjs` 및 이미지 근거 카탈로그 검사를 전체 빌드·정식 릴리스에 포함한다. 기존 본문·사실·URL·사진·원출처·검수 기록을 보존한다.
