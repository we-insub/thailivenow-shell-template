// Use the same public video as the detail player; regional photos are not video previews.
export function cameraVideoPreview(camera) {
 const id=camera.youtubeId;
 return typeof id==='string'&&/^[\w-]{11}$/.test(id)
  ? {kind:'video',url:`https://i.ytimg.com/vi/${id}/hqdefault.jpg`,sourceUrl:`https://www.youtube.com/watch?v=${id}`,label:'영상 미리보기 · 실시간 화면 아님',credit:'YouTube · 원본 운영자'}
  : undefined;
}
export function cameraCardPreview(camera) {
 return cameraVideoPreview(camera) || (camera.preview?.license&&camera.preview?.licenseUrl
  ? {...camera.preview,kind:'reference',label:'지역 참고사진 · 카메라 화면 아님'} : undefined);
}
