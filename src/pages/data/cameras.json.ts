import { cameras } from '../../data/cameras';

export function GET() {
  return new Response(JSON.stringify({ updated: '2026-10-12', cameras }, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
