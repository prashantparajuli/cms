const { Project } = require('../models');


exports.getAddProject = (req, res) => {
        res.render('./admin/project/add-project');
    },

    exports.viewProject = (req, res) => {
        Project.findAll().then((data) => {
            if (!data) return req.flash('info', 'No data for project');
            res.render('./admin/project/view-project', { data: data })
        }).catch((error) => {
            console.log(error)
        })
    }

exports.addProject = (req, res) => {
    const data = req.body;
    Project.create(data).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log(error)
    })
}