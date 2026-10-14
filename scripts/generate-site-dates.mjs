import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {validDate,SITE_TIME_ZONE} from '../src/lib/site-dates-runtime.mjs';
const observations=JSON.parse(fs.readFileSync('data/site-date-observations.json'));
let previous;try{previous=JSON.parse(fs.readFileSync('public/data/site-dates.json')).deploymentDate;}catch{}
const baseline=JSON.parse(fs.readFileSync('data/runtime-date-baseline.json')).deploymentDate;
const deploymentDate=process.env.SITE_DEPLOYMENT_DATE||previous||baseline;
if(!validDate(deploymentDate))throw Error('SITE_DEPLOYMENT_DATE must explicitly identify the release (YYYY-MM-DD); never default to today');
const commit=process.env.SITE_RELEASE_COMMIT||execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
if(!/^[a-f0-9]{40}$/.test(commit))throw Error('Invalid release commit');
const document={schemaVersion:1,timeZone:SITE_TIME_ZONE,deploymentDate,release:{commit,activation:'Cloudflare Pages successful deployment; assets are deployment-scoped'},cameras:observations.cameras,pages:observations.pages};
fs.mkdirSync('public/data',{recursive:true});fs.writeFileSync('public/data/site-dates.json',JSON.stringify(document,null,2)+'\n');
console.log(JSON.stringify({deploymentDate,commit,cameras:Object.keys(document.cameras).length,pages:Object.keys(document.pages).length}));
