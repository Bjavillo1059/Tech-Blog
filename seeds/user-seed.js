const { User } = require("../models/user");

const userData = [
  {
    username: "admin",
    password: "password1",
    email: "admin@admin.com",
  },
  {
    username: "user",
    password: "password2",
    email: "user@user.com",
  },
  {
    username: "user2",
    password: "password3",
    email: "user2@user2.com",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;