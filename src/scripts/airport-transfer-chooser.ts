import {transportReady,transportText,transportData} from './transport-locale';
import guide from '../data/transport/airport-guides/suvarnabhumi-to-bangkok.json';
import {compareAirportTransfer} from '../lib/airport-transfer-choice.mjs';
transportReady.then(()=>{
const root = document.querySelector<HTMLElement>('[data-transfer-chooser]');
if (root) {
  const form = root.querySelector<HTMLFormElement>('[data-transfer-form]')!;
  const results = root.querySelector<HTMLElement>('[data-transfer-results]')!;
  const status = root.querySelector<HTMLElement>('[data-transfer-status]')!;
  const heading = root.querySelector<HTMLElement>('[data-transfer-heading]')!;
  form.hidden = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    try {
      const choice = transportData(compareAirportTransfer(guide, values));
      heading.textContent = transportText(`${choice.place.name} · ${choice.time} 출발 예상`);
      root.querySelector('[data-transfer-reason]')!.textContent = choice.reason;
      root.querySelector('[data-transfer-rail-status]')!.textContent = choice.railStatus;
      root.querySelector<HTMLElement>('[data-transfer-rail-details]')!.hidden = !choice.hasRailRoute;
      root.querySelector<HTMLElement>('[data-transfer-rail-advice]')!.hidden = !choice.hasRailRoute;
      for (const key of ['route', 'fare', 'fareParts', 'duration'] as const) root.querySelector(`[data-transfer-value="${key}"]`)!.textContent = choice.place[key];
      const cards = root.querySelector('[data-transfer-cards]')!;
      for (const mode of choice.roadFirst ? ['taxi','grab','rail'] : ['rail','taxi','grab']) cards.append(root.querySelector(`[data-transfer-mode="${mode}"]`)!);
      results.hidden = false;
      status.textContent = transportText('선택한 조건으로 이동 방법을 비교했어요.');
      heading.focus();
    } catch {
      results.hidden = true;
      status.textContent = transportText('선택한 조건을 비교하지 못했어요. 아래 목적지별 환승·요금표를 이용해주세요.');
    }
  });
  form.addEventListener('input', () => {
    if (!results.hidden) {
      results.hidden = true;
      status.textContent = transportText('조건을 바꾸셨어요. 이동 방법 비교하기를 다시 눌러주세요.');
    }
  });
  form.addEventListener('reset', () => { results.hidden = true; status.textContent = ''; });
}

});
