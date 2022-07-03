const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');
const bcrypt = require('bcrypt');

function initialize(passport) {
    const authenticateUser = async(email, password, done) => {
        if (email == null || password == null) {
            return done(null, false, { message: 'enter email/pass' })
        }
        console.log(email)
        console.log(password)
        const user = await User.findOne({ where: { email } })
        console.log(user);
        console.log(user.password);
        if (!user) {
            return done(null, false, { message: 'user doesnot exists' });
        }
        try {
            // console.log(user);
            // console.log(user.email);
            // console.log(user.firstName);
            // console.log(user.password)
            // const hp = bcrypt.hashSync(password, 10);
            // console.log(hp)
            const passwordMatch = await bcrypt.compareSync(password, user.password)
            if (!passwordMatch) {
                return done(null, false, { message: 'email/password doesnot match' })
            } else {
                return done(null, user);
            };

        } catch (err) {
            return done(err)
        }

    }
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, authenticateUser))
    passport.serializeUser((user, done) => {
        done(null, user.id);
    })
    passport.deserializeUser((id, done) => {

        done(null, id);

    })
}
module.exports = initialize;