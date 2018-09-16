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

  it('create gulp-tasks', () => {
    assert.file([
      'gulp-tasks/compile/app-bundle.js',
      'gulp-tasks/compile/index.js',
      'gulp-tasks/compile/stylus.js',
      'gulp-tasks/npm/css.js',
      'gulp-tasks/serve-files.js'
    ]);
  });

  it('create build_utils', () => {
    assert.file([
      'build_utils/src_dir.js',
      'build_utils/build_dir.js'
    ]);
  });

  it('create src', () => {
    assert.file([
      'src/app/startup.js',
      'src/app/router.js',
      'src/app/bindings.js',
      'src/components/home/home.js',
      'src/components/home/home.styl',
      'src/components/home/home.pug',
      'src/components/login/login.js',
      'src/components/login/login.styl',
      'src/components/login/login.pug',
      'src/stylus/main.styl',
      'src/stylus/0-defaults/body.styl',
      'src/stylus/0-defaults/html.styl',
      'src/stylus/0-defaults/container.styl'
    ]);
  });
});
