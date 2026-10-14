// Build-only switch. Development and production requests never set this variable.
const patterns=process.env.TLN_RELEASE_PATTERNS ? new Set(JSON.parse(process.env.TLN_RELEASE_PATTERNS)) : null;
export function omitUnchangedPage(routePattern) { return patterns !== null && !patterns.has(routePattern); }
