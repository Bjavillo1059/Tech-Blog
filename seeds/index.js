const seedUsers = require("./user-seed");
const seedBlogs = require("./blog-seed");
const seedComments = require("./comment-seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SYNCED -----\n");

  await seedBlogs();
  console.log("\n----- BLOGS SYNCED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SYNCED -----\n");

  process.exit(0);
};

seedAll();
