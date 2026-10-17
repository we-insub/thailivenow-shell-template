# 조사 노트 — AP-JP-01 시범 1호 (FD OKA↔DMK)

- 일시: 2026-10-13 10:31~10:40 KST (Asia/Seoul)
- 대상: JP-OKA-DMK-FDUNK-OUT / JP-DMK-OKA-FDUNK-IN (인계 status=unknown 2레코드)

## 접근한 URL
1. https://newsroom.airasia.com/news/airasia-now-flies-direct-from-don-mueang-to-okinawa-japan — 열람 성공. 2024-04-02 취항 발표 원문 확보(직항, 주4회 화·목·토·일, inaugural FD240).
2. https://newsroom.airasia.com/news/2025/6/2/airasia-launches-new-fifth-freedom-route-bangkokhong-kongokinawa-inaugural-flight-takes-off-on-july-1-2025 — 열람 성공. "Thai AirAsia now operates three routes to Okinawa, including direct flights from Bangkok" (2025-07-01) — 직항 운항 중 공식 언급.
3. https://www.ch-aviation.com/news/166728-thai-airasia-cuts-mid-2q26-capacity-by-30 — 검색 스니펫으로 확인(제3자, AirAsia 2026-04-28 발표 인용). 운휴 대상 = HKG–OKA 제5자유 구간, 동아시아·아세안은 유지.
4. https://en.traicy.com/posts/2026042134885/ — 검색 스니펫(제3자). OKA–HKG 운휴 2026-05-06, FD519/518 — 경유편이지 직항이 아님.
5. https://flight-status.com/thai-airasia/fd-240/ , /fd-241/ — 검색 스니펫(제3자 추적). FD240 2026-10-08 실제 도착, FD241 2026-10-11 스케줄, 화·목·토·일.
6. https://www.airpaz.com/en/airlines/FD-Thai-AirAsia/city-airport/okinawa-naha-jp-don-mueang-international-airport-dmk — 검색 스니펫(제3자 예약 집계). 2026-11까지 직항 예약 가능 표시.

## 차단·미확보
- airasia.com 예약 엔진: JS 렌더 — browser.open 텍스트 fetch 불가. 현행 공식 스케줄 확인은 라이브 브라우저 필요 (부모에 위임 요청).
- naha-airport.co.jp: 국제선 운항 목록/시간표 공식 페이지 검색으로 미발견.
- AOT/DMK 공식 flight status: 텍스트 접근 경로 미확보.

## 판단 메모
- '충돌'의 실체: 제3자 운휴 보도(HKG 경유편)와 직항 취항 발표의 혼동. 직항 운휴 공식 발표 없음 + 2026-10 실제 운항 추적 → status=active 판정(신뢰도 medium-high).
- FD241 편명은 제3자 확인 — 공식 채널에서 명시 없음. evidence에 third-party로 분리 기록.
- 터미널·시즌·validTo는 공식 근거 없어 전부 미검증.
