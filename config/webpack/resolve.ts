import { WebpackTypes } from "./types";

import { paths } from "../common/paths";

const resolve = {
  extensions: [".tsx", ".ts", ".js"],
  alias: {
    "@styles": paths.styles,
    "@scripts": paths.scripts,
    "@assets": paths.assets,

    "@layout": paths.layout,
    "@components": paths.components,
  },
} satisfies WebpackTypes.Resolve;

export { resolve };
