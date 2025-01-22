import * as sass from 'sass';

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
	
}
