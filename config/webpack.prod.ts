import { merge } from "webpack-merge";
import * as webpack from "webpack";

import { config } from "./webpack.common";
import * as optimization from "./webpack/optimization";
import * as output from "./webpack/output";
import * as plugins from "./webpack/plugins";

const prodConfig: webpack.Configuration = {
  mode: "production",
  devtool: "source-map",

  plugins: plugins.createPlugins("production"),

  optimization: {
    ...optimization.optimizationCommon,
    ...optimization.optimizationProd,
  },

  output: {
    ...output.outputCommon,
    ...output.outputProd,
  },

  performance: {
    hints: "warning",
  },
};

export default merge(config, prodConfig);
