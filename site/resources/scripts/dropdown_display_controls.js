document.addEventListener("DOMContentLoaded", function(event) {
	let dropdownDisplayControls = sessionStorage.getItem("dropdown-display-controls");

	if (dropdownDisplayControls) {
		if (dropdownDisplayControls === "true") {
			document.getElementById("dropdown-display-controls").checked = true;
		} else if (dropdownDisplayControls === "false") {
			document.getElementById("dropdown-display-controls").checked = false;
		}
	} else {
		document.getElementById("dropdown-display-controls").checked = !window.matchMedia("screen and (max-width: 840px)").matches;
	}
})

document.getElementById("dropdown-display-controls").addEventListener("change", function(event) {
	if (document.getElementById("dropdown-display-controls").checked) {
		sessionStorage.setItem("dropdown-display-controls", "true");
	} else {
		sessionStorage.setItem("dropdown-display-controls", "false");
	}
})