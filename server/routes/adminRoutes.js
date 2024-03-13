// adminRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const bcrypt = require('bcrypt');
const Admin = require('../models/admin.modal');
const jwt = require('jsonwebtoken'); // Import jwt module

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

const verifyTokenAndFetchAdmin = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        // Verify the token and decode it to get the admin's ID
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Find the admin by ID
        const admin = await Admin.findById(decoded.id);

        // If admin is not found, return a 404 status
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Set the admin information in the request object
        req.admin = admin;
        next();
    } catch (error) {
        console.error('Error fetching admin info:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
};

// Route to get admin information
router.get('/admin', verifyTokenAndFetchAdmin, (req, res) => {
    // Return the admin data from the request object
    res.json({ admin: req.admin });
});

module.exports = router;
