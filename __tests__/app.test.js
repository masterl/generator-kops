const path    = require('path');
const assert  = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-kops:app', () => {
  let project_info;

  beforeAll(() => {
    project_info = {
      version:     random.App.version(),
      description: random.Lorem.sentence()
    };
  });

  describe('when project name is specified by command argument', () => {
    const project_name = 'via_argument';

    beforeAll(() => {
      return helpers
        .run(path.join(__dirname, '../generators/app'))
        .withArguments([project_name])
        .withPrompts(project_info);
    });

    it('creates root files', () => {
      // will be generated on project first install
      assert.noFile([
        `${project_name}/package-lock.json`
      ]);

      assert.file([
        `${project_name}/LICENSE`,
        `${project_name}/package.json`,
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

    describe('the package.json file', () => {
      const package_json_path = `${project_name}/package.json`;

      it('should contain project name', () => {
        assert.fileContent(package_json_path, new RegExp(`"name":\\s+"${project_name}"`));
      });

      it('should contain project version', () => {
        assert.fileContent(package_json_path, new RegExp(`"version":\\s+"${project_info.version}"`));
      });

      it('should contain project description', () => {
        assert.fileContent(package_json_path, new RegExp(`"description":\\s+"${project_info.description}"`));
      });
    });
  });

  describe('when project name is specified by wizard prompt', () => {
    const project_name = 'via_prompt';

    beforeAll(() => {
      project_info.name = project_name;
      return helpers
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts(project_info);
    });

    it('creates root files', () => {
      // will be generated on project first install
      assert.noFile([
        `${project_name}/package-lock.json`
      ]);

      assert.file([
        `${project_name}/LICENSE`,
        `${project_name}/package.json`,
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

    describe('the package.json file', () => {
      const package_json_path = `${project_name}/package.json`;

      it('should contain project name', () => {
        assert.fileContent(package_json_path, new RegExp(`"name":\\s+"${project_name}"`));
      });

      it('should contain project version', () => {
        assert.fileContent(package_json_path, new RegExp(`"version":\\s+"${project_info.version}"`));
      });

      it('should contain project description', () => {
        assert.fileContent(package_json_path, new RegExp(`"description":\\s+"${project_info.description}"`));
      });
    });
  });
});
