// FAQ.js

function faqSwitch(target) {
	$("#faq-general").addClass("display-hide");
	$("#faq-before").addClass("display-hide");
	$("#faq-during").addClass("display-hide");
	$("#faq-misc").addClass("display-hide");

	$("#faq-general").addClass("opacity-invisible");
	$("#faq-before").addClass("opacity-invisible");
	$("#faq-during").addClass("opacity-invisible");
	$("#faq-misc").addClass("opacity-invisible");

    $("#faq-general-nav").removeClass("active");
    $("#faq-before-nav").removeClass("active");
    $("#faq-during-nav").removeClass("active");
    $("#faq-misc-nav").removeClass("active");

    $(target + '-nav').addClass("active");
	$(target).removeClass("display-hide");

    window.setTimeout(function () {
        $(target).removeClass("opacity-invisible");
    }, 175);
}