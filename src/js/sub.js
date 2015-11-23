$("#submitButton").click(function() {
	$.post(
		"infuture.io/subscribe", 
		$("#submitForm").serialize(),
		function(data) {
			data = $.parseJSON(data);
			console.log(data["message"]);
		}, 'json');
});