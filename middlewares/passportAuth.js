const passport = require('passport');
const passportLocal = require('passport-local')
const LocalStrategy = require('passport-local').Strategy;

// const { authenticate } = require('passport');

//LOCAL SIGNIN
// passport.use('local-signin', new LocalStrategy(

//     {

//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true // allows us to pass back the entire request to the callback
//     },

//     function(req, email, password, done) {
//         var User = user;
//         var isValidPassword = function(userpass, password) {
//             return bcrypt.compareSync(password, userpass);
//         }
//         User.findOne({
//             where: {
//                 email: email
//             }
//         }).then(function(user) {

//             if (!user) {

//                 return done(null, false, {
//                     message: 'Email does not exist'
//                 });

//             }

//             if (!isValidPassword(user.password, password)) {

//                 return done(null, false, {
//                     message: 'Incorrect password.'
//                 });

//             }


//             var userinfo = user.get();
//             return done(null, userinfo);


//         }).catch(function(err) {

//             console.log("Error:", err);

//             return done(null, false, {
//                 message: 'Something went wrong with your Signin'
//             });

//         });


//     }

// ));

//wds
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;
const { User } = require('../models');



function initializePassport(passport) {
    const authenticateUser = async(email, password, done) => {
        const user = User.findOne({ WHERE: { email: req.body.email } })
        if (!user) {
            return done(null, false, { message: 'email doesnot exists' });
        }
        try {
            if (await bcrypt.compareSync(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'password doesnot match' });
            }
        } catch (err) {
            return done(err);
        }
    }
    passport.use(new localStrategy({
            usernameField: 'email',
        },
        authenticateUser
    ))
    passport.serializeUser((user, done) => {
        done(null, user)
    })
    passport.deserializeUser((id, done) => {
        done(null, user.id)
    })
}
module.exports = initializePassport;