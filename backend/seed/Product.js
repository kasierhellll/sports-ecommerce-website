const Product = require("../models/Product");

const products = [
  {
    _id: "65a7e45902e12c44f599444e",
    title: "Áo dài tay giữ nhiệt nam UltraWarm Dri Air SS070M1",
    description: "Áo thiết kế hiện đại, chất liệu mềm mịn và thoáng khí. Form chuẩn, dễ phối đồ và mang lại cảm giác thoải mái suốt cả ngày.",
    price: 548,
    discountPercentage: 12.96,
    category: "65a7e24602e12c44f599442c",
    brand: "65a7e20102e12c44f59943da",
    stockQuantity: 14,
    thumbnail: "http://localhost:8000/public/image/aonam11.jpg",
    images: [
      "http://localhost:8000/public/image/aonam11.jpg",
      "http://localhost:8000/public/image/aonam12.jpg",
      "http://localhost:8000/public/image/aonam12.jpg",
      "http://localhost:8000/public/image/aonam11.jpg"
    ],
    isDeleted: false,
    createdAt: "2025-12-07T18:09:44.668Z",
    updatedAt: "2025-12-08T13:33:43.138Z",
  },
  {
    _id: "65a7e45902e12c44f599444f",
    title: "Áo dài tay giữ nhiệt nữ UltraWarm Dri Air SS075W1",
    description: "Áo mang phong cách năng động với kiểu dáng hiện đại. Đường may chắc chắn giúp sản phẩm giữ form và tăng độ bền trong quá trình sử dụng.",
    price: 131,
    discountPercentage: 8.14,
    category: "65a7e24602e12c44f599442e",
    brand: "65a7e20102e12c44f59943dd",
    stockQuantity: 21,
    thumbnail: "http://localhost:8000/public/image/aonu11.jpg",
    images: [
      "http://localhost:8000/public/image/aonu11.jpg",
      "http://localhost:8000/public/image/aonu12.jpg",
      "http://localhost:8000/public/image/aonu13.jpg",
      "http://localhost:8000/public/image/aonu12.jpg"
    ],
    isDeleted: false,
    createdAt: "2025-12-07T18:09:44.669Z",
    updatedAt: "2025-12-08T14:36:11.913Z",
  },
  {
    _id: "65a7e45902e12c44f5994450",
    title: "Áo polo nam Casual Ribbed PO117M0",
    description: "Quần áo cao cấp với chất liệu mềm mại, đường may tỉ mỉ và phong cách tinh tế. Hoàn hảo cho những ai yêu thích sự sang trọng và đẳng cấp trong từng chi tiết.",
    price: 1249,
    discountPercentage: 15.46,
    category: "65a7e24602e12c44f599442c",
    brand: "65a7e20102e12c44f59943da",
    stockQuantity: 36,
    thumbnail: "http://localhost:8000/public/image/aonam21.jpg",
    images: [
      "http://localhost:8000/public/image/aonam21.jpg",
      "http://localhost:8000/public/image/aonam22.jpg",
      "http://localhost:8000/public/image/aonam23.jpg",
      "http://localhost:8000/public/image/aonam24.jpg"
    ],
    isDeleted: false,
    createdAt: "2025-12-07T18:09:44.669Z",
    updatedAt: "2025-12-08T13:22:20.642Z",
  },
  {
    _id: "65a7e45902e12c44f5994451",
    title: "Áo thun nam tay bo Awaken Boxy Tee U.S. Cotton TS291M0",
    description: "Trang phục thể thao nhẹ, thoáng và đàn hồi tốt, hỗ trợ tối đa khi tập luyện. Thiết kế hiện đại, bền bỉ, phù hợp cho mọi môn thể thao.",
    price: 277,
    discountPercentage: 17.91,
    category: "65a7e24602e12c44f599442c",
    brand: "65a7e20102e12c44f59943db",
    stockQuantity: 123,
    thumbnail: "http://localhost:8000/public/image/aonam31.jpg",
    images: [
      "http://localhost:8000/public/image/aonam33.jpg",
      "http://localhost:8000/public/image/aonam32.jpg",
      "http://localhost:8000/public/image/aonam34.jpg",
      "http://localhost:8000/public/image/aonam35.jpg"
    ],
    isDeleted: false,
    createdAt: "2025-12-07T18:09:44.669Z",
    updatedAt: "2025-12-08T13:22:42.359Z",
  },
  {
    _id: "65a7e45902e12c44f5994453",
    title: "Quần dài nam ống đứng Strike Curved PA106M0",
    description: "Thiết kế tối giản, dễ phối đồ và phù hợp với mọi phong cách. Tự tin diện đồ đẹp mỗi ngày với chất liệu thoải mái và form dáng thời thượng.",
    price: 1749,
    discountPercentage: 11.02,
    category: "65a7e24602e12c44f599442d",
    brand: "65a7e20102e12c44f59943df",
    stockQuantity: 83,
    thumbnail: "http://localhost:8000/public/image/quannam11.jpg",
    images: [
      "http://localhost:8000/public/image/quannam12.jpg",
      "http://localhost:8000/public/image/quannam13.jpg",
      "http://localhost:8000/public/image/quannam14.jpg",
      "http://localhost:8000/public/image/quannam15.jpg"
    ],
    isDeleted: false,
    createdAt: "2025-12-07T18:09:44.669Z",
    updatedAt: "2025-12-08T13:23:04.669Z",
  },
  {
  _id: "65a7e45902e12c44f5994454",
  title: "Quần shorts nam 5inch SwiftEdge Dri Air SH128M1",
  description: "Quần chất liệu co giãn tốt, bền và nhẹ. Thiết kế trẻ trung, phù hợp cho vận động lẫn mặc thường ngày.",
  price: 100,
  discountPercentage: 4.15,
  category: "65a7e24602e12c44f599442d",
  brand: "65a7e20102e12c44f59943db",
  stockQuantity: 50,
  thumbnail: "http://localhost:8000/public/image/quannam21.jpg",
  images: [
    "http://localhost:8000/public/image/quannam22.jpg",
    "http://localhost:8000/public/image/quannam23.jpg",
    "http://localhost:8000/public/image/quannam24.jpg",
    "http://localhost:8000/public/image/quannam25.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T13:35:13.788Z"
},
{
  _id: "65a7e45902e12c44f5994455",
  title: "Quần dài nam túi hộp Cargo Pants PA104M1",
  description: "Quần co giãn êm ái, nhẹ và thoáng, mang lại sự thoải mái trong suốt ngày dài.",
  price: 149,
  discountPercentage: 10.23,
  category: "65a7e24602e12c44f599442d",
  brand: "65a7e20102e12c44f59943e2",
  stockQuantity: 68,
  thumbnail: "http://localhost:8000/public/image/quannam31.jpg",
  images: [
    "http://localhost:8000/public/image/quannam32.jpg",
    "http://localhost:8000/public/image/quannam33.jpg",
    "http://localhost:8000/public/image/quannam34.jpg",
    "http://localhost:8000/public/image/quannam35.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T14:30:25.467Z"
},
{
  _id: "65a7e45902e12c44f5994458",
  title: "Áo thun nữ dáng crop Swirl Stripe Tee U.S. Cotton TS239W0",
  description: "Áo được làm từ chất liệu mềm, thoáng khí giúp bạn luôn cảm thấy dễ chịu.",
  price: 36,
  discountPercentage: 8.4,
  category: "65a7e24602e12c44f599442e",
  brand: "65a7e20102e12c44f59943e1",
  stockQuantity: 65,
  thumbnail: "http://localhost:8000/public/image/aonu21.jpg",
  images: [
    "http://localhost:8000/public/image/aonu22.jpg",
    "http://localhost:8000/public/image/aonu23.jpg",
    "http://localhost:8000/public/image/aonu24.jpg",
    "http://localhost:8000/public/image/aonu25.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T14:40:27.951Z"
},
{
  _id: "65a7e45902e12c44f5994459",
  title: "Áo bra thể thao nữ vải tái chế dây chéo lưng BR080W1",
  description: "Thiết kế trẻ trung, tinh gọn, dễ phối cùng nhiều phong cách khác nhau.",
  price: 54,
  discountPercentage: 15.66,
  category: "65a7e24602e12c44f599442e",
  brand: "65a7e20102e12c44f59943e0",
  stockQuantity: 52,
  thumbnail: "http://localhost:8000/public/image/aonu31.jpg",
  images: [
    "http://localhost:8000/public/image/aonu31.jpg",
    "http://localhost:8000/public/image/aonu32.jpg",
    "http://localhost:8000/public/image/aonu33.jpg",
    "http://localhost:8000/public/image/aonu34.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T14:43:58.058Z"
},
{
  _id: "65a7e45902e12c44f599445d",
  title: "Chân váy nữ Pickleball xếp ly Front Slit SK024W1",
  description: "Chất liệu đàn hồi 4 chiều hỗ trợ vận động tự nhiên.",
  price: 71,
  discountPercentage: 13.31,
  category: "65a7e24602e12c44f599442f",
  brand: "65a7e20102e12c44f59943e2",
  stockQuantity: 110,
  thumbnail: "http://localhost:8000/public/image/quannu11.jpg",
  images: [
    "http://localhost:8000/public/image/quannu12.jpg",
    "http://localhost:8000/public/image/quannu13.jpg",
    "http://localhost:8000/public/image/quannu14.jpg",
    "http://localhost:8000/public/image/quannu15.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T16:09:06.252Z"
},
{
  _id: "65a7e45902e12c44f599445e",
  title: "Quần dài nữ ống suông Flow Line PA101W0",
  description: "Bề mặt vải mềm, nhẹ, giúp bạn luôn cảm thấy thoáng mát dù mặc cả ngày.",
  price: 58,
  discountPercentage: 4.09,
  category: "65a7e24602e12c44f599442f",
  brand: "65a7e20102e12c44f59943de",
  stockQuantity: 78,
  thumbnail: "http://localhost:8000/public/image/quannu21.jpg",
  images: [
    "http://localhost:8000/public/image/quannu21.jpg",
    "http://localhost:8000/public/image/quannu22.jpg",
    "http://localhost:8000/public/image/quannu23.jpg",
    "http://localhost:8000/public/image/quannu24.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T16:09:29.805Z"
},
{
  _id: "65a7e45902e12c44f599445f",
  title: "Quần shorts nữ 5inch Melange SH116W0",
  description: "Chất liệu đàn hồi 4 chiều hỗ trợ vận động tự nhiên, phù hợp tập luyện hoặc đi lại thường ngày.",
  price: 50,
  discountPercentage: 13.1,
  category: "65a7e24602e12c44f599442f",
  brand: "65a7e20102e12c44f59943dd",
  stockQuantity: 88,
  thumbnail: "http://localhost:8000/public/image/quannu31.jpg",
  images: [
    "http://localhost:8000/public/image/quannu31.jpg",
    "http://localhost:8000/public/image/quannu32.jpg",
    "http://localhost:8000/public/image/quannu33.jpg",
    "http://localhost:8000/public/image/quannu31.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T16:09:50.494Z"
},
{
  _id: "65a7e45902e12c44f5994462",
  title: "Giày bóng đá nam SkySwift FB004M0",
  description: "Đế bám tốt, di chuyển chắc chắn trên nhiều bề mặt.",
  price: 43,
  discountPercentage: 4.81,
  category: "65a7e24602e12c44f5994430",
  brand: "65a7e20102e12c44f59943da",
  stockQuantity: 133,
  thumbnail: "http://localhost:8000/public/image/giaynam11.jpg",
  images: [
    "http://localhost:8000/public/image/giaynam12.jpg",
    "http://localhost:8000/public/image/giaynam13.jpg",
    "http://localhost:8000/public/image/giaynam14.jpg",
    "http://localhost:8000/public/image/giaynam11.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T15:15:08.897Z"
},
{
  _id: "65a7e45902e12c44f5994463",
  title: "Giày thể thao nam TR005M0",
  description: "Giày đệm êm và nhẹ, hỗ trợ giảm chấn khi chạy hoặc tập luyện.",
  price: 43,
  discountPercentage: 15.58,
  category: "65a7e24602e12c44f5994430",
  brand: "65a7e20102e12c44f59943dc",
  stockQuantity: 146,
  thumbnail: "http://localhost:8000/public/image/giaynam21.jpg",
  images: [
    "http://localhost:8000/public/image/giaynam22.jpg",
    "http://localhost:8000/public/image/giaynam23.jpg",
    "http://localhost:8000/public/image/giaynam24.jpg",
    "http://localhost:8000/public/image/giaynam21.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T16:10:22.267Z"
},
{
  _id: "65a7e45902e12c44f5994464",
  title: "Orange Essence Food Flavour",
  description: "Sản phẩm hương cam thực phẩm, chất lượng cao.",
  price: 46,
  discountPercentage: 8.04,
  category: "65a7e24602e12c44f5994430",
  brand: "65a7e20102e12c44f59943da",
  stockQuantity: 26,
  thumbnail: "http://localhost:8000/public/image/giaynam21.jpg",
  images: [
    "http://localhost:8000/public/image/giaynam25.jpg",
    "http://localhost:8000/public/image/giaynam22.jpg",
    "http://localhost:8000/public/image/giaynam22.jpg",
    "http://localhost:8000/public/image/giaynam23.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T15:29:27.571Z"
},
{
  _id: "65a7e45902e12c44f5994467",
  title: "Giày thể thao nữ Knit Sneakers LS013W0",
  description: "Đế bám tốt, di chuyển chắc chắn trên nhiều bề mặt.",
  price: 50,
  discountPercentage: 17.86,
  category: "65a7e24602e12c44f5994431",
  brand: "65a7e20102e12c44f59943db",
  stockQuantity: 131,
  thumbnail: "http://localhost:8000/public/image/giaynu11.jpg",
  images: [
    "http://localhost:8000/public/image/giaynu11.jpg",
    "http://localhost:8000/public/image/giaynu12.jpg",
    "http://localhost:8000/public/image/giaynu13.jpg",
    "http://localhost:8000/public/image/giaynu14.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T15:40:00.747Z"
},
{
  _id: "65a7e45902e12c44f5994468",
  title: "Giày Training nữ Speed+ 2.0 TR004W0",
  description: "Giày đệm êm và nhẹ, hỗ trợ giảm chấn khi tập luyện.",
  price: 51,
  discountPercentage: 15.58,
  category: "65a7e24602e12c44f5994431",
  brand: "65a7e20102e12c44f59943da",
  stockQuantity: 17,
  thumbnail: "http://localhost:8000/public/image/giaynu21.jpg",
  images: [
    "http://localhost:8000/public/image/giaynu21.jpg",
    "http://localhost:8000/public/image/giaynu22.jpg",
    "http://localhost:8000/public/image/giaynu23.jpg",
    "http://localhost:8000/public/image/giaynu24.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T15:42:42.551Z"
},
{
  _id: "65a7e45902e12c44f5994469",
  title: "Giày thể thao nữ Knit Sneakers LS014W0",
  description: "Giày thoáng khí, không gây bí kể cả khi mang lâu. Sản phẩm bền, mang lại độ êm ái vượt trội.",
  price: 51,
  discountPercentage: 16.49,
  category: "65a7e24602e12c44f5994431",
  brand: "65a7e20102e12c44f59943dc",
  stockQuantity: 54,
  thumbnail: "http://localhost:8000/public/image/giaynu31.jpg",
  images: [
    "http://localhost:8000/public/image/giaynu31.jpg",
    "http://localhost:8000/public/image/giaynu32.jpg",
    "http://localhost:8000/public/image/giaynu33.jpg",
    "http://localhost:8000/public/image/giaynu34.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T15:47:02.781Z"
},
{
  _id: "65a7e45902e12c44f599446c",
  title: "Bóng đá ngoài trời may máy size 4 0792-4M",
  description: "Quả bóng đá da tổng hợp bền bỉ, chịu lực tốt, bề mặt chống trượt giúp kiểm soát bóng ổn định.",
  price: 40,
  discountPercentage: 17,
  category: "65a7e24602e12c44f5994432",
  brand: "65a7e20102e12c44f59943e4",
  stockQuantity: 140,
  thumbnail: "http://localhost:8000/public/image/bongda11.jpg",
  images: [
    "http://localhost:8000/public/image/bongda11.jpg",
    "http://localhost:8000/public/image/bongda12.jpg",
    "http://localhost:8000/public/image/bongda13.jpg",
    "http://localhost:8000/public/image/bongda14.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T16:02:49.097Z"
},
{
  _id: "65a7e45902e12c44f599446d",
  title: "Bóng đá ngoài trời Campo Pro khâu tay size 5 9968-5K",
  description: "Thiết kế thể thao nổi bật, phù hợp cho sân cỏ tự nhiên và sân cỏ nhân tạo.",
  price: 51,
  discountPercentage: 15.59,
  category: "65a7e24602e12c44f5994432",
  brand: "65a7e20102e12c44f59943e5",
  stockQuantity: 30,
  thumbnail: "http://localhost:8000/public/image/bongda21.jpg",
  images: [
    "http://localhost:8000/public/image/bongda21.jpg",
    "http://localhost:8000/public/image/bongda22.jpg",
    "http://localhost:8000/public/image/bongda23.jpg",
    "http://localhost:8000/public/image/bongda24.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T16:07:45.498Z"
},
{
  _id: "65a7e45902e12c44f599446e",
  title: "Bóng đá ngoài trời DELTA may máy size 5 0861-5M",
  description: "Lõi bóng giữ hơi lâu, độ nảy chuẩn, đường chỉ ép chắc chắn, sử dụng bền bỉ.",
  price: 64,
  discountPercentage: 17,
  category: "65a7e24602e12c44f5994432",
  brand: "65a7e20102e12c44f59943e6",
  stockQuantity: 106,
  thumbnail: "http://localhost:8000/public/image/bongda31.jpg",
  images: [
    "http://localhost:8000/public/image/bongda31.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T16:13:19.242Z"
},
{
  _id: "65a7e45902e12c44f599446f",
  title: "Plastic Table",
  description: "Very good quality plastic table for multipurpose use at reasonable price.",
  price: 50,
  discountPercentage: 4,
  category: "65a7e24602e12c44f5994432",
  brand: "65a7e20102e12c44f59943f8",
  stockQuantity: 136,
  thumbnail: "https://cdn.dummyjson.com/product-images/34/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/34/1.jpg",
    "https://cdn.dummyjson.com/product-images/34/2.jpg",
    "https://cdn.dummyjson.com/product-images/34/3.jpg",
    "https://cdn.dummyjson.com/product-images/34/4.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T16:03:00.156Z"
},
{
  _id: "65a7e45902e12c44f5994470",
  title: "3 DOOR PORTABLE",
  description: "Stainless steel frame with fabric cover. Size 110x45x175cm. Portable wardrobe.",
  price: 41,
  discountPercentage: 7.98,
  category: "65a7e24602e12c44f5994432",
  brand: "65a7e20102e12c44f59943f9",
  stockQuantity: 68,
  thumbnail: "https://cdn.dummyjson.com/product-images/35/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/35/1.jpg",
    "https://cdn.dummyjson.com/product-images/35/2.jpg",
    "https://cdn.dummyjson.com/product-images/35/3.jpg",
    "https://cdn.dummyjson.com/product-images/35/4.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T16:03:01.101Z"
},
{
  _id: "65a7e45902e12c44f5994471",
  title: "Bóng chuyền May máy Size 5 9959-5C",
  description: "Bóng chuyền mềm tay, độ nảy ổn định, giúp bạn kiểm soát tốt khi chuyền – đập bóng. Chất liệu nhẹ hỗ trợ thao tác linh hoạt và chính xác.",
  price: 40,
  discountPercentage: 10.89,
  category: "65a7e24602e12c44f5994433",
  brand: "65a7e20102e12c44f59943e8",
  stockQuantity: 39,
  thumbnail: "http://localhost:8000/public/image/bongchuyen11.jpg",
  images: [
    "http://localhost:8000/public/image/bongchuyen11.jpg",
    "http://localhost:8000/public/image/bongchuyen12.jpg",
    "http://localhost:8000/public/image/bongchuyen11.jpg",
    "http://localhost:8000/public/image/bongchuyen12.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T16:57:52.862Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994472",
  title: "Bóng chuyền May máy Size 5 9958-5C",
  description: "Vỏ bóng được ghép tỉ mỉ, hạn chế thấm nước và tăng độ bền khi dùng ngoài trời. Lõi cao su giữ hơi lâu nên luôn ổn định trong suốt buổi tập.",
  price: 45,
  discountPercentage: 12.05,
  category: "65a7e24602e12c44f5994433",
  brand: "65a7e20102e12c44f59943e9",
  stockQuantity: 107,
  thumbnail: "http://localhost:8000/public/image/bongchuyen21.jpg",
  images: [
    "http://localhost:8000/public/image/bongchuyen21.jpg",
    "http://localhost:8000/public/image/bongchuyen22.jpg",
    "http://localhost:8000/public/image/bongchuyen23.jpg",
    "http://localhost:8000/public/image/bongchuyen21.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T17:00:37.270Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994473",
  title: "sublimation plain kids tank",
  description: "sublimation plain kids tank tops wholesale",
  price: 100,
  discountPercentage: 11.12,
  category: "65a7e24602e12c44f5994433",
  brand: "65a7e20102e12c44f59943fb",
  stockQuantity: 20,
  thumbnail: "https://cdn.dummyjson.com/product-images/38/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/38/1.png",
    "https://cdn.dummyjson.com/product-images/38/2.jpg",
    "https://cdn.dummyjson.com/product-images/38/3.jpg",
    "https://cdn.dummyjson.com/product-images/38/4.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T16:58:23.381Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994474",
  title: "Women Sweaters Wool",
  description: "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
  price: 600,
  discountPercentage: 17.2,
  category: "65a7e24602e12c44f5994433",
  brand: "65a7e20102e12c44f59943fc",
  stockQuantity: 55,
  thumbnail: "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/39/1.jpg",
    "https://cdn.dummyjson.com/product-images/39/2.jpg",
    "https://cdn.dummyjson.com/product-images/39/3.jpg",
    "https://cdn.dummyjson.com/product-images/39/4.jpg",
    "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T16:50:50.719Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994475",
  title: "women winter clothes",
  description: "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set",
  price: 57,
  discountPercentage: 13.39,
  category: "65a7e24602e12c44f5994433",
  brand: "65a7e20102e12c44f59943fc",
  stockQuantity: 84,
  thumbnail: "https://cdn.dummyjson.com/product-images/40/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/40/1.jpg",
    "https://cdn.dummyjson.com/product-images/40/2.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T16:50:49.614Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994476",
  title: "Bóng rổ DELTA Size 7 1771-7B",
  description: "Bóng rổ bề mặt vân nổi giúp cầm nắm chắc tay và kiểm soát bóng tốt hơn. Chất liệu cao su bền bỉ phù hợp cho cả sân trong nhà và sân ngoài trời.",
  price: 55,
  discountPercentage: 15.05,
  category: "65a7e24602e12c44f5994434",
  brand: "65a7e20102e12c44f59943e8",
  stockQuantity: 21,
  thumbnail: "http://localhost:8000/public/image/bongro11.jpg",
  images: [
    "http://localhost:8000/public/image/bongro12.jpg",
    "http://localhost:8000/public/image/bongro13.jpg",
    "http://localhost:8000/public/image/bongro14.jpg",
    "http://localhost:8000/public/image/bongro15.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T17:04:32.292Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994477",
  title: "Bóng rổ DELTA Size 71775-7B",
  description: "Thiết kế màu sắc nổi bật, dễ nhìn và mang phong cách thể thao mạnh mẽ. Thích hợp cho người mới, người chơi phong trào và đội nhóm.",
  price: 60,
  discountPercentage: 15.37,
  category: "65a7e24602e12c44f5994434",
  brand: "65a7e20102e12c44f59943ea",
  stockQuantity: 148,
  thumbnail: "http://localhost:8000/public/image/bongro21.jpg",
  images: [
    "http://localhost:8000/public/image/bongro22.jpg",
    "http://localhost:8000/public/image/bongro23.jpg",
    "http://localhost:8000/public/image/bongro24.jpg",
    "http://localhost:8000/public/image/bongro25.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T17:08:52.344Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994478",
  title: "Bóng rổ DELTA Size 7 1774-7B",
  description: "Lõi bóng giữ hơi ổn định, đảm bảo độ nảy chuẩn khi dẫn bóng hoặc ném rổ. Bóng nhẹ nhưng chắc chắn, tạo cảm giác thoải mái khi luyện tập.",
  price: 61,
  discountPercentage: 15.55,
  category: "65a7e24602e12c44f5994434",
  brand: "65a7e20102e12c44f59943eb",
  stockQuantity: 150,
  thumbnail: "http://localhost:8000/public/image/bongro31.jpg",
  images: [
    "http://localhost:8000/public/image/bongro32.jpg",
    "http://localhost:8000/public/image/bongro33.jpg",
    "http://localhost:8000/public/image/bongro34.jpg",
    "http://localhost:8000/public/image/bongro35.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T17:12:34.510Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994479",
  title: "Ladies Multicolored Dress",
  description: "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
  price: 79,
  discountPercentage: 16.88,
  category: "65a7e24602e12c44f5994434",
  brand: "65a7e20102e12c44f59943ff",
  stockQuantity: 2,
  thumbnail: "https://cdn.dummyjson.com/product-images/44/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/44/1.jpg",
    "https://cdn.dummyjson.com/product-images/44/2.jpg",
    "https://cdn.dummyjson.com/product-images/44/3.jpg",
    "https://cdn.dummyjson.com/product-images/44/4.jpg",
    "https://cdn.dummyjson.com/product-images/44/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T17:00:52.422Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f599447a",
  title: "Malai Maxi Dress",
  description: "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff",
  price: 50,
  discountPercentage: 5.07,
  category: "65a7e24602e12c44f5994434",
  brand: "65a7e20102e12c44f5994400",
  stockQuantity: 96,
  thumbnail: "https://cdn.dummyjson.com/product-images/45/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/45/1.jpg",
    "https://cdn.dummyjson.com/product-images/45/2.webp",
    "https://cdn.dummyjson.com/product-images/45/3.jpg",
    "https://cdn.dummyjson.com/product-images/45/4.jpg",
    "https://cdn.dummyjson.com/product-images/45/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T17:00:51.129Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f599447b",
  title: "Bóng đá Mini trẻ em may máy 0859-2M",
  description: "Độ nảy nhẹ và ổn định, mang lại cảm giác thoải mái khi tập luyện hoặc vui chơi giải trí. Bóng giữ hơi khá tốt, dùng lâu vẫn bền.",
  price: 35,
  discountPercentage: 16.96,
  category: "65a7e24602e12c44f5994435",
  brand: "65a7e20102e12c44f59943ec",
  stockQuantity: 72,
  thumbnail: "http://localhost:8000/public/image/bongmi11.jpg",
  images: [
    "http://localhost:8000/public/image/bongmi11.jpg",
    "http://localhost:8000/public/image/bongmi12.jpg",
    "http://localhost:8000/public/image/bongmi13.jpg",
    "http://localhost:8000/public/image/bongmi14.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T17:20:55.086Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f599447c",
  title: "Bóng Mini trẻ em DELTA may máy size 2 0868-2M",
  description: "Bóng mini nhỏ gọn, dễ cầm nắm và phù hợp cho trẻ em hoặc người dùng muốn luyện kỹ thuật cơ bản. Chất liệu mềm, an toàn khi chơi trong nhà.",
  price: 44,
  discountPercentage: 10.37,
  category: "65a7e24602e12c44f5994435",
  brand: "65a7e20102e12c44f59943e7",
  stockQuantity: 50,
  thumbnail: "http://localhost:8000/public/image/bongmi21.jpg",
  images: [
    "http://localhost:8000/public/image/bongmi22.jpg",
    "http://localhost:8000/public/image/bongmi23.jpg",
    "http://localhost:8000/public/image/bongmi24.jpg",
    "http://localhost:8000/public/image/bongmi25.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T17:26:20.067Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f599447d",
  title: "Bóng chuyền Mini trẻ em Size 2 2222-2C",
  description: "Thiết kế nhiều màu sắc tươi sáng, phù hợp cho cả trẻ em lẫn người lớn. Cực kỳ tiện lợi mang theo khi đi du lịch hoặc chơi ngoài trời.",
  price: 33,
  discountPercentage: 10.83,
  category: "65a7e24602e12c44f5994435",
  brand: "65a7e20102e12c44f59943e9",
  stockQuantity: 25,
  thumbnail: "http://localhost:8000/public/image/bongmi31.jpg",
  images: [
    "http://localhost:8000/public/image/bongmi31.jpg",
    "http://localhost:8000/public/image/bongmi32.jpg",
    "hhttp://localhost:8000/public/image/bongmi33.jpg",
    "http://localhost:8000/public/image/bongmi34.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T17:29:39.868Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f599447e",
  title: "Chappals & Shoe Ladies Metallic",
  description: "Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals",
  price: 23,
  discountPercentage: 2.62,
  category: "65a7e24602e12c44f5994435",
  brand: "65a7e20102e12c44f5994404",
  stockQuantity: 107,
  thumbnail: "https://cdn.dummyjson.com/product-images/49/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/49/1.jpg",
    "https://cdn.dummyjson.com/product-images/49/2.jpg",
    "https://cdn.dummyjson.com/product-images/49/3.webp",
    "https://cdn.dummyjson.com/product-images/49/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T17:23:57.165Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f599447f",
  title: "Women Shoes",
  description: "2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes",
  price: 36,
  discountPercentage: 16.87,
  category: "65a7e24602e12c44f5994435",
  brand: "65a7e20102e12c44f5994405",
  stockQuantity: 46,
  thumbnail: "https://cdn.dummyjson.com/product-images/50/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/50/1.jpeg",
    "https://cdn.dummyjson.com/product-images/50/2.jpg",
    "https://cdn.dummyjson.com/product-images/50/3.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T17:23:56.195Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994480",
  title: "Nón lưỡi trai Active Essential HA001U1",
  description: "Nón được làm từ chất liệu thoáng khí, đội lâu vẫn dễ chịu. Thiết kế thể thao trẻ trung phù hợp nhiều phong cách.",
  price: 23,
  discountPercentage: 12.76,
  category: "65a7e24602e12c44f5994436",
  brand: "65a7e20102e12c44f59943da",
  stockQuantity: 132,
  thumbnail: "http://localhost:8000/public/image/non11.jpg",
  images: [
    "http://localhost:8000/public/image/non12.jpg",
    "http://localhost:8000/public/image/non13.jpg",
    "http://localhost:8000/public/image/non14.jpg",
    "http://localhost:8000/public/image/non15.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T17:33:35.987Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994481",
  title: "Nón lưỡi trai Daily Cap dù một lớp HA002U1",
  description: "Kiểu dáng đơn giản nhưng thời trang, dễ phối đồ. Chất liệu bền, nhẹ và phù hợp cho việc di chuyển ngoài trời.",
  price: 10,
  discountPercentage: 14.72,
  category: "65a7e24602e12c44f5994436",
  brand: "65a7e20102e12c44f59943de",
  stockQuantity: 128,
  thumbnail: "http://localhost:8000/public/image/non21.jpg",
  images: [
    "http://localhost:8000/public/image/non21.jpg",
    "http://localhost:8000/public/image/non23.jpg",
    "http://localhost:8000/public/image/non24.jpg",
    "http://localhost:8000/public/image/non25.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T17:52:06.031Z",
  createdAt: "2025-12-07T18:09:44.670Z"
},
{
  _id: "65a7e45902e12c44f5994482",
  title: "printed high quality T shirts",
  description: "Brand: vintage Apparel ,Export quality",
  price: 35,
  discountPercentage: 7.54,
  category: "65a7e24602e12c44f5994436",
  brand: "65a7e20102e12c44f5994406",
  stockQuantity: 6,
  thumbnail: "https://cdn.dummyjson.com/product-images/53/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/53/1.webp",
    "https://cdn.dummyjson.com/product-images/53/2.jpg",
    "https://cdn.dummyjson.com/product-images/53/3.jpg",
    "https://cdn.dummyjson.com/product-images/53/4.jpg",
    "https://cdn.dummyjson.com/product-images/53/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T17:30:15.551Z"
},
{
  _id: "65a7e45902e12c44f5994483",
  title: "Pubg Printed Graphic T-Shirt",
  description: "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
  price: 46,
  discountPercentage: 16.44,
  category: "65a7e24602e12c44f5994436",
  brand: "65a7e20102e12c44f5994408",
  stockQuantity: 136,
  thumbnail: "https://cdn.dummyjson.com/product-images/54/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/54/1.jpg",
    "https://cdn.dummyjson.com/product-images/54/2.jpg",
    "https://cdn.dummyjson.com/product-images/54/3.jpg",
    "https://cdn.dummyjson.com/product-images/54/4.jpg",
    "https://cdn.dummyjson.com/product-images/54/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T17:30:00.418Z"
},
{
  _id: "65a7e45902e12c44f5994484",
  title: "Money Heist Printed Summer T Shirts",
  description: "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
  price: 66,
  discountPercentage: 15.97,
  category: "65a7e24602e12c44f5994436",
  brand: "65a7e20102e12c44f5994408",
  stockQuantity: 122,
  thumbnail: "https://cdn.dummyjson.com/product-images/55/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/55/1.jpg",
    "https://cdn.dummyjson.com/product-images/55/2.webp",
    "https://cdn.dummyjson.com/product-images/55/3.jpg",
    "https://cdn.dummyjson.com/product-images/55/4.jpg",
    "https://cdn.dummyjson.com/product-images/55/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T17:29:59.485Z"
},
{
  _id: "65a7e45902e12c44f5994485",
  title: "Vớ thể thao DELTA cổ trung SO007U0",
  description: "Tất mềm mịn, thấm hút tốt, giúp đôi chân luôn khô thoáng. Co giãn tốt, không bị tuột khi vận động.",
  price: 4,
  discountPercentage: 12.57,
  category: "65a7e24602e12c44f5994437",
  brand: "65a7e20102e12c44f59943da",
  stockQuantity: 6,
  thumbnail: "http://localhost:8000/public/image/tat11.jpg",
  images: [
    "http://localhost:8000/public/image/tat11.jpg",
    "http://localhost:8000/public/image/tat13.jpg",
    "http://localhost:8000/public/image/tat14.jpg",
    "http://localhost:8000/public/image/tat15.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T17:59:54.228Z"
},
{
  _id: "65a7e45902e12c44f5994486",
  title: "Vớ cổ trung unisex SO009U0",
  description: "Thiết kế ôm chân vừa phải, giảm ma sát khi mang giày. Chất liệu bền lâu, không xù lông khi giặt.",
  price: 47,
  discountPercentage: 10.91,
  category: "65a7e24602e12c44f5994437",
  brand: "65a7e20102e12c44f59943dc",
  stockQuantity: 20,
  thumbnail: "http://localhost:8000/public/image/tat21.jpg",
  images: [
    "http://localhost:8000/public/image/tat21.jpg",
    "http://localhost:8000/public/image/tat22.jpg",
    "http://localhost:8000/public/image/tat23.jpg",
    "http://localhost:8000/public/image/tat24.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T18:27:11.947Z"
},
{
  _id: "65a7e45902e12c44f5994487",
  title: "Vớ thể thao DELTA cổ ngắn SO010U0",
  description: "Kiểu dáng đơn giản nhưng tinh tế, phù hợp cả đi làm lẫn tập thể thao. Dễ phối với nhiều loại giày khác nhau.",
  price: 8,
  discountPercentage: 12,
  category: "65a7e24602e12c44f5994437",
  brand: "65a7e20102e12c44f59943df",
  stockQuantity: 68,
  thumbnail: "http://localhost:8000/public/image/tat31.jpg",
  images: [
    "http://localhost:8000/public/image/tat31.jpg",
    "http://localhost:8000/public/image/tat32.jpg",
    "http://localhost:8000/public/image/tat33.jpg",
    "http://localhost:8000/public/image/tat34.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T18:38:40.064Z"
},
{
  _id: "65a7e45902e12c44f5994488",
  title: "Spring and summershoes",
  description: "Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;",
  price: 20,
  discountPercentage: 8.71,
  category: "65a7e24602e12c44f5994437",
  brand: "65a7e20102e12c44f5994409",
  stockQuantity: 137,
  thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/59/1.jpg",
    "https://cdn.dummyjson.com/product-images/59/2.jpg",
    "https://cdn.dummyjson.com/product-images/59/3.jpg",
    "https://cdn.dummyjson.com/product-images/59/4.jpg",
    "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T18:06:46.003Z"
},
{
  _id: "65a7e45902e12c44f5994489",
  title: "Stylish Casual Jeans Shoes",
  description: "High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable",
  price: 58,
  discountPercentage: 7.55,
  category: "65a7e24602e12c44f5994437",
  brand: "65a7e20102e12c44f5994409",
  stockQuantity: 129,
  thumbnail: "https://cdn.dummyjson.com/product-images/60/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/60/1.jpg",
    "https://cdn.dummyjson.com/product-images/60/2.jpg",
    "https://cdn.dummyjson.com/product-images/60/3.jpg",
    "https://cdn.dummyjson.com/product-images/60/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T18:06:44.614Z"
},
{
  _id: "65a7e45902e12c44f599448a",
  title: "Áo khoác nam Elastic-Hem Windbreaker Anti UV JA056M1",
  description: "Áo khoác được làm từ chất liệu chống gió và giữ ấm tốt, mang lại cảm giác thoải mái trong thời tiết se lạnh. Form dáng hiện đại giúp bạn tự tin khi di chuyển ngoài trời.",
  price: 299,
  discountPercentage: 7.14,
  category: "65a7e24602e12c44f5994438",
  brand: "65a7e20102e12c44f59943dc",
  stockQuantity: 91,
  thumbnail: "http://localhost:8000/public/image/aokhoac11.jpg",
  images: [
    "http://localhost:8000/public/image/aokhoac12.jpg",
    "http://localhost:8000/public/image/aokhoac13.jpg",
    "http://localhost:8000/public/image/aokhoac14.jpg",
    null
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T18:45:05.155Z"
},
{
  _id: "65a7e45902e12c44f599448b",
  title: "Áo khoác thể thao nam không mũ Daily Active Anti UV JA059M1",
  description: "Bề mặt vải mềm, nhẹ và thoáng, không gây bí dù mặc trong thời gian dài. Phối được với nhiều trang phục khác nhau từ thể thao đến thời trang hằng ngày.",
  price: 345,
  discountPercentage: 3.15,
  category: "65a7e24602e12c44f5994438",
  brand: "65a7e20102e12c44f59943dd",
  stockQuantity: 95,
  thumbnail: "http://localhost:8000/public/image/aokhoac21.jpg",
  images: [
    "http://localhost:8000/public/image/aokhoac22.jpg",
    "http://localhost:8000/public/image/aokhoac23.jpg",
    null,
    null
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T18:49:48.928Z"
},
{
  _id: "65a7e45902e12c44f599448c",
  title: "Áo khoác thể thao nam có mũ Anti UV JA052M1",
  description: "Đường may cứng cáp, khóa kéo mượt và bền, sử dụng lâu dài không bị hư. Thiết kế trẻ trung, năng động, phù hợp cả nam và nữ.",
  price: 354,
  discountPercentage: 2.56,
  category: "65a7e24602e12c44f5994438",
  brand: "65a7e20102e12c44f59943e0",
  stockQuantity: 142,
  thumbnail: "http://localhost:8000/public/image/aokhoac31.jpg",
  images: [
    "http://localhost:8000/public/image/aokhoac31.jpg",
    "http://localhost:8000/public/image/aokhoac32.jpg",
    "http://localhost:8000/public/image/aokhoac33.jpg",
    "http://localhost:8000/public/image/aokhoac34.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T18:54:05.192Z"
},
{
  _id: "65a7e45902e12c44f599448d",
  title: "Leather Strap Skeleton Watch",
  description: "Leather Strap Skeleton Watch for Men - Stylish and Latest Design",
  price: 46,
  discountPercentage: 10.2,
  category: "65a7e24602e12c44f5994438",
  brand: "65a7e20102e12c44f599440d",
  stockQuantity: 61,
  thumbnail: "https://cdn.dummyjson.com/product-images/64/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/64/1.jpg",
    "https://cdn.dummyjson.com/product-images/64/2.webp",
    "https://cdn.dummyjson.com/product-images/64/3.jpg",
    "https://cdn.dummyjson.com/product-images/64/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T18:49:59.644Z"
},
{
  _id: "65a7e45902e12c44f599448e",
  title: "Stainless Steel Wrist Watch",
  description: "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
  price: 47,
  discountPercentage: 17.79,
  category: "65a7e24602e12c44f5994438",
  brand: "65a7e20102e12c44f599440e",
  stockQuantity: 94,
  thumbnail: "https://cdn.dummyjson.com/product-images/65/thumbnail.webp",
  images: [
    "https://cdn.dummyjson.com/product-images/65/1.jpg",
    "https://cdn.dummyjson.com/product-images/65/2.webp",
    "https://cdn.dummyjson.com/product-images/65/3.jpg",
    "https://cdn.dummyjson.com/product-images/65/4.webp",
    "https://cdn.dummyjson.com/product-images/65/thumbnail.webp"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T18:50:01.455Z"
},
{
  _id: "65a7e45902e12c44f599448f",
  title: "Áo khoác nữ có mũ dáng crop Casual Ribbed JA058W0",
  description: "Đường may cứng cáp, khóa kéo mượt và bền, sử dụng lâu dài không bị hư. Thiết kế trẻ trung, năng động, phù hợp cả nam và nữ.",
  price: 451,
  discountPercentage: 3.23,
  category: "65a7e24602e12c44f5994439",
  brand: "65a7e20102e12c44f59943e3",
  stockQuantity: 24,
  thumbnail: "http://localhost:8000/public/image/aokhoacnu11.jpg",
  images: [
    "http://localhost:8000/public/image/aokhoacnu12.jpg",
    "http://localhost:8000/public/image/aokhoacnu13.jpg",
    "http://localhost:8000/public/image/aokhoacnu14.jpg",
    "http://localhost:8000/public/image/aokhoacnu15.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T19:01:56.444Z"
},
{
  _id: "65a7e45902e12c44f5994490",
  title: "Áo khoác nữ Elastic-Hem Windbreaker Anti UV JA051W1",
  description: "Bề mặt vải mềm, nhẹ và thoáng, không gây bí dù mặc trong thời gian dài. Phối được với nhiều trang phục khác nhau từ thể thao đến thời trang hằng ngày.",
  price: 334,
  discountPercentage: 16.69,
  category: "65a7e24602e12c44f5994439",
  brand: "65a7e20102e12c44f59943dc",
  stockQuantity: 46,
  thumbnail: "http://localhost:8000/public/image/aokhoacnu21.jpg",
  images: [
    "http://localhost:8000/public/image/aokhoacnu22.jpg",
    "http://localhost:8000/public/image/aokhoacnu23.jpg",
    "http://localhost:8000/public/image/aokhoacnu24.jpg",
    "http://localhost:8000/public/image/aokhoacnu25.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T19:18:45.450Z"
},
{
  _id: "65a7e45902e12c44f5994491",
  title: "Áo khoác thể thao nữ tái chế Zip-up Mock Neck JA053W1",
  description: "Đường may cứng cáp, khóa kéo mượt và bền, sử dụng lâu dài không bị hư. Thiết kế trẻ trung, năng động, phù hợp cả nam và nữ.",
  price: 573,
  discountPercentage: 9.03,
  category: "65a7e24602e12c44f5994439",
  brand: "65a7e20102e12c44f59943de",
  stockQuantity: 77,
  thumbnail: "http://localhost:8000/public/image/aokhoacnu31.jpg",
  images: [
    "http://localhost:8000/public/image/aokhoacnu32.jpg",
    "http://localhost:8000/public/image/aokhoacnu33.jpg",
    "http://localhost:8000/public/image/aokhoacnu34.jpg",
    "http://localhost:8000/public/image/aokhoacnu35.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T19:22:22.989Z"
},
{
  _id: "65a7e45902e12c44f5994492",
  title: "Golden Watch Pearls Bracelet Watch",
  description: "Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women",
  price: 47,
  discountPercentage: 17.55,
  category: "65a7e24602e12c44f5994439",
  brand: "65a7e20102e12c44f5994411",
  stockQuantity: 89,
  thumbnail: "https://cdn.dummyjson.com/product-images/69/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/69/1.jpg",
    "https://cdn.dummyjson.com/product-images/69/2.jpg",
    "https://cdn.dummyjson.com/product-images/69/3.webp",
    "https://cdn.dummyjson.com/product-images/69/4.jpg",
    "https://cdn.dummyjson.com/product-images/69/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T19:19:15.816Z"
},
{
  _id: "65a7e45902e12c44f5994493",
  title: "Stainless Steel Women",
  description: "Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies",
  price: 35,
  discountPercentage: 8.98,
  category: "65a7e24602e12c44f5994439",
  brand: "65a7e20102e12c44f5994412",
  stockQuantity: 111,
  thumbnail: "https://cdn.dummyjson.com/product-images/70/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/70/1.jpg",
    "https://cdn.dummyjson.com/product-images/70/2.jpg",
    "https://cdn.dummyjson.com/product-images/70/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.670Z",
  updatedAt: "2025-12-08T19:19:14.446Z"
},
{
  _id: "65a7e45902e12c44f5994494",
  title: "Vợt cầu lông Yonex ArcSaber 0 Ability",
  description: "Vợt trọng lượng nhẹ nhưng có độ bền cao, giúp người chơi thao tác linh hoạt và chính xác. Tay cầm êm, hạn chế trơn trượt khi ra mồ hôi.",
  price: 194,
  discountPercentage: 14.65,
  category: "65a7e24602e12c44f599443a",
  brand: "65a7e20102e12c44f59943ed",
  stockQuantity: 17,
  thumbnail: "http://localhost:8000/public/image/vot12.jpg",
  images: [
    "http://localhost:8000/public/image/vot11.jpg",
    "http://localhost:8000/public/image/vot12.jpg",
    "http://localhost:8000/public/image/vot11.jpg",
    "http://localhost:8000/public/image/vot12.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:32:59.462Z"
},
{
  _id: "65a7e45902e12c44f5994495",
  title: "Vợt cầu lông Lining Aeronaut 9000C 4U",
  description: "Thiết kế khung vợt tối ưu lực đánh, hỗ trợ tạo lực mạnh mà không tốn nhiều sức. Phù hợp từ người mới chơi đến người có kinh nghiệm.",
  price: 441,
  discountPercentage: 17.5,
  category: "65a7e24602e12c44f599443a",
  brand: "65a7e20102e12c44f59943ee",
  stockQuantity: 27,
  thumbnail: "http://localhost:8000/public/image/vot21.jpg",
  images: [
    "http://localhost:8000/public/image/vot22.jpg",
    "http://localhost:8000/public/image/vot23.jpg",
    "http://localhost:8000/public/image/vot24.jpg",
    "http://localhost:8000/public/image/vot25.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:37:55.848Z"
},
{
  _id: "65a7e45902e12c44f5994496",
  title: "Vợt cầu lông Astec YouLong",
  description: "Chất liệu cao cấp giúp vợt chịu được va đập tốt. Kiểu dáng thể thao, chắc chắn và dễ điều khiển dalam mọi tình huống.",
  price: 441,
  discountPercentage: 10.39,
  category: "65a7e24602e12c44f599443a",
  brand: "65a7e20102e12c44f59943f1",
  stockQuantity: 101,
  thumbnail: "http://localhost:8000/public/image/vot31.jpg",
  images: [
    "http://localhost:8000/public/image/vot32.jpg",
    "http://localhost:8000/public/image/vot33.jpg",
    "http://localhost:8000/public/image/vot34.jpg",
    "http://localhost:8000/public/image/vot35.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:42:20.215Z"
},
{
  _id: "65a7e45902e12c44f5994497",
  title: "Leather Hand Bag",
  description: "It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.",
  price: 57,
  discountPercentage: 11.19,
  category: "65a7e24602e12c44f599443a",
  brand: "65a7e20102e12c44f5994414",
  stockQuantity: 43,
  thumbnail: "https://cdn.dummyjson.com/product-images/74/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/74/1.jpg",
    "https://cdn.dummyjson.com/product-images/74/2.jpg",
    "https://cdn.dummyjson.com/product-images/74/3.jpg",
    "https://cdn.dummyjson.com/product-images/74/4.jpg",
    "https://cdn.dummyjson.com/product-images/74/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:22:46.720Z"
},
{
  _id: "65a7e45902e12c44f5994498",
  title: "Seven Pocket Women Bag",
  description: "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
  price: 68,
  discountPercentage: 14.87,
  category: "65a7e24602e12c44f599443a",
  brand: "65a7e20102e12c44f5994415",
  stockQuantity: 13,
  thumbnail: "https://cdn.dummyjson.com/product-images/75/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/75/1.jpg",
    "https://cdn.dummyjson.com/product-images/75/2.jpg",
    "https://cdn.dummyjson.com/product-images/75/3.jpg",
    "https://cdn.dummyjson.com/product-images/75/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:22:44.252Z"
},
{
  _id: "65a7e45902e12c44f5994499",
  title: "Vợt Pickleball Joola Tyson McGuffin Magnus 3",
  description: "Vợt Pickleball Joola Tyson McGuffin Magnus 3",
  price: 703,
  discountPercentage: 13.57,
  category: "65a7e24602e12c44f599443b",
  brand: "65a7e20102e12c44f59943f2",
  stockQuantity: 51,
  thumbnail: "http://localhost:8000/public/image/pick11.jpg",
  images: [
    "http://localhost:8000/public/image/pick11.jpg",
    "http://localhost:8000/public/image/pick12.jpg",
    "http://localhost:8000/public/image/pick13.jpg",
    "http://localhost:8000/public/image/pick13.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:46:07.040Z"
},
{
  _id: "65a7e45902e12c44f599449a",
  title: "Vợt Pickleball Winstar Kabon T700",
  description: "Thiết kế khung vợt tối ưu lực đánh, hỗ trợ tạo lực mạnh mà không tốn nhiều sức. Phù hợp từ người mới chơi đến người có kinh nghiệm.",
  price: 1002,
  discountPercentage: 3.22,
  category: "65a7e24602e12c44f599443b",
  brand: "65a7e20102e12c44f59943f1",
  stockQuantity: 149,
  thumbnail: "http://localhost:8000/public/image/pick21.jpg",
  images: [
    "http://localhost:8000/public/image/pick21.jpg",
    "http://localhost:8000/public/image/pick22.jpg",
    "http://localhost:8000/public/image/pick21.jpg",
    "http://localhost:8000/public/image/pick22.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:48:16.996Z"
},
{
  _id: "65a7e45902e12c44f599449b",
  title: "Vợt Pickleball AkPro Tour-Air Carbon 3K",
  description: "Trọng lượng nhẹ nhưng có độ bền cao, giúp người chơi thao tác linh hoạt và chính xác. Tay cầm êm, hạn chế trơn trượt khi ra mồ hôi.",
  price: 1020,
  discountPercentage: 8.02,
  category: "65a7e24602e12c44f599443b",
  brand: "65a7e20102e12c44f59943f0",
  stockQuantity: 9,
  thumbnail: "http://localhost:8000/public/image/pick31.jpg",
  images: [
    "http://localhost:8000/public/image/pick32.jpg",
    "http://localhost:8000/public/image/pick31.jpg",
    "http://localhost:8000/public/image/pick33.jpg",
    "http://localhost:8000/public/image/pick31.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:51:18.423Z"
},
{
  _id: "65a7e45902e12c44f599449c",
  title: "Elegant Female Pearl Earrings",
  description: "Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set",
  price: 30,
  discountPercentage: 12.8,
  category: "65a7e24602e12c44f599443b",
  brand: "65a7e20102e12c44f5994417",
  stockQuantity: 16,
  thumbnail: "https://cdn.dummyjson.com/product-images/79/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/79/1.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:48:38.378Z"
},
{
  _id: "65a7e45902e12c44f599449d",
  title: "Chain Pin Tassel Earrings",
  description: "Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)",
  price: 45,
  discountPercentage: 17.75,
  category: "65a7e24602e12c44f599443b",
  brand: "65a7e20102e12c44f5994418",
  stockQuantity: 9,
  thumbnail: "https://cdn.dummyjson.com/product-images/80/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/80/1.jpg",
    "https://cdn.dummyjson.com/product-images/80/2.jpg",
    "https://cdn.dummyjson.com/product-images/80/3.png",
    "https://cdn.dummyjson.com/product-images/80/4.jpg",
    "https://cdn.dummyjson.com/product-images/80/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:48:39.455Z"
},
{
  _id: "65a7e45902e12c44f599449e",
  title: "DÂY NHẢY DÂY MS116 TĂNG THỂ LỰC – TẬP LUYỆN BỔ TRỢ TẠI NHÀ",
  description: "Dây nhảy nhẹ và xoay mượt, rất phù hợp cho luyện tập mỗi ngày. Tay cầm chống trượt giúp tập lâu vẫn thoải mái.",
  price: 19,
  discountPercentage: 10.1,
  category: "65a7e24602e12c44f599443c",
  brand: "65a7e20102e12c44f59943e7",
  stockQuantity: 78,
  thumbnail: "http://localhost:8000/public/image/day11.jpg",
  images: [
    "http://localhost:8000/public/image/day11.jpg",
    "http://localhost:8000/public/image/day11.jpg",
    "http://localhost:8000/public/image/day11.jpg",
    "http://localhost:8000/public/image/day11.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:53:55.271Z"
},
{
  _id: "65a7e45902e12c44f599449f",
  title: "DÂY NHẢY LÕI THÉP MS110",
  description: "Thiết kế bền chắc, phù hợp cả người mới tập và người luyện chuyên sâu. Giúp tăng sức bền và đốt calo hiệu quả.",
  price: 14,
  discountPercentage: 15.6,
  category: "65a7e24602e12c44f599443c",
  brand: "65a7e20102e12c44f59943e5",
  stockQuantity: 78,
  thumbnail: "http://localhost:8000/public/image/day21.jpg",
  images: [
    "http://localhost:8000/public/image/day21.jpg",
    "http://localhost:8000/public/image/day21.jpg",
    "http://localhost:8000/public/image/day21.jpg",
    "http://localhost:8000/public/image/day21.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:55:32.743Z"
},
{
  _id: "65a7e45902e12c44f59944a0",
  title: "Wiley X Night Vision Yellow Glasses",
  description: "Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches",
  price: 30,
  discountPercentage: 6.33,
  category: "65a7e24602e12c44f599443c",
  brand: "65a7e20102e12c44f599441a",
  stockQuantity: 115,
  thumbnail: "https://cdn.dummyjson.com/product-images/83/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/83/1.jpg",
    "https://cdn.dummyjson.com/product-images/83/2.jpg",
    "https://cdn.dummyjson.com/product-images/83/3.jpg",
    "https://cdn.dummyjson.com/product-images/83/4.jpg",
    "https://cdn.dummyjson.com/product-images/83/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:54:17.890Z"
},
{
  _id: "65a7e45902e12c44f59944a1",
  title: "Square Sunglasses",
  description: "Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059",
  price: 28,
  discountPercentage: 13.89,
  category: "65a7e24602e12c44f599443c",
  brand: "65a7e20102e12c44f599441a",
  stockQuantity: 64,
  thumbnail: "https://cdn.dummyjson.com/product-images/84/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/84/1.jpg",
    "https://cdn.dummyjson.com/product-images/84/2.jpg",
    "https://cdn.dummyjson.com/product-images/84/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:51:37.548Z"
},
{
  _id: "65a7e45902e12c44f59944a2",
  title: "LouisWill Men Sunglasses",
  description: "LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers",
  price: 50,
  discountPercentage: 11.27,
  category: "65a7e24602e12c44f599443c",
  brand: "65a7e20102e12c44f5994413",
  stockQuantity: 92,
  thumbnail: "https://cdn.dummyjson.com/product-images/85/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/85/1.jpg",
    "https://cdn.dummyjson.com/product-images/85/2.jpg",
    "https://cdn.dummyjson.com/product-images/85/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T19:51:36.365Z"
},
{
  _id: "65a7e45902e12c44f59944a3",
  title: "Đồng hồ Garmin Forerunner 245",
  description: "Mặt kính chống trầy, hiển thị rõ ràng trong nhiều điều kiện ánh sáng. Dây đeo êm, nhẹ và thoải mái.",
  price: 196,
  discountPercentage: 10.56,
  category: "65a7e24602e12c44f599443d",
  brand: "65a7e20102e12c44f5994417",
  stockQuantity: 22,
  thumbnail: "http://localhost:8000/public/image/dongho11.jpg",
  images: [
    "http://localhost:8000/public/image/dongho11.jpg",
    "http://localhost:8000/public/image/dongho12.jpg",
    "http://localhost:8000/public/image/dongho13.jpg",
    "http://localhost:8000/public/image/dongho14.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T20:01:48.266Z"
},
{
  _id: "65a7e45902e12c44f59944a4",
  title: "Đồng hồ Garmin Instinct",
  description: "Phù hợp đi làm, đi chơi hoặc tập luyện. Độ bền cao, sử dụng ổn định trong thời gian dài.",
  price: 401,
  discountPercentage: 11.3,
  category: "65a7e24602e12c44f599443d",
  brand: "65a7e20102e12c44f5994417",
  stockQuantity: 37,
  thumbnail: "http://localhost:8000/public/image/dongho21.jpg",
  images: [
    "http://localhost:8000/public/image/dongho22.jpg",
    "http://localhost:8000/public/image/dongho23.jpg",
    "http://localhost:8000/public/image/dongho24.jpg",
    "http://localhost:8000/public/image/dongho22.jpg"
  ],
  isDeleted: false,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T20:04:21.012Z"
},
{
  _id: "65a7e45902e12c44f59944a5",
  title: "TC Reusable Silicone Magic Washing Gloves",
  description: "TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose",
  price: 29,
  discountPercentage: 3.19,
  category: "65a7e24602e12c44f599443d",
  brand: "65a7e20102e12c44f599441d",
  stockQuantity: 42,
  thumbnail: "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/88/1.jpg",
    "https://cdn.dummyjson.com/product-images/88/2.jpg",
    "https://cdn.dummyjson.com/product-images/88/3.jpg",
    "https://cdn.dummyjson.com/product-images/88/4.webp",
    "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T20:00:41.200Z"
},
{
  _id: "65a7e45902e12c44f59944a6",
  title: "Qualcomm original Car Charger",
  description: "best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all",
  price: 40,
  discountPercentage: 17.53,
  category: "65a7e24602e12c44f599443d",
  brand: "65a7e20102e12c44f599441d",
  stockQuantity: 79,
  thumbnail: "https://cdn.dummyjson.com/product-images/89/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/89/1.jpg",
    "https://cdn.dummyjson.com/product-images/89/2.jpg",
    "https://cdn.dummyjson.com/product-images/89/3.jpg",
    "https://cdn.dummyjson.com/product-images/89/4.jpg",
    "https://cdn.dummyjson.com/product-images/89/thumbnail.jpg"
  ],
  isDeleted: true,
  createdAt: "2025-12-07T18:09:44.671Z",
  updatedAt: "2025-12-08T20:29:08.775Z"
},
{
  _id: "65a7e45902e12c44f59944a7",
  title: "Cycle Bike Glow",
  description: "Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w",
  price: 35,
  discountPercentage: 11.08,
  category: "65a7e24602e12c44f599443d",
  brand: "65a7e20102e12c44f599441e",
  stockQuantity: 63,
  thumbnail: "https://cdn.dummyjson.com/product-images/90/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/90/1.jpg",
    "https://cdn.dummyjson.com/product-images/90/2.jpg",
    "https://cdn.dummyjson.com/product-images/90/3.jpg",
    "https://cdn.dummyjson.com/product-images/90/4.jpg",
    "https://cdn.dummyjson.com/product-images/90/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T20:29:13.146Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944a8",
  title: "Balo ngăn ẩn đựng giày Daily Backpack BP001U0",
  description: "Ba lô được thiết kế đa ngăn tiện lợi, giúp sắp xếp đồ dùng gọn gàng. Chất liệu bền, chống thấm nhẹ khi đi mưa.",
  price: 569,
  discountPercentage: 13.63,
  category: "65a7e24602e12c44f599443e",
  brand: "65a7e20102e12c44f59943da",
  stockQuantity: 115,
  thumbnail: "http://localhost:8000/public/image/balo11.jpg",
  images: [
    "http://localhost:8000/public/image/balo12.jpg",
    "http://localhost:8000/public/image/balo13.jpg",
    "http://localhost:8000/public/image/balo14.jpg",
    "http://localhost:8000/public/image/balo15.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T20:07:16.096Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944a9",
  title: "Túi Tote Canvas Pickleball DELTAHOLIC CB001U0",
  description: "Túi đeo nhỏ gọn, tiện mang theo các vật dụng cần thiết. Chất liệu bền, không dễ trầy xước.\n\nĐoạn 2:",
  price: 92,
  discountPercentage: 14.4,
  category: "65a7e24602e12c44f599443e",
  brand: "65a7e20102e12c44f59943e0",
  stockQuantity: 22,
  thumbnail: "http://localhost:8000/public/image/balo21.jpg",
  images: [
    "http://localhost:8000/public/image/balo22.jpg",
    "http://localhost:8000/public/image/balo23.jpg",
    "http://localhost:8000/public/image/balo24.jpg",
    "http://localhost:8000/public/image/balo25.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T20:10:34.332Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944aa",
  title: "Automatic Motor Gas Motorcycles",
  description: "150cc 4-Stroke Motorcycle Automatic Motor Gas Motorcycles Scooter motorcycles 150cc scooter",
  price: 1050,
  discountPercentage: 3.34,
  category: "65a7e24602e12c44f599443e",
  brand: "65a7e20102e12c44f5994421",
  stockQuantity: 127,
  thumbnail: "https://cdn.dummyjson.com/product-images/93/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/93/1.jpg",
    "https://cdn.dummyjson.com/product-images/93/2.jpg",
    "https://cdn.dummyjson.com/product-images/93/3.jpg",
    "https://cdn.dummyjson.com/product-images/93/4.jpg",
    "https://cdn.dummyjson.com/product-images/93/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T20:07:26.112Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944ab",
  title: "new arrivals Fashion motocross goggles",
  description: "new arrivals Fashion motocross goggles motorcycle motocross racing motorcycle",
  price: 900,
  discountPercentage: 3.85,
  category: "65a7e24602e12c44f599443e",
  brand: "65a7e20102e12c44f5994422",
  stockQuantity: 109,
  thumbnail: "https://cdn.dummyjson.com/product-images/94/thumbnail.webp",
  images: [
    "https://cdn.dummyjson.com/product-images/94/1.webp",
    "https://cdn.dummyjson.com/product-images/94/2.jpg",
    "https://cdn.dummyjson.com/product-images/94/3.jpg",
    "https://cdn.dummyjson.com/product-images/94/thumbnail.webp"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T20:07:25.292Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944ac",
  title: "Wholesale cargo lashing Belt",
  description: "Wholesale cargo lashing Belt Tie Down end Ratchet strap customized strap 25mm motorcycle 1500kgs with rubber handle",
  price: 930,
  discountPercentage: 17.67,
  category: "65a7e24602e12c44f599443e",
  brand: "65a7e20102e12c44f5994423",
  stockQuantity: 144,
  thumbnail: "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/95/1.jpg",
    "https://cdn.dummyjson.com/product-images/95/2.jpg",
    "https://cdn.dummyjson.com/product-images/95/3.jpg",
    "https://cdn.dummyjson.com/product-images/95/4.jpg",
    "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T20:07:24.053Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944ad",
  title: "Bộ Kính Thể Thao Siêu Nhẹ 2 Chức Năng Thích Hợp Chạy Bộ Bóng Rổ Bóng Đá – Bản 2025 Dây Chun",
  description: "Kính chống tia UV, chống bụi và chống chói khi hoạt động ngoài trời. Tròng kính trong suốt cho tầm nhìn rõ ràng.",
  price: 30,
  discountPercentage: 14.89,
  category: "65a7e24602e12c44f599443f",
  brand: "65a7e20102e12c44f59943ee",
  stockQuantity: 96,
  thumbnail: "http://localhost:8000/public/image/kinh11.jpg",
  images: [
    "http://localhost:8000/public/image/kinh11.jpg",
    "http://localhost:8000/public/image/kinh12.jpg",
    "http://localhost:8000/public/image/kinh13.jpg",
    "http://localhost:8000/public/image/kinh14.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T20:14:47.424Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944ae",
  title: "Gọng Kính Đá Bóng Chịu Lực Góc Rộng – Panlees JH831 Đen",
  description: "Thiết kế ôm sát khuôn mặt, nhẹ và đeo lâu không bị đau tai. Phù hợp chạy bộ, đá bóng, đạp xe hoặc du lịch.",
  price: 38,
  discountPercentage: 10.94,
  category: "65a7e24602e12c44f599443f",
  brand: "65a7e20102e12c44f59943df",
  stockQuantity: 146,
  thumbnail: "http://localhost:8000/public/image/kinh21.jpg",
  images: [
    "http://localhost:8000/public/image/kinh21.jpg",
    "http://localhost:8000/public/image/kinh21.jpg",
    "http://localhost:8000/public/image/kinh21.jpg",
    "http://localhost:8000/public/image/kinh21.jpg"
  ],
  isDeleted: false,
  updatedAt: "2025-12-08T20:16:43.050Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944af",
  title: "3 lights lndenpant kitchen islang",
  description: "3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier",
  price: 34,
  discountPercentage: 5.92,
  category: "65a7e24602e12c44f599443f",
  brand: "65a7e20102e12c44f5994426",
  stockQuantity: 44,
  thumbnail: "https://cdn.dummyjson.com/product-images/98/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/98/1.jpg",
    "https://cdn.dummyjson.com/product-images/98/2.jpg",
    "https://cdn.dummyjson.com/product-images/98/3.jpg",
    "https://cdn.dummyjson.com/product-images/98/4.jpg",
    "https://cdn.dummyjson.com/product-images/98/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T20:10:53.344Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944b0",
  title: "American Vintage Wood Pendant Light",
  description: "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
  price: 46,
  discountPercentage: 8.84,
  category: "65a7e24602e12c44f599443f",
  brand: "65a7e20102e12c44f5994425",
  stockQuantity: 138,
  thumbnail: "https://cdn.dummyjson.com/product-images/99/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/99/1.jpg",
    "https://cdn.dummyjson.com/product-images/99/2.jpg",
    "https://cdn.dummyjson.com/product-images/99/3.jpg",
    "https://cdn.dummyjson.com/product-images/99/4.jpg",
    "https://cdn.dummyjson.com/product-images/99/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T20:10:54.005Z",
  createdAt: "2025-12-07T18:09:44.671Z"
},
{
  _id: "65a7e45902e12c44f59944b1",
  title: "Crystal chandelier maria theresa for 12 light",
  description: "Crystal chandelier maria theresa for 12 light",
  price: 47,
  discountPercentage: 16,
  category: "65a7e24602e12c44f599443f",
  brand: "65a7e20102e12c44f5994427",
  stockQuantity: 133,
  thumbnail: "https://cdn.dummyjson.com/product-images/100/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/100/1.jpg",
    "https://cdn.dummyjson.com/product-images/100/2.jpg",
    "https://cdn.dummyjson.com/product-images/100/3.jpg",
    "https://cdn.dummyjson.com/product-images/100/thumbnail.jpg"
  ],
  isDeleted: true,
  updatedAt: "2025-12-08T20:10:55.722Z",
  createdAt: "2025-12-07T18:09:44.671Z"
}
];

exports.seedProduct = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.error(error);
  }
};
