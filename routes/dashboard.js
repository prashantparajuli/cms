const express = require('express');
const router = express.Router();
const { dashboardController } = require('../controllers');
const { checkLoggedIn } = require('../middlewares');


router.get('/dashboard', checkLoggedIn, dashboardController.dashboard);

module.exports = router;