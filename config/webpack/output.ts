import * as path from "node:path";

const output = {
  filename: "[contenthash:8].bundle.js",
  path: path.resolve(__dirname, "./dist"),
  clean: true,
};

export { output };
