import type { Config } from "jest";

import * as devtools from "./config/jest/devtools";
import * as modernCode from "./config/jest/modernCode";
import * as output from "./config/jest/output";

const config: Config = {
  ...devtools,
  ...modernCode,
  ...output,
};

export default config;
