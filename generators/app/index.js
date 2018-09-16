const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.copy_root_files();
  }

  copy_root_files () {
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

    files.map(filename => this.copy_file(filename));
  }

  copy_file (name, params = null) {
    if (!name) {
      return;
    }

    this.fs.copy(
      this.templatePath(name),
      this.destinationPath(name),
      params
    );
  }
};
