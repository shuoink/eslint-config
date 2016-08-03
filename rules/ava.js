const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  'ava/assertion-arguments': ERROR,
  'ava/assertion-message': [OFF, 'always'],
  'ava/max-asserts': [ERROR, 10],
  'ava/no-cb-test': OFF,
  'ava/no-identical-title': ERROR,
  'ava/no-ignored-test-files': ERROR,
  'ava/no-invalid-end': ERROR,
  'ava/no-only-test': ERROR,
  'ava/no-skip-assert': ERROR,
  'ava/no-skip-test': ERROR,
  'ava/no-statement-after-end': ERROR,
  'ava/no-todo-test': OFF, // if this is enabled people will delete the todo rather than implement the test. at least this way we know theres a hole in the tests.
  'ava/no-unknown-modifiers': ERROR,
  'ava/prefer-power-assert': OFF, // off until eslint-plugin-ava#118 lands and is released
  'ava/test-ended': ERROR,
  'ava/test-title': [WARNING, 'always'],
  'ava/use-t-well': ERROR,
  'ava/use-t': ERROR,
  'ava/use-test': ERROR,
  'ava/use-true-false': ERROR,
};
