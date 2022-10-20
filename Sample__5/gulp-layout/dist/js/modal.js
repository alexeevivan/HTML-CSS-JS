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