const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "áo-nam" },
  { _id: "65a7e24602e12c44f599442d", name: "quần-nam" },
  { _id: "65a7e24602e12c44f599442e", name: "áo-nữ" },
  { _id: "65a7e24602e12c44f599442f", name: "quần-nữ" },
  { _id: "65a7e24602e12c44f5994430", name: "giày-nam" },
  { _id: "65a7e24602e12c44f5994431", name: "giày-nữ" },
  { _id: "65a7e24602e12c44f5994432", name: "bóng-đá" },
  { _id: "65a7e24602e12c44f5994433", name: "bóng-chuyền" },
  { _id: "65a7e24602e12c44f5994434", name: "bóng-rổ" },
  { _id: "65a7e24602e12c44f5994435", name: "bóng-mini" },
  { _id: "65a7e24602e12c44f5994436", name: "nón" },
  { _id: "65a7e24602e12c44f5994437", name: "tất-vớ" },
  { _id: "65a7e24602e12c44f5994438", name: "áo-khoác-nam" },
  { _id: "65a7e24602e12c44f5994439", name: "áo-khoác-nữ" },
  { _id: "65a7e24602e12c44f599443a", name: "vợt-cầu-lông" },
  { _id: "65a7e24602e12c44f599443b", name: "vợt-pickleball" },
  { _id: "65a7e24602e12c44f599443c", name: "dây-nhảy" },
  { _id: "65a7e24602e12c44f599443d", name: "đồng-hồ-thể-thao" },
  { _id: "65a7e24602e12c44f599443e", name: "túi-balo" },
  { _id: "65a7e24602e12c44f599443f", name: "kính" },
];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
