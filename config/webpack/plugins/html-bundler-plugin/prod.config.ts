// 1. Using hashes to update cached files

import type { PluginOptions } from "html-bundler-webpack-plugin";

const prodConfig: Partial<PluginOptions> = {
  js: {
    filename: "scripts/[name].[contenthash:8].js",
  },
  css: {
    filename: "styles/[name].[contenthash:8].css",
  },
};

export { prodConfig };
