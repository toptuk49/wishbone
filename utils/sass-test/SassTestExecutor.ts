import * as sassTrue from "sass-true";

import { Path } from "./Path";

export class SassTestExecutor {
  runTests(sassTestFiles: Path[]): void {
    sassTestFiles.forEach((testFile) =>
      sassTrue.runSass({ describe, it }, testFile),
    );
  }
}
