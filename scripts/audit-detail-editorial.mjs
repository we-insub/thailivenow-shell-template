import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {parse} from 'parse5';
import {isDetailPath,detailPath,bylineLabels,organization,sharingImage} from '../src/lib/detail-editorial-policy.mjs';
import {siteBrand} from '../src/lib/site-brand.mjs';
import {deploymentLabels} from '../src/lib/public-date-policy.mjs';
const directory=path.resolve(process.argv[2]||'dist'),output=process.env.TLN_EDITORIAL_REPORT||'artifacts/detail-editorial-audit.json';
const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(p,e.name)):[path.join(p,e.name)]);
const nodes=n=>[n,...(n.childNodes||[]).flatMap(nodes)],attr=(n,k)=>n?.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).filter(n=>!['script','style'].includes(n.nodeName)).map(text).join('');
const errors=[],missing=[],languages={};let pages=0,details=0,verifiedImages=0,sourceRecords=0,cameraRecords=0;
for(const file of walk(directory).filter(f=>f.endsWith('.html'))){
 const pathname='/'+path.relative(directory,file).replaceAll(path.sep,'/').replace(/index\.html$/,'');pages++;
 const html=fs.readFileSync(file,'utf8'),all=nodes(parse(html)),visible=text(all[0]);
 if(all.some(n=>(attr(n,'id')==='deploy-date'||attr(n,'data-deploy-date')!==undefined)&&/\d{4}-\d{2}-\d{2}/.test(text(n))&&!nodes(n).some(c=>attr(c,'data-site-date')==='source'&&attr(c,'datetime'))))errors.push(pathname+': legacy deployment value survived');
 if(all.some(n=>attr(n,'data-site-date')==='deployment'))errors.push(pathname+': public deployment date marker');
 for(const label of deploymentLabels)if(visible.includes(label))errors.push(pathname+': public deployment label '+label);
 for(const n of all)if(attr(n,'data-site-date')==='source'&&attr(n,'datetime'))sourceRecords++;else if(['camera-source','camera-link'].includes(attr(n,'data-site-date')))cameraRecords++;
 if(!isDetailPath(pathname))continue;details++;const locale=detailPath(pathname).split('/')[1];languages[locale]=(languages[locale]||0)+1;
 const lines=all.filter(n=>attr(n,'data-tln-editorial-byline')!==undefined),heading=all.find(n=>n.nodeName==='h1');
 if(lines.length!==1||!text(lines[0]).includes((bylineLabels[locale.startsWith('en')?'en':locale]||bylineLabels.en)+' '+siteBrand(locale)))errors.push(pathname+': missing/incorrect localized byline');
 if(heading?.parentNode?.childNodes.indexOf(lines[0])!==heading?.parentNode?.childNodes.indexOf(heading)+1)errors.push(pathname+': byline must immediately follow H1');
 const meta=k=>attr(all.find(n=>n.nodeName==='meta'&&(attr(n,'name')===k||attr(n,'property')===k)),'content');
 if(meta('author')!=='ThaiLiveNow')errors.push(pathname+': author meta');
 const chosen=sharingImage(html,pathname);if(meta('og:image')!==chosen.url||meta('twitter:image')!==chosen.url||meta('og:image:alt')!==chosen.alt||meta('twitter:image:alt')!==chosen.alt||meta('tln:share-image-status')!==chosen.status)errors.push(pathname+': sharing image/alt/evidence mismatch');
 if(chosen.status==='missing-place-image')missing.push({path:pathname,reason:chosen.reason});else {verifiedImages++;const credit=all.find(n=>attr(n,'data-tln-sharing-credit')!==undefined);if(!credit||!nodes(credit).some(n=>n.nodeName==='a'&&attr(n,'href')===chosen.sourceUrl))errors.push(pathname+': sharing image source/credit missing');}
 const schemas=all.filter(n=>n.nodeName==='script'&&attr(n,'type')==='application/ld+json').flatMap(n=>{try{return [JSON.parse(n.childNodes[0].value)];}catch{return [];}});
 let pageFound=false,orgFound=false;
 const visit=v=>{if(!v||typeof v!=='object')return;if(v['@type']==='Organization'&&v['@id']===organization['@id'])orgFound=true;if([v['@type']].flat().includes('WebPage')){pageFound=true;if(v.author?.['@id']!==organization['@id']||v.publisher?.['@id']!==organization['@id'])errors.push(pathname+': WebPage author/publisher');}Object.values(v).forEach(c=>Array.isArray(c)?c.forEach(visit):visit(c));};schemas.forEach(visit);
 if(!pageFound||!orgFound)errors.push(pathname+': unresolved organization/page schema');
}
const report={pages,details,languages,verifiedImages,missingPlaceImages:missing.length,sourceRecords,cameraRecords,missing,errors};fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,missing:undefined}));assert.equal(errors.length,0,'Editorial policy failed; see '+output);
