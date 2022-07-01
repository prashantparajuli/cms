require('dotenv/config');
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes');
const passport = require('passport');
// const passportLocal = require('passport-local');
const initializePassport = require('./middlewares/passportAuth');

// initializePassport(passport);


app.set("view engine", "ejs");
app.set("views", "views");

var models = require("./models");

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(express.json());
app.use('/', router);



require('./config').dbConnector();


app.listen(process.env.PORT, () => {
    console.log('server running on localhost:3000');
});