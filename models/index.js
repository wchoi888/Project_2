// import models
const User = require("./User");
const Book = require("./Book");

// Products belongsTo Category
User.hasMany(Book, { foreignKey: "user_id" });
Book.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  User,
  Book,
};