import {thaiAirportAlternatePaths,airportLanguageTags} from './airport-guide-navigation.mjs';
import {travelGuideAlternatePaths} from './travel-guide-navigation.mjs';
import {applyDetailEditorialPolicy,sharingImage,isDetailPath} from './detail-editorial-policy.mjs';
import {siteBrand} from './site-brand.mjs';
import { parse, parseFragment, serialize } from 'parse5';
import siteIntegrations from '../data/site-integrations.json' with {type:'json'};
import pageOverrides from '../data/page-seo-overrides.json' with {type:'json'};
const origin = 'https://thailivenow.com';
const home = {
 ko: ['태국라이브나우 | 태국 여행지 지도·공개 카메라·라이브캠', '방콕·푸껫·치앙마이·코사무이 등 태국 여행지의 공개 카메라를 지도에서 찾아보세요. 도시나 장소를 고르면 카메라별 촬영 위치와 시청 상태를 살펴보고, 운영자의 원본 화면으로 이동할 수 있어요.'],
 en: ['ThaiLiveNow | Thailand Travel, Live Cams & Bangkok Transport', 'Explore public cameras and live cams across Bangkok, Phuket, Chiang Mai and Koh Samui. Find Thailand beach guides, rooftop viewpoints, transport and airport information.'],
 ja: ['ThaiLiveNow | タイ旅行・ライブカメラ・バンコク交通', 'バンコク、プーケット、チェンマイ、サムイ島の公開カメラを地図で探せます。タイ旅行のビーチ、ルーフトップ、交通、空港情報を確認しましょう。'],
 ms: ['ThaiLiveNow | Percutian Thailand, Kamera Langsung & Pengangkutan', 'Terokai kamera awam di Bangkok, Phuket, Chiang Mai dan Koh Samui serta panduan pantai, tempat melihat pemandangan, pengangkutan dan lapangan terbang Thailand.'],
 ru: ['ThaiLiveNow | Путешествия по Таиланду и веб-камеры', 'Открытые веб-камеры Бангкока, Пхукета, Чиангмая и Самуи на карте. Пляжи, видовые площадки, транспорт и информация об аэропортах для поездки в Таиланд.'],
 es: ['ThaiLiveNow | Viajes a Tailandia, cámaras en vivo y transporte', 'Explora cámaras públicas de Bangkok, Phuket, Chiang Mai y Koh Samui en el mapa. Consulta playas, miradores, transporte y aeropuertos para viajar por Tailandia.'],
 'zh-cn': ['ThaiLiveNow | 泰国旅行、实时摄像头与曼谷交通', '在地图上查找曼谷、普吉岛、清迈和苏梅岛的公开摄像头，了解泰国海滩、屋顶观景点、交通和机场信息。'],
 'zh-tw': ['ThaiLiveNow | 泰國旅遊、即時攝影機與曼谷交通', '在地圖上尋找曼谷、普吉島、清邁和蘇梅島的公開攝影機，查看泰國海灘、屋頂觀景點、交通及機場資訊。'],
};
function nodes(root) { return [root, ...(root.childNodes || []).flatMap(nodes)]; }
function attr(n, name) { return n.attrs?.find(a => a.name === name)?.value; }
function text(n) { return n.nodeName === '#text' ? n.value : (n.childNodes || []).filter(c => !['script','style'].includes(c.nodeName)).map(text).join(' '); }
function clean(s) { return s.replace(/\s+/g,' ').trim(); }
function esc(s) { return s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function normalizeBreadcrumbURLs(html) {
 return html.replace(/(<script\b[^>]*type=["']application\/ld\+json["'][^>]*>)([\s\S]*?)(<\/script>)/gi,(tag,start,body,end)=>{
  try {
   const data=JSON.parse(body);let changed=false;
   const absolute=url=>{
    if(typeof url==='string'&&url.startsWith('/')&&!url.startsWith('//')){changed=true;return new URL(url,origin).href;}
    return url;
   };
   const visit=value=>{
    if(!value||typeof value!=='object')return;
    if([value['@type']].flat().includes('BreadcrumbList'))for(const entry of value.itemListElement||[]){
     if(typeof entry.item==='string')entry.item=absolute(entry.item);
     else if(entry.item&&typeof entry.item==='object'&&'@id'in entry.item)entry.item['@id']=absolute(entry.item['@id']);
    }
    Object.values(value).forEach(child=>Array.isArray(child)?child.forEach(visit):visit(child));
   };
   visit(data);
   return changed?start+JSON.stringify(data).replaceAll('<','\\u003c')+end:tag;
  }catch{return tag;}
 });
}
function syncWebPageMetadata(head, metadata) {
 return head.replace(/(<script\b[^>]*type=["']application\/ld\+json["'][^>]*>)([\s\S]*?)(<\/script>)/gi, (tag,start,body,end)=>{
  try {
   const data=JSON.parse(body);let changed=false;
   const visit=value=>{
    if(!value||typeof value!=='object')return;
    if(value['@type']==='WebPage'||Array.isArray(value['@type'])&&value['@type'].includes('WebPage')){
     if(metadata.detail){value.author={'@id':'https://thailivenow.com/#organization'};value.publisher={'@id':'https://thailivenow.com/#organization'};}
     Object.assign(value,{name:metadata.title,description:metadata.description,url:metadata.canonical,'@id':metadata.canonical+'#webpage'});changed=true;
    }
    Object.values(value).forEach(child=>{if(Array.isArray(child))child.forEach(visit);else visit(child);});
   };
   visit(data);
   return changed?start+JSON.stringify(data).replaceAll('<','\\u003c')+end:tag;
  }catch{return tag;}
 });
}
export function applyPageSEO(html, pathname) {
 if (!/<head\b/i.test(html)) return html;
 html=applyDetailEditorialPolicy(html,pathname);
 html=normalizeBreadcrumbURLs(html);
 const all = nodes(parse(html));
 const parts = pathname.split('/').filter(Boolean);
 const locale = parts[0] || 'en';
 const language = attr(all.find(n=>n.nodeName==='html'),'lang') || 'en';
 const isKo = language.startsWith('ko');
 const homepage = pathname === '/' || parts.length === 1 && (home[locale] || locale.startsWith('en'));
 const originalTitle = clean(text(all.find(n=>n.nodeName==='title') || {}));
 const heading = clean(text(all.find(n=>n.nodeName==='h1') || {}));
 const main = all.find(n=>n.nodeName==='main');
 const intro = nodes(main || {}).find(n=>n.nodeName==='p' && attr(n,'data-tln-editorial-byline')===undefined && clean(text(n)).length >= 30);
 const originalDescription = all.find(n=>n.nodeName==='meta' && attr(n,'name')==='description');
 const core = originalTitle.replace(/\s*[|·]\s*(?:ThaiLiveNow|태국라이브나우).*$/i,'').trim() || heading;
 const suffix = {ko:'태국 여행',ja:'タイ旅行',ms:'Percutian Thailand',ru:'Путешествия по Таиланду',es:'Viajes a Tailandia','zh-cn':'泰国旅行','zh-tw':'泰國旅遊','en':'Thailand Travel','en-gb':'Thailand Travel for UK Travellers','en-in':'Thailand Travel for Indian Travellers','en-us':'Thailand Travel for US Travelers'};
 const homepageTitle = (home[locale] || home.en)[0] + (locale === 'en-gb' ? ' · UK' : locale === 'en-in' ? ' · India' : locale === 'en-us' ? ' · US' : '');
 // Keep the page's authored search intent; do not append generic Korean keywords.
 const marketLabel = {'en-in':'India','en-gb':'UK','en-us':'US'}[locale];
 const authoredTitle = pageOverrides[pathname]?.title || (homepage ? homepageTitle : `${core} | ThaiLiveNow${marketLabel ? ` · ${marketLabel}` : ''}`);
 const title = locale==='ko' ? authoredTitle.replaceAll('타이라이브나우',siteBrand(locale)).replaceAll('ThaiLiveNow',siteBrand(locale)) : authoredTitle;
 let description = pageOverrides[pathname]?.description || (homepage ? (home[locale] || home.en)[1] : clean(attr(originalDescription || {},'content') || (intro ? text(intro) : '')));
 if (!description) description = `${heading || core}. ${isKo ? '위치, 이용 방법과 공식 출처를 확인하고 태국 여행을 준비하세요.' : 'Find location details, visitor information and official sources for your Thailand trip.'}`;
 // Descriptions are complete authored summaries. A character count is not a
 // Google limit and must not cut a condition or turn a sentence into a fragment.
 const legacyTransport = /^\/ko\/transport\/(?:lines\/(?:mrt-blue|orange-flag)|piers\/(?:nonthaburi|sathorn|tha-tien|wat-arun|wat-rajsingkorn)|stations\/itsaraphap)\/$/.test(pathname);
 const legacyBus = pathname === '/ko/transport/bus/routes/mo-chit-2-kutchum-thatphanom/';
 const alias = pathname === '/' || parts[0] === 'cameras' || legacyTransport || legacyBus;
 const canonicalPath = legacyBus ? '/ko/transport/bus/routes/mo-chit-2-kud-chom-that-phanom/' : legacyTransport ? pathname.replace('/transport/', '/transport/bangkok/') : parts[0] === 'cameras' ? `/en/${parts.join('/')}/` : pathname === '/' ? '/en/' : pathname;
 const canonical = new URL(canonicalPath, origin).href;
 const personalPage = parts.length === 2 && ['saved','compare'].includes(parts[1]);
 const indexPolicy = attr(all.find(n=>n.nodeName==='meta' && attr(n,'name')==='tln:indexing') || {},'content');
 const robots = alias || personalPage || indexPolicy === 'noindex' ? 'noindex,follow' : 'index,follow,max-image-preview:large';
 const existingMeta = name => attr(all.find(n=>n.nodeName==='meta' && attr(n,'property')===name) || {},'content');
 const authoredImage = existingMeta('og:image');
 const chosenImage=sharingImage(html,pathname);
 const image = chosenImage?.url || (authoredImage && /^(?:https:\/\/|\/)/.test(authoredImage) ? new URL(authoredImage,origin).href : `${origin}/images/og-thailivenow.png`);
 const imageAlt = chosenImage?.alt || existingMeta('og:image:alt') || 'ThaiLiveNow — Thailand Travel & Live Cams';
 const imageDimensions = image === `${origin}/images/og-thailivenow.png` ? '<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">' : '';
 const meta = `<title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="${robots}"><link rel="canonical" href="${esc(canonical)}"><meta property="og:type" content="website"><meta property="og:site_name" content="${siteBrand(locale)}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${esc(canonical)}"><meta property="og:locale" content="${esc(({en:'en_US','ko-KR':'ko_KR',ko:'ko_KR','zh-Hans-CN':'zh_CN','zh-Hant-TW':'zh_TW',ja:'ja_JP',ms:'ms_MY',ru:'ru_RU',es:'es_ES'}[language] || language.replaceAll('-','_')))}"><meta property="og:image" content="${esc(image)}">${imageDimensions}<meta property="og:image:alt" content="${esc(imageAlt)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${esc(image)}"><meta name="twitter:image:alt" content="${esc(imageAlt)}">${chosenImage?`<meta name="tln:share-image-status" content="${chosenImage.status}">`:""}`;
 const airportAlternates=thaiAirportAlternatePaths(pathname)||travelGuideAlternatePaths(pathname);
 const alternateMeta=airportAlternates?Object.entries(airportAlternates).map(([locale,path])=>`<link rel="alternate" hreflang="${airportLanguageTags[locale]}" href="${new URL(path,origin).href}">`).join('')+`<link rel="alternate" hreflang="x-default" href="${new URL(airportAlternates.en,origin).href}">`:'';
 const authorMeta=isDetailPath(pathname)?'<meta name="author" content="ThaiLiveNow">':'';
 const integrations = Object.entries(siteIntegrations.verification).map(([name,value])=>`<meta name="${esc(name)}" content="${esc(value)}">`).join('') + '<script data-tln-analytics="" type="module" src="/analytics-consent.mjs"></script>';
 const hasWebpage = all.some(n=>n.nodeName==='script' && attr(n,'type')==='application/ld+json' && /"@type"\s*:\s*"WebPage"/.test(text(n.childNodes?.[0] || {})));
 const schema = hasWebpage ? '' : `<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':[{'@type':'WebSite','@id':`${origin}/#website`,url:`${origin}/`,name:'ThaiLiveNow',alternateName:locale==='ko'?'태국라이브나우':'타이라이브나우'},{'@type':'WebPage','@id':`${canonical}#webpage`,url:canonical,name:title,description,...(isDetailPath(pathname)?{author:{'@id':'https://thailivenow.com/#organization'},publisher:{'@id':'https://thailivenow.com/#organization'}}:{}),inLanguage:language,isPartOf:{'@id':`${origin}/#website`}}]}).replaceAll('<','\\u003c')}</script>`;
 const result=html.replace(/(<head\b[^>]*>)([\s\S]*?)(<\/head>)/i, (_,start,head,end)=>start + syncWebPageMetadata(head,{title,description,canonical,detail:isDetailPath(pathname)}).replace(/<script\b[^>]*data-tln-analytics[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<meta\b[^>]*>/gi,tag=>/name\s*=\s*["'](?:naver-site-verification|google-site-verification|msvalidate\.01)["']/i.test(tag)?'':tag).replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi,'').replace(/<meta\b[^>]*>/gi, tag=> /(?:name\s*=\s*["'](?:description|robots|author|tln:share-image-status|twitter:[^"']+)["']|property\s*=\s*["']og:[^"']+["'])/i.test(tag) ? '' : tag).replace(/<link\b[^>]*>/gi,tag=>/rel\s*=\s*["']canonical["']/i.test(tag)||airportAlternates&&/rel\s*=\s*["']alternate["']/i.test(tag) ? '' : tag) + schema + meta + alternateMeta + authorMeta + integrations + end);
 // Date preparation also uses parse5. Canonical head serialization prevents
 // harmless entity/boolean-attribute differences from changing on reapplication.
 return result.replace(/(<head\b[^>]*>)([\s\S]*?)(<\/head>)/i,(_,start,head,end)=>start+serialize(parseFragment(head))+end);
}
