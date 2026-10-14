const cache=new Map<string,Promise<any>>();
export async function renderCameraWeather(element:HTMLElement,center:[number,number]|null,ko:boolean){
 const identity=center?.join(',');element.dataset.weatherIdentity=identity||'';element.replaceChildren();element.hidden=!center;if(!center)return;
 const title=document.createElement('h3');title.textContent=ko?'지역 날씨':'Local weather';element.append(title);
 const loading=document.createElement('p');loading.textContent=ko?'날씨 정보를 불러오는 중':'Loading weather';element.append(loading);
 try{
  if(!cache.has(identity!)){const query=new URLSearchParams({latitude:String(center[1]),longitude:String(center[0]),current:'temperature_2m,weather_code,wind_speed_10m',hourly:'temperature_2m,precipitation_probability',forecast_days:'1',timezone:'Asia/Bangkok'});cache.set(identity!,fetch('https://api.open-meteo.com/v1/forecast?'+query,{signal:AbortSignal.timeout(10000)}).then(r=>{if(!r.ok)throw Error();return r.json();}));}
  const data=await cache.get(identity!);if(element.dataset.weatherIdentity!==identity)return;
  if(typeof data.current?.temperature_2m!=='number')throw Error();loading.remove();
  const temp=document.createElement('strong');temp.textContent=Math.round(data.current.temperature_2m)+'°C';element.append(temp);
  const text=document.createElement('p');text.textContent=(ko?'바람 ':'Wind ')+data.current.wind_speed_10m+' km/h · '+data.current.time.replace('T',' ')+' (Thailand)';element.append(text);
  const hourly=document.createElement('div');hourly.className='weather-hourly';const start=Math.max(0,data.hourly.time.findIndex((v:string)=>v>=data.current.time));for(let i=start;i<Math.min(start+6,data.hourly.time.length);i++){const span=document.createElement('span');span.textContent=data.hourly.time[i].split('T')[1]+' '+Math.round(data.hourly.temperature_2m[i])+'° · '+data.hourly.precipitation_probability[i]+'%';hourly.append(span);}element.append(hourly);
  const source=document.createElement('a');source.href='https://open-meteo.com/';source.target='_blank';source.rel='noopener noreferrer';source.textContent=ko?'Open-Meteo 모델 예보 · 카메라 주변 참고 위치 기준':'Open-Meteo model forecast · camera reference area';element.append(source);
 }catch{if(element.dataset.weatherIdentity===identity){loading.textContent=ko?'날씨 정보를 불러오지 못했어요. 잠시 후 다시 확인해 주세요.':'Weather could not load. Please try again later.';}}
}
document.querySelectorAll<HTMLElement>('[data-camera-weather]').forEach(el=>{const lng=Number(el.dataset.lng),lat=Number(el.dataset.lat);if(Number.isFinite(lng)&&Number.isFinite(lat)&&el.dataset.lng)void renderCameraWeather(el,[lng,lat],document.documentElement.lang.startsWith('ko'));});
