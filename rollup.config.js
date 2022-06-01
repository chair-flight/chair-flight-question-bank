import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import copy from "rollup-plugin-copy";

const name = require("./package.json").main.replace(/\.js$/, "");

const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `${name}.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: "es",
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [
      dts(),
      copy({
        targets: [{ src: "pages/images/*", dest: "lib/images" }],
      }),
    ],
    output: {
      file: `${name}.d.ts`,
      format: "es",
    },
  }),
];
