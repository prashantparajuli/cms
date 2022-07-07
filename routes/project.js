const express = require('express');
const router = express.Router();
const { projectController } = require('../controllers');

router.get('/project', projectController.viewProject);
router.get('/add-project', projectController.getAddProject);
router.post('/add-project', projectController.addProject);
router.get('/delete-project/:id', projectController.deleteProject);
router.get('/edit-project/:id', projectController.getOneProject);
router.post('/edit-project/:id', projectController.updateProject);
module.exports = router;