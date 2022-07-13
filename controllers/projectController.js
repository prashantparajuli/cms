const { Project } = require('../models');


exports.getAddProject = (req, res) => {
        res.render('./admin/project/add-project');
    },

    exports.viewProject = (req, res) => {
        Project.findAll().then((data) => {
            if (!data) return req.flash('info', 'No data for project');
            res.render('./admin/project/view-project', { data: data });
            //res.json({ data: data });
        }).catch((error) => {
            console.log(error)
        })
    }

exports.addProject = (req, res) => {
    const data = req.body;
    Project.create(data).then((result) => {
        req.flash('info', 'project added successfully');
        res.redirect('/project');
        //res.json({ message: 'project added successfully', result: result });
    }).catch((error) => {
        console.log(error)
    })
}
exports.getOneProject = (req, res) => {
    Project.findOne({ where: { id: req.params.id } }).then((data) => {
        if (!data) {
            req.flash('error', 'Project not found')
            res.redirect('/project');

        }
        res.render('./admin/project/edit-project', { data: data })
    }).catch((error) => {
        console.log(error)
    })
}
exports.updateProject = (req, res) => {

        console.log(req.body)
        const proj = req.body;
        Project.update(proj, { where: { id: req.params.id } }).then((result) => {
            req.flash('info', 'updated successfully');
            res.redirect('/project');
        }).catch((error) => {
            req.flash('error', error)
        })
    },
    exports.deleteProject = (req, res) => {
        Project.destroy({ where: { id: req.params.id } }).then((data) => {
            req.flash('info', 'deleted successfully');
            res.redirect('/project');
        })
    }