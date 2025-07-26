import * as path from "node:path";

import * as webpack from "webpack";
import { module } from "./webpack/module";
import { optimization } from "./webpack/optimization";
import { plugins } from "./webpack/plugins";

const config: webpack.Configuration = {
  plugins: plugins,
  module: module,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  optimization: optimization,
};

export { config };
