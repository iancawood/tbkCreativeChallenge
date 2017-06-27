$(document).ready(function() {
	setTimeout(function() {
		$(".pop-up").fadeIn("slow");
 	}, 3000);

 	$(".pop-up .close").on("click", function() {
 		$(".pop-up").fadeOut("slow");
 	});

 	$('.pop-up .form').submit(function(e){
    	e.preventDefault();

    	// AJAX

    	$(".pop-up").fadeOut("slow");
    });
});
