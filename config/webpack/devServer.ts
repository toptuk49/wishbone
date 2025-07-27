import "webpack-dev-server";

const devServer = {
  static: {
    directory: "./dist",
    watch: true,
  },
  watchFiles: ["./src/**/*.html", "./src/**/*.pug"],
  hot: true,
};

export { devServer };
