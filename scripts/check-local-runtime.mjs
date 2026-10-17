import fs from 'node:fs';
import {checkRuntime} from './release/runtime-check.mjs';
const dates=JSON.parse(fs.readFileSync('dist/data/site-dates.json'));
fs.mkdirSync('artifacts',{recursive:true});
console.log(JSON.stringify(await checkRuntime(process.cwd(),'dist',dates.release.commit),null,2));
