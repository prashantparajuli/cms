const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const passport = require('passport');


router.get('/login', authController.login);

router.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',

    failureRedirect: '/login'
}));

module.exports = router;