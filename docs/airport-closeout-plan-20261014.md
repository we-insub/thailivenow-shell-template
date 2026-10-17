# 공항 오늘 마감 계획 — 2026-10-14

사용자 최신 지시에 따라 무기한 완성 대기를 종료한다. 한국시간 **20:30 조사·자료요청 마감 / 21:30 로컬 반영·검수·자동화 종료**. 전체 전수조사 완료와 오늘 작업 종료를 구분한다.

## 오늘 끝낼 범위

1. 현재 데이터 기준 공항별·국가별 미확보 원장을 고정하고 실패한 exact URL/동일 실패 검색은 다시 요청하지 않는다.
2. 확보 원본을 중복·보류·검증된 미반영으로 구분한다. 이미 반영된 6시설묶음과 BKK 흡연4곳은 재조사·재번역하지 않는다.
3. 20:30까지 회수·검수된 고유 자료만 공통 사실 한 번, 모든 지원 언어 한 묶음으로 로컬 반영한다. 근거 없는 필드는 숨김 유지.
4. 20:30 이후 신규 조사 없이 PC·모바일·검색·방향/공항 필터·노선/항공사/공항쌍/CAAT 상세연결·검토해석스위치·출처접기·빌드를 최종 검수한다.
5. 21:30까지 완료/미확보·실패 사유·최종 파일/검증 결과를 보고하고 automation10을 종료한다. 운영배포하지 않는다.

## 현재 국가별 실제 데이터와 연락처 구조 공백

| 시장 | 노선 행 | 서비스 행 | 가이드 | 항공사·공항 조합 | 전화필드 없는 조합 |
|---|---:|---:|---:|---:|---:|
| KR / ko | 44 | 73 | 36 | 26 | 14 |
| MY / ms | 68 | 43 | 17 | 22 | 12 |
| CN / zh-cn | 85 | 53 | 20 | 26 | 10 |
| IN / en-in | 68 | 58 | 19 | 28 | 13 |
| RU / ru | 22 | 17 | 8 | 7 | 1 |
| JP / ja | 65 | 58 | 24 | 27 | 12 |
| GB / en-gb | 9 | 33 | 14 | 8 | 2 |
| US / en-us | 0 | 0 | 4 | 0 | 0 |
| ES / es | 2 | 3 | 6 | 2 | 1 |
| TW / zh-tw | 51 | 56 | 22 | 19 | 2 |

전화 필드 공백은 실제 현장직통 부재를 뜻하지 않는다. 본문·이메일·예약/도시사무실과 역할을 먼저 대조한다. 현재165조합에는 모두 서비스 기록이 있으며67조합은 구조화된 전화값이 없다.284서비스 기록은 추적3필드가 완전하지 않아 과거기여를 추측으로 보충하지 않는다. EN-US 노선0은 미국 직항 전수부재 결론이 아니다.

## 공항별 남은 항목

### BKK

- 이미 반영: transport three fields; S&P airport branch listing; KBank airport directory listing; four exterior floor1 smoking locations
- 미확보: official original floor maps; KBank terminal/floor/access/hours/phone; S&P terminal/floor/access/hours/branch-direct-phone; medical exact location; convenience stores exact locations; other dining listings; complete arrival/departure/transfer guidance
- 반복 금지/보류 근거: official root ERR_CONNECTION_RESET repeated exception exhausted

### DMK

- 이미 반영: four departure guidance fields; S&P terminal1 floor3; KBank airport directory entry
- 미확보: official original floor maps; KBank terminal/floor/access/hours/phone; S&P hours/access/branch-direct-phone; medical exact location; convenience stores exact locations; current outdoor smoking locations; arrival and transfer guidance including held international→domestic wording conflict
- 반복 금지/보류 근거: official root ERR_CONNECTION_RESET exception exhausted; CPALL/en/403; 7Eleven official store search no matching airport entry and app spinner failure; official-domain smoking query no matching detail

### HKT

- 이미 반영: international arrivals terminal1F; baggage belts1–5; international CUSS3F; KBank domestic terminal floor2 departures listing
- 미확보: official original floor maps; medical exact location; convenience stores exact locations; airport restaurants exact locations; current smoking locations; KBank access/hours/phone; complete arrival/departure/transfer guidance
- 반복 금지/보류 근거: official root ERR_CONNECTION_RESET exception exhausted; known Arrival_Procedure_HKT reset; S&P Phuket Airport single query no result; not absence

### CNX

- 이미 반영: introduction/contact/operator hours; Grab/RTC/shuttle scope; CUSS/CUBD supported carriers and departure guidance; FAQ; KBank airport directory entry
- 미확보: official original floor maps; medical exact location; convenience stores exact locations; airport restaurants exact locations; current smoking locations; KBank terminal/floor/access/hours/phone; transfer guidance
- 반복 금지/보류 근거: official root ERR_CONNECTION_RESET exception exhausted; facility and en/facility failures; S&P single ChiangMaiAirport English query no result; not absence

### USM/HDY/URT/UTP/CEI/KBV

- 이미 반영: original partial regional packages retained
- 미확보: source-by-source verification before introduction/facilities/localizations; packages are not complete facility guides
- 반복 금지/보류 근거: USM introduction original continuous quote unavailable; do not publish paraphrase as literal

## 오늘 추가 조회에서 제외하는 구체 항목

- JA-TG-OFFICE-5: tg-nrt-office phone/hours; tg-kix-office phone/hours; tg-fuk-airport-office hours; tg-fuk-baggage-office hours; tg-ngo-airport-office hours — closed-after-two-paths-no-fields
- CN-9C-PVG-BAG: arrival baggage/PIR direct role phone — renderer technical failure
- CN-CZ-BKK-BAG: CZ-specific arrival handler connection literal and baggage direct phone — no official literal linkage; TG emails not promoted; failed paths closed
- TW-IT-KHH-BAG: IT arrival baggage/PIR direct phone/hours — two official menu scopes unknown; generic operator contacts excluded
- KR-KE-EFORM: post-login form fields and submission outcomes — pre-login only; login-only details unobserved
- SL-BKK-DIRECT: arrival baggage dedicated phone role — Cloudflare/human verification failed; bypass/retry forbidden
- TG-IN-DEL-BLR: DEL office literal disagreement OL28 vs Room28; BLR airport fax role ambiguity — ambiguous kept internal; existing values preserved

## 회수 파일 반영 대조

검수JSON 149개를 읽어 `factsVerified=true && publicImported=false` 명시 후보를 추렸다: 0개. 다른 미반영 플래그에는 기술실패·중복·scope/기한/역할오류·원문 미확보가 포함되므로 바로 공개하지 않는다. 개별 원본 전체 재검증 완료를 뜻하지 않는다. 상세 파일경로와 공항·시장별 행은 `docs/airport-residual-ledger-20261014.json`에 보존한다.

현재 원본 지도 파일은4공항 모두0개다. 실패한 홈페이지 조회를 반복해 오늘 전체 지도완료를 약속하지 않는다. 카운터·전화·운영시간·PIR·확인서·보험서류와 전국가 전수노선의 미확보도 같은 원장에 남긴다.

## 20:24 직접 조사·반영 업데이트 (최신 인간 지시)

Codex 직접 공식조사를 승인받아 새 성공 상세페이지/공식 실내지도에서 **시설21항목**을 추가했다. BKK 의료3위치·편의점5위치·식당3곳·ATM1항목, HKT 의료2항목, DMK 은행2·ATM4항목, CNX 편의점1위치다. DMK SCB ATM1항목에는1층/3층 두 위치가 포함된다. 기존 노선·전화·원본·시장분리는 유지한다. 공통 원고는10시장에 동시 반영했고 외국어 원문/문장별 한국어 검토는 별도 필드다.

- BKK: 공식 실내지도 페이지와 층별 실제 디렉터리 확보, 공식링크 최상단 연결. SVG 원본5URL은403으로 다운로드실패; 재시도하지 않고 원본지도완료로 표시하지 않는다. KBank ATM3층E20, S&P3층F16은 확인됐으나 시간·현장직통전화·출입경계는 여전히 미확보다.
- HKT: 국제선1층7번입구 일반구역 의료실24시간, 국내선1층 응급처치실 월–금08–17. 의료직통전화·비용은 미확보다.
- DMK: 은행지점과 ATM을 구분해 위치 반영. KBank4층은 **은행지점**이며 기존 KBankATM위치를4층으로 추정하지 않는다. 의료/편의점/흡연/지도원본은 미확보다.
- CNX: MiniMarket 국내선1층 도착장 일반구역 반영. 정규 영업시간은 검색snippet만으로 확정하지 않았다. 의료/흡연/식당/지도원본 등은 남는다.
- 항공사: AOT AirlineInformation_BKK의 명시 유효기간2026-09-01–09-30 만료를 확인해 진에어 등 새 전화값 추가 보류. 후속 Airlineinfoupdate는 Internal Error, 해당URL 재시도 금지. 구조 전화공백67조합을 임의번호로 줄이지 않는다.

실제 데이터·근거·지도실패manifest·PC모바일80검수·해석false36검수는 artifacts/airport-research/direct-closeout-20261014에 저장한다. 오늘20:30 조사마감/21:30 종료를 유지하며 전체coverage완료 선언은 하지 않는다.
