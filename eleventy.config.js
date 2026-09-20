import prettier from "prettier";
import { DateTime } from "luxon";
import path from "node:path";
import * as sass from "sass";
import rssPlugin from "@11ty/eleventy-plugin-rss";

const TIME_ZONE = "system";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(rssPlugin);

	eleventyConfig.addGlobalData("site", {
		url: "https://pencilvoid.neocities.org/",
		title: "pencilvoid.neocities.org",
	});

	eleventyConfig.addCollection("sieveplate_items", (collectionsApi) => {
		return collectionsApi
			.getFilteredByGlob(["source/_posts/*.md", "source/_posts/*.html"])
			.sort((a, b) => a.date - b.date);
	});
	eleventyConfig.addCollection("authors", (collectionsApi) => {
		return collectionsApi
			.getFilteredByGlob(["source/_authors/*.md", "source/_authors/*.html"])
			.sort((a, b) => a.date - b.date);
	});
	eleventyConfig.addCollection("photosystems_items", (collectionsApi) => {
		return collectionsApi
			.getFilteredByGlob(["source/_gallery_items/*.md", "source/_gallery_items/*.html"])
			.sort(
				(a, b) => a.data["create-date"] - b.data["create-date"],
			); /* why does this make it work?????????????? */
	});

	eleventyConfig.addGlobalData("layout", "default.liquid");

	eleventyConfig.setLiquidOptions({
		dynamicPartials: false,
	});

	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css",
		useLayouts: false,
		compile: async function (inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			// Don’t compile file names that start with an underscore
			if (parsed.name.startsWith("_")) {
				return;
			}

			let result = sass.compileString(inputContent, {
				loadPaths: [parsed.dir || ".", this.config.dir.includes],
			});

			// Map dependencies for incremental builds
			this.addDependencies(inputPath, result.loadedUrls);

			return async (data) => {
				return result.css;
			};
		},
	});

	eleventyConfig.addTemplateFormats("scss");

	eleventyConfig.addPassthroughCopy("source/assets");
	eleventyConfig.addPassthroughCopy("source/games/c2/**/*.js");
	eleventyConfig.addPassthroughCopy("source/games/c2/**/*.json");
	eleventyConfig.addPassthroughCopy("source/games/c2/**/*.png");
	eleventyConfig.addPassthroughCopy("source/site.webmanifest");

	eleventyConfig.addTransform("prettier", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let prettified = prettier.format(content, {
				parser: "html",
				printWidth: 120,
				tabWidth: 4,
				useTabs: true,
			});
			return prettified;
		}
		return content;
	});

	eleventyConfig.addDateParsing(function (dateValue) {
		let localDate;
		if (dateValue instanceof Date) {
			localDate = DateTime.fromJSDate(dateValue, { zone: "utc" }).setZone(TIME_ZONE, { keepLocalTime: true });
		} else if (typeof dateValue === "string") {
			localDate = DateTime.fromISO(dateValue, { zone: TIME_ZONE });
		}
		if (localDate?.isValid === false) {
			throw new Error(
				`Invalid \`date\` value (${dateValue}) is invalid for ${this.page.inputPath}: ${localDate.invalidReason}`,
			);
		}
		return localDate;
	});
}

export const config = {
	dir: {
		input: "source",
		output: "build",
		layouts: "_layouts",
	},
};
