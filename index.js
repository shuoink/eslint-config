const coreRules = require('./rules/core');
const avaRules = require('./rules/ava');
const importRules = require('./rules/import');
const reactRules = require('./rules/react');
const jsxAccessibilityRules = require('./rules/jsx-a11y');
const lodashFpRules = require('./rules/lodash-fp');

const config = {
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
  plugins: [
    'lodash-fp',
    'ava',
    'import',
    'react',
    'jsx-a11y',
  ],
  rules: Object.assign({},
    coreRules,
    avaRules,
    importRules,
    jsxAccessibilityRules,
    lodashFpRules,
    reactRules
  ),
};

module.exports = config;
