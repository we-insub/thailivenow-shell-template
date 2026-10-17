# road-air-evidence 검증 노트 (TLN-TRANSIT-02)

검증일: 2026-10-13 (KST). 읽기 전용, 로그인 없음. 원문 장문 복제 없이 한국어 요약만 기록.
사실별 근거는 `road-air-evidence.json`의 facts 배열 참조 (30건: verified 16 / unresolved 13 / conflict-resolved 1).

## 1. 충돌 항목

### 1-1. Transport Co. 공식 LINE 계정 표기 (tcl-booking)
- 기존 조사: TAT 뉴스룸 기준 LINE @TCL99
- 재검증: Transport Co. 공식 예매 사이트(tcl99web.transport.co.th) 첫 화면에 LINE **@BKS99** 표기, 1490 언급 없음
- 판정: 운영사 공식 표기(@BKS99)를 우선 기록. TAT 뉴스는 여행 맥락용 참고로만 사용.

### 1-2. AOT 수완나품 버스 안내 구/신 페이지 상이 (aot-bkk-bus → conflict-resolved)
- 기존 기록(구 way-to-airport/detail/90): 554번 24시간, 555번 04:30–01:30, Gate 8 번호 노선
- 현행 공식 페이지: 554번 05:30–22:00, S6(555) 05:30–24:00, 558번 04:45–22:30, Gate 8은 행선지별 코치로 번호/시간 미표기
- 구 페이지는 이번 세션에서 fetch 실패라 발표일 비교 불가 → 현재 로드되는 공식 페이지 우선 기록. 추후 재시도 시 발표일 기준으로 최종 확정 필요.

### 1-3. 차오프라야 보트 요금 보도 vs 공식 페이지 (boat-orange 등)
- 2차 보도(PostToday/LINE TODAY, 2026-04): 2026-05-01부터 1바트 인하(오렌지 18바트 등)
- 공식 노선·시간표 페이지(시간표 시행일 2026-10-06 표기): 오렌지 19바트 등 기존 요금 표시
- 판정: 공식 직접 조회 값을 우선 기록. 다만 홈페이지 요금 카드가 구버전일 가능성을 배제할 수 없어 JSON의 note_fare_conflict에 기재. 확정 필요 시 운영사 공식 확인 권장.

## 2. 미해결 항목 (13건)

| id | 내용 |
|---|---|
| bmta-fare | BMTA 버스 종류별 공식 요금표 상세 페이지 없음 (2차만 존재) |
| bmta-boarding | 승차 절차·차장 결제·거스름돈·하차벨 공식 안내 없음 |
| tcl-terminal | 방콕 출발 터미널 공식 상세 페이지 없음 |
| tcl-class | 좌석 등급 공식 안내 없음 (2차만) |
| dlt-taxi-fare | 2022-12-15 장관 고시 dlt.go.th 원문·관보 PDF 확인 불가 (2차 보도만) |
| dlt-taxi-call | 호출 20바트·공항 50바트 공식 근거 URL 없음 |
| boat-boarding | 승선 절차·요금 지불 방법 공식 상시 안내 페이지 없음 |
| smile-routes | Thai Smile Boat 운영사 공식 노선 페이지 미확인 |
| smile-fare | Thai Smile Boat 공식 요금 안내 없음 |
| smile-timetable | Thai Smile Boat 공식 시간표 없음 |
| grab-howto | help.grab.com 이용법 도움말 기사 ID 특정 불가 (JS SPA, URL 추측 금지) |
| grab-payment | help.grab.com 결제 수단 도움말 기사 ID 특정 불가 |
| moto-fare | 오토바이택시 DLT 장관령 dlt.go.th 원문 미발견 (2차 보도만) |

## 3. 검증 과정 메모

- bmta.co.th(www 하위 경로)와 dlt.go.th 메인 사이트는 browser_open 텍스트 추출 실패 (JS 렌더링/접속 불가). 텍스트 기반 검증의 한계이며, 필요 시 라이브 브라우저 실방문으로 별도 검증 권장.
- 차오프라야 보트 깃발별 정차 선착장 목록은 공식 노선·시간표 페이지에서 이미지 노선도로만 제공 (static.wixstatic.com은 텍스트 페치 정책상 접근 차단). 선착장 순서의 공식 텍스트 근거는 미확보.
- Wat Arun/Tha Tien 변경 공지의 개별 하위 URL은 /news 목록의 링크 인덱스 매핑이 불안정해 확정 못함. 정확한 slug가 필요하면 라이브 브라우저 확인 필요.
- 지시에서 "공식 사이트"로 지정된 thaismileboat.com은 운영사(Thai Smile Boat Co., Ltd / E Smart Transport) 공식이 아닌 안내형 콘텐츠 사이트로 판단되어 근거로 사용하지 않음.
- 구 AOT 수완나품 페이지(way-to-airport/detail/90)는 이번 세션 fetch 실패로 재열람 불가.
- help.grab.com은 JS SPA로 검색 미노출. URL 추측 금지 원칙에 따라 기사 ID 특정 없이 unresolved 처리.
- 현장 표기 용어(signage-terms)는 공식 자료에서 확인된 것만 수집: 'BMTA BUS'(태국 정부 포털), 보트 깃발 태국어 표기 ธงส้ม/ธงเหลือง/ธงเขียวเหลือง/ธงแดง(운영사 공식), Grab 'PIN'·'Airport Pickup', AOT 'Public Transportation Center'·'queue ticket' 등.
