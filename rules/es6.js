module.exports = {
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 'off', // I prefer leaving the parens off when I can
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {before: false, after: true}],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off', // dont want to restrict imports
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', {ignoreReadBeforeAssign: true}],
    'prefer-reflect': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': ['warn', {ignoreCase: true, memberSyntaxSortOrder: ['none', 'multiple', 'all', 'single']}], // eslint-disable-line max-len
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],
  },
};
