// JavaScript source code
$(document).ready(function () {
  $("#table ul li ").hover(function () {
    $(this).toggleClass("hoverTab");
  });
});

$(function () {
  $("#tabs").tabs();
});
