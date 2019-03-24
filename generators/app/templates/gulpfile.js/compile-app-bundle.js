const { src, dest } = require('gulp');
const webpack       = require('webpack-stream');
const path          = require('path');

const build_dir = require('../build_utils/build_dir');
const src_dir = require('../build_utils/src_dir');

const dest_dir = path.join(build_dir, 'js');

const mode = process.env.KOPS_DEV ? 'development' : 'production';

function compile_app_bundle () {
  return src('src/app/startup.js')
    .pipe(webpack({
      mode,
      output: {
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use:  {
              loader:  'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.pug$/,
            use:  ['apply-loader', 'pug-loader']
          },
          {
            test: /\.styl$/,
            use:  ['ignore-loader']
          }
        ]
      },
      resolve: {
        alias: {
          knockout: 'knockout/build/output/knockout-latest.js',
          page:     'page/page.js',
          app:      path.join(src_dir, 'app')
        }
      }
    }))
    .pipe(dest(dest_dir));
}

module.exports = compile_app_bundle;
