# 좌표 검증 결과 (ROOF-SAMUI-01, 2026-10-13)

## 방법
- Nominatim 검색 + Overpass API (bbox 9.44–9.61, 99.92–100.11) 대조
- 공식 원문(호텔 공식 사이트·공식 SNS)의 주소 표기와 대조
- OSM 객체 미발견 시 좌표 미공개 처리 (근사 좌표를 실제시설좌표로 공개하지 않음)

## 시설별 결과

| recordId | 시설 | OSM 객체 | 좌표 | 원문 대조 | 판정 |
|---|---|---|---|---|---|
| rt-usm-001 | Air Bar | 미발견 | — | 공식 주소(295 Taling Ngam)와 HERE 근사치 정합하나, 근사 좌표는 실제시설좌표로 공개하지 않음 | 미공개 — 호텔 공식 지도 링크로 대체: https://www.ihg.com/intercontinental/hotels/us/en/koh-samui/usmks/hoteldetail |
| rt-usm-002 | STAR | way 528060225 | 9.4678717, 100.0703145 | Silavadee Pool Spa Resort 리조트 객체 중심점 | 공개 (대조 출처 명기) |
| rt-usm-003 | Tree Tops | node 2649218887 | 9.5419674, 100.0745963 | Anantara Lawana 리조트 객체. Tree Tops 개별 객체 미등록 | 리조트 좌표 기준 공개 (개별 객체 없음 명기) |
| rt-usm-004 | The Roof Samui | node 11190953737 | 9.5116582, 100.0379232 | OSM 노드 주소(차웽)와 공식 FB 지역 정합 | 공개 |
| rt-usm-005 | LINK | 미발견 | — | 공식 사이트 오류로 검증 불가 | 미공개 |
| rt-usm-006 | Cocoon | node 11252180637 | 9.5520513, 100.0722245 | OSM 노드 주소(차웽–청몬 로드)와 공식 사이트 지역 정합 | 공개 |
| rt-usm-007 | Yobye | 미발견 | — | 공개보류이므로 좌표 검증 보류 | 미공개 |
| rt-usm-008 | Day & Night | 미발견 | — | 공식 사이트에 상세 주소·좌표 미기재 | 미공개 |
| rt-usm-009 | Burma Kitchen | 미발견 | — | Fisherman's Village 지역 노드만 존재, 업소 개별 객체 없음 | 미공개 |

## 정정 사항 (사용자 지적 반영)
- v1 매핑의 Air Bar HERE 근사 좌표(9.46221/99.93393)는 실제시설좌표가 아니므로 공개 좌표에서 제외
- v1 매핑 officialSources에 포함됐던 restaurantguru·Wanderlog 등 제3자 URL은 thirdPartySources로 분리
