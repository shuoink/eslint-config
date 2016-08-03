const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  'react/display-name': [WARNING, {ignoreTranspilerName: true}],
  'react/forbid-prop-types': [ERROR, {forbid: ['any', 'array', 'object']}],
  'react/jsx-boolean-value': [ERROR, 'never'],
  'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],
  'react/jsx-curly-spacing': [ERROR, 'never', {allowMultiline: true}],
  'react/jsx-equals-spacing': [ERROR, 'never'],
  'react/jsx-filename-extension': [WARNING, {extensions: ['.js']}],
  'react/jsx-first-prop-new-line': [ERROR, 'multiline'],
  'react/jsx-handler-names': [ERROR, {eventHandlerPrefix: '_handle', eventHandlerPropPrefix: 'on'}],
  'react/jsx-indent-props': [ERROR, 2],
  'react/jsx-indent': [ERROR, 2],
  'react/jsx-key': ERROR,
  'react/jsx-max-props-per-line': OFF, // max-len is enough for me
  'react/jsx-no-bind': [ERROR, {ignoreRefs: true}],
  'react/jsx-no-comment-textnodes': ERROR,
  'react/jsx-no-duplicate-props': [ERROR, {ignoreCase: false}],
  'react/jsx-no-literals': OFF, // I dont like this rule.
  'react/jsx-no-target-blank': ERROR,
  'react/jsx-no-undef': ERROR,
  'react/jsx-pascal-case': ERROR,
  'react/jsx-sort-prop-types': OFF, // deprecated in favor of react/jsx-sort-props
  'react/jsx-sort-props': [WARNING, {ignoreCase: true}],
  'react/jsx-space-before-closing': [2, 'always'],
  'react/jsx-uses-react': ERROR,
  'react/jsx-uses-vars': ERROR,
  'react/jsx-wrap-multilines': ERROR,
  'react/no-comment-textnodes': OFF, // deprecated
  'react/no-danger': WARNING,
  'react/no-deprecated': ERROR,
  'react/no-did-mount-set-state': OFF, // need setState in componentDidMount for client-side-only logic
  'react/no-did-update-set-state': ERROR,
  'react/no-direct-mutation-state': ERROR,
  'react/no-find-dom-node': ERROR,
  'react/no-is-mounted': ERROR,
  'react/no-multi-comp': [WARNING, {ignoreStateless: true}],
  'react/no-render-return-value': ERROR,
  'react/no-set-state': OFF, // setState is not bad.
  'react/no-string-refs': ERROR,
  'react/no-unknown-property': ERROR,
  'react/prefer-es6-class': [ERROR, 'always'],
  'react/prefer-stateless-function': ERROR,
  'react/prop-types': ERROR,
  'react/react-in-jsx-scope': ERROR,
  'react/require-extension': OFF, // off because it's deprecated
  'react/require-optimization': OFF, // optimization should be as-needed
  'react/require-render-return': ERROR,
  'react/self-closing-comp': WARNING,
  'react/sort-comp': WARNING,
  'react/sort-prop-types': [WARNING, {ignoreCase: true}],
  'react/wrap-multilines': OFF, // deprecated
};
