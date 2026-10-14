// Keep previously shared home section URLs working after splitting the hubs.
function routeLegacyHomeSection() {
  const match = location.pathname.match(/^\/([^/]+)\/$/);
  if (!match) return;
  const routes: Record<string,string> = {destinations:'destinations',food:'food',transport:'transport',coupons:'coupons',cameras:'directory',flights:'airport-assistance'};
  const topic = routes[location.hash.slice(1)];
  const locale = topic === 'airport-assistance' && match[1] === 'en' ? 'ko' : match[1];
  if (topic) location.replace(`/${locale}/${topic}/${location.search}`);
}
routeLegacyHomeSection();
window.addEventListener('hashchange', routeLegacyHomeSection);
document.addEventListener('astro:page-load', routeLegacyHomeSection);
