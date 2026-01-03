import { SassTestExecutor } from "./SassTestExecutor";
import { SassTestFileFinder } from "./SassTestFileFinder";
import { Path } from "./Path";

export class SassTestRunner {
  private finder: SassTestFileFinder;
  private executor: SassTestExecutor;

  constructor(startDir: Path) {
    this.finder = new SassTestFileFinder(startDir);
    this.executor = new SassTestExecutor();
  }

  runTests(): void {
    const testFiles = this.finder.findTestFiles();
    this.executor.runTests(testFiles);
  }
}
