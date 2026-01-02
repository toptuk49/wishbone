import * as path from "node:path";
import { WebpackTypes } from "../types";

export const outputCommon = {
  path: path.resolve(process.cwd(), "dist"),
  clean: true,
} satisfies Partial<WebpackTypes.Output>;
