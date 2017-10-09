jQuery(document).ready(function($) {
	var greeting = $('#greeting');
	var time = new Date();

	if (time.getHours() >= 6) {
		greeting.text('Good Morning');
	} else if (time.getHours() >= 12){
		greeting.text('Good Afternoon');
	} else if (time.getHours >= 18){
		greeting.text('Good Evening');
	} else if (time.getHours >= 0){
		greeting.text('Good Night');
	}

	$('#time').text(time.toLocaleTimeString());
	$('#time-zone').text(time.toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]);
});