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

// $(document).click(function (event) {
// 	//if you click on anything except the modal itself or the "open modal" link, close the modal
// 	if (!$(event.target).closest(".active-block-2,.color__block-2").length) {
// 		$("body").find(".active-block-2").removeClass("active");
// 		$("body").find(".color__block-2").removeClass("hide");
// 	}
// });