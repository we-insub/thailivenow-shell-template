export function cameraViewingCopy(camera) {
  if (camera.kind === 'live-photo') return {label:'갱신 사진',short:'주기적으로 바뀌는 사진으로 현지 풍경을 볼 수 있어요.',help:'사진 제공 사이트에서 촬영 시각과 갱신된 사진을 확인하실 수 있어요.',button:'갱신 사진 보기',heading:'갱신 사진 보는 방법',url:camera.sourceUrl,steps:['위의 ‘갱신 사진 보기’를 눌러 사진 제공 사이트를 열어주세요.','사진에 표시된 촬영 시각을 확인해보세요. 사진은 주기적으로 바뀌며, 동영상처럼 계속 움직이지는 않아요.']};
  if (camera.kind === 'time-travel') return {label:'시간대별 영상',short:'원하는 시간대의 영상을 골라 현지 풍경을 볼 수 있어요.',help:'영상 제공 사이트에서 날짜와 시간대를 선택하실 수 있어요.',button:'시간대별 영상 보기',heading:'시간대별 영상 보는 방법',url:camera.sourceUrl,steps:['위의 ‘시간대별 영상 보기’를 눌러주세요.','제공 사이트에서 원하는 날짜와 시간대를 선택해 영상을 재생해주세요.']};
  const heading=camera.playback==='verified'?'실시간 라이브캠 보는 방법':'카메라 영상 보는 방법';
  if (camera.youtubeId) return {label:'유튜브 라이브캠',short:'이 페이지의 플레이어에서 영상을 보실 수 있어요.',help:'해당 영상은 유튜브 원본에서도 확인하실 수 있어요.',button:'유튜브 원본 영상 보기',heading,url:`https://www.youtube.com/watch?v=${camera.youtubeId}`,steps:['아래 플레이어의 재생 버튼을 눌러주세요.','유튜브에서 보시려면 위의 ‘유튜브 원본 영상 보기’를 눌러주세요.']};
  return {label:'카메라 영상',short:'영상 제공 사이트에서 현지 풍경을 보실 수 있어요.',help:'아래 방법에 따라 영상 제공 사이트에서 카메라를 열어보세요.',button:'카메라 영상 보기',heading,url:camera.sourceUrl,steps:['위의 ‘카메라 영상 보기’를 눌러 영상 제공 사이트를 열어주세요.','카메라 화면에서 재생 버튼을 눌러주세요. 영상이 나오지 않으면 제공 사이트의 안내를 확인해주세요.']};
}
export function cameraFaq(camera, editorial) {
  return editorial.faq ?? [];
}
