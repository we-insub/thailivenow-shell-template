import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const required=JSON.parse(fs.readFileSync('docs/handoff-required-files.json'));
const tracked=new Set(execFileSync('git',['ls-files','-z'],{encoding:'utf8'}).split('\0'));
const failures=required.filter(file=>!fs.existsSync(file)||!tracked.has(file));
if(failures.length)throw Error('Missing or untracked required files: '+failures.join(', '));
console.log(`Handoff: ${required.length} required files exist and are tracked`);
