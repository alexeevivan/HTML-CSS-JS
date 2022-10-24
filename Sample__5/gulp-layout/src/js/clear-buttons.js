$(".btn-clear__item-1").click(function () {
	$(".aside-right__submit-1").addClass("hidden-text");
});

$(".btn-clear__item-2").click(function () {
	$(".aside-right__submit-2").addClass("hidden-text");
});


// $(document).click(function (event) {
// 	//if you click on anything except the modal itself or the "open modal" link, close the modal
// 	if (!$(event.target).closest(".to-clear__item-1,.btn-clear__item-1").length) {
// 		$("body").find(".to-clear__item-1").removeClass("hidden-text");
// 	}
// });

// $(document).click(function (event) {
// 	//if you click on anything except the modal itself or the "open modal" link, close the modal
// 	if (!$(event.target).closest(".to-clear__item-2,.btn-clear__item-2").length) {
// 		$("body").find(".to-clear__item-2").removeClass("hidden-clear");
// 	}
// });