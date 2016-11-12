module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    './rules/best-practices',
    './rules/es6',
    './rules/import',
    './rules/jsx-a11y',
    './rules/lodash-fp',
    './rules/node',
    './rules/possible-errors',
    './rules/react',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables.js',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {},
};
