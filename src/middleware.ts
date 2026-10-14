import { defineMiddleware } from 'astro:middleware';
import { omitUnchangedPage } from './lib/partial-render.mjs';
import { applyPageSEO } from './lib/page-seo.mjs';
import { applySiteIntegrations } from './lib/site-integrations.mjs';
export const onRequest = defineMiddleware(async (context, next) => {
  if (omitUnchangedPage(context.routePattern)) return new Response(null, {status:204});
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html') || response.status !== 200) return response;
  const html = await response.text();
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response(applyPageSEO(applySiteIntegrations(html), context.url.pathname), { status: response.status, statusText: response.statusText, headers });
});
