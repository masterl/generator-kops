const { series, parallel, watch } = require('gulp');
const chalk = require('chalk');

const compile = {
  index:        require('./compile-index'),
  'app-bundle': require('./compile-app-bundle'),
  stylus:       require('./compile-stylus')
};

const npm = {
  css: require('./npm-css')
};

const compile_tasks = [];
const npm_tasks = [];

for (const key in compile) {
  compile_tasks.push(compile[key]);
}

for (const key in npm) {
  npm_tasks.push(npm[key]);
}

const compile_and_npm_tasks = npm_tasks.concat(compile_tasks);

function default_task (cb) {
  console.log(chalk.blue('\n\tBuild generated!\n'));

  cb();
}

function startdev () {
  watch('src/index.pug', compile.index);
  watch(['src/stylus/**/*.styl', 'src/components/**/*.styl'], compile.stylus);
  watch(['src/components/**/*.pug', 'src/**/*.js'], compile['app-bundle']);
}

for (const key in compile) {
  exports[`compile:${key}`] = compile[key];
}

for (const key in npm) {
  exports[`npm:${key}`] = npm[key];
}

exports['serve-files'] = require('./serve-files');

exports.default = series(parallel(...compile_and_npm_tasks), default_task);

exports.startdev = series(
  parallel(...compile_and_npm_tasks),
  parallel(
    exports['serve-files'],
    startdev
  )
);
