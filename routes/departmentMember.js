const express = require('express');
const router = express.Router();
const { departmentMemberController } = require('../controllers');

router.get('/department-member', departmentMemberController.getDepartmentMember);
router.get('/add-department-member', departmentMemberController.getAddDepartmentMember);
router.post('/department-member', departmentMemberController.postDepartmentMember);
router.get('/delete-department-member/:id', departmentMemberController.deleteDepartmentMember);




module.exports = router;