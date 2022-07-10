const { DepartmentMember } = require('../models');
// exports.getDepartmentMember = () => {

// }
exports.postDepartmentMember = async(req, res) => {
    const data = req.body;
    DepartmentMember.create(data).then((result) => {
        res.json({ message: 'added successfully', result });
        // req.flash('info', 'department member added successfully');
        // res.redirect('/department-member');
    }).catch((error) => {
        req.flash('info', error)
    })

}