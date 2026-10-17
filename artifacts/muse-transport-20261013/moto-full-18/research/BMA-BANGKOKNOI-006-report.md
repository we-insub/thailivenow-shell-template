# MOTO-REGIONAL-01 15호 (기존 15 마지막) BMA-BANGKOKNOI-006 완료 보고

- 완료일: 2026-10-13 (KST)
- 담당: 단일 직렬 worker, 하위 worker 없음

## 대상
- id: BMA-BANGKOKNOI-006 (프란녹 선착장, 방콕노이)
- slug: bma-bangkoknoi-006
- detailPath (제안): /th/guides/bangkok/transport/motorcycle-stands/bma-bangkoknoi-006

## 실제시설좌표: 미확보 (미검증)
- OSM Nominatim 'ท่าน้ำพรานนก' 직접 검색: 8건 반환, 전부 참고 객체(선착장 ferry_terminal·주거단지·버스회사 등) — 승차대 객체 없음 (정보없음, 부재 증거 아님)
- Photon: 0건
- Overpass 반경 질의: overpass-api.de·overpass.kumi.systems 전부 접속 실패 (http 000) — 조회 장애 ×2
- BMA 공식 PDF: 좌표 미수록
- Nominatim의 'พรานนก' ferry_terminal (13.7563104/100.4868725)은 선착장 참고위치일 뿐 승차대 핀이 아니므로 좌표 미사용 (소유자 지시)
- 찾지 못함 ≠ 공식 미공개
- coordinates=null

## 등록원문: 확보 (confirmed)
- BMA 방콕노이 구청 FY2566 공식 목록 (browser.open PDF 텍스트 추출, 2026-10-13 정상 열람)
- 원문 URL: https://webportal.bangkok.go.th/public/user_files_editor/65/ita66/o30/O12%20%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A3%E0%B8%AD%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A3.pdf
- 원문 제목: ข้อมูลสถานที่รอรับคนโดยสาร (วิน) และการออกใบรับรองรถจักรยานยนต์สาธารณะ ในเขตกรุงเทพมหานคร ประจำปีงบประมาณ พ.ศ. 2566 สำนักงานเขตบางกอกน้อย รอบ 6 เดือนแรก (ตุลาคม 65-มีนาคม 66)
- 정보일: 2023-03-31 (ข้อมูล ณ วันที่ 31 มีนาคม 2566)
- 행번호: 6번, 원문 표기: ท่าน้ำพรานนก
- 행 원문 셀: 'ไม่มี | 68 | ไม่มี' (열 매핑 추측 금지 — 원값 그대로)
- 증명서 수: 68건 (stands 레코드 driverCount=68과 일치, 등록 시점 통계)
- 문서 범위: 등록 승차대 103곳, 증명서 합계 1,858건
- **인계값 정정**: stands 레코드의 '구역 내 최다(68명)'는 재주장하지 않음 — 동일 PDF에 더 큰 수치 행(29번 70·51번 224·73번 76·76번 70) 확인

## 운영 상태 판정: 미검증
- 2023-03-31 기준 스냅샷 외 현재 운영 근거 없음
- driverCount=68은 등록 시점 증명서 발급 수 (현재 운영 기사 수 아님)

## 한국어 본문/FAQ
- bodyKo 2문장 + faqKo 3개 (사실 기반, 해요체) 확보

## 미검증 항목 수: 6건
- coordinates / operatingStatus / operatingHours / fareTable / payment / address
- '공식 미공개' 단정 0건

## 장애
- Overpass 양 엔드포인트 접속 실패 (http 000) ×2 — 조회 장애, 부재 증거 아님
- 그 외: BMA PDF 정상 열람 (장애 없음)

## 판정
- ready=false (실제시설좌표 미검증 — ready=true 조건 미달)
- 3종 파일 JSON 파싱 OK

## 산출물 (바이트·SHA)
- completed/BMA-BANGKOKNOI-006.json: 7,280B, SHA `be650102387b3c152c00347919af599da3c76ccd5a2ddd660c455620ec7122f5`
- evidence/BMA-BANGKOKNOI-006-evidence.json: 9,028B, SHA `8e4d41b15922954f473baafaec8fbfdb0338058e7376218df39f3ed015b8de0b` (claims 6건: BNOI-E1~E6)
- gaps/BMA-BANGKOKNOI-006-gaps.json: 3,840B, SHA `a27d620d217377f4a4cc154a3e1370c55e00b00496a8894c629f39e9ae3aa3b4` (gaps 6건)

## 규범 준수
- stands.json 절대 수정 없음 (읽기전용)
- 인계 근거 S04 읽기전용 재사용, 중복 재조사 없음
- 서비스/규칙·파툼완 16건·타 지역 손대지 않음
- 코드수정·배포 없음
