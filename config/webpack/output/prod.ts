// 1. Using hashes to update cached files

import { WebpackTypes } from "../types";

export const outputProd = {
  filename: "[name].[contenthash:8].js",
  chunkFilename: "[name].[contenthash:8].chunk.js",
  assetModuleFilename: "assets/[name].[hash:8][ext][query]",
} satisfies Partial<WebpackTypes.Output>;
