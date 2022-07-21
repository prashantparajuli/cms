const express = require('express');
const router = express.Router();
const { projectMemberController } = require('../controllers');

router.get('/project/project-member', projectMemberController.getProjectMember);
router.post('/project/project-member', projectMemberController.postProjectMember);
router.get('/project/addproject-member', projectMemberController.addProjectMember);
router.get('/delete-project-member/:pid/:uid', projectMemberController.deleteProjectMember);
module.exports = router;