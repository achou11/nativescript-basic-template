import { type NativeScriptConfig } from '@nativescript/core'

export default {
	id: 'com.andrewchou.NativeScriptBasicTemplate',
	appPath: 'src',
	appResourcesPath: 'App_Resources',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
	},
	cli: {
		packageManager: 'pnpm',
		pathsToClean: ['node_modules', 'platforms', 'hooks'],
	},
} satisfies NativeScriptConfig
