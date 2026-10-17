# CNX r5 변경목록 (Codex 검수 정정, 2026-10-14)
원본 보존: original/ (r1), original-r2/ (r2), original-r3/ (r3), original-r4/ (r4)

## 정정 (exact 원문 4필드, 재조사 없음)
1. locales.en.content.sections[2].body[2] (원문):
   - "Scoot Tiger" 삭제 → 목록에서 제외 (공식 ** 준비 중)
   - "Thai VietJet" 추가
   - "Self check-in is supported by Thai Airways, Thai Lion Air, Bangkok Airways, Thai AirAsia, Thai VietJet, AirAsia, Starlux and Cebu Pacific."
2. locales.ja.content.sections[2].body[0] (원문):
   - "TG・SL・PG・FD・AK・TR・JX・5J" → "TG・SL・PG・FD・VZ・AK・JX・5J"
3. locales.en-in.content (원문): "TG, SL, PG, FD, AK for check-in" → "TG, SL, PG, FD, VZ, AK, JX, 5J for check-in"
4. locales.en-in.koReview: "체크인 지원 TG·SL·PG·FD·AK" → "체크인 지원 TG·SL·PG·FD·VZ·AK·JX·5J"

## 신규: cnx-shared-facts.json
- factId shared-facts-cuss-cubd-01: CUSS 지원 TG·SL·PG·FD·VZ·AK·JX·5J / CUBD PG·AK·FD (단일 structured, 출처 AOT 공식 표)
- 10지역 원문·한국어 전부 대조: 10/10 일치 (TR 지원 표기 0, Scoot Tiger 0, VZ 누락 0)

## 상태
- 검증된 소개/도착/기기 위치는 구현대상 유지. 전체편의시설/층별지도 완료와 구분 (CNX-SUPPLEMENT-STATUS.md 항목별)
- 남은 핵심시설은 실제자료로 계속 제출 (요약 아님)
