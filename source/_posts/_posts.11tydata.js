export default {
	permalink: function ({ page }) {
		return `/sieveplate/${page.fileSlug}/index.${page.outputFileExtension}`;
	},
	layout: "post.liquid",
};
