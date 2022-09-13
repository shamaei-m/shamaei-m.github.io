
var slides;
function slideshow() {
    slides.find('li:first').fadeOut('slow').next().fadeIn('slow').end().appendTo(slides);
}

$(document).ready(function () {
	$('#nav ul li').mouseover(function() {
		$(this).addClass('navHover');
	});
	$('#nav ul li').mouseout(function() {
		$(this).removeClass('navHover');
	});
	
   
	$('h1,h3').css({color: "blue", "font-style": "italic"});
	
	$('#familyPic div img').hover(function () {
		$(this).toggleClass("b");
		
		if($('.i2').hasClass('b')) {
			$('.f2').append("<p> Daniela</p>");
		}
		else if( $('.i1').hasClass('b')) {
			$('.f1').append("<p>Alexandra, Bijan, Nicolas</p>");
		}
		else {
			$('p').remove();
		}
	});
	
	$('.btnInc').click(function() {
		var w = $('.product img').width();
		var h= $('.product img').height();
		$('.product img').width(w * 1.2);
		$('.product img').height(h * 1.2);
		if($('.product img').width()>840) {
			$('.product img').width(w);
			$('.product img').height(h);
		}
	});
	
	$('.btnDec').click(function() {
		var w = $('.product img').width();
		var h= $('.product img').height();
		$('.product img').width(w * 0.8);
		$('.product img').height(h * 0.8);
		if($('.product img').width()<210) {
			$('.product img').width(w);
			$('.product img').height(h);
		}
	}); 
        
    slides = $('#slide-show');
    slides.find('li').hide().filter(':first').show();
    setInterval(slideshow, 3000);
   

});
