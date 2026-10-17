# TLN-TRANSIT-02 공식자료 확보 실패 보고서 (별도 제출)

작성일: 2026-10-13 (KST). 추정 없이 시도 URL·실패 이유·남은 요구를 기록.

## 1. 역 목록 공식 대조 — 노선별

| 노선 | 시도한 URL | 실패 이유 | 남은 요구 |
|---|---|---|---|
| MRT 퍼플라인 (16역) | metro.bemplc.co.th/MRT-System-Map | 노선도는 이미지 JPG로만 제공, 개별 역 코드·역명·순서 텍스트 없음. 구간·역 수·공식명은 공식 확인済 | 개별 역 텍스트 대조 (라이브 브라우저 이미지 판독 또는 BEM 추가 공개 대기) |
| ARL (8역) | Asia Era One·SRTET 검색 | 운영사 공식 역 목록 페이지 미발견 | 공식 역 목록 URL 확보 |
| SRT 다크·라이트레드 | srtet.co.th | 시간표(05:00–24:00)만 텍스트 제공, 역 목록 없음 | 개별 역 텍스트 대조 |
| 옐로라인 (23역) | mrta-yellowline.com (2회) | 서버 500 오류 | 사이트 복구 후 재시도 또는 MRTA 공식 대체 페이지 |
| 옐로라인 (23역) | mrta.co.th | 역 목록 텍스트 페이지 없음 (Si Iam역 언급으로 존재만 확인) | 동상 |
| 핑크라인 (30+2역) | nbm.co.th/en/ | Route and Fares·Station and Places 메뉴가 JS 기반이라 텍스트 추출 불가 | 라이브 브라우저에서 JS 메뉴 조작 |

## 2. 탑승 절차 공식 근거 — 운영사별

| 운영사 | 시도한 URL | 실패 이유 | 남은 요구 |
|---|---|---|---|
| BTS | bts.co.th/eng/ | 메뉴가 JS 기반이라 탑승 절차 텍스트 없음 | 라이브 브라우저에서 메뉴 탐색 |
| NBM (핑크) | nbm.co.th/en/ | 탑승 절차 텍스트 페이지 미발견 | 동상 |
| Asia Era One (ARL) | 검색 | 공식 탑승 안내 페이지 미발견 | 공식 페이지 URL 확보 |
| SRTET (레드) | srtet.co.th | 시간표만 있고 절차 안내 없음 | 동상 |
| BEM (블루·퍼플) | metro.bemplc.co.th/Services-Detail?pid=6, /Facilities?line_route_ID=2 | **확보済** | 없음 |

## 3. 환승 19개 쌍 공식 확인

- 공식 확인: Tao Poon (블루 BL10 ↔ 퍼플 PP16) — BEM 공식 텍스트
- 부분 확인: Krung Thep Aphiwat — SRTET 시간표에서 다크·라이트레드 출발 확인, 블루라인 연결은 2차만
- 미확인 17개 쌍: 공식 노선도가 이미지·JS로만 제공되어 텍스트 근거 미확보 → 라이브 브라우저에서 이미지 노선도 판독 필요

## 4. BMTA (버스)

| 항목 | 시도한 URL | 실패 이유 | 남은 요구 |
|---|---|---|---|
| 공식 요금표 원문 | bmta.co.th/service-rates | **확보済 (2026-10-13)** — bmta-official.md 참조 | 없음 |
| FB 요금 게시물 원문 | facebook 검색 | 특정 게시물 URL 반환 없음. facebook-cli는 타인 공개 페이지 목록 미제공 | 라이브 브라우저에서 BMTA 공식 페이지 탐색 |
| 승차→하차 절차 공식 안내 | bmta.co.th (메뉴 전수·/faq·/search·/document·영문 메뉴) | BMTA 사이트에 공식 승차 안내 없음 (2026-10-13 확인) | BMTA 외 공식 채널 확인 필요 |
| MOT/DLT 요금 고시 원문 | site:mot.go.th, site:dlt.go.th | BMTA 시내버스 고시 원문 없음 (도시간버스 관련만) | — (구조상 BMTA 공지 형태로 발표) |
| TAT 버스 가이드 | tourismthailand.org 검색 | 공식 가이드 미존재 | — |

## 5. 기타 미확보

- DLT 택시 요금 고시 원문·관보 URL: dlt.go.th 원문·ratchakitcha PDF 확인 불가 (2차 보도만)
- 오토바이택시 DLT 장관령 원문: dlt.go.th에서 미발견 (2차 보도만)
- Thai Smile Boat 공식 노선·요금·시간표: thaismileboat.com은 운영사 공식 사이트가 아닌 것으로 판단
- Grab help.grab.com 상세 URL: JS SPA라 기사 ID 특정 불가
- 돈므앙 외 지방 공항: 미조사

## 6. 공통 실패 원인

1. **JS 렌더링**: bmta.co.th, bts.co.th/eng/ 메뉴, nbm.co.th 메뉴, help.grab.com — 텍스트 도구로 추출 불가 → 라이브 브라우저 필요
2. **이미지 노선도**: BEM 공식 노선도는 JPG 이미지로만 제공 → 텍스트 대조 불가 (이미지 판독은 별도 작업)
3. **서버 오류**: mrta-yellowline.com 500, dticket.railway.co.th 500
4. **공식 페이지 자체 부재**: ARL 역 목록, TAT 버스 가이드, MOT/DLT BMTA 고시 원문

## 7. [공식인용] 등급 항목 (원문 확보 시 [공식] 승격 가능)

- BMTA 요금 체계 (thaipost.net이 BMTA 공지 전문 인용)
- BMTA 차장 QR 결제 (BMTA 이사장 발언 인용)
- 시내/도시간 구분 (중육통위 결의 인용 보도)
- SRT 90일 예매 (SRT 2026-04-24 발표 인용 보도)
