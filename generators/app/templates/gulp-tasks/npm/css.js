const gulp    = require('gulp');
const path    = require('path');
const concat  = require('gulp-concat');
const cssnano = require('gulp-cssnano');

const build_dir = require('../../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'css');

module.exports = function () {

  return gulp.src([
    'node_modules/normalize.css/normalize.css'
  ])
    .pipe(concat('plugins.css'))
    .pipe(cssnano())
    .pipe(gulp.dest(dest_dir));
};
