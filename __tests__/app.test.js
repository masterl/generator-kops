const path    = require('path');
const assert  = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-kops:app', () => {
  let project_info;

  beforeAll(() => {
    project_info = ProjectBuilder.random_project_info();
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
      assert.noFile([
        // will be generated on project first install
        `${project_name}/package-lock.json`,
        // client should set his own license
        `${project_name}/LICENSE`,
        // These were removed in favor of using live-server
        `${project_name}/reload-browser`,
        `${project_name}/autoreload.sh`
      ]);

      assert.file([
        `${project_name}/package.json`,
        `${project_name}/.eslintrc`,
        `${project_name}/.eslintignore`,
        `${project_name}/.gitignore`,
        `${project_name}/README.md`
      ]);
    });

    // updated to gulp 4, so gulpfile.js is now a folder
    it('shouldn\'t create gulp-tasks', () => {
      assert.noFile([
        `${project_name}/gulp-tasks/compile/app-bundle.js`,
        `${project_name}/gulp-tasks/compile/index.js`,
        `${project_name}/gulp-tasks/compile/stylus.js`,
        `${project_name}/gulp-tasks/npm/css.js`,
        `${project_name}/gulp-tasks/serve-files.js`
      ]);
    });

    it('should create gulpfile.js folder', () => {
      assert.file([
        `${project_name}/gulpfile.js/compile-app-bundle.js`,
        `${project_name}/gulpfile.js/compile-index.js`,
        `${project_name}/gulpfile.js/compile-stylus.js`,
        `${project_name}/gulpfile.js/index.js`,
        `${project_name}/gulpfile.js/npm-css.js`,
        `${project_name}/gulpfile.js/serve-files.js`
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
        `${project_name}/src/.eslintrc`,
        `${project_name}/src/index.pug`,
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
        assert.jsonFileContent(package_json_path, { name: project_name });
      });

      it('should contain project version', () => {
        assert.jsonFileContent(package_json_path, { version: project_info.version });
      });

      it('should contain project description', () => {
        assert.jsonFileContent(package_json_path, { description: project_info.description });
      });

      it('should contain project keywords', () => {
        assert.jsonFileContent(package_json_path, { keywords: project_info.keywords_as_array });
      });

      it('should contain project author', () => {
        assert.jsonFileContent(package_json_path, { author: project_info.author });
      });

      it('should contain project license', () => {
        assert.jsonFileContent(package_json_path, { license: project_info.license });
      });

      it('shouldn\'t contain homepage field', () => {
        assert.noFileContent(package_json_path, /"homepage":/);
      });

      it('shouldn\'t contain bugs field', () => {
        assert.noFileContent(package_json_path, /"bugs":/);
      });

      it('shouldn\'t contain repository field', () => {
        assert.noFileContent(package_json_path, /"repository":/);
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
      assert.noFile([
        // will be generated on project first install
        `${project_name}/package-lock.json`,
        // client should set his own license
        `${project_name}/LICENSE`,
        // These were removed in favor of using live-server
        `${project_name}/reload-browser`,
        `${project_name}/autoreload.sh`
      ]);

      assert.file([
        `${project_name}/package.json`,
        `${project_name}/.eslintrc`,
        `${project_name}/.eslintignore`,
        `${project_name}/.gitignore`,
        `${project_name}/README.md`
      ]);
    });

    // updated to gulp 4, so gulpfile.js is now a folder
    it('shouldn\'t create gulp-tasks', () => {
      assert.noFile([
        `${project_name}/gulp-tasks/compile/app-bundle.js`,
        `${project_name}/gulp-tasks/compile/index.js`,
        `${project_name}/gulp-tasks/compile/stylus.js`,
        `${project_name}/gulp-tasks/npm/css.js`,
        `${project_name}/gulp-tasks/serve-files.js`
      ]);
    });

    it('should create gulpfile.js folder', () => {
      assert.file([
        `${project_name}/gulpfile.js/compile-app-bundle.js`,
        `${project_name}/gulpfile.js/compile-index.js`,
        `${project_name}/gulpfile.js/compile-stylus.js`,
        `${project_name}/gulpfile.js/index.js`,
        `${project_name}/gulpfile.js/npm-css.js`,
        `${project_name}/gulpfile.js/serve-files.js`
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
        `${project_name}/src/.eslintrc`,
        `${project_name}/src/index.pug`,
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
        assert.jsonFileContent(package_json_path, { name: project_name });
      });

      it('should contain project version', () => {
        assert.jsonFileContent(package_json_path, { version: project_info.version });
      });

      it('should contain project description', () => {
        assert.jsonFileContent(package_json_path, { description: project_info.description });
      });

      it('should contain project keywords', () => {
        assert.jsonFileContent(package_json_path, { keywords: project_info.keywords_as_array });
      });

      it('should contain project author', () => {
        assert.jsonFileContent(package_json_path, { author: project_info.author });
      });

      it('should contain project license', () => {
        assert.jsonFileContent(package_json_path, { license: project_info.license });
      });

      it('shouldn\'t contain homepage field', () => {
        assert.noFileContent(package_json_path, /"homepage":/);
      });

      it('shouldn\'t contain bugs field', () => {
        assert.noFileContent(package_json_path, /"bugs":/);
      });

      it('shouldn\'t contain repository field', () => {
        assert.noFileContent(package_json_path, /"repository":/);
      });
    });
  });
});
