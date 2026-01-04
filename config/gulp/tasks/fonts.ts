import { Gulpclass, Task } from "gulpclass";
import { convertFonts, generateFontStyles } from "../utils/fonts";

@Gulpclass()
export class FontsTask {
  @Task()
  public async fonts() {
    await convertFonts();
    await generateFontStyles();
  }
}
