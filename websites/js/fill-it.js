jQuery(document).ready(function($) {
	var leftButton = $('#left');
	var rightButton = $('#right');
	var progressBar = $('#progress-bar');
	var progressWidth = $('#progress-width');
	var width = 2;

	leftButton.click(function(event) {
		if (width > 0) {
			progressBar.css('width', width + '%');
			progressWidth.text(width * 1 + '%');
			width-=3;
		} else{
			return;
		}
	});

	rightButton.click(function(event) {
		if (width <= 99) {
			progressBar.css('width', width + '%');
			progressWidth.text(width * 1 + '%');
			width+=3;
		}
	});
});