const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');

// Get wishlist
exports.getWishlist = async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ userId: req.userId }).populate('products');
    if (!wishlist) {
      return res.status(200).json({ items: [] });
    }
    res.status(200).json({ items: wishlist.products || [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add to wishlist
exports.addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let wishlist = await Wishlist.findOne({ userId: req.userId });

    if (!wishlist) {
      wishlist = new Wishlist({
        userId: req.userId,
        products: [productId],
      });
    } else {
      if (!wishlist.products.includes(productId)) {
        wishlist.products.push(productId);
      }
    }

    await wishlist.save();
    await wishlist.populate('products');
    res.status(200).json({ items: wishlist.products || [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove from wishlist
exports.removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.params;

    let wishlist = await Wishlist.findOne({ userId: req.userId });
    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    wishlist.products = wishlist.products.filter((id) => id.toString() !== productId);
    await wishlist.save();
    await wishlist.populate('products');

    res.status(200).json({ items: wishlist.products || [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Check if in wishlist
exports.isInWishlist = async (req, res) => {
  try {
    const { productId } = req.params;
    const wishlist = await Wishlist.findOne({ userId: req.userId });

    if (!wishlist) {
      return res.status(200).json({ inWishlist: false });
    }

    const inWishlist = wishlist.products.includes(productId);
    res.status(200).json({ inWishlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};