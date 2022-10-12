var modal__list = document.getElementsByClassName("modal");
var modal__openlist = document.getElementsByClassName("hovered__link");
var current__modal = null

// Function to open modal by id
function openmodal__list(id) {
	for (i = 0; i < modal__list.length; i++) {
		if (modal__list[i].getAttribute('id') == id) {
			current__modal = modal__list[i];
			current__modal.style.display = "flex" || current__modal.style.position === "fixed";
			break;
		}
	}
}

// When the user clicks the button, open modal with the same id
modal__openlist.onclick = function () {
	let currentID = modal__openlist.getAttribute('id');
	openmodal__list(currentID);
}

function open__cart() {
	document.getElementById('modal__cart').style.display = "flex";
}

window.onclick = function (events) {
	if (events.target.nodeName == 'DIV' || events.target.nodeName == 'SVG' || events.target.nodeName == 'IMG')
		current__modal.style.display = "none";
	if (events.target.nodeName == 'DIV' || events.target.nodeName == 'SVG' || events.target.nodeName == 'IMG')
		document.getElementById('modal__cart').style.display = "none";
}
