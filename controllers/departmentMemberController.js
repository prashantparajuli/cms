const { Department, DepartmentMember, User } = require('../models');

exports.getDepartmentMember = (req, res) => {
    DepartmentMember.findAll({ include: [{ model: Department, as: 'department' }, { model: User, as: 'user' }] }).then((data) => {
        console.log(data)
        res.render('./admin/department/department-member/view-department-member', { data: data });
    }).catch((error) => {
        res.send(error);
    })

}
exports.getAddDepartmentMember = async(req, res) => {
    res.render('./admin/department/department-member/add-department-member');
}
exports.postDepartmentMember = async(req, res) => {
    const data = req.body;
    DepartmentMember.create(data).then((result) => {
        // res.json({ message: 'added successfully', result });
        req.flash('info', 'department member added successfully');
        res.redirect('/department/department-member');
    }).catch((error) => {
        req.flash('info', error)
    })

}
exports.deleteDepartmentMember = (req, res) => {
    DepartmentMember.destroy({ where: { id: req.params.id } }).then((data) => {
        req.flash('info', 'deleted successfully');
        res.redirect('department/department-member');
    })
}