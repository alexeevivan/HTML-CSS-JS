var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.aside-right__pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
});