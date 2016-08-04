module.exports = {
  plugins: [
    'ava',
  ],
  rules: {
    'ava/assertion-arguments': 'error',
    'ava/assertion-message': ['off', 'always'],
    'ava/max-asserts': ['error', 10],
    'ava/no-cb-test': 'off',
    'ava/no-identical-title': 'error',
    'ava/no-ignored-test-files': 'error',
    'ava/no-invalid-end': 'error',
    'ava/no-only-test': 'error',
    'ava/no-skip-assert': 'error',
    'ava/no-skip-test': 'error',
    'ava/no-statement-after-end': 'error',
    'ava/no-todo-test': 'off', // if this is enabled people will delete the todo rather than implement the test. at least this way we know theres a hole in the tests.
    'ava/no-unknown-modifiers': 'error',
    'ava/prefer-power-assert': 'off', // 'off' until eslint-plugin-ava#118 lands and is released
    'ava/test-ended': 'error',
    'ava/test-title': ['warn', 'always'],
    'ava/use-t-well': 'error',
    'ava/use-t': 'error',
    'ava/use-test': 'error',
    'ava/use-true-false': 'error',
  },
};
