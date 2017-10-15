jQuery(document).ready(function($) {

	$('#button').click(function(event) {
		$('#ball').animate({
			top: Math.floor((Math.random() * 600) - 200),
			left: Math.floor((Math.random() * 600) - 200)},
			400 );
	});
});
