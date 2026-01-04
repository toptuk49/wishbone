import * as gulp from "gulp";
import { SrcOptions } from "vinyl-fs";

import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

import { paths } from "@config/common/paths";

const SRC_GLOB = `${paths.assets}/fonts/*.ttf`;
const DEST_DIR = `${paths.assets}/fonts/`;
const SETTINGS: SrcOptions = { encoding: false, removeBOM: false };

export async function convertFonts(): Promise<void> {
  await Promise.all([convertToWoff(), convertToWoff2()]);
}

async function convertToWoff() {
  return gulp
    .src(SRC_GLOB, SETTINGS)
    .pipe(ttf2woff())
    .pipe(gulp.dest(DEST_DIR));
}

async function convertToWoff2() {
  return gulp
    .src(SRC_GLOB, SETTINGS)
    .pipe(ttf2woff2())
    .pipe(gulp.dest(DEST_DIR));
}
