var btnStart = $('#button');
var ball = $('#ball');
var btnRestart = $('#restart');

jQuery(document).ready(function($) {

	btnStart.click(function (){
		if (btnStart.hasClass('start')){
			start();
		} else{
			stop();
		}
	});

	btnRestart.click(function(){
		restart();
	});
});

function moveBall(){
	ball.animate({top: "+=200px"}, 800);
	ball.animate({top: "-=200px"}, 800, moveBall);
}

function start(){
	btnStart.removeClass('start').addClass('stop');
	btnStart.text("Stop");
	moveBall();
}

function stop(){
	btnStart.removeClass('stop').addClass('start');
	btnStart.text("Start");
	ball.stop(true, false);
}

function restart(){
	ball.css('top', '50px');
}