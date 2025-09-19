const express = require('express');
const router = express.Router();
const db = require('../db'); // import database connection
const bcrypt = require('bcrypt');

// Mentor Registration Route
router.post('/register', async(req, res) => {
    const { fullname, email, password } = req.body;

    // Validation
    if (!fullname || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Encrypt password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert mentor into database
        const sql = 'INSERT INTO mentors (fullname, email, password) VALUES (?, ?, ?)';
        db.query(sql, [fullname, email, hashedPassword], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ message: 'Email already exists' });
                }
                return res.status(500).json({ message: 'Database error', error: err });
            }
            res.status(201).json({ message: 'Mentor registered successfully', mentorId: result.insertId });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;