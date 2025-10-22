import js from '@eslint/js';
import airbnb from 'eslint-config-airbnb';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { prettier: prettierPlugin, import: importPlugin },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      ...airbnb.rules,
      'prettier/prettier': 'error',
      'no-console': 1,
      'import/extension': 'off',
    },
  },
  // { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
]);
