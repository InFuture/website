$("#submitButton").click(function () {
	if (validateEmail($("#submitForm").val())) {
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
	}
});

$("#submitButton2").click(function () {
	if (validateEmail($("#submitForm2").val())) {
		console.log($("#submitForm2").serialize());
		$.post(
			"infuture.io/subscribe",
			// $(#submitForm2).serialize();
			"email: "+ $("#submitForm2").val(),
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
	} 
});

function validateEmail(sEmail) {
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (filter.test(sEmail)) {
		return true;
	}
	else {
		return false;
	}
}