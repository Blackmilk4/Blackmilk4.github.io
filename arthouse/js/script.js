$('.slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	dotsClass: "my-dots",
	cssEase: 'linear',
	arrows: true,
	prevArrow: '<button class="prev"></button>',
	nextArrow: '<button class="next"></button>',
});

$('a[href^="#"]').bind("click", function (e) {
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr("href")).offset().top
	}, 1000);
	e.preventDefault();
	return false
});

$('.first_item').hover(function () {
	$(this).parent('.set_box').find('.first').toggleClass('active');
});

$('.second_item').hover(function () {
	$(this).parent('.set_box').find('.second').toggleClass('active');
});

$('.three_item').hover(function () {
	$(this).parent('.set_box').find('.three').toggleClass('active');
});

$('.four_item').hover(function () {
	$(this).parent('.set_box-other').find('.four').toggleClass('active');
});

$('.five_item').hover(function () {
	$(this).parent('.set_box-other').find('.five').toggleClass('active');
});

$('.six_item').hover(function () {
	$(this).parent('.set_box-other').find('.six').toggleClass('active');
});
