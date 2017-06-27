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
	}
});
