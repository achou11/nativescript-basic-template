// @ts-check

/** @type {import('prettier').Config} */
export default {
	arrowParens: 'always',
	semi: false,
	singleQuote: true,
	trailingComma: 'es5',
	useTabs: true,
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'@prettier/plugin-xml',
		'prettier-plugin-jsdoc',
	],
	// Options for @ianvs/prettier-plugin-sort-imports
	importOrder: [
		'<BUILTIN_MODULES>', // Node.js built-in modules
		'<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
		'',
		'^[.]', // relative imports
	],
	importOrderParserPlugins: ['typescript', 'jsx'],
	importOrderTypeScriptVersion: '5.8.2',
	importOrderCaseSensitive: true,
	// Configuration for prettier-plugin-jsdoc
	jsdocCommentLineStrategy: 'keep',
	jsdocAddDefaultToDescription: false,
	jsdocSeparateReturnsFromParam: true,
}
