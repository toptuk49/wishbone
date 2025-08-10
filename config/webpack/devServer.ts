import { WebpackTypes } from "./types";

const devServer = {
  static: {
    directory: "./dist",
    watch: true,
  },
  watchFiles: ["./src/**/*.html", "./src/**/*.pug"],
  hot: true,
} satisfies WebpackTypes.DevServer;

export { devServer };
