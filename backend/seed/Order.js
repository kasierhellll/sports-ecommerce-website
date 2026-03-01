const Order = require("../models/Order");

exports.seedOrder = async () => {
  try {
    await Order.deleteMany(); // 🔥 XOÁ TOÀN BỘ ORDER CŨ
    console.log("All orders deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
