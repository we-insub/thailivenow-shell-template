# 방문 통계 선택 180일 기억 — 로컬

2026-10-19 사용자 요청: 쿠키 동의를 한 번 선택하면 재방문 시 반복 노출하지 않고 최대180일 기억하도록 적용하며 규정을 고려한다. 공통 analytics-consent.mjs는 모든11언어/모든페이지에서 동일하게 로드된다. 기존 선택형GA4만 대상이며 광고추적 동의를 새로 받거나 자동허용하지 않는다. 이번 요청은 로컬 수정/검증이며 운영배포·푸시·색인제출은 수행하지 않는다.

공식자료 확인: CNIL은 허용과거부 선택을6개월 기억하도록 권고한다(https://www.cnil.fr/en/cnil-direct/question/cookies-si-jai-refuse-ses-cookies-un-site-web-peut-il-me-redemander-de-les). ICO는 PECR/UKGDPR에 일률적인동의유효기간이 없으며 목적/처리/상황에 맞는기간을 판단하도록 안내한다(https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/how-do-we-manage-consent-in-practice/). 180일을 전세계공통 법정최대나 사이트전체의 법률준수 보증으로 설명하지 않는다. 새 목적/대상이 생기면 별도동의범위와 버전을 검토해야 한다.

기존코드는 이미 localStorage에180일을 설정했으나 쿠키대체저장이 없었다. 기존 v1키를 유지하고 새로운 필수선택저장용1자쿠키 tln_analytics_consent_v1을 추가한다. 선택값(granted/denied)과 최초만료시각만 저장한다. 상용도메인에서는 Path=/; SameSite=Lax; Secure; Domain=thailivenow.com으로 www/기본호스트/모든언어에서 같은선택을 기억한다. localhost에서는 개발호스트쿠키만 사용한다. 선택쿠키 자체는 분석/광고용이 아니다.

localStorage와쿠키를 독립적으로 읽고 쓴다. 최근의 명시적선택을 우선하고 동일시각 충돌은거부를 우선한다. 과거유효한localStorage만 있는사용자도 최초만료시각 그대로쿠키에복사하며 강제재동의나기간연장을 만들지 않는다. 재방문/페이지이동/언어변경은 만료일을 재설정하지 않는다. 명시적으로 설정을 바꿀 때만 새180일을 계산한다. 손상/과도한기간/만료값은동의로인정하지않는다. 양쪽저장소가차단되거나삭제되면영구기억은불가능하며 다시안내될수있다.

GA태그는 허용전/거부때불러오지않고 광고관련동의denied, Signals/광고개인화off를유지한다. GA쿠키도동의의남은유효기간만큼만설정하고 cookie_update:false를유지한다. 열린페이지가최대180일을넘어서도계속추적하지않도록 타이머를추가했고 브라우저32비트타이머오버플로를피해 하루이하간격으로재검사한다. 만료때비활성화/쿠키삭제/허용태그제거후필요시재로드하고다시선택하도록한다. 뒤로가기복원pageshow에도기존선택을재확인한다. 닫기만누른것은허용으로바꾸지않는다. 하단설정에서언제든변경/철회하고 거부시기능을제한하지않는다.

개인정보방침의선택형GA설명만실제동작에맞게수정한다. 기존본문/Google서버보관과의구분/철회뒤기전송자료가즉시삭제되지않는다는설명/나머지서비스정책/출처를보존한다. /ko/privacy/실제수정일만2026-10-19로기록하고자료확인일/배포일을복사하지않는다. 같은대화에서전체읽은INTERNAL-LINKING-CONTRACT/page-seo-rules/natural-korean-copy/시로코전체원문/detail-template-rules/날짜계약을재사용한다. 시로코의구체적행동설명기준으로 ‘언제까지/재방문하면어떻게되는지/어디서변경하는지’를풀어쓰고기존사실을함축하지않았다. 새페이지/언어대응/관계는생성하지않으며기존개인정보링크와하단설정연결을유지한다.

변경파일: public/analytics-consent.mjs, tests/analytics-consent.test.mjs, src/data/service-info-ko.json, data/site-date-observations.json의/ko/privacy/항목. 다른미커밋/운영자료보존. 근거 artifacts/consent-180-local-20261019/. 테스트는179일/180일경계·재방문기간연장없음·허용/거부저장·localStorage차단쿠키대체·기존기한이전·최근거부우선·손상/과도한기간거절·철회·뒤로복원·열린페이지만료·GA남은기간/광고차단을대조한다. 브라우저에서는로컬에서선택하고재방문/언어변경을실제로검증하며localhost에서운영GA를실행하지않는다.

최종검증: 전체테스트76/76(동의전용10개포함), 전체2536페이지·indexable2474·SEO오류0·중복제목/설명0·기존길이경고251유지, 날짜감사6070바인딩오류0, 실제Pages로컬런타임11언어통과. 개인정보H1하나/자기canonical/신규저장방식설명/공통스크립트11언어각1개/빌드자산과소스바이트일치대조PASS. 자동만료는시간을진행시킨VM테스트로검증했으며실제로180일을기다렸다고주장하지않는다.

실제브라우저최종빌드의11언어에서거부상태의동의창미노출·하단설정진입점유지·로컬GA태그없음을확인했다. 한국어허용→새로고침→미노출→다른언어→허용상태확인, 거부로변경→새로고침→미노출을실제클릭했다. PC1280px/모바일실제351px에서설정창화면내표시/가로넘침없음, 개인정보문단가독성을확인했다. 운영GA동작은VM운영호스트환경으로검사하고로컬UI검수에서는GA를불러오지않았다. 다른포트의같은개발호스트에서도쿠키선택을이어받았다.

오래실행중인4348preview의날짜캐시와구분하여새Pages로컬preview4352에서개인정보실제수정일2026-10-19/기존정보확인일2026-10-15표시를확인했다. http://localhost:4352/ko/privacy/ 를열어두었다. 기존4348서버나사용자의운영선택/운영쿠키는변경하지않았다. 뷰포트초기화완료. 근거 tests-final.log/build-final.log/runtime-final.log/browser-final.json/html-audit.json/privacy-desktop.png/privacy-mobile.png. 로컬반영완료이며운영미배포다.
