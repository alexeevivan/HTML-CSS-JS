// var modal__list = document.getElementsByClassName("modal");
// var modal__openlist = document.getElementsByClassName("hovered__link");
// var current__modal = null

// // Function to open modal by id
// function openmodal__list(id) {
// 	for (i = 0; i < modal__list.length; i++) {
// 		if (modal__list[i].getAttribute('id') == id) {
// 			current__modal = modal__list[i];
// 			current__modal.style.display = "flex" || current__modal.style.position === "fixed";
// 			break;
// 		}
// 	}
// }

// function open__cart() {
// 	document.getElementById('modal__cart').style.display = "flex";
// }

// function open__account() {
// 	document.getElementById('modal__account').style.display = "flex";
// }

// // When the user clicks the button, open modal with the same id
// modal__openlist.onclick = function () {
// 	let currentID = modal__openlist.getAttribute('id');
// 	openmodal__list(currentID);
// }

// window.onclick = function (events) {
// 	if (events.target.nodeName == 'DIV' || events.target.nodeName == 'SVG' || events.target.nodeName == 'IMG')
// 		current__modal.style.display = "none";
// }

// window.onclick = function (events) {
// 	if (events.target.nodeName == 'DIV' || events.target.nodeName == 'SVG' || events.target.nodeName == 'IMG')
// 		document.getElementById('modal__cart').style.display = "none";
// }
// window.onclick = function (events) {
// 	if (events.target.nodeName == 'DIV' || events.target.nodeName == 'SVG' || events.target.nodeName == 'IMG')
// 		document.getElementById('modal__account').style.display = "none";
// }


$(".hovered__menu").click(function () {
	$(".modal__menu").addClass("visible");
});

$(".hovered__cart").click(function () {
	$(".modal__cart").addClass("visible");
});

$(".hovered__account").click(function () {
	$(".modal__account").addClass("visible");
});

// $(".hovered__cart-close").click(function () {
// 	$(".modal__cart").removeClass("visible");
// });

// $(".hovered__account-close").click(function () {
// 	$(".hovered__account").removeClass("visible");
// });

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal__menu,.hovered__menu").length) {
		$("body").find(".modal__menu").removeClass("visible");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal__cart,.hovered__cart").length) {
		$("body").find(".modal__cart").removeClass("visible");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal__account,.hovered__account").length) {
		$("body").find(".modal__account").removeClass("visible");
	}
});