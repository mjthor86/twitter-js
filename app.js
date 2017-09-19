const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank');
const routes = require('./routes');

const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.listen(3000, () => {
  console.log(chalk.blue('Listen on :3000'));
});

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(routes);











// app.get('/views', (req, res, next) => {
//   const locals = {
//     title: 'An Example',
//     people: [
//       { name: 'Gandalf' },
//       { name: 'Frodo' },
//       { name: 'Hermione' },
//       { name: 'Some other fantasy thing' }
//     ],
//   };

//   res.render('index', locals, function (err, output) {
//     res.send(output);
//   });

//   next();
// });


// nunjucks.render('index.html', locals, function (err, output) {
//   console.log(output);
// });
