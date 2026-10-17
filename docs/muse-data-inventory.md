# 뮤즈 회수·반영 데이터 집계

집계 실행: 2026-10-14 20:49:10 KST

등록 채팅: 55개. 이번 분담 신규33개는 지시 저장 확인이며, 모두 현재 실행 중이라고 집계하지 않습니다.

로컬 회수 원본 및 현재 소스의 공개 필터. live 사이트 배포 완료 수가 아님.

- ZIP와 추출본은 같은 패키지로 계산
- 수정버전은 교체 스냅샷으로만 계산
- 장소·사실·서비스·페이지·핀 단위는 서로 합산하지 않음
- 채팅별 원본 수는 후보 포함; 공개 필터 통과와 구분
- 공항 채팅 간 병합은 추적키 부재로 독점 기여 수를 산정하지 않음

| 채팅·제목 | 분담 범위·상태 | 기존자료 인계범위 | 기존 반영 기준선 | 이 채팅에서 받은 데이터 | 이 채팅 신규 반영 또는 기존 총괄 반영 | 설명 |
|---|---|---|---|---|---|---|
| [BUS-01](https://muse.ai/thread/40016c91-a46c-4374-a950-16d198b7f6fb) · 방콕 태국 버스 안내 조사 | 총괄·자료인계·방콕 도시버스/이용규칙, 전국4권역 신규담당과 중복조정 · nationwide-expansion-requested | 별도 인계 없음 | 아래 반영수 참조 | 11 시내버스 사실 / 10 시외버스 사실 | 1 이용 안내 페이지 / 3 터미널 핀 | 전국 터미널 모집단 전수 회수 수는 아직 확인 불가; 원본 사실 수가 검증·반영 사실 수를 뜻하지 않음 |
| [BOAT-01](https://muse.ai/thread/0ebdbcef-92d8-4281-b0f6-07a1661d921c) · 차오프라야 보트 노선 자료 수집 | 5개 보트노선의 운행·정류장순서·시간표, 선착장시설좌표는신규담당 · 기존 등록·현재 실행상태 미확인 | 별도 인계 없음 | 아래 반영수 참조 | 44 선착장 후보 / 5 보트 노선 | 37 선착장 핀 및 상세페이지 / 6 노선 안내선 | 14개 로컬 선착장 중 좌표 있는 것만 공개. 원본 44개 전체를 반영한 상태가 아님 |
| [TAXI-01](https://muse.ai/thread/b10b261c-56d8-4732-84eb-05d978c6b2a1) · 태국 교통수단 공식 안내 정리 | 방콕미터택시·호출앱 이용규칙, 지역도시는신규담당 · 기존 등록·현재 실행상태 미확인 | 별도 인계 없음 | 아래 반영수 참조 | 11 미터택시 사실 / 11 호출앱 사실 | 1 이용 안내 페이지 / 0 승차장 핀 |  |
| [RAIL-AUDIT-01](https://muse.ai/thread/6b776627-d5e7-421f-881d-46efa0e2fb35) · Bangkok 도시철도 공식 검증 | 총괄·공식메타데이터 통합검수, BTS와MRT/SRT/ARL 신규담당과 중복조정 · 기존 등록·현재 실행상태 미확인 | 별도 인계 없음 | 아래 반영수 참조 | 193 역 레코드 / 10 철도 노선 | 193 기존 지리 역 페이지/핀 / 167 공식 메타데이터 매칭 역 | 193개 지리역은 기존 자료; 뮤즈 검증자료는 그중 공식 메타데이터 매칭에 사용. 모두 신규 생성으로 계산하지 않음 |
| [NATIONWIDE](https://muse.ai/thread/d145b267-5bf0-4cff-b619-4f94ab8dde30) · 태국 CCTV 소스 조사 | 총괄·방콕/나머지카메라, 북부동부/남부는신규담당 · 기존 등록·현재 실행상태 미확인 | 별도 인계 없음 | 아래 반영수 참조 | 81 카메라 원본 후보 | 29 공개 카메라 카드 / 12 주변 기준점 핀 | cameras.ts의 area/id 필터 적용. 핀은 실제 카메라 장착 좌표가 아니라 설명된 주변 기준점 |
| [TRAIN-01](https://muse.ai/thread/41756e78-536f-4737-b6d7-9ed73dead2e1) · SRT 태국 기차 노선 조사 | 총괄·자료인계·전국철도 모집단/전체노선 통합, 북부/이산동부/남부 신규담당과 중복조정 · 기존 등록·현재 실행상태 미확인 | 별도 인계 없음 | 아래 반영수 참조 | 16 기차 노선 / 15 기차역 | 1 기차 이용 안내 페이지 / 0 전국 기차역 신규 핀 |  |
| [MOTORCYCLE-01](https://muse.ai/thread/badd37f8-af7f-4390-a757-f71727646c8d) · MOTORCYCLE-01 오토바이 택시 조사 | 서비스·법규·결제 이용안내, 실제승차장좌표/지역운영은신규담당 · 기존 등록·현재 실행상태 미확인 | 별도 인계 없음 | 아래 반영수 참조 | 3 서비스 / 15 회수 승차장 레코드 | 1 이용 안내 페이지 / 0 승차장 핀 | 채팅에서 언급된 31개 역사적 등록 승차장 수와 실제 회수 파일 15개 레코드를 구분; 좌표가 정확한 승차장이 아니어서 핀 제외 |
| [LOCAL-01](https://muse.ai/thread/a7b831db-4d1c-4225-a62d-33277d123cf4) · 태국 툭툭 쏭태우 이용 가이드 | 방콕 지역교통과총괄, 북부/동부남부는신규담당 · 기존 등록·현재 실행상태 미확인 | 별도 인계 없음 | 아래 반영수 참조 | 2 교통 유형 / 22 유형별 사실 레코드 | 1 지역교통 이용 안내 페이지 / 0 승차장 핀 |  |
| [AIR-01](https://muse.ai/thread/d8a3766e-77bb-47af-a580-015059990f1a) · 태국 국내선 항공사 조사 | 국내선항공사·BKK/DMK이동, 6지역공항이동은신규담당 · 기존 등록·현재 실행상태 미확인 | 별도 인계 없음 | 아래 반영수 참조 | 8 항공사(운항중단 포함) / 8 공항 교통 원본 | 1 국내선 안내 페이지 / 3 공항 이동 안내 페이지 | 공항 안내 페이지는 기존·독립자료와 통합; 8개 모두 반영으로 계산하지 않음 |
| [FOOD-DELIVERY-01](https://muse.ai/thread/347d0946-a2fd-4f93-91bd-a6f3364d4121) · Bolt Food Bangkok 운영 근거 검증 | GrabFood/BoltFood 현재운영검증, 다른3플랫폼은신규담당 · 기존 등록·현재 실행상태 미확인 | 별도 인계 없음 | 아래 반영수 참조 | 6 검토 플랫폼 | 4 플랫폼 상세페이지 / 1 비교 허브 | 08:15 두번째 정정 ZIP의 최신 플랫폼 파일 선택. 6개 후보 중 4개 플랫폼; Bolt Food 등 서비스 미확인 항목은 제외 |
| [ROOFTOPS-01](https://muse.ai/thread/573fc489-4a6a-4dac-af32-713d4ff61fb9) · 치앙마이 호텔 좌표 확보 | 44시설 공통템플릿 구현·6도시 스키마호환 통합·11locale자료; Codex 검수/로컬테스트후 운영배포 · approved-ko-copy-production-deployed-verified | 별도 인계 없음 | 아래 반영수 참조 | 68 장소 원본 레코드 | 44 상세페이지 및 지도 시설 레코드 | 도시별 받은 수/반영 수는 별도 표 |
| [BEACHES-01](https://muse.ai/thread/e0764168-a429-4d63-b245-3066738edc08) · 태국 해수욕장 공식 데이터 조사 | 총괄·기존자료 인계·코리페·코란타·코사메산·차암 잔여검증 · 기존 등록·현재 실행상태 미확인 | 18 분담 후 부모 잔여 해변 | 아래 반영수 참조 | 67 고유 해변 레코드 | 0 해변 상세페이지 / 0 해변 핀 |  |
| [BEACH-ANDAMAN-01](https://muse.ai/thread/9686d75d-3ba8-4ea5-a440-ac0ba22c3909) · 태국 해변 푸켓 카오락 검증 | 푸껫·카오락 · instruction-sent-response-pending · 부모 BEACHES-01 | 9 부모 회수 해변 | 0 기존 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [BEACH-KRABI-01](https://muse.ai/thread/cb319be3-917f-4159-9ba6-b6dc9dce999a) · 태국 해변 끄라비 피피 검증 | 끄라비·아오낭·피피 · instruction-sent-response-pending · 부모 BEACHES-01 | 9 부모 회수 해변 | 0 기존 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [BEACH-GULF-01](https://muse.ai/thread/a695add1-b42d-4d8d-b2a2-6ce45f5161d2) · 태국 해변 사무이 팡안 타오 검증 | 코사무이·코팡안·코타오 · instruction-sent-response-pending · 부모 BEACHES-01 | 13 부모 회수 해변 | 0 기존 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [BEACH-EAST-01](https://muse.ai/thread/9d34e27d-d937-4a15-8798-eb6916a4c902) · 태국 해변 파타야 동부 후아힌 검증 | 파타야·코란·코사멧·코창·후아힌 · instruction-sent-response-pending · 부모 BEACHES-01 | 18 부모 회수 해변 | 0 기존 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [ROOF-BKK-01](https://muse.ai/thread/10f644b5-3e66-4964-8e3d-9c1f2ba20937) · 태국 방콕 루프탑 검증 | 방콕 · approved-ko-copy-production-deployed-verified · 부모 ROOFTOPS-01 | 34 부모 회수 장소 | 30 기존 도시 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [ROOF-CNX-01](https://muse.ai/thread/292411e0-d96d-431d-b2ca-cece50240ce9) · 태국 치앙마이 루프탑 검증 | 치앙마이 · approved-ko-copy-production-deployed-verified · 부모 ROOFTOPS-01 | 8 부모 회수 장소 | 2 기존 도시 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [ROOF-PATTAYA-01](https://muse.ai/thread/89e68efe-ffe8-48ea-90aa-c74f76c04547) · 태국 파타야 루프탑 검증 | 파타야 · approved-ko-copy-production-deployed-verified · 부모 ROOFTOPS-01 | 9 부모 회수 장소 | 5 기존 도시 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [ROOF-PHUKET-01](https://muse.ai/thread/df65b9a6-fe42-4844-aa3a-01b9c16f79db) · 태국 푸껫 루프탑 검증 | 푸껫 · approved-ko-copy-production-deployed-verified · 부모 ROOFTOPS-01 | 7 부모 회수 장소 | 5 기존 도시 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [ROOF-SAMUI-01](https://muse.ai/thread/2b2c9b65-5b9c-4fbc-b6a4-5ebd617534e9) · 태국 코사무이 루프탑 검증 | 코사무이 · approved-ko-copy-production-deployed-verified · 부모 ROOFTOPS-01 | 7 부모 회수 장소 | 1 기존 도시 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [ROOF-PHIPHI-01](https://muse.ai/thread/dd44bbac-3190-4095-8ec7-33dda74479f2) · 태국 피피 루프탑 검증 | 피피 · approved-ko-copy-production-deployed-verified · 부모 ROOFTOPS-01 | 3 부모 회수 장소 | 1 기존 도시 상세페이지/핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [BUS-NORTH-01](https://muse.ai/thread/c2d11bb9-e269-495a-9107-d80873169072) · 태국 북부 버스터미널 조사 | 북부 17개 주 버스터미널·시외노선·도시버스, 기존 방콕 제외 · instruction-sent · 부모 BUS-01 | 11 시내버스 사실 / 10 시외버스 사실 | 1 이용 안내 페이지 / 3 터미널 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [BUS-ISAN-01](https://muse.ai/thread/4e380e5c-055f-480a-8d39-82ad80dd068f) · 태국 이산 버스터미널 조사 | 북동부 20개 주 버스터미널·시외노선·도시버스 · instruction-sent · 부모 BUS-01 | 11 시내버스 사실 / 10 시외버스 사실 | 1 이용 안내 페이지 / 3 터미널 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [BUS-CENTRAL-01](https://muse.ai/thread/b66ffdba-059e-4a3a-a692-05286c77893d) · 태국 중부 동부 버스터미널 조사 | 중부·서부·동부 26개 행정구역 터미널, 방콕은 기존담당과 인계하여 중복금지 · instruction-sent · 부모 BUS-01 | 11 시내버스 사실 / 10 시외버스 사실 | 1 이용 안내 페이지 / 3 터미널 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [BUS-SOUTH-01](https://muse.ai/thread/0ac72a67-42c6-46e1-8e7e-ab179b21cf59) · 태국 남부 버스터미널 조사 | 남부 14개 주 터미널·시외노선·도시버스 · instruction-sent · 부모 BUS-01 | 11 시내버스 사실 / 10 시외버스 사실 | 1 이용 안내 페이지 / 3 터미널 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [TRAIN-NORTH-01](https://muse.ai/thread/1b7add34-45f0-4bcd-8efa-3036490abaf6) · 태국 북부 기차 노선 역 검증 | SRT 북부본선과 지선 역·실제철도노선·시간표·이용정보 · instruction-sent · 부모 TRAIN-01 | 16 기차 노선 / 15 기차역 | 1 기차 이용 안내 페이지 / 0 전국 기차역 신규 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [TRAIN-EAST-01](https://muse.ai/thread/95a71747-92d2-45de-9b6a-c057c631fe30) · 태국 이산 동부 기차 노선 역 검증 | SRT 북동부·동부본선 지선 역·철도노선·시간표 · instruction-sent · 부모 TRAIN-01 | 16 기차 노선 / 15 기차역 | 1 기차 이용 안내 페이지 / 0 전국 기차역 신규 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [TRAIN-SOUTH-01](https://muse.ai/thread/b837808b-bfc5-4bc6-b910-8884816fe8d6) · 태국 남부 기차 노선 역 검증 | SRT 남부본선 지선 역·철도노선·시간표 · instruction-sent · 부모 TRAIN-01 | 16 기차 노선 / 15 기차역 | 1 기차 이용 안내 페이지 / 0 전국 기차역 신규 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [RAIL-BTS-01](https://muse.ai/thread/21040620-8d2d-471b-91d3-2cfd81545c66) · 방콕 BTS 도시철도 검증 | BTS Sukhumvit/Silom/Gold 노선과역·출입구·환승·요금공식근거 · instruction-sent · 부모 RAIL-AUDIT-01 | 193 역 레코드 / 10 철도 노선 | 193 기존 지리 역 페이지/핀 / 167 공식 메타데이터 매칭 역 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [RAIL-MRT-01](https://muse.ai/thread/a086f5da-a413-48e5-b7e0-0c19c57444ce) · 방콕 MRT SRT ARL 도시철도 검증 | MRT Blue/Purple/Yellow/Pink 및분기·SRT Red/ARL, 역·환승·공식메타데이터 미매칭26건 보완 · instruction-sent · 부모 RAIL-AUDIT-01 | 193 역 레코드 / 10 철도 노선 | 193 기존 지리 역 페이지/핀 / 167 공식 메타데이터 매칭 역 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [BOAT-PIERS-01](https://muse.ai/thread/10c4e225-3b2e-4ad6-87e2-2100678e5754) · 방콕 선착장 좌표 교통 검증 | 기존44선착장 미반영34곳 좌표·실제운영선·승하차·접근 검증, 기존담당은5노선운행·정류장순서에집중 · instruction-sent · 부모 BOAT-01 | 44 선착장 후보 / 5 보트 노선 | 37 선착장 핀 및 상세페이지 / 6 노선 안내선 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [TAXI-REGIONAL-01](https://muse.ai/thread/7b907961-2962-4909-8315-bc87d2825c98) · 태국 지역별 택시 이용 검증 | 치앙마이·파타야·푸껫·사무이 미터택시/Grab/Bolt 운영·공항승차·요금조건, 방콕제외 · instruction-sent · 부모 TAXI-01 | 11 미터택시 사실 / 11 호출앱 사실 | 1 이용 안내 페이지 / 0 승차장 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [MOTO-REGIONAL-01](https://muse.ai/thread/f0d5c380-33a5-4bdc-83ff-4a5b45ae94a8) · 태국 오토바이 승차장 검증 | 기존15승차장 실제시설좌표·등록/운영 근거 및 치앙마이·파타야·푸껫 운영, 기존담당 서비스/규칙 제외 · received-needs-verification · 부모 MOTORCYCLE-01 | 3 서비스 / 15 회수 승차장 레코드 | 1 이용 안내 페이지 / 0 승차장 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [LOCAL-NORTH-01](https://muse.ai/thread/5bf1aaa6-a407-4aff-8b70-548470ca9b11) · 태국 북부 툭툭 쏭태우 조사 | 치앙마이·치앙라이 쏭태우노선/승차지점·툭툭·결제·흥정·귀가, 방콕제외 · reply-observed-awaiting-recovery · 부모 LOCAL-01 | 2 교통 유형 / 22 유형별 사실 레코드 | 1 지역교통 이용 안내 페이지 / 0 승차장 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [LOCAL-SOUTH-01](https://muse.ai/thread/8d314e53-e81c-4bb2-bda1-408ad20ba3f8) · 태국 동부 남부 지역교통 조사 | 파타야·푸껫·사무이 쏭태우/지역버스/툭툭 실제노선·승차지점·결제 · received-needs-verification · 부모 LOCAL-01 | 2 교통 유형 / 22 유형별 사실 레코드 | 1 지역교통 이용 안내 페이지 / 0 승차장 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AIR-TRANSFER-01](https://muse.ai/thread/8fa0a5b2-1bcd-4360-ab3e-f3f494dac8a0) · 태국 지역공항 시내 이동 조사 | CNX/HKT/CEI/USM/KBV/HDY 공항시내 교통·실제승차위치·운영시간·요금, 기존BKK/DMK제외 · received-needs-verification · 부모 AIR-01 | 8 항공사(운항중단 포함) / 8 공항 교통 원본 | 1 국내선 안내 페이지 / 3 공항 이동 안내 페이지 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [FOOD-PLATFORMS-01](https://muse.ai/thread/8bbf8a78-c76e-4fc1-ab99-60570d8f3b3e) · 태국 음식배달 플랫폼 근거 검증 | LINE MAN/ShopeeFood/Robinhood 태국현재운영도시·주문·취소환불·결제·외국인사용, 기존담당Grab/Bolt와분리 · received-needs-verification · 부모 FOOD-DELIVERY-01 | 6 검토 플랫폼 | 4 플랫폼 상세페이지 / 1 비교 허브 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [CAM-NORTH-EAST-01](https://muse.ai/thread/70d92d94-6381-4b79-b029-62d76876042c) · 태국 북부 동부 카메라 검증 | 기존81후보중 북부·동부 실제현재재생/갱신·소스·정확위치·권리검증, 방콕기존담당유지 · received-needs-verification · 부모 NATIONWIDE | 81 카메라 원본 후보 | 29 공개 카메라 카드 / 12 주변 기준점 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [CAM-SOUTH-01](https://muse.ai/thread/a9e0f54a-633c-4bff-8718-25510279facb) · 태국 남부 해변 카메라 검증 | 기존81후보중 남부·섬·해변 실제현재재생/갱신·소스·정확위치·권리검증 · received-needs-verification · 부모 NATIONWIDE | 81 카메라 원본 후보 | 29 공개 카메라 카드 / 12 주변 기준점 핀 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AIRPORT-ORCH-01](https://muse.ai/thread/1af1c324-0d6f-44a8-82fb-6ab7805d561f) · 태국 직항 운항 조사 오케스트레이션 | 태국 직항 운항 조사 오케스트레이션 · researching | 별도 인계 없음 | 아래 반영수 참조 | 130 총괄 노선 원본 | 채팅별 고유 수 미집계 | EAST/WORLD 자료와 중복 가능; 전체 회수 합계에 추가 금지. 공개 수는 통합시장표 참조 |
| [AIRPORT-EAST-01](https://muse.ai/thread/e5766119-08cb-4d86-9fab-064fee9e09e0) · 한일중대만 태국 직항 전수조사 | 한일중대만 태국 직항 전수조사 · researching | 별도 인계 없음 | 아래 반영수 참조 | 41 KR 노선 원본 레코드 / 52 JP 노선 원본 레코드 / 396 CN 노선 원본 레코드 / 50 TW 노선 원본 레코드 | 채팅별 고유 수 미집계 | 09:51 최신 EAST 4시장 회수본 선택. 원본에는 후보·미확인·중복방향 등 포함. 공개 수는 KR/JP/CN/TW 시장표 참조; 다른 공항 채팅과 병합되어 고유 채팅 기여 수는 추적키 부재로 미집계 |
| [AIRPORT-WORLD-01](https://muse.ai/thread/40eb1f10-730e-4779-af33-6360a57cf8e5) · 태국 국제공항 직항 노선 조사 | 태국 국제공항 직항 노선 조사 · researching | 별도 인계 없음 | 아래 반영수 참조 | 13 MY 노선 원본 후보 / 28 IN 노선 원본 후보 / 40 RU 노선 원본 후보 / 9 GB 노선 원본 후보 / 352 US 노선 원본 후보 / 15 ES 노선 원본 후보 | 채팅별 고유 수 미집계 | MY07:54, IN08:12, GB08:55 및 RU live-updates 국가별 수정본을 우선 선택; US/ES는 world-latest 회수본. 정정 및 독립 증거 파일은 합산하지 않음. 공개 수는 6개 시장표 참조 |
| [AIRPORT-SERVICE-01](https://muse.ai/thread/e56397b3-8ac3-4e6b-9b68-52e45071be8c) · BKK 공항 항공사 카운터 조사 | BKK 공항 항공사 카운터 조사 · researching | 별도 인계 없음 | 아래 반영수 참조 | 64 항공사 원본 / 40 공항별 서비스 원본 / 41 증명서 레코드 | 채팅별 고유 수 미집계 | 최신 추출 회수본 artifacts/airport-research/service-r9 선택. r9 ZIP 72,214바이트/SHA는 independent-review.json에 기록. publicImported=false이므로 패키지 전체가 공개 반영되었다고 해석하지 않음. 공개 서비스 수는 통합시장표 참조 |
| [AIRPORT-L10N-01](https://muse.ai/thread/5d6d0d23-c739-44b5-955a-281575346b78) · 태국 공항 현지화 콘텐츠 생성 | 10지역원고·FAQ·시장별서비스현지화, 기존사실조사결과재사용 · researching | 별도 인계 없음 | 아래 반영수 참조 | 10 언어별 원고 패키지 | 10 공항 시장 허브 | 각 언어 원본 market의 routes/services는 기존 사실 재사용이며 별도 신규 회수로 합산하지 않음. 공개 문장은 독립 수정·번역 자료와 통합; 채팅 단독 기여 수는 미집계 |
| [AIRPORT-CAAT-01](https://muse.ai/thread/8e9e371d-de4f-4469-ba94-21bf5b715edc) · CAAT 태국 출발편 지연 결항 승객 권리 | 태국출발 CAB101 지원·보상·신고·현지어10지역 · researching | 별도 인계 없음 | 아래 반영수 참조 | 57 주장별 사실 레코드 | 10 언어별 CAAT 안내 페이지 | 하나의 조사 주제를 언어별로 게시한 페이지 수이며 10개 독립 조사 결과를 뜻하지 않음 |
| [AP-KR-01](https://muse.ai/thread/49529b9c-0717-4a0f-8b93-c2f968f00500) · 한국 태국 직항 누락노선 검증 | 대한민국↔태국 국제직항 전공항·항공사·양방향 편명/시각/요일/현지시간·시즌, 기존41원본 후보 검증 · partial-result-received · 부모 AIRPORT-EAST-01 | 41 KR 노선 원본 레코드 | 44 기존 통합 시장 노선 / 73 기존 통합 시장 서비스 / 36 기존 통합 시장 안내 페이지 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 공항 자료는 다중 채팅·독립 검증과 통합되며 기존 기준선의 채팅별 고유 기여는 추적키 부재로 미집계. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AP-JP-01](https://muse.ai/thread/6f973997-186e-44d3-9b33-456786c07961) · 일본 태국 직항 누락노선 검증 | 일본↔태국 국제직항 전공항·항공사·양방향 편명/시각/요일/현지시간·시즌, 기존52원본 검증 · instruction-sent · 부모 AIRPORT-EAST-01 | 52 JP 노선 원본 레코드 | 65 기존 통합 시장 노선 / 58 기존 통합 시장 서비스 / 24 기존 통합 시장 안내 페이지 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 공항 자료는 다중 채팅·독립 검증과 통합되며 기존 기준선의 채팅별 고유 기여는 추적키 부재로 미집계. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AP-CN-01](https://muse.ai/thread/e765b0a1-a4fa-4272-af78-fd7833388d2b) · 중국 태국 직항 누락노선 검증 | 중국본토↔태국 국제직항 전공항·항공사·양방향 편명/시각/요일/현지시간·시즌, 기존396원본 후보 중복제거 · instruction-sent · 부모 AIRPORT-EAST-01 | 396 CN 노선 원본 레코드 | 85 기존 통합 시장 노선 / 53 기존 통합 시장 서비스 / 20 기존 통합 시장 안내 페이지 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 공항 자료는 다중 채팅·독립 검증과 통합되며 기존 기준선의 채팅별 고유 기여는 추적키 부재로 미집계. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AP-TW-01](https://muse.ai/thread/4f959b36-2282-4f79-aebb-df95cc3c04a6) · 대만 태국 직항 누락노선 검증 | 대만↔태국 국제직항 전공항·항공사·양방향 편명/시각/요일/현지시간·시즌, 기존50원본검증 · instruction-sent · 부모 AIRPORT-EAST-01 | 50 TW 노선 원본 레코드 | 51 기존 통합 시장 노선 / 56 기존 통합 시장 서비스 / 22 기존 통합 시장 안내 페이지 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 공항 자료는 다중 채팅·독립 검증과 통합되며 기존 기준선의 채팅별 고유 기여는 추적키 부재로 미집계. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AP-WORLD-ASIA-01](https://muse.ai/thread/ed05a3d4-446d-4453-8560-65745c4fd73f) · 말레이시아 인도 태국 직항 검증 | 말레이시아·인도↔태국 직항 전공항·항공사·양방향·시즌·운항기간, 기존자료재사용 · instruction-sent · 부모 AIRPORT-WORLD-01 | 13 MY 노선 원본 후보 / 28 IN 노선 원본 후보 / 40 RU 노선 원본 후보 / 9 GB 노선 원본 후보 / 352 US 노선 원본 후보 / 15 ES 노선 원본 후보 | 아래 반영수 참조 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 공항 자료는 다중 채팅·독립 검증과 통합되며 기존 기준선의 채팅별 고유 기여는 추적키 부재로 미집계. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AP-WORLD-WEST-01](https://muse.ai/thread/ef2d2f59-cf1b-4765-afe0-23b96144ebb2) · 러시아 영미 스페인 태국 직항 검증 | 러시아·영국·미국·스페인↔태국 전공항직항, 경유/판매코드셰어제외·실운항확인·양방향·시즌 · instruction-sent · 부모 AIRPORT-WORLD-01 | 13 MY 노선 원본 후보 / 28 IN 노선 원본 후보 / 40 RU 노선 원본 후보 / 9 GB 노선 원본 후보 / 352 US 노선 원본 후보 / 15 ES 노선 원본 후보 | 아래 반영수 참조 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 공항 자료는 다중 채팅·독립 검증과 통합되며 기존 기준선의 채팅별 고유 기여는 추적키 부재로 미집계. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AP-SERVICE-REGIONAL-01](https://muse.ai/thread/ea277269-cd20-4c69-99eb-581c30182f53) · 태국 지역공항 항공사 서비스 검증 | BKK/DMK제외 CNX/HKT/CEI/USM/KBV/HDY 등 지역공항 실제항공사카운터·터미널·시간·연락처·지연결항지원 · instruction-sent · 부모 AIRPORT-SERVICE-01 | 64 항공사 원본 / 40 공항별 서비스 원본 / 41 증명서 레코드 | 아래 반영수 참조 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 공항 자료는 다중 채팅·독립 검증과 통합되며 기존 기준선의 채팅별 고유 기여는 추적키 부재로 미집계. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AP-L10N-ASIA-01](https://muse.ai/thread/96945c81-e1d0-43ba-89f1-d8b8136c7556) · 태국 공항 아시아 언어 원고 검수 | 말레이어·간체중문·일본어·대만번체 원고·FAQ·현지어직원문구. 사실조사금지, 기존검증팩트만참조·원어민검수상태명시 · instruction-sent · 부모 AIRPORT-L10N-01 | 10 언어별 원고 패키지 | 10 공항 시장 허브 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 공항 자료는 다중 채팅·독립 검증과 통합되며 기존 기준선의 채팅별 고유 기여는 추적키 부재로 미집계. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |
| [AP-L10N-WEST-01](https://muse.ai/thread/bad0520d-6e2e-4396-ab49-4bbedc6acdf3) · 태국 공항 영어 러시아 스페인 원고 검수 | 인도/영국/미국영어·러시아어·스페인어 원고·FAQ·현지어직원문구. 사실조사금지, 기존검증팩트만참조·원어민검수상태명시 · instruction-sent · 부모 AIRPORT-L10N-01 | 10 언어별 원고 패키지 | 10 공항 시장 허브 | 0 이 채팅에서 회수한 신규 레코드 | 0 이 채팅의 신규 반영 레코드 | 이 채팅에 귀속되는 로컬 회수 파일 없음. 답변 대기/공유 인계 자료는 신규 회수로 계산하지 않음. 공항 자료는 다중 채팅·독립 검증과 통합되며 기존 기준선의 채팅별 고유 기여는 추적키 부재로 미집계. 현재 상태는 등록자료의 지시 전송 상태이며, 실행 ACK 확인을 뜻하지 않음. |

## 루프탑 도시별

| 도시 | 받은 장소 | 상세/핀 |
|---|---:|---:|
| bangkok | 34 | 30 |
| chiangmai | 8 | 2 |
| pattaya | 9 | 5 |
| phuket | 7 | 5 |
| kohsamui | 7 | 1 |
| phiphi | 3 | 1 |

## 공항 통합시장 실제 소스 반영

기존 6개 공항 채팅의 자료를 아래 통합 데이터에 반영했습니다. 새 분담 9개 채팅의 인계 자료는 추가 회수로 합산하지 않습니다. 표 전체를 각 채팅별 반영 수로 중복 계산하지 않습니다. 노선은 편명/방향 레코드이며 공항쌍과 다른 단위입니다.

| 시장 | 노선 | 서비스 | 항공사 페이지 | 안내 페이지 | 공항 페이지 | 공항쌍 페이지 |
|---|---:|---:|---:|---:|---:|---:|
| KR (ko) | 44 | 73 | 10 | 36 | 7 | 6 |
| MY (ms) | 68 | 43 | 6 | 17 | 9 | 9 |
| CN (zh-cn) | 85 | 53 | 8 | 20 | 13 | 13 |
| IN (en-in) | 68 | 58 | 5 | 19 | 18 | 18 |
| RU (ru) | 22 | 17 | 2 | 8 | 9 | 7 |
| JP (ja) | 65 | 58 | 8 | 24 | 11 | 12 |
| GB (en-gb) | 9 | 33 | 4 | 14 | 7 | 3 |
| US (en-us) | 0 | 0 | 0 | 4 | 4 | 0 |
| ES (es) | 2 | 3 | 1 | 6 | 5 | 1 |
| TW (zh-tw) | 51 | 56 | 7 | 22 | 6 | 6 |

공항 페이지 수에는 실제 생성된 공통 시설 공항 경로도 포함합니다. 시장 노선·서비스에서 도출한 공항 수는 JSON의 marketAirportPages로 별도 보존합니다. 미국 시장 노선·서비스가 0이어도 공통 시설 상세 4개는 존재하며, 이는 미국 직항이나 시설 전수 완료를 뜻하지 않습니다.

## 빌드 산출물과 소스 비교

현재 dist 폴더를 읽은 결과입니다. source와 dist가 다른 경우 다음 빌드 후 재실행하여 대조해야 합니다.

| 경로 | 소스 예상 | dist 실제 | 누락 | 추가 |
|---|---:|---:|---|---|
| ko/rooftops | 44 | 44 | 없음 | 없음 |
| ko/beaches | 0 | 0 | 없음 | 없음 |
| ko/transport/bangkok/stations | 193 | 194 | 없음 | itsaraphap |
| ko/transport/boat/piers | 37 | 37 | 없음 | 없음 |
| ko/airport-assistance/routes | 44 | 44 | 없음 | 없음 |
| ko/airport-assistance/guides | 36 | 36 | 없음 | 없음 |
| ko/airport-assistance/airlines | 10 | 10 | 없음 | 없음 |
| ko/airport-assistance/airports | 7 | 7 | 없음 | 없음 |
| ms/airport-assistance/routes | 68 | 68 | 없음 | 없음 |
| ms/airport-assistance/guides | 17 | 17 | 없음 | 없음 |
| ms/airport-assistance/airlines | 6 | 6 | 없음 | 없음 |
| ms/airport-assistance/airports | 9 | 9 | 없음 | 없음 |
| zh-cn/airport-assistance/routes | 85 | 85 | 없음 | 없음 |
| zh-cn/airport-assistance/guides | 20 | 20 | 없음 | 없음 |
| zh-cn/airport-assistance/airlines | 8 | 8 | 없음 | 없음 |
| zh-cn/airport-assistance/airports | 13 | 13 | 없음 | 없음 |
| en-in/airport-assistance/routes | 68 | 68 | 없음 | 없음 |
| en-in/airport-assistance/guides | 19 | 19 | 없음 | 없음 |
| en-in/airport-assistance/airlines | 5 | 5 | 없음 | 없음 |
| en-in/airport-assistance/airports | 18 | 18 | 없음 | 없음 |
| ru/airport-assistance/routes | 22 | 22 | 없음 | 없음 |
| ru/airport-assistance/guides | 8 | 7 | azur-air-disruption-certificate | 없음 |
| ru/airport-assistance/airlines | 2 | 1 | azur-air | 없음 |
| ru/airport-assistance/airports | 9 | 9 | 없음 | 없음 |
| ja/airport-assistance/routes | 65 | 65 | 없음 | 없음 |
| ja/airport-assistance/guides | 24 | 24 | 없음 | 없음 |
| ja/airport-assistance/airlines | 8 | 8 | 없음 | 없음 |
| ja/airport-assistance/airports | 11 | 11 | 없음 | 없음 |
| en-gb/airport-assistance/routes | 9 | 9 | 없음 | 없음 |
| en-gb/airport-assistance/guides | 14 | 14 | 없음 | 없음 |
| en-gb/airport-assistance/airlines | 4 | 4 | 없음 | 없음 |
| en-gb/airport-assistance/airports | 7 | 7 | 없음 | 없음 |
| en-us/airport-assistance/routes | 0 | 0 | 없음 | 없음 |
| en-us/airport-assistance/guides | 4 | 4 | 없음 | 없음 |
| en-us/airport-assistance/airlines | 0 | 0 | 없음 | 없음 |
| en-us/airport-assistance/airports | 4 | 4 | 없음 | 없음 |
| es/airport-assistance/routes | 2 | 2 | 없음 | 없음 |
| es/airport-assistance/guides | 6 | 6 | 없음 | 없음 |
| es/airport-assistance/airlines | 1 | 1 | 없음 | 없음 |
| es/airport-assistance/airports | 5 | 5 | 없음 | 없음 |
| zh-tw/airport-assistance/routes | 51 | 51 | 없음 | 없음 |
| zh-tw/airport-assistance/guides | 22 | 22 | 없음 | 없음 |
| zh-tw/airport-assistance/airlines | 7 | 7 | 없음 | 없음 |
| zh-tw/airport-assistance/airports | 6 | 6 | 없음 | 없음 |

기존 정적 Itsaraphap 파일럿 페이지는 동적 193개 역과 별도로 dist에 존재합니다.

## 원본 선택 기준

BUS는04:55 정정본, BOAT는05:45 revision3, ROOFTOPS는05:05 35파일 최종패키지의 6도시 인벤토리, FOOD는08:15 두번째 정정본, BEACH는67개 최종패키지를 선택했습니다. TAXI/LOCAL은round1 단일회수본, TRAIN/AIR은03:15 통합회수본, MOTORCYCLE은03:47 승차장파일을 선택했습니다. 이후 채팅에서만 언급된 개수는 회수 데이터로 계산하지 않았습니다. CAMERA는81개 마스터 후보와 현재 curated 소스를 구분합니다. 공항 EAST는09:51본, SERVICE는가장 최신 추출r9, CAAT는r4, L10N은언어별 latest 디렉터리 우선입니다. WORLD는MY07:54·IN08:12·GB08:55·RU live-updates 수정본을 우선 사용하고 US/ES는world-latest 회수본을 유지합니다. 국가별 정정파일은 교체본으로 계산하며 합산하지 않습니다.

## 근거 파일

### BUS-01

- artifacts/muse-heartbeat-20261013-0455/bus01/bus01-bangkok-citybus.json
- artifacts/muse-heartbeat-20261013-0455/bus01/bus01-intercity.json
- src/pages/ko/transport/guides/bus/index.astro

### BOAT-01

- artifacts/muse-heartbeat-20261013-0545/boat01-routes (2).json
- src/data/transport/boats.json

### TAXI-01

- artifacts/muse-transport-round1/TAXI-01-meter-taxi.json
- artifacts/muse-transport-round1/TAXI-01-ridehailing.json
- src/data/transport/guides/taxi.json
- src/pages/ko/transport/guides/taxi/index.astro

### RAIL-AUDIT-01

- artifacts/muse-heartbeat-20261013-0337/RAIL-AUDIT-01-BANGKOK-NETWORK.json
- src/data/transport/bangkok-stations.json
- src/data/transport/station-official-metadata.json

### NATIONWIDE

- public/data/muse-camera-master-20261012.json
- src/data/cameras.ts

### TRAIN-01

- artifacts/muse-heartbeat-20261013-0315/train01-lines.json
- artifacts/muse-heartbeat-20261013-0315/train01-stations.json
- src/data/transit-pilot/guides/train/index.html

### MOTORCYCLE-01

- artifacts/muse-transport-round1/motorcycle01-service.json
- artifacts/muse-heartbeat-20261013-0347/motorcycle01-stands.json
- src/data/transport/guides/motorcycle.json
- src/pages/ko/transport/guides/motorcycle/index.astro

### LOCAL-01

- artifacts/muse-transport-round1/local01-structured.json
- src/data/transport/guides/local.json
- src/pages/ko/transport/guides/local/index.astro

### AIR-01

- artifacts/muse-heartbeat-20261013-0315/air01-airlines.json
- artifacts/muse-heartbeat-20261013-0315/air01-airport-transport.json
- src/data/transport/guides/air.json
- src/data/transport/airport-guides

### FOOD-DELIVERY-01

- artifacts/muse-heartbeat-20261013-0815/food/fooddelivery01-platforms.json
- src/data/transport/guides/grabfood.json
- src/data/transport/guides/line-man.json
- src/data/transport/guides/shopeefood.json
- src/data/transport/guides/robinhood.json
- src/data/transport/guides/food-delivery.json

### ROOFTOPS-01

- artifacts/muse-heartbeat-20261013-0505/rooftops/bangkok/bangkok-rooftops.json
- artifacts/muse-heartbeat-20261013-0505/rooftops/chiangmai/chiangmai-rooftops.json
- artifacts/muse-heartbeat-20261013-0505/rooftops/pattaya/pattaya-rooftops.json
- artifacts/muse-heartbeat-20261013-0505/rooftops/phuket/phuket-rooftops.json
- artifacts/muse-heartbeat-20261013-0505/rooftops/kohsamui/kohsamui-rooftops.json
- artifacts/muse-heartbeat-20261013-0505/rooftops/phiphi/phiphi-rooftops.json
- src/data/rooftops.json

### BEACHES-01

- artifacts/beach-review-20261013/package/beaches-all.json
- src/data/beaches.json
- src/scripts/thailand-map.ts

### BEACH-ANDAMAN-01

- docs/muse-jobs.json

### BEACH-KRABI-01

- docs/muse-jobs.json

### BEACH-GULF-01

- docs/muse-jobs.json

### BEACH-EAST-01

- docs/muse-jobs.json

### ROOF-BKK-01

- docs/muse-jobs.json

### ROOF-CNX-01

- docs/muse-jobs.json

### ROOF-PATTAYA-01

- docs/muse-jobs.json

### ROOF-PHUKET-01

- docs/muse-jobs.json

### ROOF-SAMUI-01

- docs/muse-jobs.json

### ROOF-PHIPHI-01

- docs/muse-jobs.json

### BUS-NORTH-01

- docs/muse-jobs.json

### BUS-ISAN-01

- docs/muse-jobs.json

### BUS-CENTRAL-01

- docs/muse-jobs.json

### BUS-SOUTH-01

- docs/muse-jobs.json

### TRAIN-NORTH-01

- docs/muse-jobs.json

### TRAIN-EAST-01

- docs/muse-jobs.json

### TRAIN-SOUTH-01

- docs/muse-jobs.json

### RAIL-BTS-01

- docs/muse-jobs.json

### RAIL-MRT-01

- docs/muse-jobs.json

### BOAT-PIERS-01

- docs/muse-jobs.json

### TAXI-REGIONAL-01

- docs/muse-jobs.json

### MOTO-REGIONAL-01

- docs/muse-jobs.json

### LOCAL-NORTH-01

- docs/muse-jobs.json

### LOCAL-SOUTH-01

- docs/muse-jobs.json

### AIR-TRANSFER-01

- docs/muse-jobs.json

### FOOD-PLATFORMS-01

- docs/muse-jobs.json

### CAM-NORTH-EAST-01

- docs/muse-jobs.json

### CAM-SOUTH-01

- docs/muse-jobs.json

### AIRPORT-ORCH-01

- artifacts/airport-research/orch-latest-reverified/routes.json

### AIRPORT-EAST-01

- artifacts/airport-research/east-0951/airporteast01-kr-routes.json
- artifacts/airport-research/east-0951/airporteast01-jp-routes.json
- artifacts/airport-research/east-0951/airporteast01-cn-routes.json
- artifacts/airport-research/east-0951/airporteast01-tw-routes.json

### AIRPORT-WORLD-01

- artifacts/airport-research/world-my-correction-0754/my-routes.json
- artifacts/airport-research/world-in-current-0812/in-routes.json
- artifacts/airport-research/world-live-updates/ru-routes.json
- artifacts/airport-research/world-gb-current-0855/gb-routes.json
- artifacts/airport-research/world-latest/us/us-routes.json
- artifacts/airport-research/world-latest/es/es-routes.json

### AIRPORT-SERVICE-01

- artifacts/airport-research/service-r9/airlines.json
- artifacts/airport-research/service-r9/airport-services.json
- artifacts/airport-research/service-r9/disruption-certificates.json

### AIRPORT-L10N-01

- artifacts/airport-research/l10n-latest/ko/market.json
- artifacts/airport-research/l10n-latest/ms/market.json
- artifacts/airport-research/l10n-latest/zh-cn/market.json
- artifacts/airport-research/l10n/en-in/market.json
- artifacts/airport-research/l10n-latest/ru/market.json
- artifacts/airport-research/l10n-latest/ja/market.json
- artifacts/airport-research/l10n/en-gb/market.json
- artifacts/airport-research/l10n/en-us/market.json
- artifacts/airport-research/l10n-latest/es/market.json
- artifacts/airport-research/l10n-latest/zh-tw/market.json
- src/lib/airport-markets.ts

### AIRPORT-CAAT-01

- artifacts/airport-research/caat-r4/airport-caat-01/rawfacts/airport-caat-01-rawfacts.json
- public/data/airport-assistance.json 및 airport-markets

### AP-KR-01

- docs/muse-jobs.json

### AP-JP-01

- docs/muse-jobs.json

### AP-CN-01

- docs/muse-jobs.json

### AP-TW-01

- docs/muse-jobs.json

### AP-WORLD-ASIA-01

- docs/muse-jobs.json

### AP-WORLD-WEST-01

- docs/muse-jobs.json

### AP-SERVICE-REGIONAL-01

- docs/muse-jobs.json

### AP-L10N-ASIA-01

- docs/muse-jobs.json

### AP-L10N-WEST-01

- docs/muse-jobs.json

재현: `node scripts/audit-muse-inventory.mjs`
