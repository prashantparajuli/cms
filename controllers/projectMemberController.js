const { ProjectMember, Project, User } = require('../models');
exports.addProjectMember = (req, res) => {
    res.render('./admin/project/addproject-member')
}
exports.getProjectMember = async(req, res) => {
    const data = await Project.findAll({
        include: [{
            model: ProjectMember,
            as: 'projectMember',
            include: [{
                model: User,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName']
            }]
        }]
    })
    res.render('./admin/project/viewproject-member', { data: data })
        // ProjectMember.findAll({ include: [{ model: Project, as: 'project' },{ model: User, as: 'user' }] }).then((data) => {
        //     console.log(data)
        //     res.render('./admin/project/viewproject-member', { data: data });
        // }).catch((error) => {
        //     res.send(error);
        // })
}
exports.postProjectMember = async(req, res) => {
    const data = req.body;
    ProjectMember.create(data).then((result) => {
        // res.json({ message: 'added successfully', result });
        req.flash('info', 'project member added successfully');
        res.redirect('/project/project-member');
    }).catch((error) => {
        //req.flash('info', error)
        res.json(error)
    })

}
exports.deleteProjectMember = (req, res) => {
    ProjectMember.destroy({ where: { userId: req.params.id } }).then((data) => {
        req.flash('info', 'deleted successfully');
        res.redirect('/project/project-member');
    })
}