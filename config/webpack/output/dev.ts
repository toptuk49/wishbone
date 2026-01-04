// 1. Without hashes for HMR

import { WebpackTypes } from "../types";

export const outputDev = {
  filename: "[name].js",
  chunkFilename: "[name].chunk.js",
  assetModuleFilename: "assets/[name][ext][query]",
} satisfies Partial<WebpackTypes.Output>;
