// ----------------
// Clear Button
// ----------------
$(".btn-clear__item-1").click(function () {
	$(".aside-right__submit-1").addClass("hidden-text");
});

$(".btn-clear__item-2").click(function () {
	$(".aside-right__submit-2").addClass("hidden-text");
});

// Color-picker
$(".color__block-1").click(function () {
	$(".active__block-1").removeClass("hide");
	$(".active__block-1").addClass("active");
	$(".color__block-1").addClass("hide");
});

$(".color__block-2").click(function () {
	$(".active__block-2").removeClass("hide");
	$(".active__block-2").addClass("active");
	$(".color__block-2").addClass("hide");
});

$(".color__block-3").click(function () {
	$(".active__block-3").removeClass("hide");
	$(".active__block-3").addClass("active");
	$(".color__block-3").addClass("hide");
});

$(".active__block-1, .active").click(function () {
	$(".active__block-1").removeClass("active");
	$(".active__block-1").addClass("hide");
	$(".color__block-1").removeClass("hide");
});

$(".active__block-2, .active").click(function () {
	$(".active__block-2").removeClass("active");
	$(".active__block-2").addClass("hide");
	$(".color__block-2").removeClass("hide");
});

$(".active__block-3, .active").click(function () {
	$(".active__block-3").removeClass("active");
	$(".active__block-3").addClass("hide");
	$(".color__block-3").removeClass("hide");
});

// ----------------
// Items Counter ('about.html')
// ----------------
$(document).ready(function () {

	$('.about-header__btn').on('click', function (e) {
		e.preventDefault();

		var button = $(this);
		var oldValue = $('#quantity').val();

		if (button.attr('data-type') == "increase") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}

		$('#quantity').val(newVal);
	});

});

// ----------------
// Grid-List View
// ----------------
$(".grid-view").click(function () {
	$(".grid-view").addClass("active");
	$(".list-view").removeClass("active");
	$(".swiper-container.grided").removeClass("hidden");
	$(".swiper-container.listed").addClass("hidden");
});


$(".list-view").click(function () {
	$(".list-view").addClass("active");
	$(".grid-view").removeClass("active");
	$(".swiper-container.listed").removeClass("hidden");
	$(".swiper-container.grided").addClass("hidden");
});

// ----------------
// Modal windows
// ----------------
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

// ----------------
// Pagination
// ----------------
var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.aside-right__pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
});

// ----------------
// Read More button
// ----------------
jQuery(function ($) {
	// resize the slide-read-more Div
	var box = $(".slide-read-more");
	var minimumHeight = 275; // max height in pixels
	var initialHeight = box.innerHeight();
	// reduce the text if it's longer than 200px
	if (initialHeight < minimumHeight) {
		box.css('height', initialHeight);
		$(".read-more-button").show();
	}

	SliderReadMore();

	function SliderReadMore() {
		$(".slide-read-more-button").on('click', function () {
			// get current height
			var currentHeight = box.innerHeight();

			// get height with auto applied
			var autoHeight = box.css('height', 'auto').innerHeight();

			// reset height and revert to original if current and auto are equal
			var newHeight = (currentHeight | 0) === (autoHeight | 0) ? minimumHeight : autoHeight;

			box.css('height', currentHeight).animate({
				height: (newHeight)
			})
			$('html, body').animate({
				scrollBottom: box.offset().bottom
			});
			$(".slide-read-more-button").toggle();
		});
	}
});

// ----------------
// Feedback Swiper
// ----------------
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

// ----------------
// Ad Slider ('index.html')
// ----------------
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