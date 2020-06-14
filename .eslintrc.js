module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  globals: {
    describe: false,
    afterEach: false,
    it: false,
    expect: false,
    jest: false,
    window: false,
    navigator: false,
    fetch: false,
    document: false,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-explicit-any': 'off',
    'import/extensions': 'off',
    'max-len': [2, { code: 140 }],
  },
};
