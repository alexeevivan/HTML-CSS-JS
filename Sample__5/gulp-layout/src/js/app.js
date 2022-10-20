import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

// Modal windows

$(".open-menu").click(function () {
	$(".modal-menu").addClass("visible-menu");
});

$(".open-cart").click(function () {
	$(".modal-cart").addClass("visible-cart");
});

$(".user-profile").click(function () {
	$(".modal-account").addClass("visible-account");
});


$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal-menu,.open-menu").length) {
		$("body").find(".modal-menu").removeClass("visible-menu");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal-cart,.open-cart").length) {
		$("body").find(".modal-cart").removeClass("visible-cart");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal-account,.user-profile").length) {
		$("body").find(".modal-account").removeClass("visible-account");
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

new Swiper('.feedback-slider', {
	navigation: {
		nextEl: '.feedback-slider-button-next',
		prevEl: '.feedback-slider-button-prev'
	},
	pagination: {
		el: '.feedback-slider-pagination',
		clickable: true,
	},
	simulateTouch: false,
	loop: true,
});


// Color-Picker

$(".color__block-1").click(function () {
	$(".active-block-1").addClass("active");
	$(".color__block-1").addClass("hide");
});

$(".color__block-2").click(function () {
	$(".active-block-2").addClass("active");
	$(".color__block-2").addClass("hide");
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".active-block-1,.color__block-1").length) {
		$("body").find(".active-block-1").removeClass("active");
		$("body").find(".color__block-1").removeClass("hide");
	}
});