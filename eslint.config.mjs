import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  {ignores: ["webpack.dev.js", "webpack.prod.js"]},
  pluginJs.configs.recommended,
];