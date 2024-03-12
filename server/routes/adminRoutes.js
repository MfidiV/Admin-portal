// adminRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const bcrypt = require('bcrypt');
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
router.post('/add', upload.single('photo'), async (req, res) => {
    const { name, surname, email,  password, birthdate, role } = req.body;
    const photo = req.file.filename;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new Admin instance with the data
        const newAdmin = new Admin({ name, surname, email, password: hashedPassword, birthdate, photo, role });

        // Save the newAdmin instance to the database
        const admin = await newAdmin.save();

        res.status(201).json(admin); // Return the saved admin object as JSON
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
