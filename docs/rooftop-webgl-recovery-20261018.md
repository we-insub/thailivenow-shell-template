# 루프탑 지도 WebGL 초기화 실패 복구

2026-10-18 사용자가 운영 영문 시로코 지도 공백 화면과 로컬 러시아어 목록을 신고했다. 운영 Chrome 콘솔에서 `Failed to initialize WebGL`, `GL_VENDOR = Disabled`, `GL_RENDERER = Disabled`를 확인했다. 자산·번역 누락이 아니라 WebGL 컨텍스트 생성 실패이며 기존 Map 생성자는 예외 뒤 빈 영역을 남겼다.

## 범위와 보존

- 대상: RooftopMap을 사용하는 11개 언어의 루프탑·전망대 전체/도시 목록·페이지네이션·시설 상세.
- 주된 질문과 메뉴: 기존 루프탑 메뉴에서 시설 위치를 찾고 같은 언어 상세로 이동. 새 페이지·시장·정본·공개 범위 변경 없음.
- 기존 MapLibre 지도는 유지. 생성 실패에 한해 Leaflet 1.9.4의 DOM 이미지 타일 지도로 전환한다. 사용자가 그래픽 설정을 바꾸지 않아도 지도 이동·확대·시설 핀·팝업을 사용할 수 있다.
- 타일과 표시 출처는 기존 resilient-map의 Esri 대체 지도를 사용한다. 기존 건물 좌표·같은 건물 시설 묶음·역/선착장 접근점·상세/길찾기 URL을 보존한다. 새 시설·교통 사실·사진을 만들지 않는다.
- 상위 목록↔상세 초기 HTML 링크, 언어·canonical·hreflang·사이트맵·소개·FAQ·자료 확인일·본문 수정일은 유지한다. 지도 옆 저작권은 계속 노출한다.
- 부분 배포 계약에 따라 이전 성공 배포 955fe2cbcc3c38a98fff568bb21c3eb21432f2e4에서 지도·의존성만 격리한다. 다른 미커밋 작업은 제외한다.

## 읽은 기준

INTERNAL-LINKING-CONTRACT.md, SITE-DATES.md, page-generation-date-contract.md, operations-site-dates.md, page-seo-rules.md, detail-template-rules.md, natural-korean-copy.md, sirocco-user-full-reference-20261014.txt, PARTIAL-RELEASE.md. 본문 재작성 없이 지도 초기화만 수정한다. 라이브러리 API는 https://leafletjs.com/reference.html 을 확인했다.

## 검증 기록

실제 WebGL이 비활성화된 Chrome에서 로컬 영문 시로코 타일·핀, 15→16 확대, 팝업 상세 URL을 확인했다. 러시아어 전체 지도에서 전망대 필터 5개 핀, 치앙마이 HONG’s 핀에서 /ru/rooftops/hongs-sky-bar/ 연결을 확인했다. 추가 PC/모바일·빌드·운영 결과는 artifacts/rooftop-webgl-20261018에 기록한다. 배포·실제 운영 반영·수집·색인은 서로 다른 상태이며 이 문서 작성만으로 완료 처리하지 않는다.
