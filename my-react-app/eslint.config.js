import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import vitest from '@vitest/eslint-plugin'
import prettier from 'eslint-plugin-prettier' // Import the prettier plugin
import prettierConfig from 'eslint-config-prettier' // Import the prettier config

export default [
  { ignores: ['dist'] },
  // JavaScript configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  // Vite configuration
  {
    files: ['**/*.{test,spec}.{js,jsx}'],
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals, // Inject Vitest globals
      },
    },
    plugins: {
      vitest, // Include the vitest plugin
    },
    rules: {
      ...vitest.configs.recommended.rules, // Apply recommended Vitest rules
      // 'vitest/no-focused-tests': 'error',
      // 'vitest/no-disabled-tests': 'warn',
    },
  },
  // Prettier configuration
  prettierConfig, // This *must* be last to disable conflicting ESLint rules
  {
    files: ['**/*.{js,jsx,ts,tsx,cjs,mjs,json,css,scss,md,yml,html}'], // Apply to all relevant file types
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error', // Report Prettier mismatches as ESLint errors
      // You can add other formatting rules here if Prettier doesn't cover them,
      // but generally, Prettier should handle most stylistic concerns.
    },
  },
]
