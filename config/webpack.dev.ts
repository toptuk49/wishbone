import { merge } from "webpack-merge";
import * as webpack from "webpack";

import { config } from "./webpack.common";
import { devServer } from "./webpack";

const devConfig: webpack.Configuration = {
  mode: "development",
  devServer: devServer,
};

export default merge(config, devConfig);
