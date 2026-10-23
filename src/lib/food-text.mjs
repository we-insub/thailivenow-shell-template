export const fmt=(template,vars={})=>String(template).replace(/\{(\w+)\}/g,(_,key)=>vars[key]??'');
