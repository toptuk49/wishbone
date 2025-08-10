import { WebpackTypes } from "./types";

const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.s?css$/i,
      use: [
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              loadPaths: ["node_modules"],
            },
          },
        },
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
  ],
} satisfies WebpackTypes.Module;

export { module };
