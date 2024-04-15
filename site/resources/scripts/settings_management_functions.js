let settings_keys = [
	"colour_theme",
	"display_bg_checker",
	"main_content_width"
]

function clearAllOptions() {
	settings_keys.forEach(item => localStorage.removeItem(item));
}

function setWithExpiry(key, value, ttl) {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + ttl
	}
	localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key);
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

document.getElementById("clear-all-options").addEventListener("click", clearAllOptions)
