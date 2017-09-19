const express = require('express');
const chalk = require('chalk');
const app = express();
const morgan = require('morgan');

app.listen(3000, () => {
  console.log(chalk.blue('Listen on :3000'));
});

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('welcome');
});

app.get('/news',  (req, res, next) => {
  res.send('heers ur news');
});
