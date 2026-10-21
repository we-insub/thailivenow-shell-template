# 음식배달 주문 순서 카드 CSS — 로컬 수정

사용자가 /ko/food-delivery/의 번호 배지가 제목에 겹치는 문제를 제보했다. 공통 상세 CSS src/styles/japan/detail.css의 li padding-left:4px!important, margin-block:12px!important가 TransportGuidePage의 번호 영역을 덮어쓰는 것이 원인이다.

TransportGuidePage에 food-delivery-guide 클래스를 추가하고, 이미 국내선 안내에 적용되어 있던 번호 공간 확보 규칙을 배달 안내에도 적용했다. PC 왼쪽 68px, 모바일 58px 및 단계 사이 margin 0을 유지하여 배지는 28px 원형으로 왼쪽에, 제목과 본문은 같은 시작점에 표시한다. 기존 국내선 규칙은 유지하며 다른 교통 안내·전체 목록 CSS는 바꾸지 않는다. 별도 다국어 LocalizedDeliveryGuide는 이미 전용 패딩을 갖고 있어 원고·CSS 변경 대상이 아니다.

기존 본문·조건·FAQ·메타·날짜·출처·사진·내부 링크는 보존한다. 작업 전 시로코/상세 편집/SEO·날짜 계약을 적용했고, 검수는 artifacts/delivery-step-layout-20261021/에 기록한다. 한국어 320·390·768·1440px, 기존 국내선 390·1440px, 영어 배달 390·1440px에서 번호와 제목 사이 공간·본문 정렬·가로 넘침을 확인한다. 전체 테스트·빌드·SEO/날짜/이미지 근거 감사 및 Pages 로컬 런타임도 유지한다.

이번 요청은 CSS 수정과 로컬 검수이며 운영 배포·Git 푸시는 하지 않는다. 실제 결과는 해당 artifacts의 로그와 JSON을 따른다.

후속 사용자 요청: 주문 순서 소제목만 ‘호텔로 음식 주문하는 순서’에서 ‘배달음식 호텔로 주문하는 방법’으로 변경했다. 한국어 food-delivery.json의 order.title 한 필드만 변경하며, 나머지 데이터와 다국어 원고는 그대로 보존한다. 검수 기록은 artifacts/delivery-heading-20261021/에 분리하며 운영 배포·Git 푸시는 하지 않는다.

2026-10-22 후속 승인으로 11개 언어 CSS·소제목 검수와 운영 배포를 진행한다. 앞선 소제목 단독 변경의 전체 테스트는 번역 원본 지문 불일치 1건을 놓쳤으며, 이번 작업에서 정확히 해당 제목 변경만 대조하고 지문을 갱신해 142/142 통과를 확인했다. 새 범위·성공 근거는 delivery-all-locales-release-20261022.md와 해당 artifacts에 기록한다.
