function bgCheckerVisible() {
	document.getElementsByClassName("body-grid-left")[0].style.backgroundImage = `linear-gradient(to bottom left, transparent 0%, transparent 50%, var(--bg-triangle,#220029) 50%, var(--bg-triangle,#220029) 100%),
	linear-gradient(45deg, var(--bg-checkerlight,#680068) 25%, transparent 25%, transparent 75%, var(--bg-checkerlight,#680068) 75%, var(--bg-checkerlight,#680068)),
	linear-gradient(45deg, var(--bg-checkerlight,#680068) 25%, var(--bg-checkerdark,#42004E) 25%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerlight,#680068) 75%, var(--bg-checkerlight,#680068))`;
	document.getElementsByClassName("body-grid-right")[0].style.backgroundImage = `background-image: linear-gradient(to bottom left, transparent 0%, transparent 50%, var(--bg-triangle,#220029) 50%, var(--bg-triangle,#220029) 100%),
	linear-gradient(45deg, var(--bg-checkerlight,#680068) 25%, transparent 25%, transparent 75%, var(--bg-checkerlight,#680068) 75%, var(--bg-checkerlight,#680068)),
	linear-gradient(45deg, var(--bg-checkerlight,#680068) 25%, var(--bg-checkerdark,#42004E) 25%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerlight,#680068) 75%, var(--bg-checkerlight,#680068))`;
}

function bgCheckerInvisible() {
	document.getElementsByClassName("body-grid-left")[0].style.backgroundImage = `linear-gradient(to bottom left, transparent 0%, transparent 100%),
	linear-gradient(45deg, var(--bg-checkerdark,#42004E) 25%, transparent 25%, transparent 75%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerdark,#42004E)),
	linear-gradient(45deg,var(--bg-checkerdark,#42004E) 25%, var(--bg-checkerdark,#42004E) 25%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerdark,#42004E))`;
	document.getElementsByClassName("body-grid-right")[0].style.backgroundImage = `linear-gradient(to bottom left, transparent 0%, transparent 100%),
	linear-gradient(45deg, var(--bg-checkerdark,#42004E) 25%, transparent 25%, transparent 75%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerdark,#42004E)),
	linear-gradient(45deg,var(--bg-checkerdark,#42004E) 25%, var(--bg-checkerdark,#42004E) 25%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerdark,#42004E))`;
}

document.addEventListener("DOMContentLoaded", function(event) {
	let cookieDisplayBgChecker = localStorage.getItem("display_bg_checker");

	if (cookieDisplayBgChecker) {
		if (cookieDisplayBgChecker === "false") {
			bgCheckerInvisible();
			if (document.getElementById("display-bg-checker")) { document.getElementById("display-bg-checker").checked = true; }
		} else if (cookieDisplayBgChecker === "true") {
			bgCheckerVisible();
			if (document.getElementById("display-bg-checker")) { document.getElementById("display-bg-checker").checked = false; }
		}
	} else {
		bgCheckerVisible();
		if (document.getElementById("display-bg-checker")) { document.getElementById("display-bg-checker").checked = false; }
	}
})

if (document.getElementById("display-bg-checker")) {
	document.getElementById("display-bg-checker").addEventListener("change", function(event) {
		if (document.getElementById("display-bg-checker").checked) {
			bgCheckerInvisible();
			localStorage.setItem("display_bg_checker", "false");
		} else {
			bgCheckerVisible();
			localStorage.setItem("display_bg_checker", "true");
		}
	})
}
