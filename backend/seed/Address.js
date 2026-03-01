const Address = require("../models/Address");

exports.seedAddress = async () => {
  try {
    await Address.deleteMany(); // 🔥 XOÁ TOÀN BỘ ADDRESS
    console.log("All addresses deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
