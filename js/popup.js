function openModal() {
	$.featherlight(
	    '<html>' +
	        '<head>' +
	        '</head>' +
	        '<body>' +
	            '<div class="popup">' +
	                '<fieldset>' +
	                    '<label for="task">Task</label>' +
	                    '<input type="text" id="task" name="task" placeholder="Something to do">' +
	                '</fieldset>' +
	                '<div class="row">' +
	                    '<fieldset>' +
	                        '<label for="task">Category</label>' +
	                        '<input type="text" id="task" name="task" placeholder="Something to do">' +
	                    '</fieldset>'+
	                    '<fieldset>' +
	                        '<label for="task">Due On</label>' +
	                        '<input type="text" id="task" name="task" placeholder="Something to do">' +
	                    '</fieldset>' +
	                '</div>' +
	                '<fieldset>' +
	                    '<label for="task">Assigned To</label>' +
	                    '<input type="text" id="task" name="task" placeholder="Assign to Person">' +
	                '</fieldset>' +
	                '<button>Save</button>' +
	            '</div>' +
	        '</body>' +
	    '</html>',
	    {
	        'jquery/image/html/ajax/text': 'html',
	    }
	);

	$.featherlight.defaults.afterClose = function() {
	    var s = $('html').scrollTop();    
	    $('html').css('overflow', 'auto');
	    $('html').scrollTop(s);
	    $(this).remove();
	};

	$('.featherlight-content').addClass('featherlight-close');

	$('.featherlight-content div').click(function(e) {
	    e.stopPropagation();
	});
}

var modalMouseDown = false;
$('body')
	.on('mousedown', '.add', function(event) {
		modalMouseDown = true;
	})
	.on('mouseup', '.add', function(event) {
		if (modalMouseDown) {
			openModal();
			modalMouseDown = false;
		}
	});
