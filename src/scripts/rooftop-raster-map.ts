import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Keep the same verified coordinates, building groups, filters and detail URLs
// when the browser cannot create the WebGL renderer used by the primary map.
export function mountRooftopRasterMap(el: HTMLElement) {
  const venues = JSON.parse(el.dataset.venues || '[]');
  const access = JSON.parse(el.dataset.access || '[]').filter(p => Number.isFinite(p.lat) && Number.isFinite(p.lng));
  const centers = JSON.parse(el.dataset.centers || '{}');
  const center = centers[el.dataset.city!] || [100.5, 13.75];
  const map = L.map(el, {scrollWheelZoom: false, zoomControl: false, maxZoom: 19}).setView([center[1], center[0]], 12);
  el.dataset.mapRenderer = 'raster';
  L.control.zoom({position: 'topright'}).addTo(map);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles © <a href="https://www.esri.com">Esri</a> — HERE, Garmin, USGS, Intermap, INCREMENT P, NRCan, Esri Japan, METI, Esri China (Hong Kong), Esri Korea, Esri (Thailand), NGCC, © OpenStreetMap contributors, GIS User Community',
  }).on('load', () => {el.dataset.mapReady = 'true';}).addTo(map);

  const groups = new Map<string, typeof venues>();
  for (const venue of venues.filter(v => Number.isFinite(v.lat) && Number.isFinite(v.lng))) {
    const key = venue.lat + ',' + venue.lng;
    groups.set(key, [...(groups.get(key) || []), venue]);
  }
  const venueLayers = L.layerGroup().addTo(map);
  for (const point of access) {
    const box = document.createElement('div');
    const title = document.createElement('strong');title.textContent = point.name;
    const description = document.createElement('p');description.textContent = point.instructions;
    box.append(title, description);
    for (const [href, label] of [[point.detailUrl, '역·선착장 상세 →'], [point.directionsUrl, '길찾기 ↗']]) {
      if (!href) continue;
      const link = document.createElement('a');link.href = href;link.textContent = label;
      if (href.startsWith('http')) {link.target = '_blank';link.rel = 'noopener noreferrer';}
      box.append(link, document.createElement('br'));
    }
    addPin(point, point.name, 'access-pin', box).addTo(map);
  }
  function addPin(point, name: string, className: string, content: HTMLElement) {
    const button = document.createElement('button');
    button.type = 'button';button.className = 'rooftop-pin ' + className;
    button.textContent = name;button.setAttribute('aria-label', name);
    const marker = L.marker([point.lat, point.lng], {keyboard: false, icon: L.divIcon({html: button, className: 'rooftop-raster-marker', iconSize: [0, 0]})}).bindPopup(content);
    return marker;
  }
  let kind = new URLSearchParams(location.search).get('type') || 'all';
  if (!['rooftop', 'viewpoint'].includes(kind)) kind = 'all';
  function selectCity(city: string) {
    venueLayers.clearLayers();map.closePopup();
    const points = [];
    for (const group of groups.values()) {
      const shown = group.filter(v => (city === 'all' || v.city === city) && (kind === 'all' || (v.facilityCategory || 'rooftop') === kind));
      if (!shown.length) continue;
      const content = document.createElement('div');
      for (const v of shown) {
        const row = document.createElement('p'), link = document.createElement('a');
        link.href = '/' + el.dataset.locale + '/rooftops/' + v.id + '/';
        link.textContent = v.name + (v.english && v.english !== v.name ? ' (' + v.english + ')' : '') + ' →';
        row.append(link);content.append(row);
      }
      const marker = addPin(shown[0], shown.length === 1 ? shown[0].name : shown[0].name + ' 외 ' + (shown.length - 1) + '곳', shown.every(v => v.facilityCategory === 'viewpoint') ? 'viewpoint-pin' : '', content);
      marker.on('click', () => {for (const card of document.querySelectorAll<HTMLElement>('[data-rooftop-id]')) card.classList.toggle('selected', shown.some(v => v.id === card.dataset.rooftopId));});
      marker.addTo(venueLayers);points.push([shown[0].lat, shown[0].lng]);
    }
    if (points.length) {
      points.push(...access.map(p => [p.lat, p.lng]));
      map.fitBounds(points, {padding: [60, 60], maxZoom: el.dataset.detail === 'true' ? 15 : 13.8, animate: false});
    } else if (centers[city]) map.setView([centers[city][1], centers[city][0]], city === 'phi-phi' ? 12 : 11);
    document.getElementById('rooftop-map-title')!.textContent = el.dataset.detail === 'true' ? '시설 위치' : el.dataset.cityName + ' ' + (kind === 'viewpoint' ? '전망대' : kind === 'rooftop' ? '루프탑' : '루프탑·전망대') + ' 지도';
  }
  selectCity(el.dataset.city!);
  document.addEventListener('rooftop:filter', ((event: CustomEvent) => {kind = event.detail.kind;selectCity(el.dataset.city!);}) as EventListener);
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-city-filter]')) button.addEventListener('click', () => selectCity(button.dataset.cityFilter!));
  new ResizeObserver(() => map.invalidateSize()).observe(el);
}
