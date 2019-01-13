$('.titleWhatIsCP').click(function () {
	$('.titleWhatIsCP').toggleClass('img_minus')
});

$('.titleCreating').click(function () {
	$('.titleCreating').toggleClass('img_minus')
});

$('.titleTransactions').click(function () {
	$('.titleTransactions').toggleClass('img_minus')
});

$('.titleTechnical').click(function () {
	$('.titleTechnical').toggleClass('img_minus')
});

jQuery(document).ready(function ($) {
	var url = document.location.href;
	$.each($("#menu a"), function () {
		if (this.href == url) {
			$(this).addClass('active');
		}
	});
})(jQuery);