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

$('.set_item').mouseover(function(){
	$('.set_titleArtHouse').addClass('.active');
});

