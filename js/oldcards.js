var isDragging = false, isMouseDown = false;
var initialX, initialY;
var targetCard;

$('body')
	.on('mousedown', '.card', function(event) {
	  	if (!isDragging) {
		    initialX = event.pageX - $(this).offset().left;
		    initialY = event.pageY - $(this).offset().top;

		    $(this).addClass('visible-none');

		    $('body').append(
		    	'<div id="card" class="' + $(this).attr('class') + '">' +
					'<div class="vc">' +
						'<h3 class="category">' + $(this).find('.category').text() + '</h3>' +
						'<ul class="assigned">' +
							'<li><img src="images/sumin.jpg"/></li>' +
							'<li><img src="images/liam.jpg"/></li>' +
							'<li><img src="images/luke.jpg"/></li>' +
						'</ul>' +
						'<h2 class="task">' + $(this).find('.task').text() + '</h2>' +
						'<h3 class="due">' + $(this).find('.due').text() + '</h3>' +
					'</div>' +
				'</div>');

		    $('#card').removeClass('visible-none');

		    $('#card').css({
		    	'width': $(this).outerWidth(),
		    	'left': $(this).offset().left,
		    	'top': $(this).offset().top
		    });

		    $('#card').addClass('selected');
	  	}

	    targetCard = $(this);
	    isMouseDown = true;
	})
	.on('mousemove', function(event) {
	    if (isMouseDown) {
	    	isDragging = true;

	    	$('#card').css({
		    	top:   event.pageY - initialY,
		    	left:  event.pageX - initialX
		    });

	    	var parentClass = $(targetCard).parents('section').attr('class');;
	    	// console.log(parentClass);

	    	switch (cardSection(event.pageX)) {
	    		case 1:
	    			$('.progress').removeClass('selected');
		    		$('.complete').removeClass('selected');
			    	if (parentClass != 'todo')
				    	$('.todo').addClass('selected');
			    	break;

			    case 2:
			    	$('.todo').removeClass('selected');
		    		$('.complete').removeClass('selected');
			    	if (parentClass != 'progress')
				    	$('.progress').addClass('selected');
			    	break;

			    case 3:
			    	$('.todo').removeClass('selected');
	    			$('.progress').removeClass('selected');
			    	if (parentClass != 'complete')
				    	$('.complete').addClass('selected');
			    	break;

	    	}
	    }
	})
	.on('mouseup', '#card', function(event) {
		if (isMouseDown && !isDragging) {
			openModal();
			isMouseDown = false;
		}

		else if (isDragging) {
			$(targetCard).removeClass('visible-none');
			$('#card').remove();
			
			$('.todo').removeClass('selected');
			$('.progress').removeClass('selected');
			$('.complete').removeClass('selected');

			switch (cardSection(event.pageX)) {
				case 1:
					addTo('.todo', targetCard, event.pageY);
					break;

				case 2:
					addTo('.progress', targetCard, event.pageY);
					break;

				case 3:
					addTo('.complete', targetCard, event.pageY);
					break;
			}
			
			isDragging = false;
			isMouseDown = false;
		}
	});

function cardSection(x) {
	var todoLocation = $('.todo').offset(),
		progressLocation = $('.progress').offset(),
		completeLocation = $('.complete').offset();

	if (todoLocation.left <= x && progressLocation.left >= x)
		return 1;

	else if (progressLocation.left <= x && completeLocation.left >= x)
		return 2;

	else if (completeLocation.left <= x)
		return 3;

	return 0;
}

function cardOrder(section, y) {
	var index = 0;
	var previous;

	var height = $('.card').height(),
		margin = parseInt($('.card').css('margin-bottom'), 10);

	$(section).find('.card').each(function () {
		if (y - (height + margin) / 2 > $(this).offset().top) index++;

		else {
			console.log(index);
			return index;
		}
		previous = $(this);
	});
	console.log(index);
	return index;
}

function addTo(destination, target, y) {
	var parentClass = $(target).parents('section').attr('class');;

	var index = cardOrder(destination, y);
	if (!$(destination).find('.card').length) {
		console.log('No elements');
		if ($(destination).find('.add').length) {
			$(destination + ' .add').before(target);
		}

		else
			$(destination).append(target);
	}
	
	else if (index == 0) {
		$(destination + ' .card').first().before(target);
	}

	else if (index >= $(destination).find('.card').length) {
		$(destination + ' .card').last().after(target);
	}

	else {
		$(destination + ' .card').eq(index).before(target);
	}

	$(parentClass).remove(target);
}