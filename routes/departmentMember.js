const express = require('express');
const router = express.Router();
const { departmentMemberController } = require('../controllers');

// router.get('/department/department-member', departmentMemberController.getDepartmentMember);
router.post('/department/department-member', departmentMemberController.postDepartmentMember);

module.exports = router;