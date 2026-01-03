import * as path from "node:path";

import { FontFile, FontFaceStyle } from "./fonts.types";
import { FontNameParser } from "./fonts.parser";

interface FontFaceRules {
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
}

class FontFaceExtractor {
  private fontFile: FontFile;

  public constructor(fontFile: FontFile) {
    this.fontFile = fontFile;
  }

  public extract(): FontFaceStyle {
    const fontName = this.getFontNameFromFile();
    const fontFaceRules = this.getFontFaceRules(fontName);
    return this.generateFontFaceStyle(fontFaceRules);
  }

  private getFontNameFromFile(): string {
    const filePath = this.fontFile.path;
    return path.basename(filePath, path.extname(filePath));
  }

  private getFontFaceRules(fontName: string): FontFaceRules {
    const parser = new FontNameParser(fontName);
    return {
      fontFamily: parser.parseFontFamily(),
      fontWeight: parser.parseFontWeight(),
      fontStyle: parser.parseFontStyle(),
    };
  }

  private generateFontFaceStyle(rules: FontFaceRules): FontFaceStyle {
    const filePath = this.fontFile.path;
    const basePath = filePath.replace(path.extname(filePath), "");

    return `@font-face {
  font-family: "${rules.fontFamily}";
  src: url("${basePath}.woff2") format("woff2"),
       url("${basePath}.woff") format("woff"),
       url("${filePath}") format("truetype");
  font-weight: ${rules.fontWeight};
  font-style: ${rules.fontStyle};
  font-display: swap;
}`;
  }
}

export { FontFaceExtractor };
