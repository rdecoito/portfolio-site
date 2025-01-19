import sass from 'sass';

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
}
