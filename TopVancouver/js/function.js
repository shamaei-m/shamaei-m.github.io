$(document).ready(function() {
	$("#topnav li").prepend("<span></span>");
	$("#topnav li").each(function() {
		var linkText = $(this).find("a").html();
		$(this).find("span").show().html(linkText);
	});
	$("#topnav li").hover(function() {
		$(this).find("span").stop().animate({
			marginTop: "-40"
		}, 250);
	} , function() {
		$(this).find("span").stop().animate({
			marginTop: "0"
		}, 250);
	});
	
	
});

$(function () {
	
  var sliderWrapper = $("#slider");
  var sliderList = sliderWrapper.children("ul");
  var sliderItems = sliderList.children("li");
  var buttons = sliderWrapper.children(".button");
  var animateSlider = function(direction, duration, callback) {
    sliderList.stop(true, true).animate({
      "margin-left" : direction + "=400px"
    }, duration, callback);
  };

  var isAtStart = function() {
    return parseInt(sliderList.css("margin-left"), 10) > -400;
  };

  var isAtEnd = function() {
    var imageWidth = sliderItems.first().width();
    var imageCount = sliderItems.length;
    var maxMargin = -1 * (imageWidth * (imageCount-2));
    return parseInt(sliderList.css("margin-left"), 10) < maxMargin;
  }

  buttons.on("click", function() {
    var $this = $(this);
    var isBackBtn = $this.hasClass("back");
    if( (isBackBtn && isAtStart()) || (!isBackBtn && isAtEnd()) ) { return; }
    animateSlider(( isBackBtn ? "+" : "-"), 2000);
  });
	
	$('#slider .button').hover(function () {
		$(this).toggleClass("curcer");
	});

	$("#tabs").tabs();
});
