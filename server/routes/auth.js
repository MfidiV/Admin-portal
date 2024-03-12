const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
require('dotenv').config();

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!email || admin.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    // console.log(token);

    res.json({ message: 'Login successful', admin, token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
});

module.exports = router;
