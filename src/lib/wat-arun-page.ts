
import draft from '../data/attraction-pilot/wat-arun.muse.html?raw';
import transit from '../data/transit-pilot/transit-data.json';
import { getOperationalDeployDate } from './operational-date';




export function renderWatArun() {
  const access = transit.attractionAccess.find(item => item.attraction_id === 'wat-arun');
  const transportLinks = '<!--ATTRACTION_ACCESS_MAP-->';
  const html = draft.replace('<span id="src-date"></span>', `<span id="src-date">${getOperationalDeployDate()}</span>`).replace('<span id="deploy-date"></span>', `<span id="deploy-date">${getOperationalDeployDate()}</span>`)
    .replace('<h2>가까운 역 · 선착장</h2>', transportLinks + '<h2>가까운 역 · 선착장</h2>')
    .replace('<meta charset="utf-8">', '<meta charset="utf-8"><meta name="robots" content="noindex,nofollow">')
    .replace('<body>', '<body><header style="padding:18px;border-bottom:1px solid #e6e9f0"><a href="/ko/#map" style="display:flex;align-items:center;gap:10px;color:#253545;font-size:22px;font-weight:800"><img src="/images/thailand-flag.svg" width="36" height="24" alt="">ThaiLiveNow</a></header>')
    .replaceAll('href="/ko/attractions/"', 'href="/ko/destinations/"')
    .replaceAll('href="/ko/attractions/?province=bangkok"', 'href="/ko/?city=bangkok#map"')
    .replace('return "2026-10-12";', `return ${JSON.stringify(getOperationalDeployDate())};`);

return html;
}
