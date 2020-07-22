// slider
const slider = tns({
  container: ".slide-wrapper",
  fixedWidth: 300,
  items: 4,
  mouseDrag: true,
  swipeAngle: false,
  autoplay: true,
  speed: 100,
});

//toggle hamburger menu
$(document).ready(function () {
  $("#nav-hamburger").click(function () {
    $(this).toggleClass("open");
  });
});
