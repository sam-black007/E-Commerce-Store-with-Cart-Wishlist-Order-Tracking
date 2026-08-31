const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.status(201).json({ token: 'test-token', user: { name: 'Test' } });
});

router.post('/login', (req, res) => {
  res.status(200).json({ token: 'test-token', user: { name: 'Test' } });
});

module.exports = router;