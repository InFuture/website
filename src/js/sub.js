$("#submitButton").click(function() {
	$.post(
		"infuture.io/subscribe", 
		$("#submitForm").serialize(),
		function(data) {
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

$("#submitButton2").click(function() {
	$.post(
		"infuture.io/subscribe", 
		$("#submitForm2").serialize(),
		function(data) {
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