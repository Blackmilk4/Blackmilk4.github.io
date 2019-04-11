$('.slider_ArtStudio').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	dotsClass: "my-dots",
	cssEase: 'linear',
	arrows: false,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function () {
	$('.btn_down').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.btn_up').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

$(document).ready(function () {
	$('.btn_down-days').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.btn_up-days').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

function maxLengthCheck(object) {
	if (object.value.length > object.maxLength)
		object.value = object.value.slice(0, object.maxLength)
}

$('.btn_share').click(function () {
	$('.btn_share-icon').css('display', 'block');
	$('.btn_share').css('display', 'none');
	$('.img_share').css('margin-left', '4.8rem');
})

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

// jQuery(document).ready(function ($) {
// 	var url = document.location.href;
// 	$.each($("#menu a"), function () {
// 		if (this.href == url) {
// 			$(this).addClass('active');
// 		}
// 	});
// })(jQuery);