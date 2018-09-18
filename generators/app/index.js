const chalk     = require('chalk');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts);

    this.argument(
      'project_name',
      {
        type:     String,
        required: false,
        desc:     'Your project name'
      }
    );
  }

  prompting () {
    this.project_info = {};

    this.log(`Welcome to the sweet ${chalk.red('generator-kops')} generator!`);

    const prompts = [];

    if (!this.options.project_name) {
      prompts.push({
        type:    'input',
        name:    'name',
        message: 'What\'s the project name?',
        default: this.appname
      });
    }

    return this.prompt(prompts)
      .then(answers => {
        this.project_info = answers;
      })
      .then(() => {
        if (this.options.project_name) {
          this.project_info.name = this.options.project_name;
        }
      });
  }

  writing () {
    this._copy_root_files();
    this._copy_gulptasks_files();
    this._copy_buildutils_files();
    this._copy_src_files();
  }

  _copy_root_files () {
    const files = [
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
    ];

    files.map(filename => this._copy_file(filename));
  }

  _copy_gulptasks_files () {
    const files = [
      'gulp-tasks/compile/app-bundle.js',
      'gulp-tasks/compile/index.js',
      'gulp-tasks/compile/stylus.js',
      'gulp-tasks/npm/css.js',
      'gulp-tasks/serve-files.js'
    ];

    files.map(filename => this._copy_file(filename));
  }

  _copy_buildutils_files () {
    const files = [
      'build_utils/build_dir.js',
      'build_utils/src_dir.js'
    ];

    files.map(filename => this._copy_file(filename));
  }

  _copy_src_files () {
    const files = [
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
    ];

    files.map(filename => this._copy_file(filename));
  }

  _copy_file (name, params = null) {
    if (!name) {
      return;
    }

    const project_name = this.project_info.name;

    if (this.fs.exists(this.templatePath(name))) {
      this.fs.copy(
        this.templatePath(name),
        this.destinationPath(`${project_name}/${name}`),
        params
      );
    }
  }
};
