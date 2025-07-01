import { FontStyleManager } from "./font-style.class";
import type { IFontStyleManager } from "./font-style.interface";

export function createFontStyleManager(): IFontStyleManager {
  return new FontStyleManager();
}
