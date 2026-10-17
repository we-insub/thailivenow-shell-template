// A final breadcrumb may omit item. Every supplied item must identify an
// absolute HTTP(S) page, including the object form Google reads as @id.
export function breadcrumbUrlErrors(schema) {
 const errors=[];
 const valid=url=>{
  if(typeof url!=='string'||!/^https?:\/\//i.test(url)||url.trim()!==url)return false;
  try{return Boolean(new URL(url).hostname);}catch{return false;}
 };
 const visit=value=>{
  if(!value||typeof value!=='object')return;
  const types=[value['@type']].flat();
  if(types.includes('BreadcrumbList')){
   for(const [index,entry] of (value.itemListElement||[]).entries()){
    const item=entry.item;
    if(item===undefined&&index===value.itemListElement.length-1)continue;
    const url=typeof item==='string'?item:item?.['@id'];
    if(!valid(url))errors.push(`BreadcrumbList itemListElement[${index}].item must use an absolute HTTP(S) URL`);
   }
  }
  Object.values(value).forEach(child=>Array.isArray(child)?child.forEach(visit):visit(child));
 };
 visit(schema);
 return errors;
}
