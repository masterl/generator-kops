const pug  = require('gulp-pug');
const gulp = require('gulp');

const build_dir = require('../../build_utils/build_dir');

module.exports = () => {
  return gulp.src('src/index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest(build_dir));
};
