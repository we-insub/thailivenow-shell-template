// Airport guides share a navigation home even when retained URLs live in
// airport-assistance or transport. Disruption guides keep their own home.
export function isKoreanAirportGuide(pathname) {
  return /^\/ko\/airport-assistance\/airports\/(bkk|dmk|hkt|cnx)\/(?:[^?#]*)$/.test(pathname)
    || pathname === '/ko/transport/airports/suvarnabhumi-to-bangkok/'
    || /^\/ko\/airport-assistance\/guides\/(?:late-arrival-(?:suvarnabhumi|don-mueang|phuket|chiang-mai)|find-airline-counter|daegu-bangkok-timetable)\/$/.test(pathname);
}
