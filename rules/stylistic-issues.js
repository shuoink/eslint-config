module.exports = {
  rules: {
    'array-bracket-spacing': ['warn', 'never'],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', {allowSingleLine: true}],
    camelcase: ['warn', {properties: 'never'}],
    'capitalized-comments': 'off', // terrible idea to enforce case on comments!
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': ['warn', {after: true, before: false}],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'consistent-this': ['warn', 'self'],
    'eol-last': 'warn',
    'func-call-spacing': 'off', // deprecated
    'func-name-matching': 'warn',
    'func-names': 'off', // forces writing the name twice. annoying!
    'func-style': 'warn',
    'id-blacklist': ['warn', 'data'],
    'id-length': ['warn', {max: 50, min: 1}],
    'id-match': 'off', // 'off' because I dont have any use for it
    indent: ['warn', 2, {SwitchCase: 1}],
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': ['warn', {afterColon: true, beforeColon: false}],
    'keyword-spacing': 'warn',
    'line-comment-position': 'off', // comments should go where they fit.
    'linebreak-style': ['warn', 'unix'],
    'lines-around-comment': 'off', // 'off' because: why would anyone want that?
    'lines-around-directive': ['warn', {after: 'always', before: 'never'}],
    'max-depth': ['warn', 4],
    'max-len': ['warn', {code: 100, ignoreTrailingComments: true, tabWidth: 2}],
    'max-lines': ['warn', {max: 200, skipBlankLines: false, skipComments: false}],
    'max-nested-callbacks': ['warn', 2],
    'max-params': ['warn', 3],
    'max-statements': ['warn', 10],
    'max-statements-per-line': ['warn', {max: 1}],
    'multiline-ternary': 'off', // 'off' because some should be multiline, others single
    'new-cap': ['warn', {newIsCap: true}],
    'new-parens': 'warn',
    'newline-after-var': 'off', // dont want to enforce one way or the other
    'newline-before-return': 'off', // dont want to enforce one way or the other
    'newline-per-chained-call': ['warn', {ignoreChainWithDepth: 4}],
    'no-array-constructor': 'warn',
    'no-bitwise': 'error',
    'no-continue': 'warn',
    'no-inline-comments': 'off', // inline comments are not inherently bad
    'no-lonely-if': 'warn',
    'no-mixed-operators': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-assign': 'off', // i like multi-assign syntax :p
    'no-multiple-empty-lines': ['warn', {max: 2, maxEOF: 1}],
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-plusplus': 'off', // ++ is not bad.
    'no-restricted-syntax': 'off', // other rules take care of these
    'no-spaced-func': 'warn',
    'no-tabs': 'warn',
    'no-ternary': 'off', // ternary statements are not bad.
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': 'off', // dangling underscores convey useful information
    'no-unneeded-ternary': ['warn', {defaultAssignment: false}],
    'no-whitespace-before-property': 'warn',
    'object-curly-newline': 'off', // too inflexible to meet my needs
    'object-curly-spacing': ['warn', 'never'],
    'object-property-newline': ['warn', {allowMultiplePropertiesPerLine: true}],
    'one-var': ['warn', 'never'],
    'one-var-declaration-per-line': ['warn', 'always'],
    'operator-assignment': ['warn', 'always'],
    'operator-linebreak': 'off', // this rule would enforce ugly code
    'padded-blocks': ['warn', 'never'],
    'quote-props': ['warn', 'as-needed'],
    quotes: ['warn', 'single', {avoidEscape: true}],
    'require-jsdoc': 'off', // jsdoc is dumb. comments should say why, not what.
    semi: ['warn', 'always'],
    'semi-spacing': ['warn', {after: true, before: false}],
    'sort-keys': ['warn', 'asc', {caseSensitive: false, natural: true}],
    'sort-vars': 'warn',
    'space-before-blocks': 'warn',
    'space-before-function-paren': ['warn', 'never'],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': ['warn', 'always'],
    'template-tag-spacing': ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'wrap-regex': 'off', // wrapping regexes in parens is unnecessary
  },
};
