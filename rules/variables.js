module.exports = {
  rules: {
    'init-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', '$', '_'],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'off', // clashes with init-declarations
    'no-undefined': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', 'nofunc'],
  },
};
