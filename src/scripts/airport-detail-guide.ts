import {fitMap,constrainMap,zoomMap} from '../lib/airport-map-viewport.mjs';
type FloorMap={id:string;label:string;image:string};
type FacilityPin={id:string;mapId:string;x:number;y:number;label:string;detail:string};
document.querySelectorAll<HTMLElement>('[data-airport-korean-guide]').forEach(guide=>{
 const map=guide.querySelector<HTMLElement>('[data-guide-map]');if(!map)return;
 const mapCopy=JSON.parse(map.dataset.mapCopy||'{}');
 const facilityCopy=JSON.parse(guide.dataset.facilityCopy||'{}');
 const maps=JSON.parse(map.dataset.mapOptions||'[]') as FloorMap[];
 const pins=JSON.parse(map.dataset.mapPins||'[]') as FacilityPin[];
 const select=map.querySelector<HTMLSelectElement>('[data-floor-select]')!;
 const image=map.querySelector<HTMLImageElement>('[data-floor-image]')!;
 const layer=map.querySelector<HTMLElement>('[data-pin-layer]')!;
 const description=map.querySelector<HTMLElement>('[data-pin-description]')!;
 const canvas=map.querySelector<HTMLElement>('[data-map-canvas]')!;
 const viewport=map.querySelector<HTMLElement>('[data-map-viewport]')!;
 let view=fitMap(1,1,1,1);
 const pointers=new Map<number,{x:number;y:number}>();
 const point=(event:PointerEvent|WheelEvent|MouseEvent)=>{const rect=viewport.getBoundingClientRect();return {x:event.clientX-rect.left,y:event.clientY-rect.top};};
 const render=()=>{canvas.style.transform=`translate(${view.x}px,${view.y}px) scale(${view.scale})`;};
 const reset=()=>{pointers.clear();const width=viewport.clientWidth;view=fitMap(width,viewport.clientHeight,width,width*(image.naturalHeight||1)/(image.naturalWidth||1));render();};
 image.addEventListener('load',reset);
 new ResizeObserver(reset).observe(viewport);
 viewport.addEventListener('wheel',event=>{event.preventDefault();const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?viewport.clientHeight:1);view=zoomMap(view,view.scale*Math.exp(-Math.max(-500,Math.min(500,delta))*.002),point(event));render();},{passive:false});
 viewport.addEventListener('pointerdown',event=>{if((event.target as Element).closest('button')||(event.pointerType==='mouse'&&event.button!==0))return;viewport.focus({preventScroll:true});pointers.set(event.pointerId,point(event));viewport.setPointerCapture(event.pointerId);});
 viewport.addEventListener('pointermove',event=>{
  const previous=pointers.get(event.pointerId);if(!previous)return;
  const before=[...pointers.values()];pointers.set(event.pointerId,point(event));const after=[...pointers.values()];
  if(before.length===1){view=constrainMap({...view,x:view.x+after[0].x-previous.x,y:view.y+after[0].y-previous.y});}
  else if(before.length===2){const mid=(points:{x:number;y:number}[])=>({x:(points[0].x+points[1].x)/2,y:(points[0].y+points[1].y)/2});const distance=(points:{x:number;y:number}[])=>Math.hypot(points[0].x-points[1].x,points[0].y-points[1].y);view=zoomMap(view,view.scale*distance(after)/Math.max(1,distance(before)),mid(before),mid(after));}
  render();
 });
 const release=(event:PointerEvent)=>pointers.delete(event.pointerId);
 viewport.addEventListener('pointerup',release);viewport.addEventListener('pointercancel',release);viewport.addEventListener('lostpointercapture',release);
 viewport.addEventListener('dblclick',event=>{if((event.target as Element).closest('button'))return;view=zoomMap(view,view.scale*2,point(event));render();});
 viewport.addEventListener('keydown',event=>{if(event.target!==viewport)return;const center={x:view.width/2,y:view.height/2};if(['+','=','-','_'].includes(event.key)){event.preventDefault();view=zoomMap(view,view.scale*(['-','_'].includes(event.key)?.8:1.25),center);}else if(event.key==='Home'){event.preventDefault();reset();return;}else if(event.key.startsWith('Arrow')){event.preventDefault();view=constrainMap({...view,x:view.x+(event.key==='ArrowLeft'?50:event.key==='ArrowRight'?-50:0),y:view.y+(event.key==='ArrowUp'?50:event.key==='ArrowDown'?-50:0)});}else return;render();});
 function showMap(pinId?:string){
  const floor=maps.find(m=>m.id===select.value);if(!floor)return;
  image.src=floor.image;image.alt=mapCopy.alt?mapCopy.alt.replace('{label}',floor.label):`${floor.label} 공식 층별 지도`;
  layer.replaceChildren();
  pins.filter(p=>p.mapId===floor.id).forEach((p,i)=>{const button=document.createElement('button');button.type='button';button.className='map-pin';button.style.left=p.x+'%';button.style.top=p.y+'%';button.textContent=String(i+1);button.setAttribute('aria-label',`${p.label}: ${p.detail}`);button.title=p.label;button.addEventListener('click',()=>description.textContent=p.label+' · '+p.detail);layer.append(button);});
  const pin=pins.find(p=>p.id===pinId);description.textContent=pin?pin.label+' · '+pin.detail:(mapCopy.status?mapCopy.status.replace('{label}',floor.label):floor.label+' 지도예요.');
  reset();
 }
 select.addEventListener('change',()=>showMap());
 guide.querySelectorAll<HTMLButtonElement>('[data-map-target]').forEach(button=>button.addEventListener('click',()=>{select.value=button.dataset.mapTarget!;showMap(button.dataset.targetPin);map.scrollIntoView({behavior:'smooth',block:'start'});}));
 showMap();
 const search=guide.querySelector<HTMLInputElement>('[data-facility-search]')!;
 const floorFilter=guide.querySelector<HTMLSelectElement>('[data-facility-floor]')!;
 const category=guide.querySelector<HTMLSelectElement>('[data-facility-category]')!;
 const count=guide.querySelector<HTMLElement>('[data-facility-count]')!;
 if(!search||!floorFilter||!category||!count)return;
 const rows=[...guide.querySelectorAll<HTMLElement>('[data-facility-row]')];
 function filter(){const query=search.value.trim().toLowerCase().replace(/\s/g,'');let total=0;for(const row of rows){row.hidden=!!((floorFilter.value&&row.dataset.mapId!==floorFilter.value)||(category.value&&row.dataset.category!==category.value)||!row.dataset.search?.includes(query));if(!row.hidden)total++;}count.textContent=total?(facilityCopy.count?facilityCopy.count.replace('{n}',String(total)):`${total}개 시설 항목이 있어요.`):(facilityCopy.empty||'해당 조건의 등록 시설이 없어요. 공항에 시설이 없다는 뜻은 아니에요.');}
 search.addEventListener('input',filter);floorFilter.addEventListener('change',filter);category.addEventListener('change',filter);filter();showMap();
});
