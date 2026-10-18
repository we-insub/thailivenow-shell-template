# ru 현지화 원고 검수 — 통합 HTML 검수 대기

대상은 러시아어 사용자이며 입국 안내는 러시아 일반여권 관광자, 비자 신청 절차는 모스크바 공관 관할 거주자 기준이다. 여행 메뉴 → 목적지/여행시기/입국, 루프탑 도시 허브 → 시설, 카메라 목록/지도/저장/비교 → 상세의 기존 역할을 유지한다. 신규 사실 조사 범위는 러시아 일반여권의 입국·비자 공식 자료뿐이다.

## 읽은 원문

AGENTS.md, LOCALIZATION-ORCHESTRATION-20261018.md, INTERNAL-LINKING-CONTRACT.md, page-seo-rules.md, natural-korean-copy.md, sirocco-user-full-reference-20261014.txt 전체(반복 분석 포함), detail-template-rules.md 전체(구형 홀딩·최신 해제 포함), SITE-DATES.md, page-generation-date-contract.md, operations-site-dates.md, language-settings.md를 읽었다. 처음 묶음이 잘려 연결/SEO/자연한국어/시로코/날짜를 작은 묶음으로 다시 읽었다.

여행·입국 검수 MD 5개, 카메라 sources/beginner/place-review/preview-restoration MD, 실제 TopicHub 여행 분기, map.ts의 travelAreas13, travel-seasons-ko.json 전체, entry-guides-ko.json의 4개 전체 공개 문구·필드·FAQ·출처를 읽었다. RooftopHub와 TravelSeasonPage 전체를 읽었다. 나머지 실제 템플릿과 루프탑/카메라 전체 원고는 아래 최종 기록에서 완독·대조했다.

## travel 원고 대조

- 목적지13개는 장소별 실제 매력과 행동을 자연스러운 러시아어로 작성했다. 방콕의 호텔/강변/루프탑, 치앙마이의 사원/골목/카페, 끄라비의 석회암절벽/배 여행 등 서로 다른 장면을 보존했다.
- 기후6지역72개월의 숫자360개, month/ID/station/pdfPage/pattern/period/source/checkedAt은 구조 대조로 동일함을 확인했다. 월별 장점/주의문을 하나로 합치지 않고 각각 번역했다. 우기에도 종일 비가 보장되지 않고 코사무이와 안다만 계절이 다르다는 조건을 유지했다.
- 입국4개 ID와 TDAC11섹션을 보존했다. TDAC 입력필드/영어 버튼/이미지 파일/공식 영상 URL/수정불가4항목/환승 예외/각 동행자 정보/영문 입력/무료/3일/매입국 새 제출과 완료 예시 한계를 보존했다. 원본 영어 캡처의 한국 선택 예시는 러시아 실제 입력 화면으로 위장하지 않는다.
- 모스크바 공관 실제 본문에서 2026-09-15부터 러시아 일반여권 양자협정 최대30일 및 종전60일 종료를 확인했다. 한국90일·한국국적 수수료면제·서울공관 체류/K-ETA/외국국적 60000바트 조건을 복제하지 않았다.
- 모스크바 관광비자 자료의3/6개월 유효기간과 최대60일 체류, TR20,000THB/아동40,000THB·METV3개월매월2,000USD, 미성년/비러시아국적/자영업/학생 서류를 대상별로 유지했다. 고정30일 연장은 모스크바 원문 확인범위 밖이라 보장하지 않았다.
- 모스크바 eVisa 공식 PDF의 온라인신청·오프라인현금USD·확인서14일내결제·은행권연도2009·비환불·9:30–12:30·결제후14업무일·추가서류/면접·승인후출발을 보존했다. 전체 관할은 러시아/우즈베키스탄/아르메니아/벨라루스/몰도바 거주자에 한정했다.
- 사실확인 날짜는 새 입국 자료만 실제 확인일2026-10-18(Bangkok)로 분리했다. 기존 TDAC 확인일2026-10-14와 이미지 캡처일/기후확인일을 보존했다. 배포일은 생성하지 않았다.

시로코 소개는 구체적 장면·동행·행동으로, 입국은 준비물→기입→제출→저장→현장 순서로 비교했다. FAQ는 답을 먼저 주고 예외를 이어 설명한다. 예: TDAC Preview가 끝이 아니라 Submit 후 실제 문서가 필요함을 유지했다. 러시아어 문장은 한국어 어미나 조사순서를 그대로 옮기지 않았다.

## 아직 완료가 아닌 범위

초기 작성 중이던 루프탑/카메라/UI 원고는 아래 최종 기록대로 완료했다. 최종 HTML, 같은 시장 상위↔상세·관련 링크, canonical·사이트맵·SEO·날짜 감사·Pages 런타임·PC/모바일·키보드는 총괄 통합 후 검수할 pending이다. 파일존재나 이 기록은 실제 HTML 검수 증거가 아니다. 공통코드/전체빌드/커밋/푸시/배포/색인 제출은 하지 않았다.

## 루프탑44 전체 작성·내용 대조

실제 rooftops.json 전체 공개44의 필수 overlay 필드, RooftopDetail/Hub/Map 원문 전체를 읽고 원문 시설별 설명을 대조했다. 시설을 공통 로맨틱 소개로 바꾸지 않았다. 원고의 시로코 대비는 다음 기준으로 읽었다: 소개의 실제 풍경/동행/경험, reasons의 구체적 장면, 이용 제약의 실제 행동, 질문을 먼저 답하는 FAQ. 단순 `pass=true`로 자연스러움을 판정하지 않았다.

- Sky Beach: 10–24시/23시 마지막 입장·선착순·전연령·BTS출구3을 보존. 음식/DJ/도시경관은 같이 즐기는 행동으로 작성.
- HONG’s: 도이수텝→도시불빛 장면, 바오550net·16–21시, 평일17–19시 지정음료1+1, 15분지연취소/우천폐쇄를 구분.
- Baba Nest: 17–20시, 투숙1500/외부3000net, 예약필수·15분유지·지연연락·취소노쇼전액·외부비환불·악천후다른2시설전환을 보존.
- STAR: 라마이만/네개수중테이블·42석·17:30–23:00/22:30음식마감, 남녀옷예시는 추천이며추가의무아님을 명시.
- Horizon:34층 파타야만/실내외좌석/해산물타워·Angus토마호크·양정강이·미소스노피시/DJ·공식Book a Table을 보존.
- Mahanakhon SkyWalk:74실내/78야외·310m유리/314m전망·어린이8–12·23시마지막입장·75층엘리베이터연결, Sky Beach와별도표를 보존.
- Baiyoke:77층·84층회전·83층음료·450net특별프로모션 및방문일확인·10–22시/긴연휴예외를 보존.
- Doi Suthep:사찰전망공간·황금불탑/란나·306계단/케이블카대안·붉은쏭태우편도왕복총요금합의·사찰단지참고핀을 보존.
- Sky Bar:7세이상성인동반/1인음료1잔/워크인전용·금지복장·영화칵테일, 사진2008/2017촬영일 및권리전체를 보존.
- Sirocco:전연령/각복장허용금지·화–일재즈/월배경음악·72시간경계·예약금차감/입금확정·그룹행사예외·23/23:30/00주문마감·짐반입보관불가를 직접대조.
- Distil/Flûte/Alfresco64/No3:20세제한과7세제한 혼합없음. Flûte19시재즈/월예외, Alfresco월DJ없음, No3진·보드카/캐비어, Distil증류주·시가 구분.
- Octave/ATTIC:17–다음02시와47층멕시코풍숨은바를 구분. 같은호텔이름유사성때문에 실제바명으로직원안내.
- Red Sky Restaurant/Bar/CRU/Cocoa:55식사/56바/59샴페인·CRU/Cocoa20세·각16/17시시작및01시종료를 구분. 사진2024연도와CC0/저작자/URL보존.
- Above Eleven:33층니케이/PiscoSour·매일DJ/수살사·예약메일 보존.
- Yao/ABar/Spectrum:중식딤섬/무알코올과진특성을분리. Yao내선5840/ABar예약번호5999을원본대로. Spectrum29층식사밴드/30층야외DJ·17:30–01시·샌들오픈토민소매운동복금지 유지.
- Tichuca/Akara/IRIS:organic house및타악기/Marichuca, Hanuman테마의바와전망대시장운영분리, IRIS일–목/금–토시간과18–00시DJ 유지.
- ThreeSixty/SEEN/SIN/CHAR:31층강/도시, SEEN26–27층실내외식사DJ/SIN27층야외별도, CHAR26바/25레스토랑별도를 보존.
- Brewski/Pastel/Sky on20/Spire:29–30층크래프트맥주·22층지중해라이브·26층피자크랩브루스케타/금토DJ·39층TropicCity/20세미만19시까지·날씨좌석재배치와복장권고를 시설별로 구분.
- Skybar Summer Club/BARBU/Portrait:27층18세이상·두층풀/DJ/야외영화,24층가족지중해별도,33층11:30–24시칵테일과Blue Atlantis식사별도를 유지.
- Sizzle/Twilight/Vanilla/Surface:바17:30–23:30·식사18–23/22:30마감/우천지붕,목음악스테이크/예약전화,SmokyCinnamon·생맥주숯불/17–24시,파통베이식사/칵테일·모두실제호텔및귀가차량안내를 유지.
- Phra Tamnak/Viewpoint2:야외언덕전망대를바로오인시키지않음. 우천/귀가차량과정확한2번지점명·지도대상구분 유지.

44ID별 facts 원키 집합, reasons/FAQ/access/photos/sources 배열 개수, access 근거/좌표/노선URL, 사진URL/credit/rights/licenseUrl, sources URL, taxi 영어·태국어 기사용 문장이 동일함을 비교했다. 사진이 없는 항목은 빈 배열을 보존했고 새 사진 확보 완료로 표시하지 않는다. 수치·허용/금지/필수/권장 경계를 다시 읽었으며 러시아어 숫자/단위 붙음을 정리했다.

## 카메라29 전체 작성·재독

camera-editorial-ko.json의29개 전체 공개본문과CameraKoreanDetail/Gallery/Directory/MapResults/Comparison, camera-viewing-copy, camera-video-preview, CameraActions의원문을 읽었다. 모든29 place/preview/context/watch/location/displayTitle/intro/sceneParagraphs/faq/mapLabel/sourceNote를 작성했다. placeSources표시명10개를 러시아어로 바꾸고URL을 유지했다. basis/relatedIds는 원문과 완전동일하며 intro/scene/FAQ개수도 동일하다.

장소를 먼저 소개한다: 파통만/도시 파노라마·라마이 두식당·후아힌 두제공자는각실제관계3쌍을 유지했다. 케이프판와의NĀMABay와TangKhen참고핀을 동일한 정확지점으로 합치지 않았다. Kata/Cha-am/Chiangmai갱신사진은연속영상으로표현하지않고,7자료부족항목은완성된현장방문가이드로 승격하지 않았다. 아오낭은호텔캠이아닌GISTDA, Samet부두는운항표아님, KBA는강습/입수허가아님, Banyan은숙박/해변출입조건미확인, CrystalBeach와YachtClub은별도장비/각도미확인을 유지했다.

총괄피드백으로 케이프의 'отдых перед морем'를 'отдых у моря'로, 'точная установка камеры'를 'точное место установки камеры'로,밤조건을 'Когда на Пхукете наступает ночь...'로 자연스럽게 재작성했다. 전체카메라와루프탑의 'перед...панорамой' 직역투도 'с видом на...'로 다듬었다. 공개러시아어문자열의한글잔류0, basis내부한국어근거는보존했다.

## UI 원고 및 실제 gap 재검사

TravelSeasonPage/TopicHub여행분기/EntryGuideLayout/RooftopHub/Detail/Map/CameraKoreanDetail/Gallery/Directory/MapResults/Comparison/CameraActions/LocaleConnections/saved-cameras.ts/camera-weather.ts 원문전체를 읽었다. UI는원문한국어문자열을키로작성했고 strong전후실제텍스트조각과 구체적인`${...}`변수패턴을 포함한다. 화면전체를 잡는 broad identity패턴은 제거했다. 변수토큰집합뿐아니라순서까지 전사전비교 차이0을 확인했다.

총괄의실제HTML감사593gap을각text그대로 현재translateLocaleText 함수에넣어 한글잔류0 확인. 이는그감사의문자열사전대조이며 새native카메라통합후실제HTML/동적브라우저를재검사한결과는아니다. 그최종HTML/SEO/같은시장링크/canonical/사이트맵/날짜/Pages/PC모바일은여전히pending이다. 날씨의km/h·시간태국기준,최대4비교·공유복사·최근기록·저장불가알림을원문조건그대로 번역했다.


최종 원고 인계: travel/rooftops/cameras/ui는 complete(원고·내용대조 단계)다. 최신 실제HTML감사43gap와 동적지도선택패널/저장/날씨 합성감사88gap를 모두 읽고 현재translateLocaleText에 넣어 잔류0을 확인했다. UI2349키의 변수토큰/순서 차이0. 사전만으로 새HTML 전체검수나동적브라우저완료를 주장하지 않는다. 최신빌드통합후총괄의최종감사·PC/모바일등은pending.

최종 근거 보완: 입국 준비물의 공통 현금20,000/가족40,000바트 문장에는 기존 정본의 도하 공관 공통근거 URL을 하단에 보존하고 실제 본문을 추가 열람했다. 그 페이지의 국적목록으로 러시아 체류기간을 판단하지 않고 러시아30일은 모스크바 양자협정 원문만 따른다. 도하의 비자신청조건을 모스크바로 옮기지 않았다.

최종 gap재생기록은 artifacts/localization-20261018/ru/final-gap-replay.json. 파일 SHA는 읽은 감사파일과 공통함수/UI 바이트를 기준으로 저장했다. static43/dynamic88 재생잔류0이며, 이 결과는 실제 새빌드/브라우저 완료로 승격하지 않는다.


최종 audience 보완: tourist-visa의 'Документы для подачи в Москве'5문단 중4번째 비러시아국적자용 러시아체류증빙 문단은 삭제하지 않고 원문데이터에 보존했다. paragraphAudiences를 RU/RU/RU/other-passport/RU로 지정했고 기존 EntryGuideLayout의 ===g.market 필터와 같은조건으로 대조해 러시아일반여권본문에4문단만 표시됨을 검증했다. 0/1/2/4의 러시아신청서류·아동/학생/자영업조건·추가서류 문단은 그대로 노출된다. 외국전용1문단은 내부 foreignPassportExceptions에 대상/위치/범위를 기록했다. 공유코드/빌드/추가조사는 하지 않았다.
