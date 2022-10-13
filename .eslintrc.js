module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    jasmine: true,
    jest: true,
    node: true,
    es6: true
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 100,
        tabWidth: 2,
        arrowParens: 'avoid'
      }
    ],
    curly: 2,
    quotes: ['error', 'single'],
    'no-console': 2,
    'no-shadow': 0,
    'no-labels': 2,
    'no-irregular-whitespace': 2,
    'no-trailing-spaces': 2,
    'import/prefer-default-export': 0,
    'import/no-useless-path-segments': 1,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-duplicates': 2,
    'import/order': 2,
    'import/newline-after-import': 1,
    'import/no-named-as-default-member': 0,
    'import/namespace': 0,
    'import/named': 0,

    'no-case-declarations': 0,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-angle-bracket-type-assertion': 0,
    '@typescript-eslint/ban-ts-ignore': 0
  },
  parser: '@typescript-eslint/parser',
  globals: {
    it: true,
    expect: true,
    Headers: true,
    fetch: true
  }
}
