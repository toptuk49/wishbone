import * as webpack from "webpack";

import { module, optimization, plugins, resolve } from "./webpack";

const config: webpack.Configuration = {
  plugins: plugins,
  module: module,
  resolve: resolve,
  optimization: optimization,
};

export { config };
