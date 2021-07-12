module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  ignorePatterns: ['*.spec.ts', '*.js'],
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'tsdoc/syntax': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        overrides: {
          constructors: 'off'
        }
      }
    ],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    // "@typescript-eslint/no-use-before-declare": "error",
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'constructor-super': 'error',
    curly: 'error',
    'dot-notation': 'off',
    'eol-last': 'error',
    'guard-for-in': 'error',
    'no-bitwise': 'warn',
    'no-caller': 'error',
    'no-console': [
      'error',
      {
        allow: ['debug', 'info', 'time', 'timeEnd', 'trace']
      }
    ],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-empty-functions': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    radix: 'error'
  }
};
