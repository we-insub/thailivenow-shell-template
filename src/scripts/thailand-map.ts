import {cameraMatchesMapCategory, venueMatchesMapCategory, mapPointBounds} from '../lib/home-map-filters.mjs';
import {cameraCardPreview} from '../lib/camera-video-preview.mjs';
import originalEditorial from '../data/camera-editorial-ko.json';
import {cameraViewingCopy} from '../lib/camera-viewing-copy.mjs';
import {renderCameraWeather} from './camera-weather';
import { Map } from './resilient-map';
import { NavigationControl, AttributionControl, Marker, Popup, setWorkerUrl } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-csp-worker.js?url';
import 'maplibre-gl/dist/maplibre-gl.css';
import { travelAreas, provinces, thailandBounds } from '../data/map';
import originalVenues from '../data/rooftops.json';
import beaches from '../data/beaches.json';
import { cameras } from '../data/cameras';
import type { GeoJSONSource } from 'maplibre-gl';

import { isLocale } from '../i18n/locales';
import { getUI, cameraTitle, cameraStatus, categoryName, placeName, previewLabel, sourceText } from '../i18n/ui';
const locale=isLocale(document.documentElement.dataset.locale) ? document.documentElement.dataset.locale : 'en';
const localizedModel=JSON.parse(document.querySelector('[data-locale-camera-model]')?.textContent||'null');
const cameraEditorial=localizedModel?.editorial||originalEditorial;
const venues=localizedModel?.venues||originalVenues;
const editorialEnabled=locale==='ko'||!!localizedModel;
const ui=getUI(locale);
setWorkerUrl(workerUrl);
const container = document.getElementById('thailand-map');
if (container) {
  const search = document.querySelector<HTMLInputElement>('#city-search')!;
  const select = document.querySelector<HTMLSelectElement>('#province-select')!;
  const status = document.getElementById('map-status')!;
  const errorPanel = document.getElementById('map-error')!;
  const name = document.getElementById('selected-name')!;
  const description = document.getElementById('selected-description')!;
  const cards = [...document.querySelectorAll<HTMLButtonElement>('[data-camera]')];
  let selectedArea = '';
  let category = 'all';
  let camerasVisible = true;
  const cameraToggle = document.querySelector<HTMLButtonElement>('#toggle-cameras')!;
  type Beach = { id: string; name: string; english?: string; pilot?: boolean; lat: number; lng: number };
  const mappedBeaches = (beaches as Beach[]).filter(beach => beach.pilot && Number.isFinite(beach.lat) && Number.isFinite(beach.lng) && beach.lat >= 5 && beach.lat <= 21 && beach.lng >= 97 && beach.lng <= 106);
  let beachesVisible = false;
  const beachPins: Marker[] = [];
  const beachToggle = document.querySelector<HTMLButtonElement>('#toggle-beaches');
  const beachStatus = document.getElementById('beach-status');
  beachToggle?.addEventListener('click', () => {
    beachesVisible = !beachesVisible;
    beachToggle.setAttribute('aria-pressed', String(beachesVisible));
    beachToggle.classList.toggle('active', beachesVisible);
    for (const marker of beachPins) {
      if (beachesVisible && map) marker.addTo(map);
      else { marker.getPopup()?.remove(); marker.remove(); }
    }
    if (beachStatus) {
      beachStatus.hidden = !beachesVisible;
      beachStatus.textContent = mappedBeaches.length
        ? (locale === 'ko' ? `해변 ${mappedBeaches.length}곳 · 핀을 눌러 이용 안내 확인` : `${mappedBeaches.length} beaches · select a pin for details`)
        : (locale === 'ko' ? '해변 위치·이용 정보를 확인 중입니다. 검증이 끝나면 핀이 추가됩니다.' : 'Beach locations and details are being verified. Pins will appear when ready.');
    }
  });
  const cameraLayers = ['camera-clusters','camera-cluster-count','camera-points','camera-selected'];
  function setCameraVisibility(visible: boolean) {
    camerasVisible = visible;
    cameraToggle.classList.toggle('active', visible);
    cameraToggle.setAttribute('aria-pressed', String(visible));
    cameraLayers.forEach(layer => { if (map?.getLayer(layer)) map.setLayoutProperty(layer, 'visibility', visible ? 'visible' : 'none'); });
  }
  const tourismPins:{venue:typeof venues[number];marker:Marker}[]=[];
  function matchingVenues(){
    const province=provinces.find(p=>String(p.id)===select.value);
    const city=travelAreas.find(city=>city.name===selectedArea);
    const query=search.value.trim().toLocaleLowerCase();
    return venues.filter(venue=>venueMatchesMapCategory(venue,category)&&(!province||travelAreas.find(city=>city.id===venue.city)?.province===province.name)&&(!city||venue.city===city.id)&&`${venue.name} ${venue.english} ${venue.building}`.toLocaleLowerCase().includes(query));
  }
  function refreshVenuePins(){
    const ids=new Set(matchingVenues().map(venue=>venue.id));
    for(const {venue,marker} of tourismPins){if(ids.has(venue.id)&&map)marker.addTo(map);else {marker.getPopup()?.remove();marker.remove();}}
  }
  function mode(){
    const tourism=category==='tourism';if(!tourism)document.querySelectorAll<HTMLElement>('[data-tourism-city]').forEach(card=>card.hidden=false);document.querySelector('.thailand-explorer')!.classList.toggle('tourism-mode',tourism);document.getElementById('home-tourism-panel')!.hidden=!tourism;document.querySelector<HTMLElement>('.camera-map-results')!.hidden=tourism;
    setCameraVisibility(!tourism);
    for(const layer of ['travel-area-fill','travel-area-outline','travel-dots','travel-labels','province-fill','province-lines','province-selected'])if(map?.getLayer(layer))map.setLayoutProperty(layer,'visibility','none');
    refreshVenuePins();
  }
  cameraToggle.addEventListener('click', () => setCameraVisibility(!camerasVisible));
  const sourceLink = document.querySelector<HTMLAnchorElement>('#selected-source')!;
  const detailLink = document.querySelector<HTMLAnchorElement>('#selected-detail')!;
  const shortcuts = [...document.querySelectorAll<HTMLButtonElement>('[data-map-city]')];
  let map: Map | undefined;
  let selectedProvince: number | null = null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const duration = reducedMotion ? 0 : 650;

  function paintSelection(cityId = 'all') {
    cards.forEach(card => card.setAttribute('aria-pressed', String(card.dataset.camera === cityId)));
    shortcuts.forEach(button => {
      const active = button.dataset.mapCity === cityId;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

  }
  function highlight(id: number | null) {
    selectedProvince = id;
    if (map?.getLayer('province-selected')) map.setFilter('province-selected', ['==', ['id'], id ?? -1]);
  }
  function matchingCameras() {
    const query = search.value.trim().toLocaleLowerCase();
    const province = provinces.find(p => String(p.id) === select.value);
    return cameras.filter(camera => (!province || camera.province === province.name) && (!selectedArea || camera.area === selectedArea) && cameraMatchesMapCategory(camera,category) && `${camera.title} ${cameraTitle(camera,locale)} ${camera.area} ${placeName(camera.area,locale)} ${camera.province} ${camera.sourceName}`.toLocaleLowerCase().includes(query));
  }
  function cameraData() {
    return { type: 'FeatureCollection' as const, features: matchingCameras().filter(camera => camera.center !== null).map(camera => ({ type: 'Feature' as const, geometry: { type: 'Point' as const, coordinates: camera.center }, properties: { cameraId: camera.id, title: camera.title, verified:camera.playback==='verified' } })) };
  }
  let homeMapReady=false;
  let resultsScope:'view'|'all'='all';
  let resultsLimit=12;
  let selectedResult='';
  function cameraInView(camera:typeof cameras[number]){if(!map||!homeMapReady)return true;if(!camera.center)return false;return map.getBounds().contains(camera.center);}
  function updateResults(){
    const matching=matchingCameras();const visible=resultsScope==='view'?matching.filter(cameraInView):matching;
    const ids=new Set((resultsScope==='all'?visible:visible.slice(0,resultsLimit)).map(c=>c.id));
    document.querySelectorAll<HTMLElement>('[data-map-result]').forEach(card=>{card.hidden=!ids.has(card.dataset.mapResult!);const selected=card.dataset.mapResult===selectedResult;card.classList.toggle('is-selected',selected);card.querySelector<HTMLElement>('[data-result-selected]')!.hidden=!selected;});
    const count=document.getElementById('map-results-count');if(count)count.textContent=(editorialEnabled?(resultsScope==='view'&&homeMapReady?'현재 지도 범위':'선택 조건 전체'):(resultsScope==='view'&&homeMapReady?'Current map area':'All matching cameras'))+': '+visible.length;
    const inView=document.getElementById('map-in-view');if(inView)inView.textContent=String(matching.filter(cameraInView).length);
    document.getElementById('map-results-empty')!.hidden=visible.length>0;
    document.getElementById('map-results-more')!.hidden=resultsScope==='all'||visible.length<=resultsLimit;
    document.querySelectorAll<HTMLButtonElement>('[data-result-scope]').forEach(btn=>{btn.disabled=btn.dataset.resultScope==='view'&&!homeMapReady;btn.setAttribute('aria-pressed',String(btn.dataset.resultScope===(homeMapReady?resultsScope:'all')));});
  }
  document.querySelectorAll<HTMLButtonElement>('[data-result-scope]').forEach(btn=>btn.addEventListener('click',()=>{resultsScope=btn.dataset.resultScope as 'view'|'all';resultsLimit=12;updateResults();}));
  document.getElementById('map-results-more')?.addEventListener('click',()=>{resultsLimit+=12;updateResults();});
  function filterCameras() {
    resultsLimit=12;
    refreshVenuePins();
    updateResults();

    const matches = matchingCameras();
    const ids = new Set(matches.map(camera => camera.id));
    document.querySelectorAll<HTMLElement>('[data-camera-row], [data-camera-gallery]').forEach(row => { row.hidden = !ids.has(row.dataset.cameraRow ?? row.dataset.cameraGallery!); });
    document.getElementById('camera-count')!.textContent = String(matches.length);
    document.getElementById('no-results')!.hidden = matches.length > 0;
    const source = map?.getSource('cameras') as GeoJSONSource | undefined;
    source?.setData(cameraData());
  }
  const explorerPanel=document.querySelector<HTMLElement>('.thailand-explorer .explorer-panel')!;
  const selection=document.getElementById('selected-place')!;
  const mobileList=document.getElementById('mobile-camera-list')!;
  mobileList.addEventListener('click',()=>{const open=explorerPanel.classList.toggle('mobile-open');mobileList.setAttribute('aria-expanded',String(open));});
  document.getElementById('close-selection')!.addEventListener('click',clearCamera);
  function clearCamera() {
    selectedResult='';updateResults();
    selection.hidden=true;
    explorerPanel.classList.remove('has-selection');
    const url=new URL(location.href);url.searchParams.delete('camera');history.replaceState(null,'',url);

    sourceLink.hidden = true;
    detailLink.hidden = true;
    if (map?.getLayer('camera-selected')) map.setFilter('camera-selected', ['==', ['get', 'cameraId'], '']);
  }
  function chooseCamera(id: string) {
    const camera = cameras.find(camera => camera.id === id);
    if (!camera) return;
    selectedResult=id;updateResults();
    selection.hidden=false;
    explorerPanel.classList.add('has-selection');
    const preview=document.querySelector<HTMLImageElement>('#selected-preview')!;
    const displayPreview=editorialEnabled?cameraCardPreview(camera):camera.preview;
    preview.hidden=!displayPreview?.url;
    if(displayPreview){preview.src=displayPreview.url;preview.alt=(editorialEnabled?cameraEditorial[camera.id].displayTitle:cameraTitle(camera,locale))+' · '+displayPreview.label;}
    const credit=document.querySelector<HTMLAnchorElement>('#selected-credit')!;
    credit.hidden=!displayPreview;
    if(displayPreview){credit.href=displayPreview.sourceUrl;credit.textContent=(editorialEnabled?displayPreview.label:previewLabel(displayPreview.label,locale))+' · '+(editorialEnabled?displayPreview.credit:sourceText(displayPreview.credit,locale))+('license' in displayPreview?' · '+displayPreview.license:'');}

    const save=document.querySelector<HTMLElement>('#selected-place [data-save-camera]')!;save.dataset.saveCamera=id;

    const url=new URL(location.href);url.searchParams.set('camera',id);history.replaceState(null,'',url);

    highlight(provinces.find(p => p.name === camera.province)?.id ?? null);
    paintSelection(id);
    name.textContent = editorialEnabled?cameraEditorial[camera.id].displayTitle:cameraTitle(camera,locale);
    description.textContent = editorialEnabled?cameraEditorial[camera.id].preview:ui.cameraIntro;
    document.getElementById('selected-region')!.textContent=placeName(camera.area,locale);
    document.getElementById('selected-location')!.textContent=editorialEnabled?cameraEditorial[camera.id].location:ui.locationNote;
    document.getElementById('selected-status')!.textContent=editorialEnabled?`${cameraViewingCopy(camera).label} · 자료 확인일 ${camera.checked} · 현재 재생은 제공 사이트에서 살펴보세요.`:cameraStatus(camera,locale)+' · '+camera.checked;
    document.getElementById('selected-tags')!.textContent=categoryName(camera.category,locale);
    void renderCameraWeather(document.getElementById('selected-weather')!,camera.center,editorialEnabled);
    const access=document.getElementById('selected-access')!;access.hidden=!camera.center;access.replaceChildren();
    if(camera.center){const link=document.createElement('a');link.href='https://www.google.com/maps/dir/?api=1&destination='+camera.center[1]+','+camera.center[0]+'&travelmode=transit';link.target='_blank';link.rel='noopener noreferrer';link.textContent=editorialEnabled?'참고 위치까지 대중교통 경로 확인 ↗':'Transit directions to the reference location ↗';access.append(link);}
    const operator=document.querySelector<HTMLAnchorElement>('#selected-operator')!;operator.href=camera.sourceUrl;operator.textContent=editorialEnabled?camera.sourceName:sourceText(camera.sourceName,locale);
    document.querySelectorAll<HTMLElement>('#selected-place [data-compare-camera]').forEach(button=>button.dataset.compareCamera=id);
    document.querySelectorAll<HTMLElement>('#selected-place [data-share-camera]').forEach(button=>button.dataset.shareCamera=id);

    if(editorialEnabled){sourceLink.textContent=cameraViewingCopy(camera).button+' ↗';detailLink.textContent='장소와 풍경 보기 →';}
    sourceLink.href = editorialEnabled?cameraViewingCopy(camera).url:camera.sourceUrl;
    sourceLink.hidden = false;
    detailLink.href = `/${locale}/cameras/${id}/`;
    detailLink.hidden = false;
    document.dispatchEvent(new Event('saved-cameras-updated'));
    if (map?.getLayer('camera-selected')) map.setFilter('camera-selected', ['==', ['get', 'cameraId'], id]);
    if (camera.center) map?.flyTo({ center: camera.center, zoom: 12, duration, padding: { top: 70, bottom: 30, left: 0, right: 0 } });
  }
  function fitCategoryPins(animationDuration = duration) {
    const points: [number, number][] = [
      ...matchingCameras().flatMap(camera => camera.center ? [camera.center] : []),
      ...matchingVenues().map(venue => [venue.lng, venue.lat] as [number, number]),
    ];
    if (!map) return;
    const bounds=mapPointBounds(points);
    map.fitBounds(bounds || thailandBounds, {padding: {top: 100, bottom: 65, left: 55, right: 55}, maxZoom: 11, duration: animationDuration});
  }
  function reset() {
    const resetUrl=new URL(location.href);resetUrl.searchParams.delete('city');history.replaceState(null,'',resetUrl);

    setCameraVisibility(true);
    select.value = '';
    search.value = '';
    selectedArea = '';
    category = 'all';
    resultsScope = 'all';
    mode();
    document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach(button => { const active = button.dataset.category === 'all'; button.classList.toggle('active', active); button.setAttribute('aria-pressed',String(active)); });
    clearCamera();
    highlight(null);
    paintSelection();
    filterCameras();
    name.textContent = ui.allThailand;
    description.textContent = `${ui.cameraList} · ${cameras.length}`;
    fitCategoryPins();
  }
  function chooseCity(id: string) {
    const city = travelAreas.find(c => c.id === id);
    if (!city) return;
    const province = provinces.find(p => p.name === city.province);
    select.value = province ? String(province.id) : '';
    search.value = '';
    selectedArea = city.name;
    if(category==='tourism')document.querySelectorAll<HTMLElement>('[data-tourism-city]').forEach(card=>card.hidden=card.dataset.tourismCity!==city.id);
    clearCamera();
    filterCameras();
    highlight(province?.id ?? null);
    paintSelection(id);
    name.textContent = placeName(city.name,locale);
    description.textContent = ui.selectedRegion;
    map?.flyTo({ center: city.center as [number, number], zoom: city.zoom, duration, padding: { top: 55, bottom: 90, left: 0, right: 0 } });
  }
  function chooseProvince(id: number) {
    const province = provinces.find(p => p.id === id);
    if (!province) return;
    select.value = String(id);
    selectedArea = '';
    clearCamera();
    highlight(id);
    paintSelection('province');
    filterCameras();
    name.textContent = select.selectedOptions[0].textContent ?? province.name;
    description.textContent = ui.selectedRegion;
    const [west, south, east, north] = province.bounds;
    map?.fitBounds([[west, south], [east, north]], { padding: { top: 90, bottom: 150, left: 35, right: 45 }, maxZoom: 10, duration });
  }
  cards.forEach(card => card.addEventListener('click', () => chooseCamera(card.dataset.camera!)));
  document.querySelectorAll<HTMLButtonElement>('[data-select-camera]').forEach(button => button.addEventListener('click', () => { chooseCamera(button.dataset.selectCamera!); selection.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'nearest'}); }));
  document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach(button => button.addEventListener('click', () => { if(button.dataset.category==='all'){reset();return;} category = button.dataset.category!; select.value='';search.value='';selectedArea='';highlight(null);mode(); clearCamera(); paintSelection(''); name.textContent = category==='cameras'?ui.cameras:categoryName(category,locale); description.textContent = ui.selectedScenery; document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach(item => { const active = item.dataset.category === category; item.classList.toggle('active',active); item.setAttribute('aria-pressed',String(active)); }); filterCameras();fitCategoryPins(); }));
  shortcuts.forEach(button => button.addEventListener('click', () => button.dataset.mapCity === 'all' ? reset() : chooseCity(button.dataset.mapCity!)));
  document.getElementById('reset-map')!.addEventListener('click', reset);
  document.getElementById('reset-map-view')!.addEventListener('click', reset);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){clearCamera();search.value='';searchResults.hidden=true;search.setAttribute('aria-expanded','false');explorerPanel.classList.remove('mobile-open');filterCameras();}});
  const searchResults=document.getElementById('search-results')!;
  const searchClear=document.getElementById('clear-camera-search')!;
  function suggest(){
    const query=search.value.trim();searchResults.hidden=!query;searchClear.hidden=!query;search.setAttribute('aria-expanded',String(!!query));searchResults.replaceChildren();
    for(const camera of matchingCameras().slice(0,12)){const button=document.createElement('button');button.type='button';button.setAttribute('role','option');button.setAttribute('aria-selected','false');const copy=document.createElement('span'),title=document.createElement('strong'),region=document.createElement('small');title.textContent=cameraTitle(camera,locale);region.textContent=placeName(camera.area,locale);copy.append(title,region);button.append(copy);button.addEventListener('click',()=>{chooseCamera(camera.id);searchResults.hidden=true;search.setAttribute('aria-expanded','false');selection.scrollIntoView({block:'nearest',behavior:reducedMotion?'auto':'smooth'});});searchResults.append(button);}
    if(query&&!searchResults.childElementCount){const text=document.createElement('p');text.textContent=ui.noResults;searchResults.append(text);}
  }
  searchClear.addEventListener('click',()=>{search.value='';search.dispatchEvent(new Event('input'));search.focus();});
  document.addEventListener('click',event=>{if(event.target instanceof Element&&!event.target.closest('.search-area')){searchResults.hidden=true;search.setAttribute('aria-expanded','false');}});
  search.addEventListener('input', () => { suggest(); clearCamera(); paintSelection(''); filterCameras(); name.textContent = ui.cameraSearch; description.textContent = `${ui.searchResults} · ${matchingCameras().length}`; });
  search.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      const first = matchingCameras()[0];
      if (first) chooseCamera(first.id);
    }
  });
  select.addEventListener('change', () => select.value === '' ? reset() : chooseProvince(Number(select.value)));
  document.getElementById('retry-map')!.addEventListener('click', () => window.location.reload());

  async function initialize() {
    try {
      map = new Map({ container: container!, center: [101, 13], zoom: 5, minZoom: 2, maxZoom: 18, attributionControl: false });
      map.addControl(new NavigationControl({ showCompass: false }), 'bottom-right');
      map.addControl(new AttributionControl({ compact: false, customAttribution: 'Boundaries: <a href="https://www.geoboundaries.org">geoBoundaries</a> (ODbL)' }), 'bottom-right');
      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();
      map.fitBounds(thailandBounds,{padding:{top:85,bottom:45,left:35,right:45},duration:0});
      let loaded = false;
      map.on('error', event => {
        console.error('Thailand map resource error:', event.error);
        if (!loaded) {
          status.hidden = false;
          status.textContent = ui.mapError;
        }
      });
      map.on('load', async () => {
        loaded = true;
        homeMapReady=true;
        for (const beach of mappedBeaches) {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'beach-pin';
          button.setAttribute('aria-label', `${beach.name}${beach.english ? ` · ${beach.english}` : ''}`);
          const label = document.createElement('span');
          label.textContent = beach.english || beach.name;
          button.append(label);
          const box = document.createElement('div');
          const title = document.createElement('strong');
          title.textContent = beach.english ? `${beach.name} · ${beach.english}` : beach.name;
          const link = document.createElement('a');
          link.href = '/ko/beaches/' + encodeURIComponent(beach.id) + '/';
          link.textContent = locale === 'ko' ? '해변 이용 안내 →' : 'Beach information →';
          box.append(title, document.createElement('br'), link);
          const marker = new Marker({ element: button, anchor: 'bottom' }).setLngLat([beach.lng, beach.lat]).setPopup(new Popup({ offset: 32 }).setDOMContent(box));
          beachPins.push(marker);
          if (beachesVisible) marker.addTo(map!);
        }
        status.hidden = true;
        // Keep destination labels available at the country overview zoom.
        const colors = ['#c86b42', '#387f75', '#596caa', '#a25f85'];
        const areaFeatures = travelAreas.map((city, index) => {
          const [lng, lat] = city.center;
          const coordinates = Array.from({ length: 65 }, (_, step) => {
            const angle = step / 64 * Math.PI * 2;
            return [lng + Math.cos(angle) * city.radiusKm / (111.32 * Math.cos(lat * Math.PI / 180)), lat + Math.sin(angle) * city.radiusKm / 111.32];
          });
          return { type: 'Feature' as const, properties: { cityId: city.id, color: colors[index % colors.length] }, geometry: { type: 'Polygon' as const, coordinates: [coordinates] } };
        });
        const firstSymbol = map!.getStyle().layers.find(layer => layer.type === 'symbol')?.id;
        map!.addSource('travel-areas', { type: 'geojson', data: { type: 'FeatureCollection', features: areaFeatures } });
        map!.addLayer({ id: 'travel-area-fill', type: 'fill', source: 'travel-areas', paint: { 'fill-color': ['get', 'color'], 'fill-opacity': 0.2 } }, firstSymbol);
        map!.addLayer({ id: 'travel-area-outline', type: 'line', source: 'travel-areas', paint: { 'line-color': ['get', 'color'], 'line-width': 1.5, 'line-opacity': 0.8 } }, firstSymbol);
        map!.addSource('travel-labels', { type: 'geojson', data: { type: 'FeatureCollection', features: travelAreas.map(city => ({ type: 'Feature', properties: { cityId: city.id, title: city.en }, geometry: { type: 'Point', coordinates: city.center } })) } });
        map!.addLayer({ id: 'travel-dots', type: 'circle', source: 'travel-labels', paint: { 'circle-radius': 4, 'circle-color': '#b54f30', 'circle-stroke-color': '#fff', 'circle-stroke-width': 2 } });
        map!.addLayer({ id: 'travel-labels', type: 'symbol', source: 'travel-labels', layout: {
          'text-field': ['get', 'title'], 'text-font': ['Noto Sans Regular'], 'text-size': ['interpolate', ['linear'], ['zoom'], 4, 11, 8, 14],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'], 'text-radial-offset': 0.7, 'text-justify': 'auto', 'text-padding': 2,
          'symbol-sort-key': ['match', ['get', 'cityId'], 'bangkok', 0, 'pattaya', 1, 'chiang-mai', 2, 'phuket', 3, 'phi-phi', 4, 5]
        }, paint: { 'text-color': '#253545', 'text-halo-color': '#fff', 'text-halo-width': 2 } }, firstSymbol);
        ['travel-labels', 'travel-dots', 'travel-area-fill'].forEach(layer => {
          map!.on('click', layer, event => { const id = event.features?.[0]?.properties?.cityId; if (typeof id === 'string') chooseCity(id); });
          map!.on('mouseenter', layer, () => { map!.getCanvas().style.cursor = 'pointer'; });
          map!.on('mouseleave', layer, () => { map!.getCanvas().style.cursor = ''; });
        });
        map!.addSource('cameras', { type:'geojson', data:cameraData(), cluster:true, clusterRadius:45, clusterMaxZoom:11 });
        map!.addLayer({ id:'camera-clusters', type:'circle', source:'cameras', filter:['has','point_count'], paint:{ 'circle-color':'#ef4c48','circle-radius':['step',['get','point_count'],20,10,25,50,30],'circle-opacity':0.9,'circle-stroke-width':5,'circle-stroke-color':'#ffffff' } });
        map!.addLayer({ id:'camera-cluster-count', type:'symbol', source:'cameras', filter:['has','point_count'], layout:{ 'text-field':['get','point_count_abbreviated'],'text-font':['Noto Sans Regular'],'text-size':12 },paint:{ 'text-color':'#ffffff' } });
        map!.addLayer({ id:'camera-points', type:'circle', source:'cameras', filter:['!', ['has','point_count']], paint:{ 'circle-color':['case',['get','verified'],'#e84d47','#8b98a7'],'circle-radius':7,'circle-stroke-width':3,'circle-stroke-color':'#ffffff' } });
        map!.addLayer({ id:'camera-selected', type:'circle', source:'cameras',filter:['==',['get','cameraId'],''],paint:{'circle-radius':13,'circle-color':'#e84d47','circle-opacity':0.25,'circle-stroke-color':'#e84d47','circle-stroke-width':2} });
        for(const venue of venues.filter(v=>v.publicationStatus!=='held'&&Number.isFinite(v.lng)&&Number.isFinite(v.lat))){
          const element=document.createElement('button');element.type='button';element.className='tourism-venue-pin';element.dataset.tourismMarker=venue.id;element.textContent='◆';element.setAttribute('aria-label',editorialEnabled?venue.name:venue.english);
          const content=document.createElement('div'),title=document.createElement('strong'),link=document.createElement('a');title.textContent=editorialEnabled?venue.name:venue.english;link.href='/'+locale+'/rooftops/'+venue.id+'/';link.textContent=ui.details+' →';content.append(title,document.createElement('br'),link);
          const marker=new Marker({element}).setLngLat([venue.lng,venue.lat]).setPopup(new Popup({offset:20}).setDOMContent(content));tourismPins.push({venue,marker});
          document.querySelector<HTMLButtonElement>('[data-tourism-venue="'+venue.id+'"]')?.addEventListener('click',()=>{map!.flyTo({center:[venue.lng,venue.lat],zoom:14,duration});if(venueMatchesMapCategory(venue,category))marker.addTo(map!).togglePopup();document.querySelector('.map-stage')!.scrollIntoView({block:'nearest',behavior:reducedMotion?'auto':'smooth'});});
        }
        mode();
        setCameraVisibility(camerasVisible);
        if(category==='all')fitCategoryPins(0);
        fetch('/data/bangkok-rail.geojson').then(r=>r.json()).then(network=>{if(!map||map.getSource('home-thai-rail'))return;map.addSource('home-thai-rail',{type:'geojson',data:network.routes});map.addLayer({id:'home-thai-rail-lines',type:'line',source:'home-thai-rail',paint:{'line-color':['get','color'],'line-width':['interpolate',['linear'],['zoom'],4,0.4,10,2.5],'line-opacity':0.8}});map.addSource('home-thai-stations',{type:'geojson',data:network.stations});map.addLayer({id:'home-thai-station-points',type:'circle',source:'home-thai-stations',minzoom:9,layout:{visibility:'none'},paint:{'circle-radius':3,'circle-color':'#fff','circle-stroke-width':1.5,'circle-stroke-color':'#34768e'}});map.on('click','home-thai-station-points',event=>{const feature=event.features?.[0];if(!feature||feature.geometry.type!=='Point')return;const box=document.createElement('div'),name=document.createElement('strong'),link=document.createElement('a');name.textContent=feature.properties?.name||'';link.href='/ko/transport/bangkok/stations/'+encodeURIComponent(feature.properties?.station_id||'')+'/';link.textContent=editorialEnabled?'역·노선·환승 안내 →':'Station & transfer guide →';box.append(name,document.createElement('br'),link);new Popup().setLngLat(feature.geometry.coordinates as [number,number]).setDOMContent(box).addTo(map!);});}).catch(()=>{});
        if(map!.getLayer('water'))map!.setPaintProperty('water','fill-color','#c7dfe9');
        if(map!.getLayer('background'))map!.setPaintProperty('background','background-color','#f5f7f5');
        map!.on('moveend',()=>{resultsLimit=12;updateResults();});map!.on('idle',updateResults);updateResults();
        map!.on('click','camera-points',event => { const id=event.features?.[0]?.properties?.cameraId; if(typeof id === 'string') chooseCamera(id); });
        map!.on('click','camera-clusters',async event => { const feature=event.features?.[0]; if(!feature || feature.geometry.type !== 'Point') return; const source=map!.getSource('cameras') as GeoJSONSource; try { const zoom=await source.getClusterExpansionZoom(feature.properties!.cluster_id); map!.easeTo({center:feature.geometry.coordinates as [number,number],zoom,duration}); } catch(error) { console.error(error); } });
        ['camera-points','camera-clusters'].forEach(layer => { map!.on('mouseenter',layer,()=>{map!.getCanvas().style.cursor='pointer';});map!.on('mouseleave',layer,()=>{map!.getCanvas().style.cursor='';}); });
        const initialCity = new URLSearchParams(window.location.search).get('city');
        if(initialCity)chooseCity(initialCity);
        const initialId = new URLSearchParams(window.location.search).get('camera');
        if (initialId && cameras.some(camera => camera.id === initialId)) chooseCamera(initialId);
        try {
          // Same-origin boundary file stays available without a third-party API call.
          const response = await fetch('/data/thailand-provinces.geojson');
          if (!response.ok) throw new Error(`Province boundaries: ${response.status}`);
          const boundaries = await response.json();
          map!.addSource('provinces', { type: 'geojson', data: boundaries });
          const labelLayer = map!.getStyle().layers.find(layer => layer.type === 'symbol')?.id;
          map!.addLayer({ id: 'province-fill', type: 'fill', source: 'provinces', paint: { 'fill-color': '#2e7c89', 'fill-opacity': 0.055 } }, labelLayer);
          map!.addLayer({ id: 'province-selected', type: 'fill', source: 'provinces', filter: ['==', ['id'], selectedProvince ?? -1], paint: { 'fill-color': '#e84d47', 'fill-opacity': 0.15 } }, labelLayer);
          map!.addLayer({ id: 'province-lines', type: 'line', source: 'provinces', paint: { 'line-color': '#688e95', 'line-width': ['interpolate', ['linear'], ['zoom'], 4, 0.5, 10, 1.3], 'line-opacity': 0.65 } }, labelLayer);
          mode();
          map!.on('mouseenter', 'province-fill', () => { map!.getCanvas().style.cursor = 'pointer'; });
          map!.on('mouseleave', 'province-fill', () => { map!.getCanvas().style.cursor = ''; });
          map!.on('click', 'province-fill', event => {
            if (map!.queryRenderedFeatures(event.point,{layers:['camera-points','camera-clusters','travel-labels','travel-dots','travel-area-fill',...(map!.getLayer('home-thai-station-points')?['home-thai-station-points']:[])]}).length) return;
            const id = event.features?.[0]?.id;
            if (typeof id === 'number') chooseProvince(id);
          });
        } catch (error) {
          console.error(error);
          status.hidden = false;
          status.textContent = ui.connection;
        }
      });
      new ResizeObserver(() => map?.resize()).observe(container!);
    } catch (error) {
      console.error(error);
      status.hidden = true;
      errorPanel.hidden = false;
    }
  }
  const initialCity=new URLSearchParams(location.search).get('city');
  if(initialCity)chooseCity(initialCity);
  const requestedCamera=new URLSearchParams(location.search).get('camera');
  if(requestedCamera)chooseCamera(requestedCamera);
  window.addEventListener('popstate',()=>{const id=new URLSearchParams(location.search).get('camera');if(id)chooseCamera(id);else clearCamera();});
  updateResults();
  initialize();
}
