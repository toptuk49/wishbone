import * as webpack from "webpack";

import { module } from "./webpack/module";
import * as optimization from "./webpack/optimization";
import { resolve } from "./webpack";

const config: webpack.Configuration = {
  module: module,
  optimization: optimization.optimizationCommon,
  resolve: resolve,
};

export { config };
