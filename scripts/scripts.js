$(document).ready(function () {

	// Validate text box, then add value in text box to list

	$('#add-button').click(function() {
		if( $('input#add-todo').val().trim().length == 0 ) {
				// alert("put something here");
				$('#error').show();
				$('input#add-todo').val("");
		} else { 

		$('ul').append('<li class="todo"><button class="item">Done</button>' + $('input#add-todo').val() + '</li>');
		$('input#add-todo').val("");
		$('#error').hide();

		};	
	
	});

	// Change class when user clicks Done button	

	$('ul').on('click', '.item', function() {
		$(this).closest('li').toggleClass('todo done');
		$(this).remove();
	});

});