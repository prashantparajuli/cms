const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const dashboardRouter = require('./dashboard');

router.use('/', authRouter);
router.use('/', dashboardRouter);

module.exports = router;