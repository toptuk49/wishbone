import * as HtmlBundlerPlugin from "html-bundler-webpack-plugin";

const plugins = [
  new HtmlBundlerPlugin({
    entry: [
      {
        import: "./src/index.html",
        filename: "index.html",
      },
    ],
    js: {
      filename: "[contenthash:8].bundle.js",
    },
    css: {
      filename: "[contenthash:8].bundle.css",
    },
  }),
];

export { plugins };
