// Model Imports:
const User = require("./User");
const Book = require("./Book");
//Relationship Definitions:
User.hasMany(Book, { foreignKey: "user_id" });
Book.belongsTo(User, { foreignKey: "user_id" });
//Model Export:
module.exports = {
  User,
  Book,
};
