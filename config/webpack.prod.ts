import { merge } from "webpack-merge";
import * as webpack from "webpack";

import { config } from "./webpack.common";
import { output } from "./webpack";

const prodConfig: webpack.Configuration = {
  mode: "production",
  output: output,
};

export default merge(config, prodConfig);
