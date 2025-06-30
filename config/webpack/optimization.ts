import * as CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import * as lightningcss from "lightningcss";
import * as browserslist from "browserslist";

const optimization = {
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
};

export { optimization };
