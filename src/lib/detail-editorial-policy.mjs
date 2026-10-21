import {licenseDisplay} from './license-display.mjs';
import {siteBrand} from './site-brand.mjs';
import {parse,parseFragment,serialize} from 'parse5';
import images from '../data/editorial-image-rights.json' with {type:'json'};
import {suppressPublicDates} from './public-date-policy.mjs';
export const organization={'@type':'Organization','@id':'https://thailivenow.com/#organization',name:'ThaiLiveNow',url:'https://thailivenow.com/'};
export const bylineLabels={ko:'글·해설:',en:'Text and commentary:',ms:'Penulisan dan penerangan:','zh-cn':'撰文与解说：','zh-tw':'撰文與解說：',ja:'執筆・解説：',ru:'Текст и пояснения:',es:'Texto y comentarios:'};
export const detailPath=pathname=>pathname.startsWith('/cameras/')?'/en'+pathname:pathname;
export function isDetailPath(pathname){
 pathname=detailPath(pathname);
 const p=pathname.split('/').filter(Boolean);if(!['ko','ms','zh-cn','zh-tw','en','en-in','en-gb','en-us','ja','ru','es'].includes(p[0]))return false;
 const route=p.slice(1).join('/');
 return /^(?:cameras|entry|travel-seasons|beaches|food-delivery)\/[^/]+$/.test(route)||/^rooftops\/(?!cities(?:\/|$)|page(?:\/|$))[^/]+$/.test(route)||/^airport-assistance\/(?:airports|airlines|routes|pairs|guides)\/.+/.test(route)||/^food\/(?:fruits|dishes|cities)\/[^/]+$/.test(route)||/^food\/(?:street-food|traditions|fruit-prices)$/.test(route)||/^transport\/.+/.test(route)||/^attractions\/(?!categories(?:\/|$)).+/.test(route);
}
const nodes=n=>[n,...(n.childNodes||[]).flatMap(nodes)];const attr=(n,k)=>n?.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function sharingImage(html,pathname){
 pathname=detailPath(pathname);
 if(!isDetailPath(pathname))return null;
 const all=nodes(parse(html)),main=all.find(n=>n.nodeName==='main');const candidates=nodes(main||{}).filter(n=>n.nodeName==='img');
 const og=all.find(n=>n.nodeName==='meta'&&attr(n,'property')==='og:image');if(og){const url=attr(og,'content');let src=url;try{if(new URL(url,'https://thailivenow.com').origin==='https://thailivenow.com')src=new URL(url,'https://thailivenow.com').pathname;}catch{}const alt=attr(all.find(n=>n.nodeName==='meta'&&attr(n,'property')==='og:image:alt'),'content');candidates.unshift({nodeName:'img',attrs:[{name:'src',value:src},{name:'alt',value:alt||''}]});}
 const camera=pathname.match(/\/cameras\/([^/]+)\//)?.[1];
 if(camera)for(const [src,r]of Object.entries(images.assets))if(r.cameraIds?.includes(camera))candidates.push({nodeName:'img',attrs:[{name:'src',value:src},{name:'alt',value:text(all.find(n=>n.nodeName==='h1')||{})}]});
 for(const img of candidates){const src=attr(img,'src');const rights=images.assets[src];if(!rights||camera&&!rights.cameraIds?.includes(camera))continue;
  if(!camera&&!rights.routes?.includes(pathname.split('/').filter(Boolean).slice(1).join('/')))continue;
  const alt=attr(img,'alt')?.trim();if(!alt)continue;
  const locale=pathname.split('/')[1],base=locale.startsWith('en')?'en':locale;
  const prefix=camera?({ko:'장소 참고사진 · 카메라 화면 아님: ',en:'Location reference photo, not camera footage: ',ms:'Foto rujukan lokasi, bukan rakaman kamera: ','zh-cn':'地点参考照片，并非摄像头画面：','zh-tw':'地點參考照片，並非攝影機畫面：',ja:'場所の参考写真・カメラ映像ではありません：',ru:'Справочное фото места, не кадр веб-камеры: ',es:'Foto de referencia del lugar, no de la cámara: '}[base]||''):'';
  return {...rights,url:new URL(src,'https://thailivenow.com').href,alt:prefix&&alt.startsWith(prefix)?alt:prefix+alt,status:'verified-place-image'};
 }
 return {url:'https://thailivenow.com/images/og-thailivenow.png',alt:'ThaiLiveNow',status:'missing-place-image',reason:'No image with retained subject match and reuse evidence on this page'};
}
export function applyDetailEditorialPolicy(html,pathname){
 pathname=detailPath(pathname);
 html=suppressPublicDates(html);if(!isDetailPath(pathname)||!/<main\b/.test(html))return html;
 const tree=parse(html),all=nodes(tree),main=all.find(n=>n.nodeName==='main'),heading=nodes(main).find(n=>n.nodeName==='h1');if(!heading)return html;
 const locale=pathname.split('/')[1],label=bylineLabels[locale.startsWith('en')?'en':locale]||bylineLabels.en;
 if(!all.some(n=>attr(n,'data-tln-editorial-byline')!==undefined)){
  const byline=parseFragment(`<p data-tln-editorial-byline class="tln-editorial-byline" style="font:inherit;font-size:14px;line-height:1.7;margin:10px 0 24px;color:#526572">${escape(label)} <a rel="author" href="/${locale}/">${siteBrand(locale)}</a></p>`).childNodes[0];
  const parent=heading.parentNode;byline.parentNode=parent;parent.childNodes.splice(parent.childNodes.indexOf(heading)+1,0,byline);
 }
 for(const script of all.filter(n=>n.nodeName==='script'&&attr(n,'type')==='application/ld+json')){
  try{const doc=JSON.parse(text(script));const visit=value=>{if(!value||typeof value!=='object')return;
   const types=[value['@type']].flat();const own=!value.url||typeof value.url==='string'&&(value.url.startsWith('/')||value.url.startsWith('https://thailivenow.com/'));
   if(own&&types.some(t=>['WebPage','Article','BlogPosting','NewsArticle','TravelGuide'].includes(t))){value.author={'@id':organization['@id']};value.publisher={'@id':organization['@id']};}
   for(const [key,child] of Object.entries(value))if(!['author','publisher','creator','provider','citation','subjectOf','video','audio','image'].includes(key)){if(Array.isArray(child))child.forEach(visit);else visit(child);}
  };visit(doc);script.childNodes=[{nodeName:'#text',value:JSON.stringify(doc).replaceAll('<','\\u003c'),parentNode:script}];}catch{}
 }
 const chosen=sharingImage(html,pathname);
 if(chosen?.status==='verified-place-image'&&!all.some(n=>attr(n,'data-tln-sharing-credit')!==undefined)){
  const creditLabels={ko:'공유 이미지 출처',en:'Sharing image credit',ms:'Kredit imej perkongsian','zh-cn':'分享图片来源','zh-tw':'分享圖片來源',ja:'共有画像の出典',ru:'Источник изображения для публикации',es:'Crédito de la imagen para compartir'};
  const credit=parseFragment(`<p data-tln-sharing-credit style="font-size:12px;line-height:1.7;color:#526572">${escape(creditLabels[locale.startsWith('en')?'en':locale]||creditLabels.en)}: <a href="${escape(chosen.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escape([chosen.credit,pathname.includes('/attractions/')?licenseDisplay(chosen.license,locale):chosen.license].filter(Boolean).join(' · '))}</a>${pathname.includes('/cameras/')?' · '+escape(chosen.alt):''}</p>`).childNodes[0];credit.parentNode=main;main.childNodes.push(credit);
 }
 const head=all.find(n=>n.nodeName==='head');if(!all.some(n=>attr(n,'data-tln-organization')!==undefined)){
  const script=parseFragment(`<script type="application/ld+json" data-tln-organization>${JSON.stringify({'@context':'https://schema.org',...organization})}</script>`).childNodes[0];script.parentNode=head;head.childNodes.push(script);
 }
 return serialize(tree);
}
