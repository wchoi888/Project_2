// controllers/authController.js

// Export modules
const express = require('express');
const passport = require('../config/passport');
const db = require('../models');
const router = express.Router();

// Route to handle user signup
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the username is already taken
        const existingUser = await db.User.findOne({ where: { username } });

        if (existingUser) {
            return res.render('signup', { errorMessage: 'Username is already taken.'});
        }

    // Create a new user
    const newUser = await db.User.create({ username, password });

    // Log in the new user
    req.login(newUser, err => {
        if (err) {
            console.error(err);
            return res.render('signup', { errorMessage: 'Error logging in after signup.'});
        }
        return res.redirect('/dashboard'); // Redirect to the user's dashboard or any other page
    });
} catch (error) {
    console.error(error);
    res.status(500).render('signup', {errorMessage: 'Internal Server Error' });
}
});

module.exports = router;