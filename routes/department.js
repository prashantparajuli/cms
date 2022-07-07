const express = require('express');
const router = express.Router();
const { departmentController } = require('../controllers');

router.get('/add-department', departmentController.getAddDepartment);
router.get('/department', departmentController.getDepartment);
router.post('/add-department', departmentController.addDepartment);
router.get('/delete-department/:id', departmentController.deleteDepartment);
router.get('/edit-department/:id', departmentController.getOneDepartment);
router.post('/edit-department/:id', departmentController.updateDepartment);

module.exports = router;