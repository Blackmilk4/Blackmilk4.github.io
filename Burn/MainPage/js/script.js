$('.title_question-burn').click(function () {
	$('.title_question-burn').toggleClass('img_minus-burn')
});

$('.title_question-WhitePaper').click(function () {
	$('.title_question-WhitePaper').toggleClass('img_minus-WhitePaper')
});

$('.title_question-TokensRecycled').click(function () {
	$('.title_question-TokensRecycled').toggleClass('img_minus-TokensRecycled')
});



$(".ripple").on("click", function (event) {
	$(this).append("<span class='ripple-effect'>");
	$(this).find(".ripple-effect").css({
		left: event.pageX - $(this).position().left,
		top: event.pageY - $(this).position().top
	}).animate({
		opacity: 0,
	}, 1500, function () {
		$(this).remove();
	});
});