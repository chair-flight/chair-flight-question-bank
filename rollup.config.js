import copy from "rollup-plugin-copy";
import typescript from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.ts",
  plugins: [
    typescript(),
    terser(),
    copy({
      targets: [
        {
          src: "content/images/*",
          dest: "lib/images",
        },
      ],
    }),
  ],
  output: [
    {
      file: "./lib/index.js",
      format: "cjs",
      exports: "auto",
    },
  ],
};
