import { JestTypes } from "../types";

const reporters = [
  ["default", { summaryThreshold: 1 }],
] satisfies JestTypes.Reporters;

export { reporters };
