$(document).ready(function () {
  $(".open-menu").click(function () {
    $(".navigation").slideToggle();
  });

  var typed = new Typed("#t1", {
    strings: ["MARYAM SHAMAEI", "A Creative Web Designer and Developer"],
    showCursor: false,
    typeSpeed: 70,
    fadeOut: true,
    loop: true,
  });
});
