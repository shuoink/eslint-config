module.exports = {
  rules: {
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off', // off because process.env helps optimize builds
    'no-process-exit': 'error',
    'no-restricted-modules': 'off', // dont want to restrict modules
    'no-sync': 'warn',
  },
};
