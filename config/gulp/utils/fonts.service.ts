import { FontsConverter } from "./fonts.converter";
import { FontStylesheetCreator } from "./fonts.creator";
import { FontsUtils } from "./fonts.types";

class FontsService implements FontsUtils {
  public async convertFonts(): Promise<void> {
    return new FontsConverter().convert();
  }

  public createFontStylesheet(): Promise<void> {
    return new FontStylesheetCreator().create();
  }
}

export { FontsService };
