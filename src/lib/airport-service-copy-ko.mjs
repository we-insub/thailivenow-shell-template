import copy from '../data/airport-service-copy-ko.json' with { type: 'json' };
// Korean presentation only. Original facts, contacts, source URLs and dates stay
// in airport-assistance.json; other markets keep their own reviewed expression.
export const airportServiceKoreanCopy = service => ({...service,...copy[service.id]});
