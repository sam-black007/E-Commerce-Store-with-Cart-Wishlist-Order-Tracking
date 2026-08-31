const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ cart: { items: [], totalPrice: 0 } });
});

router.post('/add', (req, res) => {
  res.json({ cart: { items: [], totalPrice: 0 } });
});

module.exports = router;