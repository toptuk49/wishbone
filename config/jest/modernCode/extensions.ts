import { JestTypes } from "../types";

const extensions = [
  "ts",
  "tsx",
  "js",
  "jsx",
  "json",
  "node",
  "sass",
  "scss",
] satisfies JestTypes.Extensions;

export { extensions as moduleFileExtensions };
