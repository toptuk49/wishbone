import * as HtmlBundlerPlugin from "html-bundler-webpack-plugin";

import { WebpackTypes } from "./types";

const plugins = [
  new HtmlBundlerPlugin({
    entry: [
      {
        import: "./src/views/pages/landing.pug",
        filename: "index.html",
      },
    ],
    preprocessor: "pug",
    js: {
      filename: "[contenthash:8].bundle.js",
    },
    css: {
      filename: "[contenthash:8].bundle.css",
    },
    preload: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        as: "font",
        type: "font/woff2",
      },
    ],
  }),
] satisfies WebpackTypes.Plugins;

export { plugins };
