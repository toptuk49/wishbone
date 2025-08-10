import { JestTypes } from "../types";

const resolve = {
  "^@utils/(.*)$": "<rootDir>/utils/$1",
} satisfies JestTypes.ModuleNameMapper;

export { resolve as moduleNameMapper };
