import copy from "rollup-plugin-copy";
import merge from "deepmerge";
import { createBasicConfig } from "@open-wc/building-rollup";

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: "./lib-tsc-out/index.js",
  output: {
    dir: "lib",
  },
  plugins: [
    copy({
      targets: [{ src: "pages/images/*", dest: "lib/images" }],
    }),
  ],
});
