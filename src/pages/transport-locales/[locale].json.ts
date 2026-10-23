import {transportLocales,transportDictionary} from '../../lib/transport-localization.mjs';
import related from '../../data/transport-related-route-map.json';
export function getStaticPaths(){return transportLocales.filter(locale=>locale!=='ko').map(locale=>({params:{locale}}));}
export function GET({params}){return new Response(JSON.stringify({locale:params.locale,dictionary:transportDictionary(params.locale),related}),{headers:{'content-type':'application/json; charset=utf-8','cache-control':'public, max-age=0, must-revalidate'}});}
