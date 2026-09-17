export default {
	permalink: function ({ page }) {
		return `/authors/${page.fileSlug}/index.${page.outputFileExtension}`;
	},
	layout: "author.liquid",
};
