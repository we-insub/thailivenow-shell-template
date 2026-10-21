export const attractionCategories=[
 {id:'temples',name:'사원',number:'01',text:'금빛 불탑과 벽화가 있는 전각, 벽돌만 남은 옛 사원까지 서로 다른 모습을 만날 수 있어요. 지금도 예배가 이어지는 사원과 유적을 구분해 골라보세요.'},
 {id:'rooftops',name:'루프탑·전망대',number:'02',text:'높은 곳에서 도시를 내려다보고 싶을 때 골라보세요. 전망만 보는 시설과 식사·음료를 즐기는 루프탑은 입장권과 예약 조건이 달라요.',href:'/ko/rooftops/',action:'도시별 루프탑·전망대 보기'},
 {id:'zoos-aquariums',name:'동물원·아쿠아리움',number:'03',text:'넓은 동물원을 이동하며 동물을 보거나 수족관의 전시와 수중 터널을 둘러볼 수 있어요. 아이와 함께라면 이동 방식과 별도 체험을 먼저 생각해보세요.'},
 {id:'markets',name:'야시장·시장',number:'04',text:'먹거리와 공예품이 모이는 야시장부터 운하 주변의 수상시장까지 있어요. 주말에만 열리는 장과 매일 영업하는 시장은 방문 날짜부터 다르게 잡아야 해요.'},
 {id:'museums-heritage',name:'박물관·역사유적',number:'05',text:'옛집 안의 미술품을 보거나 오래된 왕도와 사원 터를 걸어보세요. 실내 전시를 보는 박물관과 여러 지점을 이동하는 역사공원은 관람 방식이 달라요.',href:'/ko/attractions/categories/museums-heritage/',action:'박물관·역사유적 보기'},
 {id:'theme-water-parks',name:'테마파크·워터파크',number:'06',text:'놀이기구나 물놀이로 하루를 보내고 싶을 때 어울려요. 어린이 표를 사더라도 기구마다 탈 수 있는 키와 동반 조건은 따로 정해져 있어요.'},
 {id:'streets-neighborhoods',name:'거리·동네',number:'07',text:'오래된 상점가와 골목을 걸으며 카페·음식점·건축을 함께 보는 여행이에요. 낮에 걷는 동네와 저녁에 장이 서는 거리는 방문 분위기도 달라져요.'}
];
export const categoryUrl=id=>id==='rooftops'?'/ko/rooftops/':`/ko/attractions/categories/${id}/`;
