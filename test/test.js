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

module.exports = lorem;
