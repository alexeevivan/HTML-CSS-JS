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

// $(".read-more-button").click(function () {
// 	$(".slide-read-more").addClass("read-more__visible");
// });

// $(".slide-read-more-buttonn").click(function () {
// 	$(".slide-read-more").removeClass("read-more__visible");
// });