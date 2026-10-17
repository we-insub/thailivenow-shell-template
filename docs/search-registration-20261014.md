# ThaiLiveNow 검색엔진·분석 등록 (2026-10-14)

사용자 승인: 외부 Chrome에서 구글·네이버·빙 사이트 등록, 색인 요청, Google Search Console와 Google Analytics 등록 및 연결.

- 운영 사이트: https://thailivenow.com/ (모든 언어 포함). /ko/ 및 새 여행 시기 허브·상세를 별도 수집 요청 대상으로 지정.
- Google Search Console URL 접두어 속성: https://thailivenow.com/ — HTML 태그 소유권 확인 완료.
- Google sitemap.xml: 성공, 1,636개 URL 인식. 개별 여행 시기 URL 요청은 reCAPTCHA 서비스 연결 오류로 2회 실패하여 완료로 기록하지 않음. 사용자에게 직접 재시도 안내.
- 네이버: 전체 도메인 소유권 확인 완료. 보안문자는 사용자가 직접 완료. sitemap.xml 등록 및 /ko/ + 여행 시기 8개 URL 수집 접수 내역 확인.
- Bing: 사이트 HTML 태그 확인 완료. sitemap.xml 제출, 처리 중. 개별 URL 요청은 결과 확인 후 기록.
- GA4: matotour 계정 380734880 / 속성 558921868 / 웹 스트림 16128391562 / 측정 ID G-56PNXZ2KKJ. 대한민국 시간 / KRW. 기본 방문 및 참여 측정.
- Search Console와 해당 GA4 웹 스트림 연결 생성 완료. 실시간 보고서에서 태국 홈페이지 조회 1, first_visit/page_view/session_start 수신 확인.
- 공통 적용: src/lib/site-integrations.mjs, src/middleware.ts. 분석 태그는 운영 도메인 thailivenow.com/www.thailivenow.com에서만 실행해 로컬·Pages 미리보기 방문을 제외.
- 빌드: 1816페이지, SEO 오류 0, 중복 제목 0, 중복 설명 0, 기존 경고 134. 최초 메타 변환 뒤 주입으로 생긴 직렬화 감사 실패는 주입 → SEO 변환 순서로 수정하고 재검사 통과.
- 운영 배포: a2e5aeb3-7ac9-4273-80dd-3924f37481ac.
- 배포 ZIP: artifacts/search-registration/thailivenow-search-registration-20261014.zip. 직전 운영 ZIP을 기반으로 인증 및 측정 태그만 추가. 태그 제거 시 기존 모든 파일 내용 일치 확인. 미배포 공항 초안 등은 포함하지 않음.
- 증빙: artifacts/search-registration/. 등록·수집 접수와 실제 검색 색인 완료는 구분한다.

최종 확인: 네이버·Bing 모두 /ko/ + 여행 시기 8개 URL, 총 9개 수집 요청 접수 확인. Google 개별 요청은 버튼을 직접 확인·실행한 세 번째 시도도 reCAPTCHA 연결 오류로 실패. 사이트맵 성공 1,636개와 소유권 확인은 유지.

## 2026-10-15 00:08 KST — 사용자 요청으로 중단, 다음 재개 시 확인

- Google `/ko/travel-seasons/` 개별 색인 요청은 **미접수**. 새 탭, 페이지 새로고침, 실시간 검사 결과 화면에서 재시도해도 요청 제출 오류와 reCAPTCHA 서비스 연결 오류가 반복됨. 사용자가 자동 제어를 끊고 직접 눌러도 같은 오류라고 확인함.
- Google 실제 URL 테스트(2026-10-15 00:04:24 KST)는 성공. ‘URL을 Google에 등록할 수 있음’, 크롤링 허용 예, 페이지 가져오기 성공, 색인 생성 허용 예. canonical은 해당 운영 URL.
- 별도 HTTP 확인: curl 응답 200, robots 메타 `index,follow,max-image-preview:large`, robots.txt `Allow: /`. Python urllib 기본 요청은 403이었으나 Google 검사 도구의 실제 가져오기는 성공했으므로 Google 접근 차단으로 단정하지 않음.
- Google reCAPTCHA 스크립트 주소는 HTTP 200. 공식 데모는 체크박스 표시까지 확인했으나 인증 완료를 검증한 것은 아님. 사용자가 마지막에 보낸 데모 스크린샷에는 체크박스 옆 로딩 표시가 있어, ‘데모 정상 인증 완료’라고 기록하거나 서치콘솔만의 문제로 확정하지 않는다.
- 정확한 근본 원인은 미확정. 확장 프로그램, 브라우저 환경, VPN/프록시 등 연결 간섭과 Google 측 일시 오류를 구분해야 함. Chrome 내부 확장 프로그램 설정 주소 접근은 브라우저 자동 승인 검토가 차단해 목록 확인 및 설정 변경은 수행하지 않음. 사용자에게 확장 프로그램/VPN 목록을 요청했으나 중단 지시 전 답변 없음.
- 다음 재개: 사용자 환경 정보를 확인하고 새 인증 상태에서 재시도. 접수 성공 대화상자를 실제 확인하고 증빙을 저장한 뒤에만 접수 완료로 기록. CAPTCHA가 나오면 사용자 확인/직접 처리 필요. 추정만으로 보안 설정을 변경하지 않음.
- 증빙: `artifacts/search-registration/google-retry-error-20261015.png`, `artifacts/search-registration/google-live-test-error-20261015.png`.
- 사용자 지시: ‘일단 메모해, 내일 다시 해보자.’ 현재 조사/재시도 중단. 자동 재시도나 새 예약은 생성하지 않음.

## 2026-10-15 — 사용자 요청으로 3개 검색엔진 사이트맵 제출 상태 재확인

로그인된 Chrome 관리 화면에서 읽기 전용으로 확인했다. 신규 제출·색인 요청·설정 변경 없음.

- Google Search Console, https://thailivenow.com/ 속성의 Sitemaps: /sitemap.xml 1개, 제출일 2026-10-14, 마지막 읽은 날짜 2026-10-14, 상태 ‘성공’, 발견된 페이지 1,636, 발견한 동영상 0.
- Bing Webmaster Tools, thailivenow.com/ 선택 후 Sitemaps: https://thailivenow.com/sitemap.xml 1개, Last submit/Last crawl 10/14/2026, 상태 Success, URLs discovered 1.6K, 오류·경고 사이트맵 0. 이전 기록의 ‘처리 중’은 현재 성공으로 확인.
- Naver Search Advisor, https://thailivenow.com 요청 → 사이트맵 제출: sitemap.xml 등록행 확인, 등록일 화면 표기 26.10.14 23:36:17. 현재 제출 목록에는 처리 성공·발견 URL 수를 따로 표시하지 않으므로 등록 사실만 확인. 첫 접속의 로그인 오류는 메인 재접속 후 정상 관리 화면으로 진입해 해소.
- 세 검색엔진 모두 같은 운영 sitemap.xml의 제출 내역이 존재한다. 사이트맵 등록·발견 URL 수는 각 페이지의 색인 완료 수와 구분한다. 이번에는 전체 색인 보고서를 추가로 검사하지 않았다.
