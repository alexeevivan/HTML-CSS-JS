import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

// Modal windows

$(".hovered__menu").click(function () {
	$(".modal__menu").addClass("visible");
});

$(".hovered__cart").click(function () {
	$(".modal__cart").addClass("visible");
});

$(".hovered__account").click(function () {
	$(".modal__account").addClass("visible");
});

// $(".hovered__cart-close").click(function () {
// 	$(".modal__cart").removeClass("visible");
// });

// $(".hovered__account-close").click(function () {
// 	$(".hovered__account").removeClass("visible");
// });

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal__menu,.hovered__menu").length) {
		$("body").find(".modal__menu").removeClass("visible");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal__cart,.hovered__cart").length) {
		$("body").find(".modal__cart").removeClass("visible");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal__account,.hovered__account").length) {
		$("body").find(".modal__account").removeClass("visible");
	}
});

// Slider

$('.slider').each(function () {
	var $this = $(this);
	var $group = $this.find('.slide__group');
	var $slides = $this.find('.slide');
	var bulletArray = [];
	var currentIndex = 0;
	var timeout;

	function move(newIndex) {
		var animateLeft, slideLeft;

		advance();

		if ($group.is(':animated') || currentIndex === newIndex) {
			return;
		}

		bulletArray[currentIndex].removeClass('active');
		bulletArray[newIndex].addClass('active');

		if (newIndex > currentIndex) {
			slideLeft = '100%';
			animateLeft = '-100%';
		} else {
			slideLeft = '-100%';
			animateLeft = '100%';
		}

		$slides.eq(newIndex).css({
			display: 'block',
			left: slideLeft
		});
		$group.animate({
			left: animateLeft
		}, function () {
			$slides.eq(currentIndex).css({
				display: 'none'
			});
			$slides.eq(newIndex).css({
				left: 0
			});
			$group.css({
				left: 0
			});
			currentIndex = newIndex;
		});
	}

	function advance() {
		clearTimeout(timeout);
	}

	$('.next__btn').on('click', function () {
		if (currentIndex < ($slides.length - 1)) {
			move(currentIndex + 1);
		} else {
			move(0);
		}
	});

	$('.previous__btn').on('click', function () {
		if (currentIndex !== 0) {
			move(currentIndex - 1);
		} else {
			move(3);
		}
	});

	$.each($slides, function (index) {
		var $button = $('<a class="slide__btn">&bull;</a>');

		if (index === currentIndex) {
			$button.addClass('active');
		}
		$button.on('click', function () {
			move(index);
		}).appendTo('.slide__buttons');
		bulletArray.push($button);
	});

	advance();
});

// Swiper Slider

const swiper = new Swiper('.feedback-slider', {
	navigation: {
		nextEl: '.feedback-slider-button-next',
		prevEl: '.feedback-slider-button-prev'
	},
	pagination: {
		el: '.feedback-slider-pagination',
		clickable: true,
	},
	simulateTouch: false,
});