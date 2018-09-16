const gulp       = require('gulp');
const load_tasks = require('gulp-task-loader');

load_tasks();

const npm_tasks = [
  'npm:css'
];

const compile_tasks = [
  'compile:index',
  'compile:stylus',
  'compile:app-bundle'
];

gulp.task('startdev', npm_tasks.concat(compile_tasks).concat(['serve-files']), () => {
  gulp.watch('src/index.pug', ['compile:index']);
  gulp.watch(['src/stylus/**/*.styl', 'src/components/**/*.styl'], ['compile:stylus']);
  gulp.watch(['src/components/**/*.pug', 'src/**/*.js'], ['compile:app-bundle']);
});

gulp.task('default', npm_tasks.concat(compile_tasks), () => {
  console.log('Build generated!');
});
