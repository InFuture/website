var subscribe_form = function(id) {
	$.post(
		"/subscribe",
		{
			"email": $("#sub-form" + id + " > input").val()
		},
		function (data) {
			// data = $.parseJSON(data);
			if (data["success"] == 1) {
				// Good
				$('#email-status').removeClass('bad');
				$('#email-status').addClass('good');
			}

			else {
				// Bad
				$('#email-status').removeClass('good');
				$('#email-status').addClass('bad');
			}

			$('#email-status').text(data["message"]);
		},
		"json"
	);
};

function switchTo(section) {
	for (var i = 1; i <= 4; i++) {
		$('#faqrow-' + i).addClass("display-none");
		$('#faqrow-' + i).addClass("visible-none");
		$('#navtab-' + i).removeClass("active");
	}

	$('#navtab-' + section).addClass("active");
	$('#faqrow-' + section).removeClass("display-none");

	window.setTimeout(function () {
		$('#faqrow-' + section).removeClass("visible-none");
	}, 175);
}
