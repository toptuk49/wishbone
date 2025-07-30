import { SassTestRunner } from "@utils/sass-test/SassTestRunner";

const runner = new SassTestRunner(process.cwd());
runner.runTests();
