#!/usr/bin/env node

const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const pify = require('pify');

const readFile = pify(fs.readFile);

const getEslintScript = () => {
  const pkgJsonPath = require.resolve('eslint/package.json');
  const pkgPath = path.dirname(pkgJsonPath);
  return readFile(pkgJsonPath, 'utf8')
    .then(pkgJson => {
      const pkg = JSON.parse(pkgJson);
      const binRelPath = pkg.bin.eslint;
      const eslintBin = path.resolve(pkgPath, binRelPath);
      if (!eslintBin) {
        throw Error('Unable to locate eslint binary');
      }
      return eslintBin;
    });
};

const getEslintArgs = () => {
  const configPath = require.resolve(`${__dirname}/..`);
  return ['-c', configPath].concat(process.argv.slice(2));
};

const spawnEslintProcess = eslintBin => new Promise((resolve, reject) => {
  const args = getEslintArgs();
  const eslintProcess = cp.spawn(eslintBin, args, {stdio: 'inherit'});
  eslintProcess.on('close', code => {
    if (code) {
      const error = Error('non-zero exit-code');
      error.exitCode = code;
      reject(error);
      return;
    }
    resolve();
  });
});

process.stdout.write('Linting using @spudly/eslint-config\n');
getEslintScript()
  .then(spawnEslintProcess)
  .catch(error => {
    process.exitCode = error.exitCode || 1;
    if (!error.exitCode) {
      // dont swallow/hide exception
      process.nextTick(() => {
        throw error;
      });
    }
  });
