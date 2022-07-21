const express = require('express');
const router = express.Router();
const { departmentController } = require('../controllers');
const { departmentValidator, checkErrors } = require('../validations');


router.get('/add-department', departmentController.getAddDepartment);
router.get('/department', departmentController.getDepartment);
router.post('/add-department', departmentValidator, checkErrors, departmentController.addDepartment);
router.get('/delete-department/:id', departmentController.deleteDepartment);
router.get('/edit-department/:id', departmentController.getOneDepartment);
router.post('/edit-department/:id', departmentValidator, checkErrors, departmentController.updateDepartment);

module.exports = router;