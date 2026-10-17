# 스키마 호환 변환 필요 사항

## 정본 형식 (sirocco-editorial-reference.json lockedFields)
- intro: string
- reasons: [{title, text}, ...]
- faq: [[q, a], ...] (2원소 배열의 배열)
- access: [{name, english, line, instructions, directionsUrl}, ...]
- taxi: {instructions, english, thai, destination}

## 현재 patch 형식 (29시설)
- intro: {ko: "..."} (dict) → **string으로 변환 필요**: intro["ko"] 값을 그대로 사용
- reasons: [{title, text}, ...] → 호환 (변환 불필요)
- faq: [{q, a}, ...] (dict 배열) → **[[q, a], ...]로 변환 필요**: 각 {q, a}를 [q, a] 2원소 배열로 변환
- access: [{name, english, line, instructions, directionsUrl}, ...] → 호환 (변환 불필요)
- taxi: {instructions, english, thai, destination} → 호환 (변환 불필요)

## 변환 요약
2개 필드만 변환 필요:
1. intro: dict → string (ko 값 추출)
2. faq: [{q,a}] → [[q,a]] (dict를 2원소 배열로)

나머지 필드(reasons, access, taxi)는 정본과 호환됨.
fieldEvidence와 editorialReview는 patch 내부에 포함되어 있음.
