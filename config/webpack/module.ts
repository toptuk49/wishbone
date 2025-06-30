import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.s?css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
  ],
};

export { module };
