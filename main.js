$(document).on('ready', function() {
  
	$('.text').on('click', function(){
		$(this).hide().replaceWith('<input></input>');
		console.log(addData);
	});

	var addData = $('.input');
	// console.log(addData);

	$(addData).on('blur', function(){
		$(this).hide().show('.text').append(addData);
	});



	































});