export const locales = [
  { code:'ko', tag:'ko-KR', label:'한국어', region:'대한민국' },
  { code:'ms', tag:'ms-MY', label:'Bahasa Melayu', region:'Malaysia' },
  { code:'zh-cn', tag:'zh-Hans-CN', label:'简体中文', region:'中国大陆' },
  { code:'en', tag:'en', label:'English', region:'Worldwide' },
  { code:'en-in', tag:'en-IN', label:'English', region:'India' },
  { code:'ru', tag:'ru-RU', label:'Русский', region:'Россия' },
  { code:'ja', tag:'ja-JP', label:'日本語', region:'日本' },
  { code:'en-gb', tag:'en-GB', label:'English', region:'United Kingdom' },
  { code:'en-us', tag:'en-US', label:'English', region:'United States' },
  { code:'es', tag:'es-ES', label:'Español', region:'España' },
  { code:'zh-tw', tag:'zh-Hant-TW', label:'繁體中文', region:'台灣' },
] as const;
export type Locale = typeof locales[number]['code'];
export const storageKey = 'thailivenow.locale';
export function isLocale(value: unknown): value is Locale { return locales.some(item => item.code === value); }
export function detectLocale(languages: readonly string[], saved?: string | null): Locale {
  if (isLocale(saved)) return saved;
  for (const language of languages) {
    const tag = language.toLowerCase().replaceAll('_','-');
    const base = tag.split('-')[0];
    if (base === 'zh') return /(?:^|-)(?:hant|tw|hk|mo)(?:-|$)/.test(tag) ? 'zh-tw' : 'zh-cn';
    if (base === 'en') return /(?:^|-)in(?:-|$)/.test(tag) ? 'en-in' : /(?:^|-)gb(?:-|$)/.test(tag) ? 'en-gb' : /(?:^|-)us(?:-|$)/.test(tag) ? 'en-us' : 'en';
    if (['ko','ms','ru','ja','es'].includes(base)) return base as Locale;
    if (base === 'hi' || tag.endsWith('-in')) return 'en-in';
  }
  return 'en';
}
export function localePath(path: string, locale: Locale) {
  const parts = path.split('/').filter(Boolean);
  if (isLocale(parts[0])) parts.shift();
  return `/${locale}/${parts.length ? parts.join('/')+'/' : ''}`;
}
