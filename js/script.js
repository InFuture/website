var subscribe_form = function(id) {
	$.post(
		"/subscribe",
		{
			"email": $("#sub-form" + id + " > input").val()
		},
		function (data) {
			data = $.parseJSON(data);
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