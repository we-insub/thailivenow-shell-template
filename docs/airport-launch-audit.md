# 공항 지연·결항 허브 로컬 검수표

작성일: 2026-10-13. 이 문서는 운영 배포 승인이나 전체 조사 완료 선언이 아니다.

## 확인된 구현

| 항목 | 현재 근거 |
| --- | --- |
| 국가별 화면 범위 | `scripts/airports/audit-market-scope.py` 통과. KO=KR만 표시하며 10개 로케일은 각자의 시장 코드만 사용한다. |
| 허브 흐름 | 각 시장 허브에 편명 검색, 태국 출발/태국행 필터, 태국·상대국 공항 필터, 노선·항공사·공항쌍 상세 연결이 있다. |
| 상세 구조 | 노선·공항쌍·항공사·공항·상황별 가이드 페이지가 생성된다. 항공사/공항 서비스는 역할·위치·전화·이메일·운영시간 필드를 분리해 표시한다. |
| 태국 출발 권리 | CAAT/CAB101 가이드와 태국 출발 노선 연결을 생성했다. 국내선·전세편·보험청구와 법정 지원을 동일하게 취급하지 않도록 본문을 구분한다. |
| 비한국어 임시 검수 | 9개 비한국어 시장 공항 페이지에 문장별 한국어 괄호 해석 부트스트랩이 적용된다. |
| 검색 메타데이터 | `scripts/airports/audit-page-metadata.py`가 771개 공항 허브/상세 생성 페이지에서 `index,follow`, canonical, JSON-LD를 확인한다. |
| 로컬 검증 | 2026-10-13 마지막 전체 빌드: `npm run build` 통과, 1,633 정적 페이지 생성. |

## 자료 검수 원칙

- 공항 카운터·전화·사무실·운영시간은 공식 출처와 확인일 없이는 생성하지 않는다.
- 카운터 위치를 공식 조회 1~2회로 찾지 못하면 물리적 위치 대신 계절별 변경 가능성과 항공사 확인 문구만 표시한다.
- 예정 블록 시간과 실제 이륙~착륙 시간은 별도 필드다.
- 편명·운항시각·카운터 위치·PIR·지연/결항 증명서 절차의 미확인 값은 공개하지 않는다.
- 새 Muse 자료는 원본 ZIP, SHA-256, JSON 파싱, evidence ID, origin thread와 source record를 보존한 뒤에만 반영한다.

## 현재 조사 대기 항목

- 전체 10개 시장의 직항 및 공항 서비스가 모두 완료된 것은 아니다. `artifacts/airport-research/current-published-airport-service-matrix.json`은 현재 등록 조합과 빠진 역할을 기록한다.
- 최신 AP-WORLD-ASIA-01 보완은 같은 Muse 채팅의 단일 담당자가 진행 중이다. VZ 현행 노선·시간과 Air India Express BKK/VNS/PNQ 물리 카운터·PIR·운영시간·증명서 절차는 수정 ZIP 회수 전까지 미확인이다.
- EN-US는 현재 검증된 직항이 없어 노선·항공사·공항 서비스가 0건이다. 다른 시장의 행을 대신 표시하지 않는다.

## 내일 로컬 검수 명령

```sh
npm run build
python3 scripts/airports/audit-market-scope.py
python3 scripts/airports/audit-page-metadata.py
python3 scripts/airports/audit-published-services.py
node scripts/audit-muse-inventory.mjs
```

운영 배포는 이 검수표가 완전해졌다는 뜻이 아니며, 별도 승인 전까지 하지 않는다.
