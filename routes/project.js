const express = require('express');
const router = express.Router();
const { projectController } = require('../controllers');
const { projectValidator, checkErrors } = require('../validations');

router.get('/project', projectController.viewProject);
router.get('/add-project', projectController.getAddProject);
router.post('/add-project', projectValidator, checkErrors, projectController.addProject);
router.get('/delete-project/:id', projectController.deleteProject);
router.get('/edit-project/:id', projectController.getOneProject);
router.post('/edit-project/:id', projectValidator, checkErrors, projectController.updateProject);
module.exports = router;