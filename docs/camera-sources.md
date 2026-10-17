# Tourist camera sources — 2026-10-12

User scope: scenery, coastline, skyline, river, temple views and airport plane spotting. Road traffic and security CCTV are excluded.

The catalog is in `src/data/cameras.ts`. Each entry links to an operator or a public webcam service. No video stream URLs are extracted and no camera images or videos are copied, saved, hotlinked or embedded. Card covers are category graphics, not camera footage.

## Verification

- Phuket 101: official page describes a camera on Patong Tower's 15th floor. Footer expressly welcomes links, but prohibits copying photos/text without written authorization. https://www.phuket101.net/phuket-webcams/
- NĀMA: official webcam page describes the Cape Panwa beach and contains the public YouTube player zsmvEf_PTpY. https://www.namafreediving.com/live-webcam
- Crystal Bay Yacht Club and Scuba Birds: Muse inspected the public YouTube titles/descriptions and reported 24/7 camera descriptions. A LIVE title does not independently establish current playback. https://www.youtube.com/watch?v=3N3ZwIB_X4Y and https://www.youtube.com/watch?v=zokjDGaJMm4
- SkylineWebcams: Baobab, Banyan Tree Samui and Bang Rak pages list the scenic subjects. Current playback is not verified. Official terms allow supplied sharing links and prohibit unauthorized extraction/copying. https://www.skylinewebcams.com/en/terms-of-use.html
- earthTV: official page describes The Peninsula rooftop overlooking the Chao Phraya. Page title is Time Travel; catalog explicitly classifies it as time-based footage, not a verified continuous livestream. https://www.earthtv.com/en/webcam/bangkok-chao-phray

All map coordinates are rounded approximate reference points near the named subject/host place, not independently verified camera mounting locations. Source descriptions identify subjects; not all source pages publish coordinates. Do not promote these to exact camera installation coordinates without geospatial evidence.

## Pending sources

Wat Arun, Phi Phi and airport takeoff/landing: no verified free continuous live source secured in this pass. No fabricated entries or looping travel videos substituted.

Bangkok rooftop YouTube lZdLbcBklsU: Muse found a 24/7 title, but could not establish operator or actual playback. Excluded pending verification.

## UI verification

Map point/cluster layers use MapLibre canvas coordinates. Filtering updates both map data and the catalog. Search, region choice, scenery category, source links, detail pages and detail-to-map selection are checked in the browser. Source connectivity and metadata are distinct from actual live playback status.


## 2026-10-12 조사 반영

총 17개 공개 전망 소스(라이브 안내 페이지 16개, 시간대별 영상 1개). 카론·카타·코팡안과 코사무이 5개 전망, 방콕 Jack’s Bar 강변 및 파타야 해변을 추가했다. Scuba Birds 영상 zokjDGaJMm4는 뮤즈의 실제 브라우저 검증에서 종료된 녹화로 확인되어 제거했다. NAMA와 Crystal Bay Yacht Club은 15초 재생 검증을 통과했다. 나머지는 원본 안내 확인 단계이며 현재 재생을 보장하지 않는다. 새 방콕·파타야 소스는 위치 미확인으로 목록에만 제공하고 지도 핀은 생성하지 않는다. 무료 원본 링크 제공과 영상의 재배포·임베드 허가는 별개이며 영상 재배포는 하지 않는다.


## TLN-CAM-05 전체 마스터 반영 작업

뮤즈 공개 CSV 미리보기에서 64행(기존63행+카오락 채널1행)을 수집해 public/data/muse-camera-master-20261012.json에 보관했다. 해당 파일은 모든 조사 후보이며 실제 서비스 목록과 동일하지 않다. 오래된 중개 페이지 오프라인 표시는 현재 원본 장애의 증거로 사용하지 않으며 운영자 원본을 추가 검증한다. Jack’s Bar 종료 판정을 반영해 서비스에서 제거했다. 아오낭 후보는 Avani 호텔 캠이 아닌 GISTDA 공공 연안 풍경으로 출처를 정정했다. 도로 화면인 카오락 3항목은 실제 재생되더라도 제외한다. Skyline와 YouTube의 동일 스트림 여부는 추가 대조 중이다.


## 완료 결과 정정

원본 재검증에서 Marina Phuket·House of Sanskara·Two Palms·Black Pearl의 실제 재생이 확인됐다. 구형 중개 사이트의 오프라인 판정을 철회했다. Floating Lotus는 원본 YouTube 삭제·오프라인으로 확인돼 제외했다. Teddy Beach의 구 영상은 오프라인이고 후속 Teddy With도 종료되어 제외했다. Skyline Crystal Bay 및 Samui-Thailand는 기존 두 YouTube 원본과 동일하므로 추가 집계하지 않는다. KBA 후아힌과 Centara 공식 호텔 캠, Thew Talay 갱신 사진을 추가했다. SSS 카타는 운영자 갱신 사진으로 표시하며 연속 영상 수에 포함하지 않는다. 공개 전망 소스 23개로 확장됐으며 좌표 미확인은 핀에서 제외한다.


최종 TLN-CAM-05-final-81.csv 미리보기에서 실제 81행을 확인하고 JSON/CSV로 저장했다. 기존 파일 갱신 보고와 실제 파일 내용(65행)이 달라 새 이름으로 재생성하도록 요청한 뒤 81행을 확보했다. 서비스 목록은 23개: 재생 확인 영상17개, 갱신 사진2개, 시간대별 영상1개, 재생 미검증3개. 원본 지역·제공 방식은 최종 CSV와 원문 기준이며 뮤즈 요약 숫자를 그대로 사용하지 않는다. 전체 후보 수를 서비스 카메라 수로 표기하지 않는다.
