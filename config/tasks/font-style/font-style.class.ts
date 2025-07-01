import * as path from "node:path";
import * as fs from "node:fs/promises";

import { IFontStyleManager } from "./font-style.interface";

export class FontStyleManager implements IFontStyleManager {
  private fontWeightMap = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  };

  private fontStyleRegex = /Italic$/i;
  private stylePath = "fonts.scss";

  public async addFontStyle() {
    const fontFileNames = await this.getFontFileNames();
    const fontFaceRules = this.getFontFaceRules(fontFileNames);
    this.addFontFaceRules(fontFaceRules);
  }

  private async getFontFileNames() {
    const fontFiles = await fs.readdir("../../fonts/");
    return fontFiles.map((file) => path.basename(file));
  }

  private getFontFaceRules(fontFileNames: string[]) {
    return fontFileNames.map((fileName) => this.extractFontFace(fileName));
  }

  private extractFontFace(fileName: string) {
    const [fontFamily, fontMetadata] = this.extractFontData(fileName);
    const [fontStyle, fontWeight] = [
      this.extractFontStyle(fontMetadata),
      this.extractFontWeight(fontMetadata),
    ];

    return `@font-face {\n\tfont-family: "${fontFamily}";\n\tfont-style: ${fontStyle};\n\tfont-weight: ${fontWeight}\n\tsrc: local("${fileName}"),\n\t\turl("${fileName}.ttf"),\n\t\turl("${fileName}.woff"),\n\t\turl("${fileName}.woff2");\n}\n")`;
  }

  private extractFontData(fileName: string) {
    return fileName.split("-");
  }

  private extractFontStyle(fontMetadata: string) {
    const isFontStyleItalic = this.fontStyleRegex.test(fontMetadata);
    if (isFontStyleItalic) {
      return "italic";
    }

    return "normal";
  }

  private extractFontWeight(fontMetadata: string) {
    const fontWeight = fontMetadata.replace(this.fontStyleRegex, "");
    return this.fontWeightMap[fontWeight];
  }

  private async addFontFaceRules(fontFaceRules: string[]) {
    await this.clearFile(this.stylePath);
    for (const rule of fontFaceRules) {
      await this.writeFontFaceRule(this.stylePath, rule);
    }
  }

  private async clearFile(fileName: string) {
    await fs.writeFile(fileName, "");
  }

  private async writeFontFaceRule(stylePath: string, rule: string) {
    await fs.appendFile(stylePath, rule);
  }
}
