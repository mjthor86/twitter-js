const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.listen(3000, () => {
  console.log(chalk.blue('Listen on :3000'));
});

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('welcome');
  next();
});

app.get('/news', (req, res, next) => {
  res.send('heers ur news');
  next();
});


app.get('/views', (req, res, next) => {
  const locals = {
    title: 'An Example',
    people: [
      { name: 'Gandalf' },
      { name: 'Frodo' },
      { name: 'Hermione' },
      { name: 'Some other fantasy thing' }
    ],
  };

  res.render('index', locals, function (err, output) {
    res.send(output);
  });

  next();
});


// nunjucks.configure('views', { noCache: true });
// nunjucks.render('index.html', locals, function (err, output) {
//   console.log(output);
// });
