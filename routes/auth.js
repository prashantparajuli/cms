const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const passport = require('passport');


router.get('/login', authController.login);

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/register', authController.register)
router.get('/user', authController.getUser);
router.post('/user', authController.addUser);
router.get('/user/:id', authController.getUserById);

router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('../auth/login')
})


// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next()
//     }

//     res.redirect('/login')
// }

// function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return res.redirect('/')
//     }
//     next()
// }


module.exports = router;