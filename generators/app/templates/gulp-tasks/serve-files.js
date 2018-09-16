const chalk   = require('chalk');
const express = require('express');
const app     = express();

const build_dir = require('../build_utils/build_dir');

const PORT = 4000;

module.exports = () => {
  app.use(express.static(build_dir));
  app.listen(PORT, '0.0.0.0');

  console.log(chalk.bold.green(`\n\tServer running on localhost:${PORT}\n`));
};

module.exports.dependencies = ['compile:app-bundle', 'compile:index', 'compile:stylus'];
