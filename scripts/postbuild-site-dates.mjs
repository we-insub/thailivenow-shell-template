import {execFileSync} from 'node:child_process';
for(const args of [['--test','tests/site-dates-runtime.test.mjs'],['scripts/generate-site-dates.mjs'],['scripts/prepare-site-dates.mjs','dist'],['scripts/audit-site-dates.mjs','dist'],['scripts/generate-editorial-image-rights.mjs','--check'],['scripts/audit-detail-editorial.mjs','dist']])execFileSync(process.execPath,args,{stdio:'inherit'});
