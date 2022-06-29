const express = require('express');
const router = express.Router();

const authRouter = require('./auth');

router.use('/', authRouter);

module.exports = router;