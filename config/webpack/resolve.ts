import * as path from "node:path";

import { WebpackTypes } from "./types";

const resolve = {
  extensions: [".tsx", ".ts", ".js"],
  alias: {
    "@": path.resolve(__dirname, "../../src"),
    "@styles": path.resolve(__dirname, "../../src/styles"),
    "@scripts": path.resolve(__dirname, "../../src/scripts"),
    "@assets": path.resolve(__dirname, "../../src/assets"),

    "@layout": path.resolve(__dirname, "../../src/views/layout"),
    "@components": path.resolve(__dirname, "../../src/views/components"),
    "@atoms": path.resolve(__dirname, "../../src/views/atoms"),
  },
} satisfies WebpackTypes.Resolve;

export { resolve };
