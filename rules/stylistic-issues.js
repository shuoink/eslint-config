module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    camelcase: ['error', {properties: 'never'}],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-names': 'warn',
    'func-style': 'warn',
    'id-blacklist': ['error', 'data'],
    'id-length': ['warn', {min: 1, max: 50}],
    'id-match': 'off', // 'off' because I dont have any use for it
    indent: ['error', 2, {SwitchCase: 1}],
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off', // 'off' because: why would anyone want that?
    'max-depth': ['warn', 4],
    'max-len': ['warn', {code: 100, tabWidth: 2, ignoreTrailingComments: true}],
    'max-lines': ['warn', {max: 200, skipBlankLines: false, skipComments: false}],
    'max-nested-callbacks': ['warn', 2],
    'max-params': ['warn', 3],
    'max-statements-per-line': ['error', {max: 1}],
    'max-statements': ['warn', 10],
    'multiline-ternary': 'off', // 'off' because some should be multiline, others single
    'new-cap': ['error', {newIsCap: true}],
    'new-parens': 'error',
    'newline-after-var': 'off', // dont want to enforce one way or the other
    'newline-before-return': 'off', // dont want to enforce one way or the other
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 4}],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off', // inline comments are not inherently bad
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1}],
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off', // ++ is not bad.
    'no-restricted-syntax': 'off', // other rules take care of these
    'no-spaced-func': 'error',
    'no-tabs': 'warn',
    'no-ternary': 'off', // ternary statements are not bad.
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': 'off', // dangling underscores convey useful information
    'no-unneeded-ternary': ['warn', {defaultAssignment: false}],
    'no-whitespace-before-property': 'error',
    'object-curly-newline': 'off', // too inflexible to meet my needs
    'object-curly-spacing': ['warn', 'never'],
    'object-property-newline': ['error', {allowMultiplePropertiesPerLine: true}],
    'one-var-declaration-per-line': ['error', 'always'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 'off', // this rule would enforce ugly code
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {avoidEscape: true}],
    'require-jsdoc': 'off', // jsdoc is dumb. comments should say why, not what.
    'semi-spacing': ['error', {before: false, after: true}],
    semi: ['error', 'always'],
    'sort-vars': 'warn',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['warn', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off', // wrapping regexes in parens is unnecessary
  },
};
