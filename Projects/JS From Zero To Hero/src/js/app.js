var viewPortHeight = window.outerHeight;
var header = document.getElementById("footer");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > viewPortHeight || document.documentElement.scrollTop > viewPortHeight) {
		header.classList.remove("invisible");
		header.classList.add("sticky");
	} else {
		header.classList.add("invisible");
		header.classList.remove("sticky");
	}
}

var i = 0;
function checkHtml() {
	if (i == 0) {
		i = 1;
		var elem = document.getElementById("html");
		var width = 0;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= 90) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
}

function checkCss() {
	if (i == 0) {
		i = 1;
		var elem = document.getElementById("css");
		var width = 0;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= 70) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
}

function checkSass() {
	if (i == 0) {
		i = 1;
		var elem = document.getElementById("sass");
		var width = 0;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= 70) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
}

function checkJs() {
	if (i == 0) {
		i = 1;
		var elem = document.getElementById("js");
		var width = 0;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= 20) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}
}