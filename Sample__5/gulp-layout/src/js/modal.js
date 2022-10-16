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


$(".open-menu").click(function () {
	$(".modal-menu").addClass("visible");
});

$(".hovered__cart").click(function () {
	$(".modal-cart").addClass("visible");
});

$(".hovered__account").click(function () {
	$(".modal-account").addClass("visible");
});

// $(".hovered__cart-close").click(function () {
// 	$(".modal-cart").removeClass("visible");
// });

// $(".hovered__account-close").click(function () {
// 	$(".hovered__account").removeClass("visible");
// });

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal-menu,.open-menu").length) {
		$("body").find(".modal-menu").removeClass("visible");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal-cart,.hovered__cart").length) {
		$("body").find(".modal-cart").removeClass("visible");
	}
});

$(document).click(function (event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".modal-account,.hovered__account").length) {
		$("body").find(".modal-account").removeClass("visible");
	}
});