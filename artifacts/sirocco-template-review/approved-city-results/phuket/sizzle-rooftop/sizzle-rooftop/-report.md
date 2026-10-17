# sizzle-rooftop 완료 보고 (2026-10-13)

- 시설: Sizzle Rooftop Restaurant & Bar (사용자 ID: sizzle-rooftop, 기존 ID: rt-hkt-003)
- 기준: 시로코 상세페이지 템플릿 9섹션. 기존 조사 원본 읽기전용 재사용 + 2026-10-13 공식 재확인.
- base SHA: `22fed6e4a0255a609f87b5ef2caf4f0bfa776b131bdb2898aaac509006d116e0` (baseSha256 prefix 일치)

## 작성 파일 (sirocco/sizzle-rooftop/)

| 파일 | 바이트 | SHA256 |
|---|---|---|
| sizzle-rooftop-patch.json | 1,367 | c5224170f849aa1c865e973461ce0067cbad078460457c84c5122695e67a83b9 |
| sizzle-rooftop-fieldEvidence.json | 3,594 | aa61d97731592de373098ef21261c42149f0f7e33840dbeb8b05e4e388936473 |
| sizzle-rooftop-gaps.json | 3,022 | aa4c91b85b10359907316c0dd429b559137994a0ee8e54bc98dbb2d186d9f268 |
| sizzle-rooftop-photos.json | 428 | c15350bff5808c57cbd72cb4212655b7dd18b7f4ffa5d3ffd61d5663116343c3 |
| sizzle-rooftop-ko.md | 12,007 | 580d21f1d4d82a9b1d626dc8440bc211aec7c6384b865e4c2337717c6ec4156e |

JSON 4종 전부 파싱 검증 OK. 11로케일 번역은 부모 별도 처리 — 미작성.

## 주요 확인값 (2026-10-13 공식 재확인)

- 영업시간: 바 17:30–23:30 / 레스토랑 18:00–23:00 / 라스트 키친 오더 22:30 (공식 사이트). 팩트시트(2025-08)는 바 17:00–23:30으로 표기 상충 — 최신 사이트 기준 17:30 적용.
- 휴무 없음 (호텔 페이지 Mon–Sun 전일).
- 우천: all-weather covered seating (공식) — 비 와도 운영.
- 주소·연락처: 39/9 Muen Ngern Road, Patong District, Amphur Kathu, 83150 Phuket / +66 (0)95 834 0453 / info@sizzlerooftopphuket.com.
- 예약: 공개 채널 (이메일·전화·공식 사이트 Make a Reservation → SevenRooms). '예약 권장/필수' 명시는 없음.
- 신규 patch 3건: ① 수용인원 — 루프탑 테라스 좌석식 최대 80명 / Tambu 합산 120명 / 전체 대관 50–120명 (공식 팩트시트 2025AUG19). ② 셰프 풀네임 — Chef Alvaro de la Puerta (Chef de Cuisine). ③ 수상 추가 — Thailand's Favourite Restaurants 2026.
- 메뉴: 전 메뉴 THB, 10% 서비스료 + 세금 별도 (공식 메뉴 고지). Tomahawk 6,000 THB는 공식 메뉴(2025-09-16) 기준이나 'subject to change' 고지로 현행성 미검증.

## gaps 17건 (전부 null, 추정 없음)

드레스코드 남/녀 · smoking · smokingArea · 예약권장 · 취소/노쇼 · 어린이 · 비투숙객 명시 · 입장료 · 최소주문 · VAT 세율 · 가격 현행성 · 입구/엘리베이터/층수 · 교통(Grab·Bolt·귀가) · 태국어명 · lastEntry · 사진 0장.

- smoking/smokingArea: 공식 사이트·호텔 페이지·팩트시트 3곳 전부 확인, 게재 없음. 태국 법규·호텔 전체 규정으로 추정하지 않음.
- 드레스코드: 3곳 재확인, 게재 없음. 제3자 'resort casual' 비공식 — 채택 불가.

## 사진

재사용 가능한 실제 시설 사진 0장. Wikimedia Commons API 직접 검색 0건. 공식 사이트 사진은 CC 표시 없음 — 사용 불가. photos.json 빈 배열.

## 원고 특성

- 성격: 루프탑 레스토랑&바 · 스테이크·해산물 · 올웨더 커버 좌석. 로맨틱 데이트 복제 금지 준수 — 식사 중심 서술.
- 근거 없는 "유명/인기"·현지인/외국인 선호 주장 없음. Michelin Guide 2026 게재는 공식 사이트 표기 사실로만 기술.
- 방문 후기체 아님. 미검증 항목은 기본표·FAQ에서 "공식 미게재 — 미검증"으로 명시하고 예약 시 직접 문의 유도.
- 금지 준수: 코드수정·운영배포·외부허가메시지 없음. 다른 시설 파일 미접촉.
