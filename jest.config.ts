import type { Config } from "jest";

const config: Config = {
  verbose: false,
  silent: false,
  reporters: [["default", { summaryThreshold: 1 }]],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // Можно добавить ignore для node_modules, если надо
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@utils/(.*)$": "<rootDir>/utils/$1",
  },
};

export default config;
