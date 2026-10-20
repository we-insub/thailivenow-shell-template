import {parse,serialize} from 'parse5';
export const deploymentLabels=['최근 배포일','운영 배포일','Latest deployment date','Tarikh penerbitan terakhir','最近发布日期','最近發布日期','Дата последней публикации','最新公開日','Última fecha de publicación'];
const nodes=n=>[n,...(n.childNodes||[]).flatMap(nodes)];const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const remove=n=>{if(n.parentNode)n.parentNode.childNodes=n.parentNode.childNodes.filter(x=>x!==n);};
const plain=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).filter(c=>!['script','style'].includes(c.nodeName)).map(plain).join('');
const escaped=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const deploymentPattern=new RegExp('(?:'+deploymentLabels.map(escaped).join('|')+')\\s*[:：]?\\s*(?:\\d{4}-\\d{2}-\\d{2})?','g');
export function suppressPublicDates(html){
 if(!/data-site-date|deploy-date|출처 확인일|Source check date|最近发布日期|最近發布日期|최근 배포일|운영 배포일|Latest deployment date|Tarikh penerbitan terakhir|Дата последней публикации|最新公開日|Última fecha de publicación/.test(html))return html;
 const tree=parse(html);
 const onlyDeployment=new RegExp('^(?:'+deploymentLabels.map(escaped).join('|')+')\\s*[:：]?\\s*(?:\\d{4}-\\d{2}-\\d{2}|미확인|Not verified|—)?\\s*$');
 for(const n of nodes(tree))if(['p','span','small'].includes(n.nodeName)&&onlyDeployment.test(plain(n).trim())&&!nodes(n).some(x=>['a','img'].includes(x.nodeName)))remove(n);
 const all=nodes(tree);
 for(const n of all){const kind=attr(n,'data-site-date');if(!kind)continue;
  const unknown=['source','modified'].includes(kind)&&!attr(n,'datetime');if(kind!=='deployment'&&!unknown)continue;
  let root=n.parentNode;while(root?.parentNode&&!['p','div','li','dd','td','footer'].includes(root.nodeName))root=root.parentNode;
  const leaves=nodes(root||tree).filter(x=>x.nodeName==='#text'||x===n);const i=leaves.indexOf(n);const before=leaves[i-1];
  if(before?.nodeName==='#text'){
   // Remove only the label attached to this date, never neighbouring prose or evidence.
   before.value=before.value.replace(/(?:^|[·|]\s*|\n)([^.:。\n]{0,100}[:：]\s*)$/u,'');
   if(!before.value.trim())remove(before);
  }
  const parent=n.parentNode;const next=parent?.childNodes[parent.childNodes.indexOf(n)+1];remove(n);if(next?.nodeName==='br')remove(next);
 }
 for(const n of nodes(tree))if(n.nodeName==='#text'&&!['script','style'].includes(n.parentNode?.nodeName))n.value=n.value.replace(deploymentPattern,'');
 const orphanSource=/^(?:출처 확인일|Source check date|Tarikh semakan sumber|来源核查日期|來源查核日期|Дата проверки источников|情報源の確認日|Fecha de revisión de fuentes)\s*[:：]\s*$/;
 for(const n of nodes(tree))if(['p','span','small'].includes(n.nodeName)&&orphanSource.test(plain(n).trim())&&!nodes(n).some(x=>['time','a','img'].includes(x.nodeName)))remove(n);
 // Date-only wrappers can become empty; their removal must not touch media/source records.
 for(const n of nodes(tree).reverse())if(['p','span','small'].includes(n.nodeName)&&!nodes(n).some(x=>['img','a','time','button'].includes(x.nodeName))&&!nodes(n).filter(x=>x.nodeName==='#text').some(x=>x.value.replace(/[\s·|:：—-]/g,'').length)&&!attr(n,'id')&&!n.attrs?.some(a=>a.name.startsWith('data-')||a.name==='role'||a.name==='aria-live'))remove(n);
 return serialize(tree);
}
