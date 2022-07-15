const { User } = require('../models');
const bcrypt = require('bcrypt');
module.exports = {
    login: async(req, res) => {
        res.render('./auth/login');
    },
    register: async(req, res) => {
        res.render('../auth/register')
    },
    addUser: async(req, res) => {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
        }
        User.create(data).then((result) => {
            res.json({ message: 'User created successfully', result: result });
        }).catch((error) => {
            res.send(error);
        })
    },
    getUser: async(req, res) => {
        await User.findAll().then((result) => {
            res.json(result);
        }).catch((error) => {
            res.send(error);
        })
    },
    getUserById: async(req, res) => {
        await User.findOne({ where: { id: req.params.id } }).then((data) => {
            res.status(200).json({ data: data });
        }).catch((error) => {
            res.send(error);
        })
    }

}