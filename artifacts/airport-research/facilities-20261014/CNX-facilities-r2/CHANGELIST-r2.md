# CNX r2 변경목록 (Codex 검수 정정, 2026-10-14)
원본 보존: original/ 디렉토리 (r1)

1. CUSS 지원 항공사 정정: TR 제거(공식 표 ** = 준비 중), VZ 추가(√)
   - 정정값: TG/SL/PG/FD/VZ/AK/JX/5J (공식 https://chiangmai.airportthai.co.th/service/airport-guide/detail/CUSS+CUBD_CNX 대조)
   - CUBD PG/FD/AK 유지
   - 반영: cnx-facilities.json, ko.md, l10n.json (15곳)
2. 셔틀버스 floor=1 제거 (제출 quote에 층 근거 없음) → floor null + 보류 표기
   - evidence URL을 세부 페이지(detail/145)로 교체
   - Door 12 승차는 홈페이지 기재로 유지 (세부 페이지 미명시 명기)
3. 시티버스 evidence를 세부 페이지(detail/139)로 교체
   - 요금 30바트/회 (공식), 노선 R3 Red/Yellow로 정정
   - 운행시간: 공식 페이지 표기 모호 → null + 불일치 기록 (홈페이지 06:00–23:30와 충돌, 제3자 50바트 보도는 미채택)
   - 반영: json, ko.md, l10n.json (18곳)
4. gaps 2건 추가 (시티버스 시간 검증, 셔틀버스 층/출구 확인)
