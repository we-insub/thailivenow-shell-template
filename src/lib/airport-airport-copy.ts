import western from '../data/airport-airport-copy-ms-cn-es.json';
import english from '../data/airport-airport-copy-en.json';
import eastern from '../data/airport-airport-copy-ja-tw-ru.json';

export const airportAirportCopy: Record<string, any> = {...western, ...english, ...eastern};
export function airportAirportDescription(locale: string, name: string): string | undefined {
  return airportAirportCopy[locale]?.intro.replaceAll('{name}', name);
}
