// @ts-check
import { fileURLToPath } from 'node:url'
import { includeIgnoreFile } from '@eslint/compat'
import pluginJs from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	includeIgnoreFile(fileURLToPath(new URL('.gitignore', import.meta.url))),
	includeIgnoreFile(
		fileURLToPath(new URL('.git/info/exclude', import.meta.url))
	),
	{ files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'] },
	{ languageOptions: { globals: { ...globals.node, ...globals.worker } } },
	pluginJs.configs.recommended,
	{
		extends: tseslint.configs.recommended,
		rules: {
			'@typescript-eslint/array-type': ['warn', { default: 'generic' }],
			// TODO: Remove when project becomes ESM
			'@typescript-eslint/no-require-imports': 'warn',
			// Allow unused vars if prefixed with `_` (https://typescript-eslint.io/rules/no-unused-vars/)
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
		},
	}
)
