$('.big_women').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	draggable: false,
	arrows: true,
	prevArrow: '<button class="prev"></button>',
	nextArrow: '<button class="next"></button>',
});

$(function () {
	$('.tabs_link-work').click(function () {
		$('.advantages-img-work').css("display", "block").addClass("animated bounceInDown");
		$('.advantages-img-distanceWork').css("display", "none");
		$('.advantages-img-free').css("display", "none");
		$('.advantages-img-payment').css("display", "none");
		return (false);
	})
})

$(function () {
	$('.tabs_link-DistanceWork').click(function () {
		$('.advantages-img-distanceWork').css("display", "block").addClass("animated bounceInDown");
		$('.advantages-img-work').css("display", "none");
		$('.advantages-img-free').css("display", "none");
		$('.advantages-img-payment').css("display", "none");
		return (false);
	})
})

$(function () {
	$('.tabs_link-free').click(function () {
		$('.advantages-img-free').css("display", "block").addClass("animated bounceInDown");
		$('.advantages-img-work').css("display", "none");
		$('.advantages-img-distanceWork').css("display", "none");
		$('.advantages-img-payment').css("display", "none");
		return (false);
	})
})

$(function () {
	$('.tabs_link-payment').click(function () {
		$('.advantages-img-payment').css("display", "block").addClass("animated bounceInDown");
		$('.advantages-img-work').css("display", "none");
		$('.advantages-img-free').css("display", "none");
		$('.advantages-img-distanceWork').css("display", "none");
		return (false);
	})
})

$('.title_question-balcony').click(function () {
	$('.title_question-balcony').toggleClass('img_arrow-balcony')
});

$('.title_question-new').click(function () {
	$('.title_question-new').toggleClass('img_arrow-new')
});

$('.title_question-materials').click(function () {
	$('.title_question-materials').toggleClass('img_arrow-materials')
});

$('.title_question-year').click(function () {
	$('.title_question-year').toggleClass('img_arrow-year')
});

$('a[href^="#"]').bind("click", function (e) {
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr("href")).offset().top
	}, 1000);
	e.preventDefault();
	return false
});