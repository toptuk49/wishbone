import * as path from "node:path";

const resolve = {
  extensions: [".tsx", ".ts", ".js"],
  alias: {
    "@": path.resolve(__dirname, "../../src"),
    "@styles": path.resolve(__dirname, "../../src/styles"),
    "@scripts": path.resolve(__dirname, "../../src/scripts"),
    "@layout": path.resolve(__dirname, "../../src/layout"),
  },
};

export { resolve };
