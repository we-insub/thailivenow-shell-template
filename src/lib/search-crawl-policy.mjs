// Google and other crawlers retain the existing public-page policy.
// Yeti receives only Korean HTML; shared resources remain crawlable.
export function crawlRobots() {
 return [
  'User-agent: *', 'Allow: /', '',
  'User-agent: Yeti', 'Disallow: /', 'Allow: /$', 'Allow: /ko/',
  'Allow: /_astro/', 'Allow: /images/', 'Allow: /data/',
  'Allow: /transit-assets/', 'Allow: /sitemap', 'Allow: /robots.txt$',
  ...['css','js','mjs','json','png','jpg','jpeg','webp','svg','woff','woff2','ico'].map(ext=>`Allow: /*.${ext}$`),
  '', 'Sitemap: https://thailivenow.com/sitemap.xml', ''
 ].join('\n');
}
export function sitemapXML(urls) {
 const escape=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
 return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(url=>`<url><loc>${escape(url)}</loc></url>`).join('')+'</urlset>';
}
