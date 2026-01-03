export interface FontsUtils {
  convertFonts(): Promise<void>;
  createFontStylesheet(): Promise<void>;
}

export interface FontFile {
  path: string;
  content?: Buffer;
}

export type FontFaceStyle = string;
