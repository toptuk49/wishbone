import * as HtmlBundlerPlugin from "html-bundler-webpack-plugin";

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
  }),
];

export { plugins };
