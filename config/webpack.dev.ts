import { merge } from "webpack-merge";
import * as webpack from "webpack";

import { config } from "./webpack.common";
import { devServer } from "./webpack";

import * as optimization from "./webpack/optimization";
import * as output from "./webpack/output";
import * as plugins from "./webpack/plugins";

const devConfig: webpack.Configuration = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: devServer,

  plugins: plugins.createPlugins("development"),

  optimization: {
    ...config.optimization,
    ...optimization.optimizationDev,
  },

  output: {
    ...config.output,
    ...output.outputDev,
  },

  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
};

export default merge(config, devConfig);
