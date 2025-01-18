# NativeScript Basic Template

Basic NativeScript project set up according to my needs and preferences.

The application is a plain TypeScript NativeScript application (basically an extension of [`@nativescript/template-blank-ts`](https://www.npmjs.com/package/@nativescript/template-blank-ts)). Updating this project so that a specific framework can be used should be relatively straightforward to do (probably best to refer to the [app templates repo](https://github.com/NativeScript/nativescript-app-templates/) for guidance).

## Getting started

This project requires some tooling to be set up in order to work. Refer to NativeScript's [docs](https://docs.nativescript.org/setup/) for more information. I personally use [mise](https://mise.jdx.dev/) when it comes to managing programming languages. If you're using other tools, you may want to set up the appropriate versioning files (e.g. `.nvmrc`, `.tool-versions`, etc) based on what's configured in [`mise.toml`](./mise.toml).

After cloning the repo...

1. Install deps: `pnpm install`

2. Run the dev server: `pnpm start`

## License

[MIT](./LICENSE)
