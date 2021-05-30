var nav = document.getElementById('nav');
var navBg = document.getElementById('navBg');

function activateShow() {
  nav.classList.toggle("show");
  navBg.classList.toggle("show");
}
navBg.onclick = function(){
  nav.classList.toggle("show");
  navBg.classList.toggle("show");
};