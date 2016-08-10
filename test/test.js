const lorem = 'yo';

// rule: indent
if (lorem) {
  const ipsum = 'dolor';
  switch (ipsum) {
    case 'sit':
      process.stdout.write('elit');
      break;
    default:
      process.stdout.write('nulla');
      break;
  }
}

const React = {};

export class Amet extends React.Component {

  static displayName = 'Amet';

  _getClassName() {
    return 'consecutor';
  }

  render() {
    return (
      <div className={this._getClassName}>
        Lorem ipsum dolor...
      </div>
    );
  }
}

export const Adipiscing = () => <div />;

Adipiscing.displayName = 'Adipiscing';
