$(document).ready(function(){
	$('.skill').each(function(){
		$(this).find('.bar').animate({
			width: $(this).attr('data-percentage')},3000);
	});
});