require('dotenv/config');
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');

const initializePassport = require('./middlewares/passportAuth');
initializePassport(passport);

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

app.get('/', (req, res) => {
    res.send(`http//localhost:${process.env.PORT}/login to login and view content`)
})
require('./config').dbConnector();


app.listen(process.env.PORT, () => {
    console.log('server running on localhost:3000');
});