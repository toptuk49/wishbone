import { JestTypes } from "../types";

const transform = {
  "^.+\\.(ts|tsx)$": "babel-jest",
} satisfies JestTypes.Transform;

export { transform };
