exports.createReview = async (req, res) => {
  const { rating, comment, productId } = req.body;

  const review = await Review.create({
    user: req.user._id,
    product: productId,
    rating,
    comment,
  });

  res.status(201).json(review);
};
