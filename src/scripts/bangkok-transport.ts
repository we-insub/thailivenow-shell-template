import {transportText,transportLink,transportHTML,transportData,transportReady} from './transport-locale';
import { Map } from './resilient-map';
import railDestinationsSource from '../data/transport/rail-destinations.json';
import destinationStations from '../data/transport/bangkok-stations.json';
import { NavigationControl, Popup, setWorkerUrl } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-csp-worker.js?url';
import 'maplibre-gl/dist/maplibre-gl.css';
void transportReady.then(()=>{

setWorkerUrl(workerUrl);
const railDestinations=transportData(railDestinationsSource);
const container=document.getElementById('bangkok-rail-map');
if(container){
 const lines=JSON.parse(container.dataset.lines!);
 const map=new Map({container,center:[100.55,13.78],zoom:10.4,scrollZoom:false});
 map.addControl(new NavigationControl(),'top-right');
 let data:any;let selected:string|null=null;let popup:Popup|undefined;
 const status=document.getElementById('rail-map-status')!;
 const panel=document.getElementById('rail-selection')!;
 const esc=(x:string)=>x.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
 const lineName=(id:string)=>lines.find((l:any)=>l.id===id)?.name||id;
 const choose=(f:any)=>{
  const p=f.properties;const memberships=JSON.parse(p.lines_json||'[]').filter((id:string)=>!selected||id===selected);
  const nearbyPlaces=railDestinations.filter(d=>d.stationIds.includes(p.station_id));
  const nearbyContent=nearbyPlaces.length?`<p><strong>주변 명소·호텔</strong></p>${nearbyPlaces.map(d=>`<p>${esc(d.name)} · ${esc(d.category)}</p>`).join('')}`:'';
  const content=`<strong>${esc(p.name)}</strong><a href="/ko/transport/bangkok/stations/${p.station_id}/">역 상세페이지 →</a><p>${esc(p.name_th||'')}</p>${memberships.map((id:string)=>`<a href="/ko/transport/bangkok/lines/${id}/">${esc(lineName(id))} · 노선 안내 →</a>`).join('')}<a href="/ko/transport/guides/rail/${selected ? `?line=${encodeURIComponent(selected)}` : ''}">표 구매·탑승 방법 →</a>${/Itsaraphap/i.test(p.name)?'<a href="/ko/attractions/wat-arun/">왓아룬 · 도보 이동 안내 →</a>':''}<a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${f.geometry.coordinates[1]},${f.geometry.coordinates[0]}&travelmode=transit">이 역까지 길찾기 ↗</a>`;
  panel.innerHTML=transportHTML(content+nearbyContent);popup?.remove();popup=new Popup({offset:12}).setLngLat(f.geometry.coordinates).setHTML(transportHTML(content+nearbyContent)).addTo(map);map.flyTo({center:f.geometry.coordinates,zoom:14});
 };
 const filter=(id:string|null)=>{
  selected=id;popup?.remove();
  const url=new URL(window.location.href);if(id)url.searchParams.set('line',id);else url.searchParams.delete('line');history.replaceState(null,'',url);
  document.querySelectorAll<HTMLAnchorElement>('[data-rail-guide-link]').forEach(link=>{link.href=transportLink(`/ko/transport/guides/rail/${id?`?line=${encodeURIComponent(id)}`:''}`);});
  document.querySelectorAll<HTMLButtonElement>('[data-rail-line]').forEach(b=>{const active=b.dataset.railLine===id;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll<HTMLElement>('[data-rail-guide-lines]').forEach(element=>{const ids=element.dataset.railGuideLines!.split(/\s+/);element.hidden=!!id&&!ids.includes('all')&&!ids.includes(id);});
  const guideStatus=document.getElementById('rail-guide-selection');
  if(guideStatus){guideStatus.replaceChildren();guideStatus.textContent=transportText(id ? `${lineName(id)} · 표 구매와 탑승 안내` : '전체 노선 이용 안내 · 노선을 선택하면 해당 안내만 표시돼요.');if(id&&!document.querySelector(`[data-rail-guide-section]:not([hidden])`)){const link=document.createElement('a');link.href=transportLink(`/ko/transport/bangkok/lines/${encodeURIComponent(id)}/`);link.textContent=transportText(' 노선별 이용 안내 →');guideStatus.append(link);}}
  panel.replaceChildren();const title=document.createElement('strong');title.textContent=transportText(id?lineName(id):'역을 선택해 보세요');panel.append(title);
  document.getElementById('rail-search-results')?.replaceChildren();
  map.getLayer('rail-lines') && map.setFilter('rail-lines',id?['==',['get','line_id'],id]:null);
  map.getLayer('rail-stations') && map.setFilter('rail-stations',id?['in',id,['get','lines']]:null);
  map.getLayer('rail-labels') && map.setFilter('rail-labels',id?['in',id,['get','lines']]:null);
  status.textContent=transportText(id?`${lineName(id)} · 역을 눌러보세요`:'전체 철도 노선 · 확대하면 역 이름이 보여요');
  if(data){const coords=data.routes.features.filter((f:any)=>!id||f.properties.line_id===id).flatMap((f:any)=>f.geometry.coordinates);if(coords.length)map.fitBounds([[Math.min(...coords.map((c:any)=>c[0])),Math.min(...coords.map((c:any)=>c[1]))],[Math.max(...coords.map((c:any)=>c[0])),Math.max(...coords.map((c:any)=>c[1]))]],{padding:40,maxZoom:14});}
 };
 document.querySelectorAll<HTMLButtonElement>('[data-focus-rail-station]').forEach(button=>button.addEventListener('click',()=>{const station=destinationStations.find(s=>s.properties.station_id===button.dataset.focusRailStation);if(!station)return;filter(station.properties.lines[0]);choose(station);container.scrollIntoView({behavior:'smooth',block:'center'});}));
 map.on('load',async()=>{try{
  const response=await fetch('/data/bangkok-rail.geojson');if(!response.ok)throw Error('data');data=await response.json();
  map.addSource('rail-routes',{type:'geojson',data:data.routes});map.addSource('rail-stops',{type:'geojson',data:data.stations});
  map.addLayer({id:'rail-lines',type:'line',source:'rail-routes',paint:{'line-color':['get','color'],'line-width':['interpolate',['linear'],['zoom'],9,2.5,14,5]}});
  map.addLayer({id:'rail-stations',type:'circle',source:'rail-stops',paint:{'circle-color':'#fff','circle-radius':['interpolate',['linear'],['zoom'],10,3,15,6],'circle-stroke-width':2,'circle-stroke-color':'#253545'}});
  map.addLayer({id:'rail-labels',type:'symbol',source:'rail-stops',minzoom:12,layout:{'text-field':['get','name'],'text-font':['Noto Sans Regular'],'text-size':12,'text-offset':[0,1.3],'text-anchor':'top'},paint:{'text-color':'#253545','text-halo-color':'#fff','text-halo-width':2}});
  map.on('click','rail-stations',e=>{if(e.features?.[0])choose(e.features[0]);});
  map.on('mouseenter','rail-stations',()=>map.getCanvas().style.cursor='pointer');map.on('mouseleave','rail-stations',()=>map.getCanvas().style.cursor='');
  filter(selected);
 }catch{status.textContent=transportText('지도를 불러오지 못했어요. 아래 노선별 안내를 이용해 주세요.');}});
 const initialLine=new URLSearchParams(window.location.search).get('line') || window.location.pathname.match(/\/bangkok\/lines\/([^/]+)\//)?.[1];
 if(initialLine&&lines.some((line:any)=>line.id===initialLine))filter(initialLine);
 document.querySelectorAll<HTMLButtonElement>('[data-rail-line]').forEach(b=>b.addEventListener('click',()=>filter(b.dataset.railLine!)));
 document.getElementById('show-all-rail')?.addEventListener('click',()=>filter(null));
 document.getElementById('rail-search')?.addEventListener('input',e=>{const q=(e.target as HTMLInputElement).value.trim().toLowerCase();const result=document.getElementById('rail-search-results')!;result.replaceChildren();if(!q||!data)return;data.stations.features.filter((f:any)=>(!selected||JSON.parse(f.properties.lines_json||'[]').includes(selected))&&`${f.properties.name} ${f.properties.name_th} ${f.properties.ref||''}`.toLowerCase().includes(q)).slice(0,12).forEach((f:any)=>{const b=document.createElement('button');b.textContent=transportText(f.properties.name);b.addEventListener('click',()=>choose(f));result.append(b);});});
}

});
