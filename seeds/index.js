const seedUsers = require("./user-seeds");
const seedBooks = require("./book-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedBooks();

  process.exit(0);
};

seedAll();