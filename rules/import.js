module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off', // too strict. I prefer never, but with exceptions (.json)
    'import/imports-first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'off', // sometimes we need commonjs :(
    'import/no-deprecated': 'off', // jsdoc is bad. code says what. comments say why!
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': ['error', {devDependencies: false, optionalDependencies: false}], // eslint-disable-line max-len
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-namespace': 'off', // no reason to disallow namespace imports
    'import/no-nodejs-modules': 'off', // core modules are not a bad thing
    'import/no-restricted-paths': 'off', // no paths to restrict
    'import/no-unresolved': ['error', {commonjs: true}],
    'import/order': 'off', // conflicts with 'sort-imports' rule
    'import/prefer-default-export': 'error',
  },
};
