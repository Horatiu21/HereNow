//Go to the top of the page effect
$(document).ready(function(){

	$('.scrollToBottom').click(function(){
		$('html,body').animate({scrollTop:$(document).height()}, 1000);

		return false;
	});

	$('.scrollToTop').click(function(){
		$('html,body').animate({scrollTop: 0}, 800);
	return false;
});
});
