jQuery(function ($) {
	// resize the slide-read-more Div
	var box = $(".slide-read-more");
	var minimumHeight = 250; // max height in pixels
	var initialHeight = box.innerHeight();
	// reduce the text if it's longer than 200px
	if (initialHeight < minimumHeight) {
		box.css('height', minimumHeight);
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