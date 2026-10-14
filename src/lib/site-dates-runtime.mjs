export const SITE_TIME_ZONE = 'Asia/Bangkok';
export const SITE_LOCALES = ['ko','ms','zh-cn','en','en-in','ru','ja','en-gb','en-us','es','zh-tw'];
export function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value+'T00:00:00Z');
  return Number.isFinite(+date) && date.toISOString().slice(0,10) === value;
}
export function validTimestamp(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value)
    && validDate(value.slice(0,10)) && Number.isFinite(Date.parse(value));
}
export function localDate(timestamp) {
  if (!validTimestamp(timestamp)) return null;
  return new Intl.DateTimeFormat('en-CA',{timeZone:SITE_TIME_ZONE,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(timestamp));
}
export function validDocument(doc) {
  return doc?.schemaVersion === 1 && doc.timeZone === SITE_TIME_ZONE && validDate(doc.deploymentDate)
    && typeof doc.release?.commit === 'string' && /^[a-f0-9]{40}$/.test(doc.release.commit);
}
export function siteDateValue(doc, kind, id) {
  if (!validDocument(doc)) return null;
  if (kind === 'deployment') return doc.deploymentDate;
  const record = Object.hasOwn(kind.startsWith('camera-') ? doc.cameras??{} : doc.pages??{},id??'')
    ? (kind.startsWith('camera-') ? doc.cameras[id] : doc.pages[id]) : null;
  const value = kind==='camera-source'||kind==='source' ? record?.sourceCheckedOn
    : kind==='camera-link' ? record?.linkCheckedAt : kind==='modified' ? record?.contentModifiedOn : null;
  return kind==='camera-link' ? (validTimestamp(value) ? value : null) : validDate(value) ? value : null;
}
export function formatSiteDate(value, kind, locale='en', format='iso') {
  if (kind==='camera-link') {
    if (!validTimestamp(value)) return null;
    return new Intl.DateTimeFormat(SITE_LOCALES.includes(locale)?locale:'en',{
      timeZone:SITE_TIME_ZONE,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false
    }).format(new Date(value));
  }
  if (!validDate(value)) return null;
  if (format==='iso') return value; // Preserve the site's existing YYYY-MM-DD display.
  return new Intl.DateTimeFormat(SITE_LOCALES.includes(locale)?locale:'en',{
    timeZone:SITE_TIME_ZONE,year:'numeric',month:'long',day:'numeric'
  }).format(new Date(value+'T05:00:00Z'));
}
export function applySiteDate(element, doc) {
  const kind=element.getAttribute('data-site-date');
  const value=siteDateValue(doc,kind,element.getAttribute('data-camera-id')||element.getAttribute('data-page-path'));
  if (!value) return; // Never invent observations or overwrite a valid static fallback.
  const text=formatSiteDate(value,kind,element.getAttribute('data-date-locale')||'en',element.getAttribute('data-date-format')||'iso');
  element.setAttribute('datetime',value);
  element.setInnerContent(text);
}
export function snapshotScript(doc) {
  return `<script type="application/json" id="site-dates-response">${JSON.stringify(doc).replace(/</g,'\\u003c')}</script>`;
}
