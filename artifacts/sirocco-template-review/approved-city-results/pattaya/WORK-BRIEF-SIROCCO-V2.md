# WORK-BRIEF-SIROCCO-V2.md — 승인 문체 기준 재작성 (2026-10-13 22:31 KST, 사용자 "딱이다" 승인·홀딩 해제)

## 최상위 기준 (이것만 따른다 — 이전 운영 시로코 문체·이전 ZIP 원고 문체는 폐기)
1. ~/workspace/rooftops01/editorial-standard/approved-20261013/sirocco-editorial-reference.json — lockedFields(절대 변경 금지)
2. ~/workspace/rooftops01/editorial-standard/approved-20261013/natural-korean-copy.md — 문장 분석·재작성 규칙
3. ~/workspace/rooftops01/editorial-standard/approved-20261013/detail-template-rules.md — 템플릿·섹션 순서

## 한국어 원고 구조 (새 문체): intro / facts / reasons / access / taxi / faq
- **정보가 없는 항목은 표시하지 않는다**: null·미확인 값은 표 행·섹션에서 통째로 제외. '–'·'미확인'·'정보 없음'·'준비 중'으로 자리를 채우지 않는다 (기존 '–' 행 전부 삭제).
- FAQ: 질문의 답을 먼저 → 이유/경험 → 일정/준비 연결. 규정 나열 후 "확인해주세요" 금지. 공식 근거로 답할 수 없는 질문은 FAQ에서 제외하고 gaps에만 남긴다.

## 문장 작성 규칙
- 문장을 먼저 분석하고 다시 쓴다: 사실 → 독자에게 주는 의미 → 구체 방문 장면 → 누구와 어떻게 즐길지
- 추상어→구체 장면: "인상을 만드는 장면" → 실제 풍경·행동. 정책은 여행 장면에 맞춰 설명 (늦은 저녁=문 닫는 시간·주문 마감 구분).
- 반려: 추상적 평론, 직역체, 어미만 바꾸기, "알아서 확인하세요", 근거 없는 인기/서비스 꾸미기, 시로코 문구 복제
- 시설 고유 매력 유지. 모든 시설을 로맨틱 명소로 만들지 않는다 (전망대는 풍경·산책·관람 중심)
- "좋아요/추천해요/확인해주세요/겠죠/로맨틱" 반복 금지. 문장마다 새 정보나 장면.

## 범위 (파타야 5시설 — horizon-pattaya·skybar-summer-club·barbu-pattaya·portrait-voyage-sky-bar·phra-tamnak-viewpoint)
- 기존 산출물 재사용: 확인된 facts·좌표·사용권·schema·id 보존. **새 사실 조사 금지** (문체 다듬기만).
- 제보되지 않은 근거 반영 금지 (없는 서비스·정책 만들지 않음).
- 기존 3종 원본(completed/evidence/gaps) 읽기전용.

## 산출물 (시설별, ~/workspace/thailivenow/roof-pattaya-01/sirocco/<id>/ — in-place 갱신)
- <id>-ko.md — 새 문체 6섹션 한국어 원고 (덮어쓰기)
- locales/ko.md — ko.md와 동일하게 동기화
- locales/{ms,zh-cn,en,en-in,ru,ja,en-gb,en-us,es,zh-tw}.md — 11로케일 전체 섹션, 현지어 자연스러움 (직역 금지, 각 파일 상단 translationStatus: draft 유지)
- <id>-patch.json — base 파일·baseSha256 + changes (문체 재작성 기록)
- <id>-fieldEvidence.json — 기존 유지 + 변동분 반영
- <id>-editorialReview.json — {appeal, companions, experience, tradeoff, factEvidence, pass}

## 금지
- 운영배포 금지. 외부허가메시지 금지. 타시설·타도시·한국일본 손대지 말 것. 하위 worker 금지.
