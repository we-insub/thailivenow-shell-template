#!/usr/bin/env python3
"""Generate layout-locked, measured and outlined D-Ticket guide diagrams.
--check uses stdlib only; generation requires fontTools and the recorded OFL fonts.
"""
import argparse, copy, hashlib, json, math, re
from pathlib import Path
from xml.etree import ElementTree as E
ROOT=Path(__file__).resolve().parents[1]
DATA=ROOT/'src/data/transport-diagrams'
OUT=ROOT/'public/images/transport/train'
REPORT=DATA/'generated-manifest.json'
NS='http://www.w3.org/2000/svg'
E.register_namespace('',NS)
FONT_NAMES={'ko':'NotoSansCJKkr-Regular.otf','ja':'NotoSansCJKjp-Regular.otf','zh-cn':'NotoSansCJKsc-Regular.otf','zh-tw':'NotoSansCJKtc-Regular.otf','en':'NotoSans-Regular.ttf','ms':'NotoSans-Regular.ttf','ru':'NotoSans-Regular.ttf','es':'NotoSans-Regular.ttf'}
def sha(path):return hashlib.sha256(path.read_bytes()).hexdigest()
def inputs():
 layout=json.loads((DATA/'layout.json').read_text())
 paths=[DATA/'layout.json',*(DATA/(loc+'.json') for loc in FONT_NAMES),*(ROOT/v['source'] for v in layout.values())]
 return {str(p.relative_to(ROOT)):sha(p) for p in paths}
def check():
 m=json.loads(REPORT.read_text());assert m['inputs']==inputs(),'Diagram inputs changed; regenerate measured outlines.'
 for item in m['outputs']:
  p=ROOT/item['path'];assert sha(p)==item['sha256'],str(p)+' changed'
  tree=E.fromstring(p.read_text());assert not list(tree.iter('{'+NS+'}text')),'Unoutlined text'
  assert item['overflow']==0 and item['missingGlyphs']==0
 print(json.dumps({'diagrams':len(m['outputs']),'overflow':0,'missingGlyphs':0}))
def split_options(s):
 yield [s]
 for i in range(1,len(s)):
  # Keep Latin/Cyrillic words intact, but allow CJK to wrap between characters.
  if s[i-1].isspace() or s[i].isspace() or s[i-1]=='-' or not(s[i-1].isascii() and s[i].isascii()) and (ord(s[i-1])>0x2fff or ord(s[i])>0x2fff):
   a,b=s[:i].strip(),s[i:].strip()
   if a and b:yield [a,b]
def generate(font_dir):
 from fontTools.ttLib import TTFont
 from fontTools.pens.svgPathPen import SVGPathPen
 from fontTools.pens.boundsPen import BoundsPen
 fonts={}
 for loc,name in FONT_NAMES.items():
  path=font_dir/name
  f=TTFont(path);fonts[loc]=(f,f.getBestCmap(),f.getGlyphSet(),f['head'].unitsPerEm)
 layouts=json.loads((DATA/'layout.json').read_text());report={'inputs':inputs(),'fonts':{},'outputs':[]}
 for loc,name in FONT_NAMES.items():report['fonts'][loc]={'file':name,'sha256':sha(font_dir/name),'license':'SIL Open Font License 1.1'}
 for loc,(font,cmap,glyphs,upm) in fonts.items():
  labels=json.loads((DATA/(loc+'.json')).read_text())
  for name,layout in layouts.items():
   original=E.fromstring((ROOT/layout['source']).read_text());root=copy.deepcopy(original)
   text_nodes=list(root.iter('{'+NS+'}text'));assert len(text_nodes)==len(layout['texts'])
   metric_rows=[]
   def glyphrun(s):
    offset=0;paths=[];bounds=[]
    for c in s:
     if c=='▾':
      # UI disclosure triangle is a geometric icon, not a font-dependent glyph.
      paths.append((offset,f'M{upm*.15} {upm*.45} L{upm*.85} {upm*.45} L{upm*.5} {upm*.1} Z'));bounds.append((offset+upm*.15,-upm*.45,offset+upm*.85,-upm*.1));offset+=upm;continue
     if ord(c) not in cmap:raise ValueError(f'Missing glyph {loc} {c!r}')
     g=glyphs[cmap[ord(c)]];pen=SVGPathPen(glyphs);g.draw(pen);bp=BoundsPen(glyphs);g.draw(bp)
     if bp.bounds:
      x0,y0,x1,y1=bp.bounds;bounds.append((offset+x0,-y1,offset+x1,-y0))
     paths.append((offset,pen.getCommands()));offset+=g.width
    return offset,paths,bounds
   for old,spec in zip(text_nodes,layout['texts']):
    assert spec['key'] in labels;label=labels[spec['key']];group=E.Element('{'+NS+'}g',{'data-label-key':spec['key'],'aria-label':label,'fill':spec['fill']})
    if label:
     bx,by,bw,bh=spec['box'];best=None
     for size_step in range(101):
      size=spec['size']*(1-size_step*0.0025)
      if size<spec['size']*.75-0.001:break
      fits=[]
      for lines in split_options(label):
       runs=[glyphrun(line) for line in lines];scale=size/upm
       widths=[r[0]*scale for r in runs];height=size*(1+1.1*(len(lines)-1))
       if max(widths)<=bw+0.01 and height<=bh+0.01:fits.append((len(lines),abs(widths[0]-(widths[-1] if len(lines)>1 else widths[0])),lines,runs,widths))
      if fits:best=(size,min(fits,key=lambda x:(x[0],x[1])));break
     if best is None:raise ValueError(f'Overflow: {loc} {name} {spec["key"]} {label!r} in {spec["box"]}')
     size,(_,_,lines,runs,widths)=best;scale=size/upm
     # Centre the outlined glyph bounds inside the allotted text box.
     full=[]
     for li,((advance,paths,bounds),width) in enumerate(zip(runs,widths)):
      x=bx+(bw-width)/2 if spec['anchor']=='middle' else bx
      baseline=by+(bh-size*(1.1*(len(lines)-1)))/2+size*.35+li*size*1.1
      for offset,commands in paths:
       if commands:E.SubElement(group,'{'+NS+'}path',{'d':commands,'transform':f'translate({x+offset*scale:.5f} {baseline:.5f}) scale({scale:.8f} {-scale:.8f})'})
      for x0,y0,x1,y1 in bounds:full.append((x+x0*scale,baseline+y0*scale,x+x1*scale,baseline+y1*scale))
     if full:
      bounds=[min(x[0] for x in full),min(x[1] for x in full),max(x[2] for x in full),max(x[3] for x in full)]
      dy=by+(bh-(bounds[3]-bounds[1]))/2-bounds[1]
      group.set('transform',f'translate(0 {dy:.5f})');bounds=[bounds[0],bounds[1]+dy,bounds[2],bounds[3]+dy]
      if bounds[0]<bx-.1 or bounds[1]<by-.1 or bounds[2]>bx+bw+.1 or bounds[3]>by+bh+.1:raise ValueError(f'Glyph bounds overflow {loc} {spec["key"]}: {bounds} box {spec["box"]}')
     else:bounds=[]
     metric_rows.append({'key':spec['key'],'label':label,'size':round(size,4),'lines':lines,'box':spec['box'],'bounds':bounds})
    for parent in root.iter():
     if old in list(parent):index=list(parent).index(old);parent.remove(old);parent.insert(index,group);break
   root.set('lang',loc)
   root.find('{'+NS+'}title').text=labels[layout['texts'][0]['key']]
   root.find('{'+NS+'}desc').text=' · '.join(labels[x['key']] for x in layout['texts'] if labels[x['key']] and not labels[x['key']].isdigit())
   path=OUT/(name+'.'+loc+'.svg');E.indent(root);E.ElementTree(root).write(path,encoding='utf-8',xml_declaration=False)
   # Non-text source geometry must survive exactly in every locale.
   fixed=lambda r:[(e.tag,sorted(e.attrib.items())) for e in r.iter() if e.tag in ['{'+NS+'}rect','{'+NS+'}circle','{'+NS+'}marker']]
   assert fixed(root)==fixed(original)
   report['outputs'].append({'path':str(path.relative_to(ROOT)),'sha256':sha(path),'overflow':0,'missingGlyphs':0,'geometry':hashlib.sha256(repr(fixed(root)).encode()).hexdigest(),'measurements':metric_rows})
 REPORT.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');check()
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--check',action='store_true');parser.add_argument('--font-dir',type=Path);args=parser.parse_args()
 if args.check:check()
 else:
  if not args.font_dir:parser.error('--font-dir is required for generation')
  generate(args.font_dir)
