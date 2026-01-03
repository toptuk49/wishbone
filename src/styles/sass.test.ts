import { SassTestRunner } from "../../config/jest/runners/sass-test";

const runner = new SassTestRunner(__dirname);
runner.runTests();
