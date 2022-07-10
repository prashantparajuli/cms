const { Department } = require('../models');

exports.getAddDepartment = (req, res) => {
    res.render('./admin/department/add-department')
}
exports.addDepartment = (req, res) => {
    const dept = req.body
    Department.create(dept).then((data) => {
        req.flash('info', 'department added successfully');
        res.redirect('/department');
    }).catch((error) => {
        console.log(error);
    })

}
exports.getDepartment = (req, res) => {
    Department.findAll().then((data) => {
        res.json(data)
            // res.render('./admin/department/view-department', { data: data })
    }).catch((error) => {
        console.log(error)
    })
}
exports.getOneDepartment = (req, res) => {
    Department.findOne({ where: { id: req.params.id } }).then((data) => {
        if (!data) {
            req.flash('error', 'Department not found')
            res.redirect('/department');

        }
        res.render('./admin/department/edit-department', { data: data })
    }).catch((error) => {
        console.log(error)
    })
}
exports.updateDepartment = async(req, res) => {
        const dept = req.body;
        Department.update(dept, { where: { id: req.params.id } }).then((result) => {
            req.flash('info', 'updated successfully');
            res.redirect('/department');
        }).catch((error) => {
            req.flash('error', error)
        })
    },
    exports.deleteDepartment = (req, res) => {
        Department.destroy({ where: { id: req.params.id } }).then((data) => {
            req.flash('info', 'deleted successfully');
            res.redirect('/department');
        })
    }