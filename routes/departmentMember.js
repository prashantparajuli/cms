const express = require('express');
const router = express.Router();
const { departmentMemberController } = require('../controllers');

router.get('/department/department-member', departmentMemberController.getDepartmentMember);
router.get('/department/add-department-member', departmentMemberController.getAddDepartmentMember);
router.post('/department/department-member', departmentMemberController.postDepartmentMember);
router.get('/department/delete-department-member/:id', departmentMemberController.deleteDepartmentMember);




module.exports = router;