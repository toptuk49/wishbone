import * as fs from "node:fs/promises";
import * as path from "node:path";

import { paths } from "@common/paths";
import { parseFontName } from "./parser";

export async function generateFontStyles(): Promise<void> {
  const fontsDir = path.resolve(paths.assets, "fonts");
  const ttfFiles = await findFontFiles(fontsDir);
  const cssRules = generateCssRules(fontsDir, ttfFiles);

  await saveStyles(cssRules);
  console.log(`Generated ${cssRules.length} @font-face rules`);
}

async function findFontFiles(fontsDir: string): Promise<string[]> {
  const files = await fs.readdir(fontsDir);
  return files
    .filter((file) => file.endsWith(".ttf"))
    .map((file) => path.join(fontsDir, file))
    .sort();
}

function generateCssRules(fontsDir: string, ttfFiles: string[]): string[] {
  return ttfFiles.map((ttfPath) => {
    const fontFile = path.basename(ttfPath);
    const { family, weight, style } = parseFontName(fontFile);
    const baseName = fontFile.replace(".ttf", "");

    return `@font-face {
  font-family: "${family}";
  src: url("./${baseName}.woff2") format("woff2"),
       url("./${baseName}.woff") format("woff"),
       url("./${fontFile}") format("truetype");
  font-weight: ${weight};
  font-style: ${style};
  font-display: swap;
}`;
  });
}

async function saveStyles(cssRules: string[]): Promise<void> {
  const outputPath = path.resolve(
    paths.styles,
    "design-system/fonts/fonts.scss",
  );
  const content = cssRules.join("\n\n");
  await fs.writeFile(outputPath, content, "utf-8");
}
