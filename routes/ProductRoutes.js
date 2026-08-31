const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('GET /api/products called');
  res.json({ products: [] });
});

router.post('/', (req, res) => {
  console.log('POST /api/products called');
  res.status(201).json({
    _id: Date.now(),
    name: req.body.name,
    price: req.body.price
  });
});

module.exports = router;