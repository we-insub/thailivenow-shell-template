import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {files,hashes,verifyCache,planChanges,overlay,assertScope,assertAssetReferences} from './core.mjs';
import {checkRuntime} from './runtime-check.mjs';
const args=process.argv.slice(2),value=k=>{const i=args.indexOf(k);return i<0?null:args[i+1];};
const root=process.cwd(),git=(...a)=>execFileSync('git',a,{cwd:root,encoding:'utf8'}).trim();
const commit=git('rev-parse',value('--commit')||'HEAD'),date=value('--date'),cache=value('--baseline')&&path.resolve(value('--baseline'));
if(!/^\d{4}-\d{2}-\d{2}$/.test(date||''))throw Error('Required --date YYYY-MM-DD (explicit release date)');
const out=path.resolve(value('--output')||'artifacts/release-candidate');
if(fs.existsSync(out))throw Error('Output exists; choose a new --output to preserve previous QA');
if(!/^[a-f0-9]{40}$/.test(commit))throw Error('Invalid commit');
const work=fs.mkdtempSync(path.join(os.tmpdir(),'tln-release-')),source=path.join(work,'source');fs.mkdirSync(source);
execFileSync('tar',['-x','-C',source],{input:execFileSync('git',['archive',commit],{cwd:root,maxBuffer:128*1024*1024})});
fs.mkdirSync(path.join(source,'artifacts'),{recursive:true});
// Only committed sources enter this directory; uncommitted files and unrelated QA never enter a release.
let baseline,graph,plan={mode:'full',changed:[],patterns:[],reasons:['No trusted baseline: bootstrap full build']};
if(cache){
 baseline=verifyCache(cache);graph=JSON.parse(fs.readFileSync(path.join(cache,'graph.json')));
 git('merge-base','--is-ancestor',baseline.commit,commit);
 const changed=git('diff','--name-only','--no-renames',baseline.commit,commit).split('\n').filter(Boolean);
 plan=planChanges(changed,graph);
 if(git('diff','--name-only','--no-renames','--diff-filter=D',baseline.commit,commit).split('\n').some(f=>f.startsWith('src/'))) {plan.mode='full';plan.reasons.push('Source deletion requires full route inventory');}
 const live=await fetch('https://thailivenow.com/data/site-dates.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Production baseline lookup failed');return r.json();});
 if(live.release?.commit!==baseline.commit)throw Error('Production advanced; rebuild from its verified baseline');
}
if(args.includes('--full')){plan.mode='full';plan.reasons.push('Explicit full build');}
const env={...process.env,SITE_DEPLOYMENT_DATE:date,SITE_RELEASE_COMMIT:commit,TLN_RELEASE_GRAPH:path.join(work,'graph.json')};
delete env.TLN_RELEASE_PATTERNS;if(plan.mode==='partial')env.TLN_RELEASE_PATTERNS=JSON.stringify(plan.patterns);
const run=(command,a)=>execFileSync(command,a,{cwd:source,env,stdio:'inherit'});
const started=Date.now();
// Reproducible dependencies, not the caller's mutable node_modules.
run('npm',['ci','--ignore-scripts','--no-audit','--no-fund']);
run(process.execPath,['--test',...files(path.join(source,'tests')).filter(f=>f.endsWith('.test.mjs'))]);
if(plan.mode==='full')run('npm',['run','build']);
else {run('npm',['run','test:seo']);run(process.execPath,['node_modules/astro/astro.js','build']);run(process.execPath,['scripts/generate-site-dates.mjs']);}
const deltaDir=path.join(source,'dist'),delta=hashes(deltaDir),rendered=Object.keys(delta).filter(f=>f.endsWith('.html'));
fs.mkdirSync(out,{recursive:true});
if(plan.mode==='partial')overlay(path.join(cache,'dist'),deltaDir,path.join(out,'dist'));else fs.cpSync(deltaDir,path.join(out,'dist'),{recursive:true});
const candidate=path.join(out,'dist');
const removed=plan.changed.filter(f=>f.startsWith('public/')&&!fs.existsSync(path.join(source,f))).map(f=>f.slice(7));
for(const f of removed)fs.rmSync(path.join(candidate,f),{force:true});
run(process.execPath,['scripts/prepare-site-dates.mjs',candidate]);
// All existing release gates inspect the COMPLETE merged site, not only changed HTML.
run(process.execPath,['scripts/audit-seo.mjs',candidate]);run(process.execPath,['scripts/audit-site-dates.mjs',candidate]);
const assetReferences=assertAssetReferences(candidate,removed);
const finalHashes=hashes(candidate);
if(plan.mode==='partial')assertScope(baseline.hashes,finalHashes,delta,removed);
fs.cpSync(path.join(source,'functions'),path.join(out,'functions'),{recursive:true});
fs.copyFileSync(path.join(work,'graph.json'),path.join(out,'graph.json'));
const runtime=await checkRuntime(source,candidate,commit);
const report={schemaVersion:1,runtime,assetReferences,commit,baselineCommit:baseline?.commit||null,plan,renderedHTML:rendered.length,totalHTML:Object.keys(finalHashes).filter(f=>f.endsWith('.html')).length,seconds:(Date.now()-started)/1000,hashes:finalHashes,graphHash:createHash('sha256').update(fs.readFileSync(path.join(out,'graph.json'))).digest('hex'),verifiedProduction:false,sourceDirectory:source};
fs.writeFileSync(path.join(out,'release.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify({mode:plan.mode,rendered:rendered.length,total:report.totalHTML,seconds:report.seconds,output:out}));
// Deploy only the exact audited candidate. The uploader uses this snapshot's Functions.
if(args.includes('--deploy')){
 // Repeat race check immediately before upload.
 if(baseline){const live=await fetch('https://thailivenow.com/data/site-dates.json',{cache:'no-store'}).then(r=>r.json());if(live.release?.commit!==baseline.commit)throw Error('Production changed before deploy');}
 const result=execFileSync('npx',['--yes','wrangler@4.151.0','pages','deploy',candidate,'--project-name','thai-live-now','--branch','main','--commit-hash',commit,'--commit-dirty=false'],{cwd:source,env,encoding:'utf8',maxBuffer:8*1024*1024});process.stdout.write(result);
 const deploymentURL=result.match(/https:\/\/[a-f0-9]+\.thai-live-now\.pages\.dev/)?.[0];if(!deploymentURL)throw Error('Deployment URL missing; do not mark baseline verified');
 report.deploymentURL=deploymentURL;fs.writeFileSync(path.join(out,'release.json'),JSON.stringify(report,null,2));
 console.log('Verify production, then run release:verify to promote this exact artifact.');
}
