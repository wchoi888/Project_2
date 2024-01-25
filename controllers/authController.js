// controllers/authController.js

// Export modules
const express = require('express');
const passport = require('../config/passport');
const db = require('../models');
const router = express.Router();

// Route to handle user signup
router.post('/signup', (req, res) => {
    db.User.create({
        username: req.body.username,
        password: req.body.password,
    }).then(user => {
        res.json(user);
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Error creating user.' });
    });
});

router.post('/login', (req, res, next) => { 
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed.' });
        }
        req.login(user, (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return res.status(500).json({ error: 'Internal server error.' });
            }
            return res.json(user);
        });
    })(req, res, next);
    
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

module.exports = router;