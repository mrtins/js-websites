jQuery(document).ready(function($) {
	var answer = $('#answer');

	$('.wrong').click(function() {
		answer.addClass('alert-danger')
		answer.text("Not this one");
		$('.wrong').click(function(event) {
			answer.text("Still not this one");
		});
	});

	$('.correct').click(function() {
		/* Act on the event */
		answer.removeClass('alert-danger');
		answer.addClass('alert-success')
		answer.text('Perfect choise!');
		console.log('oi');
	});
});