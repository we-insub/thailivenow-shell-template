import test from 'node:test';import assert from 'node:assert/strict';
import {fitMap,zoomMap,constrainMap} from '../src/lib/airport-map-viewport.mjs';
test('a tall floor plan starts completely visible and centred',()=>{const v=fitMap(1000,600,1000,1200);assert.equal(v.scale,.5);assert.equal(v.x,250);assert.equal(v.y,0);});
test('wheel zoom keeps the map point underneath the cursor',()=>{const v={...fitMap(1000,600,1000,600),scale:2,x:-300,y:-200};const p={x:450,y:250};const next=zoomMap(v,3,p);assert.equal((p.x-v.x)/v.scale,(p.x-next.x)/next.scale);assert.equal((p.y-v.y)/v.scale,(p.y-next.y)/next.scale);});
test('two-finger zoom follows the moving midpoint',()=>{const v={...fitMap(1000,600,1000,600),scale:2,x:-300,y:-200};const next=zoomMap(v,3,{x:450,y:250},{x:480,y:280});assert.equal((480-next.x)/next.scale,375);assert.equal((280-next.y)/next.scale,225);});
test('drag and zoom limits keep the map within reach',()=>{const v=fitMap(390,420,390,240);assert.equal(zoomMap(v,.01,{x:200,y:200}).scale,v.minScale);const next=constrainMap({...v,scale:3,x:9999,y:-9999});assert.equal(next.x,0);assert.equal(next.y,420-720);});
