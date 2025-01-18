const nsWebpack = require('@nativescript/webpack')

module.exports = (env) => {
	nsWebpack.init(env)
	// https://docs.nativescript.org/webpack
	return nsWebpack.resolveConfig()
}
