import { storageKey, localePath, isLocale, detectLocale } from '../i18n/locales';
const picker = document.querySelector<HTMLDetailsElement>('#language-picker');
const homeOnly = picker?.dataset.homeOnly === 'true';
const switchPath = picker?.dataset.switchPath;
const supported:string[]=JSON.parse(picker?.dataset.supportedLocales||'[]');
const destination = (locale: Parameters<typeof localePath>[1]) => supported.length&&!supported.includes(locale)?window.location.href:localePath(homeOnly || (switchPath === '/airport-assistance/' && locale==='en') ? '/' : switchPath || window.location.pathname,locale)+(homeOnly || switchPath ? '' : window.location.search+window.location.hash);
document.querySelectorAll<HTMLAnchorElement>('[data-locale-choice]').forEach(link => {
  link.addEventListener('click', event => {
    const locale = link.dataset.localeChoice;
    if (!isLocale(locale) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    try { localStorage.setItem(storageKey,locale); } catch { /* Explicit URL remains usable without storage. */ }
    window.location.assign(destination(locale));
  });
});
document.querySelector('[data-locale-auto]')?.addEventListener('click', () => {
  try { localStorage.removeItem(storageKey); } catch { /* Storage may be disabled. */ }
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  window.location.assign(destination(detectLocale(languages)));
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && picker?.open) { picker.open=false; picker.querySelector('summary')?.focus(); } });
document.addEventListener('click', event => { if (picker?.open && event.target instanceof Node && !picker.contains(event.target)) picker.open=false; });
