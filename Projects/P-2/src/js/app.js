(function () {
	window.addEventListener('scroll', function (event) {
		var depth, i, layer, layers, len, movement, topDistance, translate3d;
		topDistance = this.window.pageYOffset;
		layers = document.querySelectorAll("[data-type='parallax']");
		for (i = 0, len = layers.length; i < len; i++) {
			layer = layers[i];
			depth = layer.getAttribute('data-depth');
			movement = -(topDistance * depth);
			translate3d = 'translate3d(0, ' + movement + 'px, 0)';
			layer.style['-webkit-transform'] = translate3d;
			layer.style['-moz-transform'] = translate3d;
			layer.style['-ms-transform'] = translate3d;
			layer.style['-o-transform'] = translate3d;
			layer.style.transform = translate3d;
		}
	});

}).call(this);

$(".return-to-home").click(function () {
	$(".return-to-home").removeClass("hide");
	$(".return-to-home").addClass("active");
	$(".block-1").removeClass("active");
	$(".block-1").addClass("hide");
	$(".block-2").removeClass("active");
	$(".block-2").addClass("hide");
	$(".block-3").removeClass("active");
	$(".block-3").addClass("hide");
});

$(".block-1").click(function () {
	$(".block-1").removeClass("hide");
	$(".block-1").addClass("active");
	$(".block-3").removeClass("active");
	$(".block-3").addClass("hide");
	$(".block-2").removeClass("active");
	$(".block-2").addClass("hide");
	$(".return-to-home").removeClass("active");
	$(".return-to-home").addClass("hide");
});

$(".block-2").click(function () {
	$(".block-2").removeClass("hide");
	$(".block-2").addClass("active");
	$(".block-1").removeClass("active");
	$(".block-1").addClass("hide");
	$(".block-3").removeClass("active");
	$(".block-3").addClass("hide");
	$(".return-to-home").removeClass("active");
	$(".return-to-home").addClass("hide");
});

$(".block-3").click(function () {
	$(".block-3").removeClass("hide");
	$(".block-3").addClass("active");
	$(".block-1").removeClass("active");
	$(".block-1").addClass("hide");
	$(".block-2").removeClass("active");
	$(".block-2").addClass("hide");
	$(".return-to-home").removeClass("active");
	$(".return-to-home").addClass("hide");
});