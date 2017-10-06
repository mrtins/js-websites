var red = $('#red');
var green = $('#green');
var blue = $('#blue');
var body = $('body');

jQuery(document).ready(function($) {
	red.click(function() {
		body.css('background-color', 'red');
	});	

	green.click(function() {
		body.css('background-color', 'green');
	});

	blue.click(function(event) {
		body.css('background-color', 'blue');
	});
});