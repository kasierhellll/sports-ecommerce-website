const bcrypt = require("bcryptjs");
const User = require("../models/User");

const users = [
  {
    name: "customer",
    email: "customer@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isVerified: true,
    isAdmin: false,
  },
  {
    name: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin123", 10),
    isVerified: true,
    isAdmin: true,
  },
];

exports.seedUser = async () => {
  try {
    await User.deleteMany(); // xóa user cũ
    await User.insertMany(users);
    console.log("User seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
