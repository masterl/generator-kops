const path   = require('path');
const gulp   = require('gulp');
const stylus = require('gulp-stylus');

const build_dir = require('../../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'css');

module.exports = () => {
  return gulp.src('src/stylus/main.styl')
    .pipe(stylus({
      'include css': true,
      compress:      true,
      linenos:       false
    }))
    .pipe(gulp.dest(dest_dir));
};
