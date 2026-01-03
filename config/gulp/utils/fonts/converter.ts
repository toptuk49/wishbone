import * as gulp from "gulp";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

import { paths } from "@common/paths";

const SRC_GLOB = `${paths.assets}/fonts/*.ttf`;
const DEST_DIR = `${paths.assets}/fonts/`;
const SETTINGS = { encoding: false, removeBOM: false };

export async function convertFonts(): Promise<void> {
  await Promise.all([convertToWoff(), convertToWoff2()]);
}

function convertToWoff(): Promise<NodeJS.ReadWriteStream> {
  return new Promise((resolve, reject) => {
    gulp
      .src(SRC_GLOB, SETTINGS)
      .pipe(ttf2woff())
      .pipe(gulp.dest(DEST_DIR))
      .on("end", resolve)
      .on("error", reject);
  });
}

function convertToWoff2(): Promise<NodeJS.ReadWriteStream> {
  return new Promise((resolve, reject) => {
    gulp
      .src(SRC_GLOB, SETTINGS)
      .pipe(ttf2woff2())
      .pipe(gulp.dest(DEST_DIR))
      .on("end", resolve)
      .on("error", reject);
  });
}
