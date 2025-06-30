import "webpack-dev-server";

const devServer = {
  static: {
    directory: "./dist",
    watch: true,
  },
  watchFiles: ["./src/**/*.html"],
  hot: true,
};

export { devServer };
