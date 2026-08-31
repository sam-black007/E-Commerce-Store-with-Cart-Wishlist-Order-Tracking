const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ wishlist: { products: [] } });
});

router.post('/add', (req, res) => {
  res.json({ wishlist: { products: [] } });
});

router.delete('/remove/:id', (req, res) => {
  res.json({ wishlist: { products: [] } });
});

module.exports = router;