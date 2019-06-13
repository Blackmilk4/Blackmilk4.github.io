jQuery(document).ready(function ($) {
	let documentHeight = $(document).innerHeight();
	let box = $('.header_fix');
	let swim = $('.header_swim');

	let changeBoxColor = function () {
		$(document).on('scroll', function () {
			console.log($(document).scrollTop());
			if ($(document).scrollTop() > documentHeight / 13) {
				box.css('display', 'none');
				swim.removeClass('swim_none');
				documentHeight - 200;

			} else {
				box.css('display', 'block');
				swim.addClass('swim_none');
			}
		});
	};

	changeBoxColor();

});

$('.menu_fix-itemFirst').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_applications').offset().top - 238
	}, {
		duration: 1E3
	});
});


$('.menu_fix-itemSecond').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_transportation').offset().top - 250
	}, {
		duration: 1E3
	});
});


$('.menu_fix-itemThird').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_escort').offset().top - 250
	}, {
		duration: 1E3
	});
});

$('.menu_fix-itemFour').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_app').offset().top - 250
	}, {
		duration: 1E3
	});
});

$('.menu_fix-itemFive').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_withUs').offset().top - 250
	}, {
		duration: 1E3
	});
});

$('.menu_item-app').on('click', function () {
	$('html,body').animate({
		scrollTop: $('.section_tariffs').offset().top - 250
	}, {
		duration: 1E3
	});
});


$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	pauseOnDotsHover: false,
	pauseOnHover: false,
	autoplaySpeed: 2000,
	dots: true,
	appendDots: $(".dots"),
	arrows: true,
	prevArrow: '<button class="prev"></button>',
	nextArrow: '<button class="next"></button>',
	infinite: true,
	draggable: false
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
});

$('.title_question-free').click(function () {
	$('.title_question-free').toggleClass('img_pressed')
});

$('.title_question-ads').click(function () {
	$('.title_question-ads').toggleClass('img_pressed')
});

$('.title_question-create').click(function () {
	$('.title_question-create').toggleClass('img_pressed')
});

$('.title_question-multi').click(function () {
	$('.title_question-multi').toggleClass('img_pressed')
});

$('.title_question-request').click(function () {
	$('.title_question-request').toggleClass('img_pressed')
});

$('.title_question-bargain').click(function () {
	$('.title_question-bargain').toggleClass('img_pressed')
});

$('.title_question-price').click(function () {
	$('.title_question-price').toggleClass('img_pressed')
});

$('.title_question-address').click(function () {
	$('.title_question-address').toggleClass('img_pressed')
});

$('.title_question-assessment').click(function () {
	$('.title_question-assessment').toggleClass('img_pressed')
});

$('.title_question-document').click(function () {
	$('.title_question-document').toggleClass('img_pressed')
});

$('.title_question-GeoTracking').click(function () {
	$('.title_question-GeoTracking').toggleClass('img_pressed')
});

$('.title_question-driver').click(function () {
	$('.title_question-driver').toggleClass('img_pressed')
});

$('.title_question-planning').click(function () {
	$('.title_question-planning').toggleClass('img_pressed')
});

$('.title_question-help').click(function () {
	$('.title_question-help').toggleClass('img_pressed')
});

$('.title_question-help').click(function () {
	$('.title_question-help').toggleClass('img_pressed')
});

$('.title_question-connection').click(function () {
	$('.title_question-connection').toggleClass('img_pressed')
});

$('.title_question-info').click(function () {
	$('.title_question-info').toggleClass('img_pressed')
});

$('.title_question-countdown').click(function () {
	$('.title_question-countdown').toggleClass('img_pressed')
});

$('.title_question-Message').click(function () {
	$('.title_question-Message').toggleClass('img_pressed')
});

$('.title_question-Notifications').click(function () {
	$('.title_question-Notifications').toggleClass('img_pressed')
});

$('.title_question-News').click(function () {
	$('.title_question-News').toggleClass('img_pressed')
});

$('.title_question-calc').click(function () {
	$('.title_question-calc').toggleClass('img_pressed')
});

$('.title_question-Directory').click(function () {
	$('.title_question-Directory').toggleClass('img_pressed')
});

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
	}, 1000);

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