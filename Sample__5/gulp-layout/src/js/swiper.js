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