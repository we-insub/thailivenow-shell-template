// Keep the original rights record; only translate its Korean version qualifier.
export function licenseDisplay(value, locale = 'ko') {
  if (locale === 'ko' || typeof value !== 'string') return value;
  return value.replace(/^(GFDL\s+\d+(?:\.\d+)*)\s+이상$/, '$1 or later');
}
