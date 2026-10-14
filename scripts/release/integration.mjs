import fs from 'node:fs';
import path from 'node:path';
// Capture Vite's resolved module graph, including dynamic/glob dependencies.
export default function releaseIntegration() {
  if (!process.env.TLN_RELEASE_GRAPH) return {name:'tln-release-disabled'};
  const graph={schemaVersion:1,routes:[],modules:{}};
  const relative=id=>{const clean=id.split('?')[0];return clean.startsWith(process.cwd()+'/')?path.relative(process.cwd(),clean):null;};
  return {name:'tln-release-graph',hooks:{
    'astro:routes:resolved':({routes})=>{graph.routes=routes.map(r=>({pattern:r.route,component:r.component}));},
    'astro:build:setup':({target,updateConfig})=>{if(target!=='server')return;updateConfig({plugins:[{name:'tln-resolved-release-dependencies',generateBundle(){
      for(const id of this.getModuleIds()) { const name=relative(id);if(!name||name.startsWith('node_modules/'))continue;const info=this.getModuleInfo(id);graph.modules[name]=[...new Set([...(graph.modules[name]||[]),...info.importedIds,...info.dynamicallyImportedIds].map(x=>relative(x)||x).filter(x=>!x.startsWith('node_modules/')))]; }
      fs.writeFileSync(process.env.TLN_RELEASE_GRAPH,JSON.stringify(graph,null,2));
    }}]});}
  }};
}
