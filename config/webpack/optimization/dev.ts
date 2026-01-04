import { WebpackTypes } from "../types";

const optimizationDev = {
  minimize: false, // Do not minimize for speed
  moduleIds: "named", // Readable modules names
  chunkIds: "named",
  removeAvailableModules: false,
  removeEmptyChunks: false,
  runtimeChunk: "single", // HMR
  splitChunks: false, // Do not split code for speed
} satisfies Partial<WebpackTypes.Optimization>;

export { optimizationDev };
