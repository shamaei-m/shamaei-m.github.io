$(document).ready(function() {
   $('#gallery ul a').click(function(e) {
      var url = $(this).attr('href');
      $('#description').load(url);
      e.preventDefault();
   })

	
	$('#gallery ul img').mouseover(function(){
        $(this).addClass('borderr');
    });
    $('#gallery ul img').mouseout(function(){
        $(this).removeClass('borderr');
    });
	
	$("#topnav li").prepend("<span></span>"); 
   
   $("#topnav li").each(function() { 
      var linkText = $(this).find("a").html(); 
      $(this).find("span").show().html(linkText); 
   }); 
   
   $("#topnav li").hover(function() { 
      $(this).find("span").stop().animate({ 
         marginTop: "-40" }, 250);
      }, 
      function() { 
      $(this).find("span").stop().animate({
         marginTop: "0" }, 250);
      }
   );
	
	
});