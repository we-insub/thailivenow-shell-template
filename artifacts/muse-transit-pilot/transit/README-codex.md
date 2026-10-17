# TLN-TRANSIT-01 파일럿 — Codex 검수·적용 안내

## 구성
- `ko/transport/index.html` — 철도/보트 탭, 노선 선택, 역·선착장 목록, 출발·도착 외부 경로 안내
- `ko/transport/lines/mrt-blue.html` — MRT 블루라인 38개 역 (정차 순서, 자체 SVG 도식)
- `ko/transport/lines/orange-flag.html` — 차오프라야 익스프레스 보트 오렌지 깃발 노선
- `ko/transport/stations/itsaraphap.html` — Itsaraphap역 상세 (왓아룬 연결)
- `ko/transport/piers/{tha-tien,wat-arun,sathorn,nonthaburi,wat-rajsingkorn}.html` — 선착장 상세
- `ko/attractions/wat-arun/index.html` — 기존 왓아룬 시안에 교통 연결 섹션 추가된 버전
- `data/transit-data.json` — 공통 데이터 (노선·역·선착장·attractionAccess·출처)
- `assets/transit.css`, `assets/transit.js` — 공통 스타일/스크립트 (운영배포일 함수 포함)
- `build.py` — data → HTML 재생성 스크립트

## Astro 적용 매핑
- `ko/transport/**` → `/ko/transport/**` route (기존 AttractionDetail 구조와 같은 패턴)
- `data/transit-data.json` → Astro data (단일 한국어 data 소스)
- `assets/transit.css` → 공통 스타일에 병합, `getOperationalDeployDate()` → 기존 공통 운영배포일 함수로 교체
- `attractionAccess` 하나가 명소↔역·선착장 양방향 연결을 담당 (역 상세·선착장 상세·명소 페이지가 같은 데이터를 참조)

## 주의
- 헤더 TL아이콘 파일은 수정하지 않았음 (Codex 작업 중)
- 한국어 역·선착장명은 음역(비공식)으로 `name_ko_note`에 명시, 공식 한국어명 없음
- 도보 거리·시간, 횡단페리 요금·시간, 위경도·출구는 공식 근거가 없어 전부 null/미확인
- 노선도 이미지를 복제하지 않고 자체 SVG 도식으로 제작
- 배포하지 말 것 (운영배포 금지)

## 검증
- 내부 링크 27개 전수 확인 (깨진 링크 0)
- title/description 고유, hreflang 없음, 모바일 표 스택·긴주소 wrap·이미지 100% 확인
