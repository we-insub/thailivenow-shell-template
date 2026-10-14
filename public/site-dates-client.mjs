// Use the exact server response snapshot, never a visitor's clock or a newer
// cross-release request. Also repair a hydrated island that restores a fallback.
function syncSiteDates() {
  let doc;try{doc=JSON.parse(document.getElementById('site-dates-response')?.textContent||'null');}catch{return;}
  if(doc?.schemaVersion!==1||doc.timeZone!=='Asia/Bangkok')return;
  for(const el of document.querySelectorAll('[data-site-date]')) {
    const kind=el.dataset.siteDate,id=el.dataset.cameraId||el.dataset.pagePath;
    const record=(kind.startsWith('camera-')?doc.cameras:doc.pages)?.[id];
    const value=kind==='deployment'?doc.deploymentDate:kind==='camera-link'?record?.linkCheckedAt:kind==='modified'?record?.contentModifiedOn:record?.sourceCheckedOn;
    if(typeof value!=='string')continue;
    if(kind==='camera-link') {
      if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value)||!Number.isFinite(Date.parse(value)))continue;
      const text=new Intl.DateTimeFormat(el.dataset.dateLocale||'en',{timeZone:'Asia/Bangkok',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(value));
      if(el.textContent!==text)el.textContent=text;
      if(el.getAttribute('datetime')!==value)el.setAttribute('datetime',value);
      continue;
    }
    if(!/^\d{4}-\d{2}-\d{2}$/.test(value))continue;
    const date=new Date(value+'T00:00:00Z');if(!Number.isFinite(+date)||date.toISOString().slice(0,10)!==value)continue;
    const text=el.dataset.dateFormat==='long'?new Intl.DateTimeFormat(el.dataset.dateLocale||'en',{timeZone:'Asia/Bangkok',year:'numeric',month:'long',day:'numeric'}).format(date):value;
    if(el.textContent!==text)el.textContent=text;
    if(el.getAttribute('datetime')!==value)el.setAttribute('datetime',value);
  }
}
syncSiteDates();
new MutationObserver(syncSiteDates).observe(document.documentElement,{subtree:true,childList:true,characterData:true});
addEventListener('pageshow',syncSiteDates);
addEventListener('astro:page-load',syncSiteDates);
