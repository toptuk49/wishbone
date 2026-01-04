// 1. Without hashes for HMR
// 2. Enabled HMR

import type { PluginOptions } from "html-bundler-webpack-plugin";

const devConfig: Partial<PluginOptions> = {
  hotUpdate: true,
  watchFiles: {
    paths: ["./src"],
    includes: [/\.(pug)$/],
    excludes: [
      /[\\/](node_modules|dist|test)$/,
      /[\\/]\..+$/,
      /package(?:-lock)*\.json$/,
      /webpack\.(.+)\.js$/,
    ],
  },
};

export { devConfig };
