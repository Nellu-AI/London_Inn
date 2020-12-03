$(document).ready(function(){
  $("#nav-button").on('click', openNavBar);
});












function openNavBar() {
  let icon = document.getElementById("icon-img");
  let x = document.getElementById("myTopnav");
  if (!x.classList.contains("responsive")) {
    x.classList.add("responsive");
    icon.className = "fas fa-times";
  } else {
    x.classList.remove("responsive");
    icon.className = "fa fa-bars";
  }

}
