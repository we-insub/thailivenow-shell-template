export function fitMap(width,height,imageWidth,imageHeight){
 const minScale=Math.min(1,height/(imageHeight||1));
 return {width,height,imageWidth,imageHeight,minScale,maxScale:minScale*12,scale:minScale,x:(width-imageWidth*minScale)/2,y:(height-imageHeight*minScale)/2};
}
export function constrainMap(view){
 const limit=(position,viewport,image)=>image<=viewport?(viewport-image)/2:Math.max(viewport-image,Math.min(0,position));
 return {...view,x:limit(view.x,view.width,view.imageWidth*view.scale),y:limit(view.y,view.height,view.imageHeight*view.scale)};
}
export function zoomMap(view,scale,point,nextPoint=point){
 const nextScale=Math.max(view.minScale,Math.min(view.maxScale,scale));
 const ratio=nextScale/view.scale;
 return constrainMap({...view,scale:nextScale,x:nextPoint.x-(point.x-view.x)*ratio,y:nextPoint.y-(point.y-view.y)*ratio});
}
