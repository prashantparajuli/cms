const express = require('express');
const router = express.Router();


// importing routes
const authRouter = require('./auth');
const departmentRouter = require('./department');
const departmentMemberRouter = require('./departmentMember');
const projectRouter = require('./project');
const dashboardRouter = require('./dashboard');

router.use('/', authRouter);
router.use('/', departmentRouter);
router.use('/', departmentMemberRouter);
router.use('/', projectRouter);
router.use('/', dashboardRouter);

module.exports = router;