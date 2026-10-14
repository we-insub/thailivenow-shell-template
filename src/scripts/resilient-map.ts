import { Map as MapLibreMap, type MapOptions, type StyleSpecification } from 'maplibre-gl';

export const fallbackStyle: StyleSpecification = {
  version: 8,
  glyphs: `${window.location.origin}/maps/fonts/{fontstack}/{range}.pbf`,
  sources: {
    'fallback-basemap': {
      type: 'raster',
      tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'],
      tileSize: 256,
      maxzoom: 19,
      attribution: 'Tiles © <a href="https://www.esri.com">Esri</a> — HERE, Garmin, USGS, Intermap, INCREMENT P, NRCan, Esri Japan, METI, Esri China (Hong Kong), Esri Korea, Esri (Thailand), NGCC, © OpenStreetMap contributors, GIS User Community',
    },
  },
  layers: [{ id: 'fallback-basemap', type: 'raster', source: 'fallback-basemap' }],
};

// Keep the style on our origin and recover when the vector provider fails to load.
// Switch only before the first load so page-specific layers are never discarded.
export class Map extends MapLibreMap {
  constructor(options: MapOptions) {
    super({ ...options, style: '/maps/positron.json' });
    let loaded = false;
    let fallback = false;
    const recover = () => {
      if (loaded || fallback) return;
      fallback = true;
      clearTimeout(timer);
      this.getContainer().dataset.mapBasemap = 'fallback';
      this.setStyle(fallbackStyle);
    };
    const timer = window.setTimeout(recover, 10000);
    this.on('error', recover);
    this.once('load', () => {
      loaded = true;
      clearTimeout(timer);
      this.off('error', recover);
      this.getContainer().dataset.mapReady = 'true';
    });
    this.once('remove', () => clearTimeout(timer));
  }
}
