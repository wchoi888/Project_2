const { User } = require("../models");

const userData = [
  {
    username: "wchoi",
    password: "password1234",
  },
  {
    username: "gvargas",
    password: "password1234",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, { individualHooks: true, returning: true });

module.exports = seedUsers;