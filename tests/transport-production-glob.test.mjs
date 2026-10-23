import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {build} from 'vite';
test('production SSR bundle retains every eagerly localized dictionary',async()=>{
 const output=await fs.mkdtemp(path.join(os.tmpdir(),'tln-transport-glob-'));
 try{
  await build({configFile:false,logLevel:'silent',ssr:{noExternal:true},build:{ssr:'src/lib/transport-localization.mjs',outDir:output,emptyOutDir:false,minify:false,rollupOptions:{output:{entryFileNames:'transport.mjs'}}}});
  const module=await import(pathToFileURL(path.join(output,'transport.mjs')).href);
  for(const locale of ['en','ja','zh-cn','zh-tw','ms','ru','es']){
   assert.ok(Object.keys(module.transportDictionary(locale)).length>1878,locale+' production dictionary empty');
   assert.notEqual(module.transportText('태국 교통',locale),'태국 교통',locale+' production label stayed Korean');
  }
 }finally{await fs.rm(output,{recursive:true,force:true});}
});
