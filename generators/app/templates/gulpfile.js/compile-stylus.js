const { src, dest }   = require('gulp');
const path            = require('path');
const stylus          = require('gulp-stylus');

const build_dir = require('../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'css');

function compile_stylus () {
  return src('src/stylus/main.styl')
    .pipe(stylus({
      'include css': true,
      compress:      true,
      linenos:       false
    }))
    .pipe(dest(dest_dir));
}

module.exports = compile_stylus;
