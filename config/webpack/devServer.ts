import { WebpackTypes } from "./types";

const devServer = {
  static: {
    directory: "./dist",
    watch: true,
  },
  watchFiles: {
    paths: ["src/**/*.*"],
    options: {
      usePolling: false,
      interval: 100,
    },
  },
  hot: true, // HMR
  compress: true,
} satisfies WebpackTypes.DevServer;

export { devServer };
