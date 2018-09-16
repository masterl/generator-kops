const path    = require('path');
const assert  = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-kops:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'));
  });

  it('creates root files', () => {
    assert.file([
      'LICENSE',
      'package.json',
      'package-lock.json',
      'gulpfile.js',
      '.eslintrc',
      '.eslintignore',
      '.gitignore',
      'README.md',
      'reload-browser',
      'autoreload.sh'
    ]);
  });
});
