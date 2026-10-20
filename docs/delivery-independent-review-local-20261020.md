# 음식배달 외국어 원고 독립 검수

2026-10-20. Reviewer navigation_contract; writer delivery_locales. 원고 직접 수정 없음. 운영·배포·색인 승인 아님.

## 범위와 방법

기준 src/data/transport/guides/food-delivery.json, grabfood.json, line-man.json, shopeefood.json, robinhood.json을 전체 읽었다. en/ms/zh-cn/zh-tw/ja/ru/es의 모든 사용자용 고유 문자열을 전체 읽고, 같은 문자열을 재사용하는 모든 슬롯의 구조·원문 대응을 대조했다. en-us/en-gb/en-in은 공통 영어와의 모든 변경 문자열을 따로 읽었다. 5개 원고의 소개·요약·각 섹션/문단·이용 순서·FAQ·출처명을 포함하며 단순 키워드 검사로 의미 검수를 대체하지 않았다.

## 결과

차단하는 원고 결함을 발견하지 않았다. 문단/단계/FAQ/출처 수와 외부 URL은 한국어 정본과 일치한다. 음식배달/온라인 쇼핑 상품 배송/차량 호출의 의미가 구분된다. 한국 번호 SMS·6자리 OTP는 모든 국가 번호 보장으로 확대하지 않았으며 한국 번호 사용 시라는 범위를 유지한다. KakaoPay는 공식 목록에 포함하되 계정·주문별 실제 사용 가능 여부를 확인하는 조건을 유지한다. 3%·최소 1바트·0.5바트 경계의 올림/내림 및 카드사 별도 수수료를 보존한다. 최근 승차/주문 결제수단 기본값과 GrabPay+현금 혼합 불가도 유지한다.

취소 가능성이 높은 조건 세 가지(가게 미수락 / 기사 미배정 15분 초과 / 음식이 가게에 남은 채 30분 초과)는 자동 취소 보장으로 바뀌지 않았다. 그룹 주문 생성자·성공 알림·기사 배정 전이라도 무료 취소 보장 없음도 유지한다. 호텔 객실 배달은 호텔 규정에 따르며 현금·해외카드 사용을 전면 보장하지 않는다. Shopee 태국 앱 태국어·영어·미얀마어 및 Robinhood 방콕·인근 범위도 보존한다.

같은 언어의 완성된 taxi 안내가 없어 제외한 관련 링크 2개는 deferredRelatedLinks에 원본 URL과 사유를 남긴다. 본문 사실이나 출처를 제거한 요약과 구분한다. 다른 영어 시장 변경은 bill/banknote, cart/basket, inquiry/enquiry, canceled/cancelled, collection/pickup, mobile phone 등 의미를 유지하는 지역 표현이다.

## 검수 대상 SHA256
- src/data/delivery-localized/en-gb.json: f9f89760c3b088dd25818c1b4d0946b17291684b9f008763b437369a5df9b851
- src/data/delivery-localized/en-in.json: 30622abf073af876ce634591c16134d0c1d48bfcc66d0fce25261eeb85e03c54
- src/data/delivery-localized/en-us.json: 053a6b9812f4d9ab639952d94973d90ff7a7018dc0ad119434110916e9a6308a
- src/data/delivery-localized/en.json: 017246751519e1a2439251ea3daf601aa8d9fb352429c018b0d17f21c32db4fd
- src/data/delivery-localized/es.json: 02be777a269e771d0670a0fba7eb27240158f6a1f4b06ba4745752d728ab1d33
- src/data/delivery-localized/ja.json: 668aba340ce3123b43bf3123ae976746408627ba1bc53a911763e09cdfa857af
- src/data/delivery-localized/ms.json: 589e523c85e6491c3165307d66840b00776eb66d50f35db7153c2beeac8773c5
- src/data/delivery-localized/ru.json: b22c120b5819e379a5df1ff3fa115f6b6818d763672cfdd56bb02c61c2ff7570
- src/data/delivery-localized/zh-cn.json: bd25c676bfbb6b986047592bb330143441abaa6e5e66c192f0f6604fe489fb2b
- src/data/delivery-localized/zh-tw.json: 4b9bd3807d077f5a0892ad3fbc7522db40e1d93d3268e5e510b1cf9a13409a15

이 SHA의 원고 의미·보존 대조 결과다. 렌더러가 실제 모든 슬롯을 표시하는지, 초기 HTML/FAQ schema, 실제 내부 링크, 모바일/PC, 서버 날짜, 이미지 미확보 목록, 전체 빌드·운영 응답은 통합 검수에서 별도로 확인해야 한다. 검수 후 원고 변경 시 변경 필드만 다시 읽고 새 SHA를 기록한다.

## 최종 변경 필드 재검수

같은 날 후속 수정에서 10시장 food-delivery.parentUrl만 각 `/:locale/food/` 정본 허브로 바뀐 것을 재독했다. parentName은 같은 음식·배달 탐색 의미를 유지한다. 기존 137개 고유 본문 문자열은 재수정하지 않았으므로 승인된 범위를 불필요하게 다시 판정하지 않았다.

src/lib/delivery-localized.mjs의 conditionPhrases와 deliveryTextParts, LocalizedDeliveryGuide의 문단·steps·FAQ 호출을 읽었다. 3%의 거래총액·최소1바트·반올림 경계·6자리·기사 미배정15분 초과·음식이 가게에 있는30분 초과를 조건과 함께 짧게 강조한다. 데이터 문자열은 HTML로 해석하지 않는다. 모든 10시장 5원고의 모든 문자열을 분할 후 결합한 결과 원문과 정확히 같아 텍스트 손실이 없었다. 이 검사와 렌더링·접근성·전체 빌드는 별개다.

후속 parentUrl 변경을 포함한 최종 SHA256:
- src/data/delivery-localized/en-gb.json: 0377f44bbdd3b36947d40ff63d54c63af0b0f98021f77d423843be6a73e8c95c
- src/data/delivery-localized/en-in.json: 80d6776ec5ead44dfed51ef8934ac87ea7b6367443f4f215c731c90966722d82
- src/data/delivery-localized/en-us.json: 31749c4be071bd397210c994fb4ed802afa4c565296eebb67ba30bdb2217cc3e
- src/data/delivery-localized/en.json: f845057463b928d8c64864a39e4d7661b72d3dec74a3b762d28ca05f1e26b39a
- src/data/delivery-localized/es.json: b5b2e18a568be7942366b484f7a425e57c7ade9f6761f3e375720d4ef20a8e17
- src/data/delivery-localized/ja.json: 6d5a6b820730cc4e22d04db042a4038a4c2c93d454ba727913184c22cc3c5825
- src/data/delivery-localized/ms.json: 7d3e27246ad7ba13e3a48b01f56de28ba5c77dcc45140c2fd4015cedfb7674c9
- src/data/delivery-localized/ru.json: a8f874aaa46280914986e3417d31de9a05682f7e10944e289eee340e63448f2b
- src/data/delivery-localized/zh-cn.json: 4c36b3f3f62e2d25a097a824fb7155842b606343d85246064294446da30bb6ef
- src/data/delivery-localized/zh-tw.json: 281320dd5b26a091ea10e04a6925862a654bb53d76996277112b27883d51db72
- src/lib/delivery-localized.mjs: 1ff2a6cdfb46f44d5b744679e492541c8193a4f68e0d4fd0dde1971909820481
- src/components/LocalizedDeliveryGuide.astro: 4e26d2752c0e704978e424085a441daed4ed47eaf0e097883729874f4e9e2fa0

## 전용 SEO 제목·설명 재검수

src/lib/delivery-meta.mjs의 7개 기본 언어 35개 title/description 쌍을 전체 읽고 각 실제 H1·원고·대상 시장과 대조했다. 별도 요약 메타는 본문을 줄이지 않으며 이용 지역·LINE ID·호텔 주소·배달비·해외결제·취소 조건 등 실제 내용을 설명한다. 미국/영국/인도는 영어 메타와 공통 SEO의 시장 표시를 사용한다. 차단하는 사실·언어 결함 없음. Malay ShopeeFood의 parcel을 더 명확한 쇼핑 상품 배송 표현으로 바꾸는 선택적 개선을 parent에게 전달했다. 이 원고 판단은 새 파일의 실제 생성 HTML·길이 경고·H1/메타 출력 검사를 대신하지 않는다.
a6f264a8e3f3835ed415e8bc7ea136db2f276da4adcb7a8febbef30f1b6eeb2e  src/lib/delivery-meta.mjs
