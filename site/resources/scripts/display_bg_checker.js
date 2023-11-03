function bgCheckerVisible() {
	document.body.style.backgroundImage = "linear-gradient(to bottom left, transparent 0%, transparent 50%, var(--bg-triangle,#220029) 50%, var(--bg-triangle,#220029) 100%), linear-gradient(45deg, var(--bg-checkerlight,#680068) 25%, transparent 25%, transparent 75%, var(--bg-checkerlight,#680068) 75%, var(--bg-checkerlight,#680068)), linear-gradient(45deg, var(--bg-checkerlight,#680068) 25%, var(--bg-checkerdark,#42004E) 25%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerlight,#680068) 75%, var(--bg-checkerlight,#680068))"
}

function bgCheckerInvisible() {
	document.body.style.backgroundImage = "linear-gradient(to bottom left, var(--bg-checkerdark,#42004E) 0%, var(--bg-checkerdark,#42004E) 50%, var(--bg-triangle,#220029) 50%, var(--bg-triangle,#220029) 100%), linear-gradient(45deg, var(--bg-checkerlight,#680068) 25%, transparent 25%, transparent 75%, var(--bg-checkerlight,#680068) 75%, var(--bg-checkerlight,#680068)), linear-gradient(45deg, var(--bg-checkerlight,#680068) 25%, var(--bg-checkerdark,#42004E) 25%, var(--bg-checkerdark,#42004E) 75%, var(--bg-checkerlight,#680068) 75%, var(--bg-checkerlight,#680068))";
}

document.addEventListener("DOMContentLoaded", function(event) {
	let cookieDisplayBgChecker = localStorage.getItem("display_bg_checker");

	if (cookieDisplayBgChecker) {
		if (cookieDisplayBgChecker === "false") {
			bgCheckerInvisible();
			if (document.getElementById("display-bg-checker")) { document.getElementById("display-bg-checker").checked = false; }
		} else if (cookieDisplayBgChecker === "true") {
			bgCheckerVisible();
			if (document.getElementById("display-bg-checker")) { document.getElementById("display-bg-checker").checked = true; }
		}
	} else {
		bgCheckerVisible();
		if (document.getElementById("display-bg-checker")) { document.getElementById("display-bg-checker").checked = true; }
	}
})

if (document.getElementById("display-bg-checker")) {
	document.getElementById("display-bg-checker").addEventListener("change", function(event) {
		if (document.getElementById("display-bg-checker").checked) {
			bgCheckerVisible();
			localStorage.setItem("display_bg_checker", "true");
		} else {
			bgCheckerInvisible();
			localStorage.setItem("display_bg_checker", "false");
		}
	})
}
