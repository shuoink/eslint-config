const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:ava/recommended',
    'plugin:lodash-fp/recommended',
  ],
  plugins: [
    'lodash-fp',
    'ava',
  ],
  rules: {
    indent: [WARNING, 2, {SwitchCase: 1}],
    'max-len': [WARNING, 100, 4],
    'no-unexpected-multiline': [WARNING],
    'object-curly-spacing': [WARNING, 'never'],
    'no-use-before-define': [ERROR, 'nofunc'],
    'arrow-body-style': [OFF, 'always'],
    semi: [WARNING, 'always'],
    'react/jsx-no-duplicate-props': [ERROR],
    'react/no-multi-comp': [WARNING, {ignoreStateless: true}],
    'react/no-string-refs': [ERROR],
    'no-underscore-dangle': [OFF],
    'react/sort-comp': [WARNING],
    'lodash-fp/consistent-compose': WARNING,
    'lodash-fp/no-for-each': [WARNING, {noNative: false}],
    'lodash-fp/preferred-alias': WARNING,
    'ava/max-asserts': OFF,
    'lodash-fp/prefer-constant': OFF,
    'ava/no-todo-test': OFF,
    'ava/test-title': [WARNING, 'always'],
    'ava/prefer-power-assert': OFF, // TODO: enable when eslint-plugin-ava#118 lands
  },
};
