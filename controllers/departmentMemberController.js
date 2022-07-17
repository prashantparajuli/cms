const { Department, DepartmentMember, User } = require('../models');

exports.getDepartmentMember = async(req, res) => {
    const data = await Department.findAll({
        include: [{
            model: DepartmentMember,
            as: 'departmentMember',
            include: [{
                model: User,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName']
            }]
        }]
    })
    res.render('./admin/department/department-member/view-department-member', { data: data })
        // res.json({ data: data });
}
exports.getAddDepartmentMember = async(req, res) => {
    res.render('./admin/department/department-member/add-department-member');
}
exports.postDepartmentMember = async(req, res) => {
    const data = req.body;
    DepartmentMember.create(data).then((result) => {
        // res.json({ message: 'added successfully', result });
        req.flash('info', 'department member added successfully');
        res.redirect('/department-member');
    }).catch((error) => {
        req.flash('info', error)
    })

}
exports.deleteDepartmentMember = async(req, res) => {
    DepartmentMember.destroy({ where: { userId: req.params.id } }).then((data) => {
        req.flash('info', 'deleted successfully');
        res.redirect('/department-member');
    })
}