import {applySiteDate,validDocument,snapshotScript} from '../src/lib/site-dates-runtime.mjs';
export async function onRequest({request,env,next}) {
  let response=await next();
  const url=new URL(request.url);
  if (request.method!=='GET'||response.status!==200||!response.headers.get('content-type')?.includes('text/html')) return response;
  response=new Response(response.body,response);
  if(url.hostname.endsWith('.pages.dev')) response.headers.set('X-Robots-Tag','noindex, nofollow');
  try {
    const result=await env.ASSETS.fetch(new URL('/data/site-dates.json',url));
    if(!result.ok)return response;
    const dates=await result.json();
    if(!validDocument(dates))return response;
    const cameraId=url.pathname.match(/\/cameras\/([^/]+)\//)?.[1];
    const snapshot={...dates,cameras:cameraId&&Object.hasOwn(dates.cameras??{},cameraId)?{[cameraId]:dates.cameras[cameraId]}:{},
      pages:Object.hasOwn(dates.pages??{},url.pathname)?{[url.pathname]:dates.pages[url.pathname]}:{}};
    const rewritten=new HTMLRewriter().on('[data-site-date]',{element(element){applySiteDate(element,dates);}})
      .on('head',{element(element){element.append(snapshotScript(snapshot),{html:true});}}).transform(response);
    rewritten.headers.set('Cache-Control','no-cache');
    rewritten.headers.delete('ETag');rewritten.headers.delete('Content-Length');
    return rewritten;
  } catch {return response;}
}
