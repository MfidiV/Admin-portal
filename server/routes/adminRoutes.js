// adminRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const Admin = require('../models/admin.modal');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = uuidv4();
        cb(null, uniqueSuffix + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Route to handle admin addition
router.post('/add', upload.single('photo'), (req, res) => {
    const { name, surname, birthdate, role } = req.body;
    const photo = req.file.filename;

    // Create a new Admin instance with the data
    const newAdmin = new Admin({ name, surname, birthdate, photo, role });

    // Save the newAdmin instance to the database
    newAdmin.save()
        .then((admin) => {
            res.status(201).json(admin); // Return the saved admin object as JSON
        })
        .catch(err => {
            if (err.code === 11000 && err.keyPattern && err.keyPattern.hasOwnProperty('username')) {
                // Handle duplicate key error for the 'username' field
                res.status(400).json('Error: Username already exists.');
            } else {
                res.status(400).json('Error: ' + err);
            }
        });
});

module.exports = router;
