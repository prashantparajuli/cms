const { User } = require('../models');
const bcrypt = require('bcrypt');
module.exports = {
    login: async(req, res) => {
        res.render('./auth/login');
        // const email = req.body.email;
        // const password = req.body.password;
        // try {
        //     const user = await User.findOne({
        //             where: {
        //                 email: email,
        //             }
        //         }).then(user => {
        //             if (!user) {
        //                 res.render('./auth/login');
        //                 console.log('user not exist');
        //             }
        //             const pm = bcrypt.compareSync(password, user.password);
        //             if (!pm) {
        //                 res.render('./auth/login');
        //                 console.log('pdm');
        //             }
        //             return res.render('./auth/dashboard');
        //         }).catch(err => {
        //             console.log(err);
        //         })
        // if (!user) {
        //     res.render('./auth/login');
        //     return res.json({ status: 'fail', message: 'user not found' });
        // }
        // const passwordMatch = bcrypt.compareSync(password, user.password);
        // if (!passwordMatch) {
        //     res.render('./auth/login');
        //     res.json({ status: 'fail', message: 'email/password doesnot patch' })
        // }
        // return res.render('./auth/dashboard');
        // } catch (err) {
        //     console.log(err);
        // }
    },
}