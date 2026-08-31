const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ orders: [] });
});

router.post('/', (req, res) => {
  res.status(201).json({ orderId: 'ORD-123', status: 'pending' });
});

module.exports = router;