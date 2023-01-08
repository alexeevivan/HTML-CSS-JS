$(".color-changer-brown").click(function () {
	$(".primary-brown").removeClass("active");
	$(".primary-brown").addClass("hidden");
	$(".primary-blue").removeClass("hidden");
	$(".primary-blue").addClass("active");
});

$(".color-changer-blue").click(function () {
	$(".primary-blue").removeClass("active");
	$(".primary-blue").addClass("hidden");
	$(".primary-brown").removeClass("hidden");
	$(".primary-brown").addClass("active");
});