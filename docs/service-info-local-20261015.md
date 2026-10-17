# ThaiLiveNow 한국어 운영 안내 로컬 작업

## 사용자 확정과 범위

2026-10-15 직접 요청: 한국어 서비스 소개·문의·출처·이용약관·개인정보 5개 페이지와 하단 링크를 로컬 제작한다. 배포하지 않는다. 기존 내비게이션을 유지한다.

- 목적: 관광 여행자를 중심으로 태국 여행 준비와 현지 이용을 돕는 종합 여행 안내.
- 운영자: ThaiLiveNow 운영팀. 공식 문의: hello@thailivenow.com. Gmail 연동.
- 문의 자료는 처리에 필요한 동안 보관하고, 완료 후 불필요한 개인정보·첨부자료를 삭제한다. 법령상 보존이 필요한 자료는 예외로 필요한 범위만 보관한다. 사용자 답변으로 확정.
- CPA 제휴 광고는 향후 계획이다. 업체·추적 방식·수수료·시작일을 임의로 정하지 않는다.
- GA4는 동의 전 및 거부 상태에서 불러오지 않고, 거부·철회 설정을 제공한다. 광고 동의는 별도로 허용하지 않는다.
- 다국어 안내 제작은 이번 범위 밖이다. 전체 페이지의 공통 통계 실행 코드는 같은 동의 관문을 적용하며 비한국어 설정 화면은 영어로 안내한다. 한국어 개인정보 페이지임을 표시한다.

## 페이지 역할과 중심 질문

| 경로 | 중심 질문 |
| --- | --- |
| /ko/about/ | 무엇을 제공하고 어떤 기준으로 안내하는가? |
| /ko/contact/ | 오류·권리·개인정보 요청을 어디에 어떻게 보내는가? |
| /ko/credits/ | 사진·영상·지도·여행 자료의 출처와 이용 범위는 무엇인가? |
| /ko/terms/ | 서비스와 외부 거래의 역할, 이용 범위 및 제휴 계획은 무엇인가? |
| /ko/privacy/ | 어떤 정보를 처리하며 통계 선택·철회와 문의 삭제는 어떻게 하는가? |

페이지별 고유 title·H1·description·본문·관련 링크를 같은 질문에 맞춘다. 법적 적합성을 외부 심사받았다는 주장이나 수신 메일 실테스트 완료 주장은 하지 않는다.

## 기준·사실 대조·한국어 검토

AGENTS.md, page-seo-rules.md, natural-korean-copy.md, sirocco-user-full-reference-20261014.txt, detail-template-rules.md, shared-header-rules.md와 SITE-DATES.md/page-generation-date-contract.md/operations-site-dates.md를 적용한다. 새 날짜 계약은 과거 공통 배포일 덮어쓰기 스킬보다 우선한다.

JapanLiveNow about/contact/credits/terms/privacy의 공개 구성을 참고하되 문구·일본 자료·제휴업체·메일 제공자를 복사하지 않는다. ThaiLiveNow 실제 로컬에서 브라우저 언어·저장·비교·최근 카메라 저장, YouTube nocookie iframe, 외부 사진·지도·날씨 요청과 Cloudflare 제공을 대조한다.

시로코의 ‘무엇을 어디에서 어떻게 하는지’ 설명 방식을 문의 단계와 외부 예약 안내에 적용한다. 소개에 시설 방문 경험이나 로맨틱 장면을 억지로 넣지 않는다. 단답 ‘문의 필요’ 대신 페이지·원본 주소·문제·개인정보 가리기를 구체적으로 안내한다. 충분한 여백과 핵심 조건 강조, 관련 안내와 접힌 긴 출처 목록을 적용한다.

## 통계 구현 판단

- Google basic consent mode 기준: 동의 전에 Google 태그·통계 요청을 차단한다.
- 허용 시 analytics_storage만 granted, ad_storage/ad_user_data/ad_personalization은 denied. Google Signals·광고 개인화 신호 false.
- 선택·분석 쿠키의 사이트 설정 기간은 180일. Google 서버 보관기간을 180일이라고 주장하지 않는다. 속성 설정은 별도이며 이번에 계정 설정을 변경·검증하지 않는다.
- 입력·클릭의 자체 추적을 추가하지 않는다. 최초 page_location/referrer의 query·hash를 제거한다. 속성의 별도 향상된 측정 설정이 꺼져 있다고 주장하지 않는다.
- 거부·철회는 ga-disable, 접근 가능한 분석 쿠키 삭제, 이미 로드한 페이지는 재로딩해 Google 태그 실행을 없앤다. 다른 탭 변경도 반영한다. 브라우저 저장 실패 시 선택은 해당 페이지 메모리에서만 유지한다.

근거: https://developers.google.com/tag-platform/security/concepts/consent-mode 및 https://developers.google.com/analytics/devguides/collection/ga4/reference/config (2026-10-15 확인).

## 날짜 기록

data/site-date-observations.json의 새 5개 대표 경로에 실제 안내 검토일·콘텐츠 수정일 2026-10-15와 근거를 기록한다. 이는 전체 여행 자료를 다시 확인한 기록이 아니다. RuntimeDate의 source·modified·deployment 표식을 각각 사용하고 운영 시간대 Asia/Bangkok 및 기존 성공 릴리스 대체 날짜를 유지한다. JSON-LD dateModified는 실제 수정 기록으로 설정하며 배포일을 상속하지 않는다. 빌드 후 날짜 prepare/audit 및 실제 Wrangler Pages 로컬 응답과 클라이언트 이후 값을 확인한다.

## 검증

검증 결과는 작업 완료 후 아래에 기록한다. 운영 배포·색인 제출은 금지 범위로 유지한다.

- 최종 npm run build 완료: 1,821페이지, indexable 1,759, SEO 오류 0, 중복 제목·설명 0. SEO 테스트 8개와 날짜 테스트 9개 통과. 날짜 감사 3,117개 표식, 오류 0.
- 기존 제목 길이 등의 경고 134개는 유지. 새 about/contact/credits/terms/privacy에는 경고 없음. 기존 경고를 새 안내 검수 완료로 간주하지 않음.
- 전체 헤더·내부 메뉴 감사: 1,821페이지, issues 0.
- 실제 Wrangler Pages 로컬 서버에서 새 5개 경로의 HTTP 200, H1 하나, 날짜 스냅샷·source/modified 값, 하단 5개 링크를 확인. 1280/390px 10개 화면 가로 넘침 0. 다섯 페이지 스크린샷 직접 검토 및 최종 원고 변경 후 재검사 통과.
- 출처 목록 기본 닫힘 및 Enter/Space 접기·펼치기 확인. 통계 설정 Escape 닫기 확인.
- 운영 호스트를 로컬 응답으로 대체하고 Google 태그 응답을 모의 처리한 Chrome 테스트: 동의 전·거부 후 태그 요청 0, 허용 후 1, 철회 후 신규 요청 0·분석 쿠키 삭제·태그 제거. 실제 운영 계정에 데이터를 보내거나 GA4 보고서 수신을 검증하지 않음. 설정의 query/hash 제거·Signals 비활성화 확인.
- 별도 고정 테스트 사본에서 HTML 변경 없이 날짜 JSON 배포일을 2026-10-16으로 변경: 새 5개 source/modified는 2026-10-15 유지, deployment만 2026-10-16, JSON-LD dateModified도 유지. DOM 재변경 후 스냅샷 복구 및 잘못된 JSON 실패 시 정적 대체 값 보존 확인. 테스트 JSON은 원상 복구하고 보조 테스트 서버 종료.
- 기존 11개 언어 홈 × PC/모바일 22개에서 통계 설정 열기·Escape·가로 넘침 없음 확인. 다국어 안내 원고를 제작했다는 의미는 아님.
- 검증 자료: artifacts/service-info-20261015/verification.json, runtime-verification.json 및 페이지별 PNG. 실제 로컬 확인 주소: http://localhost:8791/ko/about/ (Pages 서버 유지).
- 페이지·하단 링크·통계 동의 기능은 로컬 구현 완료. 운영 배포·색인 제출·CPA 광고 활성화·다국어 안내 제작·이메일 수신 실테스트는 수행하지 않음.
