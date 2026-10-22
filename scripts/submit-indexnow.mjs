// Notify IndexNow (Bing and other participating engines; Korean /ko/ pages are also sent to Naver directly) about new or changed public pages.
// Run after a production deploy: `node scripts/submit-indexnow.mjs` (add --dry-run to only report, --all to send every sitemap URL once).
// A page counts as changed when its title, meta description, canonical or H1 differs from the last accepted submission.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';

const ORIGIN = 'https://thailivenow.com';
const KEY = 'bc551ccdffc74105283adf4d5d133510';
const STATE = path.resolve('data/indexnow-state.json');
const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run'), sendAll = args.has('--all');

const get = async url => {
  const res = await fetch(url, {headers: {'Cache-Control': 'no-cache'}, signal: AbortSignal.timeout(30000)});
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
};
const pick = (html, re) => (html.match(re)?.[1] ?? '').replace(/\s+/g, ' ').trim();

const proof = (await get(`${ORIGIN}/${KEY}.txt`)).trim();
if (proof !== KEY) throw new Error('IndexNow key file is not served on the production domain; deploy public/' + KEY + '.txt first.');

const sitemap = await get(`${ORIGIN}/sitemap.xml`);
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replaceAll('&amp;', '&')).filter(u => u.startsWith(ORIGIN + '/'));
const previous = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : {};
const current = {};
const queue = [...urls];
await Promise.all(Array.from({length: 8}, async () => {
  for (let url; (url = queue.shift());) {
    try {
      const html = await get(url);
      if (/<meta name="robots" content="[^"]*noindex/i.test(html)) continue;
      const fields = [/<title>([^<]*)<\/title>/i, /<meta name="description" content="([^"]*)"/i, /<link rel="canonical" href="([^"]*)"/i, /<h1[^>]*>([\s\S]*?)<\/h1>/i].map(re => pick(html, re));
      current[url] = createHash('sha256').update(fields.join('\n')).digest('hex');
    } catch (error) { console.warn('skip', error.message); }
  }
}));
const changed = Object.keys(current).filter(url => sendAll || previous[url] !== current[url]);
console.log(JSON.stringify({sitemapUrls: urls.length, indexable: Object.keys(current).length, changed: changed.length, dryRun}));
if (dryRun || !changed.length) process.exit(0);

for (let i = 0; i < changed.length; i += 10000) {
  const urlList = changed.slice(i, i + 10000);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST', headers: {'Content-Type': 'application/json; charset=utf-8'},
    body: JSON.stringify({host: new URL(ORIGIN).host, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList}),
  });
  if (![200, 202].includes(res.status)) throw new Error(`IndexNow rejected the batch: ${res.status} ${await res.text()}`);
  for (const url of urlList) previous[url] = current[url];
  console.log(`IndexNow accepted ${urlList.length} URLs (HTTP ${res.status}); indexing itself is not confirmed.`);
}
// Naver only crawls /ko/ (robots.txt), so it gets just the changed Korean pages. A Naver failure is a warning, not an error.
const koChanged = changed.filter(url => url.startsWith(ORIGIN + '/ko/'));
for (let i = 0; i < koChanged.length; i += 10000) {
  const urlList = koChanged.slice(i, i + 10000);
  try {
    const res = await fetch('https://searchadvisor.naver.com/indexnow', {
      method: 'POST', headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify({host: new URL(ORIGIN).host, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList}),
    });
    console.log(`Naver IndexNow ${[200, 202].includes(res.status) ? 'accepted' : 'rejected'} ${urlList.length} URLs (HTTP ${res.status}).`);
  } catch (error) { console.warn('Naver IndexNow failed:', error.message); }
}
for (const url of Object.keys(previous)) if (!(url in current)) delete previous[url];
fs.mkdirSync(path.dirname(STATE), {recursive: true});
fs.writeFileSync(STATE, JSON.stringify(previous, null, 1) + '\n');
