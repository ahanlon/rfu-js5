$(document).on('ready', function() {
  
	$('.text').on('click', function(){
		$(this).hide().replaceWith('<input type="text" placeholder="Enter your info here:"></input>');
		$('input').focus();
	})

	$('.do-stuff').on('click', function(){
		$(this).hide().replaceWith('<textArea type="text" placeholder="Enter your info here:" style="width", "auto">');
		$('textArea').focus();
	})

	$('body').on('blur', 'input', function(){
		var newTxt = $('input').val();
		$(this).hide().replaceWith(newTxt);
	})

	$('body').on('blur', 'textArea', function(){
		var newTxt = $('textArea').val();
		$(this).hide().replaceWith(newTxt);
	})

	



	
















});