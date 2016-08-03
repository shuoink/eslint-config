const OFF = 0;
const ERROR = 2;

module.exports = {
  'import/default': ERROR,
  'import/export': ERROR,
  'import/extensions': OFF, // too strict. I prefer never, but with exceptions (.json)
  'import/imports-first': ERROR,
  'import/named': ERROR,
  'import/namespace': ERROR,
  'import/newline-after-import': ERROR,
  'import/no-amd': ERROR,
  'import/no-commonjs': OFF, // sometimes we need commonjs :(
  'import/no-deprecated': OFF, // jsdoc is bad. code says what. comments say why!
  'import/no-duplicates': ERROR,
  'import/no-extraneous-dependencies': [ERROR, {devDependencies: false, optionalDependencies: false}], // eslint-disable-line max-len
  'import/no-mutable-exports': ERROR,
  'import/no-named-as-default-member': ERROR,
  'import/no-named-as-default': ERROR,
  'import/no-namespace': OFF, // no reason to disallow namespace imports
  'import/no-nodejs-modules': OFF, // core modules are not a bad thing
  'import/no-restricted-paths': OFF, // no paths to restrict
  'import/no-unresolved': [ERROR, {commonjs: true}],
  'import/order': OFF, // conflicts with 'sort-imports' rule
  'import/prefer-default-export': ERROR,
};
