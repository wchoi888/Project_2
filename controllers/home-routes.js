const router = require("express").Router();
const { User, Book } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const booksData = await Book.findAll({
      include: [{ model: User }],
      where: {
        user_id: req.session.user_id,
      },
    });
    const books = booksData.map((bookExtract) =>
      bookExtract.get({ plain: true })
    );
    res.render("homepage", {
      books,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
router.get("/book/:id", withAuth, async (req, res) => {
  try {
    const booksData = await Book.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
      include: [{ model: User }],
    });
    const book = booksData.get({ plain: true });
    res.render("books-details", {
      book,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/addbooks", withAuth, (req, res) => {
  res.render("books-form", {
    logged_in: req.session.logged_in,
    user_id: req.session.user_id,
    username: req.session.username,
  });
});
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});
module.exports = router;
