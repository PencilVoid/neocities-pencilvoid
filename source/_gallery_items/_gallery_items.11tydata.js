export default {
	permalink: function ({ page }) {
		return `/photosystems/${page.fileSlug}/index.${page.outputFileExtension}`;
	},
	layout: "gallery_item.liquid",
};
