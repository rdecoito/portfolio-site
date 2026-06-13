import * as sass from 'sass';

/**
 * @param {module:@11ty/eleventy/UserConfig} eleventyConfig
 */
export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory('src');

	eleventyConfig.addPassthroughCopy('src/assets');

	eleventyConfig.addTemplateFormats('scss');
	eleventyConfig.addExtension('scss', {
		outputFileExtension: 'css',
		compile: async function(inputContent) {
			const result = sass.compileString(inputContent);
			return async () => result.css;
		}
	});

	eleventyConfig.addShortcode('excerpt', function (post) {
		const EXCERPT_LENGTH = 250;
		if (!post.templateContent) return '';
		const startParagraphIndex = post.templateContent.indexOf('<p>') + 3;
		const endParagraphIndex = post.templateContent.indexOf('</p>');
		if (endParagraphIndex > 0) {
			return '<p>' + post.templateContent.substr(startParagraphIndex, endParagraphIndex - startParagraphIndex).substr(0, EXCERPT_LENGTH) + '...</p>';
		}
		return post.templateContent;
	})

	eleventyConfig.addShortcode('extAnchor', function (link, text, attrs) {
		if (!link || typeof link !== 'string') throw new Error(`Cannot create external anchor with no link. Received: [${link}]`);
		if (text != null && typeof text !== 'string') throw new Error(`External anchor text must be nullish or a string. Received: [${text}]`)
		if (attrs != null && typeof attrs !== 'string') throw new Error(`External anchor attrs must be nullish or a string. Received: [${attrs}]`)
		return `<a href="${link}" rel="noreferrer"${attrs ? ' ' + attrs : ''}>${text ?? link}</a>`
	})

	eleventyConfig.addCollection('categories', function (collectionApi) {
		let categories = new Set();
		const posts = collectionApi.getFilteredByTag('post');
		posts.forEach((post) => {
			categories = categories.union(new Set(post.data.categories));
		});
		return Array.from(categories);
	})

	eleventyConfig.addFilter('filterByCategory', function (posts, category) {
		const lowerCaseCategory = category.toLowerCase();
		return posts.filter((post) => {
			return post.data.categories.map((c) => c.toLowerCase()).includes(lowerCaseCategory);
		});
	})
	
	const english = new Intl.DateTimeFormat("sv-SE"); // Sweden uses YYYY-MM-DD format, which is what we want
	eleventyConfig.addFilter("niceDate", function(d) {
		return english.format(new Date(d));
	});

	eleventyConfig.addTransform("anchor-noreferrer-injection", async function (content) {
		if (!(this.page.outputPath || "").endsWith('.html')) return content;
		if (typeof content !== 'string') return content;

		return content.replaceAll('<a href="https://', '<a rel="noreferrer" href="https://');
	})
}
