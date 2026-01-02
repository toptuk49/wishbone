import * as HtmlBundlerPlugin from "html-bundler-webpack-plugin";

import { WebpackTypes } from "./types";

const plugins = [
  new HtmlBundlerPlugin({
    entry: {
      landing: "./src/views/pages/landing.pug",
      sandbox: "./src/views/pages/sandbox.pug",
    },
    preprocessor: "pug",
    js: {
      filename: "scripts/[name].[contenthash:8].js",
    },
    css: {
      filename: "styles/[name].[contenthash:8].css",
    },
  }),
] satisfies WebpackTypes.Plugins;

export { plugins };
