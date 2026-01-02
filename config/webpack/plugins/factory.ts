import { WebpackTypes } from "../types";
import * as PluginsFactory from "./html-bundler-plugin/factory";

const createPlugins = (mode: WebpackTypes.BuildMode): WebpackTypes.Plugins => {
  const plugins: any[] = [];

  plugins.push(PluginsFactory.createHtmlBundlerPlugin(mode));

  return plugins;
};

export { createPlugins };
