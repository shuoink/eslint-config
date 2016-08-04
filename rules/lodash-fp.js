module.exports = {
  plugins: [
    'lodash-fp',
  ],
  rules: {
    'lodash-fp/consistent-compose': 'warn',
    'lodash-fp/consistent-name': ['error', '_'],
    'lodash-fp/no-argumentless-calls': 'error',
    'lodash-fp/no-chain': 'error',
    'lodash-fp/no-extraneous-args': 'error',
    'lodash-fp/no-extraneous-function-wrapping': 'error',
    'lodash-fp/no-extraneous-iteratee-args': 'error',
    'lodash-fp/no-for-each': ['warn', {noNative: false}],
    'lodash-fp/no-partial-of-curried': 'error',
    'lodash-fp/no-single-composition': 'error',
    'lodash-fp/no-submodule-destructuring': 'error',
    'lodash-fp/no-unused-result': 'error',
    'lodash-fp/prefer-compact': 'error',
    'lodash-fp/prefer-composition-grouping': 'error',
    'lodash-fp/prefer-constant': 'off', // makes code harder to read
    'lodash-fp/prefer-flat-map': 'error',
    'lodash-fp/prefer-get': 'error',
    'lodash-fp/prefer-identity': ['error', {arrowFunctions: false}],
    'lodash-fp/preferred-alias': 'warn',
    'lodash-fp/use-fp': 'error',
  },
};
