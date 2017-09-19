const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', (req, res, next) => {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
});

router.get('/users/:name', (req, res) => {
  let name = req.params.name;
  let tweets = tweetBank.find({ name: name });
  res.render('index', { tweets: tweets });
});

module.exports = router;
