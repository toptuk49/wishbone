import * as path from "node:path";

import * as HtmlBundlerPlugin from "html-bundler-webpack-plugin";
import type { PluginOptions } from "html-bundler-webpack-plugin";

import { WebpackTypes } from "../../types";
import { devConfig } from "./dev.config";
import { prodConfig } from "./prod.config";

const createHtmlBundlerPlugin = (
  mode: WebpackTypes.BuildMode,
): HtmlBundlerPlugin => {
  const isDev = mode === "development";

  const baseConfig: PluginOptions = {
    entry: {
      landing: path.resolve(process.cwd(), "src/views/pages/landing.pug"),
      sandbox: path.resolve(process.cwd(), "src/views/pages/sandbox.pug"),
    },
    preprocessor: "pug",
  };

  const modeConfig = isDev ? devConfig : prodConfig;

  const finalConfig = {
    ...baseConfig,
    ...modeConfig,
    js: modeConfig.js || baseConfig.js,
    css: modeConfig.css || baseConfig.css,
  };

  return new HtmlBundlerPlugin(finalConfig);
};

export { createHtmlBundlerPlugin };
