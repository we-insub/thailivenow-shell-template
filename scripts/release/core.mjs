import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
export function files(root) {return fs.readdirSync(root,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(root,e.name)):[path.join(root,e.name)]);}
export function hashes(root) {return Object.fromEntries(files(root).sort().map(f=>[path.relative(root,f),createHash('sha256').update(fs.readFileSync(f)).digest('hex')]));}
export function verifyCache(cache) {
  const meta=JSON.parse(fs.readFileSync(path.join(cache,'release.json')));
  if(meta.schemaVersion!==1||!meta.verifiedProduction||!/^https:\/\/[a-f0-9]+\.thai-live-now\.pages\.dev$/.test(meta.deploymentURL))throw Error('Baseline must be a verified production deployment');
  if(JSON.stringify(hashes(path.join(cache,'dist')))!==JSON.stringify(meta.hashes))throw Error('Baseline artifact hash mismatch');
  if(createHash('sha256').update(fs.readFileSync(path.join(cache,'graph.json'))).digest('hex')!==meta.graphHash)throw Error('Baseline dependency graph hash mismatch');
  return meta;
}
export function planChanges(changed,graph) {
  if(!Array.isArray(graph.routes)||!graph.routes.length||graph.routes.some(r=>typeof r.pattern!=='string'||typeof r.component!=='string')||!graph.modules)throw Error('Invalid resolved dependency graph');
  const reasons=[],affected=new Set();
  const global=changed.filter(f=>!f.startsWith('docs/')&&!f.endsWith('.md')&&!f.startsWith('tests/')&&!f.startsWith('public/')&&!f.startsWith('src/'));
  // Global scripts, dependency locks, Functions, config and date preparation are full-build gates.
  if(global.length)reasons.push('global build/runtime input: '+global.join(', '));
  const closure=(file,seen=new Set())=>{if(seen.has(file))return seen;seen.add(file);for(const dep of graph.modules[file]||[])closure(dep,seen);return seen;};
  for(const file of changed.filter(f=>f.startsWith('src/'))) {
    const users=graph.routes.filter(r=>closure(r.component).has(file));
    if(!users.length)reasons.push('unmapped source: '+file);
    for(const r of users)affected.add(r.pattern);
  }
  return {mode:reasons.length?'full':'partial',changed,patterns:[...affected].sort(),reasons};
}
export function overlay(base,delta,out) {
  fs.cpSync(base,out,{recursive:true});fs.cpSync(delta,out,{recursive:true});
}
export function assertScope(before,after,delta,removed=[]) {
  const allowed=new Set([...Object.keys(delta),...removed,'data/site-dates.json','sitemap.xml','robots.txt']);
  for(const [f,hash] of Object.entries(before))if(after[f]!==hash&&!allowed.has(f))throw Error('Unexpected output mutation: '+f);
}
