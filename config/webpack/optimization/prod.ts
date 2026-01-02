// Using lightningcss to optimize, minify and support styles in older browsers

import * as CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import * as lightningcss from "lightningcss";
import * as browserslist from "browserslist";
import { WebpackTypes } from "../types";

export const optimizationProd = {
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin({
      minify: CssMinimizerPlugin.lightningCssMinify,
      minimizerOptions: {
        // @ts-ignore
        targets: lightningcss.browserslistToTargets(browserslist(">= 0.25%")),
      },
    }),
  ],
} satisfies Partial<WebpackTypes.Optimization>;
