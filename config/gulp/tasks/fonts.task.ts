import { Gulpclass, Task } from "gulpclass";

import { FontsService } from "../utils/";

@Gulpclass()
class FontsTask {
  @Task()
  public async fonts() {
    const service = new FontsService();
    await service.convertFonts();
    await service.createFontStylesheet();
  }
}

export { FontsTask };
