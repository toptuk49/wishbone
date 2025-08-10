import * as path from "node:path";
import { pathToFileURL } from "node:url";

import { resolve as webpackResolvers } from "../../config/webpack/resolve";

export class AliasImporter {
  private aliases: WebpackAliases;

  constructor() {
    this.aliases = webpackResolvers.alias;
  }

  public getImporters(): Importer[] {
    return [
      {
        findFileUrl: (importUrl: string) => {
          if (importUrl.startsWith("pkg:")) {
            return this.resolvePkgScheme(importUrl);
          }

          const aliasUrl = this.replaceAliasByAbsolutePath(importUrl);
          if (aliasUrl) return aliasUrl;

          if (importUrl.startsWith("~")) {
            return this.resolveNodeModules(importUrl);
          }

          return null;
        },
      },
    ];
  }

  private resolvePkgScheme(importUrl: string): URL | null {
    const packagePath = importUrl.replace(/^pkg:/, "");
    return new URL(pathToFileURL(path.resolve("node_modules", packagePath)));
  }

  private replaceAliasByAbsolutePath(importUrl: string): URL | null {
    const alias = this.getAlias(importUrl);
    if (!alias) return null;

    return this.aliasToUrl(alias, importUrl);
  }

  private getAlias(importUrl: string): string | null {
    return Object.keys(this.aliases).find(
      (alias) => importUrl.startsWith(alias) ?? null,
    );
  }

  private aliasToUrl(alias: string, importUrl: string): URL {
    const basePath = this.aliases[alias] as string;
    const relativePath = this.stripAlias(importUrl, alias);
    return this.toFileUrl(basePath, relativePath);
  }

  private stripAlias(importUrl: string, alias: string): string {
    return importUrl.slice(alias.length);
  }

  private toFileUrl(basePath: string, relativePath: string): URL {
    return new URL(pathToFileURL(path.join(basePath, relativePath)));
  }

  private resolveNodeModules(importUrl: string): URL {
    return this.toFileUrl(
      path.resolve("node_modules", importUrl.substring(1)),
      "",
    );
  }
}

type WebpackAliases = Record<string, string>;

type Importer = {
  findFileUrl(url: string): URL | null;
};
