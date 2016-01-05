// Nav.js

$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar").addClass("nav-scrolled");
	}

	else {
		$(".navbar").removeClass("nav-scrolled");
	}
});