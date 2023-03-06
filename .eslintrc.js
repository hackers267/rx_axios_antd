module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json", "tsconfig.test.json"],
  },
  ignorePatterns: ["libs/**/*", "rollup.config.ts"],
  rules: {},
};
