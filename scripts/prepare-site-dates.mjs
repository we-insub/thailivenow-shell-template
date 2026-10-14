import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {validDate,validDocument,SITE_TIME_ZONE} from '../src/lib/site-dates-runtime.mjs';
export const unknown={ko:'미확인',ms:'Belum disahkan','zh-cn':'未核查',en:'Not verified','en-in':'Not verified',ru:'Не проверено',ja:'未確認','en-gb':'Not verified','en-us':'Not verified',es:'Sin verificar','zh-tw':'未查核'};
export const dateLabels=[['출처 확인일','source'],['최근 배포일','deployment'],['Tarikh semakan sumber','source'],['Tarikh penerbitan terakhir','deployment'],['来源核查日期','source'],['最近发布日期','deployment'],['Source check date','source'],['Latest deployment date','deployment'],['Дата проверки источников','source'],['Дата последней публикации','deployment'],['情報源の確認日','source'],['最新公開日','deployment'],['Fecha de revisión de fuentes','source'],['Última fecha de publicación','deployment'],['來源查核日期','source'],['最近發布日期','deployment']];
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function bindDates(html,pagePath,dates) {
  const locale=pagePath.split('/')[1]||'en';let count=0;
  for(const [label,kind] of dateLabels) {
    const pattern=new RegExp(`(${label}:\\s*)(?:(<span\\b[^>]*>)([^<]*)(<\\/span>)|((?:\\d{4}-\\d{2}-\\d{2})|[^<\\n]*?(?:로컬 시안|local preview|tempatan|本地预览|локальный просмотр|ローカルプレビュー|vista previa local|本機預覽)))`,'g');
    html=html.replace(pattern,(all,prefix,opening,wrapped,closing,plain)=>{const old=wrapped||plain;
      count++;const value=kind==='deployment'?(validDate(old)?old:null):dates.pages?.[pagePath]?.sourceCheckedOn;
      return `${prefix}${opening||''}<time data-site-date="${kind}" data-page-path="${escape(pagePath)}" data-date-locale="${locale}"${validDate(value)?` datetime="${value}"`:''}>${validDate(value)?value:unknown[locale]||unknown.en}</time>${closing||''}`;
    });
  }
  html=html.replace(/document\.getElementById\("(?:src-date|deploy-date)"\)\.textContent\s*=\s*getOperationalDeployDate\(\);/g,'/* Date controlled by the Pages response snapshot. */');
  const cameraId=html.match(/data-camera-detail="([^"]+)"/)?.[1];
  if(cameraId){
    const checked=dates.cameras?.[cameraId]?.sourceCheckedOn;
    const labels=['페이지 확인일','Halaman disemak','页面确认日期','Page checked','Дата проверки страницы','ページ確認日','Fecha de comprobación','頁面確認日期'];
    const p=new RegExp(`(<dt[^>]*>(?:${labels.join('|')})<\\/dt><dd[^>]*>)(\\d{4}-\\d{2}-\\d{2})(<\\/dd>)`,'g');
    html=html.replace(p,(all,before,old,after)=>{count++;return `${before}<time data-site-date="camera-source" data-camera-id="${escape(cameraId)}" data-date-locale="${locale}" datetime="${checked||old}">${checked||old}</time>${after}`;});
  }
  if(count||html.includes('data-site-date=')){html=html.replaceAll('<script type="module" src="/site-dates-client.mjs"></script>','');html=html.replace(/<head\b([^>]*)>/,'<head$1><script type="module" src="/site-dates-client.mjs"></script>');}
  return {html,count,cameraId};
}
export function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
export function prepare(directory,documentPath='public/data/site-dates.json') {
  const dates=JSON.parse(fs.readFileSync(documentPath));if(!validDocument(dates))throw Error('Invalid release date document');
  let bindings=0,pages=0;const inventory=[];
  for(const file of walk(directory).filter(f=>f.endsWith('.html'))){
    const pagePath='/'+path.relative(directory,file).replaceAll(path.sep,'/').replace(/index\.html$/,'');
    const original=fs.readFileSync(file,'utf8');const result=bindDates(original,pagePath,dates);
    // Idempotence is mandatory: do not re-bind an existing runtime date.
    if(result.html!==original)fs.writeFileSync(file,result.html);
    const totalBindings=(result.html.match(/data-site-date="/g)||[]).length;pages++;bindings+=totalBindings;inventory.push({path:pagePath,bindings:totalBindings,cameraId:result.cameraId||null,hash:createHash('sha256').update(result.html).digest('hex')});
  }
  fs.mkdirSync(path.join(directory,'data'),{recursive:true});
  fs.copyFileSync(documentPath,path.join(directory,'data/site-dates.json'));
  fs.copyFileSync('public/site-dates-client.mjs',path.join(directory,'site-dates-client.mjs'));
  fs.copyFileSync('public/_routes.json',path.join(directory,'_routes.json'));
  console.log(JSON.stringify({pages,bindings,timeZone:SITE_TIME_ZONE}));return inventory;
}
if(process.argv[1]&&path.resolve(process.argv[1])===path.resolve(new URL(import.meta.url).pathname)){
  const directory=process.argv[2]||'dist';const inventory=prepare(directory,process.argv[3]);
  fs.mkdirSync('artifacts/site-dates-20261015',{recursive:true});fs.writeFileSync('artifacts/site-dates-20261015/page-inventory.json',JSON.stringify(inventory,null,2));
}
