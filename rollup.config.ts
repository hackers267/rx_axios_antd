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
    external: ["antd-observable", "@silence_zhpf/rx_axios"],
  },
  {
    input: "src/index.ts",
    output: {
      format: "umd",
      file: "libs/index.aio.js",
      globals: {
        "antd-observable": "antd_observable",
        "@silence_zhpf/rx_axios": "rx_axios",
      },
      name: "rx_axios_antd",
    },
    external: ["antd-observable", "@silence_zhpf/rx_axios"],
    plugins: [typescript()],
  },
  {
    input: "src/index.ts",
    output: {
      format: "commonjs",
      file: "libs/index.js",
    },
    external: ["antd-observable", "@silence_zhpf/rx_axios"],
    plugins: [typescript()],
  },
]);
