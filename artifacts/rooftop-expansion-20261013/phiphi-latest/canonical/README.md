# ROOF-PHIPHI-01 정본 (2026-10-13) — Codex 전달

## 카테고리 분류 (사용자 직접지시 2026-10-13 17:37 KST)
| 카테고리 | 건수 | recordId |
|---|---|---|
| 루프탑 (운영 확인된 실제 루프탑바) | 0 | — |
| 전망대 (운영 확인된 전망대) | 1 | rt-phi-003 Phi Phi Viewpoint |
| 제외 (운영미확인·폐업) | 2 | rt-phi-001 Banana Bar, rt-phi-002 Legacy Sunset Bar |

## 구성
- `categories.json` — 2카테고리 분류 + 제외 수
- `exclusions.json` — 제외 2건의 사유 + 적격 전환 조건
- `observatory/rt-phi-003-detail.json` — 전망대 전용 상세 (관람시간/입장권/어린이/입구·교통 4루트/OSM/사진/규칙/한국어 방문정보/FAQ 6개/근거 10건)
- `observatory/rt-phi-003-evidence2.json` — 팩트 7건 URL·확인일·인용
- `observatory/rt-phi-003-gaps2.json` — 미검증 7건
- `observatory/photos-rights.json` — 사진 사용권 현황: 사용권 확인된 실제 전망대 사진 2장 확보 (CC BY-SA 4.0, 라이선스·작가·촬영일·원본 확인済)
- `observatory/photos/` — 사용권 확인된 사진 원본 2장 (phi-phi-don-viewpoint.jpg 19.6MB·viewpoint-north.jpg 0.8MB)
- `manuscript-ko.md` — 한국어 방문정보 + FAQ
- 기존 시설별 ZIP 3건(2026-10-13 10:3x 제출)과 중복 없음

## Codex 로컬 반영 시 주의
- 동일 템플릿 상세·도시별 핀·목록 반영. 코드수정·운영배포·외부허가메시지 금지.
- `detail.json`의 `hours`·`entryFee`는 `officialConfirmed: false` — 제3자 기준임을 페이지에 명시.
- `osm` 좌표는 전건 null — 임의 핀 생성 금지. 핀은 도시 대표 위치 또는 좌표 없이 목록으로 반영.
- `names.th`는 null — 공식 태국어명 미확인.
- 사진은 `photos-rights.json`에서 사용권 확인된 것만 사용.
