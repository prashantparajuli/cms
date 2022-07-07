const express = require('express');
const router = express.Router();
const { projectController } = require('../controllers');

router.get('/project', projectController.viewProject);
router.get('/add-project', projectController.getAddProject);
router.post('/add-project', projectController.addProject);


module.exports = router;