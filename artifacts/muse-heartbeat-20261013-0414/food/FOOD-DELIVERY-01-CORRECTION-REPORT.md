# FOOD-DELIVERY-01 정정 보고서

- 정정일: 2026-10-13 (KST)
- 배경: 소유자 03:25 ZIP 회수 검수 지적 3건 반영
- 백업: `download/` 아래 `*_v1.*` + `fooddelivery01-codex-package_v1.zip` (정정 전 원본)

## 1. Bolt Food 방콕 claim → partial 강등

### Before
- evidence: "Bolt 공식 방콕 도시 페이지에 'Bolt Food delivery in Bangkok' 섹션 존재" / "Bolt 공식 태국(로케일 en-th) Bolt Food 배달기사 모집 페이지" → 운영 중(방콕 확인) 결론
- platforms/coverage/guide/seo: Bolt Food = 운영 중(방콕 확인)

### 지적 근거 (소유자)
- `bolt.eu/en-th/food/courier` 원문은 Estonia 사례·글로벌 가입 안내이며 Thailand 현지 요건 문구 없음 → 로케일 URL 자체로 태국 운영 확정 금지
- `bolt.eu/en-cr/cities/bangkok/route/...` 페이지는 SEO 자동 생성 문구 → 공식 현지 출시·실제 제공 도시·태국 식당 주문 가능 증거로 사용 불가

### 재조사 결과 (2026-10-13)
- Bolt 공식 발표·태국/방콕 Bolt Food 런칭 보도자료·공식 앱 제공지역 명시를 웹 검색으로 찾지 못함. Bolt의 2020년 태국 진출 발표는 차량호출(ride-hailing) 한정.
- Bolt Food Courier 공식 Google Play 리스팅: "Bolt Food is available in 80+ cities and 20 countries across Europe and Africa." — 유럽·아프리카 한정 표기, 아시아/태국 미언급.
- (참고, 공식 아님) Wikipedia Bolt Food "Area served" 목록도 유럽 15개국 + 아프리카 2개국, 태국 없음.

### After
- evidence 17→19건: 기존 2건에 강등 사유 명기(※ 소유자 검수 문구), 신규 2건 추가(앱스토어 제공지역 명시 + 재조사 범위 기록)
- platforms Bolt Food: `operatingInThailand` true → **null**, status → "미확인 (partial)"
- coverage Bolt Food: `operatingInThailand` true → **null**, cities → null
- guide: Bolt Food 섹션·FAQ·한눈에 보기 표 전부 "미확인(partial)"으로 재작성
- seo: AEO 답변 Bolt Food 항목 "미확인(partial)"로 정정

## 2. Grab MY 팁 제거

### Before
- guide GrabFood 섹션에 "팁" 불릿: in-app tipping 안내(5점 평가 후 팁 옵션, 전액 기사 귀속, 의무 아님) — 말레이시아 지역 공식 페이지 출처임을 단서로 달았으나 태국 가이드 본문에 포함
- platforms GrabFood traveler.tipping: MY 페이지 안내를 설명문으로 기재

### After
- guide에서 팁 불릿 **삭제**. "확인되지 않음" 불릿에 팁 추가: "태국 전용 in-app tipping(말레이시아 지역 안내만 존재해 태국 적용 불가로 제외)"
- platforms traveler.tipping → **null** + tippingNote에 MY 한정·태국 제외 사유 명기
- evidence 해당 claim도 "말레이시아 지역 공식 페이지 한정 … 태국 가이드에서 제외"로 재표기

## 3. Grab Help 원문 확보 시도

- `browser.spawn_task`는 이 실행 환경의 browser 네임스페이스에 없음 → `browser.search`/`browser.open`으로 가능한 범위 수행
- help.grab.com 메인: 네비게이션(카테고리명)만 텍스트 조회 가능
- 개별 도움말 문서(예: `help.grab.com/passenger/th-th/115005941707`, 공식 grab.com 프로모션 T&C에서 인용된 TH 문서 ID): JS 렌더링 셸만 반환, 원문 확보 불가
- help.grab.com OTP·결제/해외카드·취소/환불·호텔 수령 관련 공식 문서: 검색으로 공식 문서 페이지 미발견(제3자 블로그·뉴스만 — 공식 근거로 사용 불가)
- **결론**: OTP/전화번호 인증·결제/해외카드·취소/환불·호텔 수령은 null 유지. guide의 Grab Help 문구를 재확인 결과로 갱신. **실제 브라우저 열람 작업은 부모(라이브 브라우저 위임 가능 주체)에게 이관 필요.**

## 변경 파일 (정정 후)

| 파일 | 바이트 |
|---|---|
| fooddelivery01-evidence.json | 8,420 |
| fooddelivery01-platforms.json | 8,710 |
| fooddelivery01-coverage.json | 1,480 |
| fooddelivery01-seo.json | 3,203 |
| fooddelivery01-guide.md | 11,033 |
| download/fooddelivery01-codex-package.zip (재생성) | SHA f9a99ac4afbb3d45d5f42248a542c61f8ced33a70abacefa64959d1271b96ee3 |

- 전건 JSON 파싱 PASS, pending 완전본 → 덮어쓰기 → 재독 검증 완료
- LINE MAN/ShopeeFood/Robinhood 구간 불접촉 (소유자 작업 중) — diff로 확인済
- 한국/일본 작업 불변, 타 채팅 간섭 없음

## 추가 정정 — Grab Help 실제 브라우저 조사 반영 (2026-10-13 03:5x KST)

소유자 지시("Grab Help JS면 실제브라우저 열어서 OTP/결제/취소/호텔수령 관련원문 확보")에 따라 라이브 브라우저 태스크로 help.grab.com 태국 소비자 도움말 센터(passenger/en-th, th-th)를 실제 렌더링 조사. 확인일 2026-10-13.

### 확보 (공식 문서 4건)
1. **[Account] Didn't receive OTP** — https://help.grab.com/passenger/en-th/360021998332-Didn't-receive-OTP
   - 모든 국제전화번호로 OTP 수신·가입 가능("Yes, we accept all international phone numbers to receive OTPs and to sign up to the Grab app."), 한국 국가번호(+82)가 SMS 발송 목록에 명시. 가입 시 6자리 OTP가 SMS 또는 WhatsApp으로 발송.
   - 반영: platforms phoneVerification null→확정, guide OTP 불릿 신규, evidence +1.
2. **[Finance] Ways to pay for Grab bookings** — https://help.grab.com/passenger/en-th/360001392608-Ways-to-pay-for-Grab-bookings
   - "Local and foreign credit/debit cards" 포함 — 해외발행 카드 사용 가능. 해외 카드/지갑 결제 시 3% 해외결제 수수료(최소 THB1, 거래총액 기준). GrabPay Wallet·PayLater·AliPay·AliPayHK·KakaoPay·TrueMoney도 지원.
   - 반영: platforms paymentForeignCards 갱신, guide 결제 불릿 갱신, FAQ 한국 카드 답변 갱신, evidence +1.
3. **[Food] Cancelling your order** — https://help.grab.com/passenger/en-th/34184057467801-Cancelling-your-order
   - 배정 전 'Cancel' 버튼으로 무료 취소 가능(버튼 미표시 시 취소 불가·비용 부담 가능). Grab 측 취소(식당 취소 등) 시 GrabPay Wallet 또는 원래 결제 수단으로 환불.
   - 반영: platforms cancellationRefund 확장, guide 취소·환불 불릿 갱신, evidence +1.
4. **[Food] Missing or wrong items in your order** — https://help.grab.com/passenger/en-th/360002059867-Missing-or-wrong-items-in-your-order
   - 수령 후 24시간 이내 앱 신고. 환불 기간 — GrabPay 즉시~24시간 이내, 신용/직불카드 발급사 은행 경유 7~45일, 현금결제는 GrabPay Wallet으로 즉시~24시간 이내, 바우처는 조사 후 즉시 또는 2~5영업일.
   - 반영: platforms cancellationRefund 확장, evidence +1.

### 미발견 (null 유지 + 확인 범위 기록)
5. **호텔 배송·로비 수령** — 태국 영어/태국어 도움말 센터 + Food 카테고리 전체 문서(https://help.grab.com/passenger/en-th/115002258448-Food)를 실제 브라우저로 전수 확인했으나 전용 안내 문서 없음. 'hotel' 검색 결과는 Agoda/Booking.com 제휴 호텔 예약 문서만.
   - 반영: platforms hotelLobbyPickup null 유지 + hotelLobbyPickupNote(확인 범위), guide "확인되지 않음" 불릿 갱신, FAQ 호텔 답변 갱신, evidence에 scope-record +1.

### 변경 요약
- evidence: 19→24건 (신규 5건: OTP·결제·취소·환불 + 호텔 미발견 scope-record)
- platforms: GrabFood traveler 4필드 갱신 (phoneVerification·paymentForeignCards·cancellationRefund 확정, hotelLobbyPickupNote 추가)
- guide: GrabFood 섹션 4개 불릿 갱신 + OTP 불릿 신규, 체크리스트 2항 갱신, FAQ 4개 답변 갱신 + OTP FAQ 신규
- 저작권 준수: 원문 전체가 아닌 핵심 요약·짧은 인용으로만 기록
