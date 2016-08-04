module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    './rules/ava',
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
  rules: {},
};
