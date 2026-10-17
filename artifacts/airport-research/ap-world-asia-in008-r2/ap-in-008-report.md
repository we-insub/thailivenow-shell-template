# ap-in-008 보완 완료 보고 (2026-10-13 18:xx)

본 보고의 바이트·SHA는 저장 후 실측값이며, 부모 독립검증 시 재확인 요망.

## 보완 1: VZ BKK↔BOM/CCU

- vietjetair.com 직접 열람 2회 시도 (2026-10-13): 시도 1 (이전 worker) 타임아웃 · 시도 2 (본 조사) RECV_TIMEOUT upstream fetch 실패 (~10초). 시스템 지시로 재시도 중단.
- 결론: 2026 현재 직항·편명·시각·블록시간 공식 미확인 → AP-EV-0092 (lookup-failed). 제3자 트래커(planemapper/airpaz) 미승격 유지.

## 보완 2: IX BKK/VNS/PNQ

- AP-EV-0093: AIX 공식 PNQ→BKK 노선 페이지 직접 열람 (https://flights.airindiaexpress.com/en-in/pune-to-bangkok-flights) — PNQ 출발·BKK 도착 Integrated Terminal (As operated by AIX) · 논스톱 약 4시간 45분 · Direct 1편 (Non-stop only) · Daily · 웹체크인 14일 전~60분 전 · PNQ 국제선 공항 3시간 전 도착 권장/수하물 위탁 최소 60분 전/게이트 25분 전 마감. 시각 변경 가능 명시.
- AP-EV-0094: AIX 공식 PIR 절차 (https://flights.airindiaexpress.com/en/ FAQ 직접 열람) — 공항 떠나기 전 Baggage Desk에서 PIR 제출, 사본·참조번호 보관. 21일 미회수 시 분실 간주, PIR 참조번호로 보상 청구. 국내선 DGCA ₹20,000 상한 · 국제선 Montreal Convention 1,288 SDR. 필요 서류: 탑승권·수하물 태그·PIR 사본·필수품 구매 영수증.
- AP-EV-0095: AIX 공식 지연/결항 정책 (항공사 공식 성명의 언론 인용) — 결항 또는 3시간 초과 지연 시 Tia WhatsApp (+91 6360012345) 또는 airindiaexpress.com에서 수수료 없이 전액 환불·무료 일정 변경. 지연/결항 증명서 발급 절차는 공식 미게재.
- AP-EV-0096: 구분 기록 — (1) PNQ Lost & Found 020-26685201은 AAI 공항 분실물 (Terminal Manager) — 항공사 PIR 아님. (2) VNS +91-542-2622155는 AAI Airport Director — IX 사무실 번호 아님. (3) Travel Partner Support +91 124 443 5602 (8am–9pm IST)는 여행사 대상 — 일반 승객 상담(+91 124 693 5600, 24x7)과 구분. (4) Air India (AI) 방콕 사무소 +66 2 132 1888은 Air India Express (IX)와 다른 항공사 — 혼동 금지.

## gaps 11건

- 조회 실패 2건: VZ BKK↔BOM/CCU 공식 조회 (vietjetair.com 2회 타임아웃, AP-EV-0092)
- 미게재 9건: VZ760 13Oct 원문 · IX VNS/PNQ/BKK 물리 체크인 카운터 번호 · PIR 창구 위치 · 지연/결항 증명서 발급 절차
- 전부 '미검증'. '공식 미공개' 단정 0건.

## ready=false 원인

VZ BKK↔BOM/CCU 현행 공식 스케줄 미확인 (공식 조회 2회 타임아웃) · IX VNS/PNQ/BKK 물리 체크인 카운터 번호·PIR 창구 위치·지연결항 증명서 발급 절차 공식 미게재.

## 숫자

- claim ID: AP-EV-0092~0096 (신규 5건, 총 13건)
- TG India 미접촉 · 기존 14단위 미재조사 · 하위 worker 0 · 코드 수정·배포 없음
