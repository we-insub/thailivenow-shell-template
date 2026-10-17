# 공항 실내지도 직접 표시

사용자 지시: 외부 지도 링크만 제공하지 말고 수완나품·돈므앙·푸껫·치앙마이 공항 안내 페이지 안에서 실제 지도를 표시한다. 앞서 확정한 한국어 우선 범위를 유지한다. 대상 질문은 ‘공항 안에서 어느 층·구역으로 가야 하나요?’다.

## 공식 화면 확보 및 구현

2026-10-18 JST(2026-10-17 Asia/Bangkok)에 각 공식 페이지를 직접 읽고 실제 iframe URL을 확인했다.

| 코드 | 공식 출처 | 공식 페이지가 사용하는 지도 |
| --- | --- | --- |
| BKK | https://suvarnabhumi.airportthai.co.th/airport-map | https://indoor.gtt-prod.sawasdeebyaot.com/desktop/BKK/en |
| DMK | https://donmueang.airportthai.co.th/airport-map | https://indoor.gtt-prod.sawasdeebyaot.com/desktop/DMK/en |
| HKT | https://phuket.airportthai.co.th/airport-map | https://indoor.gtt-prod.sawasdeebyaot.com/desktop/HKT/en |
| CNX | https://chiangmai.airportthai.co.th/airport-map | https://indoor.gtt-prod.sawasdeebyaot.com/desktop/CNX/en |

`AirportIndoorMap.astro`가 공식 지도 뷰어를 페이지 안에 삽입한다. `AirportFacilityIntro.astro`에서 한국어 네 공항에 적용하고 기존 BKK의 링크만 있던 안내 블록을 이 지도로 대체했다. 기본 BKK 구역은 실제 공식 화면의 Main Terminal이다. 원본 표기가 영어임을 설명하고 층·Area·확대 사용법을 한국어로 안내한다. 지도 옆 제공자를 ‘태국공항공사’로 표시하고 공식 출처 링크를 남긴다. 원본 영어 지도 자체를 한국어 번역 지도라고 하지 않는다.

다운로드와 게시 권리를 혼동하지 않는다. 실제 브라우저는 SVG를 로드했지만 urllib 원본 다운로드는 네 공항 각1회 HTTP403이었다. 원본 파일을 보관·복제했다고 보고하지 않으며 실패를 반복하거나 보안차단을 우회하지 않았다. 원본을 재호스팅하지 않고 공식 사이트와 같은 뷰어를 직접 표시한다. 외부 지도 서비스 가용성에 의존한다. 네 공항의 실제 기본 이미지 URL·로드 결과와 실패 기록은 `artifacts/airport-indoor-maps-20261018/`에 보존한다.

## 보존·연결·문체·날짜

기존 필수 SEO·한국어·시로코·상세·공항·날짜·연관 연결 규칙을 적용했다. ‘공식 페이지에서 열 수 있어요 → AOT 링크’라는 외부 이동 안내를 ‘아래 지도에서 층을 선택하고 확대’라는 실제 행동 안내로 바꿨다. 시로코의 구체적인 이동/행동 설명과 비교했다. 시설 본문의 층·요금·시간·조건·FAQ·출처·확인일·국가별 데이터는 수정하지 않았다. 구역 식별자를 층/게이트/출입권한으로 해석하지 않는다.

동일한 `/ko/airport-assistance/airports/{bkk,dmk,hkt,cnx}/` 정본과 `/ko/airports/` 목록↔상세 연결, 항공사·노선·공항쌍·교통 연결을 보존했다. 지도 출처만 추가하며 새 내부 시설 상세·번역·일정·언어 경로는 만들지 않는다. 다른 시장에 새 내용을 공개하지 않는다. 신규 관계 자동화는 없으며 HTML에서 공항코드와 초기 iframe·상위 복귀 링크를 수동 대조했다.

기존 자료확인/배포 날짜를 유지하고 현재 시각으로 덮어쓰지 않았다. 위 지도 조회 날짜는 지도 출처 관측 기록이며 기존 모든 공항 사실의 재확인일이나 배포일이 아니다.

## 검증

- 전체 테스트40/40, 최종 build1,822페이지·SEO오류0·중복제목0·중복설명0. 경고134는 기존 메타 경고이며 이번 새 지도 설명이 제목/메타와 충돌하지 않는지 직접 검수했다.
- 날짜 회귀9/9 및 전체 날짜 감사1,822페이지·3,172표식·오류0. 전체 사이트 디자인 검사1,822페이지 issues0.
- 네 공항 PC1280/모바일390 실제 iframe 안의 이미지 로드·naturalWidth>0 확인. 최초 HKT/CNX PC 캡처 직후에는 다운로드 중 naturalWidth0이었고, 후속 PC 확인에서 각각224/242로 로드 완료했다. 처음 기록을 성공값으로 덮어쓰지 않았다.
- 네 공항 모두 실제 층 선택 후 지도 이미지 URL 변경 및 확대 후 표시 너비 증가를 확인했다. 부모 문서 가로넘침0, 올바른 공항 iframe1개. 시설·지도 표기는 외부 공식 화면이며 자연한국어 원고 전수교정 완료를 뜻하지 않는다.
- 실제 Wrangler Pages 런타임: 11언어 홈/응답날짜/자산/preview noindex 검사 통과. 네 한국어 상세HTTP200, 서버 날짜 스냅샷 및 지도 초기 HTML 확인. 최종 수완나품 지도를 로컬4338에서 직접 열고 화면을 저장했다.

로컬 구현·검수 완료. 운영 배포·커밋·푸시·수집·색인 제출은 수행하지 않았다. 다른 작업의 미커밋 소스·자료·QA를 보존했다.
