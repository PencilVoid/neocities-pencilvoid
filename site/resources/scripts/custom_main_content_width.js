function setMainContentWidth(width) {
	let chosenWidth = width.toString();
	let chosenWidthString = chosenWidth.concat("ch");
	document.documentElement.style.setProperty('--main-content-width', chosenWidthString);
}

document.addEventListener("DOMContentLoaded", function(event) {
	let chosenMainContentWidth = localStorage.getItem("main_content_width");

	if (chosenMainContentWidth) {
		setMainContentWidth(chosenMainContentWidth);
	} else {
		setMainContentWidth(80);
	}
})

if (document.getElementById("main-content-width-apply")) {
	document.getElementById("main-content-width-apply").addEventListener("click", function(event) {
		let width = document.getElementById("main-content-width").value;
		let widthInputNotice = document.getElementById("main-content-width-input-notice");
		if (parseInt(width)) {
			let numWidth = Math.max(width,1);
			widthInputNotice.textContent = "";
			setMainContentWidth(numWidth);
			localStorage.setItem("main_content_width",numWidth);
		} else {
			widthInputNotice.textContent = "Invalid input.";
		}
	})
}
