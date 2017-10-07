jQuery(document).ready(function($) {
	var userInput = $('#userInput');
	var typedText = $('#typedText');

	typedText.val(userInput);

	userInput.on('keyup change', function(){
		typedText.text(this.value);
	});
 });