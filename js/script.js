$(document).ready(function() {
	if (localStorage.getItem('companyNamePopupViewed') == null) {
		localStorage.setItem('companyNamePopupViewed', 1);

		setTimeout(function() {
			$(".pop-up").fadeIn("slow");
		}, 3000);

		var closePopup = function() {
			$(".pop-up").fadeOut("slow");
		};

		$(".pop-up .close").on("click", closePopup);

		$('.pop-up .form').submit(function(e){
			e.preventDefault();

			// AJAX

			closePopup();
		});

		$(document).keyup(function(e) {
			if (e.keyCode == 27) { // esc
				closePopup();
			}
		});	

		var sensitivity = 0.6;
		var prevScrollTop = 0;
		var shaving = $(".shaving");
		var chisel = $(".chisel");

		$(window).scroll(function(event){

			var scrollTop = $(this).scrollTop();
			var scrollIncrement = (scrollTop - prevScrollTop) * sensitivity;

			shaving.css("top", parseFloat(shaving.css("top")) + scrollIncrement + "px");
			chisel.css("top", parseFloat(chisel.css("top")) - scrollIncrement + "px");

			prevScrollTop = scrollTop;
		});
	}
});
