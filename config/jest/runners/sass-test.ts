import * as path from "node:path";
import { sync as globSync } from "glob";

import * as sassTrue from "sass-true";

import { resolve } from "../../webpack/resolve";

export function runSassTests(startDir: string = "src"): void {
  const testFiles = findAllSassTestFiles(startDir);
  const sassOptions = getSassOptions();

  for (const file of testFiles) {
    sassTrue.runSass({ describe, it }, file, sassOptions);
  }
}

function findAllSassTestFiles(dir: string): string[] {
  const pattern = path.join(path.resolve(dir), "**", "*.test.s[ac]ss");
  return globSync(pattern, { nocase: true }).sort();
}

function getSassOptions() {
  const aliases = resolve.alias || {};

  return {
    importers: [createAliasImporter(aliases)],
    loadPaths: [path.resolve("node_modules"), path.resolve("src/styles")],
  };
}

function createAliasImporter(aliases: Record<string, string>) {
  return {
    findFileUrl: (importUrl: string) => {
      // pkg (node_modules)
      if (importUrl.startsWith("pkg:")) {
        return new URL(
          `file://${path.resolve("node_modules", importUrl.slice(4))}`,
        );
      }

      // ~ (node_modules)
      if (importUrl.startsWith("~")) {
        return new URL(
          `file://${path.resolve("node_modules", importUrl.slice(1))}`,
        );
      }

      // webpack aliases
      for (const [alias, aliasPath] of Object.entries(aliases)) {
        if (importUrl.startsWith(alias)) {
          const relative = importUrl.slice(alias.length);
          return new URL(`file://${path.join(aliasPath, relative)}`);
        }
      }

      return null;
    },
  };
}
