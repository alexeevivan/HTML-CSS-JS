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