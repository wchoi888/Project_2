const router = require("express").Router();
const { User, Book } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const booksData = await Book.findAll({
      include: [{ model: User }],
    });
    const books = booksData.map((bookExtract) =>
      bookExtract.get({ plain: true })
    );
    res.render("homepage", { books });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
module.exports = router;