const WARNING = 1;
const ERROR = 2;

module.exports = {
  'jsx-a11y/aria-props': ERROR,
  'jsx-a11y/aria-proptypes': ERROR,
  'jsx-a11y/aria-role': ERROR,
  'jsx-a11y/aria-unsupported-elements': ERROR,
  'jsx-a11y/heading-has-content': ERROR,
  'jsx-a11y/href-no-hash': [ERROR, ['a']],
  'jsx-a11y/html-has-lang': ERROR,
  'jsx-a11y/img-has-alt': ERROR,
  'jsx-a11y/img-redundant-alt': ERROR,
  'jsx-a11y/label-has-for': [ERROR, ['label']],
  'jsx-a11y/lang': ERROR,
  'jsx-a11y/mouse-events-have-key-events': WARNING,
  'jsx-a11y/no-access-key': ERROR,
  'jsx-a11y/no-marquee': ERROR,
  'jsx-a11y/no-onchange': WARNING,
  'jsx-a11y/onclick-has-focus': WARNING,
  'jsx-a11y/onclick-has-role': WARNING,
  'jsx-a11y/role-has-required-aria-props': ERROR,
  'jsx-a11y/role-supports-aria-props': ERROR,
  'jsx-a11y/scope': ERROR,
  'jsx-a11y/tabindex-no-positive': ERROR,
};
