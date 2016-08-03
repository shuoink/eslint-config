const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  'lodash-fp/consistent-compose': WARNING,
  'lodash-fp/consistent-name': [ERROR, '_'],
  'lodash-fp/no-argumentless-calls': ERROR,
  'lodash-fp/no-chain': ERROR,
  'lodash-fp/no-extraneous-args': ERROR,
  'lodash-fp/no-extraneous-function-wrapping': ERROR,
  'lodash-fp/no-extraneous-iteratee-args': ERROR,
  'lodash-fp/no-for-each': [WARNING, {noNative: false}],
  'lodash-fp/no-partial-of-curried': ERROR,
  'lodash-fp/no-single-composition': ERROR,
  'lodash-fp/no-submodule-destructuring': ERROR,
  'lodash-fp/no-unused-result': ERROR,
  'lodash-fp/prefer-compact': ERROR,
  'lodash-fp/prefer-composition-grouping': ERROR,
  'lodash-fp/prefer-constant': OFF, // makes code harder to read
  'lodash-fp/prefer-flat-map': ERROR,
  'lodash-fp/prefer-get': ERROR,
  'lodash-fp/prefer-identity': [ERROR, {arrowFunctions: false}],
  'lodash-fp/preferred-alias': WARNING,
  'lodash-fp/use-fp': ERROR,
};
