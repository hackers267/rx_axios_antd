import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig([
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      file: "libs/index.esm.js",
    },
    plugins: [typescript()],
  },
  {
    input: "src/index.ts",
    output: {
      format: "umd",
      file: "libs/index.aio.js",
      globals: {
        name: "rx_axios_antd",
      },
      name: "rx_axios_antd",
    },
    plugins: [typescript()],
  },
  {
    input: "src/index.ts",
    output: {
      format: "commonjs",
      file: "libs/index.js",
    },
    plugins: [typescript()],
  },
]);
