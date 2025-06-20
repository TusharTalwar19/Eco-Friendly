const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

const db = require('./dbconfig'); 

router.post('/api/products', upload.single('image'), (req, res) => {
  const { title, price } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!title || !price || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO products (title, price, image) VALUES (?, ?, ?)';
  db.query(sql, [title, price, image], (err, result) => {
    if (err) {
      console.error('Error inserting product:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Product added successfully' });
  });
});

module.exports = router;
