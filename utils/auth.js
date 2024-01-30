//Authentication Middleware:
const withAuth = (req, res, next) => {
  //Session Check:
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};
//Export:
module.exports = withAuth;
