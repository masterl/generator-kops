const { src, dest } = require('gulp');
const pug           = require('gulp-pug');

const build_dir = require('../build_utils/build_dir');

function compile_index () {
  return src('src/index.pug')
    .pipe(pug({}))
    .pipe(dest(build_dir));
}

module.exports = compile_index;
