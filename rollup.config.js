import copy from "rollup-plugin-copy";
import typescript from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.ts",
  plugins: [
    typescript(),
    terser(),
    copy({
      targets: [{ src: "pages/images/*", dest: "lib/images" }],
    }),
  ],
  output: [
    {
      file: "./lib/index.esm.js",
      format: "esm",
      exports: "auto",
    },
    {
      file: "./lib/index.js",
      format: "cjs",
      exports: "auto",
    },
  ],
};
