jQuery(document).ready(function ($) {
	let documentHeight = $(document).innerHeight();
	let box = $('.header_fix');
	let changeBoxColor = function () {
		$(document).on('scroll', function () {
			console.log($(document).scrollTop());
			if ($(document).scrollTop() > documentHeight / 13) {
				box.css('position', 'fixed');
				box.css('padding-bottom', '0');
				box.css('margin-bottom', '0');
				// documentHeight - 200;
			} else {
				box.css('position', 'static');
			}
		});
	};

	changeBoxColor();

});

$('.menu_fix-itemFirst').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_applications').offset().top
	}, {
		duration: 3E2
	});
});

$('.menu_fix-itemSecond').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_transportation').offset().top - 120
	}, {
		duration: 3E2
	});
});

$('.menu_fix-itemThird').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_escort').offset().top - 100
	}, {
		duration: 3E2
	});
});

$('.menu_fix-itemFour').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_app').offset().top - 100
	}, {
		duration: 3E2
	});
});

$('.menu_fix-itemFive').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_withUs').offset().top - 60
	}, {
		duration: 3E2
	});
});

$('.menu_item-app').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_tariffs').offset().top - 100
	}, {
		duration: 3E2
	});
});






$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	pauseOnDotsHover: false,
	pauseOnHover: false,
	autoplaySpeed: 5000,
	dots: true,
	appendDots: $(".dots"),
	arrows: true,
	prevArrow: '<button class="prev"></button>',
	nextArrow: '<button class="next"></button>',
	infinite: true,
	draggable: false,
	responsive: [{
			breakpoint: 820,
			settings: {
				draggable: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				draggable: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true
			}
		}
	]
});



$('.slider').on("swipe", function () {
	$('#pause').removeClass("pause");
})






$('#pause').click(function () {
	$(this).toggleClass("pause");
	if ($(this).hasClass("pause"))
		$('.slider').slick('slickPause');
	else
		$('.slider').slick('slickPlay');
});

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
	pauseButton.style.backgroundImage = 'url(img/Icon_pause.svg)';
	playing = false;
}

function playSlideshow() {
	pauseButton.style.backgroundImage = 'url(img/Icon_play.svg)';
	playing = true;
}

pauseButton.onclick = function () {
	if (playing) {
		pauseSlideshow();
	} else {
		playSlideshow();
	}
};

$('.title_question-transfer').click(function () {
	$('.title_question-transfer').toggleClass('img_pressed')
	if ($(".title_applications").hasClass("img_pressed")) {
		$(".title_applications").removeClass("img_pressed")
		$(".title_question-transfer").addClass("img_pressed")
		$(".your").css("top", "-100px")
	};
});

$('.title_question-free').click(function () {
	$('.title_question-free').toggleClass('img_pressed')
	if ($(".title_applications").hasClass("img_pressed")) {
		$(".title_applications").removeClass("img_pressed")
		$(".title_question-free").addClass("img_pressed")
		$(".your").css("top", "-135px")
	};
});

$('.title_question-ads').click(function () {
	$('.title_question-ads').toggleClass('img_pressed')
	if ($(".title_applications").hasClass("img_pressed")) {
		$(".title_applications").removeClass("img_pressed")
		$(".title_question-ads").addClass("img_pressed")
		$(".your").css("top", "-175px")
	};
});

$('.title_question-create').click(function () {
	$('.title_question-create').toggleClass('img_pressed')
	if ($(".title_applications").hasClass("img_pressed")) {
		$(".title_applications").removeClass("img_pressed")
		$(".title_question-create").addClass("img_pressed")
		$(".your").css("top", "-220px")
	};
});

$('.title_question-multi').click(function () {
	$('.title_question-multi').toggleClass('img_pressed')
	if ($(".title_applications").hasClass("img_pressed")) {
		$(".title_applications").removeClass("img_pressed")
		$(".title_question-multi").addClass("img_pressed")
		$(".your").css("top", "-270px")
	};
});

$('.title_question-request').click(function () {
	$('.title_question-request').toggleClass('img_pressed')
	if ($(".title_applicationsContinue").hasClass("img_pressed")) {
		$(".title_applicationsContinue").removeClass("img_pressed")
		$(".title_question-request").addClass("img_pressed")
		$(".your2").css("top", "-40px")
	};
});

$('.title_question-bargain').click(function () {
	$('.title_question-bargain').toggleClass('img_pressed')
	if ($(".title_applicationsContinue").hasClass("img_pressed")) {
		$(".title_applicationsContinue").removeClass("img_pressed")
		$(".title_question-bargain").addClass("img_pressed")
		$(".your2").css("top", "-75px")
	};
});

$('.title_question-price').click(function () {
	$('.title_question-price').toggleClass('img_pressed')
	if ($(".title_applicationsContinue").hasClass("img_pressed")) {
		$(".title_applicationsContinue").removeClass("img_pressed")
		$(".title_question-price").addClass("img_pressed")
		$(".your2").css("top", "-130px")
	};
});

$('.title_question-address').click(function () {
	$('.title_question-address').toggleClass('img_pressed')
	if ($(".title_applicationsContinue").hasClass("img_pressed")) {
		$(".title_applicationsContinue").removeClass("img_pressed")
		$(".title_question-address").addClass("img_pressed")
		$(".your2").css("top", "-170px")
	};
});

$('.title_question-assessment').click(function () {
	$('.title_question-assessment').toggleClass('img_pressed')
	if ($(".title_applicationsContinue").hasClass("img_pressed")) {
		$(".title_applicationsContinue").removeClass("img_pressed")
		$(".title_question-assessment").addClass("img_pressed")
		$(".your2").css("top", "-200px")
	};
});

$('.title_question-document').click(function () {
	$('.title_question-document').toggleClass('img_pressed')
	if ($(".title_applicationsContinue").hasClass("img_pressed")) {
		$(".title_applicationsContinue").removeClass("img_pressed")
		$(".title_question-document").addClass("img_pressed")
		$(".your2").css("top", "-260px")
	};
});






$('.title_question-GeoTracking').click(function () {
	$('.title_question-GeoTracking').toggleClass('img_pressed')
	if ($(".title_transportation").hasClass("img_pressed")) {
		$(".title_transportation").removeClass("img_pressed")
		$(".title_question-GeoTracking").addClass("img_pressed")
		$(".your3").css("top", "-100px")
	};
});

$('.title_question-driver').click(function () {
	$('.title_question-driver').toggleClass('img_pressed')
	if ($(".title_transportation").hasClass("img_pressed")) {
		$(".title_transportation").removeClass("img_pressed")
		$(".title_question-driver").addClass("img_pressed")
		$(".your3").css("top", "-130px")
	};
});

$('.title_question-planning').click(function () {
	$('.title_question-planning').toggleClass('img_pressed')
	if ($(".title_transportation").hasClass("img_pressed")) {
		$(".title_transportation").removeClass("img_pressed")
		$(".title_question-planning").addClass("img_pressed")
		$(".your3").css("top", "-190px")
	};
});

$('.title_question-help').click(function () {
	$('.title_question-help').toggleClass('img_pressed')
	if ($(".title_transportation").hasClass("img_pressed")) {
		$(".title_transportation").removeClass("img_pressed")
		$(".title_question-help").addClass("img_pressed")
		$(".your3").css("top", "-230px")
	};
});

$('.title_question-change').click(function () {
	$('.title_question-change').toggleClass('img_pressed')
	if ($(".title_transportation").hasClass("img_pressed")) {
		$(".title_transportation").removeClass("img_pressed")
		$(".title_question-change").addClass("img_pressed")
		$(".your3").css("top", "-280px")
	};
});





$('.title_question-connection').click(function () {
	$('.title_question-connection').toggleClass('img_pressed')
	if ($(".title_escort").hasClass("img_pressed")) {
		$(".title_escort").removeClass("img_pressed")
		$(".title_question-connection").addClass("img_pressed")
		$(".your4").css("top", "-100px")
	};
});

$('.title_question-info').click(function () {
	$('.title_question-info').toggleClass('img_pressed')
	if ($(".title_escort").hasClass("img_pressed")) {
		$(".title_escort").removeClass("img_pressed")
		$(".title_question-info").addClass("img_pressed")
		$(".your4").css("top", "-160px")
	};
});

$('.title_question-countdown').click(function () {
	$('.title_question-countdown').toggleClass('img_pressed')
	if ($(".title_escort").hasClass("img_pressed")) {
		$(".title_escort").removeClass("img_pressed")
		$(".title_question-countdown").addClass("img_pressed")
		$(".your4").css("top", "-200px")
	};
});









$('.title_question-Message').click(function () {
	$('.title_question-Message').toggleClass('img_pressed')
	if ($(".WithUs_title").hasClass("img_pressed")) {
		$(".WithUs_title").removeClass("img_pressed")
		$(".title_question-Message").addClass("img_pressed")
		$(".your5").css("top", "-100px")
	};
});

$('.title_question-Notifications').click(function () {
	$('.title_question-Notifications').toggleClass('img_pressed')
	if ($(".WithUs_title").hasClass("img_pressed")) {
		$(".WithUs_title").removeClass("img_pressed")
		$(".title_question-Notifications").addClass("img_pressed")
		$(".your5").css("top", "-150px")
	};
});

$('.title_question-News').click(function () {
	$('.title_question-News').toggleClass('img_pressed')
	if ($(".WithUs_title").hasClass("img_pressed")) {
		$(".WithUs_title").removeClass("img_pressed")
		$(".title_question-News").addClass("img_pressed")
		$(".your5").css("top", "-220px")
	};
});

$('.title_question-calc').click(function () {
	$('.title_question-calc').toggleClass('img_pressed')
	if ($(".WithUs_title").hasClass("img_pressed")) {
		$(".WithUs_title").removeClass("img_pressed")
		$(".title_question-calc").addClass("img_pressed")
		$(".your5").css("top", "-230px")
	};
});

$('.title_question-Directory').click(function () {
	$('.title_question-Directory').toggleClass('img_pressed')
	if ($(".WithUs_title").hasClass("img_pressed")) {
		$(".WithUs_title").removeClass("img_pressed")
		$(".title_question-Directory").addClass("img_pressed")
		$(".your5").css("top", "-270px")
	};
});




$('.title_question-flow').click(function () {
	$('.title_question-flow').toggleClass('img_pressed')
	if ($(".title_withUs_continue").hasClass("img_pressed")) {
		$(".title_withUs_continue").removeClass("img_pressed")
		$(".title_question-flow").addClass("img_pressed")
		$(".your6").css("top", "-50px")
	};
});

$('.title_question-search').click(function () {
	$('.title_question-search').toggleClass('img_pressed')
	if ($(".title_withUs_continue").hasClass("img_pressed")) {
		$(".title_withUs_continue").removeClass("img_pressed")
		$(".title_question-search").addClass("img_pressed")
		$(".your6").css("top", "-100px")
	};
});

$('.title_question-counterparty').click(function () {
	$('.title_question-counterparty').toggleClass('img_pressed')
	if ($(".title_withUs_continue").hasClass("img_pressed")) {
		$(".title_withUs_continue").removeClass("img_pressed")
		$(".title_question-counterparty").addClass("img_pressed")
		$(".your6").css("top", "-140px")
	};
});

$('.title_question-chaffer').click(function () {
	$('.title_question-chaffer').toggleClass('img_pressed')
	if ($(".title_withUs_continue").hasClass("img_pressed")) {
		$(".title_withUs_continue").removeClass("img_pressed")
		$(".title_question-chaffer").addClass("img_pressed")
		$(".your6").css("top", "-185px")
	};
});

$('.title_withUs-location').click(function () {
	$('.title_withUs-location').toggleClass('img_pressed')
	if ($(".title_withUs_continue").hasClass("img_pressed")) {
		$(".title_withUs_continue").removeClass("img_pressed")
		$(".title_withUs-location").addClass("img_pressed")
		$(".your6").css("top", "-220px")
	};
});

$(document).ready(function () {
	$('.title_applications').on('click', f_acc);
});

$(document).ready(function () {
	$('.title_applicationsContinue').on('click', f_acc2);
});

$(document).ready(function () {
	$('.title_transportation').on('click', f_acc3);
});

$(document).ready(function () {
	$('.title_escort').on('click', f_acc4);
});

$(document).ready(function () {
	$('.WithUs_title').on('click', f_acc5);
});

$(document).ready(function () {
	$('.title_withUs_continue').on('click', f_acc6);
});

function f_acc() {
	$('.answer_box').not($(this).next()).slideUp(500);
	$(this).next().slideToggle(500);
}

function f_acc2() {
	$('.answer_box2').not($(this).next()).slideUp(500);
	$(this).next().slideToggle(500);
}

function f_acc3() {
	$('.answer_box3').not($(this).next()).slideUp(500);
	$(this).next().slideToggle(500);
}

function f_acc4() {
	$('.answer_box4').not($(this).next()).slideUp(500);
	$(this).next().slideToggle(500);
}

function f_acc5() {
	$('.answer_box5').not($(this).next()).slideUp(500);
	$(this).next().slideToggle(500);
}

function f_acc6() {
	$('.answer_box6').not($(this).next()).slideUp(500);
	$(this).next().slideToggle(500);
}

var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки

window.onload = function () {
	tabContent = document.getElementsByClassName('tabContent');
	tab = document.getElementsByClassName('tab');
	hideTabsContent(1);
}

document.getElementById('tabs').onclick = function (event) {
	var target3 = event.target;
	if (target3.className == 'tab') {
		for (var i = 0; i < tab.length; i++) {
			if (target3 == tab[i]) {
				showTabsContent(i);
				break;
			}
		}
	}
}

function hideTabsContent(a) {
	for (var i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add("hide");
		tab[i].classList.remove('whiteborder');
	}
}

function showTabsContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		hideTabsContent(0);
		tab[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}

var tabsLink = document.querySelectorAll('.nav-tabs a'),
	tabsElement = document.querySelectorAll('.tab-pane'),
	i;

tabsElement[0].classList.add('tab-open');

var showTabs = function (e) {
	e.preventDefault();
	var targetElement = document.querySelectorAll(this.getAttribute('href'));
	for (i = 0; i < targetElement.length; i++) {
		if (targetElement[i].classList.contains('tab-open')) {
			return false;
		} else targetElement[i].classList.add('tab-open');

	}
	targetElement = document.querySelectorAll(".tab-pane.tab-open:not(" + this.getAttribute('href') + ")");
	for (i = 0; i < targetElement.length; i++) {
		targetElement[i].classList.remove('tab-open');
	}
};

for (i = 0; i < tabsLink.length; i++) {
	tabsLink[i].addEventListener('click', showTabs);
}

$('a[href^="#"]').bind("click", function (e) {
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr("href")).offset().top - 100
	}, 400);

	e.preventDefault();
	return false
});


$(function () {
	$('.nav-tabs a').click(function () { // При клике на вкладку
		$('.nav-tabs li').removeClass('select'); // - удаляется класс 'select' у активной ранее вкладки
		$(this).parent().addClass('select'); // - добавляется класс 'select' для выбранной вкладки
		return (false); // - прерывается обработка события onClick
	})
})

$(document).ready(function () {
	$('.your-class').slick({
		centerMode: true,
		variableWidth: true
	});
});

$('.ham').click(function () {
	$('.gamb-menu').toggleClass('active-gamb')
});

jQuery(document).ready(function ($) {
	let documentHeight = $(document).innerHeight();
	let topBTN = $('.top_btn');

	let changeBoxColor = function () {
		$(document).on('scroll', function () {
			console.log($(document).scrollTop());
			if ($(document).scrollTop() > documentHeight / 1.4) {
				topBTN.css('display', 'block');
				documentHeight - 200;
			} else {
				topBTN.css('display', 'none');
			}
		});
	};

	changeBoxColor();

});