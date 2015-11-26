$("#submitForn").submit(function () {
	$.post(
		"infuture.io/subscribe",
		$("#submitForm").serialize(),
		function (data) {
			data = $.parseJSON(data);
			if (data["success"] == 1) {
				// Good
				$(".intro > .container").append("<p class=\"response good\">" + data["message"] + "</p>")
			} else {
				// Bad
				$(".intro > .container").append("<p class=\"response bad\">" + data["message"] + "</p>")
			}
		}, 'json');
});

$("#submitForm2").submit(function () {
	$.post(
		"infuture.io/subscribe",
		{email: $("#submitForm2 > input").val()},
		function (data) {
			data = $.parseJSON(data);
			if (data["success"] == 1) {
				// Good
				$(".footer > .container").append("<p class=\"response good\">" + data["message"] + "</p>")
			} else {
				// Bad
				$(".footer > .container").append("<p class=\"response bad\">" + data["message"] + "</p>")
			}
		}, 'json');
});

