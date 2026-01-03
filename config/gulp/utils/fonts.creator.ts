import * as fs from "node:fs/promises";
import * as path from "node:path";

import { paths } from "@common/paths";

import { FontFaceExtractor } from "./fonts.extractor";

class FontStylesheetCreator {
  public async create() {
    const filePaths = await this.getFontFiles();
    const rules = await this.extractFontFaceRules(filePaths);
    this.writeFontFaceRules(rules);
  }

  private async getFontFiles() {
    const fontsDir = path.resolve(paths.assets, "fonts");
    const files = await fs.readdir(fontsDir);
    return files
      .filter((file) => file.endsWith(".ttf"))
      .map((file) => path.join(fontsDir, file))
      .sort();
  }

  private async extractFontFaceRules(filePaths: string[]) {
    const fontFaceRules: string[] = [];

    filePaths.forEach((filePath) => {
      const fontFaceRule = new FontFaceExtractor({
        path: filePath,
        content: undefined,
      }).extract();
      fontFaceRules.push(fontFaceRule);
    });

    return fontFaceRules;
  }

  private async writeFontFaceRules(rules: string[]) {
    const outputPath = path.resolve(
      paths.styles,
      "design-system/fonts/fonts.scss",
    );
    const content = rules.join("\n\n");

    await fs.writeFile(outputPath, content, "utf-8");

    console.log(`Generated ${rules.length} @font-face rules`);
  }
}

export { FontStylesheetCreator };
