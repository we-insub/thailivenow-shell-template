# vanilla-sky 보강조사 완료 보고 (2026-10-13)

- 시설: vanilla-sky (Vanilla Sky Bar & Gastro Pub, Cape Sienna Phuket Gourmet Hotel & Villas) ↔ rt-hkt-006
- 기준 원본: completed/06-vanilla-sky.json — base SHA `c23c48f75e0c2f94` 대조 일치 (읽기전용, 수정 없음)

## 작성 파일 (sirocco/vanilla-sky/)
| 파일 | 바이트 | SHA256 (앞 16자) |
|---|---|---|
| vanilla-sky-patch.json | 1,814B | caf3182601d94a3a… |
| vanilla-sky-fieldEvidence.json | 3,041B | 1fe823f1c18ba1bc… |
| vanilla-sky-gaps.json | 2,773B | 6a6ae168aeb1a0c5… |
| vanilla-sky-photos.json | 2B (`[]`) | 4f53cda18c2baa0c… |
| vanilla-sky-ko.md | 9,093B | a7c0488388b12ba4… |

- 전 JSON 파싱 OK. 번역(11로케일)은 부모 별도 처리 — 미작성.

## 주요 확인값 (공식, 2026-10-13 재열람)
- 주소: 18/40 Moo 6, Nakalay Road, T. Kamala, A. Kathu, Phuket 83150 (공식 시설 페이지)
- 연락처: +66 (0) 76 337300 / 팩스 +66 (0) 76 337399 / rsvn@capesienna.com (공식)
- 운영 상태: 운영 중 (시설 페이지 정상 게재)
- 영업시간: 매일 17:00–24:00 — 소유자 직접 확인값 유지. 공식 사이트에는 영업시간 미게재 (재열람 확인)
- 예약: 공식 온라인 예약 URL 없음 — 이메일 예약만. 예약 권장 여부는 공식 미게재
- 메뉴: 공식 메뉴 PDF 카테고리별 THB 가격 확인 (Special Creations 360.- / Sky Bar Craft Cocktails 390.- / Grand Supersized 430.- / Vanilla Sky Shots 330.- / Sparkling 360.- / Mocktails 180.- 등). 메뉴 내 VAT·서비스차지 표기 없음 — Isole 메뉴의 "inclusive of VAT and service charge"는 타 업장 정책이라 추정 불가
- 시그니처: Smokey Cinnamon (공식 페이지 언급)
- 교통: 까말라 비치 헤드랜드 · 공항 리무진 약 40분 · 무료 주차 (공식 브로슈어)
- 좌표: 7.94945/98.27373 — OSM amenity=bar 노드 7844983965 대조 유지 (공식 사이트 좌표 미게재)

## null + gaps (18건)
- 드레스코드 남/녀 분리, smoking, smokingArea — 공식 원문 근거 없음 (방콕 동명 바는 별개 시설이라 인용 불가; 제3자 호텔 레벨 흡연 언급은 시설 근거 아님)
- 공식 예약 URL·예약 권장 여부, VAT·서비스차지, 취소·노쇼 정책
- 어린이 정책, 입장료·최소이용금액, 실제 입구·엘리베이터·이용층 (제3자 2018년 '4층' 주장은 구자료·비공식)
- Grab·Bolt·귀가 교통, lastEntry/lastOrder, 휴무일, 우천 정책
- 사진: 재사용 가능한 실제 시설 사진 0장 (공식 사진 All rights reserved 간주, CC 확인 불가) — photos.json 빈 배열

## 특이사항
- 기존 '미확인' 표기 없음 (3건은 '업로드일 미확인' 합법 맥락)
- 타 시설 파일 미접촉. 코드수정·운영배포·외부허가메시지 없음.
