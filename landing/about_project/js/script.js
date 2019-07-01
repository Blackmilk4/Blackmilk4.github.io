$('a[href^="#"]').bind("click", function (e) {
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr("href")).offset().top
	}, 1000);
	e.preventDefault();
	return false
});

var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect: 'none',
		closeEffect: 'none',
		iframe: {
			preload: false
		}
	});
});

$('.ham').click(function () {
	$('.gamb-menu').toggleClass('active-gamb')
});