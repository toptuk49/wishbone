import * as path from "node:path";

const paths = {
  styles: path.resolve(process.cwd(), "src/styles"),
  scripts: path.resolve(process.cwd(), "src/scripts"),
  assets: path.resolve(process.cwd(), "src/assets"),

  layout: path.resolve(process.cwd(), "src/views/layout"),
  components: path.resolve(process.cwd(), "src/views/components"),
};

export { paths };
