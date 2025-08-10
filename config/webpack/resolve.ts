import * as path from "node:path";

import { WebpackTypes } from "./types";

const resolve = {
  extensions: [".tsx", ".ts", ".js"],
  alias: {
    "@styles": path.resolve(process.cwd(), "src/styles"),
    "@scripts": path.resolve(process.cwd(), "src/scripts"),
    "@assets": path.resolve(process.cwd(), "src/assets"),

    "@layout": path.resolve(process.cwd(), "src/views/layout"),
    "@components": path.resolve(process.cwd(), "src/views/components"),
    "@atoms": path.resolve(process.cwd(), "src/views/atoms"),
  },
} satisfies WebpackTypes.Resolve;

export { resolve };
