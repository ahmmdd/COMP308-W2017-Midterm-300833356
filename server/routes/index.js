/**
 * File Name: index.js
 * Author: Mohammed Juned Ahmed
 * Student ID: 300833356
 * Website Name: https://comp308-w17-midterm-300833356.herokuapp.com/
 * Github Repo: https://github.com/ahmmdd/COMP308-W2017-Midterm-300833356
 */

 // modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
