import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  {
    rules: {
      semi: "error",  // Enforce semicolons at the end of every line
      "prefer-const": "error",  // Enforce 'const' instead of 'let' or 'var'
      "no-unused-vars": "warn", // Warn (instead of error) for unused variables
      "eqeqeq": "error",  // Enforce === and !== isntead of == and !=
      "quotes": ["error", "double"] // Enforce double quotes for strings
    }
  }
];