# 철도 공식원문 재검증 노트 (rail-evidence-notes.md)

검증일: 2026-10-13 (KST). rail-official.md의 각 사실을 운영사 공식 사이트 상세 페이지 원문으로 재검증.
원칙: 검색 스니펫·위키·여행블로그는 최종 근거로 사용 금지. 홈페이지 링크만으로는 검증 처리하지 않음.

## 검증 결과 요약
- verified: 12건
- conflict-resolved: 1건 (SRT 사전 예매 기간)
- unresolved: 8건

## 충돌·정정 사항

### 1. SRT 사전 예매 기간 (conflict-resolved)
- 기존 조사 파일: "CNR 특급 8개 왕복은 90일 전부터, 그 외 열차는 30일 전부터" (TAT 뉴스룸 2024년 1월 보도, 2차 출처)
- 새 확인: SRT가 2026년 4월 24일에 사전 예매 기간을 180일 → 90일로 단축 발표. 좌석 지정이 있는 모든 열차에 적용. 상업 열차(Rapid·Express·Special Express)는 거리에 따라 1–90일 전 예매, 시스템이 자동 계산.
- 판정: 2026년 4월 24일 발표가 최신이므로 구 규정(2024년)은 대체됨. 단, SRT 공식 페이지 직접 열람은 실패했고 Bangkok Post·LINE TODAY 보도로 확인한 것이라 evidence JSON에는 conflict-resolved로 기록하고 공식 URL은 해당 보도 URL을 병기함.
- 후속: srt.or.th 또는 dticket.railway.co.th가 열리면 공식 공지 원문으로 교체 필요.

### 2. BEM EMV 전환일 (verified, 날짜 표기 주의)
- 기존 조사 파일: "2026-06-01부터 EMV Contactless 전면 전환 (BEM 발표, 2차 보도)"
- 공식 확인: BEM Legacy-Transition 페이지에 "1 มิถุนายน 2569" 사용 종료 명시. 태국 불기 2569년 = 서기 2026년이므로 2026-06-01과 일치.
- 판정: 2차 보도 → 공식 원문으로 승격. 날짜 해석 근거(불기→서기)를 basis에 명시함.

### 3. 핑크라인 요금 (주의)
- BTS 그룹 공식 보도자료(2024-01-07): 상업 운행 개시, 13–38바트(15% 할인), PK01–PK04 면제 — 모두 2024년 1월 한정 조건.
- 현재(2026년) 정상 요금(15–45바트 등)은 2차 출처에서만 확인되어 evidence에 넣지 않음.
- 판정: 카드 3종(Single Journey·Rabbit·EMV)만 verified, 요금 금액은 unresolved로 유지.

## 미해결 항목 (8건) — 사유
1. bts-rabbit-passport: BTS 공식 발권 조건 공지에는 Student Rabbit의 학생증·Citizen ID 조건만 있고 외국인 여권 규정이 없음. Rabbit 발급 안내 공식 페이지를 찾지 못함.
2. bts-train-hours: BTS 열차 운행 시간·배차 상세 페이지 URL 미발견. 고객센터(06:00–24:00)·발권기(06:00–24:00) 시간은 공식 확인済.
3. gold-line-fare: BTS 공식 골드라인 상세 페이지 URL 미발견. 16바트 정액·Rabbit 사용은 2차 출처만.
4. yellow-payment: mrta-yellowline.com 서버 500 오류로 3회 시도 실패. EBM 공식 결제 안내 페이지 미발견.
5. arl-fare: SRTET 공식 사이트에서 ARL 요금·결제 페이지 미발견. (AOT 공식 페이지의 ARL 운행 05:30–24:00·수완나품역 B층은 별도 조사 파일에서 확인)
6. srt-red-fare-payment: SRTET 시간표 페이지에 요금·결제 안내 없음.
7. srt-dticket-channels: dticket.railway.co.th 서버 500 오류, srt.or.th는 도구에서 URL 해석 실패. 예매 채널·1690 콜센터 공식 직접 확인 못함.
8. common-rules-food-child: BTS 공식 발권 조건 공지에 음식물 금지·90cm 무료 규정 없음. 공식 이용 규칙 페이지 미발견.

## 검증 과정 메모
- bts.co.th / bts.co.th/eng/ 직접 열람: 고객센터·Routes and Fares 메뉴 확인. 단, btsapp-test.bts.co.th는 BTSC 공식 도메인의 테스트 서브도메인으로 보이며, 발권 시스템 안내 내용은 공식 성격이나 URL에 test가 포함되어 있음을 evidence에 명시함.
- metro.bemplc.co.th 직접 열람: 홈페이지 푸터에서 MRT 정보센터 번호·시간 확인, 사이트맵에서 EMV-Contactless·Legacy-Transition·MRT-System-Map 상세 URL 확보 후 각 페이지 원문 확인.
- nbm.co.th 직접 열람: 공식 노선명(MRT Wiwat Nakhon Line) 확인. 요금 상세 페이지는 메뉴 구조상 존재하나 직접 URL을 찾지 못해 열람하지 못함.
- srtet.co.th 직접 열람 성공: 레드라인 시간표 확인. ARL 섹션은 이번에 열람하지 못함.
- mrta-yellowline.com, dticket.railway.co.th: 서버 500 오류로 3회 시도 후 중단(재시도 금지 원칙 준수).
- srt.or.th: 도구에서 URL 해석 실패로 열람 불가.
- BTS COI PDF(공식 발권 조건 공지, 2023-02-01 시행): 482행 전체 읽고 1회권·Rabbit·Paid Area 등 용어 확인. 음식물·어린이 규정은 이 문서에 없음.
- 원문은 태국어·영어 혼합. 한국어 요약만 기록하고 원문 장문 복제는 하지 않음.
