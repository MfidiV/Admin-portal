// routes.js
const express = require('express');
const router = express.Router();
const FormData = require('./FormData');

router.post('/submit-form', (req, res) => {
    const formData = req.body;
    
    const newFormData = new FormData(formData);
    newFormData.save()
        .then(savedData => {
            console.log(savedData);
            res.status(200).json({ message: "Form data saved successfully" });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: "An error occurred while saving form data" });
        });
});

module.exports = router;
