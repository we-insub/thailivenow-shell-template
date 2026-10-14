import officialPreviews from '../../public/data/official-camera-previews.json';
import regionPhotos from '../../public/data/region-preview-photos.json';
export type Camera = {
  id: string; title: string; area: string; province: string; category: 'sea' | 'skyline' | 'nature' | 'temple' | 'airport';
  description: string; sourceName: string; sourceUrl: string; center: [number, number] | null;
  locationNote: string; locationEvidence: string; kind: 'live-page' | 'live-photo' | 'time-travel';
  preview?: { url: string; label: string; credit: string; sourceUrl: string; license?: string; licenseUrl?: string }; checked: string; playback?: 'verified' | 'unverified'; verification: string; youtubeId?: string;
};
// Public viewing pages only. Coordinates are disclosed reference places, not verified camera mounts.
const initialCameras: Camera[] = [
  { id:'phuket-patong-tower',title:'파통 타워에서 보는 파통 해변',area:'푸껫',province:'Phuket',category:'sea',description:'파통 타워 15층에서 내려다보는 해변과 안다만해. 바다 위 구름과 해질녘 풍경을 살펴보세요.',sourceName:'Phuket 101 · Patong Tower',sourceUrl:'https://www.phuket101.net/phuket-webcams/',center:[98.292,7.891],locationNote:'파통 타워 주변 기준점. 카메라 설치 층은 운영자 설명 기준이며 정확한 설치 좌표는 미확인입니다.',locationEvidence:'https://www.openstreetmap.org/way/215776371',kind:'live-page',checked:'2026-10-12',verification:'운영자 페이지에서 15층 해변 전망 카메라 안내 확인. 현재 영상 재생 상태는 원본에서 확인하세요.' },
  { id:'phuket-cape-panwa',title:'케이프 판와 · NĀMA 베이',area:'푸껫',province:'Phuket',category:'sea',description:'푸껫 남동쪽 해변에서 바라보는 만과 바다. 수평선과 현지 하늘을 확인할 수 있어요.',sourceName:'NĀMA Freediving Phuket',sourceUrl:'https://www.namafreediving.com/live-webcam',youtubeId:'zsmvEf_PTpY',center:[98.408,7.807],locationNote:'케이프 판와 Tang Khen Bay 주변 기준점. 정확한 카메라 설치 좌표는 미확인입니다.',locationEvidence:'https://www.namafreediving.com/live-webcam',kind:'live-page',checked:'2026-10-12',verification:'운영자 공식 페이지의 라이브캠 설명과 공개 YouTube 플레이어 확인. 뮤즈가 2026-10-12 브라우저에서 15초 이상 재생하며 시계·파도 변화와 생방송 상태를 확인했습니다.' },
  { id:'samui-crystal-bay',title:'크리스털 베이 · 요트클럽 해변',area:'코사무이',province:'Surat Thani',category:'sea',description:'크리스털 베이의 백사장과 파도를 바라보는 해변 카메라입니다.',sourceName:'Crystal Bay Yacht Club · SamuiWebcam',sourceUrl:'https://www.youtube.com/watch?v=3N3ZwIB_X4Y',youtubeId:'3N3ZwIB_X4Y',center:[100.066,9.477],locationNote:'크리스털 베이(Thongtakian Bay) 해변 주변 기준점. 정확한 카메라 설치 좌표는 미확인입니다.',locationEvidence:'https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/koh-samui-thailand.html',kind:'live-page',checked:'2026-10-12',verification:'뮤즈가 2026-10-12 브라우저에서 15초 이상 재생하며 시계·파도 변화와 생방송 상태를 확인했습니다.' },
  { id:'samui-baobab',title:'라마이 해변 · Baobab',area:'코사무이',province:'Surat Thani',category:'sea',description:'Baobab 레스토랑 앞 해변 풍경. 모래사장과 해안으로 밀려오는 파도를 볼 수 있어요.',sourceName:'SkylineWebcams · Baobab 촬영 화면',sourceUrl:'https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/koh-samui-baobab.html',center:[100.049,9.459],locationNote:'라마이 해변 주변 기준점. 레스토랑의 정확한 카메라 설치 좌표는 미확인입니다.',locationEvidence:'https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/koh-samui-baobab.html',kind:'live-page',checked:'2026-10-12',verification:'공개 카메라 페이지의 Baobab 해변 촬영 설명 확인. 개별 재생 상태는 미확인입니다.' },
  { id:'samui-banyan-tree',title:'반얀트리 사무이 · 만 전망',area:'코사무이',province:'Surat Thani',category:'sea',description:'리조트 언덕에서 바라보는 해변과 만의 풍경입니다.',sourceName:'SkylineWebcams · Banyan Tree Samui 촬영 화면',sourceUrl:'https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/lamai-banyan-tree-samui.html',center:[100.069,9.473],locationNote:'반얀트리 사무이 리조트 주변 기준점. 정확한 카메라 설치 좌표는 미확인입니다.',locationEvidence:'https://www.openstreetmap.org/way/528060226',kind:'live-page',checked:'2026-10-12',verification:'공개 페이지의 Lamai Bay 전망 설명 확인. 개별 재생 상태는 미확인입니다.' },
  { id:'samui-bang-rak',title:'방락 해변',area:'코사무이',province:'Surat Thani',category:'sea',description:'코사무이 북쪽 해안의 바다와 방락 해변을 살펴보세요.',sourceName:'SkylineWebcams',sourceUrl:'https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/bang-rak-beach.html',center:[100.056,9.558],locationNote:'방락 해변 주변 기준점. 정확한 카메라 설치 좌표는 미확인입니다.',locationEvidence:'https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/bang-rak-beach.html',kind:'live-page',checked:'2026-10-12',verification:'공개 페이지의 Bang Rak Beach 촬영 설명 확인. 개별 재생 상태는 미확인입니다.' },
  { id:'bangkok-peninsula',title:'페닌슐라 루프탑 · 짜오프라야강',area:'방콕',province:'Bangkok',category:'skyline',description:'페닌슐라 호텔 루프탑에서 바라보는 강과 방콕 스카이라인. 시간대별 영상으로 제공되는 소스입니다.',sourceName:'earthTV · The Peninsula Bangkok',sourceUrl:'https://www.earthtv.com/en/webcam/bangkok-chao-phray',center:[100.510,13.723],locationNote:'페닌슐라 호텔 주변 기준점. 정확한 카메라 설치 좌표는 미확인입니다.',locationEvidence:'https://www.peninsula.com/en/-/media/09---bangkok/the-peninsula-bangkok-presentation.pdf',kind:'time-travel',checked:'2026-10-12',verification:'운영 페이지 제목이 Time Travel인 것을 확인했습니다. 상시 생방송으로 분류하지 않습니다.' },
];
const additionalCameras: Camera[] = [
  {
    "id": "phuket-karon-marina",
    "title": "카론 해변 · 마리나 푸껫 리조트",
    "area": "푸껫",
    "province": "Phuket",
    "category": "sea",
    "description": "카론 해변 · 마리나 푸껫 리조트에서 바라보는 바다와 해안 풍경. 현지 하늘과 파도를 원본 화면에서 살펴보세요.",
    "sourceName": "Marina Phuket Resort",
    "sourceUrl": "https://www.marinaphuket.com/live",
    "center": [
      98.296,
      7.828
    ],
    "locationNote": "카론 해변 남단 리조트 주변 기준점. 정확한 설치 좌표는 미확인입니다.",
    "locationEvidence": "https://www.marinaphuket.com/live",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "리조트 공식 사이트의 Phuket Live View와 Karon Beach 플레이어 확인. 현재 영상 재생 상태는 미검증이며 원본에서 확인하세요."
  },
  {
    "id": "phuket-kata-surf",
    "title": "카타 해변 · 서핑 전망",
    "area": "푸껫",
    "province": "Phuket",
    "category": "sea",
    "description": "카타 해변 · 서핑 전망에서 바라보는 바다와 해안 풍경. 현지 하늘과 파도를 원본 화면에서 살펴보세요.",
    "sourceName": "SSS Phuket · Webcamtaxi",
    "sourceUrl": "https://sssphuket.com/kata-beach-live-cam/",
    "center": [
      98.296,
      7.814
    ],
    "locationNote": "공개 카메라 페이지의 지도 중심을 반올림한 카타 해변 주변 기준점입니다.",
    "locationEvidence": "https://www.webcamtaxi.com/en/thailand/phuket/kata-beach-resort-view.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "SSS Phuket 제공 카타 해변 서핑 카메라 안내와 공개 플레이어 링크 확인. 현재 영상 재생 상태는 미검증이며 원본에서 확인하세요."
  },
  {
    "id": "phangan-sanskara",
    "title": "핫린 해변 · House of Sanskara",
    "area": "코팡안",
    "province": "Surat Thani",
    "category": "sea",
    "description": "핫린 해변 · House of Sanskara에서 바라보는 바다와 해안 풍경. 현지 하늘과 파도를 원본 화면에서 살펴보세요.",
    "sourceName": "House of Sanskara",
    "sourceUrl": "https://www.houseofsanskara.com/home/live",
    "center": [
      100.068,
      9.68
    ],
    "locationNote": "핫린 해변 주변 기준점. 정확한 설치 좌표는 미확인입니다.",
    "locationEvidence": "https://www.houseofsanskara.com/home/live",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "시설 공식 사이트의 해변 24/7 라이브 안내와 YouTube 플레이어 확인. 현재 영상 재생 상태는 미검증이며 원본에서 확인하세요."
  },
  {
    "id": "samui-two-palms",
    "title": "방포 해변 · Two Palms",
    "area": "코사무이",
    "province": "Surat Thani",
    "category": "sea",
    "description": "방포 해변 · Two Palms에서 바라보는 바다와 해안 풍경. 현지 하늘과 파도를 원본 화면에서 살펴보세요.",
    "sourceName": "Karma Two Palms Beach · Webcamtaxi",
    "sourceUrl": "https://www.webcamtaxi.com/en/thailand/surat-thani/karma-two-palms-beach-cam.html",
    "center": [
      99.938,
      9.578
    ],
    "locationNote": "공개 카메라 페이지의 지도 중심을 반올림한 방포 해변 주변 기준점입니다.",
    "locationEvidence": "https://www.webcamtaxi.com/en/thailand/surat-thani/karma-two-palms-beach-cam.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "Karma Two Palms의 바다 전망 카메라 안내와 공개 YouTube 링크 확인. 현재 영상 재생 상태는 미검증이며 원본에서 확인하세요."
  },
  {
    "id": "samui-floating-lotus",
    "title": "방락 항구 · Floating Lotus",
    "area": "코사무이",
    "province": "Surat Thani",
    "category": "sea",
    "description": "방락 항구 · Floating Lotus에서 바라보는 바다와 해안 풍경. 현지 하늘과 파도를 원본 화면에서 살펴보세요.",
    "sourceName": "Floating Lotus · Webcamtaxi",
    "sourceUrl": "https://www.webcamtaxi.com/en/thailand/surat-thani/bangrak-floating-lotus-cam.html",
    "center": [
      100.059,
      9.564
    ],
    "locationNote": "공개 카메라 페이지의 지도 중심을 반올림한 방락 항구 주변 기준점입니다.",
    "locationEvidence": "https://www.webcamtaxi.com/en/thailand/surat-thani/bangrak-floating-lotus-cam.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "바다와 Seatran 부두를 보는 공개 풍경 카메라 안내 확인. 현재 영상 재생 상태는 미검증이며 원본에서 확인하세요."
  },
  {
    "id": "samui-teddy-beach",
    "title": "라마이 해변 · Teddy Beach",
    "area": "코사무이",
    "province": "Surat Thani",
    "category": "sea",
    "description": "라마이 해변 · Teddy Beach에서 바라보는 바다와 해안 풍경. 현지 하늘과 파도를 원본 화면에서 살펴보세요.",
    "sourceName": "Teddy Beach Club · Webcamtaxi",
    "sourceUrl": "https://www.webcamtaxi.com/en/thailand/surat-thani/teddy-beach-club-cam.html",
    "center": [
      100.043,
      9.463
    ],
    "locationNote": "공개 카메라 페이지의 지도 중심을 반올림한 라마이 해변 주변 기준점입니다.",
    "locationEvidence": "https://www.webcamtaxi.com/en/thailand/surat-thani/teddy-beach-club-cam.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "해변 클럽의 바다 전망 안내와 공개 YouTube 링크 확인. 현재 영상 재생 상태는 미검증이며 원본에서 확인하세요."
  },
  {
    "id": "samui-black-pearl",
    "title": "라마이 해변 · Black Pearl",
    "area": "코사무이",
    "province": "Surat Thani",
    "category": "sea",
    "description": "라마이 해변 · Black Pearl에서 바라보는 바다와 해안 풍경. 현지 하늘과 파도를 원본 화면에서 살펴보세요.",
    "sourceName": "Black Pearl · Webcamtaxi",
    "sourceUrl": "https://www.webcamtaxi.com/en/thailand/surat-thani/blackpearl-lamaibeach-cam.html",
    "center": [
      100.04,
      9.458
    ],
    "locationNote": "공개 카메라 페이지의 지도 중심을 반올림한 라마이 해변 주변 기준점입니다.",
    "locationEvidence": "https://www.webcamtaxi.com/en/thailand/surat-thani/blackpearl-lamaibeach-cam.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "해변 레스토랑의 라마이 바다 전망과 공개 YouTube 링크 확인. 현재 영상 재생 상태는 미검증이며 원본에서 확인하세요."
  },
  {
    "id": "samui-crystal-beach",
    "title": "실버 비치 · 크리스털 베이 비치캠",
    "area": "코사무이",
    "province": "Surat Thani",
    "category": "sea",
    "description": "실버 비치 · 크리스털 베이 비치캠에서 바라보는 바다와 해안 풍경. 현지 하늘과 파도를 원본 화면에서 살펴보세요.",
    "sourceName": "SamuiWebcam · Webcamtaxi",
    "sourceUrl": "https://www.webcamtaxi.com/en/thailand/surat-thani/crystal-bay-beach.html",
    "center": [
      100.064,
      9.478
    ],
    "locationNote": "공개 카메라 페이지의 지도 중심을 반올림한 실버 비치 주변 기준점입니다.",
    "locationEvidence": "https://www.webcamtaxi.com/en/thailand/surat-thani/crystal-bay-beach.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "공개 영상 ID Fw9hgttWzIg 확인. 기존 요트클럽 영상 3N3ZwIB_X4Y와 다른 카메라입니다. 현재 영상 재생 상태는 미검증이며 원본에서 확인하세요."
  }
];
const researchUpdate: Camera[] = [
  {
    "id": "pattaya-beach-panorama",
    "title": "파타야 해변 · 파노라마",
    "area": "파타야",
    "province": "Chon Buri",
    "category": "sea",
    "description": "파타야 해변과 바다를 넓게 바라보는 공개 카메라입니다.",
    "sourceName": "SkylineWebcams",
    "sourceUrl": "https://www.skylinewebcams.com/en/webcam/thailand/eastern-thailand/pattaya/panorama.html",
    "center": null,
    "locationNote": "촬영 위치를 확인 중입니다. 확인되지 않은 좌표는 지도에 표시하지 않습니다.",
    "locationEvidence": "https://www.skylinewebcams.com/en/webcam/thailand/eastern-thailand/pattaya/panorama.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "원본 페이지의 Pattaya Beach 파노라마 촬영 설명을 확인했습니다. 현재 재생 상태는 미검증입니다."
  },
  {
    "id": "samet-cocoon",
    "title": "코사멧 · 나단 부두 앞 바다",
    "area": "코사멧",
    "province": "Rayong",
    "category": "sea",
    "description": "코사멧에서 본토 쪽으로 바라보는 바다와 하늘. 섬 주변의 파도와 구름을 살펴보세요.",
    "sourceName": "The Cocoon Hostel",
    "sourceUrl": "https://cocoonsamet.com/koh-samet-live-weather/",
    "center": null,
    "locationNote": "운영자 설명의 Na Dan Pier 주변 전망. 설치 좌표가 확인되지 않아 핀은 표시하지 않습니다.",
    "locationEvidence": "https://cocoonsamet.com/koh-samet-live-weather/",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "운영자 공식 페이지에서 자체 카메라의 바다 전망과 무료 공개 플레이어 안내 확인. 실제 재생 상태는 미검증입니다."
  },
  {
    "id": "tao-island-skyline",
    "title": "코타오 · 섬과 해변 전망",
    "area": "코타오",
    "province": "Surat Thani",
    "category": "sea",
    "description": "코타오 해변에서 바라보는 만과 섬의 풍경입니다.",
    "sourceName": "SkylineWebcams",
    "sourceUrl": "https://www.skylinewebcams.com/en/webcam/thailand/koh-phangan/koh-tao/koh-tao-island.html",
    "center": null,
    "locationNote": "촬영 장소 안내는 확인했으나 설치 좌표는 미확인으로 지도 핀을 표시하지 않습니다.",
    "locationEvidence": "https://www.skylinewebcams.com/en/webcam/thailand/koh-phangan/koh-tao/koh-tao-island.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "공개 카메라 페이지의 촬영 대상과 플레이어 안내 확인. 현재 재생 상태는 미검증입니다."
  },
  {
    "id": "samui-bophut-beach",
    "title": "보풋 해변",
    "area": "코사무이",
    "province": "Surat Thani",
    "category": "sea",
    "description": "코사무이 북쪽 보풋 해변의 바다 풍경입니다.",
    "sourceName": "SkylineWebcams",
    "sourceUrl": "https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/bo-phut-beach.html",
    "center": null,
    "locationNote": "촬영 장소 안내는 확인했으나 설치 좌표는 미확인으로 지도 핀을 표시하지 않습니다.",
    "locationEvidence": "https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/bo-phut-beach.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "공개 카메라 페이지의 촬영 대상과 플레이어 안내 확인. 현재 재생 상태는 미검증입니다."
  },
  {
    "id": "samui-choengmon",
    "title": "청몬 해변",
    "area": "코사무이",
    "province": "Surat Thani",
    "category": "sea",
    "description": "코사무이 북동쪽 청몬 해변의 파도와 해안 풍경입니다.",
    "sourceName": "SkylineWebcams",
    "sourceUrl": "https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/choengmon-beach.html",
    "center": null,
    "locationNote": "촬영 장소 안내는 확인했으나 설치 좌표는 미확인으로 지도 핀을 표시하지 않습니다.",
    "locationEvidence": "https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/choengmon-beach.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "공개 카메라 페이지의 촬영 대상과 플레이어 안내 확인. 현재 재생 상태는 미검증입니다."
  },
  {
    "id": "phuket-patong-panorama",
    "title": "파통 베이 · 도시와 바다 파노라마",
    "area": "푸껫",
    "province": "Phuket",
    "category": "skyline",
    "description": "파통의 도시 전경과 녹지, 멀리 보이는 바다를 바라보는 파노라마입니다.",
    "sourceName": "Webcamtaxi · 공개 Ivideon 플레이어",
    "sourceUrl": "https://www.webcamtaxi.com/en/thailand/phuket/patong-bay-cam.html",
    "center": null,
    "locationNote": "촬영 장소 안내는 확인했으나 설치 좌표는 미확인으로 지도 핀을 표시하지 않습니다.",
    "locationEvidence": "https://www.webcamtaxi.com/en/thailand/phuket/patong-bay-cam.html",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "공개 카메라 페이지의 촬영 대상과 플레이어 안내 확인. 현재 재생 상태는 미검증입니다."
  },
  {
    "id": "krabi-ao-nang-coast",
    "title": "아오낭 · 연안 바다 전망",
    "area": "끄라비",
    "province": "Krabi",
    "category": "sea",
    "description": "태국 공공기관 GISTDA가 공개하는 아오낭 연안의 바다 화면. 해상 풍경과 현지 하늘을 볼 수 있습니다.",
    "sourceName": "GISTDA Coastal Radar · NANG OUT",
    "sourceUrl": "http://coastalradar.gistda.or.th/cctvlive/120219398703252507325226914621193549970/live.html",
    "center": null,
    "locationNote": "원본 화면의 NANG OUT 연안 표기를 확인했습니다. 설치 좌표는 미확인으로 핀은 표시하지 않습니다.",
    "locationEvidence": "https://coastalradar.gistda.or.th/app/map/router.php?page=cctv",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "뮤즈가 공공기관 원본의 아오낭 해상 풍경과 LIVE·시각 표시를 확인. 무료·로그인 없이 열람 가능. 외부 원본 링크만 제공하며 영상 재사용 허가는 미확인입니다."
  },
  {
    "id": "huahin-centara",
    "title": "후아힌 해변 · 센타라 그랜드",
    "area": "후아힌",
    "province": "Prachuap Khiri Khan",
    "category": "sea",
    "description": "센타라 그랜드 호텔이 공개하는 후아힌 해변 카메라입니다.",
    "sourceName": "Centara Grand Beach Resort Hua Hin",
    "sourceUrl": "https://www.centarahotelsresorts.com/centaragrand/chbr/live-webcam",
    "center": null,
    "locationNote": "촬영 장소는 운영자 안내 기준이며 설치 좌표가 미확인이라 지도 핀은 표시하지 않습니다.",
    "locationEvidence": "https://www.centarahotelsresorts.com/centaragrand/chbr/live-webcam",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "뮤즈가 운영자 원본의 현재 영상 또는 사진 갱신을 확인했습니다. 영상·이미지 재사용 허가는 미확인으로 외부 링크만 제공합니다."
  },
  {
    "id": "huahin-kba",
    "title": "후아힌 해변 · KBA 카이트스쿨",
    "area": "후아힌",
    "province": "Prachuap Khiri Khan",
    "category": "sea",
    "description": "카이트스쿨이 공개하는 후아힌 해변의 바다와 날씨 화면입니다.",
    "sourceName": "Kiteboarding Asia",
    "sourceUrl": "https://kiteboardingasia.com/hua-hin-weather/",
    "center": null,
    "locationNote": "촬영 장소는 운영자 안내 기준이며 설치 좌표가 미확인이라 지도 핀은 표시하지 않습니다.",
    "locationEvidence": "https://kiteboardingasia.com/hua-hin-weather/",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "뮤즈가 운영자 원본의 현재 영상 또는 사진 갱신을 확인했습니다. 영상·이미지 재사용 허가는 미확인으로 외부 링크만 제공합니다."
  },
  {
    "id": "chaam-thew-talay",
    "title": "차암 · Thew Talay 전망",
    "area": "차암",
    "province": "Phetchaburi",
    "category": "sea",
    "description": "차암에서 바라보는 풍경을 몇 분마다 갱신되는 사진으로 제공합니다.",
    "sourceName": "Mike Newman · Thew Talay Estate",
    "sourceUrl": "https://www.mgnewman.com/chaamkam.php",
    "center": null,
    "locationNote": "촬영 장소는 운영자 안내 기준이며 설치 좌표가 미확인이라 지도 핀은 표시하지 않습니다.",
    "locationEvidence": "https://www.mgnewman.com/chaamkam.php",
    "kind": "live-photo",
    "checked": "2026-10-12",
    "verification": "뮤즈가 운영자 원본의 현재 영상 또는 사진 갱신을 확인했습니다. 영상·이미지 재사용 허가는 미확인으로 외부 링크만 제공합니다."
  },
  {
    "id": "chainat-chao-phraya",
    "title": "차이나트 · 짜오프라야강 전망",
    "area": "차이나트",
    "province": "Chai Nat",
    "category": "nature",
    "sourceUrl": "https://webcamera24.com/camera/thailand/7280-bang-luang-chao-phraya-dam/",
    "sourceName": "Webcamera24 · 원천 운영자 미확인",
    "description": "강과 댐 주변의 공개 전망 카메라 안내입니다.",
    "center": null,
    "locationNote": "중개 페이지의 촬영 지역 안내 기준입니다. 카메라 설치 좌표는 미확인으로 핀은 표시하지 않습니다.",
    "locationEvidence": "https://webcamera24.com/camera/thailand/7280-bang-luang-chao-phraya-dam/",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "무료 공개 개별 카메라 페이지와 풍경 분류 확인. 원천 운영자와 현재 재생·갱신 상태는 미검증입니다. 중개 사이트의 과거 Online 표기를 현재 생방송 확인으로 사용하지 않습니다. 외부 링크로만 안내합니다."
  },
  {
    "id": "pathum-chao-phraya",
    "title": "빠툼타니 · 짜오프라야강 전망",
    "area": "빠툼타니",
    "province": "Pathum Thani",
    "category": "skyline",
    "sourceUrl": "https://tufaq.com/en/thailand/pathum-thani/view-chao-phraya-river_cam_10110",
    "sourceName": "Tufaq · 원천 운영자 미확인",
    "description": "짜오프라야강과 강변 시가지를 바라보는 공개 전망 페이지입니다.",
    "center": null,
    "locationNote": "중개 페이지의 촬영 지역 안내 기준입니다. 카메라 설치 좌표는 미확인으로 핀은 표시하지 않습니다.",
    "locationEvidence": "https://tufaq.com/en/thailand/pathum-thani/view-chao-phraya-river_cam_10110",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "무료 공개 개별 카메라 페이지와 풍경 분류 확인. 원천 운영자와 현재 재생·갱신 상태는 미검증입니다. 중개 사이트의 과거 Online 표기를 현재 생방송 확인으로 사용하지 않습니다. 외부 링크로만 안내합니다."
  },
  {
    "id": "chiangmai-weather-view",
    "title": "치앙마이 · 도시 풍경 카메라",
    "area": "치앙마이",
    "province": "Chiang Mai",
    "category": "skyline",
    "sourceUrl": "https://www.easeweather.com/asia/thailand/chiang-mai/webcam",
    "sourceName": "EaseWeather · Windy 카메라 중개",
    "description": "치앙마이의 공개 카메라와 갱신 사진을 안내하는 페이지입니다.",
    "center": null,
    "locationNote": "중개 페이지의 촬영 지역 안내 기준입니다. 카메라 설치 좌표는 미확인으로 핀은 표시하지 않습니다.",
    "locationEvidence": "https://www.easeweather.com/asia/thailand/chiang-mai/webcam",
    "kind": "live-photo",
    "checked": "2026-10-12",
    "verification": "무료 공개 개별 카메라 페이지와 풍경 분류 확인. 원천 운영자와 현재 재생·갱신 상태는 미검증입니다. 중개 사이트의 과거 Online 표기를 현재 생방송 확인으로 사용하지 않습니다. 외부 링크로만 안내합니다."
  },
  {
    "id": "chiangrai-mae-yao",
    "title": "치앙라이 · 반매야오 전망",
    "area": "치앙라이",
    "province": "Chiang Rai",
    "category": "nature",
    "sourceUrl": "https://webcamera24.com/camera/thailand/7168-ciangraj-ban-mae-yao/",
    "sourceName": "Webcamera24 · 원천 운영자 미확인",
    "description": "중개 페이지가 산과 사원 풍경으로 안내하는 반매야오 카메라입니다.",
    "center": null,
    "locationNote": "중개 페이지의 촬영 지역 안내 기준입니다. 카메라 설치 좌표는 미확인으로 핀은 표시하지 않습니다.",
    "locationEvidence": "https://webcamera24.com/camera/thailand/7168-ciangraj-ban-mae-yao/",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "무료 공개 개별 카메라 페이지와 풍경 분류 확인. 원천 운영자와 현재 재생·갱신 상태는 미검증입니다. 중개 사이트의 과거 Online 표기를 현재 생방송 확인으로 사용하지 않습니다. 외부 링크로만 안내합니다."
  },
  {
    "id": "chiangrai-wat-thep",
    "title": "치앙라이 · 왓텝분윤 전망",
    "area": "치앙라이",
    "province": "Chiang Rai",
    "category": "temple",
    "sourceUrl": "https://webcamera24.com/camera/thailand/7167-ban-nong-pueng-severo-zapad-wat-thep-bun-yuen-wat-rim-kok/",
    "sourceName": "Webcamera24 · 원천 운영자 미확인",
    "description": "왓텝분윤 사원과 산의 풍경으로 안내되는 공개 카메라 페이지입니다.",
    "center": null,
    "locationNote": "중개 페이지의 촬영 지역 안내 기준입니다. 카메라 설치 좌표는 미확인으로 핀은 표시하지 않습니다.",
    "locationEvidence": "https://webcamera24.com/camera/thailand/7167-ban-nong-pueng-severo-zapad-wat-thep-bun-yuen-wat-rim-kok/",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "무료 공개 개별 카메라 페이지와 풍경 분류 확인. 원천 운영자와 현재 재생·갱신 상태는 미검증입니다. 중개 사이트의 과거 Online 표기를 현재 생방송 확인으로 사용하지 않습니다. 외부 링크로만 안내합니다."
  },
  {
    "id": "nakhon-cha-uat",
    "title": "나콘시탐마랏 · 차우앗강 전망",
    "area": "나콘시탐마랏",
    "province": "Nakhon Si Thammarat",
    "category": "nature",
    "sourceUrl": "https://webcamera24.com/camera/thailand/7213-nakhonsithammarat/",
    "sourceName": "Webcamera24 · 원천 운영자 미확인",
    "description": "차우앗강의 풍경을 안내하는 공개 카메라 페이지입니다.",
    "center": null,
    "locationNote": "중개 페이지의 촬영 지역 안내 기준입니다. 카메라 설치 좌표는 미확인으로 핀은 표시하지 않습니다.",
    "locationEvidence": "https://webcamera24.com/camera/thailand/7213-nakhonsithammarat/",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "무료 공개 개별 카메라 페이지와 풍경 분류 확인. 원천 운영자와 현재 재생·갱신 상태는 미검증입니다. 중개 사이트의 과거 Online 표기를 현재 생방송 확인으로 사용하지 않습니다. 외부 링크로만 안내합니다."
  },
  {
    "id": "lanta-hat-lant",
    "title": "코란타 · 하트란 바다 전망",
    "area": "코란타",
    "province": "Krabi",
    "category": "sea",
    "sourceUrl": "https://webcamera24.com/camera/thailand/7201-hat-lant-ko-lanta/",
    "sourceName": "Webcamera24 · 원천 운영자 미확인",
    "description": "코란타 바다 전망으로 분류된 무료 공개 카메라 안내입니다.",
    "center": null,
    "locationNote": "중개 페이지의 촬영 지역 안내 기준입니다. 카메라 설치 좌표는 미확인으로 핀은 표시하지 않습니다.",
    "locationEvidence": "https://webcamera24.com/camera/thailand/7201-hat-lant-ko-lanta/",
    "kind": "live-page",
    "checked": "2026-10-12",
    "verification": "무료 공개 개별 카메라 페이지와 풍경 분류 확인. 원천 운영자와 현재 재생·갱신 상태는 미검증입니다. 중개 사이트의 과거 Online 표기를 현재 생방송 확인으로 사용하지 않습니다. 외부 링크로만 안내합니다."
  }
];
const verifiedIds = new Set(['phuket-patong-tower','phuket-cape-panwa','samui-crystal-bay','samui-baobab','samui-banyan-tree','samui-bang-rak','samui-crystal-beach','tao-island-skyline','pattaya-beach-panorama','samet-cocoon','krabi-ao-nang-coast','huahin-centara','huahin-kba','chaam-thew-talay','phuket-kata-surf','phuket-karon-marina','phangan-sanskara','samui-two-palms','samui-black-pearl']);
const youtubePreviews: Record<string,string> = {'phuket-cape-panwa':'zsmvEf_PTpY','samui-two-palms':'J9g4uE0gvm4','samui-black-pearl':'NwnRppDlkX8','phangan-sanskara':'MW3fisTCXRQ','huahin-centara':'PPJ55qdY3pw'};
const candidateCameras: Camera[] = [...initialCameras, ...additionalCameras, ...researchUpdate].filter(camera => camera.area !== '방콕' && !['samui-floating-lotus','samui-teddy-beach'].includes(camera.id)).map(camera => ({...camera, youtubeId: youtubePreviews[camera.id] ?? camera.youtubeId, preview: (officialPreviews as Record<string,string>)[camera.id] ? {url:(officialPreviews as Record<string,string>)[camera.id],label:'공식 카메라 갱신 사진',credit:'SkylineWebcams',sourceUrl:camera.id === 'samui-crystal-bay' ? 'https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/ko-samui-crystal-bay.html' : camera.id === 'samui-crystal-beach' ? 'https://www.skylinewebcams.com/en/webcam/thailand/surat-thani/ko-samui/koh-samui-thailand.html' : camera.sourceUrl} : youtubePreviews[camera.id] ? {url:`https://i.ytimg.com/vi/${youtubePreviews[camera.id]}/hqdefault.jpg`,label:'공식 영상 썸네일 · 실시간 화면 아님',credit:'YouTube · 원본 운영자',sourceUrl:camera.sourceUrl} : (regionPhotos as Record<string, {url:string;label:string;credit:string;sourceUrl:string;license:string;licenseUrl:string}>)[camera.id] ?? (regionPhotos as Record<string, {url:string;label:string;credit:string;sourceUrl:string;license:string;licenseUrl:string}>)[camera.area], kind: camera.id === 'phuket-kata-surf' ? 'live-photo' : camera.kind, playback: verifiedIds.has(camera.id) ? 'verified' : 'unverified', verification: camera.id === 'phuket-kata-surf' || camera.kind === 'live-photo' ? '뮤즈가 2026-10-12 운영자 원본의 현재 사진 갱신을 확인했습니다. 연속 동영상이 아닌 주기 갱신 사진이며 외부 원본 링크로 제공합니다.' : verifiedIds.has(camera.id) ? '뮤즈가 2026-10-12 원본 플레이어의 생방송 표시와 시각 전진 또는 화면 변화를 확인했습니다. 이후 방송 상태는 달라질 수 있습니다.' : camera.verification}));
export const playbackLabel = (camera: Camera) => camera.kind === 'time-travel' ? '시간대별 영상' : camera.kind === 'live-photo' ? camera.playback === 'verified' ? '갱신 사진 · 10/12 확인' : '갱신 사진 · 상태 미검증' : camera.playback === 'verified' ? '재생 확인 · 10/12' : '재생 미검증';
export const categoryLabels = { all:'전체 풍경',sea:'바다·해변',skyline:'도심·강',nature:'산·자연',temple:'사원',airport:'공항' };

// Only licensed images are reused; provider playback remains available via its
// original page or the provider's official embeddable player.
export const cameras: Camera[] = candidateCameras.map(camera=>{
 const licensed=(regionPhotos as Record<string,NonNullable<Camera['preview']>>)[camera.id]
   || (regionPhotos as Record<string,NonNullable<Camera['preview']>>)[camera.area];
 return {...camera,preview:camera.preview?.license&&camera.preview?.licenseUrl?camera.preview:licensed?.license&&licensed?.licenseUrl?licensed:undefined};
});
