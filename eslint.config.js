// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import n from 'eslint-plugin-n';
import vitest from "eslint-plugin-vitest";


export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  n.configs["flat/recommended"],
  {
    files: ["tests/**"], // or any other pattern
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules,
    }
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ["node_modules/", ".git/", "dist/"],
  }
);
