$(document).ready(function () {
    
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1200) {
         $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},1000);
	});
    }
});
    $(".btn-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
});
    
 
   }); //END READY
    