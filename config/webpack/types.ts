import type { Configuration as WebpackConfig } from "webpack";
import type { Configuration as DevServerConfig } from "webpack-dev-server";

export namespace WebpackTypes {
  export type DevServer = DevServerConfig;
  export type Module = RequiredValue<WebpackConfig["module"]>;
  export type Optimization = RequiredValue<WebpackConfig["optimization"]>;
  export type Output = RequiredValue<WebpackConfig["output"]>;
  export type Plugins = RequiredValue<WebpackConfig["plugins"]>;
  export type Resolve = RequiredValue<WebpackConfig["resolve"]>;
}

type RequiredValue<T> = NonNullable<T>;
