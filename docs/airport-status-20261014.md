# 공항 안내 실제 반영 현황 — 2026-10-14

본 현황은 공항 시설 상세 안내 기준이다. 전체 노선·항공사 정보가 전수 검증 완료됐다는 뜻이 아니다. 시설 안내 전체 완료 공항은 0곳이며 운영배포되지 않은 로컬 반영이다. 기존 항공사·노선·URL은 유지한다.

| 공항 | 로컬 반영·검증 완료 | 남은 범위 |
|---|---|---|
| BKK 수완나품 | AOT 리무진 메인2층 국내·국제도착장, 렌터카2층Gate7, 국제선 환승 보안3층동쪽 동선. 한국어와 9시장 언어 3필드, 문장별 한국어 해석·해석false·PC1200/1440·모바일390·빌드 검증 | 전체 층별 지도, 의료·편의점·ATM·식당·흡연·교통 승차위치 디렉터리, 완전한 도착/출발/환승·FAQ |
| DMK 돈므앙 | 체크인 방법, 국제선 출국심사, 출발45분전 게이트 도착 권고, 항공사별 기내수하물 규정 확인 안내. 한국어와 9시장 출발4항목·문장별 해석/해석false·PC1200/모바일390 검증. S&P 식당 제1터미널3층 위치·FAQ를10언어추가하고20PC/모바일페이지·1713빌드확인(전화·시간·보안구역은보류). KBank 공식ATM디렉터리 공항항목·태국어조회링크10언어반영/20PC·모바일·10false검증; 정확한층·터미널·접근구역미확보 | 전체 층별 지도·편의시설·승차위치, 도착·환승·FAQ. I→D 동선 원문 국내선 도착 문구와 제목 충돌로 보류 |
| HKT 푸껫 | 국제선 도착홀 국제선터미널1층, 국제선수하물벨트1–5, 셀프체크인키오스크 국제선출발홀3층. 한국어와 9시장 3항목·문장별 해석/해석false·PC1200/1440·모바일390·빌드 검증. KBank 공식 ATM 디렉터리의 국내선터미널2층(출발) 표기·FAQ·태국어조회링크10언어 반영 및20PC/모바일검증(접근구역·시간·전화 미확보) | 전체 층별 지도·의료·편의시설·교통 승차위치, 완전한 도착/출발/환승·FAQ. 셀프기기 위치를 모든 항공사 체크인 위치로 확대 금지 |
| CNX 치앙마이 | 소개·운영시간·연락처, Grab/셔틀/RTC 교통 안내, CUSS/CUBD 지원항공사·출발 안내, FAQ. 한국어+9시장 문장별 한국어 해석·해석false·PC/모바일·빌드 검증. KBank 공항명 ATM 디렉터리항목·FAQ·태국어조회링크10언어반영/20PC모바일·10false검증(층·터미널·시간·전화 미확보) | 공식 층별지도, 의료실 실제위치, 편의점·ATM·식당·흡연·기타시설 디렉터리, 환승 안내. 지도/의료 조회실패는 시설 없음이 아니라 미확인 |

기타 USM/HDY/URT/UTP/CEI/KBV는 실제 조사 패키지 일부 회수만 완료했으며 공항 시설 상세 상단 구현 완료로 분류하지 않는다.

## 단일 작업 운영

사용자 요청에 따라 automation-2와 automation-3은 PAUSED, automation 10만 ACTIVE로 유지했다. 공항 시설·노선·항공사·현지화를 동일 단일 담당 작업에서 처리한다. 실제 automation_update 결과 확인 완료. 기존 Muse 실행은 취소·재시작하지 않았다. 기존 Muse PC 앱/기존 채팅과 완료·미완료 원장을 재사용한다. 이미 진행 중인 다른 Codex 턴이 있으면 단일 담당으로 결과 인계 후 중복 편집을 멈춘다. 새 작업/전체 재조사 금지. 운영배포 금지.

## 사용자 추가 확정 — 공통 사실과 번역 분리
공항 시설의 공통 사실은 Muse가 한 번 조사하고 Codex가 검수한 기준원고를 모든 언어로 번역한다. 언어마다 동일 위치·층·시간·시설 사실을 다시 조사하지 않는다. 국가별 항공사·노선·연락처만 시장별 유지한다. 미확보 시설 조사와 검증된 원고 현지화를 분리하며, 남은 동일시설·언어 원고는 사실ID 기반 묶음으로 회수하여 1필드1언어 순차대기를 줄인다. 실제 실행은 단일 담당 태국 직항 노선과 공항 안내 조사(01a13133-71b3-7310-b0fd-071ce0e7dd93)에서 수행한다. 2026-10-14 최신 지시 인계 메시지 도구 성공 확인. Muse ORCH PC 앱 en-us 초안이 미전송 상태로 관찰되어 다른 담당 입력을 덮어쓰지 않고 단일 담당에 실제 전송/live 검증을 요청했다.

## 사용자 후속 확정 — 잔여 시설 전체 실행 및 완료 알림
ATM·식당·편의점·흡연구역·공식층별지도 잔여 범위를 단일 automation10 담당이 전체 완료까지 수행한다. 실제조사파일 회수·공식근거검수·공통원고 전언어일괄번역·로컬반영·화면/기능검증까지 확인한다. 요청만전송하고완료처리금지. 중간진행/부분완료알림없이전체실제완료시에만알린다. 기존Muse실행재시작/중복작업금지·조회실패를시설부재로단정금지·운영배포금지. 통합담당메시지와automation10프롬프트업데이트도구성공확인.

## BKK S&P scoped directory addition
Official airport-branch registration and official English locator CTA are implemented in all10 market languages. Body and CTA each checked on20 PC/mobile pages. Terminal/floor/access/hours/phone remain unverified and hidden; this is not complete BKK dining coverage. Final1713 build passed with0 SEO errors/duplicate titles.

## HKT KBank scoped directory addition
Muse official locator literal card lists Domestic Terminal, floor2 (departures); directory wording, FAQ and Thai locator CTA implemented in all10 market languages.20 PC/mobile pages verified;1713build passed. Public/security access, hours, phone and foreign identity eligibility remain unverified. Independent locator UI was usable but exact selected card was not recovered; existing task cache supplement pending, without restarting research.Whole airport coverage incomplete.

## CNX KBank scoped directory addition
Airport-named ATM directory entry, FAQ and official Thai locator link implemented in all10 markets; existing English base for Korean review preserved.20 PC/mobile pages and10 review-disabled fixtures passed; source keyboard toggle passed;1713build/0SEO errors. Terminal/floor/hours/phone/access still missing.Whole facilities not complete.

## BKK KBank scoped directory addition
Official airport-named ATM directory entry, FAQ and Thai locator CTA implemented all10markets;20PC/mobile pages verified and1713build passed.1706/813 remain uninterpreted identifiers. Terminal/floor/access/hours/phone still missing; not whole bank/ATM coverage.

## BKK 지정 흡연구역 추가
AOT 공식 시설 상세822 원문과 독립 대조한 건물 외부1층4곳(공항 경찰서 앞, Magic Food Court 앞 Gate10, 주차빌딩Zone2·Zone3)을10시장언어 본문·FAQ·공식링크에 반영했다. 문장별 한국어해석과짧은위치강조,20PC/모바일·9해석비활성·키보드출처접기 검증 및1741페이지빌드/SEO오류0. 확인일은2026-10-14이며게시일은미표시. 터미널번호·운영시간·벌금은확정하지않았고지도원본/전체시설완료는아니다.

## 직접 공식조사 보완
BKK/HKT/DMK/CNX 검증시설21항목과 BKK공식실내지도 링크를10시장에 적용·PC모바일80검수·검토false36검수·1762페이지빌드 완료. 원본지도다운로드0(403닫음), 항공사구조전화67조합공백·기타시설·전수노선검수는 미완료 유지. 근거: artifacts/airport-research/direct-closeout-20261014/import-review.json.

## 오늘 로컬 작업 종료 — 2026-10-14T21:27:07.008293+09:00
automation10 도구삭제성공. 21시설항목10시장반영/공식지도링크/PC모바일·검색필터·공항쌍·CAAT출처·빌드검증 완료. 전체조사완료아님:4공항지도원본0/67조합구조전화공백/기타시설·전수노선·원어민최종검수미완료. 결과 docs/airport-closeout-result-20261014.md. 자동화2/3 PAUSED유지,배포0,추가자동폴링0.
