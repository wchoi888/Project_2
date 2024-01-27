const { Book } = require("../models");

const booksData = [
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    genre: "fiction",
    description:
      "The series follows the life and adventures of a young wizard named Harry Potter",
    user_id: 1,
  },
  {
    title: "Jaws",
    author: "Peter Benchley",
    genre: "fiction",
    description:
      "The story revolves around a small coastal town called Amity Island, which becomes terrorized by a great white shark.",
    user_id: 2,
  },
];
//
const seedBooks = () => Book.bulkCreate(booksData);

module.exports = seedBooks;
