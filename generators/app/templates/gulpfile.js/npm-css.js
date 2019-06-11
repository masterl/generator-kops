const { src, dest } = require('gulp');
const path          = require('path');
const concat        = require('gulp-concat');
const postcss       = require('gulp-postcss');

const build_dir = require('../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'css');

const npm_css = () => {

  return src([
    'node_modules/normalize.css/normalize.css'
  ])
    .pipe(concat('plugins.css'))
    .pipe(postcss())
    .pipe(dest(dest_dir));
};

module.exports = npm_css;
