import * as webpack from "webpack";

import { module } from "./webpack/module";
import { optimization } from "./webpack/optimization";
import { plugins } from "./webpack/plugins";
import { resolve } from "./webpack/resolve";

const config: webpack.Configuration = {
  plugins: plugins,
  module: module,
  resolve: resolve,
  optimization: optimization,
};

export { config };
