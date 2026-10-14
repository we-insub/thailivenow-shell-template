// 공통 운영배포일 함수 — 출처 확인일과 최근 배포일 모두 이 하나로 표시합니다.


document.addEventListener("DOMContentLoaded", function(){

  // 철도/보트 탭 (키보드 접근 가능)
  var tabs = document.querySelectorAll('.tabs [role="tab"]');
  tabs.forEach(function(tab){
    tab.addEventListener("click", function(){ selectTab(tab); });
    tab.addEventListener("keydown", function(e){
      if(e.key === "ArrowRight" || e.key === "ArrowLeft"){
        var i = Array.prototype.indexOf.call(tabs, tab);
        var n = e.key === "ArrowRight" ? (i+1)%tabs.length : (i-1+tabs.length)%tabs.length;
        tabs[n].focus(); selectTab(tabs[n]); e.preventDefault();
      }
    });
  });
  function selectTab(tab){
    tabs.forEach(function(t){ t.setAttribute("aria-selected","false"); });
    tab.setAttribute("aria-selected","true");
    document.querySelectorAll("[data-tabpanel]").forEach(function(p){
      p.hidden = p.getAttribute("data-tabpanel") !== tab.getAttribute("data-tab");
    });
  }

  // 출발·도착 선택 → 외부 경로 안내 (Google Maps)
  var go = document.getElementById("route-go");
  if(go){
    go.addEventListener("click", function(){
      var from = document.getElementById("route-from").value;
      var to = document.getElementById("route-to").value;
      if(!from || !to || from === to){ alert("출발지와 도착지를 서로 다르게 선택해 주세요."); return; }
      var url = "https://www.google.com/maps/dir/?api=1&origin=" + encodeURIComponent(from) + "&destination=" + encodeURIComponent(to) + "&travelmode=transit";
      window.open(url, "_blank", "noopener");
    });
  }
});
