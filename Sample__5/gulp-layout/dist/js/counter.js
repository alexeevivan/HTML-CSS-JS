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