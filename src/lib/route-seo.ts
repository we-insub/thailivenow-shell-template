// Use only the date scope and published clock strings already present in the route record.
export function routeSEOSuffix(route: any) {
  const dates: string[] = route.operatingDates || [];
  const from = route.dateBasis === 'arrival-airport-date'
    ? route.arrivalDate || route.arrivalDateLocal
    : route.validFrom || dates[0];
  const to = route.dateBasis === 'arrival-airport-date' ? from : route.validTo || dates.at(-1);
  const period = from ? (to && to !== from ? `${from}–${to}` : from) : '';
  const clocks = (route.schedule || '').match(/\d{1,2}:\d{2}/g)?.slice(0,2).join('–') || '';
  return [period, clocks].filter(Boolean).map(value => ` · ${value}`).join('');
}
