const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('homepage');
  });

  router.get('/', (req, res) => {
    res.render('books');
  });

  router.get('/', (req, res) => {
    res.render('gallery');
  });

  router.get('/', (req, res) => {
    res.render('login');
  });

  router.get('/', (req, res) => {
    res.render('signup');
  });

  router.get('/', (req, res) => {
    res.render('main');
  });

  router.get('/', (req, res) => {
    res.render('books-details');
  });

  module.exports = router;