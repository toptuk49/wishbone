import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
  new MiniCssExtractPlugin(),
];

export { plugins };
