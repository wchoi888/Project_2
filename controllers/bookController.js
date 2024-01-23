// controllers/bookController.js
const express = require('express');
const db = require('../models');
const router = express.Router();

// Get all books
router.get('/books', (req, res) => {
  db.Book.findAll().then(books => {
    res.json(books);
  });
});

// Toggle bookmark status
router.put('/books/:id/bookmark', (req, res) => {
  const bookId = req.params.id;

  db.Book.findByPk(bookId).then(book => {
    if (!book) {
      res.status(404).json({ error: 'Book not found.' });
    } else {
      // Toggle bookmark status
      book.update({ isBookmarked: !book.isBookmarked }).then(updatedBook => {
        res.json(updatedBook);
      });
    }
  });
});

module.exports = router;
