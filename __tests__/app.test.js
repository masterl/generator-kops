const path    = require('path');
const assert  = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-kops:app', () => {
  const project_name = 'test';

  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments([project_name]);
  });

  it('creates root files', () => {
    assert.file([
      `${project_name}/LICENSE`,
      `${project_name}/package.json`,
      `${project_name}/package-lock.json`,
      `${project_name}/gulpfile.js`,
      `${project_name}/.eslintrc`,
      `${project_name}/.eslintignore`,
      `${project_name}/.gitignore`,
      `${project_name}/README.md`,
      `${project_name}/reload-browser`,
      `${project_name}/autoreload.sh`
    ]);
  });

  it('create gulp-tasks', () => {
    assert.file([
      `${project_name}/gulp-tasks/compile/app-bundle.js`,
      `${project_name}/gulp-tasks/compile/index.js`,
      `${project_name}/gulp-tasks/compile/stylus.js`,
      `${project_name}/gulp-tasks/npm/css.js`,
      `${project_name}/gulp-tasks/serve-files.js`
    ]);
  });

  it('create build_utils', () => {
    assert.file([
      `${project_name}/build_utils/src_dir.js`,
      `${project_name}/build_utils/build_dir.js`
    ]);
  });

  it('create src', () => {
    assert.file([
      `${project_name}/src/app/startup.js`,
      `${project_name}/src/app/router.js`,
      `${project_name}/src/app/bindings.js`,
      `${project_name}/src/components/home/home.js`,
      `${project_name}/src/components/home/home.styl`,
      `${project_name}/src/components/home/home.pug`,
      `${project_name}/src/components/login/login.js`,
      `${project_name}/src/components/login/login.styl`,
      `${project_name}/src/components/login/login.pug`,
      `${project_name}/src/stylus/main.styl`,
      `${project_name}/src/stylus/0-defaults/body.styl`,
      `${project_name}/src/stylus/0-defaults/html.styl`,
      `${project_name}/src/stylus/0-defaults/container.styl`
    ]);
  });
});
