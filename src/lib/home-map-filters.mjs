// Scenery tags follow each published venue's retained introduction, not its city.
const skylineIds = `sky-beach mahanakhon-skywalk baiyoke-observatory sky-bar sirocco distil-lebua flute-lebua alfresco-64 lebua-no3 octave-rooftop attic-by-octave red-sky-restaurant red-sky-bar cru-champagne-bar cocoa-xo above-eleven yao-rooftop abar-rooftop spectrum-lounge-bar tichuca-rooftop akara-sky-hanuman iris-wild-iris threesixty-rooftop seen-riverside sin-rooftop char-rooftop brewski-rooftop pastel-rooftop sky-on-20 spire-rooftop barbu-pattaya`.split(' ');
const scenery = Object.fromEntries(skylineIds.map(id => [id, ['skyline']]));
Object.assign(scenery, {
 'hongs-sky-bar': ['skyline', 'nature'],
 'baba-nest': ['sea'], 'star-silavadee': ['sea'],
 'horizon-pattaya': ['sea', 'skyline'],
 'doi-suthep-viewpoint': ['temple', 'nature', 'skyline'],
 'skybar-summer-club': ['sea'], 'portrait-voyage-sky-bar': ['sea', 'skyline'],
 'sizzle-rooftop': ['sea', 'nature'], 'twilight-sky': ['sea'],
 'vanilla-sky': ['sea'], 'surface-patong': ['sea'],
 'phra-tamnak-viewpoint': ['sea', 'skyline', 'nature'],
 'phi-phi-viewpoint-2': ['sea', 'nature'],
});
export function cameraMatchesMapCategory(camera, category) {
 if (camera.category === 'airport') return false;
 return category === 'all' || category === 'cameras' || camera.category === category;
}
export function venueMatchesMapCategory(venue, category) {
 if (venue.publicationStatus === 'held' || !Number.isFinite(venue.lng) || !Number.isFinite(venue.lat)) return false;
 return category === 'all' || category === 'tourism' || !!scenery[venue.id]?.includes(category);
}
export function mapPointBounds(points) {
 const valid = points.filter(point => Array.isArray(point) && point.length === 2 && point.every(Number.isFinite));
 if (!valid.length) return null;
 return [[Math.min(...valid.map(p => p[0])), Math.min(...valid.map(p => p[1]))], [Math.max(...valid.map(p => p[0])), Math.max(...valid.map(p => p[1]))]];
}

// Beach records stay in the Korean editorial scope; a city match never creates unrelated venue links.
export function beachMatchesHomeFilter(beach,{cityId='',province='',area='',query=''}={}) {
 if(!beach.pilot||!beach.coordinateVerified||!Number.isFinite(beach.lat)||!Number.isFinite(beach.lng))return false;
 return (!cityId||beach.cityId===cityId)&&(!province||beach.province===province)&&(!area||beach.area===area)&&`${beach.name} ${beach.english} ${beach.city} ${beach.thai}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase());
}
