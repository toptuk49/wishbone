import type { SrcOptions } from "vinyl-fs";
import * as gulp from "gulp";

import { default as ttf2woff } from "gulp-ttf2woff";
import { default as ttf2woff2 } from "gulp-ttf2woff2";

import { paths } from "@common/paths";

const settings: SrcOptions = {
  encoding: false,
  removeBOM: false,
};

class FontsConverter {
  public async convert() {
    this.convertTTFtoWOFF();
    this.convertTTFtoWOFF2();
  }

  private async convertTTFtoWOFF() {
    return gulp
      .src([`${paths.assets}/fonts/*.ttf`], settings)
      .pipe(ttf2woff())
      .pipe(gulp.dest(`${paths.assets}/fonts/`));
  }

  private async convertTTFtoWOFF2() {
    return gulp
      .src([`${paths.assets}/fonts/*.ttf`], settings)
      .pipe(ttf2woff2())
      .pipe(gulp.dest(`${paths.assets}/fonts/`));
  }
}

export { FontsConverter };
