import provinces from './provinces.json';

export { provinces };
// City reference points for navigation, not camera installation locations.
export const cities = [
  { id: 'bangkok', name: '방콕', en: 'Bangkok', th: 'กรุงเทพมหานคร', province: 'Bangkok', center: [100.5018, 13.7563], region: '중부', label: '수도 · 짜오프라야강', zoom: 10 },
  { id: 'chiang-mai', name: '치앙마이', en: 'Chiang Mai', th: 'เชียงใหม่', province: 'Chiang Mai', center: [98.9853, 18.7883], region: '북부', label: '고도 · 산과 사원', zoom: 10 },
  { id: 'chiang-rai', name: '치앙라이', en: 'Chiang Rai', th: 'เชียงราย', province: 'Chiang Rai', center: [99.8325, 19.9105], region: '북부', label: '북부의 도시', zoom: 10 },
  { id: 'pattaya', name: '파타야', en: 'Pattaya', th: 'พัทยา', province: 'Chon Buri', center: [100.8825, 12.9236], region: '동부', label: '타이만 · 해변 도시', zoom: 11 },
  { id: 'hua-hin', name: '후아힌', en: 'Hua Hin', th: 'หัวหิน', province: 'Prachuap Khiri Khan', center: [99.9577, 12.5684], region: '중부', label: '해변 · 휴양 도시', zoom: 11 },
  { id: 'phuket', name: '푸껫', en: 'Phuket', th: 'ภูเก็ต', province: 'Phuket', center: [98.3381, 7.9519], region: '남부', label: '안다만해 · 섬', zoom: 9 },
  { id: 'krabi', name: '끄라비', en: 'Krabi', th: 'กระบี่', province: 'Krabi', center: [98.9063, 8.0863], region: '남부', label: '안다만해 · 해안', zoom: 10 },
  { id: 'samui', name: '코사무이', en: 'Koh Samui', th: 'เกาะสมุย', province: 'Surat Thani', center: [100.0136, 9.5120], region: '남부', label: '타이만 · 섬', zoom: 10 },
];
// Approximate travel areas, not administrative boundaries.
export const travelAreas = [
  ...cities.map(city => ({ ...city, radiusKm: city.id === 'chiang-mai' || city.id === 'chiang-rai' ? 35 : city.id === 'bangkok' ? 25 : city.id === 'phuket' ? 22 : 15 })),
  { id: 'phi-phi', name: '피피', en: 'Phi Phi Islands', province: 'Krabi', center: [98.7784, 7.7407], zoom: 12, radiusKm: 7 },
  { id: 'phangan', name: '코팡안', en: 'Koh Phangan', province: 'Surat Thani', center: [100.029, 9.7319], zoom: 11, radiusKm: 10 },
  { id: 'tao', name: '코타오', en: 'Koh Tao', province: 'Surat Thani', center: [99.838, 10.0956], zoom: 12, radiusKm: 5 },
  { id: 'lanta', name: '코란타', en: 'Koh Lanta', province: 'Krabi', center: [99.079, 7.602], zoom: 11, radiusKm: 12 },
  { id: 'samet', name: '코사멧', en: 'Koh Samet', province: 'Rayong', center: [101.451, 12.567], zoom: 12, radiusKm: 5 },
];
export const thailandBounds: [[number, number], [number, number]] = [[97.34, 5.61], [105.64, 20.47]];
