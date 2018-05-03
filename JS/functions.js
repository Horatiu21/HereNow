$(function() {
	$('.clothes-pics img').each(function(i) {
	$(this).delay((i++) * 600).fadeTo(1000, 1); })
});
