import fs from 'node:fs';import path from 'node:path';import net from 'node:net';import {request as httpRequest} from 'node:http';import {spawn} from 'node:child_process';
export async function checkRuntime(source,candidate,commit) {
 const server=net.createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const port=server.address().port;await new Promise(resolve=>server.close(resolve));
 fs.cpSync(candidate,path.join(source,'release-runtime'),{recursive:true});
 const log=fs.openSync(path.join(source,'artifacts/release-runtime.log'),'a');
 const child=spawn('npx',['--yes','wrangler@4.151.0','pages','dev','release-runtime','--port',String(port),'--ip','127.0.0.1','--compatibility-date','2026-10-12'],{cwd:source,stdio:['ignore',log,log],detached:true});
 const base='http://127.0.0.1:'+port,checks=[];
 try {
  let ready=false;for(let i=0;i<120;i++){try{const r=await fetch(base+'/data/site-dates.json',{signal:AbortSignal.timeout(500)});if(r.ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,500));}
  if(!ready)throw Error('Pages runtime failed to start');
  const dates=await fetch(base+'/data/site-dates.json').then(r=>r.json());if(dates.release?.commit!==commit)throw Error('Local runtime release mismatch');
  const expected=JSON.parse(fs.readFileSync(path.join(candidate,'data/site-dates.json')));if(JSON.stringify(dates)!==JSON.stringify(expected))throw Error('Local runtime observations changed');
  for(const lang of ['ko','ms','zh-cn','en','en-in','ru','ja','en-gb','en-us','es','zh-tw']) {
   const url='/'+lang+'/';const r=await fetch(base+url),html=await r.text();if(!r.ok||!html.includes('id="site-dates-response"')||!html.includes(commit))throw Error('Runtime HTML failure: '+url);checks.push(url);
  }
  for(const file of ['data/cameras.json','analytics-consent.mjs','sitemap.xml','robots.txt']){const r=await fetch(base+'/'+file);if(!r.ok||Buffer.compare(Buffer.from(await r.arrayBuffer()),fs.readFileSync(path.join(candidate,file))))throw Error('Runtime asset changed: '+file);checks.push(file);}
  const preview=await new Promise((resolve,reject)=>{const req=httpRequest(base+'/ko/',{headers:{Host:'release-check.thai-live-now.pages.dev'}},res=>{let html='';res.on('data',chunk=>html+=chunk);res.on('end',()=>resolve({headers:res.headers,html}));});req.on('error',reject);req.end();});if(!preview.headers['x-robots-tag']?.includes('noindex')&&!preview.html.includes('noindex'))throw Error('Preview noindex missing');
  return {passed:true,checks};
 }finally{try{process.kill(-child.pid,'SIGTERM');}catch{}fs.closeSync(log);}
}
