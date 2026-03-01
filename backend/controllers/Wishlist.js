const Wishlist = require("../models/Wishlist")
const Product = require("../models/Product")

exports.create = async (req, res) => {
  try {
    const { user, product, note } = req.body

    // 1. Check product tồn tại
    const productExists = await Product.findById(product)
    if (!productExists) {
      return res.status(404).json({ message: "Product not found" })
    }

    // 2. Không cho trùng wishlist
    const exists = await Wishlist.findOne({ user, product })
    if (exists) {
      return res.status(400).json({ message: "Product already in wishlist" })
    }

    // 3. Tạo wishlist
    const wishlist = await Wishlist.create({
      user,
      product,
      note,
    })

    // 4. Populate sau khi create
    const populatedWishlist = await Wishlist.findById(wishlist._id)
      .populate({ path: "product", populate: ["brand"] })

    res.status(201).json(populatedWishlist)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error adding product to wishlist" })
  }
}
exports.getByUserId = async (req, res) => {
  try {
    const { id } = req.params
    let skip = 0
    let limit = 0

    if (req.query.page && req.query.limit) {
      const pageSize = Number(req.query.limit)
      const page = Number(req.query.page)
      skip = pageSize * (page - 1)
      limit = pageSize
    }

    const wishlist = await Wishlist.find({ user: id })
      .skip(skip)
      .limit(limit)
      .populate({ path: "product", populate: ["brand"] })

    //  LỌC PRODUCT ĐÃ BỊ XOÁ
    const safeWishlist = wishlist.filter(item => item.product !== null)

    const totalResults = await Wishlist.countDocuments({ user: id })

    res.set("X-Total-Count", totalResults)
    res.status(200).json(safeWishlist)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error fetching your wishlist" })
  }
}

exports.updateById=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await Wishlist.findByIdAndUpdate(id,req.body,{new:true}).populate("product")
        res.status(200).json(updated)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error updating your wishlist, please try again later"})
    }
}
exports.deleteById=async(req,res)=>{
    try {
        const {id}=req.params
        const deleted=await Wishlist.findByIdAndDelete(id)
        return res.status(200).json(deleted)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error deleting that product from wishlist, please try again later"})
    }
}