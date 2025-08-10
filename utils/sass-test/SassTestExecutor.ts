import * as path from "node:path";
import * as sassTrue from "sass-true";

import { Path } from "./Path";
import { AliasImporter } from "./AliasImporter";

export class SassTestExecutor {
  private aliasImporter: AliasImporter;

  constructor() {
    this.aliasImporter = new AliasImporter();
  }

  runTests(sassTestFiles: Path[]): void {
    sassTestFiles.forEach((testFile) =>
      sassTrue.runSass({ describe, it }, testFile, {
        importers: this.aliasImporter.getImporters(),
        loadPaths: [
          path.resolve(process.cwd(), "node_modules"),
          path.resolve(process.cwd(), "src/styles"),
        ],
      }),
    );
  }
}
