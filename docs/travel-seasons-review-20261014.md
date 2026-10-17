# 태국 여행 시기 한국어 허브·상세 검수

## 실제 읽은 기준
AGENTS.md, detail-template-rules.md, page-seo-rules.md, natural-korean-copy.md, sirocco-user-full-reference-20261014.txt 전체 읽음. 사용자 시로코 변경 전/후 원문과 자연화 분석을 생략 없이 대조함. 읽기 파일 bytes/SHA는 artifacts/travel-seasons/rules-read-receipt.json. RooftopDetail/EntryGuideLayout 화면구조 및 공통 운영배포일 함수 재사용. 기존 공항 작업 담당과 별도 주제·파일이며 공항 자료 수정 없음.

## 구현과 검색 의도
/ko/travel-seasons/ 한국어 허브: 달·지역 선택, 월별 평균기온/평균최고·최저/강수량/비오는날/장점·주의점. bangkok/pattaya/chiang-mai/phuket/krabi/koh-samui 6상세: 12개월표·월별일정·준비·FAQ. rainy-dry 상세: 지역계절차이·비오는날·바다이용 준비. 한국어 여행 TopicHub 입국→여행시기→목적지 순으로 신규4카드 삽입. 기존 입국/목적지 연결 유지. 고유H1/title/description과 실제FAQ 구조화데이터. 존재하는한국어페이지만생성,가짜다국어/hreflang없음.

## 사실·의미·문체
기상청 CLIMATOLOGICAL DATA FOR THE PERIOD 1991–2020 공식 PDF 6관측소 원본 확보. Bangkok Metropolis/Phatthaya/Chiang Mai/Phuket/Krabi/Ko Samui 표의 mean/max/min/rain/rainDays를 직접 추출. 6×12×5=360 값 원문일치 재대조. Phuket Airport 값과 Phuket 관측소값 혼합하지 않음. PDF페이지57/66/11/88/91/77 및 원본보존/시각검수 연락시트. 계절설명은 기상청 기후안내/TAT September해안차이 근거. 추천시기·장단점·준비물은 편집조언이며 공식 추천순위/실시간예보로 표시하지 않음.

초안 단순표기 ‘건기 관광 적합’ 대신 ‘사원 산책을 아침에 시작하고 점심은 천천히 즐겨보세요’로 행동·시간을 연결. ‘우기 장점’에 근거없는싼숙박/한산함/연중안전 주장하지 않음. ‘실내활동 가능’ 대신 각지역 올드타운식사/카페/숙소휴식으로 구체화. 월별 동일문장 반복 초안을 월별 일정조언으로 재작성. 시로코 예약/교통/FAQ처럼 무엇을 언제 하는지 풀어쓰되 로맨틱장면복제없음. 부모님·아이·동행에 따른일정을 과장하거나 방문경험꾸미지 않음.

평균기온은 현재예보가아님, 하루중어느시각기온아님. 비오는날은종일강우보장아님. 태국전체동일우기아님, 코사무이연말비와안다만시기분리. 해변수영/보트운항은당일금지/기상조건따름. 미확인현재행사날짜/숙박비/성수기혼잡/북부공기질예측은추가하지않음.

## 확인
runtime.json:8페이지×3뷰포트(1440/390/320) HTTP200/H1하나/overflow0/source기본닫힘. region+month=코사무이11월444.6mm 실제선택검증. 모바일표scrollLeft>0. source키보드Enter열고닫음. 허브h2입국→여행시기→목적지. PC/모바일 실제스크린샷확인. source숫자링크없음,날짜공통함수유지. 최종build/SEO결과 아래 기록.

로컬반영만. 운영배포하지 않음.

최종 npm run build:1816pages/1755indexable/SEOerrors0/duplicateTitles0/duplicateDescriptions0. 기존포함warnings134이며새페이지 고유본문/H1/URL 직접검수. 신규8페이지 내부링크 대상누락0.

## 운영 배포 완료
사용자 승인으로 운영 배포 20b92638-f94f-402b-86f3-9f302fd871ff 완료. 기존 운영본에 한국어 여행 시기 8개 페이지 및 필수 연결 페이지를 반영. 이전 운영본 ZIP /tmp/thai-production-20261014.zip 보존. 운영 월 선택 기능과 FAQ 수정 확인. 검증 기록: artifacts/travel-seasons/production-verification.json.

## 23:52 도시별 설명 재작성 — 로컬 반영
사용자 지적: 6개 지역 카드가 ‘먼저 비교해볼 시기예요’라는 동일 문장에 활동명만 바꿔 의미가 부족함. 자연 한국어 규칙·상세 템플릿·시로코 변경 전후 전체 원문을 다시 읽고, 날씨가 여행에 주는 이유와 구체적인 행동을 연결하는 방식으로 재작성.
- 카드: 방콕의 11월 강수 감소·한낮 더위, 파타야의 12~1월 적은 비, 치앙마이의 12~1월 낮은 최저기온, 푸껫·끄라비의 2월 최소 강수량·3월 더위, 코사무이의 10~12월 많은 비를 각각 설명.
- 6개 상세 소개와 여행 추천 FAQ도 별도 원고로 변경. 단순 지역명 치환 제거. FAQ 화면과 구조화 데이터 일치 확인.
- 기존 72개월 × 5개 수치, 관측소, 기간, 출처, 추천 기간, URL 및 월별 장점·주의점은 보존. 새 카드/소개에 쓰인 숫자는 기존 TMD 평년값과 직접 대조. 추천 활동은 편집 제안으로 유지하며 물놀이·보트 안전을 보장하지 않음.
- PC 1440px / 모바일 390px 허브 카드 확인. 모바일 6개 상세 가로 넘침 0, 새 소개·FAQ·JSON-LD 확인. 기존 시로코처럼 구체적인 장면과 조건을 연결하되 다른 장소의 문구 복제하지 않음.
- 빌드 1816페이지, SEO 오류/중복 제목/중복 설명 0. 기존 경고 134 유지.
- 변경 소스: src/data/travel-seasons-ko.json, src/components/TravelSeasonPage.astro. 증빙 city-copy-runtime.json 및 city-copy-desktop/mobile.png. 이번 설명 수정은 로컬 반영이며 운영 미배포.
